import express from "express";
import { readFile } from "fs/promises";
import path from "path";
import publication from "../client/src/content/lifeecode/manifest.json";
import site from "../client/src/site.config.json";

const authorPaths = [
  "/",
  "/books/",
  "/books/what-should-remain-mine/",
  "/about/",
  "/newsletter/",
  "/privacy/",
  "/lifeecode/",
];
const contentPaths = new Set([
  ...authorPaths,
  ...publication.map(page => page.path),
]);
const legacyPaths = new Map(
  publication
    .filter(page => page.legacyPath !== "/about")
    .map(page => [page.legacyPath, page.path])
);

export function registerLaunchDelivery(
  app: express.Express,
  staticPath: string
) {
  app.disable("x-powered-by");
  const isProductionDomain = (req: express.Request) => {
    const forwarded = String(req.headers["x-forwarded-host"] ?? "")
      .split(",")[0]
      .trim()
      .toLowerCase();
    const host = (forwarded || req.hostname).split(":")[0];
    return (
      site.indexingEnabled &&
      [site.productionHost, `www.${site.productionHost}`].includes(host)
    );
  };
  app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    if (!isProductionDomain(req))
      res.setHeader("X-Robots-Tag", "noindex, nofollow");
    next();
  });
  app.get("/robots.txt", (req, res) => {
    res
      .type("text/plain")
      .send(
        isProductionDomain(req)
          ? `User-agent: *\nAllow: /\nDisallow: /newsletter/\nDisallow: /privacy/\nSitemap: https://${site.productionHost}/sitemap.xml\n`
          : "User-agent: *\nDisallow: /\n"
      );
  });
  app.get("*", async (req, res, next) => {
    const trimmed = req.path === "/" ? "/" : req.path.replace(/\/$/, "");
    const query = req.originalUrl.includes("?")
      ? req.originalUrl.slice(req.originalUrl.indexOf("?"))
      : "";
    const legacy = legacyPaths.get(trimmed);
    if (legacy) return res.redirect(301, legacy + query);
    const canonical = trimmed === "/" ? "/" : trimmed + "/";
    if (!contentPaths.has(canonical)) return next();
    if (req.path !== canonical) return res.redirect(301, canonical + query);
    try {
      let html = await readFile(
        path.join(staticPath, canonical, "index.html"),
        "utf8"
      );
      if (!isProductionDomain(req))
        html = html.replace(
          /<meta name="robots" content="[^"]*"\s*\/?\s*>/,
          '<meta name="robots" content="noindex, nofollow" />'
        );
      if (site.draftPaths.includes(canonical))
        res.setHeader("X-Robots-Tag", "noindex, nofollow");
      res.setHeader("Cache-Control", "no-cache");
      res.type("html").send(html);
    } catch (error) {
      next(error);
    }
  });
  app.use(express.static(staticPath, { index: false, redirect: false }));
  app.use(async (_req, res, next) => {
    try {
      const html = await readFile(path.join(staticPath, "404.html"), "utf8");
      res.setHeader("X-Robots-Tag", "noindex, nofollow");
      res.status(404).type("html").send(html);
    } catch (error) {
      next(error);
    }
  });
}
