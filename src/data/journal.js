// Jurnal mini (data statis). Tambah entri baru di bagian atas.
// Isi hanya dengan catatan yang benar-benar dialami pemilik.
export const journalEntries = [
  {
    id: 'live-github-data',
    tag: 'Project update',
    date: 'November 2026',
    title: 'Reading my repository count from GitHub',
    summary:
      'The number of public repositories on this page is fetched from GitHub when the page loads instead of being typed in by hand, so it stays accurate as I add projects. If GitHub is unreachable, the page says so instead of guessing.',
  },
  {
    id: 'building-portfolio',
    tag: 'Project update',
    date: 'November 2026',
    title: 'Building this portfolio with React',
    summary:
      'I am new to React, so this site doubles as practice: Vite for the setup, Tailwind CSS for styling, Framer Motion for motion, and small reusable components instead of one long HTML file.',
  },
  {
    id: 'one-idea-many-stacks',
    tag: 'Learning note',
    date: null,
    title: 'Same curiosity, different stacks',
    summary:
      'My projects so far include a web prototype, a simple game, a Supabase-backed platform, and a Flutter app. Switching between them is a good way to see which ideas carry over and which do not.',
  },
]
