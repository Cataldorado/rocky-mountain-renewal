import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import MissionBanner from "@/components/MissionBanner";
import News from "@/components/News";
import FindChurch from "@/components/FindChurch";
import Missions from "@/components/Missions";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [
      { title: "RMYM — Broadsheet" },
      { name: "description", content: "Editorial broadsheet concept for Rocky Mountain Yearly Meeting." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&display=swap",
      },
    ],
  }),
  component: V2,
});

// BROADSHEET — Newspaper editorial. Serif display, ink-on-cream, hairline rules, slab tracking on labels.
const broadsheetTheme: React.CSSProperties = {
  ["--font-display" as never]: "'Instrument Serif', Georgia, serif",
  ["--font-sans" as never]: "'Source Serif 4', Georgia, serif",
  ["--background" as never]: "oklch(0.965 0.018 85)",
  ["--card" as never]: "oklch(0.985 0.012 85)",
  ["--secondary" as never]: "oklch(0.93 0.022 80)",
  ["--muted" as never]: "oklch(0.93 0.018 80)",
  ["--border" as never]: "oklch(0.78 0.025 70)",
  ["--foreground" as never]: "oklch(0.18 0.02 60)",
  ["--primary" as never]: "oklch(0.2 0.03 250)",
  ["--primary-light" as never]: "oklch(0.28 0.04 250)",
  ["--primary-dark" as never]: "oklch(0.14 0.02 250)",
  ["--accent-green" as never]: "oklch(0.4 0.16 25)",
  ["--accent-green-light" as never]: "oklch(0.58 0.18 30)",
  ["--radius" as never]: "0.125rem",
  ["--shadow-card" as never]: "0 1px 0 rgb(0 0 0 / 0.1)",
  ["--shadow-card-hover" as never]: "0 0 0 1px rgb(0 0 0 / 0.4)",
};

function V2() {
  return (
    <div style={broadsheetTheme} className="theme-broadsheet min-h-screen bg-background font-sans">
      <style>{`
        .theme-broadsheet .font-display {
          letter-spacing: -0.025em;
          font-weight: 500;
          line-height: 1.02;
        }
        .theme-broadsheet .uppercase {
          letter-spacing: 0.22em !important;
          font-weight: 600;
        }
        .theme-broadsheet .rounded-full,
        .theme-broadsheet .rounded-xl,
        .theme-broadsheet .rounded-md { border-radius: 0 !important; }
        .theme-broadsheet button,
        .theme-broadsheet a[class*="bg-primary"] { border-radius: 0 !important; }
        .theme-broadsheet hr,
        .theme-broadsheet .border-t,
        .theme-broadsheet .border-b { border-color: oklch(0.2 0.02 60); }
        .theme-broadsheet img { filter: saturate(0.85) contrast(1.05); }
      `}</style>
      <Navbar />
      <main>
        <Hero
          image="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1920&q=80"
          alt="Open Bible on a wooden table"
        />
        <Events />
        <MissionBanner />
        <News />
        <FindChurch />
        <Missions />
      </main>
      <Footer />
    </div>
  );
}
