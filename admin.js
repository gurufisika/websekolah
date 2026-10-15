// admin.js – Terhubung langsung ke Supabase Database

// Konfigurasi Supabase
const SUPABASE_URL = 'https://fvrquorbmbykoamjzudh.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_vUVpmjIP6s963HSm3zC5Lw_czjjAP_l';

let supabaseClient = null;
if (window.supabase && typeof window.supabase.createClient === 'function') {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
  console.warn('Supabase SDK belum termuat dari CDN.');
}

// Bersihkan data dummy / lokal lama dari localStorage agar hanya bersumber dari Supabase
try {
  localStorage.removeItem('sman1haltim_guru');
  localStorage.removeItem('sman1haltim_siswa');
} catch (e) {}

/* ==================== SUPABASE DATA ACCESS (GURU) ==================== */
async function fetchGuru() {
  if (!supabaseClient) {
    console.error('Supabase client tidak tersedia.');
    return [];
  }
  const { data, error } = await supabaseClient
    .from('guru')
    .select('*')
    .order('id', { ascending: true });
  if (error) {
    console.error('fetchGuru error:', error);
    showToast('Gagal memuat guru dari Supabase: ' + error.message, 'error');
    return [];
  }
  return data || [];
}

async function addGuru(record) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { data, error } = await supabaseClient
    .from('guru')
    .insert([record])
    .select();
  if (error) throw error;
  return data;
}

async function updateGuru(id, record) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { data, error } = await supabaseClient
    .from('guru')
    .update(record)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
}

async function removeGuru(id) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { error } = await supabaseClient
    .from('guru')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

/* ==================== SUPABASE DATA ACCESS (SISWA) ==================== */
async function fetchSiswa() {
  if (!supabaseClient) {
    console.error('Supabase client tidak tersedia.');
    return [];
  }
  const { data, error } = await supabaseClient
    .from('siswa')
    .select('*')
    .order('id', { ascending: true });
  if (error) {
    console.error('fetchSiswa error:', error);
    showToast('Gagal memuat siswa dari Supabase: ' + error.message, 'error');
    return [];
  }
  return data || [];
}

async function addSiswa(record) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { data, error } = await supabaseClient
    .from('siswa')
    .insert([record])
    .select();
  if (error) throw error;
  return data;
}

async function updateSiswa(id, record) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { data, error } = await supabaseClient
    .from('siswa')
    .update(record)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
}

async function removeSiswa(id) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { error } = await supabaseClient
    .from('siswa')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

/* ==================== SUPABASE DATA ACCESS (BERITA) ==================== */
async function fetchBerita() {
  if (!supabaseClient) return [];
  const { data, error } = await supabaseClient
    .from('berita')
    .select('*')
    .order('id', { ascending: false });
  if (error) {
    console.error('fetchBerita error:', error);
    showToast('Gagal memuat berita: ' + error.message, 'error');
    return [];
  }
  return data || [];
}

async function addBerita(record) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { data, error } = await supabaseClient
    .from('berita')
    .insert([record])
    .select();
  if (error) throw error;
  return data;
}

async function updateBerita(id, record) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { data, error } = await supabaseClient
    .from('berita')
    .update(record)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
}

async function removeBerita(id) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { error } = await supabaseClient
    .from('berita')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

/* ==================== SUPABASE DATA ACCESS (PENGUMUMAN) ==================== */
async function fetchPengumuman() {
  if (!supabaseClient) return [];
  const { data, error } = await supabaseClient
    .from('pengumuman')
    .select('*')
    .order('id', { ascending: false });
  if (error) {
    console.error('fetchPengumuman error:', error);
    showToast('Gagal memuat pengumuman: ' + error.message, 'error');
    return [];
  }
  return data || [];
}

async function addPengumuman(record) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { data, error } = await supabaseClient
    .from('pengumuman')
    .insert([record])
    .select();
  if (error) throw error;
  return data;
}

async function updatePengumuman(id, record) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { data, error } = await supabaseClient
    .from('pengumuman')
    .update(record)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
}

async function removePengumuman(id) {
  if (!supabaseClient) throw new Error('Supabase client belum siap');
  const { error } = await supabaseClient
    .from('pengumuman')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

// Utility for toast notifications (same as before)
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${icons[type] || '•'}</span><span>${message}</span>`;
  container.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateY(12px)'; setTimeout(() => el.remove(), 300); }, 3500);
}

/* ==================== AUTH VIA SUPABASE ==================== */
let currentUserEmail = '';

async function checkAuth() {
  if (!supabaseClient) {
    const isLogged = sessionStorage.getItem('sman1haltim_admin_logged') === 'true';
    toggleAuthUI(isLogged);
    return isLogged;
  }
  try {
    const { data: { session }, error } = await supabaseClient.auth.getSession();
    if (session && session.user) {
      sessionStorage.setItem('sman1haltim_admin_logged', 'true');
      sessionStorage.setItem('sman1haltim_admin_email', session.user.email);
      currentUserEmail = session.user.email;
      toggleAuthUI(true);
      return true;
    }
  } catch (e) {
    console.warn('checkAuth error:', e);
  }

  sessionStorage.removeItem('sman1haltim_admin_logged');
  sessionStorage.removeItem('sman1haltim_admin_email');
  toggleAuthUI(false);
  return false;
}

function toggleAuthUI(isLoggedIn) {
  const loginPage = document.getElementById('loginPage');
  const adminPanel = document.getElementById('adminPanel');
  if (loginPage) loginPage.style.display = isLoggedIn ? 'none' : 'flex';
  if (adminPanel) adminPanel.style.display = isLoggedIn ? 'flex' : 'none';

  if (isLoggedIn) {
    const email = currentUserEmail || sessionStorage.getItem('sman1haltim_admin_email') || 'Admin';
    const initial = email.charAt(0).toUpperCase();
    const avatar = document.querySelector('.header-avatar');
    if (avatar) {
      avatar.textContent = initial;
      avatar.title = email;
    }
    const welcome = document.querySelector('#page-dashboard h1');
    if (welcome) {
      welcome.textContent = `Selamat datang, ${email.split('@')[0]} 👋`;
    }
  }
}

async function login(email, password) {
  if (!supabaseClient) throw new Error('Koneksi Supabase belum siap.');
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email.trim(),
    password: password
  });
  if (error) throw error;
  sessionStorage.setItem('sman1haltim_admin_logged', 'true');
  sessionStorage.setItem('sman1haltim_admin_email', data.user.email);
  return data;
}

async function logout() {
  try {
    if (supabaseClient) {
      await supabaseClient.auth.signOut();
    }
  } catch (e) {
    console.warn('Sign out error:', e);
  }
  sessionStorage.removeItem('sman1haltim_admin_logged');
  sessionStorage.removeItem('sman1haltim_admin_email');
  window.location.reload();
}

/* ==================== MODAL HELPERS ==================== */
function openModal(id) { const el = document.getElementById(id); if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; } }
function closeModal(id) { const el = document.getElementById(id); if (el) { el.classList.remove('open'); document.body.style.overflow = ''; } }

/* ==================== SIDEBAR & NAVIGATION ==================== */
let sidebarCollapsed = false;
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainArea = document.getElementById('mainArea');
  const toggleBtn = document.getElementById('sidebarToggle');
  if (!sidebar) return;
  toggleBtn?.addEventListener('click', () => {
    sidebarCollapsed = !sidebarCollapsed;
    sidebar.classList.toggle('collapsed', sidebarCollapsed);
    mainArea.classList.toggle('expanded', sidebarCollapsed);
    if (window.innerWidth <= 900) { sidebar.classList.toggle('mobile-open', !sidebarCollapsed); sidebarCollapsed = false; }
  });
  if (window.innerWidth <= 900) {
    document.addEventListener('click', (e) => { if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) sidebar.classList.remove('mobile-open'); });
  }
}
function navigateTo(page) {
  document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  const navEl = document.querySelector(`[data-page="${page}"]`);
  if (navEl) navEl.classList.add('active');
  const titles = { dashboard: 'Dashboard', guru: 'Data Guru', siswa: 'Data Siswa', berita: 'Berita & Artikel', pengumuman: 'Pengumuman', pesan: 'Pesan Masuk' };
  document.getElementById('pageTitle').textContent = titles[page] || page;
  // Load data for the page
  if (page === 'guru') renderGuruTable();
  if (page === 'siswa') renderSiswaTable();
  if (page === 'berita') renderBeritaTable();
  if (page === 'pengumuman') renderPengumumanTable();
  if (page === 'pesan') renderPesanTable();
  if (page === 'dashboard') updateDashboard();
}

/* ==================== DASHBOARD ==================== */
async function updateDashboard() {
  try {
    const guru = await fetchGuru();
    const siswa = await fetchSiswa();
    const statGuru = document.getElementById('statGuru');
    const statSiswa = document.getElementById('statSiswa');
    const statLaki = document.getElementById('statLaki');
    const statPerempuan = document.getElementById('statPerempuan');
    if (statGuru) statGuru.textContent = guru.length;
    if (statSiswa) statSiswa.textContent = siswa.length;
    if (statLaki) statLaki.textContent = siswa.filter(s => s.jk === 'Laki-laki').length;
    if (statPerempuan) statPerempuan.textContent = siswa.filter(s => s.jk === 'Perempuan').length;
    initCharts(guru, siswa);
    buildQuickInfo(siswa);
  } catch (e) {
    console.error(e);
    showToast('Gagal load data dashboard dari Supabase.', 'error');
  }
}

function buildQuickInfo(siswa = []) {
  const el = document.getElementById('quickSiswaInfo');
  if (!el) return;
  const kelasCount = {};
  siswa.forEach(s => { kelasCount[s.kelas] = (kelasCount[s.kelas] || 0) + 1; });
  const keys = Object.keys(kelasCount).sort();
  if (!keys.length) {
    el.innerHTML = '<div style="font-size:12.5px;color:#94a3b8;padding:8px 0;text-align:center">Belum ada data siswa di database</div>';
    return;
  }
  const colors = ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#06b6d4','#ec4899','#84cc16'];
  el.innerHTML = keys.map((k, i) => `
    <div style="display:flex;align-items:center;gap:10px">
      <div style="width:10px;height:10px;border-radius:50%;background:${colors[i % colors.length]};flex-shrink:0"></div>
      <div style="flex:1;font-size:12.5px;color:#374151">${k}</div>
      <div style="font-weight:700;font-size:14px;color:#0f172a">${kelasCount[k]}</div>
      <div style="font-size:11px;color:#94a3b8">siswa</div>
    </div>
  `).join('');
}

/* ==================== CHARTS ==================== */
let charts = {};
function destroyChart(key) { if (charts[key]) { charts[key].destroy(); delete charts[key]; } }
function initCharts(guru, siswa) {
  // The chart code from previous version kept, but using passed data instead of DB.get
  // ─── Chart 1: Komposisi Siswa Per Kelas (Bar) ───
  destroyChart('kelas');
  const kelasCount = {};
  siswa.forEach(s => { kelasCount[s.kelas] = (kelasCount[s.kelas] || 0) + 1; });
  const kelasLabels = Object.keys(kelasCount).sort();
  const kelasValues = kelasLabels.map(k => kelasCount[k]);
  charts['kelas'] = new Chart(document.getElementById('chartKelas'), {
    type: 'bar',
    data: { labels: kelasLabels, datasets: [{ label: 'Jumlah Siswa', data: kelasValues, backgroundColor: ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#06b6d4','#ec4899','#84cc16'], borderRadius: 8, borderSkipped: false }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ` ${ctx.raw} siswa` } } }, scales: { y: { beginAtZero: true, ticks: { stepSize: 1, font: { size: 11 } }, grid: { color: '#f1f5f9' } }, x: { ticks: { font: { size: 10 } }, grid: { display: false } } } }
  });
  // ─── Chart 2: Gender Siswa (Doughnut) ───
  destroyChart('genderSiswa');
  const lakiSiswa = siswa.filter(s => s.jk === 'Laki-laki').length;
  const perempuanSiswa = siswa.filter(s => s.jk === 'Perempuan').length;
  charts['genderSiswa'] = new Chart(document.getElementById('chartGenderSiswa'), {
    type: 'doughnut',
    data: { labels: ['Laki-laki', 'Perempuan'], datasets: [{ data: [lakiSiswa, perempuanSiswa], backgroundColor: ['#3b82f6', '#ec4899'], borderWidth: 0, hoverOffset: 6 }] },
    options: { responsive: true, maintainAspectRatio: false, cutout: '72%', plugins: { legend: { position: 'bottom', labels: { padding: 14, font: { size: 12 } } }, tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw} siswa` } } } }
  });
  // ─── Chart 3: Jurusan Siswa (Pie) ───
  destroyChart('jurusan');
  const jurusanCount = {};
  siswa.forEach(s => { jurusanCount[s.jurusan] = (jurusanCount[s.jurusan] || 0) + 1; });
  charts['jurusan'] = new Chart(document.getElementById('chartJurusan'), {
    type: 'pie',
    data: { labels: Object.keys(jurusanCount), datasets: [{ data: Object.values(jurusanCount), backgroundColor: ['#3b82f6','#10b981','#f59e0b','#8b5cf6'], borderWidth: 0, hoverOffset: 6 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { padding: 14, font: { size: 12 } } }, tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw} siswa` } } } }
  });
  // ─── Chart 4: Status Kepegawaian Guru (Bar) ───
  destroyChart('statusGuru');
  const statusCount = {};
  guru.forEach(g => { statusCount[g.status] = (statusCount[g.status] || 0) + 1; });
  charts['statusGuru'] = new Chart(document.getElementById('chartStatusGuru'), {
    type: 'bar',
    data: { labels: Object.keys(statusCount), datasets: [{ label: 'Jumlah Guru', data: Object.values(statusCount), backgroundColor: ['#10b981','#3b82f6','#f59e0b','#ef4444'], borderRadius: 8, borderSkipped: false }] },
    options: { responsive: true, maintainAspectRatio: false, indexAxis: 'y', plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ` ${ctx.raw} guru` } } }, scales: { x: { beginAtZero: true, ticks: { stepSize: 1, font: { size: 11 } }, grid: { color: '#f1f5f9' } }, y: { ticks: { font: { size: 12 } }, grid: { display: false } } } }
  });
  // ─── Chart 5: Pendidikan Guru (Doughnut) ───
  destroyChart('pendidikanGuru');
  const pendidikanCount = {};
  guru.forEach(g => { pendidikanCount[g.pendidikan] = (pendidikanCount[g.pendidikan] || 0) + 1; });
  charts['pendidikanGuru'] = new Chart(document.getElementById('chartPendidikanGuru'), {
    type: 'doughnut',
    data: { labels: Object.keys(pendidikanCount).map(p => 'Jenjang ' + p), datasets: [{ data: Object.values(pendidikanCount), backgroundColor: ['#8b5cf6','#06b6d4','#f59e0b','#ef4444'], borderWidth: 0, hoverOffset: 6 }] },
    options: { responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { position: 'bottom', labels: { padding: 12, font: { size: 12 } } }, tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw} guru` } } } }
  });
  // ─── Chart 6: Gender Guru (Doughnut) ───
  destroyChart('genderGuru');
  const lakiGuru = guru.filter(g => g.jk === 'Laki-laki').length;
  const perempuanGuru = guru.filter(g => g.jk === 'Perempuan').length;
  charts['genderGuru'] = new Chart(document.getElementById('chartGenderGuru'), {
    type: 'doughnut',
    data: { labels: ['Laki-laki', 'Perempuan'], datasets: [{ data: [lakiGuru, perempuanGuru], backgroundColor: ['#3b82f6', '#ec4899'], borderWidth: 0, hoverOffset: 6 }] },
    options: { responsive: true, maintainAspectRatio: false, cutout: '72%', plugins: { legend: { position: 'bottom', labels: { padding: 14, font: { size: 12 } } }, tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw} guru` } } } }
  });
}

/* ==================== GURU CRUD ==================== */
let guruEditId = null;
let guruDeleteId = null;
let guruSearch = '';

async function renderGuruTable() {
  try {
    const guru = await fetchGuru();
    const filtered = guru.filter(g =>
      g.nama.toLowerCase().includes(guruSearch.toLowerCase()) ||
      g.mapel.toLowerCase().includes(guruSearch.toLowerCase()) ||
      g.nip.includes(guruSearch)
    );
    const tbody = document.getElementById('guruTableBody');
    if (!tbody) return;
    if (!filtered.length) {
      tbody.innerHTML = `<tr><td colspan="8"><div class="table-empty"><svg width="40" height="40" fill="none" stroke="#cbd5e1" stroke-width="1.5" viewBox="0 0 24 24" style="margin:0 auto 10px;display:block"><path stroke-linecap="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg><p>Tidak ada data guru ditemukan.</p></div></td></tr>`;
      document.getElementById('guruCount').textContent = '0 data';
      return;
    }
    const statusBadge = { PNS: 'badge-green', PPPK: 'badge-blue', Honorer: 'badge-yellow' };
    tbody.innerHTML = filtered.map((g, i) => `
      <tr>
        <td style="color:#94a3b8;font-size:12px">${i+1}</td>
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="table-avatar-placeholder">${g.nama.charAt(0)}</div>
            <div>
              <div style="font-weight:600;color:#0f172a">${g.nama}</div>
              <div style="font-size:11px;color:#94a3b8">${g.nip}</div>
            </div>
          </div>
        </td>
        <td>${g.mapel}</td>
        <td>${g.jabatan}</td>
        <td><span class="badge ${statusBadge[g.status] || 'badge-gray'}">${g.status}</span></td>
        <td>${g.pendidikan}</td>
        <td>${g.nohp}</td>
        <td>
          <div class="table-actions">
            <button class="action-btn edit" onclick="editGuru(${g.id})">✎ Edit</button>
            <button class="action-btn delete" onclick="confirmDeleteGuru(${g.id})">✕ Hapus</button>
          </div>
        </td>
      </tr>`).join('');
    document.getElementById('guruCount').textContent = `${filtered.length} dari ${guru.length} data`;
  } catch (e) { console.error(e); showToast('Gagal memuat data guru.', 'error'); }
}

function openGuruForm(id = null) {
  guruEditId = id;
  const isEdit = id !== null;
  document.getElementById('guruModalTitle').textContent = isEdit ? 'Edit Data Guru' : 'Tambah Data Guru';
  document.getElementById('guruForm').reset();
  if (isEdit) {
    // Populate fields – fetch the specific record
    fetchGuru().then(gurus => {
      const g = gurus.find(x => x.id === id);
      if (!g) return;
      const fields = ['nip','nama','jk','ttl','mapel','jabatan','status','pendidikan','nohp','email'];
      fields.forEach(f => { const el = document.getElementById('guru_' + f); if (el) el.value = g[f] ?? ''; });
    });
  }
  openModal('guruModal');
}

async function saveGuru() {
  const fields = ['nip','nama','jk','ttl','mapel','jabatan','status','pendidikan','nohp','email'];
  const data = {};
  let valid = true;
  fields.forEach(f => {
    const el = document.getElementById('guru_' + f);
    if (!el) return;
    const val = el.value.trim();
    if (['nip','nama','mapel','jabatan','status','pendidikan'].includes(f) && !val) { el.style.borderColor = '#ef4444'; valid = false; } else { el.style.borderColor = ''; }
    data[f] = val;
  });
  if (!valid) { showToast('Harap lengkapi semua field yang wajib diisi.', 'error'); return; }
  try {
    if (guruEditId !== null) {
      await updateGuru(guruEditId, data);
      showToast('Data guru berhasil diperbarui.', 'success');
    } else {
      await addGuru(data);
      showToast('Data guru berhasil ditambahkan.', 'success');
    }
    closeModal('guruModal');
    renderGuruTable();
    updateDashboard();
  } catch (e) { console.error(e); showToast('Gagal menyimpan data guru.', 'error'); }
}

function editGuru(id) { openGuruForm(id); }

function confirmDeleteGuru(id) {
  guruDeleteId = id;
  fetchGuru().then(gurus => {
    const g = gurus.find(x => x.id === id);
    document.getElementById('deleteGuruName').textContent = g ? g.nama : '';
    openModal('deleteGuruModal');
  });
}

async function deleteGuru() {
  try {
    await removeGuru(guruDeleteId);
    closeModal('deleteGuruModal');
    renderGuruTable();
    updateDashboard();
    showToast('Data guru berhasil dihapus.', 'info');
  } catch (e) { console.error(e); showToast('Gagal menghapus guru.', 'error'); }
}

/* ==================== SISWA CRUD ==================== */
let siswaEditId = null;
let siswaDeleteId = null;
let siswaSearch = '';
let siswaFilter = '';

async function renderSiswaTable() {
  try {
    const siswa = await fetchSiswa();
    const filtered = siswa.filter(s =>
      (s.nama.toLowerCase().includes(siswaSearch.toLowerCase()) || s.nis.includes(siswaSearch) || s.kelas.toLowerCase().includes(siswaSearch.toLowerCase())) &&
      (siswaFilter === '' || s.kelas === siswaFilter || s.jurusan === siswaFilter)
    );
    const tbody = document.getElementById('siswaTableBody');
    if (!tbody) return;
    if (!filtered.length) {
      tbody.innerHTML = `<tr><td colspan="8"><div class="table-empty"><svg width="40" height="40" fill="none" stroke="#cbd5e1" stroke-width="1.5" viewBox="0 0 24 24" style="margin:0 auto 10px;display:block"><path stroke-linecap="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/></svg><p>Tidak ada data siswa ditemukan.</p></div></td></tr>`;
      document.getElementById('siswaCount').textContent = '0 data';
      return;
    }
    const jkBadge = { 'Laki-laki': 'badge-blue', 'Perempuan': 'badge-purple' };
    const statusBadge = { Aktif: 'badge-green', Mutasi: 'badge-yellow', Lulus: 'badge-gray', Keluar: 'badge-red' };
    tbody.innerHTML = filtered.map((s, i) => `
      <tr>
        <td style="color:#94a3b8;font-size:12px">${i+1}</td>
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="table-avatar-placeholder">${s.nama.charAt(0)}</div>
            <div>
              <div style="font-weight:600;color:#0f172a">${s.nama}</div>
              <div style="font-size:11px;color:#94a3b8">NIS: ${s.nis}</div>
            </div>
          </div>
        </td>
        <td><span class="badge ${jkBadge[s.jk] || 'badge-gray'}">${s.jk === 'Laki-laki' ? '♂ L' : '♀ P'}</span></td>
        <td style="font-weight:600">${s.kelas}</td>
        <td>${s.jurusan}</td>
        <td>${s.wali}</td>
        <td><span class="badge ${statusBadge[s.status] || 'badge-gray'}">${s.status}</span></td>
        <td>
          <div class="table-actions">
            <button class="action-btn edit" onclick="editSiswa(${s.id})">✎ Edit</button>
            <button class="action-btn delete" onclick="confirmDeleteSiswa(${s.id})">✕ Hapus</button>
          </div>
        </td>
      </tr>`).join('');
    document.getElementById('siswaCount').textContent = `${filtered.length} dari ${siswa.length} data`;
    updateKelasFilter(siswa);
  } catch (e) { console.error(e); showToast('Gagal memuat data siswa.', 'error'); }
}

function updateKelasFilter(siswa) {
  const select = document.getElementById('siswaFilterKelas');
  if (!select) return;
  const kelas = [...new Set(siswa.map(s => s.kelas))].sort();
  select.innerHTML = `<option value="">Semua Kelas</option>` + kelas.map(k => `<option value="${k}" ${siswaFilter === k ? 'selected' : ''}>${k}</option>`).join('');
}

function openSiswaForm(id = null) {
  siswaEditId = id;
  const isEdit = id !== null;
  document.getElementById('siswaModalTitle').textContent = isEdit ? 'Edit Data Siswa' : 'Tambah Data Siswa';
  document.getElementById('siswaForm').reset();
  if (isEdit) {
    fetchSiswa().then(list => {
      const s = list.find(x => x.id === id);
      if (!s) return;
      const fields = ['nis','nama','jk','ttl','kelas','jurusan','agama','wali','nohp','status'];
      fields.forEach(f => { const el = document.getElementById('siswa_' + f); if (el) el.value = s[f] ?? ''; });
    });
  }
  openModal('siswaModal');
}

async function saveSiswa() {
  const fields = ['nis','nama','jk','ttl','kelas','jurusan','agama','wali','nohp','status'];
  const data = {};
  let valid = true;
  fields.forEach(f => {
    const el = document.getElementById('siswa_' + f);
    if (!el) return;
    const val = el.value.trim();
    if (['nis','nama','kelas','jurusan','status'].includes(f) && !val) { el.style.borderColor = '#ef4444'; valid = false; } else { el.style.borderColor = ''; }
    data[f] = val;
  });
  if (!valid) { showToast('Harap lengkapi semua field yang wajib diisi.', 'error'); return; }
  try {
    // Check duplicate NIS
    const siswaAll = await fetchSiswa();
    const dup = siswaAll.find(s => s.nis === data.nis && s.id !== siswaEditId);
    if (dup) { showToast('NIS sudah digunakan oleh siswa lain.', 'error'); return; }
    if (siswaEditId !== null) {
      await updateSiswa(siswaEditId, data);
      showToast('Data siswa berhasil diperbarui.', 'success');
    } else {
      await addSiswa(data);
      showToast('Data siswa berhasil ditambahkan.', 'success');
    }
    closeModal('siswaModal');
    renderSiswaTable();
    updateDashboard();
  } catch (e) { console.error(e); showToast('Gagal menyimpan data siswa.', 'error'); }
}

function editSiswa(id) { openSiswaForm(id); }

function confirmDeleteSiswa(id) {
  siswaDeleteId = id;
  fetchSiswa().then(list => {
    const s = list.find(x => x.id === id);
    document.getElementById('deleteSiswaName').textContent = s ? s.nama : '';
    openModal('deleteSiswaModal');
  });
}

async function deleteSiswa() {
  try {
    await removeSiswa(siswaDeleteId);
    closeModal('deleteSiswaModal');
    renderSiswaTable();
    updateDashboard();
    showToast('Data siswa berhasil dihapus.', 'info');
  } catch (e) { console.error(e); showToast('Gagal menghapus siswa.', 'error'); }
}

/* ==================== BERITA ==================== */
let beritaSearch = '';
let beritaEditId = null;
let beritaDeleteId = null;

async function renderBeritaTable() {
  const tbody = document.getElementById('beritaTableBody');
  const countEl = document.getElementById('beritaCount');
  const badgeEl = document.getElementById('beritaBadge');
  if (!tbody) return;

  tbody.innerHTML = `<tr><td colspan="7"><div class="table-empty">Memuat data berita...</div></td></tr>`;

  try {
    const list = await fetchBerita();
    if (badgeEl) badgeEl.textContent = list.length || '';
    if (countEl) countEl.textContent = `(${list.length} artikel)`;

    const query = (beritaSearch || '').toLowerCase().trim();
    const filtered = list.filter(b => 
      (b.judul && b.judul.toLowerCase().includes(query)) ||
      (b.ringkasan && b.ringkasan.toLowerCase().includes(query)) ||
      (b.kategori && b.kategori.toLowerCase().includes(query))
    );

    if (!filtered.length) {
      tbody.innerHTML = `<tr><td colspan="7"><div class="table-empty">Tidak ada artikel berita ditemukan.</div></td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map((b, i) => {
      const coverImg = b.gambar ? `<img src="${b.gambar}" alt="" style="width:42px;height:42px;object-fit:cover;border-radius:8px">` : `<div style="width:42px;height:42px;background:#f1f5f9;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:11px">No Img</div>`;
      return `
        <tr>
          <td style="color:#94a3b8;font-size:12px">${i + 1}</td>
          <td>${coverImg}</td>
          <td>
            <div style="font-weight:600;color:#0f172a;max-width:320px;line-height:1.4">${b.judul}</div>
            <div style="font-size:11px;color:#94a3b8;margin-top:2px;max-width:320px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.ringkasan || ''}</div>
          </td>
          <td><span class="badge badge-blue">${b.kategori || 'Umum'}</span></td>
          <td style="font-size:12px;color:#64748b">${b.penulis || 'Tim Humas'}</td>
          <td style="font-size:12px;color:#64748b">${b.tanggal || '-'}</td>
          <td>
            <div style="display:flex;gap:6px">
              <button class="action-btn edit" onclick="editBerita(${b.id})">Edit</button>
              <button class="action-btn delete" onclick="confirmDeleteBerita(${b.id})">Hapus</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  } catch (e) {
    console.error(e);
    tbody.innerHTML = `<tr><td colspan="7"><div class="table-empty" style="color:#ef4444">Gagal memuat berita.</div></td></tr>`;
  }
}

/* ─── Helpers for Article & Announcement Formatting ─── */
function htmlToEditableText(html) {
  if (!html) return '';
  if (!/<[a-z][\s\S]*>/i.test(html)) return html;
  return html
    .replace(/<p\b[^>]*>/gi, '')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .trim();
}

function formatTextToHtml(text) {
  if (!text) return '';
  // If user explicitly wrote block HTML tags, keep as is
  if (/<(p|div|blockquote|h[1-6]|ul|ol|table)\b[^>]*>/i.test(text)) {
    return text;
  }
  // Convert double newlines into clean paragraph tags
  return text
    .split(/\r?\n\s*\r?\n/)
    .map(p => p.trim())
    .filter(Boolean)
    .map(p => `<p class="mb-4 leading-relaxed">${p.replace(/\r?\n/g, '<br>')}</p>`)
    .join('');
}

async function openBeritaForm(id = null) {
  beritaEditId = id;
  const modalTitle = document.getElementById('beritaModalTitle');
  const form = document.getElementById('beritaForm');
  if (form) form.reset();

  if (id) {
    if (modalTitle) modalTitle.textContent = 'Edit Berita / Artikel';
    const list = await fetchBerita();
    const b = list.find(x => x.id == id);
    if (b) {
      document.getElementById('berita_judul').value = b.judul || '';
      document.getElementById('berita_kategori').value = b.kategori || 'Prestasi';
      document.getElementById('berita_penulis').value = b.penulis || 'Tim Humas';
      document.getElementById('berita_tanggal').value = b.tanggal || '';
      document.getElementById('berita_gambar').value = b.gambar || '';
      document.getElementById('berita_ringkasan').value = b.ringkasan || '';
      document.getElementById('berita_isi').value = htmlToEditableText(b.isi || '');
    }
  } else {
    if (modalTitle) modalTitle.textContent = 'Tulis Berita Baru';
    const today = new Date().toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
    document.getElementById('berita_tanggal').value = today;
    document.getElementById('berita_penulis').value = 'Tim Humas SMAN 1';
    document.getElementById('berita_gambar').value = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80';
  }
  openModal('beritaModal');
}

async function saveBerita() {
  const judul = document.getElementById('berita_judul').value.trim();
  const kategori = document.getElementById('berita_kategori').value;
  const penulis = document.getElementById('berita_penulis').value.trim() || 'Tim Humas';
  const tanggal = document.getElementById('berita_tanggal').value.trim() || new Date().toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
  const gambar = document.getElementById('berita_gambar').value.trim() || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80';
  const ringkasan = document.getElementById('berita_ringkasan').value.trim();
  const rawIsi = document.getElementById('berita_isi').value.trim();

  if (!judul || !ringkasan || !rawIsi) {
    showToast('Mohon lengkapi judul, ringkasan, dan isi berita.', 'error');
    return;
  }

  // Otomatis ubah enter/paragraf menjadi tag <p> yang rapi jika bukan HTML
  const isi = formatTextToHtml(rawIsi);

  const payload = { judul, kategori, penulis, tanggal, gambar, ringkasan, isi };
  const btn = document.getElementById('btnSaveBerita');
  if (btn) { btn.disabled = true; btn.textContent = 'Menyimpan...'; }

  try {
    if (beritaEditId) {
      await updateBerita(beritaEditId, payload);
      showToast('Berita berhasil diperbarui.', 'success');
    } else {
      await addBerita(payload);
      showToast('Berita baru berhasil dipublikasikan!', 'success');
    }
    closeModal('beritaModal');
    renderBeritaTable();
  } catch (e) {
    console.error(e);
    showToast('Gagal menyimpan berita: ' + e.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Publikasikan Berita'; }
  }
}

function editBerita(id) {
  openBeritaForm(id);
}

function confirmDeleteBerita(id) {
  beritaDeleteId = id;
  fetchBerita().then(list => {
    const b = list.find(x => x.id == id);
    const titleEl = document.getElementById('deleteBeritaTitle');
    if (titleEl) titleEl.textContent = b ? `"${b.judul}"` : '';
    openModal('deleteBeritaModal');
  });
}

async function deleteBerita() {
  try {
    await removeBerita(beritaDeleteId);
    closeModal('deleteBeritaModal');
    renderBeritaTable();
    showToast('Berita berhasil dihapus.', 'info');
  } catch (e) {
    console.error(e);
    showToast('Gagal menghapus berita: ' + e.message, 'error');
  }
}

/* ==================== PENGUMUMAN ==================== */
let pengumumanSearch = '';
let pengumumanEditId = null;
let pengumumanDeleteId = null;

async function renderPengumumanTable() {
  const tbody = document.getElementById('pengumumanTableBody');
  const countEl = document.getElementById('pengumumanCount');
  const badgeEl = document.getElementById('pengumumanBadge');
  if (!tbody) return;

  tbody.innerHTML = `<tr><td colspan="7"><div class="table-empty">Memuat data pengumuman...</div></td></tr>`;

  try {
    const list = await fetchPengumuman();
    if (badgeEl) badgeEl.textContent = list.length || '';
    if (countEl) countEl.textContent = `(${list.length} pengumuman)`;

    const query = (pengumumanSearch || '').toLowerCase().trim();
    const filtered = list.filter(p => 
      (p.judul && p.judul.toLowerCase().includes(query)) ||
      (p.deskripsi && p.deskripsi.toLowerCase().includes(query)) ||
      (p.kategori && p.kategori.toLowerCase().includes(query))
    );

    if (!filtered.length) {
      tbody.innerHTML = `<tr><td colspan="7"><div class="table-empty">Tidak ada pengumuman ditemukan.</div></td></tr>`;
      return;
    }

    const priorityBadges = {
      'PENTING': 'badge-red',
      'PPDB': 'badge-blue',
      'UMUM': 'badge-green',
      'MENDESAK': 'badge-yellow'
    };

    tbody.innerHTML = filtered.map((p, i) => {
      const badgeCls = priorityBadges[p.prioritas] || 'badge-blue';
      return `
        <tr>
          <td style="color:#94a3b8;font-size:12px">${i + 1}</td>
          <td>
            <div style="font-weight:600;color:#0f172a;max-width:280px;line-height:1.4">${p.judul}</div>
          </td>
          <td><span class="badge badge-gray">${p.kategori || 'Umum'}</span></td>
          <td><span class="badge ${badgeCls}">${p.prioritas || 'INFO'}</span></td>
          <td style="font-size:12px;color:#64748b">${p.tanggal || '-'}</td>
          <td style="max-width:300px;font-size:12px;color:#64748b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
            ${p.deskripsi || ''}
          </td>
          <td>
            <div style="display:flex;gap:6px">
              <button class="action-btn edit" onclick="editPengumuman(${p.id})">Edit</button>
              <button class="action-btn delete" onclick="confirmDeletePengumuman(${p.id})">Hapus</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  } catch (e) {
    console.error(e);
    tbody.innerHTML = `<tr><td colspan="7"><div class="table-empty" style="color:#ef4444">Gagal memuat pengumuman.</div></td></tr>`;
  }
}

async function openPengumumanForm(id = null) {
  pengumumanEditId = id;
  const modalTitle = document.getElementById('pengumumanModalTitle');
  const form = document.getElementById('pengumumanForm');
  if (form) form.reset();

  if (id) {
    if (modalTitle) modalTitle.textContent = 'Edit Pengumuman';
    const list = await fetchPengumuman();
    const p = list.find(x => x.id == id);
    if (p) {
      document.getElementById('pengumuman_judul').value = p.judul || '';
      document.getElementById('pengumuman_kategori').value = p.kategori || 'Akademik';
      document.getElementById('pengumuman_prioritas').value = p.prioritas || 'PENTING';
      document.getElementById('pengumuman_tanggal').value = p.tanggal || '';
      document.getElementById('pengumuman_deskripsi').value = p.deskripsi || '';
      document.getElementById('pengumuman_detail').value = htmlToEditableText(p.detail || '');
    }
  } else {
    if (modalTitle) modalTitle.textContent = 'Buat Pengumuman Baru';
    const today = new Date().toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
    document.getElementById('pengumuman_tanggal').value = today;
  }
  openModal('pengumumanModal');
}

async function savePengumuman() {
  const judul = document.getElementById('pengumuman_judul').value.trim();
  const kategori = document.getElementById('pengumuman_kategori').value;
  const prioritas = document.getElementById('pengumuman_prioritas').value;
  const tanggal = document.getElementById('pengumuman_tanggal').value.trim() || new Date().toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
  const deskripsi = document.getElementById('pengumuman_deskripsi').value.trim();
  const rawDetail = document.getElementById('pengumuman_detail').value.trim();

  if (!judul || !deskripsi) {
    showToast('Mohon lengkapi judul dan deskripsi pengumuman.', 'error');
    return;
  }

  const detail = formatTextToHtml(rawDetail);

  const badgeColors = {
    'PENTING': 'bg-red-50 text-red-700 border-red-200',
    'PPDB': 'bg-blue-50 text-blue-700 border-blue-200',
    'UMUM': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'MENDESAK': 'bg-amber-50 text-amber-700 border-amber-200'
  };

  const payload = {
    judul,
    kategori,
    prioritas,
    tanggal,
    badge_color: badgeColors[prioritas] || 'bg-blue-50 text-blue-700 border-blue-200',
    deskripsi,
    detail
  };

  const btn = document.getElementById('btnSavePengumuman');
  if (btn) { btn.disabled = true; btn.textContent = 'Menyimpan...'; }

  try {
    if (pengumumanEditId) {
      await updatePengumuman(pengumumanEditId, payload);
      showToast('Pengumuman berhasil diperbarui.', 'success');
    } else {
      await addPengumuman(payload);
      showToast('Pengumuman berhasil dibuat!', 'success');
    }
    closeModal('pengumumanModal');
    renderPengumumanTable();
  } catch (e) {
    console.error(e);
    showToast('Gagal menyimpan pengumuman: ' + e.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Simpan Pengumuman'; }
  }
}

function editPengumuman(id) {
  openPengumumanForm(id);
}

function confirmDeletePengumuman(id) {
  pengumumanDeleteId = id;
  fetchPengumuman().then(list => {
    const p = list.find(x => x.id == id);
    const titleEl = document.getElementById('deletePengumumanTitle');
    if (titleEl) titleEl.textContent = p ? `"${p.judul}"` : '';
    openModal('deletePengumumanModal');
  });
}

async function deletePengumuman() {
  try {
    await removePengumuman(pengumumanDeleteId);
    closeModal('deletePengumumanModal');
    renderPengumumanTable();
    showToast('Pengumuman berhasil dihapus.', 'info');
  } catch (e) {
    console.error(e);
    showToast('Gagal menghapus pengumuman: ' + e.message, 'error');
  }
}

/* ==================== PESAN ==================== */
function renderPesanTable() {
  // For simplicity, keep pesan in localStorage as before (optional migration later)
  const pesan = JSON.parse(localStorage.getItem('sman1haltim_pesan') || '[]');
  const tbody = document.getElementById('pesanTableBody');
  if (!tbody) return;
  const pesanBadge = document.getElementById('pesanBadge');
  if (!pesan.length) { tbody.innerHTML = `<tr><td colspan="6"><div class="table-empty">Belum ada pesan masuk.</div></td></tr>`; if (pesanBadge) pesanBadge.textContent = ''; return; }
  if (pesanBadge) pesanBadge.textContent = pesan.length;
  tbody.innerHTML = pesan.map((p, i) => `
    <tr>
      <td style="color:#94a3b8;font-size:12px">${i+1}</td>
      <td style="font-weight:600">${p.nama}</td>
      <td>${p.email}</td>
      <td><span class="badge badge-blue">${p.subjek}</span></td>
      <td style="max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.pesan}</td>
      <td><button class="action-btn delete" onclick="deletePesan(${p.id})">✕ Hapus</button></td>
    </tr>`).join('');
}
function deletePesan(id) { const pesan = JSON.parse(localStorage.getItem('sman1haltim_pesan') || '[]').filter(x => x.id !== id); localStorage.setItem('sman1haltim_pesan', JSON.stringify(pesan)); renderPesanTable(); showToast('Pesan berhasil dihapus.', 'info'); }

/* ==================== EXPORT / PRINT ==================== */
async function exportCSV(type) {
  try {
    const list = type === 'guru' ? await fetchGuru() : await fetchSiswa();
    if (!list || !list.length) {
      showToast('Tidak ada data untuk diekspor.', 'info');
      return;
    }
    const headers = Object.keys(list[0]);
    const rows = list.map(item => headers.map(h => `"${String(item[h] ?? '').replace(/"/g, '""')}"`).join(','));
    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `data_${type}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`Data ${type} berhasil diekspor.`, 'success');
  } catch (e) {
    console.error(e);
    showToast('Gagal mengekspor data.', 'error');
  }
}

function printTable(type) {
  window.print();
}

/* ==================== INIT ==================== */
function initLogin() {
  const form = document.getElementById('loginForm');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginUser').value.trim();
    const password = document.getElementById('loginPass').value;
    const errEl = document.getElementById('loginError');
    const btnEl = document.getElementById('loginBtn');

    errEl.style.display = 'none';
    errEl.textContent = '';
    btnEl.disabled = true;
    btnEl.textContent = 'Memverifikasi via Supabase...';

    try {
      await login(email, password);
      btnEl.textContent = 'Berhasil! Memuat panel...';
      window.location.reload();
    } catch (err) {
      console.error('Login error:', err);
      let msg = err.message || 'Login gagal.';
      if (msg.includes('Invalid login credentials')) {
        msg = 'Email atau password salah. Pastikan akun telah didaftarkan di Supabase Auth.';
      } else if (msg.includes('Email not confirmed')) {
        msg = 'Email belum dikonfirmasi. Aktifkan auto-confirm user di dashboard Supabase Auth.';
      }
      errEl.textContent = msg;
      errEl.style.display = 'block';
      btnEl.disabled = false;
      btnEl.textContent = 'Masuk ke Panel Admin';
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const isAuth = await checkAuth();
  if (!isAuth) {
    initLogin();
    return;
  }
  initSidebar();
  navigateTo('dashboard');
  // Set up event listeners
  document.querySelectorAll('.nav-item[data-page]').forEach(btn => btn.addEventListener('click', () => navigateTo(btn.dataset.page)));
  document.getElementById('logoutBtn')?.addEventListener('click', () => { if (confirm('Yakin ingin keluar dari panel admin?')) logout(); });
  
  // Guru page events
  document.getElementById('guruSearch')?.addEventListener('input', (e) => { guruSearch = e.target.value; renderGuruTable(); });
  document.getElementById('btnTambahGuru')?.addEventListener('click', () => openGuruForm());
  document.getElementById('btnSaveGuru')?.addEventListener('click', saveGuru);
  document.getElementById('btnDeleteGuru')?.addEventListener('click', deleteGuru);
  document.getElementById('btnExportGuru')?.addEventListener('click', () => exportCSV('guru'));
  document.getElementById('btnPrintGuru')?.addEventListener('click', () => printTable('guru'));
  
  // Siswa page events
  document.getElementById('siswaSearch')?.addEventListener('input', (e) => { siswaSearch = e.target.value; renderSiswaTable(); });
  document.getElementById('siswaFilterKelas')?.addEventListener('change', (e) => { siswaFilter = e.target.value; renderSiswaTable(); });
  document.getElementById('btnTambahSiswa')?.addEventListener('click', () => openSiswaForm());
  document.getElementById('btnSaveSiswa')?.addEventListener('click', saveSiswa);
  document.getElementById('btnDeleteSiswa')?.addEventListener('click', deleteSiswa);
  document.getElementById('btnExportSiswa')?.addEventListener('click', () => exportCSV('siswa'));
  document.getElementById('btnPrintSiswa')?.addEventListener('click', () => printTable('siswa'));

  // Berita page events
  document.getElementById('beritaSearch')?.addEventListener('input', (e) => { beritaSearch = e.target.value; renderBeritaTable(); });
  document.getElementById('btnTambahBerita')?.addEventListener('click', () => openBeritaForm());
  document.getElementById('btnSaveBerita')?.addEventListener('click', saveBerita);
  document.getElementById('btnDeleteBerita')?.addEventListener('click', deleteBerita);

  // Pengumuman page events
  document.getElementById('pengumumanSearch')?.addEventListener('input', (e) => { pengumumanSearch = e.target.value; renderPengumumanTable(); });
  document.getElementById('btnTambahPengumuman')?.addEventListener('click', () => openPengumumanForm());
  document.getElementById('btnSavePengumuman')?.addEventListener('click', savePengumuman);
  document.getElementById('btnDeletePengumuman')?.addEventListener('click', deletePengumuman);
});

