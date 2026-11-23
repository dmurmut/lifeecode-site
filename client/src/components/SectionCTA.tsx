import { ArrowRight } from "lucide-react";

interface SectionCTAProps {
  eyebrow?: string;
  title: string;
  body: string;
  href?: string;
  label?: string;
}

export default function SectionCTA({
  eyebrow = "A continuing conversation",
  title,
  body,
  href = "/newsletter/",
  label = "Join the Newsletter",
}: SectionCTAProps) {
  return (
    <section className="band py-18 text-[#252923] lg:py-22">
      <div className="container grid gap-10 lg:grid-cols-[1.28fr_0.72fr] lg:items-end">
        <div>
          <p className="folio-label text-[#7E334E]">{eyebrow}</p>
          <h2 className="section-heading mt-5 max-w-3xl">{title}</h2>
        </div>
        <div className="lg:translate-y-8">
          <p className="reading-text max-w-xl">{body}</p>
          <a
            href={href}
            className="folio-label mt-7 inline-flex items-center gap-2 border-b border-[#7E334E] pb-2 text-[#252923] transition-colors hover:text-[#7E334E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#7E334E]"
          >
            {label} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
