import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import MissionBanner from "@/components/MissionBanner";
import News from "@/components/News";
import FindChurch from "@/components/FindChurch";
import Missions from "@/components/Missions";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rocky Mountain Yearly Meeting — Friends Churches in CO, AZ & NE" },
      {
        name: "description",
        content:
          "RMYM is a family of evangelical Friends churches across Colorado, Arizona, and Nebraska — equipping, energizing, and establishing churches in mission.",
      },
      { property: "og:title", content: "Rocky Mountain Yearly Meeting" },
      { property: "og:description", content: "Equip. Energize. Establish. A family of Friends churches united in Christ, sent in mission." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
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
