# Keputusan Teknis

| Tanggal | Keputusan | Alasan |
|---|---|---|
| 4 Nov 2026 | React + Vite + JavaScript | Sesuai spesifikasi; lebih sederhana untuk pemilik yang baru belajar React |
| 4 Nov 2026 | Tailwind CSS v4 lewat plugin `@tailwindcss/vite` | Setup sederhana, token lewat `@theme` di CSS |
| 4 Nov 2026 | Framer Motion untuk animasi, Lucide React untuk ikon | Sesuai spesifikasi |
| 4 Nov 2026 | Tanpa backend | Sesuai spesifikasi; kontak lewat layanan frontend |
| 4 Nov 2026 | Data situs di `src/lib/site.js` | Satu sumber data, mudah diubah |
| 4 Nov 2026 | Pengiriman file lewat zip per fase | Claude Chat membuat file langsung; pemilik menjalankan lokal dan mengirim zip balik untuk revisi |

## Fase 02 — Design System

### Font
- Judul: **Instrument Serif** (di luar daftar kandidat, tetapi spesifikasi mengizinkan display typeface ekspresif). Hanya berat 400 + italic, jangan diberi `font-semibold`.
- Teks: **Geist** (kandidat di spesifikasi), berat 400/500/600.
- Dimuat lewat Google Fonts di `index.html`. Ada fallback system font.

### Token (semua di `src/styles/index.css`, blok `@theme`)
- Warna: `bg`, `bg-2`, `surface`, `fg`, `fg-2`, `fg-3`, `line`, `highlight` (dipakai sebagai `bg-bg`, `text-fg-2`, `border-line`, dst.)
- Tipografi fluid: `text-display`, `text-heading`, `text-title`, `text-lead`, `text-body`, `text-small`, `text-caption`
- Spacing: `px-gutter` (gutter halaman), `py-section` (jarak antar section), `max-w-page` (lebar konten 76rem)
- Motion: `ease-out-expo`
- Breakpoint: bawaan Tailwind (sm 640, md 768, lg 1024, xl 1280); desain mobile-first

### Aturan pakai
- Kontras: `fg-3` (#686868) hanya untuk elemen dekoratif/besar. Teks kecil minimal `fg-2` (#929292).
- Kartu tanpa bayangan; hierarki lewat warna permukaan dan garis tepi.
- Tombol berbentuk pill, kartu `rounded-xl`; radius sengaja dibedakan.
- Tanpa label kecil huruf kapital di atas judul; struktur dibuat lewat garis tipis dan tata letak.
- Helper `cn()` tidak menggabungkan class Tailwind yang bertabrakan; jangan menimpa class bawaan komponen lewat `className`.

### Komponen (`src/components/common/`)
`Container`, `Section`, `SectionHeading`, `Button` (primary/secondary/ghost, md/lg, otomatis `<a>` jika ada `href`), `Card` (base/raised/outline), `Badge` (neutral/strong/solid, opsi `dot`), `TextLink`.

### Pratinjau
Halaman pratinjau Fase 02 sudah dihapus di Fase 03.

## Fase 03 — Main Website

- Token baru `text-hero` (judul tagline di Hero) dan `animate-loader` (loading screen). Token Fase 02 tidak diubah.
- Struktur: `components/layout` (LoadingScreen, Navbar, Footer), `components/sections` (7 section + ContactForm), `components/projects` (ProjectCard), `components/animations` (RotatingText), `data/` (skills, projects, experience, journal), `hooks/` (useAppReady, useScrolled, useActiveSection).
- Loading screen: selesai saat halaman + font siap, maksimal 3 detik. Tanpa delay buatan. Mengikuti reduced-motion.
- Navbar: transparan lalu solid saat scroll, penanda section aktif (IntersectionObserver), menu mobile dengan `aria-expanded`, tutup lewat Escape.
- Gambar (foto profil dan screenshot proyek) memakai `FallbackImage`: jika file belum ada, tampil placeholder berlabel, bukan gambar palsu.
- Proyek: SonicFlows (featured), SIMMAS (secondary), tiga lainnya (compact). Data di `src/data/projects.js`. Status Financial Management System dan teknologi MySQL belum ditampilkan sampai dikonfirmasi.
- Formulir kontak: validasi, loading/sukses/error, kolom jebakan spam. Aktif hanya jika `VITE_FORMSPREE_ENDPOINT` diisi; kalau belum, formulir menampilkan pemberitahuan dan tombol dinonaktifkan.
- Email dan WhatsApp diisi di `src/lib/site.js` (nilai `null` akan tampil "To be added").
- Revisi 1: foto profil (PNG tanpa latar) dipotong rasio 4:5 dan ditempel di warna `bg-2`, disimpan sebagai `public/images/profile.jpg`. Screenshot diperkecil ke lebar 1600px. Kartu proyek diubah: screenshot selalu di atas (rasio 2:1), grid 6 kolom (SonicFlows 6, SIMMAS 4, FitCal 2, GreenVibe 3, Finance 3) supaya screenshot tidak terpotong.
- Teks About dan Journal adalah draf berdasarkan fakta yang sudah dikonfirmasi; pemilik boleh mengubahnya.
- Animasi masuk (hero, scroll reveal, hover proyek) sengaja ditunda ke Fase 04.

## Fase 04 — Animation and Interaction

- Prinsip: gerak kecil, pendek, dan bertujuan. Semua animasi mengikuti `prefers-reduced-motion` (tanpa gerak; loading screen hanya fade).
- `Reveal` (components/animations): muncul sekali saat masuk layar (opacity + naik 20px). Dipakai di judul section, About, Skills, Projects, Experience, Journal, Contact. Jeda antar-kartu dibuat bertahap tipis.
- Hero: urutan masuk teks (naik satu per satu) lalu foto (fade + scale), dimulai setelah loading screen selesai (prop `ready`).
- Loading screen: keluar seperti tirai terangkat ke atas (0.8 detik). Scroll dikunci selama loading.
- Navbar: garis penanda section aktif bergeser halus antar menu (`layoutId`).
- Hover: gambar proyek zoom halus + border kartu menyala; badge skill menyala; tombol sudah punya efek hover/tekan dari Fase 02.
- BackToTop melayang muncul setelah scroll 700px; footer tetap punya tombol Back to top.
- Smooth scrolling lewat CSS `scroll-behavior` (dimatikan untuk reduced-motion).
- Tidak ada library animasi tambahan, tanpa custom cursor, parallax, atau partikel.

## Fase 05 — Integration

- GitHub: hook `useGitHub` mengambil `/users/kitommi` dan `/users/kitommi/repos` (2 request, dibatalkan jika komponen hilang), cache `sessionStorage` 10 menit. Mendeteksi rate limit (403/429 dengan `x-ratelimit-remaining: 0`). Jumlah repo dibaca dari API dan diberi label PUBLIC REPOSITORIES; tidak ada angka hardcode. Nama tampilan dari profil GitHub tidak dipakai; nama resmi tetap Muhammad Renno Agustovano.
- Repo yang ditampilkan dipilih lewat daftar `githubRepos` di `src/lib/site.js` (Sonic_Flow, Project-SIMMAS), bukan semua repo.
- Panel GitHub ada di bawah daftar proyek (`components/projects/GitHubPanel.jsx`) dengan skeleton loading, pesan error, dan fallback link ke profil.
- Form kontak: jika `VITE_FORMSPREE_ENDPOINT` diisi, kirim lewat Formspree. Jika belum, tombol menjadi "Open in email app" dan membuka `mailto:` dengan pesan terisi; pemberitahuan di form menjelaskan hal ini.
- Perubahan daftar proyek atas permintaan pemilik: FitCal dan Financial Management System dihapus; Flappy Bird ditambahkan; screenshot GreenVibe dipasang. Grid proyek: SonicFlows penuh, SIMMAS kiri, proyek compact bertumpuk di kolom kanan. Field kosong (tech, role, status) tidak ditampilkan.
- Screenshot GreenVibe disimpan sebagai JPG (`greenvibe-preview.jpg`) karena versi PNG hampir 2 MB.
- Jurnal: tiga entri, semuanya berdasarkan fakta tentang proyek/portfolio ini.

## Fase 06 — Quality Assurance

- Pengujian dilakukan di lingkungan Claude dengan: esbuild (sintaks JSX dan resolusi import), compiler Tailwind v4 (semua token dan class), dan Chromium headless (render nyata dengan stub untuk framer-motion dan lucide-react, GitHub API dipalsukan). Build Vite asli tetap harus dijalankan pemilik.
- Perbaikan dari QA: link footer bentrok class (`underline` vs `no-underline`) diganti link biasa; kartu proyek compact dirapatkan agar kolom kanan seimbang dengan SIMMAS; grid jurnal 3 kolom di layar besar.
- SEO: Open Graph, Twitter Card, canonical, `og-image.png`, `robots.txt`. URL absolut diisi lewat plugin kecil di `vite.config.js` (VITE_SITE_URL atau `VERCEL_PROJECT_PRODUCTION_URL`).
- Kontras terukur: teks utama 18.4:1, teks sekunder 6.4:1 (bg) / 5.8:1 (surface); `fg-3` 3.6:1 hanya dipakai untuk huruf dekoratif besar.

## Revisi setelah Fase 06 (permintaan pemilik)

- Foto profil baru (PNG transparan) dipotong ke rasio 4:5 dan disimpan sebagai `public/images/profile.webp` (WebP dengan transparansi). Path berubah dari `profile.jpg` karena latar transparan dibutuhkan untuk efek kartu.
- Kartu profil 3D (`ProfileCard` + `TiltCard`): miring mengikuti pointer, tiga lapisan kedalaman (huruf R di belakang, foto, label peran di depan), bagian bawah foto memudar ke latar. Tanpa garis tepi dan warna kartu = `bg` (sama dengan latar website). Reduced-motion: kartu datar.
- Loading screen: "Are you ready?" (1,5 dtk) lalu "GO!" (1 dtk) lalu tirai terangkat. Ini sengaja berdurasi tetap atas permintaan pemilik (sebelumnya tanpa delay buatan), tetap menunggu halaman siap (maks. 3 dtk) dan ada tombol Skip. Reduced-motion: lebih singkat tanpa gerak.
- Efek tambahan, terinspirasi dari portfolio referensi (EkiZR/Portofolio_V5). Isi kode referensi tidak bisa dibaca (GitHub memblokir akses otomatis ke folder src), jadi efek dipilih berdasarkan README-nya (animate-on-scroll, Framer Motion, modal detail proyek) dan dibuat ulang dengan kode sendiri, selaras gaya dark editorial:
  - Marquee teknologi (pita berjalan, berhenti saat hover)
  - Spotlight yang mengikuti mouse di kartu proyek dan jurnal
  - Tombol magnetik di hero
  - Garis progres scroll di atas layar
  - Angka jumlah repo GitHub naik dari 0 (CountUp)
  - Lightbox screenshot proyek (`<dialog>` bawaan browser)
- Semua efek mengikuti reduced-motion. Efek yang sebelumnya dihindari di spesifikasi (3D, gerak ekstra) kini dipakai atas persetujuan pemilik.
- Token baru `text-countdown` dan `text-watermark`. Catatan: `text-[clamp(...)]` arbitrer tidak dibaca Tailwind v4, selalu pakai token tema.
- Flappy Bird: teknologi HTML, CSS, JavaScript ditampilkan.

## Koreksi
Percobaan awal memakai Next.js + TypeScript karena prompt terpotong. Dibatalkan; Fase 01 diulang dengan React + Vite.
