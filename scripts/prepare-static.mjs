import { createServer } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
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
const pages = [...authors, ...manifest];
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
  return [];
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
      `<link rel="canonical" href="${url}" />\n<meta name="robots" content="${robots}" />\n<meta property="og:title" content="${escape(entry.title)}" />\n<meta property="og:description" content="${escape(entry.description)}" />\n<meta property="og:url" content="${url}" />\n<meta property="og:type" content="${entry.article ? "article" : "website"}" />\n<meta property="og:site_name" content="Deveendra Murmu" />\n<meta property="og:image" content="${canonical(shareImage(entry.path).src)}" />\n<meta property="og:image:width" content="1200" />\n<meta property="og:image:height" content="630" />\n<meta property="og:image:alt" content="${escape(shareImage(entry.path).alt)}" />\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:site" content="@DeveendraMurmu" />\n<meta name="twitter:image" content="${canonical(shareImage(entry.path).src)}" />\n${jsonLd(structuredData(entry.path))}\n</head>`
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
    .filter(e => !site.draftPaths.includes(e.path))
    .map(e => `  <url><loc>${canonical(e.path)}</loc></url>`)
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
    `Prepared ${pages.length} static content routes, 15 legacy fallbacks, 404 document and ${pages.length - site.draftPaths.length} sitemap URLs. Indexing enabled: ${site.indexingEnabled}`
  );
} finally {
  await vite.close();
}
