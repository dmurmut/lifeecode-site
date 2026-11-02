import manifest from "./manifest.json";
import type { BriefData } from "@/components/lifeecode/BriefTemplate";

/**
 * Single source of truth for LifeeCode publication pages.
 *
 * - Hand-built pages (archive hub, issues 1–11, Hindi pages, podcast, about) are listed in manifest.json.
 * - Template briefs (issue 12 onward) are discovered from brief-data/<issue>.json. Adding a JSON file
 *   is all it takes to publish a brief: its page, archive entry, issue navigation, "latest brief"
 *   links, sitemap entry and /briefs/<issue> redirect are derived automatically.
 */
export type PageEntry = {
  path: string;
  legacyPath: string;
  module: string;
  title: string;
  description: string;
  language: string;
  article: boolean;
  issue?: number;
};

const briefFiles = import.meta.glob<BriefData>("./brief-data/*.json", {
  eager: true,
  import: "default",
});

const LEVELS = ["high", "medium", "low"];

/** Fails the build with a readable message when a brief file is incomplete. */
function validateBrief(file: string, b: BriefData): BriefData {
  const problems: string[] = [];
  const need = (ok: unknown, what: string) => {
    if (!ok) problems.push(what);
  };
  const text = (v: unknown) => typeof v === "string" && v.trim().length > 0;
  const links = (v: unknown) =>
    Array.isArray(v) &&
    v.length > 0 &&
    v.every(l => text(l?.label) && /^https?:\/\//.test(l?.url ?? ""));
  need(Number.isInteger(b.issue), "issue (whole number)");
  need(file.endsWith(`/${b.issue}.json`), "file name must match issue number");
  need(text(b.coverage), "coverage");
  need(text(b.signal), "signal");
  const d = b.deepDive;
  need(d && text(d.title), "deepDive.title");
  need(d && LEVELS.includes(d.privacy), "deepDive.privacy (high/medium/low)");
  need(d && text(d.take), "deepDive.take");
  need(d && text(d.privacyRating), "deepDive.privacyRating");
  need(
    d &&
      Array.isArray(d.sections) &&
      d.sections.length > 0 &&
      d.sections.every(s => text(s.heading) && s.paragraphs?.every(text)),
    "deepDive.sections"
  );
  need(d && links(d.sources), "deepDive.sources");
  need(Array.isArray(b.signals) && b.signals.length === 4, "signals (exactly 4)");
  b.signals?.forEach((s, i) => {
    need(text(s.title), `signals[${i}].title`);
    need(LEVELS.includes(s.privacy), `signals[${i}].privacy`);
    need(s.paragraphs?.length && s.paragraphs.every(text), `signals[${i}].paragraphs`);
    need(text(s.whyItMatters), `signals[${i}].whyItMatters`);
    need(text(s.futuristLens), `signals[${i}].futuristLens`);
    need(links(s.sources), `signals[${i}].sources`);
  });
  need(Array.isArray(b.radar) && b.radar.length === 5, "radar (exactly 5 rows)");
  b.radar?.forEach((r, i) =>
    need(
      text(r.story) && LEVELS.includes(r.privacy) && text(r.data) && text(r.action),
      `radar[${i}]`
    )
  );
  if (b.globalWatch)
    need(
      text(b.globalWatch.title) &&
        b.globalWatch.paragraphs?.every(text) &&
        links(b.globalWatch.sources),
      "globalWatch"
    );
  need(Array.isArray(b.references) && (b.references.length === 0 || links(b.references)), "references");
  const cited = JSON.stringify(b).match(/\[(\d+)\](?!\()/g) ?? [];
  for (const c of cited) {
    const n = Number(c.slice(1, -1));
    need(n >= 1 && n <= (b.references?.length ?? 0), `citation ${c} has no matching reference`);
  }
  if (problems.length)
    throw new Error(`Brief ${file} is incomplete: ${Array.from(new Set(problems)).join("; ")}`);
  return b;
}

export const templateBriefs: BriefData[] = Object.entries(briefFiles)
  .map(([file, brief]) => validateBrief(file, brief))
  .sort((a, b) => b.issue - a.issue);

export const briefByIssue: Record<number, BriefData> = Object.fromEntries(
  templateBriefs.map(b => [b.issue, b])
);

function truncate(text: string, max: number) {
  const plain = text
    .replace(/\[(\d+)\](?!\()/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return plain.length > max ? plain.slice(0, max) : plain;
}

export function briefEntry(brief: BriefData): PageEntry {
  return {
    path: `/lifeecode/briefs/${brief.issue}/`,
    legacyPath: `/briefs/${brief.issue}`,
    module: `brief:${brief.issue}`,
    title: `${brief.deepDive.title} | LifeeCode`,
    description: truncate(`This week’s signal: ${brief.signal}`, 200),
    language: "en",
    article: true,
    issue: brief.issue,
  };
}

export const allPages: PageEntry[] = [
  ...(manifest as PageEntry[]),
  ...templateBriefs.map(briefEntry),
];

/** Hand-built issues, as listed on the archive page before the template existed. */
const legacyIssues = [
  {
    issue: 11,
    week: "Week of August 17 – 23, 2026",
    title:
      "Your Wearable Score Is Not a Clinical Outcome — Until It Proves It Matters",
    signal:
      "Health technology is moving beyond the era of counting everything. The next era is about measuring what matters. This week, LifeeCode examines the FDA’s framework for digitally derived measures, a new regulatory conversation about generative-AI medical devices, condition-specific wearable monitoring, AI-assisted biomarker research, and the safety role of patient trust.",
  },
  {
    issue: 9,
    week: "Week of August 3 – 9, 2026",
    title:
      "The GAO Just Explained Why Wearables Still Struggle to Become Real Clinical Tools",
  },
  {
    issue: 8,
    week: "Week of July 27 – August 2, 2026",
    title:
      "The Same Wearable Can Face Opposite Rules — and That Should Worry You",
  },
  {
    issue: 7,
    week: "Week of April 14–19, 2026",
    title: "Wearables May Spot Parkinson's Progression Before the Clinic Does",
  },
  {
    issue: 6,
    week: "Week of April 6 – April 12, 2026",
    title:
      "Meta Puts a Health-Capable AI Inside WhatsApp, Instagram, and Facebook — and Asked Users for Their Lab Results",
  },
  {
    issue: 5,
    week: "Week of March 30 – April 5, 2026",
    title:
      "Google and the U.S. Government Just Merged Your Medical Records with Your Fitbit",
  },
  {
    issue: 3,
    week: "Week of March 15–21, 2026",
    title:
      "Your Apple Watch Can Now Predict a Heart Failure Hospitalisation 21 Days Early",
  },
  {
    issue: 2,
    week: "Week of March 8–14, 2026",
    title:
      "Microsoft Launches Copilot Health, Integrating Wearables and Medical Records",
  },
  {
    issue: 1,
    week: "Week of February 22–28, 2026",
    title:
      "FDA Eases Regulatory Hurdles for Wearables — But Experts Warn of a Hidden Risk",
  },
];

export type IssueSummary = {
  issue: number;
  week: string;
  title: string;
  signal?: string;
};

/** Every English written brief, newest first. */
export const englishIssues: IssueSummary[] = [
  ...templateBriefs.map(b => ({
    issue: b.issue,
    week: `Week of ${b.coverage}`,
    title: b.deepDive.title,
    signal: truncate(b.signal, 600),
  })),
  ...legacyIssues,
].sort((a, b) => b.issue - a.issue);

export const latestIssue = englishIssues[0];
export const latestBriefPath = `/lifeecode/briefs/${latestIssue.issue}/`;
