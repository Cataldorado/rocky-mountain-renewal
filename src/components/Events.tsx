import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const events = [
  {
    date: "May 22–23",
    year: "2026",
    title: "Ministry & Family Conference",
    desc: "Our annual gathering for worship, teaching, and fellowship in Denver, Colorado.",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=70",
    featured: true,
  },
  {
    date: "Jul 6–11",
    year: "2026",
    title: "FX Camps at Quaker Ridge",
    desc: "Friends eXperience summer camps for kids and youth in the mountains.",
    img: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?auto=format&fit=crop&w=900&q=70",
  },
  {
    date: "Sep 18–20",
    year: "2026",
    title: "Women's Retreat",
    desc: "A weekend of rest, worship, and connection for women across the yearly meeting.",
    img: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=900&q=70",
  },
  {
    date: "Oct 9–10",
    year: "2026",
    title: "RMYM Meeting for Business",
    desc: "Representatives gather to discern the work and direction of our churches.",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=70",
  },
  {
    date: "Nov 14",
    year: "2026",
    title: "Pastors' Gathering",
    desc: "A day of equipping and connection for pastors across the yearly meeting.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=70",
  },
  {
    date: "Dec 5",
    year: "2026",
    title: "Advent Worship Night",
    desc: "Joining together in song and reflection as we prepare for Christmas.",
    img: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=900&q=70",
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">Gather</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">Upcoming Events</h2>
          </div>
        </div>

        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="-ml-6">
            {events.map((e) => (
              <CarouselItem key={e.title} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <EventCard {...e} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2 md:-left-4" />
          <CarouselNext className="right-0 translate-x-1/2 md:-right-4" />
        </Carousel>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
          >
            View All Events <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function EventCard(props: (typeof events)[number]) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] fade-in-up ${
        props.featured ? "border-2 border-accent-green" : "border-border"
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={props.img} alt={props.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-md">
          {props.date}
          <span className="ml-1 opacity-80">{props.year}</span>
        </div>
        {props.featured && (
          <div className="absolute right-4 top-4 rounded-full bg-accent-green px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-md">
            Registering Now
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-foreground">{props.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{props.desc}</p>
        <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5">
          Learn More <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}
