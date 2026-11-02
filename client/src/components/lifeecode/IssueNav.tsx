import { ChevronRight } from "lucide-react";
import { englishIssues } from "@/content/lifeecode/pages";

/** Issue switcher shown at the foot of every English brief. Built from the archive list. */
export default function IssueNav({ current }: { current: number }) {
  return (
    <nav className="border-t border-[#dce5ee] bg-white">
      <div className="lc-frame flex flex-wrap gap-2 py-6">
        {englishIssues.map(({ issue }) => (
          <a
            key={issue}
            href={`/lifeecode/briefs/${issue}/`}
            className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition ${
              issue === current
                ? "border-[#00a9c7] bg-[#00a9c7] text-white"
                : "border-slate-200 text-slate-600 hover:border-[#00a9c7]"
            }`}
          >
            Issue {issue}
            <ChevronRight size={12} />
          </a>
        ))}
      </div>
    </nav>
  );
}
