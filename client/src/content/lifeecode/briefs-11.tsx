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
            Week of August 17 – 23, 2026 · Issue No. 11
          </p>
          <h1 className="mt-5 text-[clamp(3rem,7vw,5.8rem)] lc-preserved-title">
            Health tech
            <br />
            <em className="text-[#00a9c7]">weekly brief.</em>
          </h1>
          <p className="mt-7 max-w-4xl border-l-2 border-[#8d54ff] pl-5 text-[1rem] italic leading-8 text-slate-700">
            <b className="not-italic text-[#6d36cc]">This week’s signal:</b>{" "}
            Health technology is moving beyond the era of counting everything.
            The next era is about measuring what matters. This week, LifeeCode
            examines the FDA’s framework for digitally derived measures, a new
            regulatory conversation about generative-AI medical devices,
            condition-specific wearable monitoring, AI-assisted biomarker
            research, and the safety role of patient trust.
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
                Your Wearable Score Is Not a Clinical Outcome — Until It Proves
                It Matters
              </h2>
              <p className="mt-6 text-[1rem] leading-8 text-slate-700">
                In August, the FDA released a paper on digitally derived
                measures created from sensors, software, connected devices, and
                some AI-enabled tools. The agency’s central point is clear: a
                measure should not be selected simply because a device can
                collect it; it should link to an aspect of health meaningful to
                patients, suit the intended population and use case, and be
                supported by evidence that it is fit for purpose.
              </p>
              <div className="mt-8 grid gap-6 rounded-xl bg-[#f8fbff] p-6 sm:grid-cols-2">
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                    Why it matters for your wellness
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    When an app introduces a new score, ask what it claims to
                    measure, whether it was tested in people and for a purpose
                    like yours, and what decision—if any—it should change.
                  </p>
                </div>
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                    The futurist lens
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    Health technology is moving beyond counting everything. The
                    next era is about measuring what matters—and proving it with
                    transparent, patient-relevant evidence.
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
                  The FDA’s paper explains how digitally derived measures (DDMs)
                  from digital health technologies may be used as clinical
                  outcome assessments, biomarkers, or parts of broader research
                  endpoints. It distinguishes verification—whether a technology
                  measures the physical parameter it claims—from analytical
                  validation—whether a derived measure reflects the relevant
                  clinical event or characteristic—and clinical
                  validation—whether that measure captures something meaningful
                  about health or disease status.
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
                  Continuous data outside clinics could reveal changes a short
                  appointment misses, make clinical trials more accessible,
                  detect safety signals earlier, and show how treatment affects
                  daily life. The hidden risk is metric theater: a clean
                  dashboard can make an inferred score feel more meaningful than
                  it is. If a measure was built in a different population or
                  lacks a clear connection to a patient-important outcome,
                  precision can become an illusion.
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
                  The FDA says evidence should be proportionate to a digital
                  measure’s risk and intended context of use. A tool used for
                  exploratory research does not have the same evidence needs as
                  a primary endpoint in a pivotal study. Wherever it is used,
                  DDMs can combine sensor data, apps, cloud analytics, research
                  teams, and AI models—so participants need a clear explanation
                  of the data path, retention period, and purpose.
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
                  Treat an unclear score as a conversation starter or personal
                  observation, not a diagnosis or treatment instruction. If you
                  are in a study that uses an app or wearable, ask what is
                  measured, how long data is kept, whether raw data is shared,
                  and what happens if the device is inaccurate, lost, or not
                  worn as intended.
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
                  The strongest digital-health tools will connect a transparent
                  measurement to a meaningful human outcome, while respecting
                  the people whose data makes that measurement possible. More
                  data does not automatically create better evidence.
                </p>
              </section>
              <a
                href="https://www.fda.gov/medical-devices/digital-health-center-excellence/key-considerations-development-and-use-digitally-derived-measures-clinical-investigations-fda-paper"
                target="_blank"
                rel="noreferrer"
                className="lc-text-link mt-9"
              >
                Read the cited source: FDA — Digitally Derived Measures for
                Clinical Investigations, August 2026{" "}
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
                          The FDA Is Asking a New Question About Medical AI: How
                          Much Does It Direct You?
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#fc3c44]/25 bg-[#fff0f1] text-[#d52d37]">
                          High privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        On August 18, the FDA released a discussion paper
                        seeking input on a future regulatory approach for
                        generative-AI-enabled medical devices. The document is
                        not draft or final guidance; it invites feedback on risk
                        assessment, premarket evaluation, and postmarket
                        monitoring, including a possible framework that
                        considers how independently a system provides
                        information, directs action, or takes action, alongside
                        the severity of harm if it is wrong.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            ‘Ask your doctor’ language does not automatically
                            make an AI recommendation low risk. What matters is
                            what the tool actually encourages you to do and what
                            could happen if it is wrong.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Health-AI regulation may shift from asking only ‘Is
                            this an AI tool?’ to asking ‘How directly does it
                            shape action, and how serious is the consequence of
                            error?’
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.fda.gov/medical-devices/digital-health-center-excellence/considerations-regulation-generative-ai-enabled-medical-devices-discussion-paper-and-request"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        FDA — Generative-AI Medical Devices Discussion Paper,
                        August 18, 2026{" "}
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
                          A Parkinson’s Wearable Platform Has Cleared the FDA
                          for Longitudinal Monitoring
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]">
                          Medium privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        Empatica received FDA 510(k) clearance for its Health
                        Monitoring Platform for Parkinson’s, combining
                        clinical-grade wearables, a patient-facing app, secure
                        cloud infrastructure, and a clinician portal. The
                        platform provides longitudinal measures related to
                        bradykinesia, dyskinesia, tremor, sleep, medication
                        compliance, and other Parkinson disease management
                        parameters.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            This is a practical example of a wearable moving
                            beyond wellness tracking toward condition-specific
                            care support. It is not a substitute for clinical
                            judgment, and clearance does not mean every metric
                            suits every person.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            The most valuable wearable may not be the one that
                            tries to monitor everyone. It may be the one that
                            measures a specific condition well enough to support
                            a meaningful clinical conversation over time.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://practicalneurology.com/news/wearable-platform-cleared-for-parkinson-disease-symptom-monitoring/2488145/"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        Practical Neurology — Wearable Platform for Parkinson
                        Disease Monitoring{" "}
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
                          Google Research Is Using AI to Find Wearable Biomarker
                          Candidates — With an Important Caveat
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#fc3c44]/25 bg-[#fff0f1] text-[#d52d37]">
                          High privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        Google Research introduced its Biomarker Discovery
                        Framework, a multi-agent system for prioritizing
                        candidate biomarkers from wearable-sensor data. It
                        combines hypothesis generation, deterministic
                        statistical analysis, literature review, adversarial
                        checks for leakage and overfitting, and human-expert
                        review; across three cohorts totaling 9,279
                        participant-observations, it recovered known signals and
                        identified candidate measures for further research.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            AI can find patterns in wearable data that people
                            would miss, but an AI-generated association is not
                            proof that a metric diagnoses a condition or that
                            changing it improves health. A candidate biomarker
                            is the start of research, not the end of it.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            The next wave of health AI should help researchers
                            eliminate weak claims faster, preserve traceability,
                            and make uncertainty visible before a new metric
                            reaches patients.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://research.google/blog/an-ai-tool-for-prioritizing-candidate-biomarkers-from-wearable-sensor-data/"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        Google Research — Candidate Biomarkers from Wearable
                        Sensor Data{" "}
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
                          Patient Trust Is Not a Soft Issue in Health AI — It Is
                          Part of Safety
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#fc3c44]/25 bg-[#fff0f1] text-[#d52d37]">
                          High privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        A 2026 systematic review and qualitative meta-synthesis
                        in the Journal of Medical Internet Research examined 25
                        studies involving 528 patients across multiple
                        countries. It identified recurring concerns about
                        privacy and data security, black-box decision-making, AI
                        reliability, loss of empathy in care, unclear
                        accountability, algorithmic bias, and unequal access.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            You should not have to become an AI engineer to
                            understand whether a system is involved in your
                            care, what it does, who checks it, or how to request
                            human review. Clear answers are basic conditions of
                            trust.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            The best health-AI products will not treat trust as
                            a branding exercise. They will build it through
                            consent, clear limits, human checkpoints, and a
                            visible path for appeal or review.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.jmir.org/2026/1/e85663/"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        JMIR — Patient Concerns Regarding AI Applications in
                        Health Care{" "}
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
                India Is Building a National Health-Data Gateway. Consent Must
                Be as Visible as Convenience.
              </h2>
              <p className="mt-5 text-[.92rem] leading-7 text-slate-700">
                India has announced digital-health initiatives built around the
                Ayushman Bharat Digital Mission, including an updated Aarogya
                Setu 2.0 app positioned as a personal health-record gateway.
                Reported features include ABHA health-account management,
                consent-based sharing of digital records, wearable integration,
                AI-powered health insights, family health management, and links
                to public services. Interoperability can reduce friction, but it
                can also create a larger ecosystem where records, benefits,
                claims, wearable data, and AI insights sit closer together.
                Consent should not be a buried button inside such a network.
              </p>
              <a
                href="https://ddindia.co.in/2026/06/health-ministry-launches-aarogya-setu-2-0-rolls-out-new-digital-health-initiatives-to-strengthen-healthcare-ecosystem/"
                target="_blank"
                rel="noreferrer"
                className="lc-text-link mt-6"
              >
                DD India — Aarogya Setu 2.0 and New Digital Health Initiatives{" "}
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
                  Digitally derived measures in clinical research
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Device makers, apps, cloud-analytics vendors,
                  research teams, and sponsors
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Ask what is measured, whether raw or derived
                  data is retained, and whether it will be reused beyond the
                  study.
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
                  Generative-AI medical devices
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> AI vendors, device makers, healthcare providers,
                  and possible model providers
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Identify whether the tool gives information,
                  directs action, or takes action, and who reviews important
                  outputs.
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
                  Parkinson’s wearable monitoring
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Device maker, app and cloud infrastructure,
                  clinician portal, and care team
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Ask what symptom and adherence data is stored,
                  who can see it, and whether sharing can be limited.
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
                  AI-assisted biomarker discovery
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Research institutions, wearable-data platforms,
                  AI infrastructure providers, and expert reviewers
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Treat findings as research candidates; ask
                  whether deidentified data can still be linked or reused across
                  projects.
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
                  Patient-facing health AI
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Health system, AI vendor, clinical documentation,
                  and data platforms
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Ask whether AI is involved in your care, how to
                  request human review, and how sensitive information is
                  handled.
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
            The strongest digital-health tools will not be the ones with the
            most dashboards. They will be the ones that connect a transparent
            measurement to a meaningful human outcome, while respecting the
            people whose data makes that measurement possible.
          </p>
        </div>
      </section>
      <nav className="border-t border-[#dce5ee] bg-white">
        <div className="lc-frame flex flex-wrap gap-2 py-6">
          <a
            href="/lifeecode/briefs/11/"
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-[#00a9c7] bg-[#00a9c7] text-white"
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
