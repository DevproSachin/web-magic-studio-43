import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Compass, Eye, Heart, Lock, MessageCircle, Moon, ShieldCheck, Sparkles, Star, Sun } from "lucide-react";

import heroImage from "@/assets/hero-mystic.jpg";
import { NumerologyCalculator } from "@/components/site/NumerologyCalculator";
import { perks, products, readings, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mystic Aura — Tarot Readings & Spiritual Guidance" },
      {
        name: "description",
        content:
          "Personal tarot readings, live chat sessions and mystical products to bring clarity to your love life, career and future.",
      },
      { property: "og:title", content: "Mystic Aura — Tarot Readings & Spiritual Guidance" },
      {
        property: "og:description",
        content: "Trusted tarot readings and spiritual guidance to help you on your journey.",
      },
    ],
  }),
  component: Index,
});

const perkIcons = [Eye, Lock, Clock, Compass];
const readingIcons: Record<string, typeof Moon> = {
  moon: Heart,
  sun: Sun,
  orb: Moon,
  star: Star,
  chat: MessageCircle,
};

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Find <span className="gold-text">Clarity.</span>
              <br />
              Embrace Your <span className="gold-text">Future.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground">
              Trusted tarot readings and spiritual guidance to help you on your journey —
              written by hand, never automated.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {perks.map((perk, i) => {
                const Icon = perkIcons[i] ?? Sparkles;
                return (
                  <div key={perk.title}>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="mt-2 text-xs font-semibold">{perk.title}</p>
                    <p className="text-[0.7rem] text-muted-foreground">{perk.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/readings" className="btn-gold">Book a Reading</Link>
              <Link to="/shop" className="btn-outline-gold">Shop Products</Link>
            </div>
          </div>

          <div className="relative">
            <span className="absolute -top-6 left-4 z-10 hidden h-24 w-24 items-center justify-center rounded-full border border-gold/50 bg-background/70 text-center font-display text-[0.65rem] tracking-[0.2em] text-gold lg:flex">
              YOUR
              <br />
              JOURNEY
              <br />
              AWAITS
            </span>
            <img
              src={heroImage}
              alt="Crystal ball, candle and tarot cards on a dark mystical table"
              width={1536}
              height={1024}
              className="w-full rounded-2xl border border-gold/25 object-cover shadow-[var(--shadow-mystic)]"
            />
          </div>
        </div>
      </section>

      {/* Readings */}
      <section className="bg-surface text-surface-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="text-center font-display text-2xl tracking-[0.2em] uppercase">
            ✦ Choose Your Reading ✦
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {readings.map((r) => {
              const Icon = readingIcons[r.icon] ?? Star;
              return (
                <article
                  key={r.slug}
                  className="flex flex-col items-center rounded-xl border border-surface-foreground/10 bg-white/70 p-6 text-center transition-transform hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base">{r.name}</h3>
                  <p className="mt-2 text-xs text-surface-foreground/70">{r.blurb}</p>
                  <p className="mt-4 font-display text-lg">{r.price}</p>
                  <Link to="/readings" className="btn-violet mt-4 w-full">Book Now</Link>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/readings" className="btn-violet">View All Readings</Link>
          </div>
        </div>
      </section>

      <NumerologyCalculator />

      {/* Products */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center font-display text-2xl tracking-[0.2em] uppercase gold-text">
            ✦ Featured Products ✦
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {products.map((p) => (
              <article key={p.name} className="mystic-card overflow-hidden p-3 text-center">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={816}
                  height={816}
                  className="aspect-square w-full rounded-md object-cover"
                />
                <h3 className="mt-3 text-sm leading-snug">{p.name}</h3>
                <p className="mt-1 text-sm text-gold">{p.price}</p>
                <Link to="/shop" className="btn-violet mt-3 w-full">Add to Cart</Link>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/shop" className="btn-gold">View All Products</Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-surface text-surface-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="eyebrow text-primary">About Mystic Aura</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-surface-foreground/80">
              At Mystic Aura we believe guidance is always within reach. Our experienced
              readers use tarot and intuition to help you find answers, clarity and peace
              of mind — whatever question you carry.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { icon: ShieldCheck, label: "Trusted & Experienced Readers" },
                { icon: Lock, label: "Private & Confidential" },
                { icon: Star, label: "Accurate & Insightful Guidance" },
                { icon: Heart, label: "Compassionate Support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon className="mx-auto h-6 w-6 text-primary" />
                  <p className="mt-2 text-xs">{label}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-violet mt-8">Learn More About Us</Link>
          </div>
          <div className="flex items-center justify-center">
            <Sun className="h-40 w-40 text-primary/30" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center font-display text-2xl tracking-[0.2em] uppercase gold-text">
            ✦ What Our Clients Say ✦
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="mystic-card p-6">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm text-muted-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-xs tracking-[0.18em] uppercase text-gold">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
