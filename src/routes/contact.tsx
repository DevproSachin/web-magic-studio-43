import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mystic Aura — Book a Reading or Ask a Question" },
      {
        name: "description",
        content:
          "Get in touch with Mystic Aura to book a tarot reading, ask about a product, or request support from our team.",
      },
      { property: "og:title", content: "Contact Mystic Aura" },
      {
        property: "og:description",
        content: "Book a reading or ask our team a question — we reply within 24 hours.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 font-display text-4xl">Let's Connect</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Booking a reading or have a question about an order? Send us a message and a real
          person will reply.
        </p>

        <ul className="mt-8 space-y-4 text-sm">
          <li className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-gold" /> hello@mysticaura.example
          </li>
          <li className="flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-gold" /> Live chat readings available daily
          </li>
          <li className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-gold" /> Replies within 24 hours
          </li>
        </ul>
      </div>

      <form
        className="mystic-card space-y-4 p-7"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div>
          <label htmlFor="name" className="text-xs tracking-[0.18em] uppercase text-gold">Name</label>
          <input id="name" required className="mt-2 w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm outline-none focus:border-gold/60" />
        </div>
        <div>
          <label htmlFor="email" className="text-xs tracking-[0.18em] uppercase text-gold">Email</label>
          <input id="email" type="email" required className="mt-2 w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm outline-none focus:border-gold/60" />
        </div>
        <div>
          <label htmlFor="message" className="text-xs tracking-[0.18em] uppercase text-gold">Your Question</label>
          <textarea id="message" rows={5} required className="mt-2 w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm outline-none focus:border-gold/60" />
        </div>
        <button type="submit" className="btn-gold w-full">Send Message</button>
        {sent && (
          <p className="text-center text-sm text-gold">
            Thank you — your message has been received.
          </p>
        )}
      </form>
    </div>
  );
}
