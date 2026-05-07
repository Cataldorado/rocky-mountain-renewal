import { useState } from "react";
import { ArrowRight, MapPin, Map as MapIcon, LayoutGrid, Mountain, Users } from "lucide-react";

const states = [
  { code: "CO", name: "Colorado", count: 12, color: "var(--accent-green)" },
  { code: "AZ", name: "Arizona", count: 4, color: "var(--secondary)" },
  { code: "NE", name: "Nebraska", count: 3, color: "var(--primary)" },
];

const churches = [
  { state: "CO", name: "Denver Friends", city: "Denver, CO", img: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?auto=format&fit=crop&w=600&q=70" },
  { state: "CO", name: "Rocky Mountain Friends", city: "Colorado Springs, CO", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=70" },
  { state: "CO", name: "Mountain View Friends", city: "Greeley, CO", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=70" },
  { state: "AZ", name: "Phoenix First Friends", city: "Phoenix, AZ", img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=600&q=70" },
  { state: "AZ", name: "East Valley Friends", city: "Mesa, AZ", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=70" },
  { state: "NE", name: "Central City Friends", city: "Central City, NE", img: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=600&q=70" },
];

export default function FindChurch() {
  const [view, setView] = useState<"topo" | "grid">("topo");

  return (
    <section id="churches" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">Locate</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Find a Friends Church Near You
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Nineteen congregations across the Rocky Mountain region — explore by region or browse our community.
            </p>
          </div>

          {/* Toggle */}
          <div className="inline-flex rounded-full border border-border bg-card p-1 shadow-[var(--shadow-card)]">
            <button
              onClick={() => setView("topo")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                view === "topo" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <MapIcon size={16} /> Topographic
            </button>
            <button
              onClick={() => setView("grid")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                view === "grid" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutGrid size={16} /> Community
            </button>
          </div>
        </div>

        {view === "topo" ? <TopoView /> : <GridView />}
      </div>
    </section>
  );
}

function TopoView() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-5 fade-in-up">
      {/* Topographic map */}
      <div className="lg:col-span-3">
        <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border bg-[oklch(0.97_0.02_85)] shadow-[var(--shadow-card-hover)]">
          <svg viewBox="0 0 500 400" className="h-full w-full">
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.39 0.13 252)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="oklch(0.39 0.13 252)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="ridge" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.55 0.16 138 / 0.15)" />
                <stop offset="100%" stopColor="oklch(0.45 0.13 140 / 0.05)" />
              </linearGradient>
            </defs>

            {/* Topographic contour lines */}
            <g stroke="oklch(0.45 0.13 140 / 0.18)" fill="none" strokeWidth="1">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <path
                  key={i}
                  d={`M ${20 + i * 8} ${380 - i * 12} Q ${150 + i * 5} ${280 - i * 18}, ${280 + i * 4} ${300 - i * 14} T ${480 - i * 6} ${260 - i * 10}`}
                />
              ))}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <path
                  key={`b-${i}`}
                  d={`M ${10 + i * 6} ${100 + i * 14} Q ${180 + i * 8} ${60 + i * 18}, ${340 + i * 5} ${90 + i * 12} T ${490 - i * 4} ${130 + i * 10}`}
                />
              ))}
            </g>

            {/* Region fill */}
            <rect width="500" height="400" fill="url(#ridge)" />

            {/* State outlines (geographic-ish dotted lines) */}
            <g fill="none" strokeWidth="2" strokeDasharray="4 4">
              {/* Nebraska */}
              <path d="M 320 70 L 470 70 L 470 175 L 320 175 Z" stroke="oklch(0.39 0.13 252 / 0.6)" />
              {/* Colorado */}
              <path d="M 175 175 L 345 175 L 345 290 L 175 290 Z" stroke="oklch(0.45 0.13 140 / 0.7)" />
              {/* Arizona */}
              <path d="M 50 230 L 175 230 L 175 360 L 50 360 Z" stroke="oklch(0.55 0.16 138 / 0.7)" />
            </g>

            {/* Mountain silhouettes */}
            <g fill="oklch(0.45 0.13 140 / 0.35)">
              <polygon points="195,260 220,200 245,250 270,180 295,260" />
              <polygon points="80,330 105,280 125,310 150,270 170,330" />
            </g>

            {/* State labels */}
            <text x="395" y="125" textAnchor="middle" className="font-display fill-foreground text-lg font-bold">Nebraska</text>
            <text x="260" y="240" textAnchor="middle" className="font-display fill-foreground text-xl font-bold">Colorado</text>
            <text x="112" y="305" textAnchor="middle" className="font-display fill-foreground text-base font-bold">Arizona</text>

            {/* Pin clusters with glow */}
            {[
              { x: 260, y: 215, label: 12 },
              { x: 112, y: 290, label: 4 },
              { x: 395, y: 110, label: 3 },
            ].map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="42" fill="url(#glow)" />
                <circle cx={p.x} cy={p.y} r="18" fill="oklch(0.39 0.13 252)" stroke="white" strokeWidth="3" />
                <text x={p.x} y={p.y + 5} textAnchor="middle" className="fill-white text-sm font-bold">{p.label}</text>
              </g>
            ))}
          </svg>

          {/* Legend overlay */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            <Mountain size={12} className="text-accent-green" /> 19 congregations · 3 states
          </div>
        </div>
      </div>

      {/* State list */}
      <div className="lg:col-span-2">
        <div className="space-y-3">
          {states.map((s) => (
            <a
              key={s.code}
              href="#"
              className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg font-display text-sm font-bold text-white"
                  style={{ backgroundColor: s.color }}
                >
                  {s.code}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.count} churches</div>
                </div>
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
  );
}

function GridView() {
  return (
    <div className="fade-in-up">
      {/* Stat row */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        {states.map((s) => (
          <div
            key={s.code}
            className="relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
          >
            <div className="absolute -right-4 -top-4 font-display text-7xl font-bold opacity-10" style={{ color: s.color }}>
              {s.count}
            </div>
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.code}</div>
              <div className="mt-1 font-display text-xl font-semibold">{s.name}</div>
              <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users size={14} /> {s.count} congregations
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Photo mosaic */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {churches.map((c, i) => {
          const stateColor = states.find((s) => s.code === c.state)?.color;
          return (
            <a
              key={c.name}
              href="#"
              className={`group relative overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "h-80 sm:h-full" : "h-56"}`}>
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div
                  className="absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow"
                  style={{ backgroundColor: stateColor }}
                >
                  {c.state}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className={`font-display font-semibold ${i === 0 ? "text-2xl" : "text-lg"}`}>{c.name}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs opacity-90">
                    <MapPin size={12} /> {c.city}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-light"
        >
          View all 19 churches <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
