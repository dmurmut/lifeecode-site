/* Clinical Editorial Garden: a readable signal index, with editorial hierarchy rather than a generic card grid. */
import { ArrowUpRight, ChevronRight, FileText, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { briefs } from "@/data/briefs";

export default function Briefs() {
  const latest = briefs[0];

  return <SiteLayout>
    <main>
      <section className="site-frame py-20 md:py-28">
        <p className="eyebrow">The weekly signal desk</p>
        <h1 className="section-heading mt-6">Health technology, filtered for what changes your future.</h1>
        <p className="lead-copy mt-7">Every archived brief follows five developments that matter—not merely five that made noise. We look for impact, evidence, privacy implications, and the human decision underneath the headline.</p>

        <div className="mt-16 grid border-y border-stone-900/15 lg:grid-cols-[1.1fr_.9fr]">
          <article className="border-b border-stone-900/15 py-10 pr-0 lg:border-b-0 lg:border-r lg:pr-12">
            <p className="eyebrow">Latest published · Issue {latest.issueNumber}</p>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,4.6rem)] leading-[.95] tracking-[-.06em]">{latest.updates[0].title}</h2>
            <p className="mt-6 max-w-xl text-[.96rem] leading-7 text-stone-600">{latest.signal}</p>
            <Link href={`/briefs/${latest.issueNumber}`} className="text-link mt-8">Read Issue {latest.issueNumber} <ArrowUpRight size={16} /></Link>
          </article>
          <aside className="flex flex-col justify-between py-10 pl-0 lg:py-12 lg:pl-12">
            <div>
              <FileText className="text-[#e7a328]" size={31} />
              <h3 className="mt-8 text-xl font-extrabold">Every brief includes</h3>
              <ul className="mt-5 space-y-4 text-[.9rem] text-stone-600">
                <li className="flex gap-3"><ShieldCheck size={17} className="mt-1 shrink-0 text-[#2d6a5a]" />A practical “why it matters” for your real life.</li>
                <li className="flex gap-3"><ShieldCheck size={17} className="mt-1 shrink-0 text-[#2d6a5a]" />A futurist lens for the five-to-ten-year view.</li>
                <li className="flex gap-3"><ShieldCheck size={17} className="mt-1 shrink-0 text-[#2d6a5a]" />A privacy check that calls out who holds your data.</li>
              </ul>
            </div>
            <p className="mt-8 border-l-2 border-[#8d54ff] pl-4 text-[.82rem] italic leading-6 text-slate-600">Episode 11 is now live, with nine English weekly briefs available in the archive.</p>
          </aside>
        </div>

        <section className="mt-20">
          <p className="eyebrow">English brief archive · 9 issues</p>
          <div className="mt-7 divide-y divide-stone-900/12 border-y border-stone-900/12">
            {briefs.map((brief) => <Link key={brief.issueNumber} href={`/briefs/${brief.issueNumber}`} className="group grid gap-4 py-7 transition hover:bg-white/35 md:grid-cols-[125px_1fr_auto] md:items-center md:px-4">
              <span className="text-[.7rem] font-extrabold uppercase tracking-[.13em] text-[#2d6a5a]">Issue {brief.issueNumber}</span>
              <div><p className="text-[.73rem] font-bold text-stone-500">{brief.weekLabel}</p><h3 className="mt-1 font-[family-name:var(--font-display)] text-[1.7rem] leading-none tracking-[-.035em]">{brief.updates[0].title}</h3></div>
              <ChevronRight className="text-[#e7a328] transition group-hover:translate-x-1" size={23} />
            </Link>)}
          </div>
        </section>
      </section>
    </main>
  </SiteLayout>;
}
