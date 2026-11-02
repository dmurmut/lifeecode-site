import { ArrowUpRight, ChevronRight } from "lucide-react";
import { englishIssues, latestBriefPath, latestIssue } from "./pages";
// Preserved published LifeeCode content. Edit deliberately; do not rewrite during design changes.
export default function PublishedContent() {
  return (
    <div className="lc-preserved-content">
      <section className="lc-frame py-20 md:py-28">
        <p className="lc-eyebrow">The weekly signal desk</p>
        <h1 className="lc-section-heading mt-6 lc-preserved-title">
          Health technology, filtered for what changes your future.
        </h1>
        <p className="lc-lead-copy mt-7">
          Every archived brief follows five developments that matter—not merely
          five that made noise. We look for impact, evidence, privacy
          implications, and the human decision underneath the headline.
        </p>
        <div className="mt-16 grid border-y border-stone-900/15 lg:grid-cols-[1.1fr_.9fr]">
          <article className="border-b border-stone-900/15 py-10 pr-0 lg:border-b-0 lg:border-r lg:pr-12">
            <p className="lc-eyebrow">
              Latest published · Issue {latestIssue.issue}
            </p>
            <h2 className="mt-6 text-[clamp(2.4rem,5vw,4.6rem)] lc-preserved-title">
              {latestIssue.title}
            </h2>
            {latestIssue.signal && (
              <p className="mt-6 max-w-xl text-[.96rem] leading-7 text-stone-600">
                {latestIssue.signal}
              </p>
            )}
            <a href={latestBriefPath} className="lc-text-link mt-8">
              Read Issue {latestIssue.issue} <ArrowUpRight size={16} />
            </a>
          </article>
          <aside className="flex flex-col justify-between py-10 pl-0 lg:py-12 lg:pl-12">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text text-[#e7a328]"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              <h3 className="mt-8 text-xl font-extrabold">
                Every brief includes
              </h3>
              <ul className="mt-5 space-y-4 text-[.9rem] text-stone-600">
                <li className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-check mt-1 shrink-0 text-[#2d6a5a]"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  A practical “why it matters” for your real life.
                </li>
                <li className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-check mt-1 shrink-0 text-[#2d6a5a]"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  A futurist lens for the five-to-ten-year view.
                </li>
                <li className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-check mt-1 shrink-0 text-[#2d6a5a]"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  A privacy check that calls out who holds your data.
                </li>
              </ul>
            </div>
            <p className="mt-8 border-l-2 border-[#8d54ff] pl-4 text-[.82rem] italic leading-6 text-slate-600">
              Episode {latestIssue.issue} is now live, with{" "}
              {englishIssues.length} English weekly briefs available in the
              archive.
            </p>
          </aside>
        </div>
        <section className="mt-20">
          <p className="lc-eyebrow">
            English brief archive · {englishIssues.length} issues
          </p>
          <div className="mt-7 divide-y divide-stone-900/12 border-y border-stone-900/12">
            {englishIssues.map(item => (
              <a
                key={item.issue}
                href={`/lifeecode/briefs/${item.issue}/`}
                className="group grid gap-4 py-7 transition hover:bg-white/35 md:grid-cols-[125px_1fr_auto] md:items-center md:px-4"
              >
                <span className="text-[.7rem] font-extrabold uppercase tracking-[.13em] text-[#2d6a5a]">
                  Issue {item.issue}
                </span>
                <div>
                  <p className="text-[.73rem] font-bold text-stone-500">
                    {item.week}
                  </p>
                  <h3 className="mt-1 text-[1.7rem] lc-preserved-title">
                    {item.title}
                  </h3>
                </div>
                <ChevronRight
                  size={23}
                  className="text-[#e7a328] transition group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
