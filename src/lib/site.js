// Sumber data tunggal untuk identitas situs.
// Hanya berisi fakta yang sudah dikonfirmasi pemilik.
// Nilai `null` = belum diberikan pemilik; UI menampilkan penanda "belum tersedia".

export const site = {
  name: 'Muhammad Renno Agustovano',
  brand: 'RENNO.DEV',
  tagline: 'Fresh skills, solid effort.',
  role: 'Aspiring Software Developer',
  status: 'Open to internship opportunities',
  github: 'https://github.com/kitommi',
  githubUsername: 'kitommi',
  email: 'handyprabowo8976@gmail.com',
  whatsapp: '6282131960823', // format internasional tanpa +
  whatsappLabel: '+62 821-3196-0823',
}

export const roles = [
  'Aspiring Developer',
  'Software Development Enthusiast',
  'Problem Solver',
  'Technology Explorer',
  'Always Learning',
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'journal', label: 'Journal' },
  { id: 'contact', label: 'Contact' },
]

export const navIds = navLinks.map((link) => link.id)
