import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found — Deveendra Murmu", "The requested page could not be found.", { noindex: true });

  return (
    <SiteLayout>
      <section className="editorial-grid min-h-[70vh] py-24 lg:py-32">
        <div className="container grid gap-10 lg:grid-cols-[0.45fr_1.55fr]">
          <p className="editorial-quote italic text-[#7e511b]">404</p>
          <div className="max-w-3xl">
            <p className="section-kicker">Page not found</p>
            <h1 className="page-title mt-6">This path does not lead to a published page.</h1>
            <p className="reading-text mt-7 max-w-xl">Return to the author homepage, explore the books, or visit LifeeCode.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/" className="primary-button">Author home <ArrowRight size={16} /></a>
              <a href="/books/" className="secondary-button">Explore the books</a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
