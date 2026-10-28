/* Original LifeeCode visual fidelity: a compact, soft-card episode runway for the audio-first season. */
import { Check, Headphones } from "lucide-react";
import { audioFirstRun } from "@/data/publishing";

export default function EpisodeRun({ hindi = false }: { hindi?: boolean }) {
  return <div className="mt-8 grid grid-cols-5 gap-2" aria-label="Episodes 8 to 12 publishing runway">
    {audioFirstRun.map((episode) => <div key={episode.number} className="rounded-xl border border-slate-200 bg-white px-2 py-3 text-center shadow-sm">
      <div className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full ${hindi ? "bg-[#f0e9ff] text-[#6d36cc]" : "bg-[#e1f8fc] text-[#00839b]"}`}>
        {episode.status === "published" ? <Check size={13} /> : <Headphones size={12} />}
      </div>
      <p className="mt-2 text-[.61rem] font-extrabold uppercase tracking-[.08em] text-slate-400">Episode</p>
      <p className="text-sm font-extrabold text-slate-700">{episode.number}</p>
    </div>)}
  </div>;
}
