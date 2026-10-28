import LifeeCodeLayout from "@/components/LifeeCodeLayout";
import { usePageMeta } from "@/hooks/usePageMeta";

// Preserved from the current public LifeeCode homepage. Reading styles and copy are unchanged.
export default function LifeeCodeLanding() {
  usePageMeta(
    "LifeeCode by Deveendra Murmu | Health Tech Weekly Briefs & Podcast",
    "Privacy-first, evidence-based health technology analysis — every week. 5 signals that matter, filtered through a cybersecurity lens."
  );
  return (
    <LifeeCodeLayout>
      <div className="lc-home-content">
        <section className="relative isolate min-h-[620px] overflow-hidden bg-[#f4fbfc] md:min-h-[650px]">
          <img
            alt="Health technology and wellness"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-[.31]"
            src="/media/lifeecode-original-hero_184536a2.png"
          />
          <div className="absolute inset-0 -z-10 bg-white/60"></div>
          <div className="lc-frame flex min-h-[620px] flex-col items-center justify-center py-16 text-center md:min-h-[650px]">
            <p className="lc-eyebrow">Episode 11 is now live</p>
            <h1 className="lc-hero-heading max-w-4xl">
              The Future of Your Well-being
            </h1>
            <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-slate-600">
              Privacy-first, evidence-based health technology analysis — every
              week. 5 signals that matter, filtered through a cybersecurity
              lens, so you stay informed without the noise.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              <a href="/lifeecode/briefs/11/" className="lc-button-primary">
                Read Episode 11{" "}
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
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/episode/6PxTqKJu3d5asEWAcnVSMZ?si=tC2ssFF_T4y8NkfDRGnkJA"
                target="_blank"
                rel="noreferrer"
                className="lc-button-quiet"
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
                </svg>{" "}
                English podcast
              </a>
              <a href="/lifeecode/hindi/briefs/11/" className="lc-button-quiet">
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
                  className="lucide lucide-headphones"
                >
                  <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                </svg>{" "}
                Hinglish Brief 11
              </a>
            </div>
            <p className="mt-5 text-[.68rem] font-semibold text-slate-400">
              Video deep-dives are on a short pause. The podcast continues.
            </p>
          </div>
        </section>
        <section className="lc-frame py-18 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="lc-eyebrow">Trusted analysis, every week</p>
            <h2 className="lc-section-heading mx-auto mt-5">
              Your Trusted Guide to Health Tech
            </h2>
            <p className="lc-lead-copy mx-auto mt-5">
              In a rapidly evolving landscape of health technology, staying
              informed can be overwhelming. Each week, I curate the most
              important developments in health gadgets, wearable devices, and
              personal wellness technology—providing clear, balanced analysis
              that helps you make informed decisions about your well-being.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <a
              href="/lifeecode/briefs/"
              className="group relative rounded-2xl border p-7 shadow-[0_8px_25px_rgba(42,61,82,.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(42,61,82,.09)] border-[#8d54ff]/25 bg-[#faf7ff]"
            >
              <span className="text-2xl">📰</span>
              <h3 className="mt-4 text-[2rem] leading-none lc-card-heading">
                Weekly Briefs
              </h3>
              <p className="mt-4 max-w-lg text-[.85rem] leading-6 text-slate-600">
                Every week, I curate the 5 most important health tech
                updates—from breakthrough devices to FDA approvals and research
                findings.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[.77rem] font-bold text-[#0d8095] lc-card-link">
                Read Briefs{" "}
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
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
            <a
              href="/lifeecode/podcast/"
              className="group relative rounded-2xl border p-7 shadow-[0_8px_25px_rgba(42,61,82,.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(42,61,82,.09)] border-[#00b8db]/25 bg-[#f2fcff]"
            >
              <span className="text-2xl">🎙️</span>
              <h3 className="mt-4 text-[2rem] leading-none lc-card-heading">
                English Podcast
              </h3>
              <p className="mt-4 max-w-lg text-[.85rem] leading-6 text-slate-600">
                Thoughtful weekly commentary and analysis, built for your
                commute, workout, or a quiet moment to catch up.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[.77rem] font-bold text-[#0d8095] lc-card-link">
                Explore the podcast{" "}
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
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
            <a
              href="/lifeecode/hindi/"
              className="group relative rounded-2xl border p-7 shadow-[0_8px_25px_rgba(42,61,82,.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(42,61,82,.09)] border-[#00c950]/25 bg-[#f2fff7]"
            >
              <span className="text-2xl">🇮🇳</span>
              <span className="absolute right-6 top-6 rounded-full px-2.5 py-1 text-[.63rem] font-extrabold bg-[#dcfce7] text-[#15803d]">
                Audio first
              </span>
              <h3 className="mt-4 text-[2rem] leading-none lc-card-heading">
                Hindi / Hinglish
              </h3>
              <p className="mt-4 max-w-lg text-[.85rem] leading-6 text-slate-600">
                देवनागरी में practical health-tech context, with familiar terms
                like AI, privacy, wearables, and sleep score kept in Roman
                script.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[.77rem] font-bold text-[#0d8095] lc-card-link">
                Explore Hindi / Hinglish{" "}
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
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
            <a
              href="https://youtu.be/9-cl5btA8-8"
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl border p-7 shadow-[0_8px_25px_rgba(42,61,82,.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(42,61,82,.09)] border-[#fc3c44]/25 bg-[#fff7f7]"
            >
              <span className="text-2xl">▶️</span>
              <span className="absolute right-6 top-6 rounded-full px-2.5 py-1 text-[.63rem] font-extrabold bg-[#ffe9ea] text-[#e0353d]">
                Returning soon
              </span>
              <h3 className="mt-4 text-[2rem] leading-none lc-card-heading">
                YouTube Archive
              </h3>
              <p className="mt-4 max-w-lg text-[.85rem] leading-6 text-slate-600">
                The video series is taking a short pause while the podcast
                continues. Episode 7 remains available to watch.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[.77rem] font-bold text-[#0d8095] lc-card-link">
                Watch Episode 7{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </span>
            </a>
          </div>
        </section>
        <section className="border-y border-[#dce5ee] bg-white/80 py-18">
          <div className="lc-frame">
            <div className="mx-auto max-w-3xl text-center">
              <p className="lc-eyebrow">The LifeeCode difference</p>
              <h2 className="lc-section-heading mx-auto mt-5">
                Why LifeeCode?
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <article className="lc-soft-card p-6 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#e1f8fc] text-[#00a9c7]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-check"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-[1.45rem] lc-card-heading">
                  Curated, Not Overwhelming
                </h3>
                <p className="mt-3 text-[.82rem] leading-6 text-slate-600">
                  I filter through hundreds of health tech announcements each
                  week to bring you only the 5 that genuinely matter.
                </p>
              </article>
              <article className="lc-soft-card p-6 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0e9ff] text-[#8d54ff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sparkles"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                    <path d="M20 3v4"></path>
                    <path d="M22 5h-4"></path>
                    <path d="M4 17v2"></path>
                    <path d="M5 18H3"></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-[1.45rem] lc-card-heading">
                  Privacy-First, Always
                </h3>
                <p className="mt-3 text-[.82rem] leading-6 text-slate-600">
                  Every update is evaluated not just for what it does, but for
                  how it handles your most sensitive personal data.
                </p>
              </article>
              <article className="lc-soft-card p-6 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffe9ea] text-[#fc3c44]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-headphones"
                  >
                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-[1.45rem] lc-card-heading">
                  Evidence-Based, Not Hype
                </h3>
                <p className="mt-3 text-[.82rem] leading-6 text-slate-600">
                  Every signal connects the news to your actual health and
                  wellness—not just the marketing promise.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </LifeeCodeLayout>
  );
}
