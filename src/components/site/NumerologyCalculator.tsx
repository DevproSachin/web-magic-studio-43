import { useState } from "react";
import { Sparkles } from "lucide-react";

const LETTER_VALUES: Record<string, number> = {
  a: 1, j: 1, s: 1,
  b: 2, k: 2, t: 2,
  c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4,
  e: 5, n: 5, w: 5,
  f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7,
  h: 8, q: 8, z: 8,
  i: 9, r: 9,
};

const MASTER = [11, 22, 33];

function reduceNumber(n: number): number {
  while (n > 9 && !MASTER.includes(n)) {
    n = String(n)
      .split("")
      .reduce((sum, d) => sum + Number(d), 0);
  }
  return n;
}

function digitsSum(value: string) {
  return value
    .split("")
    .filter((c) => /\d/.test(c))
    .reduce((sum, d) => sum + Number(d), 0);
}

const LIFE_PATH_MEANINGS: Record<number, { title: string; text: string }> = {
  1: { title: "The Pioneer", text: "Independent and driven. You are here to lead and start new paths." },
  2: { title: "The Peacemaker", text: "Sensitive and intuitive. Harmony and partnership guide your journey." },
  3: { title: "The Creator", text: "Expressive and joyful. Your words and art lift the people around you." },
  4: { title: "The Builder", text: "Grounded and loyal. You create lasting security through steady effort." },
  5: { title: "The Free Spirit", text: "Curious and adventurous. Change and freedom are your teachers." },
  6: { title: "The Nurturer", text: "Caring and responsible. Home, love and healing are your gifts." },
  7: { title: "The Seeker", text: "Deep and spiritual. You are drawn to hidden truths and inner wisdom." },
  8: { title: "The Achiever", text: "Ambitious and capable. Abundance comes through focus and integrity." },
  9: { title: "The Humanitarian", text: "Compassionate and wise. You are here to serve and to let go gracefully." },
  11: { title: "Master Intuitive", text: "Highly intuitive and inspiring. You awaken something in everyone you meet." },
  22: { title: "Master Builder", text: "Visionary with practical power. You can turn big dreams into reality." },
  33: { title: "Master Teacher", text: "Rare, loving energy. You uplift others through selfless guidance." },
};

export function NumerologyCalculator() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<
    | {
        lifePath: number;
        destiny: number;
        birthday: number;
        meaning: { title: string; text: string };
      }
    | null
  >(null);
  const [error, setError] = useState("");

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    if (!dob) {
      setError("Please choose your date of birth.");
      setResult(null);
      return;
    }
    const [year = "", month = "", day = ""] = dob.split("-");
    const lifePath = reduceNumber(
      reduceNumber(digitsSum(day)) + reduceNumber(digitsSum(month)) + reduceNumber(digitsSum(year)),
    );
    const letters = name.toLowerCase().replace(/[^a-z]/g, "");
    const destiny = letters
      ? reduceNumber(letters.split("").reduce((sum, c) => sum + (LETTER_VALUES[c] ?? 0), 0))
      : 0;
    const birthday = reduceNumber(Number(day));

    setError("");
    setResult({
      lifePath,
      destiny,
      birthday,
      meaning:
        LIFE_PATH_MEANINGS[lifePath] ??
        ({ title: "Your Path", text: "A unique journey shaped by your own choices." } as const),
    });
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-5">
        <h2 className="text-center font-display text-2xl tracking-[0.2em] uppercase gold-text">
          ✦ Free Numerology Calculator ✦
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
          Enter your full birth name and date of birth to reveal your Life Path,
          Destiny and Birthday numbers instantly.
        </p>

        <div className="mystic-card mt-10 p-6 sm:p-8">
          <form onSubmit={calculate} className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="text-xs tracking-[0.18em] uppercase text-gold">Full Birth Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Jane Wilson"
                className="mt-2 w-full rounded-md border border-border bg-background/60 px-3 py-2 text-sm text-foreground outline-none focus:border-gold/60"
              />
            </label>
            <label className="block text-sm">
              <span className="text-xs tracking-[0.18em] uppercase text-gold">Date of Birth</span>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="mt-2 w-full rounded-md border border-border bg-background/60 px-3 py-2 text-sm text-foreground outline-none focus:border-gold/60"
              />
            </label>
            <div className="sm:col-span-2">
              <button type="submit" className="btn-gold w-full sm:w-auto">
                <Sparkles className="h-4 w-4" />
                Reveal My Numbers
              </button>
              {error ? <p className="mt-3 text-xs text-destructive">{error}</p> : null}
            </div>
          </form>

          {result ? (
            <div className="mt-8 border-t border-gold/20 pt-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Life Path", value: result.lifePath },
                  { label: "Destiny", value: result.destiny || "—" },
                  { label: "Birthday", value: result.birthday },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-gold/25 bg-background/50 p-5 text-center"
                  >
                    <p className="font-display text-4xl gold-text">{item.value}</p>
                    <p className="mt-2 text-xs tracking-[0.18em] uppercase text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-display text-xl text-gold">
                  Life Path {result.lifePath} — {result.meaning.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
                  {result.meaning.text}
                </p>
                {!result.destiny ? (
                  <p className="mt-3 text-xs text-muted-foreground">
                    Add your full birth name to also see your Destiny number.
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
