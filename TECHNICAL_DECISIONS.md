# Keputusan Teknis

| Tanggal | Keputusan | Alasan |
|---|---|---|
| 4 Nov 2026 | React + Vite + JavaScript | Sesuai spesifikasi; lebih sederhana untuk pemilik yang baru belajar React |
| 4 Nov 2026 | Tailwind CSS v4 lewat plugin `@tailwindcss/vite` | Setup sederhana, token warna lewat `@theme` di CSS |
| 4 Nov 2026 | Framer Motion untuk animasi, Lucide React untuk ikon | Sesuai spesifikasi |
| 4 Nov 2026 | Tanpa backend | Sesuai spesifikasi; kontak lewat layanan frontend |
| 4 Nov 2026 | Data situs di `src/lib/site.js` | Satu sumber data, mudah diubah |
| 4 Nov 2026 | Font ditunda ke Fase 02 | Tipografi bagian dari design system |
| 4 Nov 2026 | Pengiriman file lewat zip per fase | Claude Chat bisa membuat file langsung; pemilik menjalankan lokal dan mengirim zip balik untuk revisi |

## Koreksi
Percobaan awal memakai Next.js + TypeScript karena prompt terpotong. Dibatalkan; Fase 01 diulang dengan React + Vite.
