# RENNO.DEV

Portfolio developer pribadi Muhammad Renno Agustovano.
Tagline: Fresh skills, solid effort.

## Stack
React, Vite, JavaScript, Tailwind CSS, Framer Motion, Lucide React.

## Persyaratan
Node.js LTS (20.19+ atau 22.12+) dan npm.

## Perintah
```bash
npm install      # pasang dependency
npm run dev      # jalankan development server
npm run build    # build production
npm run preview  # coba hasil build
```

## Variabel environment
Salin `.env.example` menjadi `.env`, lalu isi `VITE_FORMSPREE_ENDPOINT` dengan endpoint Formspree agar formulir kontak aktif. Di Vercel, isi variabel yang sama di Project Settings, Environment Variables.

## SEO dan Open Graph
Meta tag (title, description, Open Graph, Twitter Card, canonical) ada di `index.html`. URL situs diisi otomatis saat build dari `VITE_SITE_URL` atau URL produksi Vercel; jika tidak ada, tag canonical dan og:url dihapus. Gambar pratinjau share: `public/og-image.png` (1200x630).

## Integrasi GitHub
Panel "On GitHub" membaca API publik GitHub (`/users/kitommi` dan daftar repo) saat halaman dimuat, di-cache 10 menit per sesi. Repo yang ditampilkan diatur di `src/lib/site.js` (`githubRepos`). Jika API gagal atau kena batas request, panel menampilkan pesan dan link ke profil.

## Data yang bisa diubah
- Email dan WhatsApp: `src/lib/site.js`
- Proyek (gambar, link repo, status): `src/data/projects.js`
- Skill, pengalaman, jurnal: `src/data/skills.js`, `experience.js`, `journal.js`

## Aset
Letakkan gambar di `public/images/`:
profile.webp (foto transparan, rasio 4:5), sonicflows-preview.png, simmas-preview.png, flappybird-preview.png, greenvibe-preview.jpg.

## Status
Sedang dikembangkan. Lihat `PROJECT_STATUS.md`.
