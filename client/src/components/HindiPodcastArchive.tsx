/* Original LifeeCode visual fidelity: a neutral chronological Hindi/Hinglish audio archive without implying English episode pairing. */
import { ExternalLink, Headphones } from "lucide-react";
import { hindiPodcastEpisodes } from "@/data/publishing";

export default function HindiPodcastArchive() {
  const latest = hindiPodcastEpisodes.at(-1)!;
  return <section className="soft-card border-[#8d54ff]/20 p-7 md:p-8">
    <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-[.68rem] font-extrabold uppercase tracking-[.1em] text-[#6d36cc]">Independent Hindi / Hinglish series</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-[2rem] leading-none tracking-[-.04em]">Latest audio episode</h2></div><span className="rounded-full bg-[#f0e9ff] px-3 py-1 text-[.67rem] font-extrabold text-[#6d36cc]">Latest · #{latest.number}</span></div>
    <p className="mt-4 text-[.86rem] leading-6 text-slate-600">यह Hindi / Hinglish podcast अपनी independent chronological series है। इसे English episode numbering के साथ pair नहीं किया गया है।</p>
    <a href={latest.spotify} target="_blank" rel="noreferrer" className="btn-primary mt-6 !bg-[#8d54ff] !border-[#8d54ff]"><Headphones size={15} /> Latest episode on Spotify <ExternalLink size={14} /></a>
    <div className="mt-7 grid grid-cols-2 gap-2 border-t border-[#8d54ff]/15 pt-5 sm:grid-cols-5">{hindiPodcastEpisodes.map((episode) => <a key={episode.number} href={episode.spotify} target="_blank" rel="noreferrer" className={`rounded-lg border p-3 text-center text-[.7rem] font-extrabold transition hover:-translate-y-0.5 ${episode.number === latest.number ? "border-[#8d54ff] bg-[#f6f1ff] text-[#6d36cc]" : "border-slate-200 bg-white text-slate-500"}`}>Ep. {episode.number}</a>)}</div>
  </section>;
}
