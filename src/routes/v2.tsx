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
      { title: "RMYM — Editorial Concept" },
      { name: "description", content: "Editorial concept for Rocky Mountain Yearly Meeting." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: V2,
});

// Editorial: serif-forward, warm paper, sharper edges. Same composition as Classic.
const editorialTheme: React.CSSProperties = {
  // Type
  ["--font-display" as never]: "'Instrument Serif', Georgia, serif",
  ["--font-sans" as never]: "'Source Serif 4', Georgia, serif",
  // Surfaces — warm cream
  ["--background" as never]: "oklch(0.965 0.018 85)",
  ["--card" as never]: "oklch(0.985 0.012 85)",
  ["--secondary" as never]: "oklch(0.93 0.022 80)",
  ["--muted" as never]: "oklch(0.93 0.018 80)",
  ["--border" as never]: "oklch(0.82 0.025 70)",
  // Ink primary — deep editorial blue-black
  ["--primary" as never]: "oklch(0.25 0.04 250)",
  ["--primary-light" as never]: "oklch(0.32 0.05 250)",
  ["--primary-dark" as never]: "oklch(0.18 0.03 250)",
  // Accent — muted bordeaux
  ["--accent-green" as never]: "oklch(0.42 0.14 25)",
  ["--accent-green-light" as never]: "oklch(0.62 0.16 30)",
  // Tight radii + crisp shadow
  ["--radius" as never]: "0.125rem",
  ["--shadow-card" as never]: "0 1px 0 rgb(0 0 0 / 0.08)",
  ["--shadow-card-hover" as never]: "0 2px 0 rgb(0 0 0 / 0.12)",
};

function V2() {
  return (
    <div style={editorialTheme} className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
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
