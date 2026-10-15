/* =====================================================================
   titan.js – Motion layer for the public site (inspired by titanintake.com)
   - Word-by-word headline reveal
   - Scroll reveal (fade-up + blur) incl. content rendered later by script.js
   - Animated number counters
   - Hero parallax
   - Navbar "scrolled" state
   ===================================================================== */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Split headline into words ---------- */
  function splitHeadlines() {
    document.querySelectorAll('[data-split]').forEach((el) => {
      let i = 0;
      const wrapText = (node) => {
        const frag = document.createDocumentFragment();
        node.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          const outer = document.createElement('span');
          outer.className = 'split-word';
          const inner = document.createElement('span');
          inner.textContent = part;
          inner.style.setProperty('--d', `${150 + i++ * 70}ms`);
          outer.appendChild(inner);
          frag.appendChild(outer);
        });
        return frag;
      };
      // Walk children so <em> etc. keep their styling
      Array.from(el.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          el.replaceChild(wrapText(child), child);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          Array.from(child.childNodes).forEach((c) => {
            if (c.nodeType === Node.TEXT_NODE) child.replaceChild(wrapText(c), c);
          });
        }
      });
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('split-ready')));
    });
  }

  /* ---------- 2. Scroll reveal ---------- */
  const io = 'IntersectionObserver' in window && !reduceMotion
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    : null;

  function observe(el, delay) {
    if (!el || el.dataset.revealBound) return;
    el.dataset.revealBound = '1';
    el.classList.add('reveal');
    if (delay !== undefined && !el.style.getPropertyValue('--d')) el.style.setProperty('--d', `${delay}ms`);
    if (io) io.observe(el); else el.classList.add('in');
  }

  function bindStatic() {
    // Elements already marked in markup
    document.querySelectorAll('.reveal').forEach((el) => observe(el));
    // Section headers + main blocks of every content section
    document.querySelectorAll('main > section:not(.titan-hero) > div > *').forEach((el, idx) => observe(el, (idx % 3) * 120));
    // Footer columns
    document.querySelectorAll('body > footer .grid > *').forEach((el, idx) => observe(el, idx * 100));
  }

  // Dynamic containers populated by script.js (articles, announcements, gallery)
  const DYNAMIC = ['#articles-grid', '#announcements-container', '#gallery-grid'];
  function bindDynamic() {
    DYNAMIC.forEach((sel) => {
      const box = document.querySelector(sel);
      if (!box) return;
      const apply = () => Array.from(box.children).forEach((c, i) => {
        // Re-renders (filter/search) create fresh nodes -> animate again
        observe(c, (i % 4) * 90);
      });
      apply();
      new MutationObserver(apply).observe(box, { childList: true });
    });
  }

  /* ---------- 3. Counters ---------- */
  function animateCounters() {
    const fmt = new Intl.NumberFormat('id-ID');
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      if (reduceMotion) { el.textContent = fmt.format(target) + suffix; return; }
      const dur = 1800, start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = fmt.format(Math.round(target * eased)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const els = document.querySelectorAll('[data-count]');
    if (!('IntersectionObserver' in window)) { els.forEach(run); return; }
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    els.forEach((el) => cio.observe(el));
  }

  /* ---------- 4. Parallax + navbar state ---------- */
  function scrollEffects() {
    const header = document.getElementById('main-header');
    const layers = document.querySelectorAll('[data-parallax]');
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      if (header) header.classList.toggle('scrolled', y > 40);
      if (!reduceMotion) {
        layers.forEach((l) => {
          if (y < window.innerHeight * 1.2) l.style.transform = `translate3d(0, ${y * parseFloat(l.dataset.parallax)}px, 0)`;
        });
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  document.addEventListener('DOMContentLoaded', () => {
    splitHeadlines();
    bindStatic();
    bindDynamic();
    animateCounters();
    scrollEffects();
  });
})();

