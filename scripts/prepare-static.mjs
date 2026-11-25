import { createServer } from "vite";
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
const root = path.resolve(import.meta.dirname, "..");
const site = JSON.parse(
  await readFile(path.join(root, "client/src/site.config.json"), "utf8")
);
const vite = await createServer({
  root: path.join(root, "client"),
  configFile: path.join(root, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
});
const { renderPath, allPages: manifest } = await vite.ssrLoadModule(
  "/src/entry-prerender.tsx"
);
const authors = [
  { path: "/", file: "Home", title: "Deveendra Murmu — Nonfiction Author" },
  { path: "/books/", file: "Books", title: "Books — Deveendra Murmu" },
  {
    path: "/books/what-should-remain-mine/",
    file: "BookOne",
    title: "What Should Remain Mine? — Deveendra Murmu",
  },
  { path: "/essays/", file: "Essays", title: "Essays — Deveendra Murmu" },
  {
    path: "/about/",
    file: "About",
    title: "About Deveendra Murmu — Nonfiction Author",
  },
  {
    path: "/newsletter/",
    file: "Newsletter",
    title: "Newsletter — Deveendra Murmu",
  },
  { path: "/privacy/", file: "Privacy", title: "Privacy — Deveendra Murmu" },
  {
    path: "/lifeecode/",
    file: "LifeeCodeLanding",
    title: "LifeeCode by Deveendra Murmu | Health Tech Weekly Briefs & Podcast",
  },
];
for (const entry of authors) {
  const s = await readFile(
    path.join(root, "client/src/pages/" + entry.file + ".tsx"),
    "utf8"
  );
  const m = s.match(/usePageMeta\(\s*"[^"]+",\s*"([^"]+)"/);
  if (!m) throw Error("Missing description " + entry.file);
  entry.description = m[1];
  entry.language = "en";
}
// Essays: one JSON file each in client/src/content/essays. Drafts render for preview
// but are noindex and stay out of the sitemap until status is "published".
const essayDir = path.join(root, "client/src/content/essays");
const essays = [];
for (const f of (await readdir(essayDir)).filter(f => f.endsWith(".json")).sort()) {
  const e = JSON.parse(await readFile(path.join(essayDir, f), "utf8"));
  for (const k of ["slug", "status", "title", "seoTitle", "metaDescription", "datePublished", "dateModified", "shareImage", "body"])
    if (!e[k] || (Array.isArray(e[k]) && !e[k].length)) throw Error(`Essay ${f} is missing ${k}`);
  if (!["draft", "published"].includes(e.status)) throw Error(`Essay ${f} has invalid status ${e.status}`);
  essays.push(e);
}
const hasPublishedEssays = essays.some(e => e.status === "published");
authors.find(a => a.path === "/essays/").noindex = !hasPublishedEssays;
const essayEntries = essays.map(e => ({
  path: `/essays/${e.slug}/`,
  title: e.seoTitle,
  ogTitle: e.title,
  description: e.metaDescription,
  language: "en",
  article: true,
  noindex: e.status !== "published",
  lastmod: e.dateModified,
  essay: e,
}));
const pages = [...authors, ...essayEntries, ...manifest];
// Legacy URL redirects are served by vercel.json.
const out = path.join(root, "dist/public");
let template = await readFile(path.join(out, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) {
  throw new Error(
    "Static pages are already prepared. Run pnpm build for a fresh complete rebuild."
  );
}
const escape = s =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const canonical = p => `https://${site.productionHost}${p}`;

// Social share image per section (1200x630, in client/public/media).
function shareImage(entryPath) {
  const essayEntry = essayEntries.find(e => e.path === entryPath);
  if (essayEntry)
    return {
      src: essayEntry.essay.shareImage,
      alt: `${essayEntry.essay.title} — an essay by Deveendra Murmu`,
    };
  if (entryPath.startsWith("/books/"))
    return {
      src: "/media/share-book.jpg",
      alt: "What Should Remain Mine? by Deveendra Murmu — book cover",
    };
  if (entryPath.startsWith("/lifeecode/"))
    return {
      src: "/media/share-lifeecode.jpg",
      alt: "LifeeCode — privacy-first, evidence-based health technology",
    };
  return {
    src: "/media/share-author.jpg",
    alt: "Deveendra Murmu, nonfiction author",
  };
}

const PERSON = {
  "@type": "Person",
  "@id": `https://${site.productionHost}/#person`,
  name: "Deveendra Murmu",
  url: `https://${site.productionHost}/`,
  image: `https://${site.productionHost}/media/deveendra-murmu.jpg`,
  jobTitle: "Nonfiction author",
  description:
    "Nonfiction author with an engineering background and more than three decades of experience in information technology.",
  sameAs: [
    "https://www.linkedin.com/in/deveendramurmu/",
    "https://x.com/DeveendraMurmu",
    "https://www.youtube.com/@LifeeCode",
  ],
};

// Structured data (schema.org JSON-LD) for the pages where it helps search results.
function structuredData(entryPath) {
  const host = `https://${site.productionHost}`;
  if (entryPath === "/")
    return [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${host}/#website`,
        url: `${host}/`,
        name: "Deveendra Murmu",
        publisher: { "@id": `${host}/#person` },
      },
      { "@context": "https://schema.org", ...PERSON },
    ];
  if (entryPath === "/about/")
    return [
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url: `${host}/about/`,
        mainEntity: PERSON,
      },
    ];
  if (entryPath === "/books/what-should-remain-mine/")
    return [
      {
        "@context": "https://schema.org",
        "@type": "Book",
        name: "What Should Remain Mine?",
        alternativeHeadline:
          "How to Delegate, Collaborate, and Think for Yourself in the Age of AI",
        author: { "@id": `${host}/#person`, "@type": "Person", name: "Deveendra Murmu" },
        image: `${host}/media/wsrm-cover.jpg`,
        url: `${host}/books/what-should-remain-mine/`,
        datePublished: "2027-02-02",
        inLanguage: "en",
        bookFormat: ["https://schema.org/Paperback", "https://schema.org/EBook"],
      },
    ];
  const essayEntry = essayEntries.find(e => e.path === entryPath);
  if (essayEntry) {
    const e = essayEntry.essay;
    const url = `${host}${entryPath}`;
    return [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        headline: e.title,
        alternativeHeadline: e.seoTitle,
        description: e.metaDescription,
        image: [`${host}${e.shareImage}`],
        datePublished: e.datePublished,
        dateModified: e.dateModified,
        author: { ...PERSON },
        publisher: { "@id": `${host}/#person`, "@type": "Person", name: "Deveendra Murmu", url: `${host}/` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        isPartOf: { "@type": "WebSite", "@id": `${host}/#website`, name: "Deveendra Murmu", url: `${host}/` },
        articleSection: e.category,
        keywords: e.tags,
        wordCount: e.wordCount,
        inLanguage: "en",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${host}/` },
          { "@type": "ListItem", position: 2, name: "Essays", item: `${host}/essays/` },
          { "@type": "ListItem", position: 3, name: e.title, item: url },
        ],
      },
    ];
  }
  return [];
}
// Open Graph article details for essays.
function articleMeta(entry) {
  if (!entry.essay) return "";
  const e = entry.essay;
  return [
    `<meta property="article:published_time" content="${e.datePublished}" />`,
    `<meta property="article:modified_time" content="${e.dateModified}" />`,
    `<meta property="article:author" content="https://${site.productionHost}/about/" />`,
    `<meta property="article:section" content="${escape(e.category)}" />`,
    ...e.tags.map(t => `<meta property="article:tag" content="${escape(t)}" />`),
    `<meta name="author" content="${escape(e.author)}" />`,
    `<meta name="twitter:title" content="${escape(e.title)}" />`,
    `<meta name="twitter:description" content="${escape(e.metaDescription)}" />`,
    `<meta name="twitter:image:alt" content="${escape(shareImage(entry.path).alt)}" />`,
  ].join("\n") + "\n";
}
const jsonLd = data =>
  data
    .map(
      d =>
        `<script type="application/ld+json">${JSON.stringify(d).replaceAll("<", "\\u003c")}</script>`
    )
    .join("\n");
try {
  async function emit(entry, markup, dest) {
    let html = template
      .replace(
        /<title>[\s\S]*?<\/title>/,
        `<title>${escape(entry.title)}</title>`
      )
      .replace(
        /<meta name="description"[^>]*>/,
        `<meta name="description" content="${escape(entry.description)}" />`
      )
      .replace('<html lang="en">', `<html lang="${entry.language ?? "en"}">`);
    const robots =
      !site.indexingEnabled ||
      site.draftPaths.includes(entry.path) ||
      entry.noindex
        ? "noindex, nofollow"
        : "index, follow";
    const url = canonical(entry.path);
    html = html.replace(
      "</head>",
      `<link rel="canonical" href="${url}" />\n<meta name="robots" content="${robots}" />\n<meta property="og:title" content="${escape(entry.ogTitle ?? entry.title)}" />\n<meta property="og:description" content="${escape(entry.description)}" />\n<meta property="og:url" content="${url}" />\n<meta property="og:type" content="${entry.article ? "article" : "website"}" />\n<meta property="og:site_name" content="Deveendra Murmu" />\n<meta property="og:image" content="${canonical(shareImage(entry.path).src)}" />\n<meta property="og:image:width" content="1200" />\n<meta property="og:image:height" content="630" />\n<meta property="og:image:alt" content="${escape(shareImage(entry.path).alt)}" />\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:site" content="@DeveendraMurmu" />\n<meta name="twitter:image" content="${canonical(shareImage(entry.path).src)}" />\n${articleMeta(entry)}${jsonLd(structuredData(entry.path))}\n</head>`
    );
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${markup}</div>`
    );
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, html);
  }
  for (const entry of pages) {
    const markup = renderPath(entry.path, entry.module);
    await emit(entry, markup, path.join(out, entry.path, "index.html"));
  }
  // A real 404 document exists; the hosting layer must route invalid paths with status 404.
  await emit(
    {
      path: "/404/",
      title: "Page not found — Deveendra Murmu",
      description: "The requested page could not be found.",
      noindex: true,
    },
    renderPath("/404"),
    path.join(out, "404.html")
  );
  // JS compatibility fallback only. _redirects is the HTTP-301 candidate, not a verified host rule.
  for (const entry of manifest.filter(e => e.legacyPath != "/about")) {
    const target = entry.path;
    const markup = `<main><h1>LifeeCode has moved</h1><p><a href="${target}">Continue to this LifeeCode page</a></p></main><script>location.replace(${JSON.stringify(target)}+location.search+location.hash)</script>`;
    await emit(
      { ...entry, noindex: true },
      markup,
      path.join(out, entry.legacyPath, "index.html")
    );
  }
  const urls = pages
    .filter(e => !site.draftPaths.includes(e.path) && !e.noindex)
    .map(e => `  <url><loc>${canonical(e.path)}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ""}</url>`)
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(out, "sitemap.xml"), sitemap);
  await writeFile(path.join(root, "client/public/sitemap.xml"), sitemap);
  const robots = site.indexingEnabled
    ? `User-agent: *\nAllow: /\n${site.draftPaths.map(p => `Disallow: ${p}\n`).join("")}Sitemap: ${canonical("/sitemap.xml")}\n`
    : "User-agent: *\nDisallow: /\n";
  await writeFile(path.join(out, "robots.txt"), robots);
  await writeFile(path.join(root, "client/public/robots.txt"), robots);
  console.log(
    `Prepared ${pages.length} static content routes, 15 legacy fallbacks, 404 document and ${pages.filter(e => !site.draftPaths.includes(e.path) && !e.noindex).length} sitemap URLs (${essays.length} essay(s), ${essays.filter(e => e.status === "published").length} published). Indexing enabled: ${site.indexingEnabled}`
  );
} finally {
  await vite.close();
}
