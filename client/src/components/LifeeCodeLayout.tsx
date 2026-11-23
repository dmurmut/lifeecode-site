import type { ReactNode } from "react";
import { useLocation } from "wouter";
import { Footer, Header } from "@/components/SiteLayout";

const showUrl = "https://open.spotify.com/show/4iQ2BZmKzf0pnjXvzNAOax";
const publicationNavigation = [
  { label: "LifeeCode home", href: "/lifeecode/" },
  { label: "Weekly briefs", href: "/lifeecode/briefs/" },
  { label: "Podcast", href: "/lifeecode/podcast/" },
  { label: "हिंदी", href: "/lifeecode/hindi/" },
  { label: "About LifeeCode", href: "/lifeecode/about/" },
];

function isCurrent(location: string, href: string) {
  return href === "/lifeecode/"
    ? location.replace(/\/$/, "") === "/lifeecode"
    : location.startsWith(href.replace(/\/$/, ""));
}

/** LifeeCode section bar: sits under the shared site header, teal marks the section. */
function SectionBar() {
  const [location] = useLocation();
  return (
    <div className="border-b border-[#D8D2C6] bg-[#EDE8DF]">
      <div className="site-frame flex flex-wrap items-center gap-x-8 gap-y-1 py-2.5">
        <a href="/lifeecode/" className="font-serif text-[1.15rem] font-medium text-[#0F6E73]">LifeeCode</a>
        <nav aria-label="LifeeCode sections" className="flex flex-1 flex-wrap items-center gap-x-6 gap-y-0">
          {publicationNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isCurrent(location, item.href) ? "page" : undefined}
              className={`border-b-2 py-1.5 text-[0.95rem] font-semibold ${
                isCurrent(location, item.href) ? "border-[#0F6E73] text-[#252923]" : "border-transparent text-[#3D4139] hover:border-[#D8D2C6]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href={showUrl} target="_blank" rel="noreferrer" className="py-1.5 text-[0.95rem] font-semibold text-[#0F6E73] underline decoration-[#0F6E73]/40 underline-offset-4 hover:decoration-[#0F6E73] sm:ml-auto">
            Listen on Spotify
          </a>
        </nav>
      </div>
    </div>
  );
}

export default function LifeeCodeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="lc-shell">
      <Header />
      <SectionBar />
      <main className="page-lifeecode">{children}</main>
      <Footer />
    </div>
  );
}
