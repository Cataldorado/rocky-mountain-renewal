import { Link, useLocation } from "@tanstack/react-router";

const versions = [
  { to: "/", label: "V1", name: "Signature" },
  { to: "/v2", label: "V2", name: "Broadsheet" },
  { to: "/v3", label: "V3", name: "Summit" },
  { to: "/v4", label: "V4", name: "Hearth" },
] as const;

export default function VersionSwitcher() {
  const { pathname } = useLocation();
  return (
    <div className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/95 p-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur">
        <span className="hidden px-3 text-[10px] font-semibold uppercase tracking-widest text-black/50 sm:block">
          Concepts
        </span>
        {versions.map((v) => {
          const active = pathname === v.to;
          return (
            <Link
              key={v.to}
              to={v.to}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                active ? "bg-black text-white" : "text-black/70 hover:bg-black/5"
              }`}
            >
              <span className="font-mono">{v.label}</span>
              <span className="hidden sm:inline">{v.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
