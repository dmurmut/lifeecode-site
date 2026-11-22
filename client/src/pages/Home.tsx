import AuthorPortrait from "@/components/AuthorPortrait";
import NewsletterForm from "@/components/NewsletterForm";
import BookMockCover from "@/components/BookMockCover";
import SiteLayout from "@/components/SiteLayout";
import { usePageMeta } from "@/hooks/usePageMeta";

const themes = [
  ["01", "Technology", "What should we delegate, and what should remain ours?"],
  ["02", "Behaviour", "Why does knowing so often fail to become doing?"],
  ["03", "Influence", "How do other people’s expectations become our own?"],
];

const booksInProgress = [
  {
    number: "02",
    title: "Why We Don’t Do What We Know",
    question: "Why can we know what matters, genuinely intend to do it, and still behave differently?",
  },
  {
    number: "03",
    title: "Whose Life Is This?",
    question: "How do other people’s expectations become part of what we want—and which voices deserve influence?",
  },
];

export default function Home() {
  usePageMeta(
    "Deveendra Murmu — Nonfiction Author",
    "Deveendra Murmu writes nonfiction about technology, human behavior, judgment, social influence, and the choices through which we build our lives.",
  );

  return (
    <SiteLayout>
      <section aria-labelledby="home-title">
        <div className="site-frame flex flex-wrap items-end gap-x-24 gap-y-14 pb-20 pt-16 lg:pb-24 lg:pt-22">
          <div className="min-w-0 flex-[999_1_34rem]">
            <p className="section-kicker">Nonfiction author</p>
            <h1 id="home-title" className="page-title home-title mt-5 max-w-[42rem]">The forces that shape us. The lives we build.</h1>
            <p className="mt-7 max-w-[35rem] text-[1.3rem] leading-[1.6] text-[#3D4139]">
              Books and essays exploring how technology, behaviour, other people, and our own assumptions shape how we think, choose, act, and become.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
              <a className="primary-button" href="/books/">Explore the books</a>
              <a className="text-link" href="/newsletter/">Join the newsletter</a>
            </div>
          </div>

          <aside className="min-w-0 max-w-[22.5rem] flex-[1_1_18rem] border-l border-[#D8D2C6] pl-8" aria-labelledby="themes-title">
            <h2 id="themes-title" className="folio-label mb-1.5 text-[#5B5F57]">What I write about</h2>
            {themes.map(([number, title, text], index) => (
              <div key={number} className={`py-4.5 ${index < themes.length - 1 ? "border-b border-[#D8D2C6]" : "pb-0"}`}>
                <p className="font-serif text-[1.3rem] font-medium">
                  <span className="mr-2.5 text-[#7E334E]">{number}</span>
                  {title}
                </p>
                <p className="mt-1.5 text-[1rem] leading-[1.5] text-[#3D4139]">{text}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <div className="site-frame"><hr className="border-0 border-t border-[#D8D2C6]" /></div>

      <section aria-labelledby="featured-book-title">
        <div className="site-frame flex flex-wrap items-center gap-x-22 gap-y-12 py-20 lg:py-24">
          <div className="w-full max-w-[20rem] flex-[0_1_20rem]">
            <BookMockCover />
          </div>
          <div className="min-w-0 flex-[999_1_28rem]">
            <p className="section-kicker">Book one · Forthcoming 2 February 2027</p>
            <h2 id="featured-book-title" className="section-heading mt-4">What Should Remain Mine?</h2>
            <p className="mt-2.5 font-serif text-[1.4rem] leading-[1.4] text-[#5B5F57]">How to Delegate, Collaborate, and Think for Yourself in the Age of AI</p>
            <div className="mt-7 space-y-4">
              <p className="reading-text">AI can increasingly write, analyze, advise, and perform tasks for us. But deciding what to hand over is not simply a question of what technology can do.</p>
              <p className="reading-text">What should we delegate? When should we collaborate? And what should remain ours—not because machines cannot do it, but because doing it matters to who we become?</p>
            </div>
            <a className="text-link mt-6" href="/books/what-should-remain-mine/">Read about the book</a>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="in-progress-title">
        <div className="site-frame py-18 lg:py-20">
          <h2 id="in-progress-title" className="subsection-heading">Books in progress</h2>
          <div className="ruled-list mt-7">
            {booksInProgress.map((book) => (
              <article key={book.number} className="flex flex-wrap gap-x-10 gap-y-2 py-6.5">
                <span className="flex-[0_0_3rem] font-serif text-[1.25rem] text-[#7E334E]">{book.number}</span>
                <div className="min-w-0 flex-[999_1_26rem]">
                  <h3 className="row-heading">{book.title}</h3>
                  <p className="mt-1.5 text-[1.1rem] leading-[1.55] text-[#3D4139]">{book.question}</p>
                </div>
                <span className="pt-1.5 text-[0.95rem] text-[#5B5F57]">In progress</span>
              </article>
            ))}
          </div>
          <a className="text-link mt-6" href="/books/">All books</a>
        </div>
      </section>

      <section aria-labelledby="about-title">
        <div className="site-frame flex flex-wrap items-center gap-x-18 gap-y-10 py-20 lg:py-24">
          <AuthorPortrait className="w-[15rem] flex-none" />
          <div className="min-w-0 flex-[999_1_28rem]">
            <p className="section-kicker">About the author</p>
            <h2 id="about-title" className="subsection-heading mt-3.5">Deveendra Murmu</h2>
            <p className="reading-text mt-4">
              An engineer by training, Deveendra has spent more than three decades in information technology. He writes about familiar human contradictions—why we know what matters but fail to act, what should remain ours as technology does more of our thinking, and how other people’s expectations shape what we want.
            </p>
            <a className="text-link mt-5" href="/about/">More about Deveendra</a>
          </div>
        </div>
      </section>

      <div className="site-frame"><hr className="border-0 border-t border-[#D8D2C6]" /></div>

      <section aria-labelledby="newsletter-title">
        <div className="site-frame flex flex-wrap items-start gap-x-22 gap-y-10 py-20 lg:py-24">
          <div className="min-w-0 flex-[1_1_26rem]">
            <h2 id="newsletter-title" className="subsection-heading">An occasional letter</h2>
            <p className="reading-text mt-4 max-w-[30rem] text-[#3D4139]">
              Essays on technology, habits and the choices we make, and news of the books as they come. No fixed schedule—only when there is something worth your time.
            </p>
          </div>
          <div className="min-w-0 flex-[1_1_26rem]">
            <NewsletterForm variant="band" />
            <p className="mt-3 text-[0.9rem] leading-[1.5] text-[#5B5F57]">
              You’ll confirm by email. Unsubscribe any time. See the <a href="/privacy/" className="underline underline-offset-2 hover:text-[#252923]">privacy notice</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="lifeecode-title">
        <div className="site-frame flex flex-wrap items-center justify-between gap-x-16 gap-y-6 py-12">
          <div className="min-w-0 flex-[1_1_22rem]">
            <p className="folio-label text-[#0F6E73]">Also from Deveendra</p>
            <h2 id="lifeecode-title" className="small-heading mt-2 text-[1.6rem]">LifeeCode</h2>
          </div>
          <div className="min-w-0 flex-[2_1_30rem]">
            <p className="text-[1.1rem] leading-[1.6] text-[#3D4139]">Health technology explained with an emphasis on evidence, privacy, and practical understanding—weekly briefs and podcasts in English and Hindi.</p>
            <a href="/lifeecode/" className="mt-2 inline-flex items-center py-2 text-[1rem] font-semibold text-[#0F6E73] underline decoration-[#0F6E73]/40 underline-offset-[5px] hover:decoration-[#0F6E73]">Explore LifeeCode</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
