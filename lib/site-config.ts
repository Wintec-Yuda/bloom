// Ganti semua value di sini sesuai toko kamu sebelum deploy.
// File ini jadi satu sumber data buat metadata SEO, hero section, dan footer.

export const siteConfig = {
  name: "Bloom & Co",
  tagline: "Toko Bunga Segar untuk Setiap Momen Spesial",

  // Dipakai di meta description & section "tentang kami" — usahakan 1-2 kalimat, natural, ada kata kunci
  description:
    "Bloom & Co menyediakan rangkaian bunga segar untuk hadiah anniversary, ulang tahun, wisuda, hingga ucapan duka cita. Pesan mudah lewat WhatsApp, dikirim hari yang sama untuk area Surabaya.",

  // Ganti dengan kota/area target kamu — penting buat local SEO
  location: "Surabaya, Jawa Timur",

  contact: {
    whatsapp: "6281230490961", // samain dengan WA_NUMBER di products.ts
    email: "halo@bloomandco.id",
    address: "Jl. Mawar Indah No. 10, Surabaya",
    hours: "Setiap hari, 08.00 - 20.00 WIB",
  },

  // Dummy dulu buat belajar — ganti dengan testimoni asli begitu ada pelanggan
  testimonials: [
    {
      name: "Rina A.",
      text: "Bunganya segar banget dan sampai tepat waktu buat surprise ulang tahun pacar. Recommended!",
      rating: 5,
    },
    {
      name: "Dimas P.",
      text: "Pesan via WA gampang, respon cepat, rangkaiannya rapi. Pasti order lagi.",
      rating: 5,
    },
    {
      name: "Sari W.",
      text: "Baby breath-nya cantik banget buat dekorasi acara kantor. Harganya juga masuk akal.",
      rating: 5,
    },
  ],

  social: {
    instagram: "https://instagram.com/bloomandco.id", // opsional, ganti/hapus kalau belum ada
  },
};
