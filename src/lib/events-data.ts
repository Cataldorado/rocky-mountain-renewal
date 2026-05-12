export type EventItem = {
  id: string;
  date: string;
  year: string;
  title: string;
  desc: string;
  img: string;
  featured?: boolean;
  // ISO start/end for calendar + ICS
  start: string; // YYYYMMDDTHHmmssZ
  end: string;
  location?: string;
};

export const events: EventItem[] = [
  {
    id: "ministry-family-2026",
    date: "May 22–23",
    year: "2026",
    title: "Ministry & Family Conference",
    desc: "Our annual gathering for worship, teaching, and fellowship in Denver, Colorado.",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=70",
    featured: true,
    start: "20260522T140000Z",
    end: "20260524T000000Z",
    location: "Denver, Colorado",
  },
  {
    id: "fx-camps-2026",
    date: "Jul 6–11",
    year: "2026",
    title: "FX Camps at Quaker Ridge",
    desc: "Friends eXperience summer camps for kids and youth in the mountains.",
    img: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?auto=format&fit=crop&w=900&q=70",
    start: "20260706T140000Z",
    end: "20260712T000000Z",
    location: "Quaker Ridge Camp, Woodland Park, CO",
  },
  {
    id: "womens-retreat-2026",
    date: "Sep 18–20",
    year: "2026",
    title: "Women's Retreat",
    desc: "A weekend of rest, worship, and connection for women across the yearly meeting.",
    img: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=900&q=70",
    start: "20260918T230000Z",
    end: "20260921T000000Z",
    location: "Quaker Ridge Camp, CO",
  },
  {
    id: "rmym-business-2026",
    date: "Oct 9–10",
    year: "2026",
    title: "RMYM Meeting for Business",
    desc: "Representatives gather to discern the work and direction of our churches.",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=70",
    start: "20261009T140000Z",
    end: "20261011T000000Z",
    location: "Denver, Colorado",
  },
  {
    id: "pastors-gathering-2026",
    date: "Nov 14",
    year: "2026",
    title: "Pastors' Gathering",
    desc: "A day of equipping and connection for pastors across the yearly meeting.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=70",
    start: "20261114T150000Z",
    end: "20261114T220000Z",
    location: "Denver Friends Church",
  },
  {
    id: "advent-worship-2026",
    date: "Dec 5",
    year: "2026",
    title: "Advent Worship Night",
    desc: "Joining together in song and reflection as we prepare for Christmas.",
    img: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=900&q=70",
    start: "20261205T020000Z",
    end: "20261205T040000Z",
    location: "Rocky Mountain Friends Church",
  },
];

// Parse compact ISO YYYYMMDDTHHmmssZ -> Date
export function parseCompactISO(s: string): Date {
  const y = +s.slice(0, 4);
  const mo = +s.slice(4, 6) - 1;
  const d = +s.slice(6, 8);
  const h = +s.slice(9, 11);
  const mi = +s.slice(11, 13);
  const se = +s.slice(13, 15);
  return new Date(Date.UTC(y, mo, d, h, mi, se));
}

export function buildICS(e: EventItem): string {
  const now = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d+/, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//RMYM//Events//EN",
    "BEGIN:VEVENT",
    `UID:${e.id}@rmym.org`,
    `DTSTAMP:${now}`,
    `DTSTART:${e.start}`,
    `DTEND:${e.end}`,
    `SUMMARY:${e.title}`,
    `DESCRIPTION:${e.desc.replace(/\n/g, "\\n")}`,
    e.location ? `LOCATION:${e.location}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");
}

export function downloadICS(e: EventItem) {
  const blob = new Blob([buildICS(e)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${e.id}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function mailtoLink(e: EventItem): string {
  const start = parseCompactISO(e.start).toUTCString();
  const body = `${e.title}\n\nWhen: ${e.date}, ${e.year} (${start})\nWhere: ${e.location ?? "TBA"}\n\n${e.desc}`;
  return `mailto:?subject=${encodeURIComponent(e.title)}&body=${encodeURIComponent(body)}`;
}
