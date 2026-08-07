import { products, getWaLink } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import ProductCard from "@/components/ProductCard";
import SectionDivider from "@/components/SectionDivider";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const heroWaLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  `Halo ${siteConfig.name}, saya mau tanya-tanya soal bunga.`
)}`;

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-xl text-berry">{siteConfig.name}</span>
          <a
            href={heroWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-rose px-5 py-2 text-sm font-medium text-ivory transition-colors hover:bg-rose-dark md:inline-block"
          >
            Chat via WhatsApp
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="fade-up flex flex-col items-start gap-6">
            <span className="rounded-full border border-line px-4 py-1 text-xs font-medium tracking-wide text-rose-dark uppercase">
              {siteConfig.location}
            </span>
            <h1 className="max-w-xl font-display text-4xl leading-tight text-berry md:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-berry/75 md:text-lg">
              {siteConfig.description}
            </p>
            <a
              href={heroWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-rose px-7 py-3 text-sm font-medium text-ivory transition-colors hover:bg-rose-dark"
            >
              Pesan Sekarang via WhatsApp
            </a>
          </div>
        </section>

        <SectionDivider />

        {/* Produk */}
        <section id="produk" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="mb-10 flex flex-col gap-2">
            <span className="text-xs font-medium tracking-wide text-moss uppercase">
              Pilihan Buket
            </span>
            <h2 className="font-display text-3xl text-berry md:text-4xl">
              Rangkaian Bunga Favorit
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Testimoni */}
        <section className="bg-blush/60 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex flex-col gap-2">
              <span className="text-xs font-medium tracking-wide text-moss uppercase">
                Kata Pelanggan
              </span>
              <h2 className="font-display text-3xl text-berry md:text-4xl">
                Dipercaya Pecinta Bunga
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {siteConfig.testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col gap-3 rounded-2xl border border-line bg-ivory p-6"
                >
                  <div aria-label={`Rating ${t.rating} dari 5`} className="text-rose">
                    {"★".repeat(t.rating)}
                    <span className="text-line">{"★".repeat(5 - t.rating)}</span>
                  </div>
                  <blockquote className="text-sm leading-relaxed text-berry/80">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="font-display text-base text-berry">
                    {t.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Kontak / Footer */}
        <section id="kontak" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium tracking-wide text-moss uppercase">
                Hubungi Kami
              </span>
              <h2 className="font-display text-3xl text-berry">Ada Pertanyaan?</h2>
              <p className="max-w-md text-sm leading-relaxed text-berry/70">
                Semua pemesanan dan konsultasi rangkaian bunga dilayani langsung lewat
                WhatsApp — respon cepat setiap hari.
              </p>
              <a
                href={heroWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-fit rounded-full bg-rose px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-rose-dark"
              >
                Chat via WhatsApp
              </a>
            </div>
            <dl className="grid grid-cols-1 gap-4 text-sm">
              <div>
                <dt className="font-medium text-berry">Alamat</dt>
                <dd className="text-berry/70">{siteConfig.contact.address}</dd>
              </div>
              <div>
                <dt className="font-medium text-berry">Jam Operasional</dt>
                <dd className="text-berry/70">{siteConfig.contact.hours}</dd>
              </div>
              <div>
                <dt className="font-medium text-berry">Email</dt>
                <dd className="text-berry/70">{siteConfig.contact.email}</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-8 text-center text-xs text-berry/60">
        © {new Date().getFullYear()} {siteConfig.name}. Semua hak dilindungi.
      </footer>

      <WhatsAppFloatingButton />
    </>
  );
}
