import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#042C53" }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo onDark height={56} />
            <p className="mt-3 text-sm text-white/70">
              Rocky Mountain Yearly Meeting — a family of evangelical Friends churches across Colorado, Arizona, and Nebraska.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Events", "Churches", "Missions", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/85 transition hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Denver, Colorado</li>
            <li className="flex items-center gap-2"><Mail size={16} /><span>office@rmym.org</span></li>
            <li className="flex items-center gap-2"><Phone size={16} /><span>(303) 555-0142</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-white/60">
          © {new Date().getFullYear()} Rocky Mountain Yearly Meeting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
