import { useState } from "react";
import { ArrowRight, MapPin, Map as MapIcon, LayoutGrid, Users, Phone, Mail, Globe, Navigation, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Church = {
  state: "CO" | "AZ" | "NE";
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  pastor: string;
  lat: number;
  lng: number; // negative for western hemisphere
  img: string;
};

export const states = [
  { code: "CO" as const, name: "Colorado", count: 9, color: "var(--accent-green)" },
  { code: "AZ" as const, name: "Arizona", count: 4, color: "var(--secondary)" },
  { code: "NE" as const, name: "Nebraska", count: 1, color: "var(--primary)" },
];

export const churches: Church[] = [
  {
    state: "CO",
    name: "Denver Friends Church",
    city: "Denver, CO",
    address: "3401 W 1st Ave, Denver, CO 80219",
    phone: "(303) 555-0142",
    email: "office@denverfriends.org",
    website: "https://denverfriends.org",
    pastor: "Pastor Mark Russell",
    lat: 39.74,
    lng: -104.99,
    img: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?auto=format&fit=crop&w=600&q=70",
  },
  {
    state: "CO",
    name: "Rocky Mountain Friends",
    city: "Colorado Springs, CO",
    address: "1010 E Willamette Ave, Colorado Springs, CO 80903",
    phone: "(719) 555-0188",
    email: "hello@rmfriends.org",
    website: "https://rmfriends.org",
    pastor: "Pastor Sarah Linden",
    lat: 38.83,
    lng: -104.82,
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=70",
  },
  {
    state: "CO",
    name: "Mountain View Friends",
    city: "Greeley, CO",
    address: "2425 23rd Ave, Greeley, CO 80634",
    phone: "(970) 555-0173",
    email: "info@mvfriends.org",
    website: "https://mvfriends.org",
    pastor: "Pastor David Chen",
    lat: 40.42,
    lng: -104.71,
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=70",
  },
  {
    state: "AZ",
    name: "Phoenix First Friends",
    city: "Phoenix, AZ",
    address: "1334 W Glendale Ave, Phoenix, AZ 85021",
    phone: "(602) 555-0119",
    email: "office@phxfriends.org",
    website: "https://phxfriends.org",
    pastor: "Pastor Luis Ramirez",
    lat: 33.45,
    lng: -112.07,
    img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=600&q=70",
  },
  {
    state: "AZ",
    name: "East Valley Friends",
    city: "Mesa, AZ",
    address: "2055 E Southern Ave, Mesa, AZ 85204",
    phone: "(480) 555-0167",
    email: "hello@evfriends.org",
    website: "https://evfriends.org",
    pastor: "Pastor Rebecca Knight",
    lat: 33.42,
    lng: -111.83,
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=70",
  },
  {
    state: "NE",
    name: "Central City Friends",
    city: "Central City, NE",
    address: "1607 16th St, Central City, NE 68826",
    phone: "(308) 555-0124",
    email: "office@ccfriends.org",
    website: "https://ccfriends.org",
    pastor: "Pastor John Whitfield",
    lat: 41.12,
    lng: -98.0,
    img: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=600&q=70",
  },
];

// Projection bounds covering NE / CO / AZ region
const LON_MAX_W = 114.8; // western edge (AZ west)
const LON_MIN_W = 95.3; // eastern edge (NE east)
const LAT_MAX = 43; // northern edge (NE north)
const LAT_MIN = 31.3; // southern edge (AZ south)
const VB_W = 600;
const VB_H = 400;

function project(lat: number, lng: number) {
  const x = ((LON_MAX_W - Math.abs(lng)) / (LON_MAX_W - LON_MIN_W)) * VB_W;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * VB_H;
  return { x, y };
}

export default function FindChurch() {
  const [view, setView] = useState<"map" | "grid">("map");

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
              Congregations across Colorado, Arizona, and Nebraska — click any pin to view details.
            </p>
          </div>

          <div className="inline-flex rounded-full border border-border bg-card p-1 shadow-[var(--shadow-card)]">
            <button
              onClick={() => setView("map")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                view === "map" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <MapIcon size={16} /> Map
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

        {view === "map" ? <MapView /> : <GridView />}
      </div>
    </section>
  );
}

function MapView() {
  const [selected, setSelected] = useState<Church | null>(null);

  const stateColorFor = (code: Church["state"]) =>
    code === "CO"
      ? "oklch(0.55 0.16 138)"
      : code === "AZ"
        ? "oklch(0.45 0.13 140)"
        : "oklch(0.39 0.13 252)";

  return (
    <div className="grid items-start gap-8 lg:grid-cols-5 fade-in-up">
      <div className="lg:col-span-3">
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border bg-[oklch(0.97_0.02_85)] shadow-[var(--shadow-card-hover)]">
          <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="h-full w-full">
            <defs>
              <radialGradient id="pin-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.39 0.13 252)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="oklch(0.39 0.13 252)" stopOpacity="0" />
              </radialGradient>
              <pattern id="topo" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 0 30 Q 10 20, 20 25 T 40 22"
                  fill="none"
                  stroke="oklch(0.45 0.13 140 / 0.08)"
                  strokeWidth="1"
                />
                <path
                  d="M 0 12 Q 10 4, 20 8 T 40 6"
                  fill="none"
                  stroke="oklch(0.45 0.13 140 / 0.08)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>

            {/* Background topographic texture */}
            <rect width={VB_W} height={VB_H} fill="url(#topo)" />

            {/* Nebraska — approx rectangle with panhandle */}
            <path
              d="
                M 331 0
                L 600 0
                L 600 102
                L 459 102
                L 459 102
                L 331 102
                Z
              "
              fill="oklch(0.39 0.13 252 / 0.08)"
              stroke="oklch(0.39 0.13 252 / 0.6)"
              strokeWidth="1.5"
            />

            {/* Colorado — clean rectangle */}
            <path
              d="M 178 68 L 393 68 L 393 205 L 178 205 Z"
              fill="oklch(0.55 0.16 138 / 0.10)"
              stroke="oklch(0.55 0.16 138 / 0.7)"
              strokeWidth="1.5"
            />

            {/* Arizona — rectangle with notch (top-right + SE corner approximation) */}
            <path
              d="
                M 0 205
                L 178 205
                L 178 380
                L 60 380
                L 60 400
                L 0 400
                Z
              "
              fill="oklch(0.45 0.13 140 / 0.10)"
              stroke="oklch(0.45 0.13 140 / 0.7)"
              strokeWidth="1.5"
            />

            {/* Surrounding states (subtle) */}
            <g fill="none" stroke="oklch(0.7 0.01 90)" strokeWidth="1" strokeDasharray="3 4">
              {/* Wyoming above CO */}
              <path d="M 178 0 L 393 0 L 393 68 L 178 68 Z" />
              {/* Kansas right of CO */}
              <path d="M 393 102 L 600 102 L 600 215 L 393 215 Z" />
              {/* New Mexico below CO */}
              <path d="M 178 205 L 393 205 L 393 360 L 178 360 Z" />
              {/* Utah left of CO */}
              <path d="M 0 68 L 178 68 L 178 205 L 0 205 Z" />
            </g>

            {/* State labels */}
            <text x="465" y="56" textAnchor="middle" className="font-display fill-foreground text-base font-bold">
              NEBRASKA
            </text>
            <text x="285" y="140" textAnchor="middle" className="font-display fill-foreground text-base font-bold">
              COLORADO
            </text>
            <text x="89" y="295" textAnchor="middle" className="font-display fill-foreground text-base font-bold">
              ARIZONA
            </text>

            {/* Church pins */}
            {churches.map((c) => {
              const { x, y } = project(c.lat, c.lng);
              const color = stateColorFor(c.state);
              const isActive = selected?.name === c.name;
              return (
                <g
                  key={c.name}
                  className="cursor-pointer"
                  onClick={() => setSelected(c)}
                  role="button"
                  aria-label={`${c.name} — ${c.city}`}
                >
                  <circle cx={x} cy={y} r={isActive ? 28 : 20} fill="url(#pin-glow)" />
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 11 : 8}
                    fill={color}
                    stroke="white"
                    strokeWidth="2.5"
                    className="transition-all"
                  />
                  <circle cx={x} cy={y} r="2.5" fill="white" />
                </g>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-3 rounded-lg bg-background/90 px-3 py-2 text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur">
            {states.map((s) => (
              <span key={s.code} className="flex items-center gap-1.5">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full ring-2 ring-white"
                  style={{ backgroundColor: s.color }}
                />
                {s.name}
              </span>
            ))}
          </div>

          {/* Hint */}
          <div className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold text-muted-foreground shadow-sm backdrop-blur">
            Click a pin for church details
          </div>
        </div>
      </div>

      {/* State summary list */}
      <div className="lg:col-span-2">
        <div className="space-y-3">
          {states.map((s) => (
            <div
              key={s.code}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)]"
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
                  <div className="text-xs text-muted-foreground">{s.count} {s.count === 1 ? "church" : "churches"}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5">
          View all churches <ArrowRight size={16} />
        </a>
      </div>

      <ChurchDialog church={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function ChurchDialog({ church, onClose }: { church: Church | null; onClose: () => void }) {
  const directionsUrl = church
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(church.address)}`
    : "#";

  return (
    <Dialog open={!!church} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg overflow-hidden p-0">
        {church && (
          <>
            <div className="relative h-44 w-full">
              <img src={church.img} alt={church.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-5 right-5 text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider opacity-90">{church.state}</div>
                <DialogTitle className="font-display text-2xl font-semibold leading-tight">
                  {church.name}
                </DialogTitle>
              </div>
            </div>

            <div className="p-6">
              <DialogHeader className="sr-only">
                <DialogDescription>Church contact details</DialogDescription>
              </DialogHeader>

              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <User size={16} className="mt-0.5 shrink-0 text-accent-green" />
                  <span><span className="text-muted-foreground">Pastor: </span><span className="font-medium text-foreground">{church.pastor}</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent-green" />
                  <span className="text-foreground">{church.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-accent-green" />
                  <a href={`tel:${church.phone.replace(/[^0-9+]/g, "")}`} className="text-foreground hover:text-primary">
                    {church.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 shrink-0 text-accent-green" />
                  <a href={`mailto:${church.email}`} className="text-foreground hover:text-primary">
                    {church.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Globe size={16} className="mt-0.5 shrink-0 text-accent-green" />
                  <a href={church.website} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary">
                    {church.website.replace(/^https?:\/\//, "")}
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <a
                  href={church.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow transition hover:bg-primary-light"
                >
                  <Globe size={16} /> Visit Website
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  <Navigation size={16} /> Get Directions
                </a>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function GridView() {
  return (
    <div className="fade-in-up">
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
    </div>
  );
}
