import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mountain, Compass, Tent, MapPin, Wind } from "lucide-react";

export const Route = createFileRoute("/v3")({
  head: () => ({
    meta: [
      { title: "RMYM — Adventure Concept" },
      { name: "description", content: "Bold outdoor concept for Rocky Mountain Yearly Meeting." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=Barlow:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: V3,
});

const display = { fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: "0.01em" };
const cond = { fontFamily: "'Barlow Condensed', sans-serif" };
const body = { fontFamily: "'Barlow', sans-serif" };

function V3() {
  return (
    <div style={body} className="min-h-screen bg-[#0e1410] text-white">
      {/* Top bar */}
      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <Mountain size={22} className="text-[#e8d34c]" />
            <span style={display} className="text-2xl tracking-wider">RMYM</span>
          </div>
          <nav style={cond} className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] md:flex">
            {["Trips", "Churches", "Mission", "Field Notes"].map((l) => (
              <a key={l} href="#" className="text-white/85 hover:text-[#e8d34c]">{l}</a>
            ))}
          </nav>
          <a href="#" style={cond} className="rounded-sm border border-white/30 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur hover:border-[#e8d34c] hover:text-[#e8d34c]">
            Join the Trip
          </a>
        </div>
      </header>

      {/* Hero — full bleed */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1920&q=80"
          alt="Rocky mountain ridge"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-6 pb-24">
            <p style={cond} className="mb-4 inline-flex items-center gap-2 rounded-sm bg-[#e8d34c] px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-black">
              <Compass size={14} /> Est. 1957 · CO · AZ · NE
            </p>
            <h1 style={display} className="text-[18vw] font-normal leading-[0.85] sm:text-[14vw] lg:text-[180px]">
              GO HIGH.<br />
              GO TOGETHER.
            </h1>
            <p style={cond} className="mt-6 max-w-xl text-lg uppercase tracking-wider text-white/85">
              Friends churches built for the long climb. Worship, mission, and family in the high country of the American West.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" style={cond} className="inline-flex items-center gap-2 bg-[#e8d34c] px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black hover:bg-white">
                Conference 2026 <ArrowRight size={16} />
              </a>
              <a href="#" style={cond} className="inline-flex items-center gap-2 border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:border-white">
                Find Basecamp
              </a>
            </div>
          </div>
        </div>
        {/* Stat strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-black/70 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 px-0 md:grid-cols-4">
            {[
              { k: "19", l: "Congregations" },
              { k: "3", l: "States" },
              { k: "70", l: "Years strong" },
              { k: "1", l: "Body in Christ" },
            ].map((s) => (
              <div key={s.l} className="bg-black/80 px-6 py-5">
                <div style={display} className="text-4xl text-[#e8d34c]">{s.k}</div>
                <div style={cond} className="text-xs uppercase tracking-widest text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expeditions */}
      <section className="bg-[#0e1410] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between border-b border-white/15 pb-4">
            <div>
              <p style={cond} className="text-xs uppercase tracking-[0.3em] text-[#e8d34c]">Upcoming</p>
              <h2 style={display} className="mt-2 text-6xl leading-none">The Trip Roster</h2>
            </div>
            <a href="#" style={cond} className="hidden text-sm uppercase tracking-widest text-white/60 hover:text-white sm:block">All Expeditions →</a>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { tag: "Conference", date: "JUL 13–18", title: "Ministry & Family Summit", loc: "Estes Park, CO", img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80", icon: Tent },
              { tag: "Youth", date: "JUN 22", title: "FX Camps · High Country", loc: "Quaker Ridge, CO", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80", icon: Mountain },
              { tag: "Women", date: "SEP 12", title: "Quail's Nest Retreat", loc: "Buena Vista, CO", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80", icon: Wind },
            ].map((e) => {
              const Icon = e.icon;
              return (
                <a key={e.title} href="#" className="group relative block overflow-hidden border border-white/10 bg-[#161d18]">
                  <div className="relative h-72 overflow-hidden">
                    <img src={e.img} alt={e.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div style={cond} className="absolute left-4 top-4 inline-flex items-center gap-1 bg-[#e8d34c] px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                      <Icon size={12} /> {e.tag}
                    </div>
                    <div style={display} className="absolute bottom-4 right-4 text-3xl text-[#e8d34c]">{e.date}</div>
                  </div>
                  <div className="p-6">
                    <h3 style={display} className="text-3xl leading-none">{e.title}</h3>
                    <div style={cond} className="mt-3 flex items-center justify-between text-xs uppercase tracking-widest text-white/60">
                      <span className="flex items-center gap-1.5"><MapPin size={12} /> {e.loc}</span>
                      <span className="text-[#e8d34c] group-hover:underline">Sign up →</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manifesto band */}
      <section className="relative overflow-hidden border-y-2 border-[#e8d34c] bg-[#e8d34c] py-20 text-black">
        <div className="mx-auto max-w-6xl px-6">
          <p style={cond} className="text-xs font-bold uppercase tracking-[0.3em]">The RMYM Code</p>
          <h2 style={display} className="mt-3 text-6xl leading-[0.9] md:text-8xl">
            EQUIP THE CALLED.<br />
            ENERGIZE THE CHURCH.<br />
            ESTABLISH THE WORK.
          </h2>
          <p style={cond} className="mt-6 max-w-2xl text-lg uppercase tracking-wider">
            Three words. One commission. We exist to send Friends churches into the world ready, alive, and rooted in the gospel.
          </p>
        </div>
      </section>

      {/* Map / regions */}
      <section className="bg-[#0e1410] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 style={display} className="text-6xl leading-none">Find Your Basecamp</h2>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-3">
            {[
              { code: "CO", name: "Colorado", n: 12, alt: "12,000 ft of Friends" },
              { code: "AZ", name: "Arizona", n: 4, alt: "Desert · Sun · Saints" },
              { code: "NE", name: "Nebraska", n: 3, alt: "Plains · Wide · Open" },
            ].map((s) => (
              <a key={s.code} href="#" className="group block bg-[#0e1410] p-10 transition hover:bg-[#161d18]">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span style={display} className="text-7xl text-[#e8d34c]">{s.code}</span>
                  <span style={display} className="text-5xl text-white/30">{s.n.toString().padStart(2, "0")}</span>
                </div>
                <h3 style={cond} className="mt-5 text-2xl uppercase tracking-widest">{s.name}</h3>
                <p style={cond} className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">{s.alt}</p>
                <span style={cond} className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#e8d34c] group-hover:gap-3">
                  Explore region <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Mountain size={20} className="text-[#e8d34c]" />
            <span style={display} className="text-xl tracking-wider">ROCKY MOUNTAIN YEARLY MEETING</span>
          </div>
          <p style={cond} className="text-xs uppercase tracking-[0.25em] text-white/50">© 2026 · GO HIGH · GO TOGETHER</p>
        </div>
      </footer>
      <div className="h-20" />
    </div>
  );
}
