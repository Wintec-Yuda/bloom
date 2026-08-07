import { siteConfig } from "./site-config";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  imageAlt: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "buket-mawar-merah",
    name: "Buket Mawar Merah Premium",
    price: 185000,
    shortDescription:
      "Buket 12 tangkai mawar merah segar, cocok untuk hadiah anniversary atau ungkapan cinta.",
    description:
      "Buket berisi 12 tangkai mawar merah pilihan, dibungkus kertas premium dengan pita satin. Bunga dipetik segar setiap hari, ideal untuk hadiah anniversary, ulang tahun pasangan, atau kejutan romantis.",
    imageAlt: "Buket 12 tangkai mawar merah segar dibungkus kertas premium",
    image: "/products/buket-mawar-merah.svg",
  },
  {
    id: "2",
    slug: "rangkaian-bunga-matahari",
    name: "Rangkaian Bunga Matahari Ceria",
    price: 150000,
    shortDescription:
      "Rangkaian bunga matahari cerah, cocok untuk hadiah ucapan selamat atau semangat sembuh.",
    description:
      "Rangkaian 6 tangkai bunga matahari segar dipadukan daun hijau, dikemas dalam vas kertas kraft. Pilihan tepat untuk ucapan selamat wisuda, kelulusan, atau semangat sembuh.",
    imageAlt: "Rangkaian bunga matahari segar dalam vas kertas kraft",
    image: "/products/rangkaian-bunga-matahari.svg",
  },
  {
    id: "3",
    slug: "buket-bunga-baby-breath",
    name: "Buket Baby Breath Putih",
    price: 120000,
    shortDescription:
      "Buket baby breath putih lembut, pilihan populer untuk hadiah minimalis dan estetik.",
    description:
      "Buket full baby breath putih segar dengan wrapping minimalis, cocok untuk hadiah ulang tahun, pajangan foto, atau dekorasi acara bertema soft dan estetik.",
    imageAlt: "Buket bunga baby breath putih dengan wrapping minimalis",
    image: "/products/buket-bunga-baby-breath.svg",
  },
  {
    id: "4",
    slug: "rangkaian-anggrek-bulan",
    name: "Rangkaian Anggrek Bulan",
    price: 275000,
    shortDescription:
      "Rangkaian anggrek bulan elegan dalam pot keramik, cocok untuk hadiah korporat.",
    description:
      "Rangkaian anggrek bulan (phalaenopsis) segar dalam pot keramik putih, tahan lama hingga berminggu-minggu. Pilihan elegan untuk hadiah pembukaan usaha, ucapan duka cita, atau apresiasi kerja.",
    imageAlt: "Rangkaian anggrek bulan putih dalam pot keramik",
    image: "/products/rangkaian-anggrek-bulan.svg",
  },
  {
    id: "5",
    slug: "buket-bunga-tulip-mix",
    name: "Buket Tulip Mix Warna",
    price: 210000,
    shortDescription:
      "Buket 10 tangkai tulip aneka warna, segar dan cocok untuk hadiah spesial.",
    description:
      "Buket berisi 10 tangkai tulip impor aneka warna (merah, kuning, pink), dibungkus paper wrap elegan. Cocok untuk hadiah ulang tahun, wisuda, atau self-reward.",
    imageAlt: "Buket 10 tangkai tulip aneka warna dibungkus paper wrap",
    image: "/products/buket-bunga-tulip-mix.svg",
  },
];

export function getWaLink(product: Product) {
  const message = `Halo, saya mau pesan ${product.name} seharga Rp${product.price.toLocaleString(
    "id-ID"
  )}. Apakah masih tersedia?`;
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(price: number) {
  return `Rp${price.toLocaleString("id-ID")}`;
}
