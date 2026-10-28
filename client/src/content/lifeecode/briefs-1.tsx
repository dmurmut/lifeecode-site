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
            Week of February 22–28, 2026 · Issue No. 1
          </p>
          <h1 className="mt-5 text-[clamp(3rem,7vw,5.8rem)] lc-preserved-title">
            Health tech
            <br />
            <em className="text-[#00a9c7]">weekly brief.</em>
          </h1>
          <p className="mt-7 max-w-4xl border-l-2 border-[#8d54ff] pl-5 text-[1rem] italic leading-8 text-slate-700">
            <b className="not-italic text-[#6d36cc]">This week’s signal:</b> The
            FDA just quietly changed the rules for millions of health wearables
            — and most consumers have no idea. From loosened regulatory
            oversight on your smartwatch and sleep tracker, to landmark brain
            data privacy laws, to a startup screening 50+ biomarkers from a
            selfie — the gap between health tech innovation and consumer
            protection has never been more visible. Here are the five updates
            that matter most.
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
                FDA Eases Regulatory Hurdles for Wearables — But Experts Warn of
                a Hidden Risk
              </h2>
              <p className="mt-6 text-[1rem] leading-8 text-slate-700">
                The FDA issued new guidance in January 2026 reclassifying a
                broad range of consumer health wearables — including
                smartwatches, sleep trackers, and fitness monitors — as 'general
                wellness' devices rather than medical devices. This removes them
                from the stricter oversight pathway that requires clinical
                evidence of safety and efficacy before market entry.
              </p>
              <div className="mt-8 grid gap-6 rounded-xl bg-[#f8fbff] p-6 sm:grid-cols-2">
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                    Why it matters for your wellness
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    The health claims on your smartwatch or sleep tracker are no
                    longer required to be backed by clinical evidence — meaning
                    the FDA has, in effect, allowed health technology companies
                    to make wellness claims without the same scrutiny applied to
                    medical devices.
                  </p>
                </div>
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                    The futurist lens
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    Regulatory deregulation of consumer health wearables will
                    accelerate innovation and market growth — but it will also
                    widen the gap between what devices claim to measure and what
                    has been independently validated.
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
                  The FDA updated its General Wellness Policy in January 2026,
                  expanding the category of devices that qualify as general
                  wellness products and are therefore exempt from premarket
                  review. The update explicitly includes devices that monitor
                  sleep, activity, heart rate, and stress — covering the
                  majority of consumer wearables on the market.
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
                  The reclassification removes the requirement for manufacturers
                  to demonstrate that their health claims are clinically valid
                  before selling the device. A company can now market a wearable
                  as monitoring 'cardiovascular health' or 'sleep quality'
                  without submitting clinical evidence to the FDA.
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
                  Devices classified as general wellness products are also less
                  likely to be subject to HIPAA — meaning the data they collect
                  may not have the same legal protections as data collected by a
                  medical device or healthcare provider.
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
                  Treat the health metrics on your consumer wearable as
                  directional indicators, not clinical measurements. Before
                  making any health decision based on wearable data, confirm
                  with a healthcare provider whether the specific metric has
                  been clinically validated for your use case.
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
                  This regulatory shift reflects a deliberate policy choice to
                  prioritise innovation and market growth over consumer
                  protection in the wearable health space. The long-term
                  consequences — in terms of both clinical harm from inaccurate
                  health claims and privacy harm from unregulated data
                  collection — will take years to fully emerge.
                </p>
              </section>
              <a
                href="https://www.fda.gov/medical-devices/digital-health-center-excellence/general-wellness-policy"
                target="_blank"
                rel="noreferrer"
                className="lc-text-link mt-9"
              >
                Read the cited source: FDA Digital Health Center of Excellence,
                Jan 2026{" "}
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
                          Your Brain Data Now Has Legal Protection — In Some
                          States
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]">
                          Medium privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        Colorado, Washington, and Minnesota enacted neural data
                        privacy laws in early 2026, making them the first US
                        states to specifically protect brain-computer interface
                        data and neural signals from commercial exploitation.
                        The laws require explicit consent for collection,
                        prohibit sale to third parties without consent, and
                        mandate deletion on request.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            As consumer neurotechnology — including EEG
                            headbands, focus trackers, and sleep brain monitors
                            — enters the mainstream, these laws establish the
                            first legal framework for protecting the most
                            intimate data the human body can generate.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Neural data privacy laws will become a federal
                            necessity within five years as brain-computer
                            interfaces move from medical settings into consumer
                            products — but the window for establishing strong
                            protections is closing as the technology scales.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://iapp.org/news/a/neural-data-privacy-laws-2026/"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        IAPP — Neural Data Privacy Laws, Feb 2026{" "}
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
                          ChatGPT Health Fails to Recognise Medical Emergencies
                          — Half the Time
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#00c950]/25 bg-[#effff5] text-[#168442]">
                          Low privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        A study published in JAMA Network Open tested ChatGPT's
                        ability to identify medical emergencies in
                        patient-described scenarios. The AI correctly identified
                        emergency situations in approximately 50% of cases —
                        performing at chance level for the most time-sensitive
                        presentations, including stroke symptoms and acute
                        cardiac events.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            If you or someone you know uses an AI chatbot to
                            assess symptoms, this study suggests a 50% chance
                            that a genuine emergency will not be flagged as one
                            — with potentially life-threatening consequences.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Consumer AI health tools will require mandatory
                            emergency detection standards before they can be
                            safely used as first-line symptom checkers — and the
                            regulatory framework to enforce those standards does
                            not yet exist.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://jamanetwork.com/journals/jamanetworkopen/chatgpt-emergency-detection-2026"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        JAMA Network Open, Feb 2026{" "}
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
                          A Simple Blood Test Can Predict Your Survival Odds —
                          With 86% Accuracy
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#fc3c44]/25 bg-[#fff0f1] text-[#d52d37]">
                          High privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        Duke University researchers published a study
                        demonstrating that a blood test measuring a panel of
                        protein biomarkers could predict two-year mortality with
                        86% accuracy across a broad population. The test uses
                        machine learning to identify patterns in standard blood
                        draw results that correlate with near-term survival.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            A test that can predict two-year survival with this
                            level of accuracy has profound implications for
                            end-of-life planning, clinical decision-making, and
                            — critically — insurance underwriting.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Mortality prediction tools will become standard in
                            clinical practice within a decade — but the ethical
                            and regulatory frameworks governing who can access
                            those predictions are years behind the science.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.duke.edu/mortality-risk-index-blood-test-2026"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        Duke University Research, Feb 2026{" "}
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
                          A Berlin Startup Can Screen 50+ Health Biomarkers From
                          Your Selfie in Under 2 Minutes
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]">
                          Medium privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        Nuralogix, a Berlin-based health technology company,
                        demonstrated a smartphone-based tool that claims to
                        screen more than 50 health biomarkers — including blood
                        pressure, heart rate variability, and metabolic
                        indicators — from a 30-second selfie video. The tool
                        uses photoplethysmography and machine learning to
                        extract physiological signals from facial skin colour
                        changes.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            If accurate, this technology would make basic health
                            screening accessible to anyone with a smartphone —
                            but the clinical validation evidence for most of the
                            claimed biomarkers has not been independently
                            peer-reviewed.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Smartphone-based health screening will become
                            ubiquitous within five years — but the gap between
                            what these tools claim to measure and what has been
                            clinically validated will be the defining consumer
                            protection challenge of the next decade.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.nuralogix.ai/anura"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        Nuralogix — Anura Platform, Feb 2026{" "}
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
                  FDA Eases Regulatory Hurdles for Wearables — But Experts Warn
                  of a Hidden Risk
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> See the cited source and app permissions
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Wearable health claims are no longer required
                  to meet clinical evidence standards; treat wellness metrics as
                  indicators, not diagnoses
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
                  Your Brain Data Now Has Legal Protection — In Some States
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> See the cited source and app permissions
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> If you use any consumer neurotechnology device,
                  check whether it is covered by your state's neural data law
                  and review its data-sharing policy
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00c950]"></span>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.08em] text-slate-700">
                    Low privacy risk
                  </p>
                </div>
                <h3 className="mt-2 text-[.82rem] font-bold leading-5 text-slate-800">
                  ChatGPT Health Fails to Recognise Medical Emergencies — Half
                  the Time
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> See the cited source and app permissions
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Do not use AI chatbots to assess potential
                  medical emergencies; call emergency services directly
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
                  A Simple Blood Test Can Predict Your Survival Odds — With 86%
                  Accuracy
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> See the cited source and app permissions
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Mortality prediction data is among the most
                  sensitive health information possible; confirm any test
                  results are stored within HIPAA-covered systems
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
                  A Berlin Startup Can Screen 50+ Health Biomarkers From Your
                  Selfie in Under 2 Minutes
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> See the cited source and app permissions
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Facial video data processed by a third-party
                  health app may be stored and used for model training; review
                  the privacy policy before use
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
            Next week, we're diving deep into continuous glucose monitors (CGMs)
            — devices originally designed for diabetics that are now being
            adopted by healthy individuals for metabolic optimisation. Are they
            accurate enough for this use case? Who owns your glucose data? And
            what does the science actually say about CGMs for non-diabetic
            users? Stay tuned.
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
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-slate-200 text-slate-600 hover:border-[#00a9c7]"
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
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-[#00a9c7] bg-[#00a9c7] text-white"
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
