import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Lock, ShieldCheck, Star } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mystic Aura — Our Readers & Our Promise" },
      {
        name: "description",
        content:
          "Meet the readers behind Mystic Aura: experienced, compassionate tarot practitioners offering private, insightful spiritual guidance.",
      },
      { property: "og:title", content: "About Mystic Aura" },
      {
        property: "og:description",
        content: "Experienced, compassionate tarot readers offering private spiritual guidance.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Trusted & Experienced", text: "Over a decade of readings between our team." },
  { icon: Lock, title: "Private & Confidential", text: "What you share stays between you and your reader." },
  { icon: Star, title: "Accurate & Insightful", text: "Honest guidance, never vague generalities." },
  { icon: Heart, title: "Compassionate Support", text: "We meet you where you are, without judgement." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="eyebrow">About Us</p>
      <h1 className="mt-3 font-display text-4xl">The Story of Mystic Aura</h1>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        Mystic Aura began with a simple belief: everyone deserves clear, kind guidance when
        life feels uncertain. What started as readings for friends around a kitchen table has
        grown into a small circle of readers serving seekers all over the world.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Every reading is written by a person, not a machine. We take time with your question,
        draw your cards, and send you an honest interpretation you can actually act on.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="mystic-card p-6">
            <Icon className="h-6 w-6 text-gold" />
            <h2 className="mt-3 text-lg">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link to="/readings" className="btn-gold">Book a Reading</Link>
        <Link to="/contact" className="btn-outline-gold">Talk to Us</Link>
      </div>
    </div>
  );
}
