import { ArrowRight, Mail } from "lucide-react";
import BookMockCover from "@/components/BookMockCover";
import SiteLayout from "@/components/SiteLayout";
import { usePageMeta } from "@/hooks/usePageMeta";

const bookList = [
  {
    number: "01",
    title: "What Should Remain Mine?",
    question: "When AI can increasingly think and act for us, what should we hand over—and what deserves to remain ours?",
    featured: true,
  },
  {
    number: "02",
    title: "Why We Don't Do What We Know",
    question: "Why can we know what matters, genuinely intend to do it, and still behave differently?",
    featured: false,
  },
  {
    number: "03",
    title: "Whose Life Is This?",
    question: "How do other people's expectations become part of what we want—and which voices deserve influence?",
    featured: false,
  },
];

export default function Home() {
  usePageMeta(
    "Deveendra Murmu — Nonfiction Author",
    "Deveendra Murmu writes nonfiction about technology, human behavior, judgment, social influence, and the choices through which we build our lives.",
  );

  return (
    <SiteLayout>
      <section className="editorial-grid relative overflow-hidden border-b border-[#302b31]/25">
        <div className="container grid min-h-[730px] items-center gap-16 py-20 lg:grid-cols-[1.55fr_0.45fr] lg:py-28">
          <div className="max-w-4xl">
            <p className="section-kicker">Deveendra Murmu / nonfiction</p>
            <h1 className="page-title home-title mt-8 max-w-[900px] text-[#302b31]">
              The forces that shape us. <em className="block font-normal text-[#7e334e] lg:ml-16">The lives we build.</em>
            </h1>
            <p className="reading-text mt-10 max-w-xl sm:ml-16">
              Books and essays exploring how technology, behavior, other people, and our own assumptions shape how we think, choose, act, and become.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:ml-16 sm:flex-row">
              <a className="primary-button" href="/books/">Explore My Books <ArrowRight size={17} /></a>
              <a className="secondary-button" href="/newsletter/">Join My Newsletter</a>
            </div>
          </div>

          <aside className="relative max-w-sm border-l border-[#302b31]/30 pl-7 sm:pl-10 lg:mt-36 lg:justify-self-end" aria-label="Writing themes">
            <p className="folio-label mb-8 text-[#7e334e]">Marginalia / 01—03</p>
            {[
              ["01", "Technology", "What should we delegate, and what should remain ours?"],
              ["02", "Behavior", "Why does knowing so often fail to become doing?"],
              ["03", "Influence", "How do other people's expectations become our own?"],
            ].map(([number, title, text]) => (
              <div key={number} className="border-t border-[#302b31]/15 py-6 last:border-b">
                <div className="flex gap-5">
                  <span className="font-mono text-sm text-[#7e511b]">{number}</span>
                  <div>
                    <h2 className="small-heading ">{title}</h2>
                    <p className="compact-text mt-1.5 max-w-xs">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="theme-dark bg-[#302b31] text-[#fbfbfa]" aria-labelledby="featured-book-title">
        <div className="container grid gap-16 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-32">
          <BookMockCover />
          <div className="max-w-3xl">
            <p className="section-kicker section-kicker-light">Featured book</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-[2px] border border-[#dbb777]/40 bg-[#dbb777]/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f0ce8a]">Forthcoming</span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-[#c8b6a2]">Book one</span>
            </div>
            <h2 id="featured-book-title" className="section-heading mt-6">What Should Remain Mine?</h2>
            <p className="editorial-quote mt-5 max-w-2xl italic text-[#e0cfb8]">How to Delegate, Collaborate, and Think for Yourself in the Age of AI</p>
            <div className="mt-8 space-y-5 text-[1.04rem] leading-relaxed text-[#e2d5c3]">
              <p className="reading-text">AI can increasingly write, analyze, advise, and perform tasks for us. But deciding what to hand over is not simply a question of what technology can do.</p>
              <p className="reading-text">What should we delegate? When should we collaborate? And what should remain ours—not because machines cannot do it, but because doing it matters to who we become?</p>
              <p className="reading-text"><em>What Should Remain Mine?</em> explores these questions through a practical framework: Delegate, Collaborate, Retain.</p>
            </div>
            <a className="mt-10 inline-flex items-center gap-2 border-b border-[#dbb777] pb-1.5 text-sm font-bold uppercase tracking-[0.15em] text-[#f0ce8a] transition-colors hover:text-white" href="/books/what-should-remain-mine/">
              Explore the Book <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfbfa] py-24 lg:py-32" aria-labelledby="three-books-title">
        <div className="container">
          <div className="grid gap-8 border-b border-[#302b31]/15 pb-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="section-kicker">The books</p>
              <h2 id="three-books-title" className="section-heading mt-5 max-w-3xl">Three books. <em className="font-normal text-[#7e334e]">Three human questions.</em></h2>
            </div>
            <p className="reading-text max-w-xl lg:justify-self-end">My books explore different parts of a larger question: What is shaping the life we are building—and how consciously are we participating in what comes next?</p>
          </div>

          <div className="ruled-list mt-10">
            {bookList.map((book, index) => (
              <article key={book.number} className={`grid gap-4 py-10 lg:grid-cols-[5rem_minmax(0,1fr)_minmax(14rem,0.65fr)] lg:items-start lg:gap-10 ${index === 1 ? "lg:ml-20" : index === 2 ? "lg:ml-8" : ""}`}>
                <span className="folio-label pt-2 text-[#7e511b]">{book.number} /</span>
                <div>
                  <h3 className="row-heading max-w-xl">{book.title}</h3>
                  <p className="folio-label mt-4 text-[#7e334e]">A book in progress</p>
                </div>
                <div className="lg:pt-3">
                  <p className="reading-text">{book.question}</p>
                  {book.featured && (
                    <a href="/books/what-should-remain-mine/" className="folio-label mt-6 inline-flex items-center gap-2 border-b border-[#7e334e] pb-1 text-[#7e334e]">Read about book one <ArrowRight size={15} /></a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#302b31]/10 bg-[#f1f0ed] py-24 lg:py-32" aria-labelledby="about-title">
        <div className="container grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="section-kicker">About the author</p>
            <div className="mt-8 hidden h-px w-full bg-[#302b31]/15 lg:block" />
            <p className="editorial-quote mt-8 max-w-xs italic text-[#7e334e]">“Not to promise complete control, but to help us see more clearly.”</p>
          </div>
          <div>
            <h2 id="about-title" className="section-heading ">A note from Deveendra</h2>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-[#51484b]">
              <p className="reading-text">I write about familiar human contradictions.</p>
              <p className="reading-text">Why do we sometimes know what matters but fail to act on it? When technology can do more of our thinking, what should remain ours? How much of what we want has been shaped by other people's expectations?</p>
              <p className="reading-text">These questions look different on the surface, but they share something underneath: our lives are shaped by forces we do not entirely choose or always notice.</p>
              <p className="reading-text">My writing explores those forces—not to promise complete control, but to help us understand them more clearly and become more deliberate about the lives we build.</p>
            </div>
            <a className="secondary-button mt-9" href="/about/">More About Me <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="theme-plum bg-[#7e334e] py-20 text-[#fbfbfa] lg:py-24" aria-labelledby="newsletter-title">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Mail size={28} strokeWidth={1.5} aria-hidden="true" />
            <h2 id="newsletter-title" className="section-heading mt-6 max-w-2xl">See more clearly. Choose more deliberately.</h2>
            <p className="reading-text mt-6 max-w-xl">Occasional essays on the forces shaping how we think, choose, and live—along with updates about my books.</p>
          </div>
          <div className="border-t-2 border-[#f0ce8a] bg-[#542c3c]/55 p-5 sm:p-7 lg:translate-y-10">
            <form className="grid gap-3 sm:grid-cols-[0.7fr_1.3fr_auto]" aria-label="Newsletter staging form" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="home-first-name">First name</label>
              <input id="home-first-name" type="text" disabled placeholder="First name (optional)" className="min-h-12 rounded-lg border border-white/25 bg-[#fbfbfa] px-4 text-sm text-[#302b31] opacity-90 placeholder:text-[#7e756c]" />
              <label className="sr-only" htmlFor="home-email">Email address</label>
              <input id="home-email" type="email" disabled placeholder="Email address" className="min-h-12 rounded-lg border border-white/25 bg-[#fbfbfa] px-4 text-sm text-[#302b31] opacity-90 placeholder:text-[#7e756c]" />
              <button type="submit" disabled className="min-h-12 rounded-lg bg-[#302b31] px-6 text-xs font-bold uppercase tracking-[0.15em] text-white opacity-75">Subscribe</button>
            </form>
            <p className="mt-4 text-xs leading-relaxed text-[#f1deca]">Staging only—this disabled form does not collect addresses. Review the full <a href="/newsletter/" className="underline underline-offset-2 hover:text-white">newsletter page</a> and <a href="/privacy/" className="underline underline-offset-2 hover:text-white">draft privacy notice</a>.</p>
          </div>
        </div>
      </section>

      <section className="theme-tech-dark lifeecode-band py-20 text-white lg:py-24" aria-labelledby="lifeecode-title">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="flex items-center gap-5">
            <div className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-3xl bg-white p-3 shadow-xl shadow-black/15 sm:h-28 sm:w-28">
              <img src="/media/lifeecode-leaf-circuit-glyph_89bc9786.png" alt="LifeeCode leaf circuit logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#8ce4dc]">Also from Deveendra</p>
              <h2 id="lifeecode-title" className="section-heading mt-2">LifeeCode</h2>
            </div>
          </div>
          <div>
            <p className="reading-text">LifeeCode explores health technology with an emphasis on evidence, privacy, and practical understanding. Discover weekly briefs, podcasts, and content in English and Hindi.</p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a href="/lifeecode/" className="inline-flex items-center gap-2 rounded-[2px] bg-[#14b8a6] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#062e2a] transition-all hover:-translate-y-0.5 hover:bg-[#59d3c7] active:scale-[0.97]">Explore LifeeCode <ArrowRight size={16} /></a>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8ce4dc]">Privacy-first · Evidence-based</span>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
