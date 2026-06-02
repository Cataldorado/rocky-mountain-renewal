import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import MissionBanner from "@/components/MissionBanner";
import News from "@/components/News";
import FindChurch from "@/components/FindChurch";
import Missions from "@/components/Missions";
import Footer from "@/components/Footer";
import heroCrossSunrise from "@/assets/v3-hero-cross-sunrise.jpg";

export const Route = createFileRoute("/v3")({
  head: () => ({
    meta: [
      { title: "RMYM — Summit" },
      { name: "description", content: "Bold expedition concept for Rocky Mountain Yearly Meeting." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: V3,
});

// SUMMIT — Expedition. Condensed display, wide tracking, hard offset shadows, square edges, blaze-orange accent.
const summitTheme: React.CSSProperties = {
  ["--font-display" as never]: "'Bebas Neue', Impact, sans-serif",
  ["--font-sans" as never]: "'Barlow', system-ui, sans-serif",
  ["--background" as never]: "oklch(0.955 0.005 90)",
  ["--card" as never]: "oklch(1 0 0)",
  ["--secondary" as never]: "oklch(0.9 0.008 90)",
  ["--muted" as never]: "oklch(0.91 0.008 90)",
  ["--border" as never]: "oklch(0.18 0.02 200)",
  ["--foreground" as never]: "oklch(0.16 0.02 200)",
  ["--primary" as never]: "oklch(0.18 0.02 200)",
  ["--primary-light" as never]: "oklch(0.28 0.03 200)",
  ["--primary-dark" as never]: "oklch(0.1 0.01 200)",
  ["--primary-foreground" as never]: "oklch(0.99 0 0)",
  ["--accent-green" as never]: "oklch(0.65 0.2 50)",
  ["--accent-green-light" as never]: "oklch(0.78 0.18 70)",
  ["--radius" as never]: "0rem",
  ["--shadow-card" as never]: "4px 4px 0 oklch(0.16 0.02 200)",
  ["--shadow-card-hover" as never]: "8px 8px 0 oklch(0.65 0.2 50)",
};

function V3() {
  return (
    <div style={summitTheme} className="theme-summit min-h-screen bg-background font-sans">
      <style>{`
        .theme-summit .font-display {
          letter-spacing: 0.02em;
          font-weight: 400;
          text-transform: uppercase;
          line-height: 0.92;
        }
        .theme-summit .uppercase {
          letter-spacing: 0.28em !important;
          font-weight: 700;
        }
        .theme-summit .rounded-full,
        .theme-summit .rounded-xl,
        .theme-summit .rounded-md { border-radius: 0 !important; }
        .theme-summit button,
        .theme-summit a[class*="bg-primary"] {
          border-radius: 0 !important;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-weight: 700;
        }
        .theme-summit [class*="border-"] { border-width: 2px; }
        .theme-summit .border-b { border-bottom-width: 2px; }
      `}</style>
      <Navbar />
      <main>
        <Hero
          image={heroCrossSunrise}
          alt="Cross silhouette against a mountain sunrise"
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
