// Jurnal mini (data statis). Tambah entri baru di bagian atas.
// Isi hanya dengan catatan yang benar-benar dialami pemilik.
export const journalEntries = [
  {
    id: 'live-github-data',
    tag: 'Update proyek',
    date: 'November 2026',
    title: 'Membaca jumlah repo langsung dari GitHub',
    summary:
      'Jumlah repository publik di halaman ini diambil dari GitHub setiap halaman dimuat, bukan diketik manual, jadi tetap akurat saat saya menambah proyek. Kalau GitHub tidak bisa dihubungi, halaman ini akan bilang apa adanya, bukan menebak-nebak.',
  },
  {
    id: 'building-portfolio',
    tag: 'Update proyek',
    date: 'November 2026',
    title: 'Membangun portfolio ini dengan React',
    summary:
      'Saya masih baru di React, jadi website ini sekaligus jadi latihan: Vite untuk setup, Tailwind CSS untuk styling, Framer Motion untuk animasi, dan component kecil yang bisa dipakai ulang, bukan satu file HTML yang panjang.',
  },
  {
    id: 'one-idea-many-stacks',
    tag: 'Catatan belajar',
    date: null,
    title: 'Rasa penasaran yang sama, stack yang berbeda',
    summary:
      'Proyek saya sejauh ini mencakup prototype web, game sederhana, platform berbasis Supabase, dan aplikasi Flutter. Berpindah-pindah di antara semuanya membantu saya melihat ide mana yang bisa dibawa ke mana-mana dan mana yang tidak.',
  },
]
