import { Link } from "@tanstack/react-router";
import { CreditCard, HeadphonesIcon, Moon, ShieldCheck, Wallet } from "lucide-react";

const strip = [
  { icon: ShieldCheck, title: "Secure Payments", text: "Your purchases are 100% safe and protected." },
  { icon: Wallet, title: "Multiple Payment Options", text: "Pay with PayPal, Visa, Mastercard or Apple Pay." },
  { icon: CreditCard, title: "Instant Access", text: "Get digital products delivered instantly." },
  { icon: HeadphonesIcon, title: "Need Help?", text: "Chat with us or write to our support team." },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {strip.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3">
            <Icon className="mt-1 h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold">
                <Moon className="h-5 w-5" />
              </span>
              <span className="font-display text-xl gold-text">Mystic Aura</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Trusted tarot readings and spiritual guidance, written by hand and delivered
              straight to your inbox.
            </p>
          </div>

          <div>
            <h4 className="eyebrow">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/readings" className="hover:text-gold">All Readings</Link></li>
              <li><Link to="/shop" className="hover:text-gold">Shop</Link></li>
              <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Readings</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Love Reading</li>
              <li>Career Reading</li>
              <li>General Reading</li>
              <li>Year Ahead Reading</li>
              <li>Live Chat Reading</li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Stay Connected</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe for monthly moon guidance and offers.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email address"
                className="w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-gold/60"
              />
              <button type="submit" className="btn-gold px-4 py-2">Join</button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mystic Aura. All rights reserved.
      </div>
    </footer>
  );
}
