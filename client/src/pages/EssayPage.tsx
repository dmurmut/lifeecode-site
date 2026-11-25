import NewsletterForm from "@/components/NewsletterForm";
import SiteLayout from "@/components/SiteLayout";
import { essayBySlug, formatDate, readingMinutes } from "@/content/essays";
import { usePageMeta } from "@/hooks/usePageMeta";
import NotFound from "./NotFound";

const BOOK_TITLE = "What Should Remain Mine?";
const BOOK_PATH = "/books/what-should-remain-mine/";

export default function EssayPage({ params }: { params: { slug: string } }) {
  const essay = essayBySlug[params.slug];
  if (!essay) return <NotFound />;
  return <EssayArticle slug={params.slug} />;
}

function EssayArticle({ slug }: { slug: string }) {
  const essay = essayBySlug[slug];
  usePageMeta(essay.seoTitle, essay.metaDescription, {
    canonicalPath: `/essays/${essay.slug}/`,
    article: true,
    ogTitle: essay.title,
    noindex: essay.status !== "published",
  });

  return (
    <SiteLayout>
      <article aria-labelledby="essay-title" className="site-frame pb-16 pt-14 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-[42rem]">
          <header>
            <p className="section-kicker">
              <a href="/essays/" className="hover:underline hover:underline-offset-4">Essays</a>
              <span aria-hidden="true" className="mx-2.5 text-[#A8A193]">·</span>
              <span>{essay.category}</span>
            </p>
            <h1 id="essay-title" className="essay-title mt-5">{essay.title}</h1>
            <p className="mt-6 flex flex-wrap items-baseline gap-y-1 text-[1rem] leading-[1.6] text-[#5B5F57]">
              <span className="whitespace-nowrap">By <a href="/about/" className="font-semibold text-[#252923] hover:underline hover:underline-offset-4">{essay.author}</a></span>
              <span aria-hidden="true" className="mx-2.5">·</span>
              <time className="whitespace-nowrap" dateTime={essay.datePublished}>{formatDate(essay.datePublished)}</time>
              <span aria-hidden="true" className="mx-2.5">·</span>
              <span className="whitespace-nowrap">{readingMinutes(essay)} min read</span>
            </p>
          </header>

          <hr className="mt-9 border-0 border-t border-[#D8D2C6]" />

          <div className="essay-body mt-10">
            {essay.body.map((block, i) =>
              block.type === "h2" ? (
                <h2 key={i}>{block.text}</h2>
              ) : (
                <p key={i}>{block.text}</p>
              )
            )}
          </div>

          <aside aria-label="About the author" className="mt-16">
            <div className="border-l-2 border-[#7E334E] pl-5">
              <p className="text-[1.05rem] leading-[1.65] text-[#3D4139]">
                Deveendra Murmu writes about technology, human behavior, and the choices that shape our lives. His forthcoming book,{" "}
                <a href={BOOK_PATH} className="font-semibold text-[#7E334E] underline decoration-[#7E334E]/40 underline-offset-[4px] hover:decoration-[#7E334E]">{BOOK_TITLE}</a>, explores how to delegate, collaborate, and think independently in the age of AI.
              </p>
            </div>
          </aside>

          <section aria-labelledby="continue-title" className="mt-14 border-t border-[#D8D2C6] pt-10">
            <h2 id="continue-title" className="small-heading">Continue the conversation</h2>
            <p className="mt-3 max-w-[38rem] text-[1.05rem] leading-[1.65] text-[#3D4139]">
              If you enjoy thoughtful essays on technology, human behavior, and the choices that shape our lives, you are welcome to subscribe for future writing and book updates.
            </p>
            <div className="mt-6">
              <NewsletterForm variant="band" />
              <p className="mt-3 text-[0.9rem] leading-[1.5] text-[#5B5F57]">
                You’ll confirm by email. Unsubscribe any time. See the <a href="/privacy/" className="underline underline-offset-2 hover:text-[#252923]">privacy notice</a>.
              </p>
            </div>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
