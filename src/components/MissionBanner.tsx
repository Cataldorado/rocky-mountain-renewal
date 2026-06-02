import { GraduationCap, Flame, Sprout } from "lucide-react";

const pillars = [
  { icon: GraduationCap, title: "Equip", desc: "Training pastors, leaders, and members for faithful ministry." },
  { icon: Flame, title: "Energize", desc: "Renewing churches through worship, prayer, and the Holy Spirit." },
  { icon: Sprout, title: "Establish", desc: "Planting and strengthening Friends churches in our region and beyond." },
];

export default function MissionBanner() {
  return (
    <section id="about" className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Our Mission</p>
        <blockquote className="font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          “RMYM exists to <span className="text-accent-green-light">Equip</span>, <span className="text-accent-green-light">Energize</span>, and <span className="text-accent-green-light">Establish</span> Friends Churches and Ministries in Response to the Great Commission.”
        </blockquote>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                <p.icon size={26} className="text-accent-green-light" />
              </div>
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-white/75">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition hover:bg-white/90"
          >
            About RMYM
          </a>
        </div>
      </div>
    </section>
  );
}
