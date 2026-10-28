import { ArrowRight } from "lucide-react";
import BookMockCover from "@/components/BookMockCover";
import SectionCTA from "@/components/SectionCTA";
import SiteLayout from "@/components/SiteLayout";
import { usePageMeta } from "@/hooks/usePageMeta";

const laterBooks = [
  {
    number: "02",
    title: "Why We Don't Do What We Know",
    subtitle: "The Hidden Loop Between Knowing, Doing, and Becoming",
    paragraphs: [
      "We often know what we should do. We may even genuinely want to do it. Yet when the moment arrives, something else happens.",
      "This book explores the forces competing with knowledge and intention—including emotion, habit, environment, reward, competing desires, and the meanings we attach to our goals.",
      "Rather than treating every failure to act as a character flaw, it asks what happens between intention and action, and how our actions help shape who we become.",
    ],
  },
  {
    number: "03",
    title: "Whose Life Is This?",
    subtitle: "How Other People's Expectations Shape Who We Are, What We Want, and the Choices We Make",
    paragraphs: [
      "Other people influence us long before we begin making independent decisions. Their expectations can become part of our ambitions, values, identities, and ideas about success.",
      "But the answer is not simply to ignore everyone and follow an untouched inner self.",
      "This book examines how social influence works, why inherited values are not necessarily false, and how we can become more discerning about which voices deserve influence in the lives we build.",
    ],
  },
];

export default function Books() {
  usePageMeta(
    "Books — Deveendra Murmu",
    "Three independent nonfiction books about AI and judgment, the gap between knowing and doing, and the influence of other people's expectations.",
  );

  return (
    <SiteLayout>
      <section className="editorial-grid border-b border-[#302b31]/10 py-22 sm:py-28 lg:py-32">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-kicker">Books by Deveendra Murmu</p>
            <h1 className="page-title literary-title mt-6">Books</h1>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="editorial-quote italic text-[#7e334e]">Different questions. A shared curiosity.</p>
            <p className="reading-text mt-4">
              Each book stands on its own. Together, they explore how we can better understand the influences around us and participate more deliberately in the lives we build.
            </p>
          </div>
        </div>
      </section>

      <section className="theme-dark bg-[#302b31] py-24 text-[#fbfbfa] lg:py-30" aria-labelledby="book-one-title">
        <div className="container grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <BookMockCover />
          <article className="max-w-3xl">
            <p className="section-kicker section-kicker-light">Featured · Book one</p>
            <span className="mt-5 inline-block rounded-[2px] border border-[#dbb777]/40 bg-[#dbb777]/10 px-3 py-1 text-[0.67rem] font-bold uppercase tracking-[0.18em] text-[#f0ce8a]">Forthcoming</span>
            <h2 id="book-one-title" className="section-heading mt-6">What Should Remain Mine?</h2>
            <p className="editorial-quote mt-5 max-w-2xl italic text-[#e0cfb8]">How to Delegate, Collaborate, and Think for Yourself in the Age of AI</p>
            <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed text-[#e2d5c3]">
              <p className="reading-text">As AI becomes increasingly capable, the question is no longer simply what it can do for us. It is what role we want to give it.</p>
              <p className="reading-text">This book introduces three ways of approaching AI—Delegate, Collaborate, and Retain—to help readers decide when to hand over a task, when to think alongside technology, and when the human work itself matters.</p>
              <p className="reading-text">It is neither a rejection of AI nor an invitation to use it for everything. It is an exploration of how to use powerful tools without losing sight of our own judgment, capabilities, relationships, and responsibility.</p>
            </div>
            <a href="/books/what-should-remain-mine/" className="mt-9 inline-flex items-center gap-2 border-b border-[#dbb777] pb-1.5 text-sm font-bold uppercase tracking-[0.15em] text-[#f0ce8a] hover:text-white">
              Learn More <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </section>

      <section className="bg-[#fbfbfa] py-24 lg:py-30">
        <div className="container">
          <div className="border-b border-[#302b31]/15 pb-8">
            <p className="section-kicker">Two more questions</p>
            <h2 className="section-heading mt-4 max-w-3xl">Independent works in a larger conversation.</h2>
          </div>

          <div className="ruled-list mt-12">
            {laterBooks.map((book, index) => (
              <article key={book.number} className={`grid gap-8 py-14 lg:grid-cols-[0.87fr_1.13fr] lg:gap-20 ${index === 1 ? "lg:ml-20" : ""}`}>
                <div>
                  <span className="folio-label text-[#7e511b]">{book.number} / forthcoming</span>
                  <h3 className="row-heading row-heading-large mt-6 max-w-lg">{book.title}</h3>
                  <p className="editorial-quote mt-6 max-w-md italic text-[#7e334e]">{book.subtitle}</p>
                </div>
                <div className="max-w-xl space-y-5 text-lg leading-relaxed text-[#665b53] lg:pt-16">
                  {book.paragraphs.map((paragraph) => <p key={paragraph} className="reading-text">{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#302b31]/10 bg-[#f1f0ed] py-22 lg:py-28">
        <div className="container grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <p className="section-kicker">The larger conversation</p>
          <div>
            <h2 className="section-heading ">Influence, judgment, and the choices through which we become who we are.</h2>
            <p className="reading-text mt-7">
              Technology, behavior, and other people's expectations may seem like different subjects. Yet each raises a question about influence, judgment, and the choices through which we become who we are. These books are independent works, connected by a continuing investigation into the forces shaping human life.
            </p>
          </div>
        </div>
      </section>

      <SectionCTA
        title="Follow the books as they take shape."
        body="Receive occasional publication updates, behind-the-book notes, and essays that continue the questions explored here."
      />
    </SiteLayout>
  );
}
