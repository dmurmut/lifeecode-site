import { Suspense, useEffect } from "react";
import { useLocation } from "wouter";
import LifeeCodeLayout from "@/components/LifeeCodeLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import manifest from "@/content/lifeecode/manifest.json";
import { publicationPages } from "@/content/lifeecode/registry";

export default function PublicationPage() {
  const [location] = useLocation();
  const path = location.replace(/\/$/, "") + "/";
  const page = manifest.find(item => item.path === path);
  usePageMeta(
    page?.title ?? "Page not found | LifeeCode",
    page?.description ?? "This LifeeCode page is not available.",
    { canonicalPath: page?.path, noindex: !page, article: page?.article }
  );
  useEffect(() => {
    document.documentElement.lang = page?.language ?? "en";
    return () => {
      document.documentElement.lang = "en";
    };
  }, [page?.language]);
  const Content = page
    ? publicationPages[page.path as keyof typeof publicationPages]
    : undefined;
  return (
    <LifeeCodeLayout>
      {Content ? (
        <Suspense
          fallback={
            <div className="lc-frame py-20" role="status">
              Loading LifeeCode…
            </div>
          }
        >
          <Content />
        </Suspense>
      ) : (
        <section className="lc-frame py-20">
          <p className="lc-eyebrow">404 · Page not found</p>
          <h1 className="lc-section-heading mt-5">
            This signal is not in the archive.
          </h1>
          <p className="lc-lead-copy mt-6">
            The address may be incorrect, or this written brief may not exist.
            Audio-only episodes are not turned into invented articles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/lifeecode/briefs/" className="lc-button-primary">
              Browse weekly briefs
            </a>
            <a href="/lifeecode/" className="lc-button-quiet">
              LifeeCode home
            </a>
          </div>
        </section>
      )}
    </LifeeCodeLayout>
  );
}

export function LegacyPublicationRoute() {
  const [location] = useLocation();
  const legacy = location.replace(/\/$/, "");
  const page = manifest.find(
    item => item.legacyPath === legacy && item.legacyPath !== "/about"
  );
  useEffect(() => {
    if (page)
      window.location.replace(
        page.path + window.location.search + window.location.hash
      );
  }, [page]);
  if (!page) return <PublicationPage />;
  return (
    <LifeeCodeLayout>
      <section className="lc-frame py-20" role="status">
        <p>LifeeCode has a new address.</p>
        <a className="lc-text-link mt-4" href={page.path}>
          Continue to this page
        </a>
      </section>
    </LifeeCodeLayout>
  );
}
