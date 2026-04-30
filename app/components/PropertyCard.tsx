import Link from "next/link";
import Image from "next/image";
import type { Property } from "../data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className={`relative rounded overflow-hidden cursor-pointer transition-transform hover:scale-[0.98] block ${!property.image ? property.gradient : ""}`}
      style={{ minHeight: 280 }}
    >
      {property.image ? (
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          unoptimized
        />
      ) : (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 31px)",
          }}
        />
      )}
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-[1]" />

      <span className="absolute top-4 left-4 bg-bg/95 text-ink px-3 py-1 rounded-full text-[0.7rem] uppercase tracking-[0.15em] z-10">
        {property.tag}
      </span>
      <div className="absolute bottom-5 left-5 right-5 z-10 flex justify-between items-end text-white">
        <div>
          <h4 className="font-serif text-xl mb-1">{property.name}</h4>
          <div className="text-xs uppercase tracking-[0.15em] opacity-80">{property.location}</div>
        </div>
        <div className="font-serif italic text-accent">${property.price}/nt</div>
      </div>
    </Link>
  );
}
