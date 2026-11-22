import AuthorPortrait from "@/components/AuthorPortrait";
import { ArrowRight } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";
import SiteLayout from "@/components/SiteLayout";
import { usePageMeta } from "@/hooks/usePageMeta";

const questions = [
  "Why can we know exactly what we should do and still not do it?",
  "When technology can increasingly think and act for us, what should we hand over—and what should remain ours?",
  "How much of what we want was shaped by other people's expectations?",
];

const books = [
  ["01", "What Should Remain Mine?", "Technology, delegation, and the human work that still matters."],
  ["02", "Why We Don't Do What We Know", "The gap between knowledge, intention, action, and becoming."],
  ["03", "Whose Life Is This?", "Influence, expectation, identity, and the voices we allow to shape us."],
];

export default function About() {
  usePageMeta(
    "About Deveendra Murmu — Nonfiction Author",
    "Deveendra Murmu is a nonfiction author with an engineering background and more than three decades of experience in information technology.",
  );

  return (
    <SiteLayout>
      <section className="editorial-grid border-b border-[#252923]/10 py-22 lg:py-30">
        <div className="container grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="section-kicker">About the author</p>
            <h1 className="page-title literary-title mt-6">About Deveendra Murmu</h1>
            <AuthorPortrait className="mt-10 max-w-[320px]" />
          </div>
          <div className="max-w-3xl lg:pt-14">
            <p className="editorial-statement text-[#7E334E]">Some questions become more interesting the longer you live with them.</p>
            <div className="mt-9 space-y-5 border-l border-[#252923]/20 pl-7 text-lg leading-relaxed text-[#3D4139] sm:pl-10">
              {questions.map((question) => <p key={question} className="reading-text">{question}</p>)}
            </div>
            <div className="mt-9 max-w-2xl space-y-5 text-lg leading-relaxed text-[#3D4139]">
              <p className="reading-text">I write about questions like these.</p>
              <p className="reading-text">They look different on the surface, but they share something underneath: our lives are shaped by forces we do not entirely choose or always notice.</p>
              <p className="reading-text">I am interested in what happens when we make those influences more visible—not so that we can escape them, but so that we can become more deliberate about the lives we build.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band py-24 text-[#252923] lg:py-30">
        <div className="container grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="section-kicker section-kicker-light">Professional background</p>
            <span className="mt-8 block h-px w-full bg-white/15" />
            <p className="editorial-quote mt-8 max-w-xs text-[#7E334E]">A systems-oriented curiosity applied to ordinary human contradictions.</p>
          </div>
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-[#3D4139]">
            <p className="editorial-statement text-[#252923]">Deveendra Murmu is a nonfiction author with an engineering background and more than three decades of experience in information technology.</p>
            <p className="reading-text">His writing explores questions at the intersection of technology, human behavior, social influence, judgment, and everyday life.</p>
            <p className="reading-text">Drawing on research, lived experience, and a systems-oriented curiosity, he examines familiar human contradictions and challenges explanations that are too simple for the problems they claim to solve.</p>
            <p className="reading-text">His books invite readers to understand the forces shaping their choices and become more deliberate participants in the lives they build.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2EC] py-24 lg:py-30" aria-labelledby="about-books-title">
        <div className="container">
          <div className="grid gap-8 border-b border-[#252923]/15 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="section-kicker">The books</p>
              <h2 id="about-books-title" className="section-heading mt-5">Three questions I keep returning to.</h2>
            </div>
            <a href="/books/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#7E334E]">Explore all books <ArrowRight size={15} /></a>
          </div>

          <div className="ruled-list mt-9">
            {books.map(([number, title, description], index) => (
              <article key={number} className={`grid gap-4 py-9 lg:grid-cols-[5rem_minmax(0,1fr)_minmax(13rem,0.68fr)] lg:gap-10`}>
                <span className="folio-label pt-1 text-[#7E334E]">{number} /</span>
                <h3 className="row-heading max-w-xl">{title}</h3>
                <p className="reading-text max-w-sm lg:pt-2">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#252923]/10 bg-[#EDE8DF] py-18">
        <div className="container flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-kicker">Reader and media inquiries</p>
            <h2 className="subsection-heading mt-4">Let's continue the conversation.</h2>
            <p className="compact-text mt-3">Email: hello@devmmurmu.com</p>
          </div>
          <a href="mailto:hello@devmmurmu.com" className="secondary-button">Send an email <ArrowRight size={16} /></a>
        </div>
      </section>

      <SectionCTA
        title="See more clearly. Choose more deliberately."
        body="Join the occasional newsletter for essays, reader communication, and updates about the books."
      />
    </SiteLayout>
  );
}
