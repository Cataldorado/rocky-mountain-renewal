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
      { title: "RMYM — Hearth" },
      { name: "description", content: "Warm, handcrafted concept for Rocky Mountain Yearly Meeting." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,700&family=Nunito:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: V4,
});

// HEARTH — Handcrafted warmth. Soft serif, kraft paper, generous rounding, terracotta + moss, plush shadows.
const hearthTheme: React.CSSProperties = {
  ["--font-display" as never]: "'Fraunces', Georgia, serif",
  ["--font-sans" as never]: "'Nunito', system-ui, sans-serif",
  ["--background" as never]: "oklch(0.95 0.03 80)",
  ["--card" as never]: "oklch(0.98 0.02 78)",
  ["--secondary" as never]: "oklch(0.91 0.035 70)",
  ["--muted" as never]: "oklch(0.91 0.03 75)",
  ["--border" as never]: "oklch(0.78 0.04 60)",
  ["--foreground" as never]: "oklch(0.28 0.04 40)",
  ["--primary" as never]: "oklch(0.5 0.14 40)",
  ["--primary-light" as never]: "oklch(0.62 0.15 40)",
  ["--primary-dark" as never]: "oklch(0.4 0.13 40)",
  ["--accent-green" as never]: "oklch(0.52 0.1 145)",
  ["--accent-green-light" as never]: "oklch(0.7 0.12 145)",
  ["--radius" as never]: "1.25rem",
  ["--shadow-card" as never]: "0 3px 0 oklch(0.78 0.04 60), 0 6px 14px -4px rgb(120 70 30 / 0.18)",
  ["--shadow-card-hover" as never]: "0 4px 0 oklch(0.5 0.14 40), 0 20px 40px -10px rgb(120 70 30 / 0.28)",
};

function V4() {
  return (
    <div style={hearthTheme} className="theme-hearth min-h-screen bg-background font-sans">
      <style>{`
        .theme-hearth .font-display {
          font-weight: 500;
          letter-spacing: -0.015em;
          font-variation-settings: "opsz" 144, "SOFT" 100;
        }
        .theme-hearth .uppercase {
          letter-spacing: 0.18em !important;
          font-weight: 700;
        }
        .theme-hearth .rounded-md { border-radius: 0.9rem !important; }
        .theme-hearth .rounded-xl { border-radius: 1.5rem !important; }
        .theme-hearth .rounded-full { border-radius: 9999px !important; }
        .theme-hearth button,
        .theme-hearth a[class*="bg-primary"] { border-radius: 9999px !important; }
        .theme-hearth [class*="border-"] { border-style: solid; }
        .theme-hearth img { border-radius: 1rem; }
      `}</style>
      <Navbar />
      <main>
        <Hero
          image="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1920&q=80"
          alt="Warm candlelight in a sanctuary"
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
