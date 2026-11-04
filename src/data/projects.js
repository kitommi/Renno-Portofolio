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
      'A collaborative music-themed web platform designed to provide an engaging experience around music discovery and interactive features.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    role: 'Original idea initiator, team leader, feature concept developer, and programmer',
    status: 'Under development, currently inactive',
    image: '/images/sonicflows-preview.png',
    repo: 'https://github.com/kitommi/Sonic_Flow',
  },
  {
    id: 'simmas',
    layout: 'secondary',
    title: 'SIMMAS',
    subtitle: 'Sistem Informasi Manajemen Magang Siswa',
    description:
      'A student internship management application designed to support coordination and monitoring between students, teachers, and schools.',
    tech: ['Dart', 'Flutter', 'Supabase'],
    role: 'Developer',
    status: 'In development',
    image: '/images/simmas-preview.png',
    repo: 'https://github.com/kitommi/Project-SIMMAS',
  },
  {
    id: 'flappybird',
    layout: 'compact',
    title: 'Flappy Bird',
    subtitle: null,
    description:
      'A simple Flappy Bird-style game: guide the bird through the gaps between pipes and keep the score climbing.',
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
      'A prototype web project with a reforestation (penghijauan) theme, exploring interface development.',
    tech: ['HTML', 'CSS'],
    role: 'Creator',
    status: 'Prototype',
    image: '/images/greenvibe-preview.jpg',
    repo: null,
  },
]
