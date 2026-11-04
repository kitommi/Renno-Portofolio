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
`src/dev/DesignPreview.jsx` hanya untuk pengembangan, dihapus di Fase 03.

## Koreksi
Percobaan awal memakai Next.js + TypeScript karena prompt terpotong. Dibatalkan; Fase 01 diulang dengan React + Vite.
