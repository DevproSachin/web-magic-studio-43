import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { readings } from "@/lib/site-data";

export const Route = createFileRoute("/readings")({
  head: () => ({
    meta: [
      { title: "Tarot Readings — Love, Career & Year Ahead | Mystic Aura" },
      {
        name: "description",
        content:
          "Browse personal tarot readings from Mystic Aura: love, career, general, year ahead and live chat sessions with expert readers.",
      },
      { property: "og:title", content: "Tarot Readings | Mystic Aura" },
      {
        property: "og:description",
        content: "Personal tarot readings for love, career, the year ahead and more.",
      },
    ],
  }),
  component: ReadingsPage,
});

const included = [
  "A hand-written reading from a real reader",
  "Delivered within 48 hours by email",
  "Follow-up question included",
  "Completely private and confidential",
];

function ReadingsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="eyebrow">Our Services</p>
      <h1 className="mt-3 font-display text-4xl">Choose Your Reading</h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        Every reading is prepared by hand for you alone. Pick the path that matches the
        question on your heart.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {readings.map((r) => (
          <article key={r.slug} className="mystic-card flex flex-col p-7">
            <h2 className="font-display text-xl">{r.name}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{r.blurb}</p>
            <ul className="mt-5 space-y-2 text-xs text-muted-foreground">
              {included.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-2xl gold-text">{r.price}</p>
            <Link to="/contact" className="btn-gold mt-5">Book This Reading</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
