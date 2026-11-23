import NewsletterForm from "@/components/NewsletterForm";
import SiteLayout from "@/components/SiteLayout";
import { usePageMeta } from "@/hooks/usePageMeta";

const expectations = [
  {
    title: "Thoughtful essays",
    text: "Occasional reflections on technology, behavior, judgment, social influence, and modern life.",
    number: "01",
  },
  {
    title: "Behind the books",
    text: "Updates on new books, publication progress, and the questions that inspire my writing.",
    number: "02",
  },
  {
    title: "A continuing conversation",
    text: "Ideas that invite reflection rather than offering simplistic formulas.",
    number: "03",
  },
];

export default function Newsletter() {
  usePageMeta(
    "Newsletter — Deveendra Murmu",
    "Occasional essays and book updates from nonfiction author Deveendra Murmu.",
  );

  return (
    <SiteLayout>
      <section className="editorial-grid border-b border-[#252923]/10 py-22 lg:py-30">
        <div className="container grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="section-kicker">The author newsletter</p>
            <h1 className="page-title mt-6 max-w-4xl">See more clearly. Choose more deliberately.</h1>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="reading-text">We are shaped by technology, habits, emotions, other people, and assumptions we don't always notice.</p>
            <p className="reading-text mt-5">In my books and essays, I explore these influences and the questions they raise about how we think, choose, act, and become.</p>
            <p className="editorial-quote mt-5 text-[#7E334E]">If these questions interest you, I invite you to join my newsletter.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2EC] py-24 lg:py-30" aria-labelledby="expect-title">
        <div className="container">
          <div className="grid gap-7 border-b border-[#252923]/15 pb-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <h2 id="expect-title" className="section-heading ">What to expect</h2>
            <p className="editorial-quote text-[#7E334E] lg:justify-self-end">Occasional emails. No fixed weekly commitment.</p>
          </div>

          <div className="ruled-list mt-10">
            {expectations.map(({ title, text, number }, index) => (
              <article key={title} className={`grid gap-3 py-9 lg:grid-cols-[6rem_minmax(0,1fr)_minmax(13rem,0.7fr)] lg:items-baseline lg:gap-10`}>
                <span className="folio-label text-[#7E334E]">{number} /</span>
                <h3 className="row-heading ">{title}</h3>
                <p className="reading-text max-w-md">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band py-22 text-[#252923] lg:py-28" aria-labelledby="join-title">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-[0.67rem] font-bold uppercase tracking-[0.21em] text-[#7E334E]">Join the newsletter</p>
            <h2 id="join-title" className="section-heading mt-5">Writing worth opening.</h2>
            <p className="reading-text mt-6 max-w-xl">I won't be sending emails simply to fill your inbox. When I have a worthwhile essay, an interesting question, or meaningful news about a book, I'll share it.</p>
          </div>

          <div className="border-t border-[#D8D2C6] bg-white border border-[#D8D2C6] p-5 sm:p-8 ">
            <NewsletterForm variant="page" />
            <p className="mt-5 text-xs leading-relaxed text-[#5B5F57]">
              You'll get an email asking you to confirm your subscription. Every newsletter includes a one-click unsubscribe link. Your details are handled by Kit, the email service I use, and are never sold or shared. Read the <a href="/privacy/" className="underline underline-offset-2 hover:text-[#252923]">privacy notice</a>.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
