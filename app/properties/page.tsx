import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function PropertiesPage() {
  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Featured Stays</div>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tight mb-8">
          Homes <em className="text-accent">worth chasing.</em>
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          Hand-managed properties across the United States. Click any property to check availability and book direct — no OTA fees.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      </section>
    </>
  );
}
