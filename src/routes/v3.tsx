import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import MissionBanner from "@/components/MissionBanner";
import News from "@/components/News";
import FindChurch from "@/components/FindChurch";
import Missions from "@/components/Missions";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/v3")({
  head: () => ({
    meta: [
      { title: "RMYM — Adventure Concept" },
      { name: "description", content: "Bold outdoor concept for Rocky Mountain Yearly Meeting." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: V3,
});

// Adventure: condensed display, deep forest/granite palette, square cuts. Same composition as Classic.
const adventureTheme: React.CSSProperties = {
  ["--font-display" as never]: "'Bebas Neue', Impact, sans-serif",
  ["--font-sans" as never]: "'Barlow', system-ui, sans-serif",
  // Surfaces — granite + bone
  ["--background" as never]: "oklch(0.96 0.008 95)",
  ["--card" as never]: "oklch(0.99 0.005 95)",
  ["--secondary" as never]: "oklch(0.91 0.012 95)",
  ["--muted" as never]: "oklch(0.92 0.01 95)",
  ["--border" as never]: "oklch(0.78 0.015 90)",
  // Primary — deep evergreen
  ["--primary" as never]: "oklch(0.32 0.06 160)",
  ["--primary-light" as never]: "oklch(0.42 0.08 160)",
  ["--primary-dark" as never]: "oklch(0.22 0.05 160)",
  // Accent — trail-blaze amber
  ["--accent-green" as never]: "oklch(0.62 0.16 55)",
  ["--accent-green-light" as never]: "oklch(0.78 0.15 75)",
  // Square corners, harder shadow
  ["--radius" as never]: "0rem",
  ["--shadow-card" as never]: "0 2px 0 rgb(20 30 20 / 0.15)",
  ["--shadow-card-hover" as never]: "0 6px 0 rgb(20 30 20 / 0.18)",
};

function V3() {
  return (
    <div style={adventureTheme} className="min-h-screen bg-background font-sans">
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
