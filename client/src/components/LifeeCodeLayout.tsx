import { type ReactNode, useEffect, useRef, useState } from "react";
import { HeartPulse, Menu, Podcast, X } from "lucide-react";
import { useLocation } from "wouter";

const showUrl = "https://open.spotify.com/show/4iQ2BZmKzf0pnjXvzNAOax";
const publicationNavigation = [
  { label: "Home", href: "/lifeecode/" },
  { label: "Weekly Briefs", href: "/lifeecode/briefs/" },
  { label: "Podcast", href: "/lifeecode/podcast/" },
  { label: "🇮🇳 हिंदी", href: "/lifeecode/hindi/" },
  { label: "About", href: "/lifeecode/about/" },
];

function LifeeCodeBrand() {
  return (
    <a href="/lifeecode/" aria-label="LifeeCode home" className="lc-brand">
      <span className="lc-brand-symbol" aria-hidden="true">
        <HeartPulse size={15} strokeWidth={2.8} />
      </span>
      <span className="lc-brand-name">
        <strong className="lc-original-wordmark">LifeeCode</strong>
        <small>by Deveendra Murmu</small>
      </span>
    </a>
  );
}

function PublicationHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="lc-header">
      <div className="lc-frame lc-header-row">
        <LifeeCodeBrand />
        <nav className="lc-desktop-nav" aria-label="Primary navigation">
          <a href="/" className="lc-nav-link lc-author-link">
            Author / Books
          </a>
          {publicationNavigation.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="lc-nav-link"
              aria-current={
                (
                  item.href === "/lifeecode/"
                    ? location.replace(/\/$/, "") === "/lifeecode"
                    : location.startsWith(item.href.replace(/\/$/, ""))
                )
                  ? "page"
                  : undefined
              }
              target={item.href.startsWith("https:") ? "_blank" : undefined}
              rel={item.href.startsWith("https:") ? "noreferrer" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            href={showUrl}
            target="_blank"
            rel="noreferrer"
            className="lc-button-primary"
          >
            Listen to podcast <Podcast size={13} />
          </a>
        </nav>
        <button
          ref={toggleRef}
          type="button"
          className="lc-menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="lifeecode-mobile-menu"
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav
          id="lifeecode-mobile-menu"
          className="lc-mobile-nav lc-frame"
          aria-label="Mobile navigation"
        >
          <a href="/" className="lc-nav-link">
            Author / Books
          </a>
          {publicationNavigation.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="lc-nav-link"
              aria-current={
                (
                  item.href === "/lifeecode/"
                    ? location.replace(/\/$/, "") === "/lifeecode"
                    : location.startsWith(item.href.replace(/\/$/, ""))
                )
                  ? "page"
                  : undefined
              }
              target={item.href.startsWith("https:") ? "_blank" : undefined}
              rel={item.href.startsWith("https:") ? "noreferrer" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            href={showUrl}
            target="_blank"
            rel="noreferrer"
            className="lc-button-primary"
          >
            Listen to podcast <Podcast size={14} />
          </a>
        </nav>
      )}
    </header>
  );
}

export default function LifeeCodeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="lc-shell">
      <PublicationHeader />
      <div className="lc-announcement">
        <div className="lc-frame flex min-h-9 flex-wrap items-center justify-center gap-x-3 gap-y-1 py-1.5 text-center text-[.72rem] font-semibold">
          <span>
            🇮🇳 LifeeCode हिंदी is now live — Health tech explained in Hindi for
            Indian listeners.
          </span>
          <a
            href="/lifeecode/hindi/"
            className="underline decoration-white/80 underline-offset-3"
          >
            Explore LifeeCode हिंदी →
          </a>
        </div>
      </div>
      <main className="page-lifeecode">{children}</main>
      {/* Original LifeeCode footer, with destination URLs preserved during staging. */}
      <footer className="mt-0 border-t border-[#dfe7ed] bg-white">
        <div className="lc-frame grid gap-10 py-12 md:grid-cols-[1.4fr_.7fr_.8fr]">
          <div>
            <a
              aria-label="LifeeCode home"
              href="/lifeecode/"
              className="flex items-center gap-2"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#00b8db] via-[#00c950] to-[#fc3c44] text-white shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart-pulse"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
                </svg>
              </span>
              <span className="leading-none">
                <strong className="lc-original-wordmark">LifeeCode</strong>
                <small className="ml-1.5 font-semibold text-[.57rem] tracking-[.04em] text-[#7b7b77]">
                  by Deveendra Murmu
                </small>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-[.82rem] leading-6 text-slate-500">
              Evidence-based, privacy-first health technology analysis — every
              week. Speed of AI, Soul of Deveendra Murmu.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href="https://www.youtube.com/@LifeeCode"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube archive"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-[#00a9c7] hover:text-[#00a9c7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-play"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/show/4iQ2BZmKzf0pnjXvzNAOax"
                target="_blank"
                rel="noreferrer"
                aria-label="Podcast"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-[#00a9c7] hover:text-[#00a9c7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-podcast"
                >
                  <path d="M16.85 18.58a9 9 0 1 0-9.7 0"></path>
                  <path d="M8 14a5 5 0 1 1 8 0"></path>
                  <circle cx="12" cy="11" r="1"></circle>
                  <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"></path>
                </svg>
              </a>
              <a
                href="https://x.com/DeveendraMurmu"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-[#00a9c7] hover:text-[#00a9c7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/deveendramurmu/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-[#00a9c7] hover:text-[#00a9c7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <p className="text-[.7rem] font-bold uppercase tracking-[.08em] text-slate-700">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-2.5 text-[.8rem] text-slate-500">
              <a href="/lifeecode/briefs/" className="hover:text-[#00a9c7]">
                Weekly Briefs
              </a>
              <a href="/lifeecode/podcast/" className="hover:text-[#00a9c7]">
                Podcast
              </a>
              <a href="/lifeecode/hindi/" className="hover:text-[#00a9c7]">
                🇮🇳 हिंदी
              </a>
              <a href="/lifeecode/about/" className="hover:text-[#00a9c7]">
                About
              </a>
            </div>
          </div>
          <div>
            <p className="text-[.7rem] font-bold uppercase tracking-[.08em] text-slate-700">
              Listen
            </p>
            <div className="mt-4 flex flex-col gap-2.5 text-[.8rem] text-slate-500">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://open.spotify.com/episode/6PxTqKJu3d5asEWAcnVSMZ?si=tC2ssFF_T4y8NkfDRGnkJA"
                className="hover:text-[#00a9c7]"
              >
                English podcast — Ep. 11
              </a>
              <a href="/lifeecode/hindi/" className="hover:text-[#00a9c7]">
                Hindi / Hinglish audio
              </a>
              <span className="text-slate-400">
                YouTube deep-dives return soon
              </span>
            </div>
          </div>
        </div>
        <div className="lc-frame border-t border-slate-100 py-4 text-[.67rem] text-slate-400">
          © 2026 LifeeCode by Deveendra Murmu. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
