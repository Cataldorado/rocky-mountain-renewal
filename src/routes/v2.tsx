import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [
      { title: "RMYM — Editorial Concept" },
      { name: "description", content: "Editorial concept for Rocky Mountain Yearly Meeting." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: V2,
});

const editorial = { font: { fontFamily: "'Instrument Serif', Georgia, serif" } };

function V2() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#1a1a1a]">
      {/* Masthead */}
      <header className="border-b-2 border-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-[11px] uppercase tracking-[0.2em]">
          <span>Vol. CXX · Est. 1957</span>
          <span className="hidden md:block">Thursday · May 7, 2026</span>
          <span>Three States · One Family</span>
        </div>
        <div className="border-y border-black">
          <div className="mx-auto max-w-7xl px-6 py-6 text-center">
            <h1 style={editorial.font} className="text-6xl leading-none tracking-tight md:text-8xl lg:text-9xl">
              The Rocky Mountain Friend
            </h1>
            <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-black/60">
              A quarterly dispatch from Rocky Mountain Yearly Meeting
            </p>
          </div>
        </div>
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-3 text-xs font-semibold uppercase tracking-widest">
          {["The Meeting", "Churches", "Conference", "Missions", "Letters", "Subscribe"].map((l) => (
            <a key={l} href="#" className="transition hover:underline underline-offset-4">{l}</a>
          ))}
        </nav>
      </header>

      {/* Lead story — asymmetric */}
      <section className="border-b border-black/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-[#8b3a1f]">Cover Story · Conference 2026</p>
            <h2 style={editorial.font} className="text-5xl leading-[0.95] md:text-7xl">
              To <em>equip</em>, to <em>energize</em>, and to <em>establish</em> — gathering in Estes Park.
            </h2>
            <div className="mt-8 columns-1 gap-8 text-[15px] leading-relaxed text-black/80 md:columns-2">
              <p className="mb-4">
                <span style={editorial.font} className="float-left mr-2 mt-1 text-6xl leading-[0.8]">F</span>
                or seven days each summer, families from across Colorado, Arizona, and Nebraska converge in the cool air of the Rockies. Tents go up. Old friendships are rekindled. New ones begin around long wooden tables.
              </p>
              <p className="mb-4">
                The Ministry &amp; Family Conference is not a program. It is a homecoming — a quiet reminder that the work of the local church is sustained by the wider body. Plenary speakers, breakout teaching, and unhurried evenings give space for the Spirit.
              </p>
              <p>
                Registration for July 13–18, 2026 is now open. We hope you'll come.
              </p>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-semibold uppercase tracking-widest">
              Read &amp; Register <ArrowUpRight size={16} />
            </a>
          </div>
          <figure className="lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"
              alt="Mountain conference setting"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
            <figcaption className="mt-2 text-[11px] uppercase tracking-widest text-black/50">
              Fig. 01 — Estes Park, Colorado · Photograph by RMYM
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Three columns — features */}
      <section className="border-b border-black/20">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between border-b border-black pb-4">
            <h3 style={editorial.font} className="text-4xl">In this issue</h3>
            <span className="text-[11px] uppercase tracking-widest text-black/50">Features · pp. 04–18</span>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-black/20">
            {[
              { tag: "Youth", title: "FX Camps return to the high country", body: "Three weeks of formation for middle and high school students — set apart, sent back." },
              { tag: "Women's Ministry", title: "A retreat for resting souls", body: "Quail's Nest welcomes women of every season for two days of worship, walks, and stillness." },
              { tag: "Business", title: "Yearly Meeting for Business — June 5", body: "Representatives gather to discern direction in the Quaker manner: silence, listening, unity." },
            ].map((a, i) => (
              <article key={i} className="md:px-6 first:md:pl-0 last:md:pr-0">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#8b3a1f]">{a.tag}</p>
                <h4 style={editorial.font} className="mt-3 text-3xl leading-tight">{a.title}</h4>
                <p className="mt-4 text-sm leading-relaxed text-black/75">{a.body}</p>
                <a href="#" className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest underline-offset-4 hover:underline">Continue →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-b border-black/20 bg-[#1a1a1a] text-[#f5f1e8]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <Quote size={32} className="mx-auto opacity-50" />
          <blockquote style={editorial.font} className="mt-6 text-3xl leading-tight md:text-5xl">
            "We are a people of the Light — and the Light is best seen against the great, dark shoulder of a mountain."
          </blockquote>
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-white/60">— From the 1957 Minute of Organization</p>
        </div>
      </section>

      {/* Directory */}
      <section className="border-b border-black/20">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#8b3a1f]">Directory</p>
              <h3 style={editorial.font} className="mt-2 text-5xl leading-none">Nineteen meetings. Three states.</h3>
              <p className="mt-6 text-sm text-black/70">
                Browse our congregations by region, or contact the office for a personal introduction to a meeting near you.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-black/20 border-y border-black/30">
                {[
                  { state: "Colorado", count: 12, cities: "Denver · Colorado Springs · Greeley · Boulder · Fort Collins · …" },
                  { state: "Arizona", count: 4, cities: "Phoenix · Mesa · Tucson · Flagstaff" },
                  { state: "Nebraska", count: 3, cities: "Central City · Kearney · Omaha" },
                ].map((s) => (
                  <li key={s.state} className="grid grid-cols-12 items-baseline gap-4 py-5">
                    <span style={editorial.font} className="col-span-1 text-3xl tabular-nums">{s.count}</span>
                    <span style={editorial.font} className="col-span-3 text-2xl">{s.state}</span>
                    <span className="col-span-7 text-sm text-black/60">{s.cities}</span>
                    <ArrowUpRight className="col-span-1 justify-self-end" size={20} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-[#f5f1e8]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p style={editorial.font} className="text-3xl">The Rocky Mountain Friend</p>
            <p className="text-xs uppercase tracking-widest opacity-60">© 2026 · Printed in spirit, distributed in love</p>
          </div>
        </div>
      </footer>
      <div className="h-20" />
    </div>
  );
}
