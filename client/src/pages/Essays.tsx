import SiteLayout from "@/components/SiteLayout";
import { essayPath, essays, formatDate, hasPublishedEssays, readingMinutes } from "@/content/essays";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Essays() {
  usePageMeta(
    "Essays — Deveendra Murmu",
    "Essays by Deveendra Murmu on technology, human behavior, and the choices that shape our lives.",
    { noindex: !hasPublishedEssays },
  );

  return (
    <SiteLayout>
      <section aria-labelledby="essays-title" className="site-frame pb-8 pt-14 lg:pt-20">
        <p className="section-kicker">Writing</p>
        <h1 id="essays-title" className="page-title mt-5">Essays</h1>
        <p className="mt-6 max-w-[36rem] text-[1.2rem] leading-[1.6] text-[#3D4139]">
          On technology, human behavior, and the choices that shape our lives.
        </p>
      </section>

      <section aria-label="All essays" className="site-frame pb-20 lg:pb-24">
        <div className="ruled-list mt-8">
          {essays.map((essay) => (
            <article key={essay.slug} className="flex flex-wrap gap-x-12 gap-y-3 py-8">
              <div className="flex-[0_0_12rem] pt-1.5 text-[0.95rem] leading-[1.5] text-[#5B5F57]">
                <time dateTime={essay.datePublished}>{formatDate(essay.datePublished)}</time>
                <p>{readingMinutes(essay)} min read</p>
              </div>
              <div className="min-w-0 flex-[999_1_28rem]">
                <p className="folio-label text-[#7E334E]">{essay.category}</p>
                <h2 className="row-heading mt-2 max-w-[44rem]">
                  <a href={essayPath(essay)} className="hover:underline hover:decoration-[#7E334E]/50 hover:underline-offset-[6px]">{essay.title}</a>
                </h2>
                <p className="mt-3 max-w-[40rem] text-[1.1rem] leading-[1.6] text-[#3D4139]">{essay.excerpt}</p>
                <a className="text-link mt-2" href={essayPath(essay)} aria-label={`Read the essay: ${essay.title}`}>Read the essay</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
