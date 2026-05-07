import { ArrowRight } from "lucide-react";

const featured = {
  title: "A Letter to the Churches: Walking Together in 2026",
  excerpt:
    "As we enter a new year, our superintendent reflects on God's faithfulness across our churches and what it means to walk together as a yearly meeting of Friends.",
  date: "January 12, 2026",
  author: "Pastor Mark Russell",
  img: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=70",
};

const secondary = [
  {
    title: "Church Planting Update from Phoenix",
    excerpt: "An encouraging report from our newest Friends fellowship in Arizona.",
    date: "December 4, 2025",
    img: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Reflections from Quaker Ridge Camp",
    excerpt: "Stories of transformation from this year's youth camps in the Rockies.",
    date: "November 18, 2025",
    img: "https://images.unsplash.com/photo-1476611317561-60117649dd94?auto=format&fit=crop&w=900&q=70",
  },
];

export default function News() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">Stay Connected</p>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">News & Letters to the Churches</h2>

        <article className="mt-12 grid overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-card-hover)] md:grid-cols-2">
          <div className="h-64 md:h-auto">
            <img src={featured.img} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-green">Featured</span>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-snug md:text-3xl">{featured.title}</h3>
            <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              {featured.date} · <span className="font-medium text-foreground">{featured.author}</span>
            </p>
            <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5">
              Read More <ArrowRight size={16} />
            </a>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondary.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
              <div className="h-44 overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground">{p.date}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5">
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
