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

## Data yang bisa diubah
- Email dan WhatsApp: `src/lib/site.js`
- Proyek (gambar, link repo, status): `src/data/projects.js`
- Skill, pengalaman, jurnal: `src/data/skills.js`, `experience.js`, `journal.js`

## Aset
Letakkan gambar di `public/images/`:
profile.jpg, sonicflows-preview.png, simmas-preview.png, fitcal-preview.png, greenvibe-preview.png, finance-preview.png.

## Status
Sedang dikembangkan. Lihat `PROJECT_STATUS.md`.
