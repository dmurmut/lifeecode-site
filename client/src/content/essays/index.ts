/**
 * Author essays. One JSON file per essay in this folder; the body text is the
 * editorially approved manuscript, stored verbatim (never edit wording here
 * without the author's approval).
 *
 * status "draft": page renders (for preview) but is noindex and left out of the
 * sitemap. Set status to "published" and datePublished to the actual date to publish.
 */
export type EssayBlock = { type: "p" | "h2"; text: string };

export type Essay = {
  slug: string;
  status: "draft" | "published";
  title: string;
  author: string;
  contentType: string;
  category: string;
  excerpt: string;
  seoTitle: string;
  metaDescription: string;
  tags: string[];
  datePublished: string; // YYYY-MM-DD
  dateModified: string; // YYYY-MM-DD
  wordCount: number;
  shareImage: string;
  body: EssayBlock[];
};

const modules = import.meta.glob<{ default: Essay }>("./*.json", { eager: true });

/** Newest first. */
export const essays: Essay[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => b.datePublished.localeCompare(a.datePublished));

export const essayBySlug: Record<string, Essay> = Object.fromEntries(
  essays.map((e) => [e.slug, e])
);

export const essayPath = (e: Essay) => `/essays/${e.slug}/`;

/** Reading time at 200 words per minute, rounded up. */
export const readingMinutes = (e: Essay) => Math.max(1, Math.ceil(e.wordCount / 200));

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export const hasPublishedEssays = essays.some((e) => e.status === "published");
