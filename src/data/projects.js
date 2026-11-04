// Data proyek. Ganti `image` / `repo` di sini saat aset atau link sudah ada.
// `span` = lebar kartu pada grid 6 kolom (desktop).
// `repo: null` + `repoPending: true` = menunggu URL repo dari pemilik.
// `status: null` = status belum dikonfirmasi, tidak ditampilkan.

export const projects = [
  {
    id: 'sonicflows',
    layout: 'featured',
    span: 'md:col-span-6',
    title: 'SonicFlows',
    subtitle: null,
    description:
      'A collaborative music-themed web platform designed to provide an engaging experience around music discovery and interactive features.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    role: 'Original idea initiator, team leader, feature concept developer, and programmer',
    status: 'Under development, currently inactive',
    image: '/images/sonicflows-preview.png',
    repo: 'https://github.com/kitommi/Sonic_Flow',
    repoPending: false,
  },
  {
    id: 'simmas',
    layout: 'secondary',
    span: 'md:col-span-4',
    title: 'SIMMAS',
    subtitle: 'Sistem Informasi Manajemen Magang Siswa',
    description:
      'A student internship management application designed to support coordination and monitoring between students, teachers, and schools.',
    tech: ['Dart', 'Flutter', 'Supabase'],
    role: 'Developer',
    status: 'In development',
    image: '/images/simmas-preview.png',
    repo: 'https://github.com/kitommi/Project-SIMMAS',
    repoPending: false,
  },
  {
    id: 'fitcal',
    layout: 'compact',
    span: 'md:col-span-2',
    title: 'FitCal',
    subtitle: null,
    description:
      'A prototype exploring a calorie-related digital application and basic web interface development.',
    tech: ['HTML', 'CSS'],
    role: 'Creator',
    status: 'Prototype',
    image: '/images/fitcal-preview.png',
    repo: null,
    repoPending: false,
  },
  {
    id: 'greenvibe',
    layout: 'compact',
    span: 'md:col-span-3',
    title: 'GreenVibe',
    subtitle: null,
    description:
      'A prototype web project exploring a green-oriented digital concept and interface development.',
    tech: ['HTML', 'CSS'],
    role: 'Creator',
    status: 'Prototype',
    image: '/images/greenvibe-preview.png',
    repo: null,
    repoPending: false,
  },
  {
    id: 'finance',
    layout: 'compact',
    span: 'md:col-span-3',
    title: 'Financial Management System',
    subtitle: null,
    description:
      'A native PHP financial management system demonstrating backend development and data management.',
    // MySQL: tambahkan setelah diverifikasi dari repo.
    tech: ['PHP'],
    role: 'Developer',
    status: null,
    image: '/images/finance-preview.png',
    repo: null,
    repoPending: false,
  },
]
