import { createFileRoute } from "@tanstack/react-router";
import { Heart, Hand, Sun, Leaf, Coffee, Users, ArrowRight, MapPin } from "lucide-react";
import logoImg from "@/assets/rmym-logo.png";

export const Route = createFileRoute("/v4")({
  head: () => ({
    meta: [
      { title: "RMYM — Handcrafted Concept" },
      { name: "description", content: "Warm, handcrafted concept for Rocky Mountain Yearly Meeting." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Nunito:wght@400;600;700&display=swap",
      },
    ],
  }),
  component: V4,
});

const display = { fontFamily: "'Fraunces', Georgia, serif" };
const hand = { fontFamily: "'Caveat', cursive" };
const body = { fontFamily: "'Nunito', sans-serif" };

const paper = "#f4ecd9";
const ink = "#3a2418";
const clay = "#b3502c";
const moss = "#587a3a";
const sky = "#7fa6b8";

function V4() {
  return (
    <div style={{ ...body, backgroundColor: paper, color: ink }} className="min-h-screen">
      {/* Paper texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #000 1px, transparent 1px), radial-gradient(circle at 70% 60%, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px, 60px 60px",
        }}
      />

      {/* Nav */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm" style={{ border: `1px solid ${ink}` }}>
              <img src={logoImg} alt="RMYM" style={{ height: 44 }} className="w-auto object-contain" />
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            {["Gathering", "Churches", "Mission", "Stories"].map((l) => (
              <a key={l} href="#" className="hover:underline" style={{ textDecorationColor: clay, textUnderlineOffset: 4 }}>{l}</a>
            ))}
          </nav>
          <a
            href="#"
            className="rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5"
            style={{ backgroundColor: clay }}
          >
            Say hello
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-3xl" style={{ ...hand, color: clay }}>
              welcome, friend —
            </p>
            <h1 style={display} className="mt-2 text-6xl font-bold leading-[1] md:text-7xl">
              You are <em style={{ color: clay }}>known</em>, you are <em style={{ color: moss }}>loved</em>, you are <em style={{ color: sky }}>sent</em>.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: "#5b3f30" }}>
              We're a circle of nineteen Friends churches scattered across the Rockies, the high desert, and the prairie — gathered around the table of Christ.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                style={{ backgroundColor: ink }}
              >
                Come to the Gathering <ArrowRight size={16} />
              </a>
              <a href="#" className="text-sm font-bold underline underline-offset-4" style={{ color: clay }}>
                Find a church near you
              </a>
            </div>
          </div>

          {/* Illustrated collage */}
          <div className="relative aspect-square">
            {/* Sun */}
            <div
              className="absolute right-4 top-4 h-40 w-40 rounded-full"
              style={{ backgroundColor: "#e8b94c", boxShadow: "0 0 80px rgba(232,185,76,0.6)" }}
            />
            {/* Mountains SVG */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
              <defs>
                <pattern id="dots" patternUnits="userSpaceOnUse" width="8" height="8">
                  <circle cx="2" cy="2" r="1" fill={ink} opacity="0.15" />
                </pattern>
              </defs>
              {/* Back mountains */}
              <path d="M 0 280 L 80 160 L 140 240 L 220 100 L 300 220 L 380 140 L 400 180 L 400 400 L 0 400 Z" fill={moss} opacity="0.9" />
              <path d="M 0 280 L 80 160 L 140 240 L 220 100 L 300 220 L 380 140 L 400 180 L 400 400 L 0 400 Z" fill="url(#dots)" />
              {/* Front mountains */}
              <path d="M 0 340 L 100 220 L 180 310 L 270 200 L 360 290 L 400 250 L 400 400 L 0 400 Z" fill={clay} />
              {/* Snow caps */}
              <path d="M 200 130 L 220 100 L 240 130 L 230 138 L 220 130 L 210 138 Z" fill={paper} />
              {/* Trees */}
              <g fill={ink}>
                <polygon points="60,360 70,330 80,360" />
                <polygon points="100,355 110,325 120,355" />
                <polygon points="320,365 330,335 340,365" />
              </g>
              {/* Path */}
              <path d="M 200 400 Q 210 360 240 340 T 300 290" stroke={paper} strokeWidth="3" strokeDasharray="4 6" fill="none" />
            </svg>
            {/* Sticker */}
            <div
              className="absolute -bottom-4 -left-4 rotate-[-8deg] rounded-2xl px-4 py-3 text-center shadow-xl"
              style={{ backgroundColor: paper, border: `2px solid ${ink}` }}
            >
              <p className="text-2xl leading-none" style={{ ...hand, color: clay }}>made with love</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest">since 1957</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three values — illustrated */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-3xl" style={{ ...hand, color: moss }}>three little words —</p>
            <h2 style={display} className="text-5xl font-bold">What we're about</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { Icon: Hand, color: clay, w: "Equip", body: "Pastors, leaders, and parents — sharpened together for the work ahead." },
              { Icon: Heart, color: moss, w: "Energize", body: "Gathering as a family to remind each other that the gospel is still good news." },
              { Icon: Leaf, color: sky, w: "Establish", body: "Planting and growing churches that will outlast us all." },
            ].map(({ Icon, color, w, body }, i) => (
              <div
                key={w}
                className="relative rounded-3xl p-8 shadow-md transition hover:-translate-y-1"
                style={{
                  backgroundColor: "#fffaf0",
                  border: `2px solid ${ink}`,
                  transform: `rotate(${i === 1 ? 1 : i === 0 ? -1.5 : 1.5}deg)`,
                }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                  style={{ backgroundColor: color }}
                >
                  <Icon size={26} />
                </div>
                <h3 style={display} className="mt-5 text-3xl font-bold">{w}.</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#5b3f30" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gathering invite — like a letter */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div
            className="relative rounded-[2.5rem] p-10 md:p-14 shadow-xl"
            style={{ backgroundColor: "#fffaf0", border: `2px solid ${ink}` }}
          >
            <div className="absolute -top-5 left-10 rotate-[-4deg] rounded-md px-3 py-1 text-xs font-bold uppercase tracking-widest text-white" style={{ backgroundColor: clay }}>
              You're invited
            </div>
            <p className="text-3xl" style={{ ...hand, color: clay }}>July 13–18, 2026</p>
            <h2 style={display} className="mt-2 text-5xl font-bold leading-tight md:text-6xl">
              Come up the mountain with us.
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "#5b3f30" }}>
              Our Ministry &amp; Family Conference is part summer camp, part retreat, part family reunion. There will be coffee in the morning, singing in the evening, and stars in between. Bring the kids. Bring a friend.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white"
                style={{ backgroundColor: moss }}
              >
                Save my spot <ArrowRight size={16} />
              </a>
              <span className="text-2xl" style={{ ...hand, color: ink }}>
                or just come and see —
              </span>
            </div>
            {/* Decorative tape */}
            <div className="absolute -right-3 -top-3 h-16 w-24 rotate-12 opacity-70" style={{ backgroundColor: "#e8b94c" }} />
          </div>
        </div>
      </section>

      {/* Communities map */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col items-center gap-2 text-center">
            <p className="text-3xl" style={{ ...hand, color: sky }}>nineteen front porches —</p>
            <h2 style={display} className="text-5xl font-bold">Our little congregations</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { state: "Colorado", n: 12, blurb: "From the Front Range to the Western Slope.", color: moss, Icon: Leaf },
              { state: "Arizona", n: 4, blurb: "Saguaro country, sun-baked saints.", color: clay, Icon: Sun },
              { state: "Nebraska", n: 3, blurb: "Wide skies, deep roots.", color: sky, Icon: Coffee },
            ].map(({ state, n, blurb, color, Icon }) => (
              <a
                key={state}
                href="#"
                className="group block rounded-3xl p-7 transition hover:-translate-y-1"
                style={{ backgroundColor: "#fffaf0", border: `2px dashed ${ink}` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: color }}>
                    <Icon size={22} />
                  </div>
                  <span className="text-5xl font-bold" style={{ ...display, color }}>{n}</span>
                </div>
                <h3 style={display} className="mt-4 text-2xl font-bold">{state}</h3>
                <p className="mt-1 text-sm" style={{ color: "#5b3f30" }}>{blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest" style={{ color }}>
                  <MapPin size={12} /> visit a church
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-12" style={{ backgroundColor: ink, color: paper }}>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div style={display} className="text-2xl font-bold">Rocky Mountain Yearly Meeting</div>
              <p className="mt-1 text-2xl" style={{ ...hand, color: "#e8b94c" }}>est. nineteen fifty-seven</p>
              <p className="mt-4 text-sm opacity-80">A circle of Friends churches in CO, AZ &amp; NE.</p>
            </div>
            <div className="text-sm opacity-90">
              <div className="font-bold uppercase tracking-widest" style={{ color: "#e8b94c" }}>Wander over to</div>
              <ul className="mt-3 space-y-2">
                {["About us", "Our churches", "The gathering", "Mission &amp; sending"].map((l) => (
                  <li key={l}><a href="#" className="hover:underline">{l}</a></li>
                ))}
              </ul>
            </div>
            <div className="text-sm opacity-90">
              <div className="font-bold uppercase tracking-widest" style={{ color: "#e8b94c" }}>Write us a letter</div>
              <p className="mt-3 flex items-center gap-2"><Users size={14} /> office@rmym.org</p>
              <p className="mt-2 flex items-center gap-2"><MapPin size={14} /> Denver, Colorado</p>
            </div>
          </div>
          <p className="mt-12 text-center text-xs opacity-60">© 2026 · with love from the Rockies</p>
        </div>
      </footer>
      <div className="h-20" />
    </div>
  );
}
