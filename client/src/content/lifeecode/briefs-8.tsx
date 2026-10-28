// Preserved published LifeeCode content. Edit deliberately; do not rewrite during design changes.
export default function PublishedContent() {
  return (
    <div className="lc-preserved-content">
      <section className="border-b border-[#dce5ee] bg-gradient-to-b from-[#f8fbff] to-[#f4fbfc] py-16 md:py-22">
        <div className="lc-frame max-w-5xl">
          <a href="/lifeecode/briefs/" className="lc-text-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>{" "}
            All weekly briefs
          </a>
          <p className="lc-eyebrow mt-9">
            Week of July 27 – August 2, 2026 · Issue No. 8
          </p>
          <h1 className="mt-5 text-[clamp(3rem,7vw,5.8rem)] lc-preserved-title">
            Health tech
            <br />
            <em className="text-[#00a9c7]">weekly brief.</em>
          </h1>
          <p className="mt-7 max-w-4xl border-l-2 border-[#8d54ff] pl-5 text-[1rem] italic leading-8 text-slate-700">
            <b className="not-italic text-[#6d36cc]">This week’s signal:</b> The
            same wearable can face opposite rules depending on the claim on the
            box. This week, LifeeCode looks at the widening line between
            wellness trackers and clinical devices, why trust in healthcare may
            be shaping wearable adoption, uneven consumer-device validation, the
            FDA’s first live TEMPO pilot participant, and Samsung’s
            connected-care push. The common thread: more health data can be
            useful, but clarity about evidence, oversight, and data-sharing is
            becoming essential.
          </p>
        </div>
      </section>
      <section className="lc-frame py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_255px] lg:gap-14">
          <div>
            <article className="lc-soft-card border-[#00b8db]/25 p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#e1f8fc] px-3 py-1 text-[.65rem] font-extrabold uppercase tracking-[.1em] text-[#00839b]">
                  Under the microscope
                </span>
                <span className="rounded-full border px-3 py-1 text-[.65rem] font-extrabold uppercase tracking-[.1em] border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]">
                  Medium privacy risk
                </span>
              </div>
              <h2 className="mt-6 text-[clamp(2.15rem,4.5vw,4.1rem)] lc-preserved-title">
                The Same Wearable Can Face Opposite Rules — and That Should
                Worry You
              </h2>
              <p className="mt-6 text-[1rem] leading-8 text-slate-700">
                A July 29 analysis from MD+DI explains that two wearables can
                use nearly identical hardware yet receive very different
                regulatory treatment depending on their intended use and
                marketing claims. Under the FDA’s finalized January 2026
                general-wellness guidance, non-invasive, non-implanted wearables
                using optical sensing or AI/ML may remain in the low-risk
                wellness lane as long as they do not claim to diagnose, treat,
                or manage a disease; Class II medical-device features face a
                higher evidence and monitoring bar.
              </p>
              <div className="mt-8 grid gap-6 rounded-xl bg-[#f8fbff] p-6 sm:grid-cols-2">
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                    Why it matters for your wellness
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    A ring, watch, or patch may look medically serious and
                    influence daily health decisions while still being marketed
                    as a general-wellness experience. Before acting on an alert
                    or score, check whether the feature is wellness-only or
                    cleared for clinical use.
                  </p>
                </div>
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                    The futurist lens
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    The wearable leaders of the next decade may be the companies
                    that clearly separate lifestyle insight from clinical truth,
                    making explainability and evidence product features in their
                    own right.
                  </p>
                </div>
              </div>
              <section className="mt-9">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f99c00] text-[.68rem] font-extrabold text-white">
                    1
                  </span>
                  <h3 className="text-[1.55rem] lc-preserved-title">
                    What happened
                  </h3>
                </div>
                <p className="mt-3 text-[.94rem] leading-7 text-slate-700">
                  MD+DI described an increasingly important wearable-health
                  reality: nearly identical sensors can fall under sharply
                  different rules depending on the intended use, software
                  claims, and marketing language. The FDA’s finalized January
                  2026 general-wellness guidance broadened the low-risk category
                  for non-invasive, non-implanted wearables using technologies
                  such as optical sensing and AI/ML enhancements, provided they
                  stay in the wellness lane rather than claiming diagnosis or
                  treatment.
                </p>
              </section>
              <section className="mt-9">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f99c00] text-[.68rem] font-extrabold text-white">
                    2
                  </span>
                  <h3 className="text-[1.55rem] lc-preserved-title">
                    The hidden risk / opportunity
                  </h3>
                </div>
                <p className="mt-3 text-[.94rem] leading-7 text-slate-700">
                  The opportunity is faster access to low-risk health-monitoring
                  features. The risk is confusion: consumers may not be able to
                  tell whether a feature is meant to motivate healthier habits,
                  flag a possible concern, or support a clinical decision. A
                  polished interface and authoritative wording can create trust
                  before medical-device-level validation exists.
                </p>
              </section>
              <section className="mt-9">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f99c00] text-[.68rem] font-extrabold text-white">
                    3
                  </span>
                  <h3 className="text-[1.55rem] lc-preserved-title">
                    The privacy angle
                  </h3>
                </div>
                <p className="mt-3 text-[.94rem] leading-7 text-slate-700">
                  If a wearable or AI feature crosses into Class II
                  medical-device territory, it faces stronger verification,
                  clinical validation against a gold-standard comparator, and
                  ongoing post-market monitoring. Yet wellness-labeled products
                  can collect the same sensitive signals while following a
                  lighter oversight path; users should not mistake lower
                  regulatory scrutiny for an absence of data risk.
                </p>
              </section>
              <section className="mt-9">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f99c00] text-[.68rem] font-extrabold text-white">
                    4
                  </span>
                  <h3 className="text-[1.55rem] lc-preserved-title">
                    What you should do
                  </h3>
                </div>
                <p className="mt-3 text-[.94rem] leading-7 text-slate-700">
                  When a wearable feature influences a health decision, look
                  beyond the headline claim. Check whether the company describes
                  it as general wellness or a cleared clinical use, how the
                  signal was validated, what the known limitations are, and
                  whether clinician confirmation is recommended. Treat an
                  anxiety-provoking alert as a prompt for follow-up, not a
                  diagnosis, and review what data is shared before syncing to
                  third-party apps.
                </p>
              </section>
              <section className="mt-9">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f99c00] text-[.68rem] font-extrabold text-white">
                    5
                  </span>
                  <h3 className="text-[1.55rem] lc-preserved-title">
                    The bigger picture
                  </h3>
                </div>
                <p className="mt-3 text-[.94rem] leading-7 text-slate-700">
                  In the next five to ten years, the strongest wearable-health
                  products may not be those that collect the most data. They may
                  be the ones that make the boundary between lifestyle insight
                  and clinical truth unmistakable. In a crowded AI-and-wearables
                  market, clear evidence and explainability are becoming durable
                  forms of trust.
                </p>
              </section>
              <a
                href="https://www.mddionline.com/wearable-medical-devices/same-hardware-different-rules-why-identical-wearables-face-opposite-regulations"
                target="_blank"
                rel="noreferrer"
                className="lc-text-link mt-9"
              >
                Read the cited source: MD+DI — Same Hardware, Different Rules,
                July 29, 2026{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </article>
            <section className="mt-14">
              <p className="lc-eyebrow">Four more signals from this week</p>
              <div className="mt-5 space-y-4">
                <article className="lc-soft-card border-slate-200 p-6 md:p-7">
                  <div className="flex flex-wrap items-start gap-4">
                    <span className="font-[family-name:var(--font-display)] text-3xl text-[#f99c00]">
                      02
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[1.55rem] lc-preserved-title">
                          Lower Trust in Healthcare May Be Pushing More People
                          Toward Wearables
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]">
                          Medium privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        A July 31 open-access study in DIGITAL HEALTH analyzed
                        6,118 respondents from the 2022 Health Information
                        National Trends Survey. It found that 33.2% reported
                        using a wearable in the prior year and reported a
                        negative association between trust in the healthcare
                        system and wearable use in its model, alongside the
                        importance of digital readiness.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Some people may be turning to self-tracking not only
                            because devices are useful, but because they feel
                            more controllable than the healthcare system. That
                            makes it important for clinicians to discuss
                            wearable data in ways that rebuild trust rather than
                            dismiss it.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Wearables will succeed on more than sensor quality.
                            Healthcare systems will need to earn the right to
                            make patient-generated data feel useful, safe, and
                            worth sharing.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13428102/"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        DIGITAL HEALTH — Trust in Healthcare and Wearable Use,
                        July 31, 2026{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-external-link"
                        >
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
                <article className="lc-soft-card border-slate-200 p-6 md:p-7">
                  <div className="flex flex-wrap items-start gap-4">
                    <span className="font-[family-name:var(--font-display)] text-3xl text-[#f99c00]">
                      03
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[1.55rem] lc-preserved-title">
                          Consumer Wearables Still Vary Too Much to Be Treated
                          as Plug-and-Play Clinical Evidence
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]">
                          Medium privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        A July 31 analysis in Applied Clinical Trials argues
                        that consumer-grade wearables remain uneven across
                        endpoints as they move into research and decentralized
                        trials. Heart-rate readings may approach ECG concordance
                        in some settings, while sleep staging, gait metrics, and
                        longitudinal consistency can vary substantially with
                        firmware changes, wear patterns, and opaque algorithms.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            A polished interface can hide weak measurement
                            quality. If a score affects sleep, recovery, or
                            treatment choices, it is worth asking whether that
                            specific metric—not just the device brand—has
                            dependable validation.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            The next era of digital health will distinguish
                            devices that are engaging from those that are
                            clinically trustworthy. Not every popular wearable
                            will make that transition.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.appliedclinicaltrialsonline.com/view/validity-reliability-regulatory-considerations-consumer-devices-clinical-research-data-collection"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        Applied Clinical Trials — Consumer Devices in Clinical
                        Research, July 31, 2026{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-external-link"
                        >
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
                <article className="lc-soft-card border-slate-200 p-6 md:p-7">
                  <div className="flex flex-wrap items-start gap-4">
                    <span className="font-[family-name:var(--font-display)] text-3xl text-[#f99c00]">
                      04
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[1.55rem] lc-preserved-title">
                          The FDA Just Moved from Talking About Digital Health
                          to Testing It in Live Chronic-Care Programs
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]">
                          Medium privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        On July 22, the FDA announced Dexcom as the first
                        participant in its TEMPO for Digital Health Devices
                        Pilot, which is linked to the CMS ACCESS model for
                        chronic-condition care. The Dexcom Glucose Health
                        Program is intended to help users and care teams monitor
                        metabolic and nutritional status, receive tailored
                        guidance, and use real-time data and AI insights for
                        decision-making and behavior change.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            This shifts digital health from theory to live
                            care-pathway evaluation. Regulators are examining
                            how these tools perform with real people and
                            outcomes, rather than only discussing what future
                            technology might do.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Chronic-disease management is moving toward blended
                            models where devices, AI guidance, reimbursement
                            design, and real-world outcomes are tested together
                            rather than in isolation.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.fda.gov/news-events/press-announcements/fda-announces-first-participant-selected-tempo-digital-health-devices-pilot"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        FDA — TEMPO for Digital Health Devices Pilot, July 22,
                        2026{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-external-link"
                        >
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
                <article className="lc-soft-card border-slate-200 p-6 md:p-7">
                  <div className="flex flex-wrap items-start gap-4">
                    <span className="font-[family-name:var(--font-display)] text-3xl text-[#f99c00]">
                      05
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[1.55rem] lc-preserved-title">
                          Samsung Is Signaling a More Connected Consumer Health
                          Stack — and a Stronger Push for Wearable AI
                          Credibility
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#fc3c44]/25 bg-[#fff0f1] text-[#d52d37]">
                          High privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        In a strategy piece tied to Galaxy Unpacked 2026,
                        Samsung described a connected-care vision linking
                        Samsung Health, food planning, guided fitness, wearable
                        biosignals, a beta Health Assistant, and health
                        foundation-model research. The company also highlighted
                        European clinical-validation partnerships, a
                        decentralized clinical-trial framework, and privacy
                        measures centered on user control, pseudonymization, and
                        multilayered security.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            The future wearable may become part of a wider
                            recommendation system that influences meals,
                            workouts, chronic-condition coaching, and how health
                            data moves across services. Convenience can grow
                            quickly—so can the number of connected data
                            pathways.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            The next wearable battle will not be fought on
                            hardware alone. It will be fought on who can connect
                            biosignals, behavior change, evidence, and privacy
                            into a believable health ecosystem.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://news.samsung.com/us/galaxy-unpacked-2026-samsung-partners-envision-connected-care-future-first-signal-lasting-change"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        Samsung Newsroom U.S. — Connected Care Future, July 28,
                        2026{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-external-link"
                        >
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </section>
            <section className="mt-14 rounded-2xl border border-[#8d54ff]/25 bg-[#f8f4ff] p-7 md:p-9">
              <p className="lc-eyebrow">Global watch</p>
              <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] lc-preserved-title">
                Europe’s AI Act Turned Health-AI Trust into an Operational Issue
              </h2>
              <p className="mt-5 text-[.92rem] leading-7 text-slate-700">
                On August 2, 2026, new EU AI Act transparency rules took effect.
                The European Commission says certain AI-generated or manipulated
                content, emotion-recognition and biometric-categorisation tools,
                and public-interest text without human review face clearer
                disclosure expectations. For health tech, the strategic signal
                is broader: trust, labeling, and accountability are moving from
                prototype talking points to operational requirements.
              </p>
              <a
                href="https://commission.europa.eu/news-and-media/news/safer-and-more-transparent-ai-2026-08-02_en"
                target="_blank"
                rel="noreferrer"
                className="lc-text-link mt-6"
              >
                European Commission — Safer and More Transparent AI, August 2,
                2026{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </section>
          </div>
          <aside className="h-fit lc-soft-card border-[#f99c00]/25 p-6 lg:sticky lg:top-28">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield-alert text-[#f99c00]"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
            </svg>
            <h2 className="mt-4 text-3xl lc-preserved-title">Privacy Radar</h2>
            <p className="mt-3 text-[.78rem] leading-6 text-slate-600">
              Who may receive the data, and the practical check to make before
              you act.
            </p>
            <div className="mt-5 space-y-4">
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f99c00]"></span>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.08em] text-slate-700">
                    Medium privacy risk
                  </p>
                </div>
                <h3 className="mt-2 text-[.82rem] font-bold leading-5 text-slate-800">
                  Wellness-vs-medical wearable claims
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Device makers, companion apps, and linked
                  platforms
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Check whether the feature is wellness-only or
                  clinically validated before acting on it.
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f99c00]"></span>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.08em] text-slate-700">
                    Medium privacy risk
                  </p>
                </div>
                <h3 className="mt-2 text-[.82rem] font-bold leading-5 text-slate-800">
                  Wearables and healthcare trust
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Wearable platforms and any connected clinical
                  systems
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Share only the metrics you want a clinician to
                  review, not full app access by default.
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f99c00]"></span>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.08em] text-slate-700">
                    Medium privacy risk
                  </p>
                </div>
                <h3 className="mt-2 text-[.82rem] font-bold leading-5 text-slate-800">
                  Consumer wearables in clinical research
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Device clouds, apps, trial databases, and
                  research sponsors
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Ask whether data flows through manufacturer
                  clouds or direct research pipelines.
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f99c00]"></span>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.08em] text-slate-700">
                    Medium privacy risk
                  </p>
                </div>
                <h3 className="mt-2 text-[.82rem] font-bold leading-5 text-slate-800">
                  FDA TEMPO pilot
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Device makers, care teams, and CMS-linked care
                  programs
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Review consent terms and how real-world data
                  will be monitored and reused.
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#fc3c44]"></span>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.08em] text-slate-700">
                    High privacy risk
                  </p>
                </div>
                <h3 className="mt-2 text-[.82rem] font-bold leading-5 text-slate-800">
                  Connected-care ecosystems
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Device-maker ecosystems, partners, AI layers, and
                  linked services
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Turn off unnecessary third-party connections
                  and review cross-service permissions regularly.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#008a9f] to-[#00a9c7] py-14 text-white">
        <div className="lc-frame max-w-4xl">
          <p className="text-[.68rem] font-extrabold uppercase tracking-[.14em] text-white/80">
            What's next?
          </p>
          <p className="mt-4 text-[clamp(2rem,4vw,3.4rem)] lc-preserved-title">
            The practical question is not whether a wearable can collect a
            signal. It is whether the signal is validated for the decision you
            want to make—and whether you understand where the resulting data
            goes.
          </p>
        </div>
      </section>
      <nav className="border-t border-[#dce5ee] bg-white">
        <div className="lc-frame flex flex-wrap gap-2 py-6">
          <a
            href="/lifeecode/briefs/11/"
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-slate-200 text-slate-600 hover:border-[#00a9c7]"
          >
            Issue 11
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          <a
            href="/lifeecode/briefs/9/"
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-slate-200 text-slate-600 hover:border-[#00a9c7]"
          >
            Issue 9
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          <a
            href="/lifeecode/briefs/8/"
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-[#00a9c7] bg-[#00a9c7] text-white"
          >
            Issue 8
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          <a
            href="/lifeecode/briefs/7/"
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-slate-200 text-slate-600 hover:border-[#00a9c7]"
          >
            Issue 7
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          <a
            href="/lifeecode/briefs/6/"
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-slate-200 text-slate-600 hover:border-[#00a9c7]"
          >
            Issue 6
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          <a
            href="/lifeecode/briefs/5/"
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-slate-200 text-slate-600 hover:border-[#00a9c7]"
          >
            Issue 5
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          <a
            href="/lifeecode/briefs/3/"
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-slate-200 text-slate-600 hover:border-[#00a9c7]"
          >
            Issue 3
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          <a
            href="/lifeecode/briefs/2/"
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-slate-200 text-slate-600 hover:border-[#00a9c7]"
          >
            Issue 2
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          <a
            href="/lifeecode/briefs/1/"
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-slate-200 text-slate-600 hover:border-[#00a9c7]"
          >
            Issue 1
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
}
