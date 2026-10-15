require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or ANON key missing in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

(async () => {
  console.log('--- Pengujian Koneksi Supabase ---');
  const resGuru = await supabase.from('guru').select('*');
  if (resGuru.error) {
    console.error('❌ Error guru:', resGuru.error.message);
  } else {
    console.log(`✅ Data guru (${resGuru.data.length} record):`, resGuru.data);
  }

  const resSiswa = await supabase.from('siswa').select('*');
  if (resSiswa.error) {
    console.error('❌ Error siswa:', resSiswa.error.message);
  } else {
    console.log(`✅ Data siswa (${resSiswa.data.length} record):`, resSiswa.data);
  }
})();

