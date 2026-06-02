import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Compass,
  BookOpen,
  ScrollText,
  History,
  Heart,
  Library,
  Users,
  Mail,
  Phone,
  ArrowUpRight,
  ChevronRight,
  Download,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RMYM — Rocky Mountain Yearly Meeting of Friends" },
      {
        name: "description",
        content:
          "Learn about Rocky Mountain Yearly Meeting — our calling, Faith & Practice, the history of Friends, open worship, leadership team, and publications.",
      },
      { property: "og:title", content: "About Rocky Mountain Yearly Meeting" },
      {
        property: "og:description",
        content:
          "A family of evangelical Friends churches in CO, AZ, and NE — rooted in Christ, called to equip, energize, and establish.",
      },
    ],
  }),
  component: AboutPage,
});

const sections = [
  { id: "overview", label: "About RMYM", icon: Compass },
  { id: "calling", label: "Our Calling", icon: Heart },
  { id: "faith-practice", label: "Faith & Practice", icon: BookOpen },
  { id: "history", label: "History of Friends", icon: History },
  { id: "open-worship", label: "Open Worship", icon: ScrollText },
  { id: "rhythms-roots", label: "Rhythms & Roots", icon: Mail },
  { id: "publications", label: "Publications", icon: Library },
  { id: "staff", label: "Leadership & Staff", icon: Users },
];

function AboutPage() {
  const [active, setActive] = useState("overview");

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
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">Who We Are</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">About RMYM</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Rocky Mountain Yearly Meeting is a partnership of evangelical Friends churches across Colorado,
            Arizona, and Nebraska — building the Kingdom of God through obedience to Christ.
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
                On this page
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

          <div className="space-y-20">
            <Overview />
            <Calling />
            <FaithPractice />
            <HistoryFriends />
            <OpenWorship />
            <RhythmsRoots />
            <Publications />
            <Staff />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ========== primitives ========== */

function SectionHeader({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header id={id} className="scroll-mt-32">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-green">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {children && (
        <div className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{children}</div>
      )}
    </header>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-foreground/85">{children}</div>
  );
}

function CalloutCard({
  title,
  desc,
  href,
  icon: Icon,
  external = false,
}: {
  title: string;
  desc?: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon size={20} />
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold group-hover:text-primary">{title}</h3>
          <ArrowUpRight size={18} className="shrink-0 text-muted-foreground transition group-hover:text-primary" />
        </div>
        {desc && <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>}
      </div>
    </a>
  );
}

/* ========== sections ========== */

function Overview() {
  return (
    <section>
      <SectionHeader id="overview" eyebrow="Who We Are" title="A Partnership of Friends Churches">
        Rooted in Christ, sent in mission — a family of evangelical Friends across the Rocky Mountain region.
      </SectionHeader>
      <Prose>
        <p>
          Rocky Mountain Yearly Meeting (RMYM) is an association of evangelical Friends (Quaker) churches in
          Colorado, Arizona, and Nebraska. Set up in 1957 by a majority of monthly meetings from Nebraska
          Yearly Meeting, RMYM is part of Evangelical Friends Church International – North America.
        </p>
        <p>
          Together we exist to <strong>Equip</strong>, <strong>Energize</strong>, and <strong>Establish</strong>{" "}
          Friends Churches and Ministries in response to the Great Commission — through the ministries of
          local churches, missions, and Quaker Ridge Camp.
        </p>
      </Prose>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <CalloutCard
          title="Find a Church Near You"
          desc="Locate Friends churches across CO, AZ, and NE."
          href="/churches"
          icon={Compass}
        />
        <CalloutCard
          title="Our Mission & Ministries"
          desc="Missions, Luke 10, Friends Women, and more."
          href="/missions"
          icon={Heart}
        />
      </div>
    </section>
  );
}

function Calling() {
  return (
    <section>
      <SectionHeader id="calling" eyebrow="Our Calling" title="Rocky Mountain Yearly Meeting Calling">
        Building the Kingdom of God through obedience to Christ.
      </SectionHeader>
      <Prose>
        <p>
          RMYM is a partnership of Evangelical Friends churches banded together to provide an environment in
          which souls may be saved, transformed, and renewed. We accomplish our purpose through the ministries
          of local churches, missions, and Quaker Ridge Camp.
        </p>
        <p>
          <strong>The bottom line is souls</strong> — souls saved, transformed, and renewed. The streams of
          God's work among us are missions, Quaker Ridge Camp, and local churches. Soul work is something we
          participate in, while God does the work.
        </p>
      </Prose>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          {
            t: "Missions",
            d: "Through EFM and WGA, we hear the stories of souls saved and learn from our missionaries how local churches can be self-supporting, self-governing, and self-propagating.",
          },
          {
            t: "Quaker Ridge Camp",
            d: "An incredible resource in beauty and a primary venue for soul ministry within RMYM — a place where transformation happens.",
          },
          {
            t: "Local Churches",
            d: "Our focus is the salvation, transformation, and renewal of souls — not institutional survival. Each healthy church reproduces healthy churches.",
          },
        ].map((b) => (
          <div key={b.t} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-lg font-semibold text-primary">{b.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FaithPractice() {
  return (
    <section>
      <SectionHeader id="faith-practice" eyebrow="Doctrine & Discipline" title="Faith & Practice">
        The doctrinal foundation and governance of Rocky Mountain Yearly Meeting of the Friends Church.
      </SectionHeader>
      <Prose>
        <p>
          Faith and Practice is the foundational document of Rocky Mountain Yearly Meeting, describing what we
          believe and how we live and worship together as Friends. The current revision was approved for
          implementation on October 11, 2025, and is to be ratified in 2026.
        </p>
      </Prose>
      <div className="mt-6">
        <a
          href="https://rmym.org/wp-content/uploads/2025/10/Faith-and-Practice-2025-Revision.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-light"
        >
          <Download size={16} /> Download Faith & Practice (PDF)
        </a>
      </div>
    </section>
  );
}

function HistoryFriends() {
  return (
    <section>
      <SectionHeader id="history" eyebrow="Our Heritage" title="History of Friends / About Friends">
        From 17th-century England to the Rocky Mountains — the story of the Friends Church.
      </SectionHeader>
      <Prose>
        <p>
          The Friends Church arose from a movement of Christian renewal in seventeenth-century England.{" "}
          <strong>George Fox</strong>, repulsed by cold formalism and empty pleasure-seeking, studied his
          Bible and longed for authentic faith. After four years of searching, he found inner peace through
          trusting Jesus Christ — who "spoke to his condition" — and began proclaiming Christ's power to free
          men and women from both the guilt and power of sin.
        </p>
        <p>
          The early Friends took their name from Jesus' words in John 15:14: <em>"You are my friends if you
          do what I command."</em> Nicknamed "Quakers" in derision, the name came to be a symbol of integrity.
          Through leaders like Fox, Robert Barclay, and William Penn, the movement spread across England,
          Europe, and the New World.
        </p>
      </Prose>

      <div className="mt-8 space-y-6">
        {[
          {
            h: "The Message of Friends",
            p: "Salvation is a personal matter between the individual and God — no human mediator or outward ordinance is necessary. Friends taught that true baptism is that of Christ's Spirit within, and real communion takes place in fellowship with the Bread of life.",
          },
          {
            h: "The Living Witness",
            p: "Friends championed religious freedom, opposition to slavery, just treatment of minorities, humane prison reform, care of the mentally ill, and peace. They armed themselves with the Spirit rather than the weapons of this world.",
          },
          {
            h: "Friends in America",
            p: "Yearly Meetings were established in New England (1661), Baltimore, Virginia, Philadelphia, New York, and North Carolina before 1700. In 1957, Rocky Mountain Yearly Meeting was set up by a majority of monthly meetings from Nebraska Yearly Meeting.",
          },
          {
            h: "Evangelical Friends International",
            p: "In 1989 the Evangelical Friends Alliance was reorganized as Evangelical Friends International — an alliance of Friends Churches accepting the evangelical doctrines of the Christian Faith. RMYM is part of EFI – North America alongside Alaska, Eastern Region, Mid America, Southwest, and Northwest Yearly Meetings.",
          },
        ].map((b) => (
          <div key={b.h} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-xl font-semibold">{b.h}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">{b.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OpenWorship() {
  return (
    <section>
      <SectionHeader id="open-worship" eyebrow="Worship" title="The Practice of Open Worship">
        During Open Worship Time, each worshiper is encouraged to wait patiently and quietly before the Lord —
        becoming a corporate Body listening to its Head.
      </SectionHeader>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="font-display text-lg font-semibold text-primary">Beginning with Silence</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/85">
            <li><strong>Center Down</strong> in reverential silence, letting God cleanse mind and heart.</li>
            <li><strong>Wait Upon the Lord</strong>, listening for God's voice within your heart.</li>
            <li><strong>Communicate</strong> the desires of your heart to God — praise, confession, or petition.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="font-display text-lg font-semibold text-primary">Helpful Vocal Ministry</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/85">
            <li>Spontaneous words of praise and thanksgiving.</li>
            <li>Simple words of witness or testimony.</li>
            <li>Honest confession of sin.</li>
            <li>Words of encouragement from Scripture.</li>
            <li>Prayer for the worshipping Body.</li>
            <li>A hymn or song appropriate to the moment.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="font-display text-lg font-semibold text-primary">Practical Advice</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/85">
            <li>Stand up when you speak or pray.</li>
            <li>Face the congregation.</li>
            <li>Speak audibly and distinctly.</li>
            <li>Let God's Spirit discipline your mind.</li>
            <li>Let your words be few and full.</li>
          </ul>
        </div>
      </div>

      <Prose>
        <p>
          When another person speaks, listen to the Spirit speaking through them. At first someone else's
          voice may appear to be a disturbing interruption to your own train of thought — but listen hard to
          what God might want to say to you and the congregation through what is spoken.
        </p>
      </Prose>
    </section>
  );
}

function RhythmsRoots() {
  return (
    <section>
      <SectionHeader
        id="rhythms-roots"
        eyebrow="Letters to the Churches"
        title="Rhythms & Roots"
      >
        Correspondence written to encourage pastors, leaders, and congregations across Rocky Mountain Yearly
        Meeting.
      </SectionHeader>
      <Prose>
        <p>
          These letters are not strategy memos or trend analyses — they are correspondence. Reflections meant
          to strengthen roots, steady rhythms, and call us again to faithful life in Christ together.
        </p>
        <blockquote className="border-l-4 border-primary/40 pl-4 italic text-foreground/80">
          "So then, just as you received Christ Jesus as Lord, continue to live your lives in Him, rooted and
          built up in Him." — Colossians 2:6–7
        </blockquote>
      </Prose>
      <div className="mt-6">
        <a
          href="https://rmym.org/category/uncategorized/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
        >
          Read the Letters <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section>
      <SectionHeader id="publications" eyebrow="Resources" title="Publications">
        Books, documents, and resources from Rocky Mountain Yearly Meeting.
      </SectionHeader>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <CalloutCard
          title="Faith & Practice (2025 Revision)"
          desc="The foundational doctrine and governance of RMYM. PDF download."
          href="https://rmym.org/wp-content/uploads/2025/10/Faith-and-Practice-2025-Revision.pdf"
          icon={BookOpen}
          external
        />
        <div className="flex items-start gap-4 rounded-xl border border-dashed border-border bg-secondary/30 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <Library size={20} />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">More Publications</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Additional RMYM publications are coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Staff() {
  const leadership = [
    { role: "Superintendent", name: "Donnie Hinshaw", email: "Superintendent@rmym.org" },
    { role: "Presiding Clerk", name: "Mary Heathman", email: "PresidingClerk@rmym.org" },
    { role: "Associate Presiding Clerk", name: "Wayne Frazier", email: "AssociateClerk@rmym.org" },
    { role: "Administrative & Recording Clerk", name: "Becky Towne", email: "RecordingClerk@rmym.org", phone: "719-445-8343" },
    { role: "Financial Clerk", name: "Phil Burgi", email: "FinanceClerk@rmym.org" },
  ];

  const staff = [
    { role: "RMYM Office Manager", name: "Merle Clowe", email: "rmymoffice@gmail.com", phone: "719-413-5119" },
    {
      role: "Treasurer",
      name: "Sue Brawner",
      email: "rmymoffice@gmail.com",
      address: "c/o Rocky Mountain Yearly Meeting, 4575-B Eliot St., Denver, CO 80211",
    },
  ];

  return (
    <section>
      <SectionHeader id="staff" eyebrow="Our People" title="Leadership & Staff">
        The team serving Rocky Mountain Yearly Meeting.
      </SectionHeader>

      <div className="mt-8">
        <h3 className="font-display text-xl font-semibold">Leadership Team</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-display text-xl font-semibold">RMYM Staff</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {staff.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonCard({
  name,
  role,
  email,
  phone,
  address,
}: {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  address?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-green">{role}</p>
      <h4 className="mt-1 font-display text-lg font-semibold">{name}</h4>
      <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        {email && (
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-primary">
            <Mail size={14} /> {email}
          </a>
        )}
        {phone && (
          <a href={`tel:${phone.replace(/[^\d]/g, "")}`} className="flex items-center gap-2 hover:text-primary">
            <Phone size={14} /> {phone}
          </a>
        )}
        {address && <p className="text-xs leading-relaxed">{address}</p>}
      </div>
    </div>
  );
}
