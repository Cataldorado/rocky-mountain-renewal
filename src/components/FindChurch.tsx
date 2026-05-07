import { ArrowRight, MapPin } from "lucide-react";

const states = [
  { name: "Colorado", count: 12 },
  { name: "Arizona", count: 4 },
  { name: "Nebraska", count: 3 },
];

export default function FindChurch() {
  return (
    <section id="churches" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Stylized map */}
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/15 via-accent-green/10 to-background p-8 shadow-[var(--shadow-card)]">
            <svg viewBox="0 0 500 400" className="h-full w-full">
              <defs>
                <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="oklch(0.55 0.16 138 / 0.25)" />
                </pattern>
              </defs>
              <rect width="500" height="400" fill="url(#dots)" />
              {/* Nebraska */}
              <rect x="320" y="80" width="140" height="90" rx="6" fill="oklch(0.55 0.16 138 / 0.45)" stroke="oklch(0.45 0.13 140)" strokeWidth="2" />
              <text x="390" y="130" textAnchor="middle" className="fill-white text-sm font-semibold">NE</text>
              {/* Colorado */}
              <rect x="180" y="170" width="160" height="110" rx="6" fill="oklch(0.45 0.13 140 / 0.7)" stroke="oklch(0.35 0.11 140)" strokeWidth="2" />
              <text x="260" y="230" textAnchor="middle" className="fill-white text-base font-bold">CO</text>
              {/* Arizona */}
              <rect x="60" y="240" width="120" height="110" rx="6" fill="oklch(0.55 0.16 138 / 0.55)" stroke="oklch(0.45 0.13 140)" strokeWidth="2" />
              <text x="120" y="300" textAnchor="middle" className="fill-white text-sm font-semibold">AZ</text>
              {/* Pins */}
              {[[260, 220], [240, 200], [280, 250], [120, 290], [140, 310], [390, 120], [410, 140]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="5" fill="oklch(0.39 0.13 252)" stroke="white" strokeWidth="2" />
              ))}
            </svg>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">Locate</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Find a Friends Church Near You
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nineteen congregations across the Rocky Mountain region. Choose a state to explore churches in your area.
            </p>
            <div className="mt-8 space-y-3">
              {states.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="group flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-accent-green" />
                    <span className="font-semibold text-foreground">{s.name}</span>
                    <span className="text-sm text-muted-foreground">— {s.count} churches</span>
                  </div>
                  <ArrowRight size={18} className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                </a>
              ))}
            </div>
            <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5">
              View all churches <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
