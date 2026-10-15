/**
 * Interactive Logic for Minimalist School Website
 */

// Sample Data for Articles
const articlesData = [
  {
    id: 1,
    category: "Prestasi",
    title: "Siswa SMAN 1 Halmahera Timur Raih Medali Emas di Olimpiade Sains Nasional 2026",
    date: "10 Oktober 2026",
    author: "Tim Humas",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
    summary: "Tim delegasi bidang Fisika dan Matematika berhasil membawa pulang medali emas setelah bersaing dengan ratusan siswa terbaik se-Indonesia.",
    content: `
      <p class="mb-4 leading-relaxed">Prestasi membanggakan kembali ditorehkan oleh siswa-siswi SMA Negeri 1 Halmahera Timur dalam ajang bergengsi <strong>Olimpiade Sains Nasional (OSN) 2026</strong> yang diselenggarakan di Jakarta pada awal bulan ini.</p>
      <p class="mb-4 leading-relaxed">Ananda Muhammad Fikri (Kelas XI MIPA 1) sukses meraih Medali Emas untuk kategori Fisika Terapan, sementara rekannya Nadia Azzahra (Kelas XII MIPA 2) meraih Medali Perak di bidang Matematika Analitik.</p>
      <blockquote class="p-4 my-6 border-l-4 border-slate-800 bg-slate-50 italic text-slate-700">
        "Keberhasilan ini merupakan buah dari dedikasi belajar, dukungan pembimbing bimbingan khusus sains sekolah, dan doa restu para orang tua. Kami percaya setiap potensi murid berhak mendapatkan ruang tumbuh maksimal."
        <span class="block mt-2 not-italic font-medium text-slate-900">— Kepala Sekolah SMA Negeri 1 Halmahera Timur</span>
      </blockquote>
      <p class="mb-4 leading-relaxed">Pihak sekolah senantiasa berkomitmen menyediakan fasilitas laboratorium terkini serta bimbingan intensif berkala guna mencetak talenta muda berdaya saing global.</p>
    `
  },
  {
    id: 2,
    category: "Akademik",
    title: "Penerapan Green Science Lab dalam Penguatan Kurikulum Merdeka",
    date: "05 Oktober 2026",
    author: "Wakasek Kurikulum",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
    summary: "Inovasi pembelajaran berbasis riset ramah lingkungan diperkenalkan guna menumbuhkan kesadaran ekologis dan daya pikir kritis generasi muda.",
    content: `
      <p class="mb-4 leading-relaxed">Dalam rangka mewujudkan pembelajaran berbasis projek yang berkelanjutan, SMA Negeri 1 Halmahera Timur meresmikan inisiatif <em>Green Science Lab</em> pada semester ganjil tahun ajaran ini.</p>
      <p class="mb-4 leading-relaxed">Program ini mengintegrasikan disiplin Biologi, Kimia Terapan, dan Pertanian Modern (Hidroponik cerdas). Peserta didik diajak secara langsung untuk merancang eksperimen pengolahan limbah organik dan pengujian kualitas air di sekitar lingkungan sekolah.</p>
      <p class="leading-relaxed">Metode pembelajaran kolaboratif ini tidak hanya meningkatkan literasi ilmiah, namun juga membangun kebiasaan tanggung jawab sosial dan kepedulian terhadap kelestarian alam.</p>
    `
  },
  {
    id: 3,
    category: "Kegiatan",
    title: "Gelar Karya Seni Budaya & Technopreneur Expo 2026",
    date: "28 September 2026",
    author: "OSIS & Kesiswaan",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    summary: "Pentas kreasi seni tradisi, modern music chamber, dan pameran prototipe aplikasi digital karya kolaborasi lintas angkatan.",
    content: `
      <p class="mb-4 leading-relaxed">Ratusan karya kreatif siswa dipamerkan secara terbuka dalam gelaran tahunan <strong>Haltim Art & Technopreneur Expo 2026</strong> di SMA Negeri 1 Halmahera Timur. Acara ini dihadiri oleh perwakilan perguruan tinggi mitra, orang tua murid, dan pemerhati seni pendidikan.</p>
      <p class="mb-4 leading-relaxed">Selain pertunjukan musik tradisional Maluku Utara dan tari kreasi daerah, pengunjung disuguhi demo aplikasi mobile buatan siswa peminatan Rekayasa Perangkat Lunak, seperti aplikasi bank sampah sekolah dan portal perpustakaan digital.</p>
      <p class="leading-relaxed">Ajang ini membuktikan bahwa kreativitas seni dan penguasaan sains teknologi dapat bersinergi secara harmonis dalam karakter pelajar modern.</p>
    `
  },
  {
    id: 4,
    category: "Akademik",
    title: "Workshop Literasi Digital & Etika Artificial Intelligence Bagi Siswa",
    date: "20 September 2026",
    author: "Laboratorium Komputer",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    summary: "Mempersiapkan siswa menyikapi perkembangan AI secara etis, produktif, dan aman untuk menunjang kegiatan riset akademik.",
    content: `
      <p class="mb-4 leading-relaxed">Menghadapi era akselerasi teknologi AI, sekolah memfasilitasi lokakarya interaktif bertajuk <em>"Navigating AI: Ethics, Critical Thinking, and Academic Honesty"</em>.</p>
      <p class="mb-4 leading-relaxed">Hadir sebagai narasumber praktisi data science terkemuka yang memaparkan cara cerdas memanfaatkan piranti kecerdasan buatan sebagai sarana penunjang riset pustaka, tanpa mengorbankan orisinalitas ide dan integritas karya ilmiah.</p>
      <p class="leading-relaxed">Siswa dibekali kemampuan verifikasi fakta, teknik prompt engineering yang efektif, serta pemahaman hak cipta digital.</p>
    `
  }
];

// Sample Data for Announcements
const announcementsData = [
  {
    id: 1,
    priority: "PENTING",
    category: "Akademik",
    title: "Jadwal Asesmen Sumatif Tengah Semester (ASTS) Ganjil TA 2026/2027",
    date: "15 Oktober 2026",
    statusText: "Wajib Diikuti",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    description: "Pelaksanaan Asesmen Sumatif Tengah Semester akan diselenggarakan secara luring berbasis CBT (Computer Based Test). Seluruh siswa wajib memastikan perangkat dan akun portal telah terverifikasi.",
    details: `
      <ul class="list-disc pl-5 space-y-2 text-slate-700">
        <li><strong>Tanggal Pelaksanaan:</strong> 20 - 27 Oktober 2026</li>
        <li><strong>Waktu:</strong> Pukul 07.30 - 13.00 WIB</li>
        <li><strong>Ruang Ujian:</strong> Lab CBT 1-4 dan Ruang Kelas Terjadwal</li>
        <li><strong>Ketentuan:</strong> Seragam resmi lengkap sesuai jadwal harian, membawa kartu ujian fisik yang telah dicap bagian tata usaha.</li>
      </ul>
      <div class="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600">
        Kartu ujian dapat diunduh mandiri melalui portal siswa mulai tanggal 16 Oktober 2026.
      </div>
    `
  },
  {
    id: 2,
    priority: "PPDB",
    category: "Penerimaan",
    title: "Pembukaan Pendaftaran Peserta Didik Baru (PPDB) Jalur Prestasi & Reguler",
    date: "01 Oktober 2026",
    statusText: "Pendaftaran Dibuka",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Pendaftaran siswa baru tahun ajaran 2027/2028 resmi dibuka. Tersedia program beasiswa penuh untuk juara kompetisi sains, tahfidz, dan talenta seni nasional.",
    details: `
      <ul class="list-disc pl-5 space-y-2 text-slate-700">
        <li><strong>Jalur Prestasi Akademik & Non-Akademik:</strong> 1 Oktober - 15 November 2026</li>
        <li><strong>Jalur Reguler (Tes Potensi Skolastik):</strong> 1 November - 20 Desember 2026</li>
        <li><strong>Dokumen Persyaratan:</strong> Rapor SMP semester 1-5, sertifikat kejuaraan (bila ada), fotokopi KK & Akta Lahir.</li>
      </ul>
      <div class="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600">
        Silakan klik tombol <em>Portal PPDB</em> di bilah navigasi atas untuk registrasi formulir daring.
      </div>
    `
  },
  {
    id: 3,
    priority: "UMUM",
    category: "Kesiswaan",
    title: "Pertemuan Paguyuban Orang Tua Siswa & Pembagian Laporan Portofolio",
    date: "28 September 2026",
    statusText: "Agenda Sekolah",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Undangan kepada seluruh orang tua / wali murid kelas X, XI, dan XII untuk menghadiri evaluasi capaian belajar berkala dan konsultasi karier perguruan tinggi.",
    details: `
      <ul class="list-disc pl-5 space-y-2 text-slate-700">
        <li><strong>Hari & Tanggal:</strong> Sabtu, 31 Oktober 2026</li>
        <li><strong>Waktu:</strong> Sesi 1 (Kelas X & XI) 08.00 - 10.30 WIT | Sesi 2 (Kelas XII) 11.00 - 13.30 WIT</li>
        <li><strong>Tempat:</strong> Aula Pertemuan SMA Negeri 1 Halmahera Timur</li>
        <li><strong>Agenda:</strong> Paparan progres kurikulum, klinik bimbingan konseling masuk PTN/Kedinasan, dan konsultasi tatap muka wali kelas.</li>
      </ul>
    `
  }
];

// State penampung data dinamis dari Supabase (dengan fallback ke mock data jika belum ada)
let liveArticles = [...articlesData];
let liveAnnouncements = [...announcementsData];

// Sample Data for Gallery
const galleryData = [
  {
    id: 1,
    title: "Gedung Utama & Lapangan Upacara",
    category: "fasilitas",
    categoryLabel: "Fasilitas",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80",
    description: "Arsitektur gedung sekolah yang ramah lingkungan dengan sirkulasi udara alami dan area terbuka hijau luas."
  },
  {
    id: 2,
    title: "Laboratorium Sains & Riset Modern",
    category: "fasilitas",
    categoryLabel: "Fasilitas",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    description: "Fasilitas laboratorium kimia, biologi, dan fisika berstandar internasional untuk mendukung riset siswa."
  },
  {
    id: 3,
    title: "Perpustakaan Digital & Ruang Baca",
    category: "fasilitas",
    categoryLabel: "Fasilitas",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
    description: "Suasana perpustakaan tenang dengan koleksi puluhan ribu buku fisik, e-journal, dan bilik diskusi nyaman."
  },
  {
    id: 4,
    title: "Kolaborasi Tim Robotika Sekolah",
    category: "kegiatan",
    categoryLabel: "Kegiatan Siswa",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80",
    description: "Aktivitas ekstrakurikuler robotika saat merakit sensor kendali otomasi untuk kompetisi pelajar nasional."
  },
  {
    id: 5,
    title: "Penyerahan Trofi Prestasi Tingkat Nasional",
    category: "prestasi",
    categoryLabel: "Prestasi",
    image: "https://images.unsplash.com/photo-1567168544686-ab7d6f564757?auto=format&fit=crop&w=1000&q=80",
    description: "Apresiasi kepada kontingen siswa berprestasi dalam apel bendera senin pagi bersama pimpinan sekolah."
  },
  {
    id: 6,
    title: "Pentas Seni Budaya Tradisional",
    category: "kegiatan",
    categoryLabel: "Kegiatan Siswa",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
    description: "Pertunjukan seni tari kreasi nusantara oleh sanggar seni tari siswa SMAN 1 Halmahera Timur dalam festival budaya."
  },
  {
    id: 7,
    title: "Ruang Komputer & Multimedia",
    category: "fasilitas",
    categoryLabel: "Fasilitas",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    description: "Ruang multimedia canggih untuk kegiatan coding, desain grafis, dan pelaksanaan asesmen berbasis komputer."
  },
  {
    id: 8,
    title: "Kejuaraan Olahraga Antar Sekolah",
    category: "prestasi",
    categoryLabel: "Prestasi",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80",
    description: "Kemenangan kontingen olahraga basket SMA Negeri 1 Halmahera Timur dalam turnamen pelajar daerah."
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup navigation
  setupNavigation();

  // Render initial contents
  renderArticles(articlesData);
  renderAnnouncements(announcementsData);
  renderGallery(galleryData);

  // Setup filters & interactions
  setupProfileTabs();
  setupArticlesSearchAndFilter();
  setupGalleryFilter();
  setupContactForm();
  setupLightbox();
  setupModals();

  // Inisialisasi Sinkronisasi Realtime Supabase (Direktori Guru)
  initFrontSupabase();
});

/* ----------------------------------------------------
 * Navigation & Scroll Behavior
 * ---------------------------------------------------- */
function setupNavigation() {
  const header = document.getElementById('main-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const backToTopBtn = document.getElementById('back-to-top');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky header background transition
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('shadow-sm', 'border-b', 'border-slate-100');
    } else {
      header.classList.remove('shadow-sm', 'border-b', 'border-slate-100');
    }

    // Back to top button visibility
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
    }

    // Highlight active link
    highlightActiveNav();
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      } else {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close mobile menu on click
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  }

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Highlight current active section in nav
function highlightActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 160;
  const profilBtn = document.getElementById('navProfilBtn');
  let activeSectionId = null;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      activeSectionId = sectionId;
    }
  });

  if (activeSectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === `#${activeSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Profil parent highlight if profil or direktori is active
    if (profilBtn) {
      if (['profil', 'direktori'].includes(activeSectionId)) {
        profilBtn.classList.add('active');
      } else {
        profilBtn.classList.remove('active');
      }
    }
  }
}

/* ----------------------------------------------------
 * Profile Tabs (Visi, Misi, Sejarah, Sambutan)
 * ---------------------------------------------------- */
function setupProfileTabs() {
  const tabBtns = document.querySelectorAll('.profile-tab-btn');
  const tabPanes = document.querySelectorAll('.profile-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      // Update button active state
      tabBtns.forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white', 'shadow-sm');
        b.classList.add('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
      });
      btn.classList.add('bg-slate-900', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');

      // Update pane visibility
      tabPanes.forEach(pane => {
        if (pane.id === `tab-${target}`) {
          pane.classList.remove('hidden');
        } else {
          pane.classList.add('hidden');
        }
      });
    });
  });
}

/* ----------------------------------------------------
 * Articles Rendering & Search/Filter
 * ---------------------------------------------------- */
function renderArticles(list) {
  const container = document.getElementById('articles-grid');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <i data-lucide="search-x" class="w-10 h-10 mx-auto mb-2 opacity-50"></i>
        <p class="text-base font-normal">Tidak ada artikel atau berita yang sesuai dengan kata kunci.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = list.map(item => `
    <article class="solid-bento-card bg-white p-5 flex flex-col group">
      <div class="img-zoom-container relative h-52 rounded-[20px] overflow-hidden bg-[#2d2c29]/5 mb-5">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <span class="absolute top-3.5 left-3.5 inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#1b2838]/90 text-[#fbf7eb] shadow-sm backdrop-blur-md border border-white/10">
          ${item.category}
        </span>
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2.5 text-xs font-mono text-neutral-400 mb-2.5">
            <span>${item.date}</span>
            <span>•</span>
            <span>${item.author}</span>
          </div>
          <h3 class="font-serif text-xl font-bold text-[#2d2c29] group-hover:text-black transition-colors line-clamp-2 leading-snug mb-3">
            ${item.title}
          </h3>
          <p class="text-neutral-600 text-sm leading-relaxed line-clamp-3 mb-5">
            ${item.summary}
          </p>
        </div>
        <button onclick="openArticleModal(${item.id})" class="inline-flex items-center justify-between gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#2d2c29] group-hover:text-black pt-3 border-t border-black/5 transition-colors">
          <span>Baca Selengkapnya</span>
          <span class="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-primary text-[#2d2c29] flex items-center justify-center transition-all">
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </span>
        </button>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function setupArticlesSearchAndFilter() {
  const searchInput = document.getElementById('articles-search');
  const filterBtns = document.querySelectorAll('.article-filter-btn');

  let currentCategory = 'all';
  let searchQuery = '';

  function applyFilter() {
    let source = (liveArticles && liveArticles.length) ? liveArticles : articlesData;
    let filtered = source.filter(item => {
      const matchCat = currentCategory === 'all' || item.category.toLowerCase() === currentCategory.toLowerCase();
      const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
    renderArticles(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      applyFilter();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-600');
      });
      btn.classList.add('bg-slate-900', 'text-white');
      btn.classList.remove('bg-slate-100', 'text-slate-600');

      currentCategory = btn.dataset.category;
      applyFilter();
    });
  });
}

/* ----------------------------------------------------
 * Announcements Rendering
 * ---------------------------------------------------- */
function renderAnnouncements(list) {
  const container = document.getElementById('announcements-container');
  if (!container) return;

  container.innerHTML = list.map(item => `
    <div class="solid-bento-card p-6 sm:p-7 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6 group">
      <div class="flex items-start gap-4">
        <div class="hidden sm:flex flex-col items-center justify-center w-14 h-14 rounded-[18px] bg-[#1b2838] text-primary shrink-0 group-hover:scale-105 transition-transform">
          <i data-lucide="bell" class="w-5 h-5 text-primary"></i>
          <span class="text-[9px] font-mono font-bold uppercase tracking-wider text-[#fbf7eb]/80 mt-0.5">INFO</span>
        </div>
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2.5">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${item.badgeColor}">
              ${item.priority}
            </span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#fbf7eb] text-[#2d2c29] border border-black/5">
              ${item.category}
            </span>
            <span class="text-xs font-mono text-neutral-400 ml-1">
              ${item.date}
            </span>
          </div>
          <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#2d2c29] mb-2 leading-snug group-hover:text-black transition-colors">
            ${item.title}
          </h3>
          <p class="text-neutral-600 text-sm leading-relaxed max-w-3xl">
            ${item.description}
          </p>
        </div>
      </div>
      <div class="shrink-0 pt-2 md:pt-0">
        <button onclick="openAnnouncementModal(${item.id})" class="btn-solid-secondary w-full md:w-auto px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2">
          <span>Lihat Detail</span>
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* ----------------------------------------------------
 * Gallery Rendering & Lightbox
 * ---------------------------------------------------- */
function renderGallery(list) {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  container.innerHTML = list.map((item, index) => `
    <div class="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] cursor-pointer shadow-sm border border-slate-100" onclick="openLightbox(${index})">
      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
        <span class="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">${item.categoryLabel}</span>
        <h4 class="font-serif text-base sm:text-lg font-bold leading-tight mb-1">${item.title}</h4>
        <p class="text-xs text-slate-200 line-clamp-1">${item.description}</p>
        <div class="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-white/90">
          <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i> Perbesar Gambar
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function setupGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-600');
      });
      btn.classList.add('bg-slate-900', 'text-white');
      btn.classList.remove('bg-slate-100', 'text-slate-600');

      const cat = btn.dataset.filter;
      if (cat === 'all') {
        renderGallery(galleryData);
      } else {
        const filtered = galleryData.filter(g => g.category === cat);
        renderGallery(filtered);
      }
    });
  });
}

// Lightbox state
let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  const item = galleryData[index];
  if (!item) return;

  const lightbox = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const desc = document.getElementById('lightbox-desc');
  const count = document.getElementById('lightbox-counter');

  img.src = item.image;
  title.textContent = item.title;
  desc.textContent = item.description;
  count.textContent = `${index + 1} / ${galleryData.length}`;

  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
  openLightbox(currentLightboxIndex);
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
  openLightbox(currentLightboxIndex);
}

function setupLightbox() {
  const closeBtn = document.getElementById('lightbox-close');
  const nextBtn = document.getElementById('lightbox-next');
  const prevBtn = document.getElementById('lightbox-prev');
  const backdrop = document.getElementById('lightbox-backdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox-modal');
    if (!lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    }
  });
}

/* ----------------------------------------------------
 * Modals (Article & Announcement)
 * ---------------------------------------------------- */
function formatArticleContent(content) {
  if (!content) return '';
  // Check if content already contains block HTML tags
  const hasBlockTags = /<(p|div|blockquote|h[1-6]|ul|ol|table)\b[^>]*>/i.test(content);
  if (hasBlockTags) {
    return content;
  }
  // Convert plain text newlines into clean paragraph tags
  const paragraphs = content.split(/\r?\n\s*\r?\n/);
  return paragraphs
    .map(p => p.trim())
    .filter(Boolean)
    .map(p => `<p class="mb-4 leading-relaxed">${p.replace(/\r?\n/g, '<br>')}</p>`)
    .join('');
}

function openArticleModal(id) {
  const item = (liveArticles || []).find(a => a.id == id) || articlesData.find(a => a.id == id);
  if (!item) return;

  const modal = document.getElementById('generic-modal');
  const title = document.getElementById('modal-title');
  const badge = document.getElementById('modal-badge');
  const meta = document.getElementById('modal-meta');
  const body = document.getElementById('modal-body');
  const img = document.getElementById('modal-img');

  title.textContent = item.title;
  badge.textContent = item.category;
  badge.className = "badge-pill bg-slate-900 text-white";
  meta.textContent = `${item.date} • Ditulis oleh ${item.author}`;
  img.src = item.image;
  img.classList.remove('hidden');

  body.className = "article-rich-content text-slate-700 leading-relaxed";
  body.innerHTML = formatArticleContent(item.content);

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
}

function openAnnouncementModal(id) {
  const item = (liveAnnouncements || []).find(a => a.id == id) || announcementsData.find(a => a.id == id);
  if (!item) return;

  const modal = document.getElementById('generic-modal');
  const title = document.getElementById('modal-title');
  const badge = document.getElementById('modal-badge');
  const meta = document.getElementById('modal-meta');
  const body = document.getElementById('modal-body');
  const img = document.getElementById('modal-img');

  title.textContent = item.title;
  badge.textContent = item.priority;
  badge.className = `badge-pill border ${item.badgeColor}`;
  meta.textContent = `Tanggal Rilis: ${item.date} • Kategori: ${item.category}`;
  img.classList.add('hidden'); // No photo for announcements

  body.className = "article-rich-content text-slate-700 leading-relaxed";
  body.innerHTML = `
    <p class="text-base text-slate-800 leading-relaxed mb-6 font-medium">${item.description}</p>
    <div class="border-t border-slate-100 pt-5">
      <h5 class="text-xs font-mono font-semibold text-slate-900 mb-3 uppercase tracking-wider">Detail Informasi:</h5>
      <div>${formatArticleContent(item.details)}</div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
}

function closeGenericModal() {
  const modal = document.getElementById('generic-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function setupModals() {
  const closeBtn = document.getElementById('generic-modal-close');
  const backdrop = document.getElementById('generic-modal-backdrop');
  if (closeBtn) closeBtn.addEventListener('click', closeGenericModal);
  if (backdrop) backdrop.addEventListener('click', closeGenericModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('generic-modal');
      if (modal && !modal.classList.contains('hidden')) {
        closeGenericModal();
      }
    }
  });
}

/* ----------------------------------------------------
 * Contact Form Simulation
 * ---------------------------------------------------- */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notification');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> Mengirim...
      `;

      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast("Pesan Anda telah berhasil dikirim! Tim administrasi sekolah akan segera menghubungi Anda.");
      }, 900);
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 4500);
}

// PPDB quick action
function openPPDBInfo() {
  openAnnouncementModal(2); // ID 2 is PPDB
}

/* ====================================================
 * SUPABASE LIVE SYNC: DIREKTORI TENAGA PENDIDIK (GURU)
 * ==================================================== */
const FRONT_SUPABASE_URL = 'https://fvrquorbmbykoamjzudh.supabase.co';
const FRONT_SUPABASE_ANON_KEY = 'sb_publishable_vUVpmjIP6s963HSm3zC5Lw_czjjAP_l';

let frontSb = null;
let frontGuruList = [];
let frontGuruSearch = '';

function initFrontSupabase() {
  if (window.supabase && typeof window.supabase.createClient === 'function') {
    frontSb = window.supabase.createClient(FRONT_SUPABASE_URL, FRONT_SUPABASE_ANON_KEY);
  } else {
    console.warn('Supabase JS SDK belum dimuat.');
    return;
  }

  // Muat data awal dari Supabase
  fetchAndRenderFrontGuru();
  fetchAndRenderFrontArticles();
  fetchAndRenderFrontAnnouncements();

  // Supabase Realtime Channels: otomatis mendeteksi perubahan data dari Dashboard Admin
  try {
    frontSb.channel('public:guru:live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'guru' }, (payload) => {
        console.log('⚡ Realtime perubahan data guru terdeteksi:', payload);
        fetchAndRenderFrontGuru(true);
      })
      .subscribe();

    frontSb.channel('public:berita:live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'berita' }, (payload) => {
        console.log('⚡ Realtime perubahan artikel berita terdeteksi:', payload);
        fetchAndRenderFrontArticles(true);
      })
      .subscribe();

    frontSb.channel('public:pengumuman:live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'pengumuman' }, (payload) => {
        console.log('⚡ Realtime perubahan pengumuman terdeteksi:', payload);
        fetchAndRenderFrontAnnouncements(true);
      })
      .subscribe();
  } catch (err) {
    console.warn('Realtime channel error:', err);
  }

  // Sinkronisasi ulang otomatis saat tab aktif kembali
  window.addEventListener('focus', () => {
    fetchAndRenderFrontGuru();
    fetchAndRenderFrontArticles();
    fetchAndRenderFrontAnnouncements();
  });
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      fetchAndRenderFrontGuru();
      fetchAndRenderFrontArticles();
      fetchAndRenderFrontAnnouncements();
    }
  });
}

async function fetchAndRenderFrontGuru(showNotification = false) {
  if (!frontSb) return;
  try {
    const { data, error } = await frontSb
      .from('guru')
      .select('id, nama, mapel')
      .order('nama', { ascending: true });

    if (error) {
      console.error('Error fetching front guru:', error);
      return;
    }

    frontGuruList = data || [];

    // Update hero stat counter guru
    const heroStat = document.getElementById('heroStatGuru');
    if (heroStat) {
      heroStat.textContent = `${frontGuruList.length}+`;
      heroStat.setAttribute('data-count', frontGuruList.length);
    }

    renderFrontGuruCards();

    if (showNotification) {
      showToast('Data guru baru saja diperbarui.');
    }
  } catch (e) {
    console.error(e);
  }
}

async function fetchAndRenderFrontArticles(showNotification = false) {
  if (!frontSb) return;
  try {
    const { data, error } = await frontSb
      .from('berita')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.warn('Supabase berita info:', error.message);
      return;
    }

    if (data && data.length > 0) {
      liveArticles = data.map(b => ({
        id: b.id,
        category: b.kategori || 'Akademik',
        title: b.judul,
        date: b.tanggal,
        author: b.penulis || 'Tim Humas',
        image: b.gambar || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80',
        summary: b.ringkasan,
        content: b.isi
      }));
      renderArticles(liveArticles);
      if (showNotification) {
        showToast('Kabar & artikel baru saja diperbarui.');
      }
    }
  } catch (e) {
    console.warn(e);
  }
}

async function fetchAndRenderFrontAnnouncements(showNotification = false) {
  if (!frontSb) return;
  try {
    const { data, error } = await frontSb
      .from('pengumuman')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.warn('Supabase pengumuman info:', error.message);
      return;
    }

    if (data && data.length > 0) {
      liveAnnouncements = data.map(p => ({
        id: p.id,
        priority: p.prioritas || 'INFORMASI',
        category: p.kategori || 'Umum',
        title: p.judul,
        date: p.tanggal,
        statusText: p.prioritas || 'Aktif',
        badgeColor: p.badge_color || 'bg-blue-50 text-blue-700 border-blue-200',
        description: p.deskripsi,
        details: p.detail || p.deskripsi
      }));
      renderAnnouncements(liveAnnouncements);
      if (showNotification) {
        showToast('Pengumuman baru saja diperbarui.');
      }
    }
  } catch (e) {
    console.warn(e);
  }
}

function renderFrontGuruCards() {
  const container = document.getElementById('frontGuruGrid');
  const summaryText = document.getElementById('frontGuruSummaryText');
  if (!container) return;

  const query = frontGuruSearch.toLowerCase().trim();
  const filtered = frontGuruList.filter(g => {
    return (
      (g.nama && g.nama.toLowerCase().includes(query)) ||
      (g.mapel && g.mapel.toLowerCase().includes(query))
    );
  });

  if (summaryText) {
    summaryText.textContent = `Menampilkan ${filtered.length} dari ${frontGuruList.length} tenaga pendidik`;
  }

  if (!filtered.length) {
    container.innerHTML = `
      <div class="solid-bento-card col-span-full py-12 text-center text-neutral-400 text-sm bg-white p-8">
        <i data-lucide="user-x" class="w-10 h-10 mx-auto text-neutral-300 mb-3"></i>
        <p class="font-medium text-[#2d2c29]">Tidak ada data guru yang cocok.</p>
        <p class="text-xs font-mono text-neutral-400 mt-1">Coba kata kunci pencarian yang lain.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(g => {
    const initial = (g.nama || 'G').trim().charAt(0).toUpperCase();
    return `
      <div class="solid-bento-card p-5 bg-white flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300">
        <div class="w-12 h-12 rounded-[16px] bg-[#1b2838] text-primary font-serif font-bold text-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-[#2d2c29] transition-all duration-300 shadow-sm">
          ${initial}
        </div>
        <div class="min-w-0 flex-1">
          <h3 class="font-serif font-bold text-lg text-[#2d2c29] leading-snug truncate group-hover:text-black transition-colors">
            ${g.nama}
          </h3>
          <div>
            <span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#f2eefd] text-[#8b5cf6] mt-1 border border-[#8b5cf6]/20 max-w-full truncate">
              ${g.mapel || 'Tenaga Pendidik'}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function handleFrontSearchGuru(val) {
  frontGuruSearch = val;
  renderFrontGuruCards();
}


