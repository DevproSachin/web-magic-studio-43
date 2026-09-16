import manifestation from "@/assets/product-manifestation.jpg";
import cheatsheet from "@/assets/product-cheatsheet.jpg";
import journal from "@/assets/product-journal.jpg";
import crystals from "@/assets/product-crystals.jpg";
import cardguide from "@/assets/product-cardguide.jpg";
import protection from "@/assets/product-protection.jpg";

export const readings = [
  {
    slug: "love",
    name: "Love Reading",
    price: "£19.99",
    blurb: "Get clarity about your love life and relationships.",
    icon: "moon",
  },
  {
    slug: "career",
    name: "Career Reading",
    price: "£24.99",
    blurb: "Guidance for your career, finances and life purpose.",
    icon: "sun",
  },
  {
    slug: "general",
    name: "General Reading",
    price: "£29.99",
    blurb: "A detailed reading covering all areas of your life.",
    icon: "orb",
  },
  {
    slug: "year-ahead",
    name: "Year Ahead Reading",
    price: "£34.99",
    blurb: "Discover what the upcoming year holds for you.",
    icon: "star",
  },
  {
    slug: "live-chat",
    name: "Live Chat Reading",
    price: "£39.99",
    blurb: "Live 1-to-1 reading with one of our expert readers.",
    icon: "chat",
  },
] as const;

export const products = [
  { name: "Manifestation Guide eBook", price: "£9.99", image: manifestation },
  { name: "Tarot Cheat Sheet Download", price: "£4.99", image: cheatsheet },
  { name: "Moon Magic Journal", price: "£11.99", image: journal },
  { name: "Crystal Healing Kit", price: "£18.99", image: crystals },
  { name: "Daily Tarot Card Guide", price: "£8.99", image: cardguide },
  { name: "Protection Spells Digital Book", price: "£7.99", image: protection },
];

export const perks = [
  { title: "Accurate Readings", text: "Hand-written by experienced readers." },
  { title: "100% Private & Confidential", text: "Your questions never leave us." },
  { title: "24/7 Available", text: "Order any time, day or night." },
  { title: "Guidance For Every Path", text: "Love, career, healing and beyond." },
];

export const testimonials = [
  {
    quote:
      "The reading was so accurate and gave me the clarity I needed. I feel more confident about my path now.",
    name: "Sarah J.",
  },
  {
    quote:
      "Highly recommended. The reader was kind, insightful and everything resonated perfectly.",
    name: "James E.",
  },
  {
    quote:
      "I ordered the eBook and it's amazing. Packed with valuable information and easy to follow.",
    name: "Emily R.",
  },
];
