-- ============================================================
-- SQL SETUP: TABEL BERITA & PENGUMUMAN (SMAN 1 HALMAHERA TIMUR)
-- Jalankan skrip ini sekali di Supabase SQL Editor
-- (Dashboard -> SQL Editor -> New Query -> Run)
-- ============================================================

-- 1. TABEL BERITA / ARTIKEL
CREATE TABLE IF NOT EXISTS public.berita (
  id BIGSERIAL PRIMARY KEY,
  judul TEXT NOT NULL,
  kategori TEXT NOT NULL DEFAULT 'Akademik',
  penulis TEXT NOT NULL DEFAULT 'Tim Humas',
  tanggal TEXT NOT NULL DEFAULT to_char(now(), 'DD Mon YYYY'),
  gambar TEXT DEFAULT 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80',
  ringkasan TEXT NOT NULL,
  isi TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. TABEL PENGUMUMAN
CREATE TABLE IF NOT EXISTS public.pengumuman (
  id BIGSERIAL PRIMARY KEY,
  judul TEXT NOT NULL,
  kategori TEXT NOT NULL DEFAULT 'Akademik',
  prioritas TEXT NOT NULL DEFAULT 'PENTING',
  tanggal TEXT NOT NULL DEFAULT to_char(now(), 'DD Mon YYYY'),
  badge_color TEXT DEFAULT 'bg-red-50 text-red-700 border-red-200',
  deskripsi TEXT NOT NULL,
  detail TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. AKTIFKAN ROW LEVEL SECURITY (RLS)
ALTER TABLE public.berita ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pengumuman ENABLE ROW LEVEL SECURITY;

-- 4. KEBIJAKAN AKSES (POLICIES)
-- A. Berita: Publik bisa melihat, Admin login bisa tambah/ubah/hapus
DROP POLICY IF EXISTS "Public view berita" ON public.berita;
CREATE POLICY "Public view berita" ON public.berita FOR SELECT USING (true);

DROP POLICY IF EXISTS "Auth insert berita" ON public.berita;
CREATE POLICY "Auth insert berita" ON public.berita FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Auth update berita" ON public.berita;
CREATE POLICY "Auth update berita" ON public.berita FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Auth delete berita" ON public.berita;
CREATE POLICY "Auth delete berita" ON public.berita FOR DELETE USING (true);

-- B. Pengumuman: Publik bisa melihat, Admin login bisa tambah/ubah/hapus
DROP POLICY IF EXISTS "Public view pengumuman" ON public.pengumuman;
CREATE POLICY "Public view pengumuman" ON public.pengumuman FOR SELECT USING (true);

DROP POLICY IF EXISTS "Auth insert pengumuman" ON public.pengumuman;
CREATE POLICY "Auth insert pengumuman" ON public.pengumuman FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Auth update pengumuman" ON public.pengumuman;
CREATE POLICY "Auth update pengumuman" ON public.pengumuman FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Auth delete pengumuman" ON public.pengumuman;
CREATE POLICY "Auth delete pengumuman" ON public.pengumuman FOR DELETE USING (true);

-- 5. AKTIFKAN REALTIME REPLICATION (Agar sinkronisasi live detik itu juga)
ALTER PUBLICATION supabase_realtime ADD TABLE public.berita;
ALTER PUBLICATION supabase_realtime ADD TABLE public.pengumuman;

-- 6. SEED DATA AWAL (Artikel & Pengumuman Sekolah)
INSERT INTO public.berita (judul, kategori, penulis, tanggal, gambar, ringkasan, isi) VALUES
('Siswa SMAN 1 Halmahera Timur Raih Medali Emas di Olimpiade Sains Nasional 2026', 'Prestasi', 'Tim Humas', '10 Oktober 2026', 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80', 'Tim delegasi bidang Fisika dan Matematika berhasil membawa pulang medali emas setelah bersaing dengan ratusan siswa terbaik se-Indonesia.', '<p class="mb-4 leading-relaxed">Prestasi membanggakan kembali ditorehkan oleh siswa-siswi SMA Negeri 1 Halmahera Timur dalam ajang bergengsi <strong>Olimpiade Sains Nasional (OSN) 2026</strong> yang diselenggarakan di Jakarta pada awal bulan ini.</p><p class="mb-4 leading-relaxed">Ananda Muhammad Fikri (Kelas XI MIPA 1) sukses meraih Medali Emas untuk kategori Fisika Terapan, sementara rekannya Nadia Azzahra (Kelas XII MIPA 2) meraih Medali Perak di bidang Matematika Analitik.</p><blockquote class="p-4 my-6 border-l-4 border-slate-800 bg-slate-50 italic text-slate-700">"Keberhasilan ini merupakan buah dari dedikasi belajar, dukungan pembimbing bimbingan khusus sains sekolah, dan doa restu para orang tua. Kami percaya setiap potensi murid berhak mendapatkan ruang tumbuh maksimal."<span class="block mt-2 not-italic font-medium text-slate-900">— Kepala Sekolah SMA Negeri 1 Halmahera Timur</span></blockquote><p class="mb-4 leading-relaxed">Pihak sekolah senantiasa berkomitmen menyediakan fasilitas laboratorium terkini serta bimbingan intensif berkala guna mencetak talenta muda berdaya saing global.</p>'),
('Penerapan Green Science Lab dalam Penguatan Kurikulum Merdeka', 'Akademik', 'Wakasek Kurikulum', '05 Oktober 2026', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80', 'Inovasi pembelajaran berbasis riset ramah lingkungan diperkenalkan guna menumbuhkan kesadaran ekologis dan daya pikir kritis generasi muda.', '<p class="mb-4 leading-relaxed">Dalam rangka mewujudkan pembelajaran berbasis projek yang berkelanjutan, SMA Negeri 1 Halmahera Timur meresmikan inisiatif <em>Green Science Lab</em> pada semester ganjil tahun ajaran ini.</p><p class="mb-4 leading-relaxed">Program ini mengintegrasikan disiplin Biologi, Kimia Terapan, dan Pertanian Modern (Hidroponik cerdas). Peserta didik diajak secara langsung untuk merancang eksperimen pengolahan limbah organik dan pengujian kualitas air di sekitar lingkungan sekolah.</p><p class="leading-relaxed">Metode pembelajaran kolaboratif ini tidak hanya meningkatkan literasi ilmiah, namun juga membangun kebiasaan tanggung jawab sosial dan kepedulian terhadap kelestarian alam.</p>'),
('Gelar Karya Seni Budaya & Technopreneur Expo 2026', 'Kegiatan', 'OSIS & Kesiswaan', '28 September 2026', 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80', 'Pentas kreasi seni tradisi, modern music chamber, dan pameran prototipe aplikasi digital karya kolaborasi lintas angkatan.', '<p class="mb-4 leading-relaxed">Ratusan karya kreatif siswa dipamerkan secara terbuka dalam gelaran tahunan <strong>Haltim Art & Technopreneur Expo 2026</strong> di SMA Negeri 1 Halmahera Timur. Acara ini dihadiri oleh perwakilan perguruan tinggi mitra, orang tua murid, dan pemerhati seni pendidikan.</p><p class="mb-4 leading-relaxed">Selain pertunjukan musik tradisional Maluku Utara dan tari kreasi daerah, pengunjung disuguhi demo aplikasi mobile buatan siswa peminatan Rekayasa Perangkat Lunak, seperti aplikasi bank sampah sekolah dan portal perpustakaan digital.</p><p class="leading-relaxed">Ajang ini membuktikan bahwa kreativitas seni dan penguasaan sains teknologi dapat bersinergi secara harmonis dalam karakter pelajar modern.</p>'),
('Workshop Literasi Digital & Etika Artificial Intelligence Bagi Siswa', 'Akademik', 'Laboratorium Komputer', '20 September 2026', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80', 'Mempersiapkan siswa menyikapi perkembangan AI secara etis, produktif, dan aman untuk menunjang kegiatan riset akademik.', '<p class="mb-4 leading-relaxed">Menghadapi era akselerasi teknologi AI, sekolah memfasilitasi lokakarya interaktif bertajuk <em>"Navigating AI: Ethics, Critical Thinking, and Academic Honesty"</em>.</p><p class="mb-4 leading-relaxed">Hadir sebagai narasumber praktisi data science terkemuka yang memaparkan cara cerdas memanfaatkan piranti kecerdasan buatan sebagai sarana penunjang riset pustaka, tanpa mengorbankan orisinalitas ide dan integritas karya ilmiah.</p><p class="leading-relaxed">Siswa dibekali kemampuan verifikasi fakta, teknik prompt engineering yang efektif, serta pemahaman hak cipta digital.</p>');

INSERT INTO public.pengumuman (judul, kategori, prioritas, tanggal, badge_color, deskripsi, detail) VALUES
('Jadwal Asesmen Sumatif Tengah Semester (ASTS) Ganjil TA 2026/2027', 'Akademik', 'PENTING', '15 Oktober 2026', 'bg-red-50 text-red-700 border-red-200', 'Pelaksanaan Asesmen Sumatif Tengah Semester akan diselenggarakan secara luring berbasis CBT (Computer Based Test). Seluruh siswa wajib memastikan perangkat dan akun portal telah terverifikasi.', '<ul class="list-disc pl-5 space-y-2 text-slate-700"><li><strong>Tanggal Pelaksanaan:</strong> 20 - 27 Oktober 2026</li><li><strong>Waktu:</strong> Pukul 07.30 - 13.00 WIB</li><li><strong>Ruang Ujian:</strong> Lab CBT 1-4 dan Ruang Kelas Terjadwal</li><li><strong>Ketentuan:</strong> Seragam resmi lengkap sesuai jadwal harian, membawa kartu ujian fisik yang telah dicap bagian tata usaha.</li></ul><div class="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600">Kartu ujian dapat diunduh mandiri melalui portal siswa mulai tanggal 16 Oktober 2026.</div>'),
('Pembukaan Pendaftaran Peserta Didik Baru (PPDB) Jalur Prestasi & Reguler', 'Penerimaan', 'PPDB', '01 Oktober 2026', 'bg-blue-50 text-blue-700 border-blue-200', 'Pendaftaran siswa baru tahun ajaran 2027/2028 resmi dibuka. Tersedia program beasiswa penuh untuk juara kompetisi sains, tahfidz, dan talenta seni nasional.', '<ul class="list-disc pl-5 space-y-2 text-slate-700"><li><strong>Jalur Prestasi Akademik & Non-Akademik:</strong> 1 Oktober - 15 November 2026</li><li><strong>Jalur Reguler (Tes Potensi Skolastik):</strong> 1 November - 20 Desember 2026</li><li><strong>Dokumen Persyaratan:</strong> Rapor SMP semester 1-5, sertifikat kejuaraan (bila ada), fotokopi KK & Akta Lahir.</li></ul><div class="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600">Silakan klik tombol <em>Portal PPDB</em> di bilah navigasi atas untuk registrasi formulir daring.</div>'),
('Pertemuan Paguyuban Orang Tua Siswa & Pembagian Laporan Portofolio', 'Kesiswaan', 'UMUM', '28 September 2026', 'bg-emerald-50 text-emerald-700 border-emerald-200', 'Undangan kepada seluruh orang tua / wali murid kelas X, XI, dan XII untuk menghadiri evaluasi capaian belajar berkala dan konsultasi karier perguruan tinggi.', '<ul class="list-disc pl-5 space-y-2 text-slate-700"><li><strong>Hari & Tanggal:</strong> Sabtu, 31 Oktober 2026</li><li><strong>Waktu:</strong> Sesi 1 (Kelas X & XI) 08.00 - 10.30 WIT | Sesi 2 (Kelas XII) 11.00 - 13.30 WIT</li><li><strong>Tempat:</strong> Aula Pertemuan SMA Negeri 1 Halmahera Timur</li><li><strong>Agenda:</strong> Paparan progres kurikulum, klinik bimbingan konseling masuk PTN/Kedinasan, dan konsultasi tatap muka wali kelas.</li></ul>');

