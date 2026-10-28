import { ArrowRight } from "lucide-react";
import BookMockCover from "@/components/BookMockCover";
import SectionCTA from "@/components/SectionCTA";
import SiteLayout from "@/components/SiteLayout";
import { usePageMeta } from "@/hooks/usePageMeta";

const modes = [
  {
    title: "Delegate",
    text: "Let AI handle work that can appropriately be handed over.",
    number: "01",
  },
  {
    title: "Collaborate",
    text: "Use AI as a thinking partner while remaining engaged in the work and its judgment.",
    number: "02",
  },
  {
    title: "Retain",
    text: "Keep responsibility or participation where handing it over would compromise something important.",
    number: "03",
  },
];

export default function BookOne() {
  usePageMeta(
    "What Should Remain Mine? — Deveendra Murmu",
    "A forthcoming book about how to delegate, collaborate, and think for yourself in the age of AI.",
  );

  return (
    <SiteLayout>
      <section className="editorial-grid border-b border-[#302b31]/10 py-18 lg:py-26">
        <div className="container grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="lg:-translate-y-8"><BookMockCover compact /></div>
          <div className="max-w-3xl lg:translate-y-10">
            <div className="flex flex-wrap items-center gap-3">
              <p className="section-kicker">A forthcoming book</p>
              <span className="rounded-[2px] border border-[#302b31]/20 bg-[#fbfbfa] px-3 py-1 text-[0.63rem] font-bold uppercase tracking-[0.17em] text-[#665b53]">Forthcoming</span>
            </div>
            <h1 className="page-title literary-title mt-7">What Should Remain Mine?</h1>
            <p className="editorial-quote mt-6 max-w-2xl italic text-[#7e334e]">How to Delegate, Collaborate, and Think for Yourself in the Age of AI</p>
            <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-[#51484b]">
              <p className="reading-text">AI can increasingly do things that once required our own thinking. But the ability to delegate something does not automatically mean we should.</p>
              <p className="reading-text">What should we hand over? When should we collaborate? And what should we retain because the human work itself matters?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="theme-dark bg-[#302b31] py-24 text-[#fbfbfa] lg:py-30" aria-labelledby="framework-title">
        <div className="container">
          <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="section-kicker section-kicker-light">The central framework</p>
              <h2 id="framework-title" className="section-heading mt-5">Delegate. Collaborate. Retain.</h2>
            </div>
            <p className="reading-text max-w-xl lg:justify-self-end">
              These are not rigid rules. The appropriate mode depends on the task, the context, what is at stake, and what participation means to the person doing the work.
            </p>
          </div>

          <div className="mt-9 border-t border-white/25">
            {modes.map(({ title, text, number }, index) => (
              <article key={title} className={`grid gap-3 border-b border-white/25 py-9 lg:grid-cols-[7rem_minmax(0,1fr)_minmax(12rem,0.5fr)] lg:items-baseline lg:gap-8 ${index === 1 ? "lg:ml-20" : index === 2 ? "lg:ml-10" : ""}`}>
                <span className="folio-label text-[#f0ce8a]">{number} / 03</span>
                <h3 className="row-heading ">{title}<span className="text-[#f0ce8a]">.</span></h3>
                <p className="reading-text max-w-sm">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfbfa] py-24 lg:py-30">
        <div className="container grid gap-16 lg:grid-cols-2">
          <article>
            <p className="section-kicker">Who the book is for</p>
            <h2 className="section-heading mt-5 max-w-xl">Neither total adoption nor total rejection.</h2>
            <p className="reading-text mt-7 max-w-xl">
              For readers who want to use AI intelligently without treating either total adoption or total rejection as the answer.
            </p>
          </article>
          <article className="border-l border-[#302b31]/15 pl-7 sm:pl-12">
            <p className="section-kicker">About the author</p>
            <h2 className="section-heading mt-5">Deveendra Murmu</h2>
            <p className="reading-text mt-6 max-w-xl">
              Deveendra Murmu is a nonfiction author with an engineering background and more than three decades of experience in information technology. His writing explores technology, human behavior, judgment, social influence, and everyday life.
            </p>
            <a href="/about/" className="mt-8 inline-flex items-center gap-2 border-b border-[#7e334e] pb-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#7e334e]">
              More About Deveendra <ArrowRight size={15} />
            </a>
          </article>
        </div>
      </section>

      <SectionCTA
        eyebrow="Publication updates"
        title="Follow the book's progress."
        body="Subscribe for occasional updates about publication, new essays, and the questions behind the book."
      />
    </SiteLayout>
  );
}
