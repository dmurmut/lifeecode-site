# Research and Duplicate Screen — LifeeCode English Episode 22

**Coverage window:** Sunday 1 November – Saturday 7 November 2026 (America/New_York)
**Prepared:** Sunday 8 November 2026 (Run A — Research)
**Branch:** `weekly/2026-11-08`
**Status:** Research complete for Run C. Nothing published, posted, uploaded or merged.

---

## 1. Sequential episode baseline

- Highest English episode listed in `editorial/archive/episode-index.md`: 21 (titles for 13–21 pending from the creator). The runbook fixes this run as **English Episode 22**.
- Last published brief on the site: Episode 12 (`client/src/content/lifeecode/brief-data/12.json`, coverage August 24–30, 2026).

## 2. Archive check and explicit limitations

Screened against:

| Source | What was available |
|---|---|
| `client/src/content/lifeecode/pages.ts` (legacy issues 1–3, 5–9, 11) | Titles, plus signal line for Issue 11 |
| `brief-data/12.json` | Full brief: deep dive + four signals + Global Watch |
| `editorial/archive/approved-pdfs/` | PDFs for Episodes 8, 9, 11, 12 (titles screened) |
| `editorial/episodes/` | Did not exist before this run — no earlier production folders |

**Limitations (stated honestly):**

- **Episodes 13–21 were produced in Manus and are known neither by title nor by content in this repository.** They could not be screened. Any of this week's stories could overlap a theme from those nine weeks (roughly 25 August – 31 October 2026). The creator should eyeball the five stories below against his memory of Episodes 13–21.
- Episodes 1–3, 5–9 and 11 were screened by title only (Issue 11 also by its signal line); Episode 12 was screened in full.
- Episode 4 and Episode 10 (audio-only) are absent from the site data.

## 3. Editorial theme and working title

**Theme:** *The weak link is rarely the gadget.* This week's strongest signals are about the people and systems around health technology — a transcription vendor patients never chose, a tracking pixel on hospital websites, an AI scribe that must wait for a doctor's sign-off, a robot that may be operated from another city — and one genuinely promising smartwatch study that shows why validation and labelling matter.

**Working title (deep dive):** *The Vendor You Never Met: How a Transcription Company's Missing Login Check Exposed 13.3 Million Patients*

## 4. Progressive-versus-cautionary balance

**3 progressive : 2 cautionary** (meets the 3:2 rule).

| # | Story | Lean |
|---|---|---|
| 1 | Perry Johnson companies multistate settlement (Under the Microscope) | Cautionary |
| 2 | Google Research smartwatch hypertension-screening study | Progressive |
| 3 | FDA discussion paper on autonomous and remotely operated medical robots | Progressive |
| 4 | Meta Pixel healthcare litigation — four classes certified | Cautionary |
| 5 | India's NHA review: ambient AI voice scribe with doctor sign-off, AI benchmarking and state cybersecurity leads | Progressive |

## 5. Duplicate-screen table (every candidate considered)

| Candidate | Date | Editorial status | Duplicate result | Reason |
|---|---|---|---|---|
| Perry Johnson & Associates multistate AG settlement (CT, MI, NJ, NY) | Nov 6 | **Selected — Under the Microscope** | No match in screened archive | Third-party vendor / business-associate risk not a lead in Eps 1–3, 5–9, 11, 12. Unscreened 13–21 caveat applies. |
| Google Research: AI-PPG-ACC-HTN hypertension signs from a consumer smartwatch (Nature paper; Google blog) | Nov 5 | **Selected — Signal 2** | Partial thematic adjacency | Ep 11 (wearable scores vs clinical outcomes) and Ep 3 (Apple Watch heart-failure prediction) are wearable-cardiology themes, but none covered blood-pressure screening validated against 24-hour ABPM. Angle is distinct. |
| FDA discussion paper: benefit-risk of robotic devices with autonomy or remote teleoperation (docket FDA-2026-N-13135) | Nov 6 | **Selected — Signal 3** | No match | New topic for the archive. |
| Meta Pixel Healthcare Litigation — four classes certified (N.D. Cal.) | Order Oct 30; reported Nov 2–6 | **Selected — Signal 4 (date flag)** | No match in screened titles | Ep 6 covered Meta AI asking for lab results — different issue (tracking pixels on provider sites). **The order itself is dated Friday 30 October, two days before the window; public reporting fell inside the window.** Flagged for creator judgement. |
| India NHA National Review Meeting (Kolkata): Ambient AI Voice Scribe, BODH benchmarking, state cybersecurity leads | Nov 5–6 | **Selected — Signal 5** | No match | Ep 12 Global Watch covered Australia/Singapore diabetes connectivity; no India item in screened archive. |
| Google Health "Health Guardian" BP-trend features (wellness, not FDA-cleared) | Sep 24 | Context only (folded into Signal 2) | — | Outside window; used only to explain the research-to-product link the Google blog itself names. |
| HAPI FHIR / Smile CDR: four CVEs incl. cross-tenant partition override (CVSS 8.1) | Oct 22 | Rejected | — | Outside window (disclosed 22 Oct). Strong governance story — consider for a future episode if a patch release (HAPI 9.0.0, scheduled 19 Nov) lands. |
| Senate HELP Chair Cassidy draft AI-in-healthcare legislation (feedback by Dec 1) | Oct 29 | Rejected | — | Outside window; primary text (help.senate.gov) could not be opened. Revisit when comments close. |
| Marathon Health breach (~5.7M reported) | Nov 3 | Rejected | — | Primary/secondary pages could not be opened this run; overlaps the vendor/breach theme of the deep dive. |
| EHR vendor incident affecting NY counselling practices | Nov 6 | Rejected | — | Could not be opened; overlaps deep-dive theme. |
| FDA Federal Register classification orders (Nov 4): MCI prognostic software, AI cervical cytology, wearable orthopedic vibration device | Nov 4 | Rejected | — | Federal Register pages could not be opened; these publish classifications for devices authorised earlier (e.g. MCI software De Novo DEN220066), so they are not new events. |
| FDA "Medical Device Cybersecurity" hub update | Nov 5 | Rejected | — | Page update with no stated change; no new action. |
| Datatrue website-privacy study (healthcare sites ignoring Global Privacy Control) | tests Oct 12–13; publication date unverified | Rejected | — | Publication date and primary report not verified. |
| Johns Hopkins Bayview staff upload to public AI platform | notification Oct 22 | Rejected | — | Outside window. |
| MHRA post-market monitoring of AI devices; EHDS stakeholder forum | Oct 6 / Oct 13 | Rejected as Global Watch | — | Outside window. |
| Nature news feature on smartwatch data overload (d41586-026-03203-y) | unknown | Rejected | — | Page could not be opened; date unverified. |

## 6. Selected main stories — evidence/status lines

| # | Story | Evidence / status line (use this wording near the first claim) | Primary source read |
|---|---|---|---|
| 1 | **Under the Microscope — The Vendor You Never Met.** Four state attorneys general settle with five Perry Johnson companies over the 2023 breach of transcription and coding data on 13.3 million people. | **State enforcement settlement** (not a court finding of liability; not a HIPAA/OCR action). | Connecticut AG press release, 6 Nov 2026 [S1] |
| 2 | **A smartwatch study screened for high blood pressure about as well as an office check — in a research setting.** | **Peer-reviewed research (Nature) described by the company's own research blog; early feasibility, not a product claim, not FDA-cleared.** Nature full text not opened this run. | Google Research blog, 5 Nov 2026 [S2]; Google Health Guardian post, 24 Sep 2026 [S3] for context |
| 3 | **FDA asks how to judge robots that act on their own — or are steered from miles away.** | **FDA discussion paper and request for feedback — explicitly not draft or final guidance.** Comments due 5 Jan 2027. | FDA CDRH page, 6 Nov 2026 [S4]; CDRH News listing [S5] |
| 4 | **A judge lets millions of Facebook users sue Meta together over hospital-website tracking.** | **Class certification ruling — no ruling on whether Meta broke any law; Meta says it will appeal.** Order dated 30 Oct; reported 2–6 Nov. | HIPAA Journal, 6 Nov [S6]; Cohen Milstein / Law360, 2 Nov [S7]; Daily Journal, 3 Nov [S8]. Court order not located. |
| 5 | **India tests an AI scribe that must wait for a doctor's approval before anything reaches your health record.** | **Government review meeting and demonstrations (pilot/demo stage); no rollout dates or performance data published.** | ANI, 6 Nov [S9]; Digital Health News, 6 Nov [S10]. No PIB/NHA release located. |

### Key verified facts by story

**1. Perry Johnson companies (deep dive)** — all from [S1] unless noted
- Announced 6 Nov 2026 by Connecticut AG William Tong with the Michigan and New Jersey AGs; New York AG Letitia James also announced it (per [S11]; NY release itself could not be opened).
- Companies: Perry Johnson & Associates, Inc. (PJ&A), Perry Johnson, Inc. (PJI), PJ&A Coding, PJ&A Radiology, and Medical Transcription and Coding, Inc. PJ&A "provided services such as coding, billing, and recording to health care organizations."
- Mechanism: March 2023, hackers used a PJ&A Coding employee's credentials; PJ&A "did not require users to use multi-factor authentication when remotely accessing" its systems; attackers "harvested passwords and accessed unencrypted files"; PJI's software "identified and recorded the hacker's activity" but "was not properly configured to provide alerts to security personnel"; PJ&A learned of the breach "when hackers contacted them two months later."
- Data: names, dates of birth, addresses, Social Security numbers, hospital account numbers, diagnoses, insurance information, and clinical information from transcription files (lab and diagnostic results, medication names).
- Scale: more than 13.3 million people nationwide; ~107,960 in Connecticut; ~4.2 million New Yorkers [S11].
- Money: at least $300,000 paid now; additional $9.7 million payable only if the companies fail the terms ("up to $10 million").
- Required reforms: comprehensive information-security program and incident response; multi-factor authentication, password management, encryption, asset management; annual HIPAA-consistent risk assessments; policies for collection, use, retention and disposal of health information.
- Not stated in the primary: which hospitals were clients. **Do not name clients in the brief.**

**2. Google smartwatch hypertension study** — [S2]
- Google Research, with Beth Israel Deaconess Medical Center and Harvard Medical School. Model "AI-PPG-ACC-HTN" uses photoplethysmography (PPG) and accelerometer signals from "a consumer smartwatch" (model not named), plus height.
- Pre-training: 492,347 hours of sensor data from 2,109 consenting participants.
- Validation: prospective, multi-centre study at five US sites, 196 participants without known cardiovascular disease and not on BP medication; reference standard 24-hour ambulatory BP monitoring (ABPM).
- Initial screening: smartwatch sensitivity 65.8%, specificity 90.0%, PPV 80.6%; office screening sensitivity 55.3%, PPV 77.8%.
- Confirmatory setting (n = 48 with elevated office BP): smartwatch sensitivity 78.4%, specificity 90.9%; repeat office BP 67.6% / 63.6%; multi-day home monitoring 89.2% / 81.8%.
- Status: "early feasibility research"; "not indicative of any existing or upcoming commercial product feature"; not intended to "replace standard clinical arm cuffs or provide a definitive standalone medical diagnosis." The blog says the research "helped inform" the blood-pressure trends feature in the Google Health app.
- Context [S3]: Google's BP-trends feature (Pixel Watch 3–5) is labelled "for general wellness and informational purposes only" and "not a prescreener for … hypertension."
- **Gaps:** Nature paper (s41586-026-11336-3) not opened — no confidence intervals, AUC, or demographic breakdown verified. Small validation sample (196; 48 in confirmatory arm).

**3. FDA robotics discussion paper** — [S4], [S5]
- Posted 6 Nov 2026: "Evaluating Benefit-Risk in Robotic Medical Devices with Autonomous or Remote Teleoperation Capabilities: Discussion Paper and Request for Feedback."
- Covers robotic devices performing diagnostic, therapeutic or rehabilitative tasks with some autonomy and/or remote teleoperation; topics: terminology, benefit-risk for autonomy, benefit-risk for teleoperation, risk mitigations.
- Status: "does not represent draft or final guidance"; feedback via docket FDA-2026-N-13135 until 5 Jan 2027.
- **Gap:** the full PDF (fda.gov/media/196129) was not opened; describe topics only, not FDA positions.

**4. Meta Pixel class certification** — [S6], [S7], [S8]
- In re Meta Pixel Healthcare Litigation, N.D. Cal., Judge William H. Orrick; certification order 30 Oct 2026.
- Four classes of Facebook users (class period from 17 June 2018): patient-status button clicks; patient health information (doctor, condition, treatment); prescription-drug information; device intrusion (_fbp cookie).
- Plaintiffs identified "more than 660 hospital systems and medical providers" that installed the Pixel; allege interception and transmission of health information without consent, used for advertising.
- Judge: "Meta's opposition confuses complexity — which undoubtedly this action presents — and individualized questions." Merits not decided; Meta "plans to appeal."
- **Gaps:** order text not located; class sizes not reported; claim-by-class mapping unconfirmed. All sources secondary.

**5. India NHA review** — [S9], [S10]
- NHA two-day National Review Meeting on AB PM-JAY and ABDM, Kolkata, 5–6 Nov 2026, 15 sessions with States/UTs.
- NHA Ambient AI Voice Scribe demo: converts doctor–patient conversations into structured records in multiple Indian languages; records "reviewed and approved by doctors before being linked to ABHA."
- Sandbox 2.0 with agentic AI: an ABDM Milestone 1 integration for ABHA creation completed in real time.
- BODH (IISc/TANUH) AI benchmarking: states "encouraged to … incorporate BODH-based benchmarking into their healthcare AI procurement processes."
- Cybersecurity: threats named — phishing, fraudulent URLs/apps, credential leaks, third-party vulnerabilities; states advised to "designate dedicated cybersecurity leads" and run "regular security audits of applications and APIs."
- Tripura: all government hospitals to go paperless from 10 Nov 2026 [S10].
- National scale context (older, July 2026 PIB backgrounder [S12]): "over 104 crore health records linked to over 93 crore ABHA accounts"; "Records are only shared within the ABDM network when the patient consents."
- **Gaps:** no government (PIB/NHA) release for the meeting located; languages for the scribe not listed; no accuracy data.

## 7. Global Watch decision

**No standalone Global Watch item this week.** The strongest international, in-window, non-duplicative candidate — India's NHA review with its doctor-approved AI scribe — is carried as main Signal 5, because the US slate did not yield a fifth verified in-window story. The other international candidates (UK MHRA post-market AI monitoring, 6 Oct; EU EHDS stakeholder forum, 13 Oct) fall outside the window. Adding a weak or out-of-window sixth item would break the rule against padding. The brief should say this in one or two sentences.

*Alternative for the creator:* move India to Global Watch and replace Signal 5 with the Senate HELP AI draft (29 Oct, outside window) — not recommended.

## 8. Editorial safeguards (for Run C)

- **Deep dive:** call it a "settlement" with state attorneys general; say "the attorneys general say" for the security failures. Do not say the companies "admitted" anything (the release doesn't say so). Make clear only $300,000 is paid now. Don't name hospital clients. Don't extend the failure mechanism to all transcription vendors — the general lesson is about vendor oversight, framed as a question patients can ask.
- **Smartwatch BP:** "a study found / researchers reported"; always pair numbers with "in a 196-person research study"; state that Google itself says it is not a product feature and not a diagnosis; never say a watch "detects hypertension" or "measures blood pressure." Note Google's own wellness labelling of BP trends. No "rivals a doctor" headline language.
- **FDA robotics:** "FDA published a discussion paper and asked for feedback"; never "FDA approved/regulates/sets rules for" autonomous robots.
- **Meta Pixel:** "a judge certified classes"; "plaintiffs allege"; "no ruling on whether Meta broke the law"; mention the appeal. State the 30 October order date explicitly.
- **India:** "demonstrated", "reviewed", "encouraged"; no claims of nationwide rollout, accuracy, or adoption. Clarify the scribe output is approved by a doctor before linking.
- Medical-information notice required in brief, scripts and metadata.
- Privacy Radar: deep-dive High; Meta Pixel High; India scribe Medium; Google BP Medium; FDA robotics Low–Medium (cybersecurity of teleoperation links).

## 9. Complete source record

| ID | Source (opened) | Date | Claim(s) supported |
|---|---|---|---|
| S1 | Connecticut Office of the Attorney General — "Attorney General Tong Secures Settlement from Companies That Failed to Protect Private Medical Data" — https://portal.ct.gov/ag/press-releases/2026-press-releases/attorney-general-tong-secures-settlement-from-companies-that-failed-to-protect-private-medical-data | 6 Nov 2026 | All Story 1 facts: companies, MFA failure, unencrypted files, alerting failure, 2-month discovery, data types, 13.3M / ~107,960 CT, $300K + $9.7M contingent, required reforms, CT/MI/NJ coalition |
| S11 | FingerLakes1 — "Medical data breach settlement requires reforms after 4.2 million New Yorkers affected" — https://www.fingerlakes1.com/2026/11/06/medical-data-breach-settlement-requires-reforms-after-4-2-million-new-yorkers-affected/ | 6 Nov 2026 | NY AG participation; ~4.2M New Yorkers; NY receives $100,000 (secondary; NY AG release could not be opened) |
| S2 | Google Research blog — "Detecting signs of hypertension using wearable sensors" — https://research.google/blog/detecting-signs-of-hypertension-using-wearable-sensors/ | 5 Nov 2026 | All Story 2 study facts, status statements, link to Health Guardian feature |
| S3 | Google blog — "Our new health and safety tools are live in the Google Health app" — https://blog.google/products-and-platforms/products/google-health/health-guardian-features-live/ | 24 Sep 2026 | BP trends on Pixel Watch 3–5; wellness-only labelling; "not a prescreener" |
| — | Nature paper "Opportunistically Detecting Signs of Hypertension on a Consumer Smartwatch" — https://www.nature.com/articles/s41586-026-11336-3 | not verified | **Not opened (site refused automated access).** Cite in brief only as the paper the blog describes; Run C should try again. |
| S4 | FDA — "Evaluating Benefit-Risk in Robotic Medical Devices with Autonomous or Remote Teleoperation Capabilities: Discussion Paper and Request for Feedback" — https://www.fda.gov/medical-devices/robotic-medical-devices/evaluating-benefit-risk-robotic-medical-devices-autonomous-or-remote-teleoperation-capabilities | 6 Nov 2026 | Story 3: scope, topics, not-guidance status, docket, 5 Jan 2027 deadline |
| S5 | FDA — CDRH New: News and Updates — https://www.fda.gov/medical-devices/medical-devices-news-and-events/cdrh-new-news-and-updates | listing current as of 6 Nov 2026 | Dates of Story 3 and rejected FDA candidates |
| S6 | HIPAA Journal — "Judge Certifies Classes in Meta Platforms Healthcare Data Privacy Litigation" — https://www.hipaajournal.com/judge-certifies-classes-meta-healthcare-data-privacy-litigation/ | 6 Nov 2026 | Order date 30 Oct; four classes; 660+ providers; claims; merits not decided; Meta to appeal |
| S7 | Cohen Milstein (Law360 summary) — https://www.cohenmilstein.com/meta-users-win-class-cert-in-pixel-healthcare-data-suit/ | 2 Nov 2026 | Judge Orrick quote; class period |
| S8 | Daily Journal — https://dailyjournal.com/article/395827-judge-certifies-4-classes-in-meta-health-data-privacy-lawsuit | 3 Nov 2026 | Four classes; common questions finding (lede only; paywalled) |
| S9 | ANI — "Health Ministry reviews AB PM-JAY, ABDM with states; charts roadmap…" — https://aninews.in/news/national/general-news/health-ministry-reviews-ab-pm-jay-abdm-with-states-charts-roadmap-for-stronger-implementation20261106193908/ | 6 Nov 2026 | Story 5: meeting, AI scribe with doctor approval, Sandbox 2.0, BODH, cybersecurity leads, NHA CEO quote |
| S10 | Digital Health News — "Tripura Showcases Digital Healthcare Model at National ABDM, AB-PMJAY Review Meeting" — https://www.digitalhealthnews.com/tripura-showcases-digital-healthcare-model-at-national-abdm-ab-pmjay-review-meeting | 6 Nov 2026 | Meeting dates/location; Model Digital Health Facility Framework; Tripura paperless from 10 Nov |
| S12 | PIB Backgrounder — "Ayushman Bharat Digital Mission" — https://www.pib.gov.in/PressReleasePage.aspx?PRID=2281466&reg=3&lang=1 | 6 Jul 2026 | Background only: 104 crore records / 93 crore ABHA; consent-based sharing; no central server |
| S13 | Openwall oss-security — HAPI FHIR advisory — https://openwall.com/lists/oss-security/2026/10/22/34 | 22 Oct 2026 | Rejected candidate (out of window) |
| S14 | AACOM — "Senate HELP Committee Chairman Releases Draft Legislation on AI in Healthcare" — https://www.aacom.org/news-reports/news/2026/11/02/senate-help-committee-chairman-releases-draft-legislation-on-ai-in-healthcare | 2 Nov 2026 | Rejected candidate: draft released 29 Oct; feedback by 1 Dec |

**Sources that could not be opened this run** (automated access refused or permission not available in an unattended run): Nature paper and Nature news feature; NY AG release; FDA press-announcements page; Federal Register orders; HIPAA Journal articles on HAPI FHIR, Marathon Health and the Senate AI bill; help.senate.gov; WHO India. None of these is relied on for a claim above.
