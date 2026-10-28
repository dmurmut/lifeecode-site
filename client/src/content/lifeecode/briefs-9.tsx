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
            Week of August 3 – 9, 2026 · Issue No. 9
          </p>
          <h1 className="mt-5 text-[clamp(3rem,7vw,5.8rem)] lc-preserved-title">
            Health tech
            <br />
            <em className="text-[#00a9c7]">weekly brief.</em>
          </h1>
          <p className="mt-7 max-w-4xl border-l-2 border-[#8d54ff] pl-5 text-[1rem] italic leading-8 text-slate-700">
            <b className="not-italic text-[#6d36cc]">This week’s signal:</b>{" "}
            Wearables have already proved that people will track themselves. The
            next test is whether their data can improve care without
            overwhelming patients, clinicians, or privacy safeguards. This
            week’s signals show hospital-to-home monitoring expanding,
            privacy-preserving data infrastructure taking shape, early clinical
            development moving toward continuous review, and wearables becoming
            interfaces for clinician-managed therapy.
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
                The GAO Just Explained Why Wearables Still Struggle to Become
                Real Clinical Tools
              </h2>
              <p className="mt-6 text-[1rem] leading-8 text-slate-700">
                On August 6, the U.S. Government Accountability Office released
                an independent technology assessment on wearables in clinical
                decision-making. The GAO acknowledges that smartwatches, glucose
                monitors, and related devices can establish health baselines,
                collect more continuous information, flag possible events, and
                support more timely, personalized care—but it identifies
                recurring barriers around reliable benefit, clinical-workflow
                integration, and the complexity of the health-tech marketplace.
              </p>
              <div className="mt-8 grid gap-6 rounded-xl bg-[#f8fbff] p-6 sm:grid-cols-2">
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                    Why it matters for your wellness
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    A useful signal on a wrist does not automatically become
                    useful care in a clinic. If you share wearable data, focus
                    on one or two trends and ask what would actually justify
                    follow-up.
                  </p>
                </div>
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                    The futurist lens
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    The next wearable breakthrough is not another metric; it is
                    a system that can prove the metric helps, deliver it to the
                    right clinician, and protect the person behind the data.
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
                  The GAO’s August 6 assessment says wearables with
                  health-related features may give clinicians more timely
                  information, support personalized care, and expand remote
                  monitoring for underserved populations. Yet it found that
                  devices vary in reliability and can be difficult to integrate
                  into clinical work. Its policy options focus on workflow and
                  technology infrastructure, clearer responsibilities for
                  handling data, and better information about device
                  performance.
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
                  The opportunity is to move from occasional medical snapshots
                  to more continuous, context-aware care—especially for people
                  managing chronic conditions or living far from specialist
                  care. The risk is mistaking collection for usefulness: more
                  data can mean more noise, alerts, and anxiety if there is no
                  evidence-based pathway for interpreting it.
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
                  AI may help draw meaning from large wearable-data streams, but
                  it does not remove data-quality, usability, bias, privacy, or
                  accountability problems. When device data becomes part of
                  clinical decisions, it may move among device makers, companion
                  apps, cloud services, clinicians, and health systems; users
                  need to know who receives it and why.
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
                  Bring one or two trends that matter to you to an appointment
                  rather than every dashboard. Ask your clinician whether that
                  measure is useful in your situation and what change deserves
                  follow-up. Keep a small context note for unusual
                  readings—sleep, illness, medication changes, exercise, or
                  travel can affect a signal—and review sharing settings before
                  connecting a device to a care program or third-party platform.
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
                  Wearables are entering a maturity test. The market has proved
                  that people will track themselves. Now it must prove that the
                  data can improve care without overwhelming patients,
                  clinicians, or privacy safeguards. The companies that win will
                  not merely collect more biometrics; they will make the right
                  information usable at the right time.
                </p>
              </section>
              <a
                href="https://www.gao.gov/products/gao-26-107847"
                target="_blank"
                rel="noreferrer"
                className="lc-text-link mt-9"
              >
                Read the cited source: U.S. GAO — Wearable Technologies in
                Clinical Decision-Making, August 6, 2026{" "}
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
                          Philips Is Building a Hospital-to-Home Monitoring
                          Network Around Wearables
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#fc3c44]/25 bg-[#fff0f1] text-[#d52d37]">
                          High privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        Philips announced partnerships to expand its open
                        patient-monitoring ecosystem beyond the hospital
                        bedside. The integrations include wearable and
                        out-of-hospital tools for signals such as temperature,
                        blood pressure, ECG, oxygen saturation, respiration,
                        posture, and activity, supporting continuous visibility
                        from admission through recovery at home.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Professional wearables are becoming care
                            infrastructure, not just personal gadgets. Future
                            monitoring may follow some patients across hospital,
                            home, and follow-up rather than ending at discharge.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            The remote-monitoring question is no longer whether
                            sensors can collect more data; it is whether care
                            teams can turn it into a safe, manageable,
                            privacy-respecting response before a small concern
                            becomes an emergency.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.philips.com/a-w/about/news/archive/standard/news/press/2026/philips-expands-open-patient-monitoring-ecosystem-to-help-health-systems-keep-sight-of-patients-beyond-the-bedside.html"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        Philips — Open Patient Monitoring Ecosystem, August 6,
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
                      03
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[1.55rem] lc-preserved-title">
                          ARPA-H Is Funding a Privacy-Preserving Path for
                          Wearable and Telemedicine Data
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]">
                          Medium privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        ARPA-H began an up-to-$8.1 million HealthyDocs project
                        on August 3 to build secure, interoperable,
                        privacy-preserving health-data infrastructure. The work
                        begins with a low-cost diabetes telemedicine platform
                        intended to integrate clinical information, regulated
                        medical-device data, and consumer-wearable data in a
                        model that can scale across healthcare systems and EHR
                        platforms.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            For people using glucose monitors, wearables, or
                            telemedicine, this addresses a missing layer:
                            connecting data more safely without forcing a choice
                            between fragmented care and uncontrolled sharing.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Digital health may depend less on one perfect app
                            and more on privacy-preserving infrastructure that
                            lets people move their data safely among services
                            they trust.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://arpa-h.gov/explore-funding/awards/4669"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        ARPA-H — HealthyDocs Secure Interoperable Health Data
                        Management{" "}
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
                          The FDA Is Testing a More Continuous Model for Early
                          Clinical Trials
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]">
                          Medium privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        In an August 6 educational webinar, the FDA explained
                        its proposed Expedited IND Pilot, which would let
                        qualified research institutions provide iterative
                        scientific support while early drug applications are
                        prepared. Rather than waiting for one complete
                        submission, the proposal would allow pieces to be
                        reviewed as they are ready, aiming to identify issues
                        earlier while preserving safety standards.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Better trial systems may help useful therapies reach
                            studies sooner, but the quality of evidence still
                            matters. Faster should mean earlier scientific
                            clarity, not lower standards.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Clinical development is moving toward continuous
                            evidence generation. The important shift is not a
                            flood of live data, but deciding which data is
                            meaningful enough to support an earlier, safer
                            decision.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.fda.gov/news-events/fda-meetings-conferences-and-workshops/expedited-ind-pilot-program-educational-webinar-stakeholders-08062026"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        FDA — Expedited IND Pilot Program Educational Webinar,
                        August 6, 2026{" "}
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
                          A Wearable Is Now Part of an Implantable Therapy for
                          Urinary Urgency
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]">
                          Medium privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        Coverage reported FDA 510(k) clearance for Revi Extend,
                        a next-generation implantable tibial neuromodulation
                        system for urgency urinary incontinence. The system is
                        implanted near the ankle and activated by a lightweight
                        external wearable for once-daily home therapy;
                        company-reported pivotal-study outcomes should be read
                        as such, not as independent medical advice.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Wearables may increasingly move beyond passive
                            tracking to support carefully designed,
                            clinician-managed treatment at home. That makes
                            safety, usability, cybersecurity, and informed
                            consent more consequential.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            The future wearable may look less like a dashboard
                            and more like a bridge between a patient, an
                            implanted therapy, and a care team.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://practicalneurology.com/news/revi-extend-cleared-with-15-year-durability-for-urgency-urinary-incontinence/2488073/"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        Practical Neurology — Revi Extend Cleared for Urgency
                        Urinary Incontinence{" "}
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
                Why ‘Medical-Looking’ Wearables Can Earn More Trust Than They
                Deserve
              </h2>
              <p className="mt-5 text-[.92rem] leading-7 text-slate-700">
                A China-based qualitative study posted on arXiv on August 8
                examined how older adults decide whether health-wearable outputs
                are reliable enough for daily use. Across 31 semi-structured
                interviews, participants often relied on visible cues—brand,
                price, medical appearance, interface density, automated prompts,
                updates, and AI labels—when systems did not clearly show signal
                quality, uncertainty, failure conditions, or data continuity. It
                is a preprint, not peer-reviewed research, but its
                consumer-protection signal is clear: polished design is not
                proof of validity.
              </p>
              <a
                href="https://arxiv.org/abs/2608.08856"
                target="_blank"
                rel="noreferrer"
                className="lc-text-link mt-6"
              >
                arXiv preprint — Wearing Trust: Older Adults and Health
                Wearables, August 2026{" "}
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
                  Wearables in clinical decision-making
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Device makers, app providers, clinicians, and
                  health systems
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Bring focused trends to appointments and ask
                  which data is clinically useful before sharing full-device
                  access.
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
                  Hospital-to-home monitoring ecosystems
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Device partners, monitoring platforms, hospitals,
                  and care teams
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Ask which partners receive data, how long it is
                  retained, and whether you can limit nonessential connections.
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
                  HealthyDocs diabetes telemedicine platform
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Telemedicine providers, medical-device vendors,
                  EHR systems, and research infrastructure
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Review consent language and whether data is
                  used only for care or also for research and product
                  improvement.
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
                  Continuous clinical-trial data
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Trial sponsors, research institutions,
                  regulators, and technology vendors
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Ask what data is monitored and collected, and
                  what happens if a device signal is missed or wrong.
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
                  Wearable-activated therapy
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> Device manufacturer, implanting clinician, and
                  any connected therapy app
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Ask about device connectivity, account
                  security, software updates, and who can access therapy-use
                  information.
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
            The breakthrough is not another metric. It is a system that can
            prove the metric is useful, place it in the right clinical workflow,
            and protect the person behind the data.
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
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-[#00a9c7] bg-[#00a9c7] text-white"
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
