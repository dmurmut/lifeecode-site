import { type ReactNode, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books/" },
  { label: "About", href: "/about/" },
  { label: "LifeeCode", href: "/lifeecode/" },
];

function isActivePath(location: string, href: string) {
  if (href === "/") return location === "/";
  return location.startsWith(href.replace(/\/$/, ""));
}

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#302b31]/20 bg-[#fbfbfa]">
      <div className="container flex min-h-[78px] items-center justify-between gap-6 py-2">
        <a
          className="flex items-center gap-3 text-[#302b31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7e334e] focus-visible:ring-offset-4"
          href="/"
          aria-label="Deveendra Murmu home"
        >
          <span aria-hidden="true" className="hidden border-r border-[#302b31]/50 pr-3 font-mono text-xs text-[#7e334e] sm:block">DM /</span>
          <span className="font-serif text-[1.75rem] font-normal tracking-[-0.02em] sm:text-[1.95rem]">Deveendra Murmu</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={isActivePath(location, item.href) ? "page" : undefined}
              className={`border-b border-transparent pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7e334e] focus-visible:ring-offset-4 ${
                isActivePath(location, item.href)
                  ? "border-[#7e334e] text-[#7e334e]"
                  : "text-[#51484b] hover:border-[#302b31] hover:text-[#302b31]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/newsletter/"
            aria-current={isActivePath(location, "/newsletter/") ? "page" : undefined}
            className="border border-[#302b31] bg-[#302b31] px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#fbfbfa] transition-colors duration-200 hover:bg-[#7e334e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7e334e] focus-visible:ring-offset-4"
          >
            Newsletter
          </a>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-[#302b31]/50 text-[#302b31] transition-colors hover:bg-[#e2d4bc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7e334e] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-[#302b31]/10 bg-[#fbfbfa] px-4 py-5 shadow-[0_20px_30px_-24px_rgba(8,35,32,0.45)] lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-md flex-col">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActivePath(location, item.href) ? "page" : undefined}
                className="border-b border-[#302b31]/10 py-3.5 text-base font-semibold text-[#302b31]"
              >
                {item.label}
              </a>
            ))}
            <a href="/newsletter/" className="mt-5 bg-[#302b31] px-5 py-3 text-center font-mono text-sm uppercase tracking-[0.1em] text-[#fff7e8]">
              Newsletter
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2d262f] py-14 text-[#e2d5c3]">
      <div className="container">
        <div className="grid gap-10 border-b border-[#e2d5c3]/30 pb-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="folio-label text-[#f0ce8a]">Colophon / nonfiction & notes</p>
            <p className="mt-5 font-serif text-5xl font-normal leading-none text-[#fbfbfa]">Deveendra<br />Murmu</p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#c7b6a8]">
              Nonfiction about technology, behavior, judgment, influence, and the choices through which we build our lives.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-[0.08em] lg:justify-self-end" aria-label="Footer navigation">
            <a href="/books/" className="hover:text-white">01 / Books</a>
            <a href="/about/" className="hover:text-white">02 / About</a>
            <a href="/newsletter/" className="hover:text-white">03 / Newsletter</a>
            <a href="/lifeecode/" className="hover:text-white">04 / LifeeCode</a>
            <a href="/privacy/" className="hover:text-white">05 / Privacy</a>
          </nav>
        </div>

        <div className="grid gap-5 pt-7 font-mono text-xs text-[#c7b6a8] md:grid-cols-[1fr_auto] md:items-center">
          <p>© 2026 Deveendra Murmu. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="https://www.linkedin.com/in/deveendramurmu/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="https://x.com/DeveendraMurmu" target="_blank" rel="noreferrer" className="hover:text-white">X</a>
            <a href="https://www.youtube.com/@LifeeCode" target="_blank" rel="noreferrer" className="hover:text-white">LifeeCode YouTube</a>
            <a href="mailto:hello@devmmurmu.com" className="hover:text-white">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout({ children, variant = "author" }: { children: ReactNode; variant?: "author" | "lifeecode" }) {
  return (
    <div className="min-h-screen bg-[#fbfbfa] text-[#302b31]">
      <Header />
      <main className={variant === "lifeecode" ? "page-lifeecode" : "page-author"}>{children}</main>
      <Footer />
    </div>
  );
}
