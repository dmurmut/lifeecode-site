import { useEffect } from "react";
import siteConfig from "@/site.config.json";

type PageMetaOptions = {
  canonicalPath?: string;
  noindex?: boolean;
  article?: boolean;
};
const productionHost = siteConfig.productionHost;

export function usePageMeta(
  title: string,
  description: string,
  options: PageMetaOptions = {}
) {
  const { canonicalPath, noindex = false, article = false } = options;
  useEffect(() => {
    document.title = title;
    const setMeta = (key: string, value: string, property = false) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.content = value;
    };
    const pathname =
      canonicalPath ??
      (window.location.pathname === "/"
        ? "/"
        : window.location.pathname.replace(/\/$/, "") + "/");
    const canonical = `https://${productionHost}${pathname}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical, true);
    setMeta("og:type", article ? "article" : "website", true);
    setMeta("twitter:card", "summary");
    // Preview domains and unfinished privacy/form pages must not be indexed.
    const staging = ![productionHost, `www.${productionHost}`].includes(
      window.location.hostname
    );
    const draft = ["/privacy/", "/newsletter/", "/404/"].includes(pathname);
    setMeta(
      "robots",
      !siteConfig.indexingEnabled || staging || noindex || draft
        ? "noindex, nofollow"
        : "index, follow"
    );
  }, [title, description, canonicalPath, noindex, article]);
}
