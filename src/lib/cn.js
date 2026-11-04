// Menggabungkan nama class. Nilai kosong/false diabaikan.
// Catatan: tidak ada penggabungan konflik class Tailwind, jadi
// jangan memberi className yang bertabrakan dengan class bawaan komponen.
export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}
