// Data proyek. Ganti `image` / `repo` di sini saat aset atau link sudah ada.
// `layout`: featured (penuh), secondary (kiri, lebih besar), compact (kolom kanan, bertumpuk).
// Nilai kosong (`null`, `[]`) = belum dikonfirmasi pemilik, bagian itu tidak ditampilkan.

export const projects = [
  {
    id: 'sonicflows',
    layout: 'featured',
    title: 'SonicFlows',
    subtitle: null,
    description:
      'Platform web bertema musik yang dibuat bersama tim, dirancang untuk menghadirkan pengalaman seru seputar penemuan musik dan fitur interaktif.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    role: 'Pencetus ide, ketua tim, pengembang konsep fitur, dan programmer',
    status: 'Masih dikembangkan, saat ini tidak aktif',
    image: '/images/sonicflows-preview.png',
    repo: 'https://github.com/kitommi/Sonic_Flow',
  },
  {
    id: 'simmas',
    layout: 'secondary',
    title: 'SIMMAS',
    subtitle: 'Sistem Informasi Manajemen Magang Siswa',
    description:
      'Aplikasi manajemen magang siswa yang dirancang untuk membantu koordinasi dan pemantauan antara siswa, guru, dan sekolah.',
    tech: ['Dart', 'Flutter', 'Supabase'],
    role: 'Developer',
    status: 'Dalam pengembangan',
    image: '/images/simmas-preview.png',
    repo: 'https://github.com/kitommi/Project-SIMMAS',
  },
  {
    id: 'flappybird',
    layout: 'compact',
    title: 'Flappy Bird',
    subtitle: null,
    description:
      'Game sederhana bergaya Flappy Bird: arahkan burung melewati celah di antara pipa dan jaga skor tetap naik.',
    // Peran, status, dan repo: tambahkan setelah dikonfirmasi pemilik.
    tech: ['HTML', 'CSS', 'JavaScript'],
    role: null,
    status: null,
    image: '/images/flappybird-preview.png',
    repo: null,
  },
  {
    id: 'greenvibe',
    layout: 'compact',
    title: 'GreenVibe',
    subtitle: null,
    description:
      'Prototype proyek web bertema penghijauan, dibuat untuk menjelajahi pengembangan antarmuka.',
    tech: ['HTML', 'CSS'],
    role: 'Pembuat',
    status: 'Prototype',
    image: '/images/greenvibe-preview.jpg',
    repo: null,
  },
]
