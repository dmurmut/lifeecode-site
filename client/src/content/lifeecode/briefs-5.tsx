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
            Week of March 30 – April 5, 2026 · Issue No. 5
          </p>
          <h1 className="mt-5 text-[clamp(3rem,7vw,5.8rem)] lc-preserved-title">
            Health tech
            <br />
            <em className="text-[#00a9c7]">weekly brief.</em>
          </h1>
          <p className="mt-7 max-w-4xl border-l-2 border-[#8d54ff] pl-5 text-[1rem] italic leading-8 text-slate-700">
            <b className="not-italic text-[#6d36cc]">This week’s signal:</b>{" "}
            When the federal government partners with the world's largest data
            company to put your hospital records inside a consumer fitness app,
            the question is no longer whether your health data is private — it's
            whether it ever was. This week: Google and CMS merge medical records
            with Fitbit, Samsung launches wrist blood pressure monitoring
            without FDA clearance, WHOOP raises $10.1 billion while fighting a
            regulatory warning, the FDA redraws the line between wellness and
            medical device, and FemTech's privacy crisis accelerates. Five
            signals. All filtered through a privacy-first lens.
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
                <span className="rounded-full border px-3 py-1 text-[.65rem] font-extrabold uppercase tracking-[.1em] border-[#fc3c44]/25 bg-[#fff0f1] text-[#d52d37]">
                  High privacy risk
                </span>
              </div>
              <h2 className="mt-6 text-[clamp(2.15rem,4.5vw,4.1rem)] lc-preserved-title">
                Google and the U.S. Government Just Merged Your Medical Records
                with Your Fitbit
              </h2>
              <p className="mt-6 text-[1rem] leading-8 text-slate-700">
                The Centers for Medicare &amp; Medicaid Services (CMS) announced
                a partnership with Google to integrate official Medicare and
                Medicaid health records directly into the Fitbit app and Google
                Health Connect. The integration allows patients to view clinical
                records — including diagnoses, medications, and lab results —
                alongside their wearable fitness data in a single consumer
                interface.
              </p>
              <div className="mt-8 grid gap-6 rounded-xl bg-[#f8fbff] p-6 sm:grid-cols-2">
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                    Why it matters for your wellness
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    If you use a Fitbit or Google Health Connect, your official
                    medical records may now be accessible in the same app that
                    tracks your steps — and the data protections that apply in a
                    hospital setting do not automatically follow your records
                    into a consumer app.
                  </p>
                </div>
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                    The futurist lens
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    The merger of clinical records with consumer wearable
                    platforms is the most significant structural change in
                    health data governance in a decade — and it is happening
                    faster than the regulatory frameworks designed to protect
                    patients.
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
                  CMS announced that Medicare and Medicaid beneficiaries can now
                  connect their official health records to Google Health Connect
                  and the Fitbit app through a new data-sharing agreement. The
                  integration uses the FHIR standard to pull clinical data —
                  diagnoses, medications, immunisations, lab results — into the
                  consumer interface. Google described the feature as
                  patient-controlled and opt-in.
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
                  HIPAA protects your records at the hospital. Once you opt in
                  to share them with a consumer app, those records enter
                  Google's data ecosystem — where they are subject to Google's
                  privacy policy, not HIPAA. Google's policy permits using
                  health data to improve its services, which includes AI
                  training and, potentially, advertising systems.
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
                  The opt-in framing obscures the asymmetry: patients are
                  choosing between fragmented care and data exposure. The
                  consent interface does not clearly explain that sharing
                  clinical records with a consumer app changes their legal
                  protection status.
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
                  Before connecting your medical records to any consumer app,
                  read the data-sharing policy carefully. Confirm whether your
                  data will be used to train AI models or inform advertising. If
                  you connect, periodically review which apps have access in
                  Google Health Connect settings and revoke access for any you
                  no longer use.
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
                  This partnership is a preview of the next decade of health
                  data governance: clinical records flowing into consumer
                  platforms at scale, with patient consent as the primary
                  protection mechanism. The adequacy of that protection depends
                  entirely on how informed and meaningful that consent actually
                  is.
                </p>
              </section>
              <a
                href="https://www.cms.gov/newsroom/press-releases/cms-google-health-connect"
                target="_blank"
                rel="noreferrer"
                className="lc-text-link mt-9"
              >
                Read the cited source: CMS Press Release, Mar 2026{" "}
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
                          Samsung Galaxy Watch Now Measures Blood Pressure on
                          Your Wrist — Without FDA Clearance for That Feature
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#00c950]/25 bg-[#effff5] text-[#168442]">
                          Low privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        Samsung enabled blood pressure monitoring on Galaxy
                        Watch devices in the United States through a software
                        update in early April 2026. The feature had previously
                        been available in South Korea and other markets.
                        Samsung's blood pressure monitoring uses
                        photoplethysmography rather than an inflatable cuff, and
                        the company notes it requires periodic calibration
                        against a traditional cuff measurement.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Blood pressure monitoring on your wrist is now
                            available to tens of millions of Galaxy Watch users
                            in the US — but the FDA has not cleared this
                            specific feature for clinical use, which means its
                            accuracy claims have not been independently
                            validated to the standard required for medical
                            decision-making.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Consumer wearables are increasingly offering
                            clinical-grade measurements without clinical-grade
                            regulatory oversight — creating a growing gap
                            between what devices claim to measure and what has
                            been independently validated.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://news.samsung.com/us/galaxy-watch-blood-pressure-us-launch"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        Samsung Newsroom, Apr 2026{" "}
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
                          WHOOP Raises $575 Million at a $10.1 Billion Valuation
                          — With a Regulatory Cloud Overhead
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#f99c00]/25 bg-[#fff8e8] text-[#a46200]">
                          Medium privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        WHOOP announced a $575 million funding round in April
                        2026, valuing the company at $10.1 billion. The raise
                        came weeks after the FDA issued a warning letter to
                        WHOOP regarding marketing claims for its cardiovascular
                        age and healthspan features — asserting that those
                        claims crossed the line from wellness into medical
                        device territory without appropriate clearance.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            WHOOP's valuation reflects investor confidence in
                            the wearable health market — but the FDA warning
                            letter signals that the agency is drawing a harder
                            line between wellness features and medical claims,
                            which could affect how WHOOP and its competitors
                            market their products.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            The tension between wearable companies making health
                            claims and regulators requiring clinical evidence
                            for those claims will define the next phase of the
                            industry — and the companies that invest in
                            validation early will have a significant competitive
                            advantage.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.whoop.com/us/en/thelocker/whoop-raises-575-million/"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        WHOOP Blog / FDA Warning Letter, Apr 2026{" "}
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
                          The FDA Has Redrawn the Line Between 'Wellness
                          Wearable' and 'Medical Device'
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#00c950]/25 bg-[#effff5] text-[#168442]">
                          Low privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        The FDA published updated guidance in April 2026
                        clarifying when a consumer wearable crosses the
                        regulatory line from a wellness product into a medical
                        device requiring clearance. The guidance specifies that
                        features making claims about diagnosing, treating, or
                        monitoring specific medical conditions — including
                        cardiovascular risk, sleep disorders, and metabolic
                        conditions — require 510(k) clearance or equivalent.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            This guidance directly affects the features
                            available on your smartwatch and fitness tracker.
                            Features that have been marketed as health insights
                            may need to be relabelled, modified, or removed if
                            they cannot meet the clinical evidence standard the
                            FDA now requires.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Regulatory clarity will accelerate the bifurcation
                            of the wearable market into consumer wellness
                            devices and clinically validated health monitors —
                            with meaningfully different evidence standards,
                            price points, and data governance frameworks for
                            each.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.fda.gov/medical-devices/digital-health-center-excellence/wellness-policy"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        FDA Digital Health Center of Excellence, Apr 2026{" "}
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
                          FemTech's Privacy Crisis: Period Apps Are Sharing Your
                          Most Intimate Data With Insurers
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[.58rem] font-extrabold uppercase tracking-[.09em] border-[#fc3c44]/25 bg-[#fff0f1] text-[#d52d37]">
                          High privacy risk
                        </span>
                      </div>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        An investigation published in April 2026 found that
                        several major period tracking and fertility apps were
                        sharing detailed menstrual cycle data — including cycle
                        length, ovulation predictions, and pregnancy attempts —
                        with health insurers and data brokers. The sharing
                        occurred through third-party SDKs embedded in the apps,
                        often without users' explicit awareness.
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            If you use a period tracking app, your most intimate
                            health data may be flowing to insurers who could use
                            it to inform underwriting decisions — and the legal
                            framework that would prevent this does not yet exist
                            at the federal level.
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            FemTech's privacy crisis is a preview of the broader
                            health data economy: intimate signals collected by
                            consumer apps will increasingly be monetised through
                            channels that users did not consent to and cannot
                            easily audit.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.politico.com/news/2026/04/femtech-privacy-insurers"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-5"
                      >
                        Politico — FemTech Privacy Investigation, Apr 2026{" "}
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
                  <span className="h-2 w-2 rounded-full bg-[#fc3c44]"></span>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.08em] text-slate-700">
                    High privacy risk
                  </p>
                </div>
                <h3 className="mt-2 text-[.82rem] font-bold leading-5 text-slate-800">
                  Google and the U.S. Government Just Merged Your Medical
                  Records with Your Fitbit
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> See the cited source and app permissions
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Review your Google Health Connect sharing
                  settings and confirm which apps have access to your linked
                  medical records
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
                  Samsung Galaxy Watch Now Measures Blood Pressure on Your Wrist
                  — Without FDA Clearance for That Feature
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> See the cited source and app permissions
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Use as a trend indicator only; do not make
                  medication decisions based on wrist-based blood pressure
                  readings without consulting a clinician
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
                  WHOOP Raises $575 Million at a $10.1 Billion Valuation — With
                  a Regulatory Cloud Overhead
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> See the cited source and app permissions
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> WHOOP collects continuous biometric data;
                  review data-sharing settings and third-party access in the app
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
                  The FDA Has Redrawn the Line Between 'Wellness Wearable' and
                  'Medical Device'
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> See the cited source and app permissions
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> No immediate action required; watch for feature
                  updates or rebranding on your current device
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
                  FemTech's Privacy Crisis: Period Apps Are Sharing Your Most
                  Intimate Data With Insurers
                </h3>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Data:</b> See the cited source and app permissions
                </p>
                <p className="mt-2 text-[.73rem] leading-5 text-slate-500">
                  <b>Action:</b> Review the privacy policy of any period or
                  fertility app you use; prefer apps that are explicit about not
                  sharing data with third parties and that store data locally
                </p>
              </div>
            </div>
          </aside>
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
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-[.7rem] font-extrabold transition border-[#00a9c7] bg-[#00a9c7] text-white"
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
