import { Link } from "@tanstack/react-router";
import { Menu, Moon, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/readings", label: "Readings" },
  { to: "/shop", label: "Shop" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold">
            <Moon className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl gold-text">Mystic Aura</span>
            <span className="block text-[0.6rem] tracking-[0.36em] text-muted-foreground">
              TAROT &amp; FORTUNE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-gold" }}
              className="text-xs font-semibold tracking-[0.18em] uppercase text-foreground/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-foreground/80">
          <button aria-label="Search" className="hidden transition-colors hover:text-gold sm:block">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/contact" aria-label="Account" className="hidden transition-colors hover:text-gold sm:block">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/shop" aria-label="Cart" className="relative transition-colors hover:text-gold">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[0.6rem] font-bold text-background">
              0
            </span>
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-5 py-3 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm tracking-[0.16em] uppercase text-foreground/85"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
