// Preserved published LifeeCode content. Edit deliberately; do not rewrite during design changes.
export default function PublishedContent() {
  return (
    <div className="lc-preserved-content" lang="hi">
      <section className="border-b border-[#e7ddf5] bg-gradient-to-b from-[#f7f2ff] to-[#f8fffb] py-16 md:py-22">
        <div className="lc-frame max-w-5xl">
          <a href="/lifeecode/hindi/" className="lc-text-link !text-[#6d36cc]">
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
            LifeeCode हिंदी
          </a>
          <p className="lc-eyebrow mt-9">Episode 11 · 17–23 August 2026</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,5.9rem)] lc-preserved-title">
            हर wearable score
            <br />
            <em className="text-[#6d36cc]">clinical outcome नहीं होता.</em>
          </h1>
          <p className="mt-7 max-w-4xl border-l-2 border-[#8d54ff] pl-5 text-[1rem] leading-8 text-slate-700">
            इस हफ़्ते का signal: sensor movement measure कर सकता है और app उसे
            score में बदल सकता है। लेकिन वही score आपकी health में सचमुच
            meaningful बदलाव दिखाता है या नहीं—यह सिर्फ़ evidence साबित कर सकता
            है।
          </p>
        </div>
      </section>
      <section className="lc-frame py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_255px] lg:gap-14">
          <div>
            <article className="lc-soft-card border-[#8d54ff]/25 p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#f0e9ff] px-3 py-1 text-[.65rem] font-extrabold uppercase tracking-[.1em] text-[#6d36cc]">
                  Under the microscope
                </span>
                <span className="rounded-full border border-[#f99c00]/25 bg-[#fff8e8] px-3 py-1 text-[.65rem] font-extrabold uppercase tracking-[.1em] text-[#a46200]">
                  🟡 Medium privacy risk
                </span>
              </div>
              <h2 className="mt-6 text-[clamp(2.15rem,4.5vw,4.1rem)] lc-preserved-title">
                Wearable score कब real clinical outcome बनता है?
              </h2>
              <p className="mt-6 text-[1rem] leading-8 text-slate-700">
                August में FDA ने digitally derived measures (DDMs) पर paper
                जारी किया। ये sensors, software, connected devices और कुछ
                AI-enabled tools के data से बनते हैं और research में clinical
                outcome assessment, biomarker या broader endpoint का हिस्सा हो
                सकते हैं। FDA का सरल message है: कोई measure सिर्फ़ इसलिए नहीं
                चुनना चाहिए कि device उसे collect कर सकता है। वह patient के लिए
                meaningful health aspect से जुड़ा होना चाहिए, सही population और
                use case के लिए fit होना चाहिए, और purpose के अनुरूप evidence
                होना चाहिए।
              </p>
              <div className="mt-8 grid gap-6 rounded-xl bg-[#f8f4ff] p-6 sm:grid-cols-2">
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                    LifeeCode Take
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    Technology को physical parameter सही measure करना चाहिए,
                    derived score clinical event से meaningfully जुड़ना चाहिए,
                    और outcome person की health में कोई meaningful बदलाव दिखाना
                    चाहिए।
                  </p>
                </div>
                <div>
                  <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                    आपके लिए क्या मतलब है
                  </p>
                  <p className="mt-2 text-[.86rem] leading-6 text-slate-600">
                    नई score screen पर आए तो पूछें: यह number किस चीज़ को
                    measure करने का दावा करता है, क्या यह मेरे जैसे लोगों में
                    test हुआ है, और इससे कौन-सा decision बदलना चाहिए?
                  </p>
                </div>
              </div>
              <section className="mt-9">
                <h3 className="text-[1.65rem] lc-preserved-title">
                  Opportunity और hidden risk
                </h3>
                <p className="mt-3 text-[.94rem] leading-7 text-slate-700">
                  Clinic के बाहर continuously collected data उन changes को दिखा
                  सकता है जो short appointment miss कर दे। इससे trials अधिक
                  accessible हो सकते हैं, safety signals जल्दी पकड़े जा सकते हैं
                  और daily life पर treatment का असर समझा जा सकता है। लेकिन clean
                  dashboard एक inferred score को उसकी असली meaning से बड़ा दिखा
                  सकता है। अगर measure अलग population में बना हो, physiology या
                  movement पर disease के असर को न समझता हो, या patient-important
                  outcome से न जुड़ता हो, तो precision एक illusion बन सकती है।
                </p>
              </section>
              <section className="mt-9">
                <h3 className="text-[1.65rem] lc-preserved-title">
                  आज आप क्या करें
                </h3>
                <p className="mt-3 text-[.94rem] leading-7 text-slate-700">
                  Unclear score को diagnosis या treatment instruction न मानें।
                  उसे personal observation या clinician से बातचीत शुरू करने का
                  point मानें। अगर clinical study में wearable/app इस्तेमाल हो
                  रहा है, तो पूछें: device क्या measure करता है, data कितने समय
                  रखा जाएगा, raw data share होगा या नहीं, और device lost,
                  inaccurate या सही से न पहनने पर क्या होगा।
                </p>
              </section>
              <section className="mt-9">
                <h3 className="text-[1.65rem] lc-preserved-title">
                  Futurist Lens
                </h3>
                <p className="mt-3 text-[.94rem] leading-7 text-slate-700">
                  Next generation health tech हर चीज़ count करने से आगे बढ़ेगा।
                  मजबूत tools वे होंगे जो transparent measurement को meaningful
                  human outcome से जोड़ सकें और उस measurement को संभव बनाने
                  वाले लोगों के data का सम्मान करें।
                </p>
              </section>
              <a
                href="https://www.fda.gov/medical-devices/digital-health-center-excellence/key-considerations-development-and-use-digitally-derived-measures-clinical-investigations-fda-paper"
                target="_blank"
                rel="noreferrer"
                className="lc-text-link mt-4"
              >
                Source: FDA — Digitally Derived Measures for Clinical
                Investigations{" "}
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
            </article>
            <section className="mt-14">
              <p className="lc-eyebrow">इस हफ़्ते के चार और signals</p>
              <div className="mt-5 space-y-4">
                <article className="lc-soft-card border-slate-200 p-6 md:p-7">
                  <div className="flex gap-4">
                    <span className="font-[family-name:var(--font-display)] text-3xl text-[#f99c00]">
                      02
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[1.55rem] lc-preserved-title">
                        FDA अब medical AI से नया सवाल पूछ रहा है: यह आपको कितना
                        direct करता है?
                      </h3>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        18 August को FDA ने generative-AI-enabled medical
                        devices के future regulation पर feedback माँगने वाला
                        discussion paper जारी किया। यह draft या final guidance
                        नहीं है। इसमें risk assessment, premarket evaluation और
                        postmarket monitoring के साथ एक possible framework है:
                        system सिर्फ़ information देता है, action direct करता
                        है, या खुद action लेता है—और अगर output गलत हो तो harm
                        कितना गंभीर हो सकता है।
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            ‘Ask your doctor’ लिख देने से AI recommendation
                            low-risk नहीं हो जाती। देखना यह है कि tool आपको
                            वास्तव में क्या करने को कहता है और गलती का परिणाम
                            क्या होगा।
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist Lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Health-AI को judge करने का बेहतर तरीका हो सकता है:
                            ‘क्या यह AI है?’ नहीं, बल्कि ‘यह action को कितना
                            shape करता है और error कितना गंभीर हो सकता है?’
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.fda.gov/medical-devices/digital-health-center-excellence/considerations-regulation-generative-ai-enabled-medical-devices-discussion-paper-and-request"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-4"
                      >
                        Source: FDA — Generative-AI Medical Devices{" "}
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
                  <div className="flex gap-4">
                    <span className="font-[family-name:var(--font-display)] text-3xl text-[#f99c00]">
                      03
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[1.55rem] lc-preserved-title">
                        Parkinson’s के लिए wearable platform को longitudinal
                        monitoring clearance मिली
                      </h3>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        Empatica की Health Monitoring Platform for Parkinson’s
                        को FDA 510(k) clearance मिली है। यह clinical-grade
                        wearable, patient-facing app, secure cloud
                        infrastructure और clinician portal को जोड़ती है; इसमें
                        bradykinesia, dyskinesia, tremor, sleep, medication
                        compliance और अन्य Parkinson management parameters को
                        समय के साथ track किया जाता है।
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            यह दिखाता है कि wearable wellness tracking से आगे
                            बढ़कर specific condition care को support कर सकता है।
                            फिर भी clearance का अर्थ यह नहीं कि हर metric हर
                            व्यक्ति के लिए सही है या clinical judgment की जगह ले
                            सकता है।
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist Lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            सबसे valuable wearable शायद वह नहीं होगा जो सबको
                            measure करे, बल्कि वह जो एक specific condition को
                            इतने भरोसे से measure करे कि समय के साथ clinical
                            conversation बेहतर हो।
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://practicalneurology.com/news/wearable-platform-cleared-for-parkinson-disease-symptom-monitoring/2488145/"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-4"
                      >
                        Source: Practical Neurology — Empatica Parkinson
                        Platform{" "}
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
                  <div className="flex gap-4">
                    <span className="font-[family-name:var(--font-display)] text-3xl text-[#f99c00]">
                      04
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[1.55rem] lc-preserved-title">
                        Google Research wearable data से biomarker candidates
                        खोजने के लिए AI का उपयोग कर रहा है
                      </h3>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        Google Research का Biomarker Discovery Framework
                        wearable-sensor data से candidate biomarkers prioritize
                        करने वाला multi-agent system है। इसमें hypothesis
                        generation, deterministic statistical analysis,
                        literature review, leakage/overfitting के adversarial
                        checks और human-expert review शामिल हैं। तीन cohorts के
                        9,279 participant-observations में known signals मिले और
                        आगे research के लिए candidates निकले।
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            AI ऐसे patterns पहचान सकता है जो लोग miss कर दें।
                            लेकिन AI-generated association यह proof नहीं है कि
                            कोई metric disease diagnose करता है या metric बदलने
                            से health बेहतर होगी। Candidate biomarker research
                            की शुरुआत है, अंत नहीं।
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist Lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            अगली health-AI wave को ज्यादा claims बनाने के बजाय
                            weak claims जल्दी हटाने, traceability बचाने और
                            uncertainty दिखाने में बेहतर होना चाहिए।
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://research.google/blog/an-ai-tool-for-prioritizing-candidate-biomarkers-from-wearable-sensor-data/"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-4"
                      >
                        Source: Google Research — Biomarker Discovery Framework{" "}
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
                  <div className="flex gap-4">
                    <span className="font-[family-name:var(--font-display)] text-3xl text-[#f99c00]">
                      05
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[1.55rem] lc-preserved-title">
                        Health AI में patient trust कोई soft issue नहीं—safety
                        का हिस्सा है
                      </h3>
                      <p className="mt-4 text-[.88rem] leading-7 text-slate-700">
                        2026 की JMIR systematic review और qualitative
                        meta-synthesis ने कई देशों के 528 patients वाली 25
                        studies देखीं। Privacy, data security, black-box
                        decisions, AI reliability, empathy की कमी, unclear
                        accountability, bias और unequal access जैसी चिंताएँ
                        बार-बार सामने आईं।
                      </p>
                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#00839b]">
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            आपको AI engineer बने बिना यह समझ पाने का अधिकार है
                            कि care में AI इस्तेमाल हो रहा है या नहीं, वह क्या
                            करता है, कौन check करता है और human review कैसे
                            माँगें।
                          </p>
                        </div>
                        <div>
                          <p className="text-[.66rem] font-extrabold uppercase tracking-[.12em] text-[#6d36cc]">
                            Futurist Lens
                          </p>
                          <p className="mt-1.5 text-[.8rem] leading-6 text-slate-600">
                            Best health-AI products trust को branding नहीं
                            मानेंगे; वे consent, clear limits, human checkpoints
                            और appeal/review के visible रास्ते से उसे बनाएँगे।
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.jmir.org/2026/1/e85663/"
                        target="_blank"
                        rel="noreferrer"
                        className="lc-text-link mt-4"
                      >
                        Source: JMIR — Patient Concerns and Health AI{" "}
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
              <p className="lc-eyebrow">Global Watch</p>
              <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] lc-preserved-title">
                India national health-data gateway बना रहा है—consent,
                convenience जितना visible होना चाहिए
              </h2>
              <p className="mt-5 text-[.92rem] leading-7 text-slate-700">
                Ayushman Bharat Digital Mission के आसपास India की digital-health
                initiatives में updated Aarogya Setu 2.0 को personal
                health-record gateway की तरह रखा गया है। Reported features में
                ABHA account management, consent-based record sharing, wearable
                integration, AI health insights, family health management और
                public health services से links शामिल हैं। Interoperability
                patient और clinician दोनों के लिए friction घटा सकती है, पर
                records, benefits, claims, wearable data और AI insights को एक
                बड़े ecosystem में भी ला सकती है। Consent इतना साफ़ होना चाहिए
                कि वह सुविधा के पीछे छिप न जाए।
              </p>
              <a
                href="https://ddindia.co.in/2026/06/health-ministry-launches-aarogya-setu-2-0-rolls-out-new-digital-health-initiatives-to-strengthen-healthcare-ecosystem/"
                target="_blank"
                rel="noreferrer"
                className="lc-text-link mt-4"
              >
                Source: DD India — Aarogya Setu 2.0 and Digital Health
                Initiatives{" "}
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
              className="lucide lucide-shield-check text-[#6d36cc]"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <h2 className="mt-4 text-3xl lc-preserved-title">Privacy Radar</h2>
            <p className="mt-3 text-[.78rem] leading-6 text-slate-600">
              हर signal में data कहाँ जा सकता है, और आप क्या practical check कर
              सकते हैं।
            </p>
            <div className="mt-5 space-y-4 text-[.76rem] leading-5 text-slate-600">
              <div className="border-t border-slate-200 pt-4">
                <b className="text-slate-800">Digital measures · 🟡</b>
                <p className="mt-1">
                  पूछें क्या measure होता है, raw या derived data रखा जाता है या
                  नहीं, और reuse कहाँ हो सकता है।
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <b className="text-slate-800">Generative medical AI · 🔴</b>
                <p className="mt-1">
                  पहचानें tool information देता है, action direct करता है या
                  action लेता है—और output कौन review करता है।
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <b className="text-slate-800">Parkinson monitoring · 🟡</b>
                <p className="mt-1">
                  पूछें symptom/adherence data क्या stored है, कौन देख सकता है
                  और sharing limit हो सकती है या नहीं।
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <b className="text-slate-800">Biomarker discovery · 🔴</b>
                <p className="mt-1">
                  Findings को research candidate मानें; deidentified data link
                  या reuse हो सकता है या नहीं, पूछें।
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <b className="text-slate-800">Patient-facing health AI · 🔴</b>
                <p className="mt-1">
                  AI use, human review और sensitive-data handling के बारे में
                  clear answers माँगें।
                </p>
              </div>
            </div>
            <a
              href="/lifeecode/podcast/"
              className="lc-text-link mt-7 !text-[#6d36cc]"
            >
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
                className="lucide lucide-headphones"
              >
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
              </svg>{" "}
              English Episode 11 सुनें
            </a>
          </aside>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#6d36cc] to-[#8d54ff] py-14 text-white">
        <div className="lc-frame max-w-4xl">
          <p className="text-[.68rem] font-extrabold uppercase tracking-[.14em] text-white/80">
            Remember
          </p>
          <p className="mt-4 text-[clamp(2rem,4vw,3.4rem)] lc-preserved-title">
            A polished score helpful हो सकता है—लेकिन score, personal medical
            advice नहीं होता।
          </p>
          <p className="mt-5 text-sm text-white/85">
            यह educational content है, personal medical advice नहीं। किसी health
            concern के लिए qualified clinician से बात करें।
          </p>
        </div>
      </section>
    </div>
  );
}
