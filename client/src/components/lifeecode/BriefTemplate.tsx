import type { ReactNode } from "react";
import { ArrowLeft, ExternalLink, ShieldAlert } from "lucide-react";
import IssueNav from "./IssueNav";

/**
 * Data shape for a weekly brief. One JSON file per issue lives in
 * client/src/content/lifeecode/brief-data/<issue>.json — see editorial/PUBLISHING.md.
 *
 * Inline text supports three small markups:
 *   [1]            citation marker linking to references[0]
 *   [label](url)   external link
 *   **bold**       bold text
 */
export type PrivacyLevel = "high" | "medium" | "low";
export type SourceLink = { label: string; url: string };

export type BriefData = {
  issue: number;
  /** e.g. "August 24 – 30, 2026" */
  coverage: string;
  /** Short framing shown under the hero as "This week's signal". */
  signal: string;
  /** Medical-information notice; a default is used when omitted. */
  notice?: string;
  deepDive: {
    title: string;
    privacy: PrivacyLevel;
    take: string;
    /** Optional summary cards under the take. */
    whyItMatters?: string;
    futuristLens?: string;
    sections: { heading: string; paragraphs: string[] }[];
    privacyRating: string;
    sources: SourceLink[];
  };
  signals: {
    title: string;
    privacy: PrivacyLevel;
    paragraphs: string[];
    whyItMatters: string;
    futuristLens: string;
    sources: SourceLink[];
  }[];
  radar: { story: string; privacy: PrivacyLevel; data: string; action: string }[];
  globalWatch?: { title: string; paragraphs: string[]; sources: SourceLink[] };
  /** Used only when there is no standalone Global Watch item. */
  globalWatchNote?: string;
  closing?: { label: string; text: string };
  references: SourceLink[];
};

export const DEFAULT_NOTICE =
  "LifeeCode is educational and does not provide medical advice. Decisions about symptoms, treatment, AI tools, wearables, risk scores, or medical devices should be made with a qualified clinician.";

const privacyStyles: Record<
  PrivacyLevel,
  { label: string; badge: string; dot: string }
> = {
  high: {
    label: "High privacy risk",
    badge: "border-[#fc3c44]/25 bg-[#fff0f1] text-[#d52d37]",
    dot: "bg-[#fc3c44]",
  },
  medium: {
    label: "Medium privacy risk",
    badge: "border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]",
    dot: "bg-[#f99c00]",
  },
  low: {
    label: "Low privacy risk",
    badge: "border-[#16a34a]/25 bg-[#effaf3] text-[#15803d]",
    dot: "bg-[#16a34a]",
  },
};

function Inline({
  text,
  references,
}: {
  text: string;
  references: SourceLink[];
}) {
  const parts: ReactNode[] = [];
  const pattern = /\[(\d+)\](?!\()|\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1]) {
      const n = Number(match[1]);
      const ref = references[n - 1];
      parts.push(
        <sup key={key++} className="ml-0.5 text-[.65em] font-bold">
          <a
            href={ref ? ref.url : `#ref-${n}`}
            target={ref ? "_blank" : undefined}
            rel={ref ? "noreferrer" : undefined}
            title={ref?.label}
            className="text-[#00839b] hover:underline"
          >
            {n}
          </a>
        </sup>
      );
    } else if (match[2]) {
      parts.push(
        <a
          key={key++}
          href={match[3]}
          target="_blank"
          rel="noreferrer"
          className="text-[#00839b] underline decoration-[#00839b]/30 underline-offset-2 hover:decoration-[#00839b]"
        >
          {match[2]}
        </a>
      );
    } else if (match[4]) {
      parts.push(<b key={key++}>{match[4]}</b>);
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

function SourceLinks({
  sources,
  className,
  prefix,
}: {
  sources: SourceLink[];
  className: string;
  prefix?: string;
}) {
  return (
    <div className="flex flex-col items-start gap-1">
      {sources.map((s, i) => (
        <a
          key={s.url + i}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          className={i === 0 ? className : "lc-text-link"}
        >
          {i === 0 && prefix ? `${prefix}${s.label}` : s.label}{" "}
          <ExternalLink size={14} />
        </a>
      ))}
    </div>
  );
}

export default function BriefTemplate({ brief }: { brief: BriefData }) {
  const refs = brief.references;
  const dd = brief.deepDive;
  const ddStyle = privacyStyles[dd.privacy];
  return (
    <div className="lc-preserved-content">
      <section className="border-b border-[#dce5ee] bg-gradient-to-b from-[#f8fbff] to-[#f4fbfc] py-16 md:py-22">
        <div className="lc-frame max-w-5xl">
          <a href="/lifeecode/briefs/" className="lc-text-link">
            <ArrowLeft size={15} /> All weekly briefs
          </a>
          <p className="lc-eyebrow mt-9">
            Week of {brief.coverage} · Issue No. {brief.issue}
          </p>
          <h1 className="mt-5 text-[clamp(3rem,7vw,5.8rem)] lc-preserved-title">
            Health tech
            <br />
            <em className="text-[#00a9c7]">weekly brief.</em>
          </h1>
          <p className="mt-7 max-w-4xl border-l-2 border-[#8d54ff] pl-5 text-[1rem] italic leading-8 text-slate-700">
            <b className="not-italic text-[#6d36cc]">This week’s signal:</b>{" "}
            <Inline text={brief.signal} references={refs} />
          </p>
          <p className="mt-6 max-w-4xl rounded-lg border border-slate-200 bg-white/70 px-4 py-3 text-[.78rem] leading-6 text-slate-600">
            <b className="text-slate-700">Medical-information notice:</b>{" "}
            {brief.notice ?? DEFAULT_NOTICE}
          </p>
        </div>
      </section>
      <section className="lc-frame py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_255px] lg:gap-14">
          <div>
            <article className="lc-soft-card border-[#00b8db]/25 p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#e1f8fc] px-3 py-1 text-[.65rem] font-extrabold uppercase tracking-[.1em] text-[#00839b]">
                  Under the microscope
                </span>
                <span
                  className={`rounded-full border px-3 py-1 text-[.65rem] font-extrabold uppercase tracking-[.1em] ${ddStyle.badge}`}
                >
                  {ddStyle.label}
                </span>
              </div>
              <h2 className="mt-6 text-[clamp(2.15rem,4.5vw,4.1rem)] lc-preserved-title">
                {dd.title}
              </h2>
              <p className="mt-6 border-l-2 border-[#00b8db] pl-4 text-[1rem] leading-8 text-slate-700">
                <b className="text-[#00839b]">The LifeeCode Take:</b>{" "}
                <Inline text={dd.take} references={refs} />
              </p>
              {dd.whyItMatters && dd.futuristLens && (
              <div className="mt-8 grid gap-6 rounded-xl bg-[#f8fbff] p-6 sm:grid-cols-2">
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                    Why it matters for your wellness
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    <Inline text={dd.whyItMatters} references={refs} />
                  </p>
                </div>
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                    The futurist lens
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    <Inline text={dd.futuristLens} references={refs} />
                  </p>
                </div>
              </div>
              )}
              {dd.sections.map((section, i) => (
                <section className="mt-9" key={section.heading}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f99c00] text-[.68rem] font-extrabold text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-[1.55rem] lc-preserved-title">
                      {section.heading}
                    </h3>
                  </div>
                  {section.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="mt-3 text-[.94rem] leading-7 text-slate-700"
                    >
                      <Inline text={p} references={refs} />
                    </p>
                  ))}
                </section>
              ))}
              <div className={`mt-9 rounded-xl border p-5 ${ddStyle.badge}`}>
                <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em]">
                  LifeeCode Privacy Rating · {ddStyle.label}
                </p>
                <p className="mt-2 text-[.86rem] leading-6 text-slate-700">
                  <Inline text={dd.privacyRating} references={refs} />
                </p>
              </div>
              <div className="mt-9">
                <SourceLinks
                  sources={dd.sources}
                  className="lc-text-link"
                  prefix="Read the cited source: "
                />
              </div>
            </article>
            <section className="mt-14">
              <p className="lc-eyebrow">Four more signals from this week</p>
              <div className="mt-5 space-y-4">
                {brief.signals.map((signal, i) => {
                  const style = privacyStyles[signal.privacy];
                  return (
                    <article
                      key={signal.title}
                      className="lc-soft-card border-slate-200 p-6 md:p-7"
                    >
                      <div className="flex flex-wrap items-start gap-4">
                        <span className="font-[family-name:var(--font-display)] text-3xl text-[#f99c00]">
                          {String(i + 2).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-[1.55rem] lc-preserved-title">
                              {signal.title}
                            </h3>
                            <span
                              className={`rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] ${style.badge}`}
                            >
                              {style.label}
                            </span>
                          </div>
                          {signal.paragraphs.map((p, j) => (
                            <p
                              key={j}
                              className="mt-4 text-[.88rem] leading-7 text-slate-700"
                            >
                              <Inline text={p} references={refs} />
                            </p>
                          ))}
                          <div className="mt-5 grid gap-5 md:grid-cols-2">
                            <div>
                              <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                                Why it matters for your wellness
                              </p>
                              <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                                <Inline
                                  text={signal.whyItMatters}
                                  references={refs}
                                />
                              </p>
                            </div>
                            <div>
                              <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                                Futurist lens
                              </p>
                              <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                                <Inline
                                  text={signal.futuristLens}
                                  references={refs}
                                />
                              </p>
                            </div>
                          </div>
                          <div className="mt-5">
                            <SourceLinks
                              sources={signal.sources}
                              className="lc-text-link"
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
            <section className="mt-14 rounded-2xl border border-[#8d54ff]/25 bg-[#f8f4ff] p-7 md:p-9">
              <p className="lc-eyebrow">Global watch</p>
              {brief.globalWatch ? (
                <>
                  <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] lc-preserved-title">
                    {brief.globalWatch.title}
                  </h2>
                  {brief.globalWatch.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="mt-5 text-[.92rem] leading-7 text-slate-700"
                    >
                      <Inline text={p} references={refs} />
                    </p>
                  ))}
                  <div className="mt-6">
                    <SourceLinks
                      sources={brief.globalWatch.sources}
                      className="lc-text-link"
                    />
                  </div>
                </>
              ) : (
                <p className="mt-4 text-[.92rem] leading-7 text-slate-700">
                  {brief.globalWatchNote ??
                    "No standalone Global Watch item this week: no international development cleared the bar for evidence and non-duplication."}
                </p>
              )}
            </section>
            {refs.length > 0 && (
              <section className="mt-14">
                <p className="lc-eyebrow">References</p>
                <ol className="mt-5 space-y-2 text-[.8rem] leading-6 text-slate-600">
                  {refs.map((r, i) => (
                    <li key={r.url + i} id={`ref-${i + 1}`} className="flex gap-2">
                      <span className="font-bold text-slate-500">[{i + 1}]</span>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#00839b] hover:underline"
                      >
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
          <aside className="h-fit lc-soft-card border-[#f99c00]/25 p-6 lg:sticky lg:top-28">
            <ShieldAlert size={23} className="text-[#f99c00]" />
            <h2 className="mt-4 text-3xl lc-preserved-title">Privacy Radar</h2>
            <p className="mt-3 text-[.78rem] leading-6 text-slate-600">
              Who may receive the data, and the practical check to make before
              you act.
            </p>
            <div className="mt-5 space-y-4">
              {brief.radar.map(item => {
                const style = privacyStyles[item.privacy];
                return (
                  <div
                    key={item.story}
                    className="border-t border-slate-200 pt-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                      <p className="text-[.68rem] font-extrabold uppercase tracking-[.08em] text-slate-700">
                        {style.label}
                      </p>
                    </div>
                    <h3 className="mt-2 text-[.82rem] font-bold leading-5 text-slate-800">
                      {item.story}
                    </h3>
                    <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                      <b>Data:</b> {item.data}
                    </p>
                    <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                      <b>Action:</b> {item.action}
                    </p>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>
      {brief.closing && (
        <section className="bg-gradient-to-r from-[#008a9f] to-[#00a9c7] py-14 text-white">
          <div className="lc-frame max-w-4xl">
            <p className="text-[.68rem] font-extrabold uppercase tracking-[.14em] text-white/80">
              {brief.closing.label}
            </p>
            <p className="mt-4 text-[clamp(2rem,4vw,3.4rem)] lc-preserved-title">
              {brief.closing.text}
            </p>
          </div>
        </section>
      )}
      <IssueNav current={brief.issue} />
    </div>
  );
}
