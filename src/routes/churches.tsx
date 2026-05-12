import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe, Navigation, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapView, churches, states, type Church } from "@/components/FindChurch";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/churches")({
  head: () => ({
    meta: [
      { title: "Find a Friends Church — RMYM Churches in CO, AZ & NE" },
      {
        name: "description",
        content:
          "Locate Rocky Mountain Yearly Meeting Friends churches across Colorado, Arizona, and Nebraska. Pastors, addresses, phones, and directions.",
      },
      { property: "og:title", content: "RMYM Churches" },
      {
        property: "og:description",
        content:
          "Interactive map and full directory of Friends churches across Colorado, Arizona, and Nebraska.",
      },
    ],
  }),
  component: ChurchesPage,
});

function ChurchesPage() {
  const grouped = states.map((s) => ({
    ...s,
    list: churches.filter((c) => c.state === s.code),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page header */}
        <section className="border-b border-border bg-gradient-to-b from-[oklch(0.97_0.02_85)] to-background py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">
              Locate
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Find a Friends Church Near You
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Explore RMYM congregations across Colorado, Arizona, and
              Nebraska. Click any pin on the map for details, or browse the
              full directory by state below.
            </p>
          </div>
        </section>

        {/* Interactive map */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <MapView />
          </div>
        </section>

        {/* Directory by state */}
        <section className="border-t border-border bg-card/50 py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">
                Directory
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Churches by State
              </h2>
            </div>

            <div className="space-y-6">
              {grouped.map((s) => (
                <div
                  key={s.code}
                  className="overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center gap-4 border-b border-border bg-card/70 px-6 py-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg font-display text-sm font-bold text-white"
                      style={{ backgroundColor: s.color }}
                    >
                      {s.code}
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-xl font-semibold">
                        {s.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {s.list.length} {s.list.length === 1 ? "church" : "churches"}
                      </div>
                    </div>
                  </div>

                  <Accordion type="multiple" className="px-2 sm:px-4">
                    {s.list.map((c, i) => (
                      <AccordionItem
                        key={c.name}
                        value={`${s.code}-${i}`}
                        className="border-border"
                      >
                        <AccordionTrigger className="px-3 text-left hover:no-underline">
                          <div className="flex flex-1 items-center justify-between gap-4 pr-3">
                            <div>
                              <div className="font-semibold text-foreground">
                                {c.name}
                              </div>
                              <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                                <MapPin size={12} /> {c.city}
                              </div>
                            </div>
                            <span className="hidden text-xs text-muted-foreground sm:inline">
                              {c.pastor}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-3">
                          <ChurchDetails church={c} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ChurchDetails({ church }: { church: Church }) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(church.address)}`;
  return (
    <div className="grid gap-6 pb-2 sm:grid-cols-[160px_1fr]">
      <img
        src={church.img}
        alt={church.name}
        className="h-32 w-full rounded-lg object-cover sm:h-full"
      />
      <div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-3">
            <User size={16} className="mt-0.5 shrink-0 text-accent-green" />
            <span>
              <span className="text-muted-foreground">Pastor: </span>
              <span className="font-medium text-foreground">{church.pastor}</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <MapPin size={16} className="mt-0.5 shrink-0 text-accent-green" />
            <span className="text-foreground">{church.address}</span>
          </li>
          <li className="flex items-start gap-3">
            <Phone size={16} className="mt-0.5 shrink-0 text-accent-green" />
            <a
              href={`tel:${church.phone.replace(/[^0-9+]/g, "")}`}
              className="text-foreground hover:text-primary"
            >
              {church.phone}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Mail size={16} className="mt-0.5 shrink-0 text-accent-green" />
            <a
              href={`mailto:${church.email}`}
              className="text-foreground hover:text-primary"
            >
              {church.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Globe size={16} className="mt-0.5 shrink-0 text-accent-green" />
            <a
              href={church.website}
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-primary"
            >
              {church.website.replace(/^https?:\/\//, "")}
            </a>
          </li>
        </ul>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <a
            href={church.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:bg-primary-light"
          >
            <Globe size={16} /> Visit Website
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            <Navigation size={16} /> Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
