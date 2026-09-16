import { createFileRoute, Link } from "@tanstack/react-router";

import { products } from "@/lib/site-data";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Tarot eBooks, Journals & Crystals | Mystic Aura" },
      {
        name: "description",
        content:
          "Mystical digital downloads and tools: tarot cheat sheets, manifestation guides, moon journals, crystal kits and protection spell books.",
      },
      { property: "og:title", content: "Mystic Aura Shop" },
      {
        property: "og:description",
        content: "Tarot guides, journals and crystal kits for your spiritual practice.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="eyebrow">The Shop</p>
      <h1 className="mt-3 font-display text-4xl">Mystical Tools &amp; Downloads</h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        Instant-access guides and hand-picked tools to deepen your practice between
        readings.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.name} className="mystic-card overflow-hidden">
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              width={816}
              height={816}
              className="aspect-square w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-base">{p.name}</h2>
              <p className="mt-1 text-sm text-gold">{p.price}</p>
              <Link to="/contact" className="btn-violet mt-4 w-full">Add to Cart</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
