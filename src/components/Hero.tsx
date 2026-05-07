import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative -mt-16 flex h-[90vh] min-h-[600px] w-full items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
        alt="Rocky Mountain landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white fade-in-up">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/85">
          Rocky Mountain Yearly Meeting
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Equip. Energize. Establish.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg">
          A family of Friends churches across Colorado, Arizona, and Nebraska — united in Christ, sent in mission.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#events"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition hover:bg-white/90"
          >
            Register for 2026 Conference
          </a>
          <a
            href="#churches"
            className="rounded-md border border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Find a Church
          </a>
        </div>
      </div>
      <a
        href="#events"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 transition hover:text-white"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
}
