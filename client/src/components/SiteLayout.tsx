import { type ReactNode, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books/" },
  { label: "Essays", href: "/essays/" },
  { label: "About", href: "/about/" },
  { label: "LifeeCode", href: "/lifeecode/" },
];

function isActivePath(location: string, href: string) {
  if (href === "/") return location === "/";
  return location.startsWith(href.replace(/\/$/, ""));
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8D2C6] bg-[#F5F2EC]">
      <div className="site-frame flex min-h-[76px] items-center justify-between gap-6 py-3">
        <a
          className="flex items-center gap-3.5 text-[#252923] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E334E] focus-visible:ring-offset-4"
          href="/"
          aria-label="Deveendra Murmu home"
        >
          <span aria-hidden="true" className="flex h-[38px] w-[38px] shrink-0 items-center justify-center border border-[#7E334E] font-serif text-[16px] font-medium tracking-[0.02em] text-[#7E334E]">DM</span>
          <span className="font-serif text-[1.3rem] font-medium tracking-[0.005em] sm:text-[1.45rem]">Deveendra Murmu</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={isActivePath(location, item.href) ? "page" : undefined}
              className={`border-b-2 py-2 text-[1rem] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E334E] focus-visible:ring-offset-4 ${
                isActivePath(location, item.href)
                  ? "border-[#7E334E] text-[#252923]"
                  : "border-transparent text-[#252923] hover:border-[#D8D2C6]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/newsletter/"
            aria-current={isActivePath(location, "/newsletter/") ? "page" : undefined}
            className={`border-b-2 py-2 text-[1rem] font-semibold text-[#7E334E] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E334E] focus-visible:ring-offset-4 ${
              isActivePath(location, "/newsletter/") ? "border-[#7E334E]" : "border-transparent hover:border-[#D8D2C6]"
            }`}
          >
            Newsletter
          </a>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center text-[#252923] transition-colors hover:bg-[#EDE8DF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E334E] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-[#D8D2C6] bg-[#F5F2EC] px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-md flex-col">
            {[...navigation, { label: "Newsletter", href: "/newsletter/" }].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActivePath(location, item.href) ? "page" : undefined}
                className={`border-b border-[#D8D2C6] py-3.5 text-[1.05rem] font-semibold ${item.label === "Newsletter" ? "text-[#7E334E]" : "text-[#252923]"}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#D8D2C6] bg-[#F5F2EC] text-[#5B5F57]">
      <div className="site-frame flex flex-wrap items-start justify-between gap-x-12 gap-y-6 py-10">
        <div>
          <p className="font-serif text-[1.15rem] font-medium text-[#252923]">Deveendra Murmu</p>
          <p className="mt-1 text-[0.95rem]">Books published by Maaino Murmu</p>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[0.95rem]" aria-label="Footer navigation">
          <a href="/books/" className="hover:text-[#252923]">Books</a>
          <a href="/essays/" className="hover:text-[#252923]">Essays</a>
          <a href="/about/" className="hover:text-[#252923]">About</a>
          <a href="/newsletter/" className="hover:text-[#252923]">Newsletter</a>
          <a href="/lifeecode/" className="hover:text-[#252923]">LifeeCode</a>
          <a href="/privacy/" className="hover:text-[#252923]">Privacy</a>
        </nav>
      </div>
      <div className="site-frame flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-[#D8D2C6] py-6 text-[0.9rem]">
        <p>© 2026 Deveendra Murmu. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="https://www.linkedin.com/in/deveendramurmu/" target="_blank" rel="noreferrer" className="hover:text-[#252923]">LinkedIn</a>
          <a href="https://x.com/DeveendraMurmu" target="_blank" rel="noreferrer" className="hover:text-[#252923]">X</a>
          <a href="https://www.youtube.com/@LifeeCode" target="_blank" rel="noreferrer" className="hover:text-[#252923]">LifeeCode on YouTube</a>
          <a href="mailto:hello@devmmurmu.com" className="hover:text-[#252923]">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout({ children, variant = "author" }: { children: ReactNode; variant?: "author" | "lifeecode" }) {
  return (
    <div className="min-h-screen bg-[#F5F2EC] text-[#252923]">
      <Header />
      <main className={variant === "lifeecode" ? "page-lifeecode" : "page-author"}>{children}</main>
      <Footer />
    </div>
  );
}
