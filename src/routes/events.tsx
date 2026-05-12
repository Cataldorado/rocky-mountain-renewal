import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, CalendarPlus, Mail, MapPin, ChevronLeft, ChevronRight, List, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events, parseCompactISO, downloadICS, mailtoLink, type EventItem } from "@/lib/events-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — Rocky Mountain Yearly Meeting" },
      {
        name: "description",
        content:
          "Conferences, camps, retreats, and gatherings across the Rocky Mountain Region. Browse as a list or calendar, add events to your personal calendar, or email yourself the details.",
      },
      { property: "og:title", content: "RMYM Events" },
      {
        property: "og:description",
        content: "Browse RMYM events as a list or calendar and add them to your personal calendar.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [view, setView] = useState<"list" | "calendar">("list");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-to-b from-secondary/40 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">Gather</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">Upcoming Events</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Join Friends from across the Rocky Mountain Region for worship, equipping, and fellowship throughout the year.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {view === "list" ? <ListView /> : <CalendarView />}

          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="inline-flex rounded-lg border border-border bg-card p-1 shadow-sm">
              <ViewToggle active={view === "list"} onClick={() => setView("list")} icon={<List size={16} />} label="List view" />
              <ViewToggle active={view === "calendar"} onClick={() => setView("calendar")} icon={<CalendarDays size={16} />} label="Calendar view" />
            </div>
            <p className="text-xs text-muted-foreground">
              Click any event to add it to your calendar or email the details to yourself.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ViewToggle({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition ${
        active ? "bg-primary text-primary-foreground shadow-sm" : "text-foreground/70 hover:text-foreground"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function ListView() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  );
}

function EventCard({ event: e }: { event: EventItem }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${
        e.featured ? "border-2 border-accent-green" : "border-border"
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={e.img} alt={e.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-md">
          {e.date}
          <span className="ml-1 opacity-80">{e.year}</span>
        </div>
        {e.featured && (
          <div className="absolute right-4 top-4 rounded-full bg-accent-green px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-md">
            Registering Now
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-foreground">{e.title}</h3>
        {e.location && (
          <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin size={12} /> {e.location}
          </p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
          <button
            onClick={() => downloadICS(e)}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary-light"
          >
            <CalendarPlus size={14} /> Add to Calendar
          </button>
          <a
            href={mailtoLink(e)}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition hover:bg-secondary"
          >
            <Mail size={14} /> Email Me
          </a>
          <a href="#" className="ml-auto inline-flex items-center gap-1 self-center text-xs font-semibold text-primary transition hover:gap-2">
            Learn More <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </article>
  );
}

function CalendarView() {
  // Start month: month of earliest upcoming event
  const initial = useMemo(() => {
    const first = parseCompactISO(events[0].start);
    return new Date(first.getFullYear(), first.getMonth(), 1);
  }, []);
  const [cursor, setCursor] = useState(initial);
  const [selected, setSelected] = useState<EventItem | null>(null);

  const monthLabel = cursor.toLocaleDateString(undefined, { month: "long", year: "numeric" });
  const firstDay = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();

  const cells: ({ day: number; events: EventItem[] } | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    const dayEvents = events.filter((e) => {
      const start = parseCompactISO(e.start);
      const end = parseCompactISO(e.end);
      const cellDate = new Date(Date.UTC(cursor.getFullYear(), cursor.getMonth(), d));
      const cellEnd = new Date(Date.UTC(cursor.getFullYear(), cursor.getMonth(), d + 1));
      return start < cellEnd && end > cellDate;
    });
    cells.push({ day: d, events: dayEvents });
  }
  while (cells.length % 7 !== 0) cells.push(null);

  const today = new Date();
  const isToday = (d: number) =>
    today.getFullYear() === cursor.getFullYear() &&
    today.getMonth() === cursor.getMonth() &&
    today.getDate() === d;

  return (
    <div className="rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between border-b border-border p-4 md:p-6">
        <button
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-secondary"
        >
          <ChevronLeft size={16} /> Prev
        </button>
        <h2 className="font-display text-xl font-semibold md:text-2xl">{monthLabel}</h2>
        <button
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-secondary"
        >
          Next <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-7 border-b border-border bg-secondary/40 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="py-2">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`min-h-[90px] border-b border-r border-border p-1.5 last:border-r-0 md:min-h-[110px] ${
              cell ? "" : "bg-secondary/20"
            } ${(i + 1) % 7 === 0 ? "border-r-0" : ""}`}
          >
            {cell && (
              <>
                <div
                  className={`mb-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                    isToday(cell.day) ? "bg-primary text-primary-foreground" : "text-foreground/70"
                  }`}
                >
                  {cell.day}
                </div>
                <div className="space-y-1">
                  {cell.events.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => setSelected(e)}
                      className={`block w-full truncate rounded px-1.5 py-0.5 text-left text-[10px] font-semibold transition hover:opacity-90 md:text-xs ${
                        e.featured
                          ? "bg-accent-green text-white"
                          : "bg-primary/10 text-primary"
                      }`}
                      title={e.title}
                    >
                      {e.title}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {selected && (
        <div className="border-t border-border p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-green">
                {selected.date}, {selected.year}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold">{selected.title}</h3>
              {selected.location && (
                <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin size={14} /> {selected.location}
                </p>
              )}
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{selected.desc}</p>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Close
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => downloadICS(selected)}
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary-light"
            >
              <CalendarPlus size={14} /> Add to Calendar
            </button>
            <a
              href={mailtoLink(selected)}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition hover:bg-secondary"
            >
              <Mail size={14} /> Email Me
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
