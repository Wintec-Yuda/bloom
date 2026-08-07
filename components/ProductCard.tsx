import Image from "next/image";
import { Product, formatPrice, getWaLink } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white/60">
      <div className="relative aspect-square w-full overflow-hidden bg-blush">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg leading-snug text-berry">{product.name}</h3>
        <p className="text-sm leading-relaxed text-berry/70">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-display text-lg text-rose-dark">{formatPrice(product.price)}</span>
          <a
            href={getWaLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-moss px-4 py-2 text-sm font-medium text-ivory transition-colors hover:bg-moss-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
          >
            Pesan via WA
          </a>
        </div>
      </div>
    </article>
  );
}
