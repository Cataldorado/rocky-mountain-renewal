import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import MissionBanner from "@/components/MissionBanner";
import News from "@/components/News";
import FindChurch from "@/components/FindChurch";
import Missions from "@/components/Missions";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/v4")({
  head: () => ({
    meta: [
      { title: "RMYM — Handcrafted Concept" },
      { name: "description", content: "Warm, handcrafted concept for Rocky Mountain Yearly Meeting." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Nunito:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: V4,
});

// Handcrafted: warm paper, soft serif display, generous rounding, plush shadows. Same composition as Classic.
const handcraftedTheme: React.CSSProperties = {
  ["--font-display" as never]: "'Fraunces', Georgia, serif",
  ["--font-sans" as never]: "'Nunito', system-ui, sans-serif",
  // Surfaces — kraft paper
  ["--background" as never]: "oklch(0.955 0.025 80)",
  ["--card" as never]: "oklch(0.985 0.018 80)",
  ["--secondary" as never]: "oklch(0.92 0.03 75)",
  ["--muted" as never]: "oklch(0.92 0.025 75)",
  ["--border" as never]: "oklch(0.8 0.035 65)",
  // Primary — terracotta
  ["--primary" as never]: "oklch(0.5 0.13 40)",
  ["--primary-light" as never]: "oklch(0.6 0.14 40)",
  ["--primary-dark" as never]: "oklch(0.4 0.12 40)",
  // Accent — moss
  ["--accent-green" as never]: "oklch(0.5 0.09 145)",
  ["--accent-green-light" as never]: "oklch(0.65 0.11 145)",
  // Pillowy radii + soft shadow
  ["--radius" as never]: "1rem",
  ["--shadow-card" as never]: "0 2px 6px rgb(120 70 30 / 0.08)",
  ["--shadow-card-hover" as never]: "0 16px 36px -10px rgb(120 70 30 / 0.22)",
};

function V4() {
  return (
    <div style={handcraftedTheme} className="min-h-screen bg-background font-sans">
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
