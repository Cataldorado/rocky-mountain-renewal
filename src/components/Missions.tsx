import { Globe2, HandHeart, GraduationCap, BriefcaseBusiness, ArrowRight } from "lucide-react";

const items = [
  { icon: Globe2, title: "Evangelical Friends Mission", desc: "Global outreach planting Friends churches around the world." },
  { icon: HandHeart, title: "Luke 10 Initiative", desc: "Prayer journeys and short-term church planting trips." },
  { icon: GraduationCap, title: "Scholarships", desc: "Financial support for students preparing for ministry." },
  { icon: BriefcaseBusiness, title: "Ministry Opportunities", desc: "Open pastoral and leadership positions across our churches." },
];

export default function Missions() {
  return (
    <section id="missions" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">Go & Serve</p>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">Missions & Ministry</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          From global mission to local pastoral ministry, here are ways to engage in the work God is doing through RMYM.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <a
              key={it.title}
              href="#"
              className="group flex items-start gap-5 rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <it.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold">{it.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
              </div>
              <ArrowRight size={18} className="mt-1 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
