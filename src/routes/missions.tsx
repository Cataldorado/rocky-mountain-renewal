import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Globe2,
  Users,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  BookOpen,
  Building2,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/missions")({
  head: () => ({
    meta: [
      { title: "Missions & Resources — Rocky Mountain Yearly Meeting" },
      {
        name: "description",
        content:
          "Explore RMYM missions, the Luke 10 Initiative, Friends Women, scholarships, ministry resources, and partnering Friends organizations around the world.",
      },
      { property: "og:title", content: "RMYM Missions & Resources" },
      {
        property: "og:description",
        content:
          "Missions, Luke 10, Friends Women, scholarships, and ministry resources from Rocky Mountain Yearly Meeting.",
      },
    ],
  }),
  component: MissionsPage,
});

const sections = [
  { id: "missions", label: "Missions Overview", icon: Globe2 },
  { id: "luke-10", label: "Luke 10 Initiative", icon: HeartHandshake },
  { id: "international", label: "International Friends", icon: Building2 },
  { id: "friends-women", label: "Friends Women", icon: Users },
  { id: "ministry-resources", label: "Ministry Openings", icon: Briefcase },
  { id: "scholarships", label: "Scholarships", icon: GraduationCap },
  { id: "yearly-meetings", label: "Yearly Meetings", icon: Globe2 },
  { id: "other-resources", label: "Other Resources", icon: BookOpen },
];

function MissionsPage() {
  const [active, setActive] = useState("missions");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/40 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">Send</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Missions &amp; Resources
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            From the Rocky Mountains to the ends of the earth — explore the people, partnerships, and resources
            equipping Friends churches to respond to the Great Commission together.
          </p>
        </div>
      </section>

      {/* Mobile section pills */}
      <div className="sticky top-16 z-30 border-b border-border bg-white/90 backdrop-blur lg:hidden">
        <div className="overflow-x-auto px-4 py-3">
          <div className="flex gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  active === s.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground/70"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[240px_1fr] lg:gap-12 lg:px-8">
          {/* Sticky desktop nav */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Explore
              </p>
              <ul className="space-y-1">
                {sections.map((s) => {
                  const Icon = s.icon;
                  const isActive = active === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`flex items-center gap-2.5 rounded-md border-l-2 px-3 py-2 text-sm transition ${
                          isActive
                            ? "border-primary bg-primary/5 font-semibold text-primary"
                            : "border-transparent text-foreground/70 hover:border-border hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        <Icon size={16} />
                        <span className="flex-1">{s.label}</span>
                        {isActive && <ChevronRight size={14} />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-20">
            <MissionsOverview />
            <Luke10 />
            <International />
            <FriendsWomen />
            <MinistryResources />
            <Scholarships />
            <YearlyMeetings />
            <OtherResources />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ========== Section primitives ========== */

function SectionHeader({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <header id={id} className="scroll-mt-32">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {children && <div className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{children}</div>}
    </header>
  );
}

function ResourceCard({
  title,
  desc,
  href,
  external = true,
}: {
  title: string;
  desc?: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">{title}</h3>
        <ArrowUpRight size={18} className="shrink-0 text-muted-foreground transition group-hover:text-primary" />
      </div>
      {desc && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>}
    </a>
  );
}

/* ========== Sections ========== */

function MissionsOverview() {
  return (
    <section className="space-y-6">
      <SectionHeader id="missions" eyebrow="Overview" title="Missions within RMYM">
        Together with Evangelical Friends across North America, we send and support workers carrying the gospel into
        Africa, Central and South America, Asia, Europe, and North America.
      </SectionHeader>
      <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
        <h3 className="font-display text-xl font-semibold">Evangelical Friends Mission (EFM)</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          EFM is the cooperative missions arm of Evangelical Friends Church International, with outreach ministries
          across multiple continents. EFM is supported by individuals, churches, and the offices of Alaska Yearly
          Meeting, EFC Eastern Region, EFC Mid-America, EFC Southwest, Northwest Yearly Meeting, and Rocky Mountain
          Yearly Meeting. EFM is a member of the Evangelical Fellowship of Mission Agencies.
        </p>
        <a
          href="https://friendsmission.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary-light"
        >
          Visit friendsmission.com <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}

function Luke10() {
  return (
    <section className="space-y-6">
      <SectionHeader id="luke-10" eyebrow="2021 – 2025" title="Luke 10 Initiative">
        A multi-year prayer and mobilization effort sending RMYM Friends to walk alongside our partners around the
        world. Recent prayer trips include Northeast Brazil.
      </SectionHeader>
      <div className="grid gap-4 sm:grid-cols-2">
        <ResourceCard
          title="NE Brazil Prayer Trip Report"
          desc="Download the latest field report and prayer requests from the Luke 10 team."
          href="https://rmym.org/wp-content/uploads/2025/09/luke-10-ne-brazil-prayer-trip.pdf"
        />
        <ResourceCard
          title="About the Luke 10 Initiative"
          desc="Background, vision, and how Friends across RMYM are participating."
          href="https://rmym.org/resources/missions/luke-10-initiative/"
        />
      </div>
    </section>
  );
}

function International() {
  const orgs = [
    { title: "Evangelical Friends Church International", desc: "The global fellowship of Evangelical Friends churches.", href: "https://efcinternational.org/about/" },
    { title: "EFC – North America", desc: "The North American region of EFCI.", href: "https://efc-international.org/north-america/" },
    { title: "Evangelical Friends Mission", desc: "Sending and supporting missionaries worldwide.", href: "https://friendsmission.com/" },
    { title: "Evangelical Friends Church Planting", desc: "Friends Multiply — planting new Friends churches.", href: "https://friendsmultiply.org/" },
  ];
  return (
    <section className="space-y-6">
      <SectionHeader id="international" eyebrow="Partnerships" title="International Friends Organizations">
        RMYM partners with Friends churches and organizations on every continent.
      </SectionHeader>
      <div className="grid gap-4 sm:grid-cols-2">
        {orgs.map((o) => (
          <ResourceCard key={o.href} {...o} />
        ))}
      </div>
    </section>
  );
}

function FriendsWomen() {
  const board = [
    ["President", "Judy Van Meter"],
    ["Vice President", "Debbie Clowe"],
    ["Secretary", "Sue Brawner"],
    ["Treasurer", "Karen Burgi"],
    ["Missions Awareness", "Christy Neifert"],
    ["Literature Coordinator", "Terry Semones"],
    ["Scholarship", "Kay Burgi"],
    ["Facebook", "Judy Van Meter"],
  ];
  return (
    <section className="space-y-6">
      <SectionHeader id="friends-women" eyebrow="Rocky Mountain Friends Women" title="Missionary &amp; Prayer Group">
        For women who have a heart for spreading God's word to those who have not heard — through prayer groups,
        fundraising, and shared activities.
      </SectionHeader>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="font-display text-lg font-semibold">About RMFW</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Friends Women unites women in Jesus Christ while raising awareness and support for our mission families.
            Local groups meet monthly for fellowship, devotion, and projects that benefit those on the mission field.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="font-display text-lg font-semibold">2026 Retreat — BLAZE</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Sep 18–20, 2026 at Quaker Ridge Camp, Woodland Park. A 3-day immersive weekend of worship, deep rest,
            biblical teaching, and rich sisterhood, hosted by Neighborhood Friends Church.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="font-display text-lg font-semibold">Quaker Nugget &amp; Reading List</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Stay connected through the annual reading list and Friends Women updates from across the yearly meeting.
          </p>
          <a
            href="https://rmym.org/wp-content/uploads/2026/02/2026-Books-List-final-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary"
          >
            2026 Reading List <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
        <h3 className="font-display text-xl font-semibold">Executive Board</h3>
        <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {board.map(([role, name]) => (
            <div key={role} className="flex items-baseline justify-between border-b border-dashed border-border pb-2">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{role}</dt>
              <dd className="text-sm font-medium text-foreground">{name}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ResourceCard title="Fall 2025 President's Report" href="https://rmym.org/wp-content/uploads/2026/02/Fall-2025-Presidents-Report.pdf" />
        <ResourceCard title="Treasurer's Report Form" href="https://rmym.org/wp-content/uploads/2020/02/treasurers-report-form.docx" />
        <ResourceCard title="Reimbursement Form" href="https://rmym.org/wp-content/uploads/2026/02/blank-reimbursement-form.docx" />
        <ResourceCard title="2026 Yearly Report Form" href="https://rmym.org/wp-content/uploads/2026/02/Friends-Womens-Yearly-Report-Form-2026.docx" />
      </div>
    </section>
  );
}

function MinistryResources() {
  const openings = [
    {
      title: "Executive Director — Evangelical Friends Mission",
      desc: "EFM welcomes applications for the position of Executive Director.",
      href: "https://rmym.org/wp-content/uploads/2026/01/EFM-Job-Posting-Executive-Director.pdf",
    },
    {
      title: "Lead Pastor — First Friends Church of Colorado Springs (CO)",
      desc: "A four-person pastoral team is seeking a man or woman gifted in pastoral leadership for a full-time role. Inquiries: jimedtowne@gmail.com",
      href: "https://csfirstfriends.org/",
    },
    {
      title: "Senior Leader — Newberg Friends Church",
      desc: "Newberg Friends seeks a dynamic and visionary senior leader to shepherd it into a new season of vibrant ministry.",
      href: "https://rmym.org/wp-content/uploads/2025/10/2025.October.Newberg-Friends-Job-Post.pdf",
    },
    {
      title: "Pastoral Ministry — West Richmond Friends Meeting (IN)",
      desc: "A central position in pastoral ministry anchoring a team providing a full range of ministry services.",
      href: "https://www.westrichmondfriends.org/",
    },
  ];
  return (
    <section className="space-y-6">
      <SectionHeader id="ministry-resources" eyebrow="Calling" title="Ministry Openings">
        Current pastoral and ministry positions across Friends churches.
      </SectionHeader>
      <div className="grid gap-4 sm:grid-cols-2">
        {openings.map((o) => (
          <ResourceCard key={o.title} {...o} />
        ))}
      </div>
    </section>
  );
}

function Scholarships() {
  const items = [
    {
      title: "Friends Women Scholarship",
      guidelines: "https://rmym.org/wp-content/uploads/2026/02/Scholarship-Guidelines-2026.pdf",
      application: "https://rmym.org/wp-content/uploads/2026/02/Scholarship-Application-2026.pdf",
    },
    {
      title: "Ministry Scholarship",
      guidelines: "https://rmym.org/wp-content/uploads/2026/03/RMYM-Ministry-Scholarship-Guidelines-2-26.pdf",
      application: "https://rmym.org/wp-content/uploads/2026/03/RMYM-Ministry-Scholarship-Application-2-26.docx",
    },
    {
      title: "Missions Scholarship",
      guidelines: "https://rmym.org/wp-content/uploads/2026/03/RMYM-Missions-Scholarship-Guidelines-2-26.pdf",
      application: "https://rmym.org/wp-content/uploads/2026/03/RMYM-Missions-Scholarship-Application-2-26.docx",
    },
  ];
  return (
    <section className="space-y-6">
      <SectionHeader id="scholarships" eyebrow="Equip" title="Scholarships">
        Rocky Mountain Yearly Meeting offers scholarships to support Friends in ministry, missions, and education.
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((s) => (
          <div key={s.title} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-lg font-semibold">{s.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={s.guidelines}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary-light"
              >
                Guidelines <ArrowUpRight size={12} />
              </a>
              <a
                href={s.application}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-secondary"
              >
                Application <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        A{" "}
        <a
          href="https://rmym.org/wp-content/uploads/2024/02/letter-of-reference-for-scholarship.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          letter of reference
        </a>{" "}
        is required for the Friends Women Scholarship.
      </p>
    </section>
  );
}

function YearlyMeetings() {
  const ym = [
    { title: "Alaska Yearly Meeting", href: "http://www.akyearlymeeting.org/" },
    { title: "EFC – Eastern Region", href: "http://www.efcer.org/" },
    { title: "EFC – Mid-America", href: "http://www.efcmaym.org/" },
    { title: "Northwest Yearly Meeting of Friends", href: "http://nwfriends.org/" },
    { title: "Rocky Mountain Yearly Meeting", href: "http://rmym.org/" },
    { title: "Evangelical Friends Church Southwest", href: "http://www.friendschurchsw.org/" },
  ];
  return (
    <section className="space-y-6">
      <SectionHeader id="yearly-meetings" eyebrow="Family" title="Sister Yearly Meetings">
        RMYM is part of a wider family of Evangelical Friends Yearly Meetings across North America.
      </SectionHeader>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ym.map((m) => (
          <ResourceCard key={m.href} title={m.title} href={m.href} />
        ))}
      </div>
    </section>
  );
}

function OtherResources() {
  return (
    <section className="space-y-6">
      <SectionHeader id="other-resources" eyebrow="More" title="Other Resources">
        Education, youth, and disaster service ministries connected to Rocky Mountain Yearly Meeting.
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="font-display text-lg font-semibold">Barclay College</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Fully accredited 4-year degrees in Biblical Studies, Christian Ministry Leadership, Psychology, Criminal
            Justice, Business Administration, and RN-BSN Degree Completion. Certificate programs and the Friends
            Ministry Training Certificate are also available.
          </p>
          <a
            href="https://www.barclaycollege.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            barclaycollege.edu <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="font-display text-lg font-semibold">RMYM Youth</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Programs, camps, and resources for the youth of Rocky Mountain Yearly Meeting.
          </p>
          <a
            href="http://www.rmymyouth.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            rmymyouth.com <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:col-span-2">
          <h3 className="font-display text-lg font-semibold">Friends Disaster Service</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Coordinated by Doug Holcombe — Friends responding with practical help in times of disaster.
          </p>
          <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <p><span className="font-semibold text-foreground">Address:</span> 2748 E. Pikes Peak Avenue, Colorado Springs, CO 80909</p>
            <p><span className="font-semibold text-foreground">Phone:</span> 303-477-1921</p>
            <p>
              <span className="font-semibold text-foreground">Coordinator:</span>{" "}
              <a href="mailto:jdougholcombe@gmail.com" className="text-primary hover:underline">jdougholcombe@gmail.com</a>
            </p>
            <p>
              <span className="font-semibold text-foreground">Office:</span>{" "}
              <a href="mailto:office@rmym.org" className="text-primary hover:underline">office@rmym.org</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
