import { createServer } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
const root = path.resolve(import.meta.dirname, "..");
const site = JSON.parse(
  await readFile(path.join(root, "client/src/site.config.json"), "utf8")
);
const manifest = JSON.parse(
  await readFile(
    path.join(root, "client/src/content/lifeecode/manifest.json"),
    "utf8"
  )
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
const redirectRules = manifest
  .filter(e => e.legacyPath != "/about")
  .flatMap(e => [
    `${e.legacyPath} ${e.path} 301`,
    `${e.legacyPath}/ ${e.path} 301`,
  ]);
await writeFile(
  path.join(root, "client/public/_redirects"),
  "# Host-specific redirect candidate; verify production host support before launch.\n# /about is intentionally reserved for the author biography.\n" +
    redirectRules.join("\n") +
    "\n"
);
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
const vite = await createServer({
  root: path.join(root, "client"),
  configFile: path.join(root, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { renderPath } = await vite.ssrLoadModule("/src/entry-prerender.tsx");
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
      `<link rel="canonical" href="${url}" />\n<meta name="robots" content="${robots}" />\n<meta property="og:title" content="${escape(entry.title)}" />\n<meta property="og:description" content="${escape(entry.description)}" />\n<meta property="og:url" content="${url}" />\n<meta property="og:type" content="${entry.article ? "article" : "website"}" />\n<meta name="twitter:card" content="summary" />\n</head>`
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
    ? `User-agent: *\nAllow: /\nDisallow: /newsletter/\nDisallow: /privacy/\nSitemap: ${canonical("/sitemap.xml")}\n`
    : "User-agent: *\nDisallow: /\n";
  await writeFile(path.join(out, "robots.txt"), robots);
  await writeFile(path.join(root, "client/public/robots.txt"), robots);
  console.log(
    `Prepared ${pages.length} static content routes, 15 legacy fallbacks, 404 document and ${pages.length - site.draftPaths.length} sitemap URLs. Indexing enabled: ${site.indexingEnabled}`
  );
} finally {
  await vite.close();
}
