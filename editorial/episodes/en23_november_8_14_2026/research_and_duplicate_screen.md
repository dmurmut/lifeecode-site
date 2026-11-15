# Research and Duplicate Screen — LifeeCode English Episode 23

**Coverage window:** Sunday 8 November – Saturday 14 November 2026 (America/New_York)
**Prepared:** Sunday 15 November 2026 (Run A — Research)
**Branch:** `weekly/2026-11-15`
**Status:** Research complete for Run C. Nothing published, posted, uploaded or merged.

---

## 1. Sequential episode baseline

- `main`'s `editorial/archive/episode-index.md` still lists English 22 / Hindi 20 as "next", because last week's branch `weekly/2026-11-08` (English Episode 22 and Hindi Episode 20) **has not been merged into `main`**. That branch holds a complete English 22 package (`brief-data/22.json`) and Hindi 20 package. This run therefore numbers the new work **English Episode 23** and **Hindi Episode 21**, and the index on this branch carries the Episode 22 / Hindi 20 rows from last week's branch so the baseline is not lost.
- Last brief published on the site: Episode 12 (`brief-data/12.json`, coverage 24–30 August 2026). Episode 22 is awaiting the creator's review on `weekly/2026-11-08`.

## 2. Archive check and explicit limitations

Screened against:

| Source | What was available |
|---|---|
| `client/src/content/lifeecode/pages.ts` (legacy issues 1–3, 5–9, 11) | Titles (Issue 11 also its signal line) |
| `brief-data/12.json` | Full brief |
| `weekly/2026-11-08` branch — English 22 `research_and_duplicate_screen.md`, Hindi 20 `research_notes.md` | Full research for both (deep dive, four signals, rejected candidates) |
| `editorial/archive/episode-index.md` | Episode list; Hindi titles for 1–2, 8, 9, 11 via last week's notes |

**Limitations (stated honestly):**

- **English Episodes 13–21 and Hindi Episodes 11–19 were produced in Manus and are not in this repository by title or content.** They could not be screened. Any story below could overlap a theme from late August–October 2026. The creator should check the five stories against his memory of those episodes.
- Legacy Episodes 1–3, 5–9 and 11 were screened by title only; Episode 12 and Episode 22 were screened in full.

## 3. Editorial theme and working title

**Theme:** *Who is the AI — or the app — really working for?* This week a telehealth company is accused by the FTC and seven states of feeding customers' treatment categories to advertising platforms while promising privacy; a peer-reviewed experiment shows drug ads can tilt consumer chatbots' treatment picks; and three research signals show health AI and wearables doing promising work **when a human checks the result or the evidence is labelled honestly** — a smartwatch ECG that improves when repeated, AI-drafted heart-scan reports that cardiologists still sign, and a smart-ring study linking irregular sleep with mental-health symptoms.

**Working title (deep dive):** *"Private and Secure" — Then Sent to Meta? The FTC and Seven States vs. Hims & Hers*

## 4. Progressive-versus-cautionary balance

**3 progressive : 2 cautionary** (meets the rule).

| # | Story | Lean |
|---|---|---|
| 1 | FTC + seven states amended complaint against Hims & Hers (Under the Microscope) | Cautionary |
| 2 | Smartwatch ECG + AI flags weak heart pumping; repeating the test cut false alarms (AHA late-breaker) | Progressive |
| 3 | AI-drafted echocardiogram reports non-inferior to human drafts, cardiologists' time cut ~46% (AHA late-breaker RCT) | Progressive |
| 4 | Drug ads sway consumer AI chatbots' treatment recommendations (Lancet Digital Health) | Cautionary |
| 5 | Smart-ring sleep regularity associated with depression and anxiety symptoms (Scientific Reports, TemPredict) | Progressive |

## 5. Duplicate-screen table (every candidate considered)

| Candidate | Date | Editorial status | Duplicate result | Reason |
|---|---|---|---|---|
| FTC + AZ, FL, NE, OH, WI join FTC/CA/UT suit vs Hims & Hers (amended complaint, privacy + billing) | 10 Nov | **Selected — Under the Microscope** | Adjacent, not duplicate | Ep 22 Signal 4 covered Meta Pixel on *hospital* sites (class certification, defendant Meta). This is a *telehealth company* sued by regulators over its own sharing and promises — different defendant, actor, legal theory and evidence (complaint read in full). Ep 6 (Meta AI asking for lab results) is unrelated. Run C should acknowledge the Ep 22 link in one line ("last week… this week the regulator is suing the health company itself"). |
| Smartwatch AI-ECG for left-ventricular systolic dysfunction (Apple Watch + Galaxy Watch; AHA LBS abstract 27869) | 9 Nov | **Selected — Signal 2** | Partial thematic adjacency | Ep 3 (Apple Watch heart-failure prediction) and Ep 22 Signal 2 (smartwatch BP) are wearable-cardiology. This differs: ECG-based detection of weak pumping, cross-device disagreement (9%), and repeat-testing to cut false alarms. Avoid "your watch detects heart failure" framing that would echo Ep 3. |
| AI-drafted echocardiogram reports RCT (Kaiser Permanente; AHA abstract 28202) | 9 Nov | **Selected — Signal 3** | No match | Clinician-in-the-loop AI drafting not covered in screened archive. Echoes Ep 22 Signal 5 (India scribe with doctor sign-off) only in the human-approval principle — a useful callback, not a repeat. |
| Lancet Digital Health: pharmaceutical ads and consumer-AI drug recommendations (Mount Sinai) | 11 Nov | **Selected — Signal 4** | No match | Ad influence on health chatbots is new to the archive. Ep 6/legacy Copilot Health items are about AI health assistants' data, not ad bias. |
| Scientific Reports: wearable sleep regularity and mental-health symptoms (TemPredict, Oura ring) | 12–13 Nov | **Selected — Signal 5** | Partial adjacency | Hindi Ep 1 (sleep-score accuracy) and Ep 11 (wearable score ≠ clinical outcome) are adjacent. Angle here is regularity vs mental-health *association*, with an industry-funding disclosure — use Ep 11's principle as a callback. |
| India DPDP: Consent Manager registration opens (Rule 4 in force 13 Nov; portal launched 14 Nov) | 13–14 Nov | **Selected — Global Watch** | No match | Ep 22 India item was ABDM/NHA review. This is the national data-protection law's first operational phase. |
| Cordio HearO voice-app heart-failure prediction (DETECT-HF, AHA) | 8–9 Nov | Reserve | No match | Company press release only; no specificity/follow-up data. Alternate for Signal 2/3 if needed. |
| Meta reproductive-health Pixel ruling — judge finds users consented (MLex) | reported 13 Nov | Rejected (pending) | Adjacent to Ep 22 S4 | Court, judge, case and ruling date not verified (paywalled excerpt only). Strong counterpoint for a future episode once the order is pulled. |
| Dorsata (women's-health EMR) breach via Metabase zero-day, 58,249 | 13 Nov | Rejected — alternate cautionary | Overlaps Ep 22 vendor theme | Secondary source only (HIPAA Journal); no CVE. Kept as alternate for Signal 4. |
| Premise Health insider breach grows to 416,700+; Enara Health app breach | 11 Nov | Rejected | Overlaps breach theme | Secondary only; breach-count updates. |
| Amplifon (hearing care) breach | TX filing 6 Nov; reported 9 Nov | Rejected | — | Filing before window; victim count disputed. |
| Central Ohio Primary Care Physicians breach, 1.35M | updated 12 Nov (orig. 20 Oct) | Rejected | — | Original event outside window. |
| ONC/CMS electronic prior-authorization FHIR testing initiative | 12 Nov | Rejected | — | Primary healthit.gov page could not be opened; low consumer relevance. |
| Cassidy PATIENT AI Act discussion draft — FDA software titles (analysis 8 Nov) | draft pre-window | Rejected | Ep 22 rejected it too | Draft released outside window; feedback due 1 Dec — revisit then. |
| AI-estimated "heart age" from echo (Mayo, ESC Digital & AI Summit) | 13 Nov | Rejected | — | Secondary only; small (568). |
| PERISCOPE ML mortality model after STEMI (ESC summit) | 13 Nov | Rejected | — | Secondary only; clinician tool, low consumer relevance. |
| Austria HerzMobil HF telemonitoring real-world data (ESC summit) | 13 Nov | Rejected / Global Watch alternate | — | No control group; weaker than India for strategic value. |
| WHO AFRO Nairobi Health Data Action Agenda | 12 Nov | Global Watch alternate | — | Credible but regional and abstract for this audience. |
| WHO/OECD TArGET Health tool launch | 10 Nov | Rejected | — | Page names no technologies or figures. |
| Cornell EchoMotion smartwatch full-body tracking | release 11 Nov; paper 13 Oct | Rejected | — | Paper outside window; not health-specific. |
| FDA CDRH news 8–14 Nov | — | None usable | — | Items were IVD guidance, early alerts, a kit correction, IHC reclassification — no digital/wearable/cyber action. |
| HHS OCR HIPAA agreements | — | None found | — | Agreements page shows nothing in November; hhs.gov press room could not be opened, so a 12–14 Nov OCR release cannot be fully excluded. |
| Consumer-wearable FDA clearances | — | None in window | — | Galaxy Ring apnea (announced 3 Nov, cleared July), PulseAI (5 Nov), RingConn (Oct) all outside. |
| "ChatGPT Health chats used for training from 19 Nov" | — | Rejected | — | Unverifiable; source blocked and not supported by OpenAI help page. |

## 6. Selected main stories — evidence/status lines

| # | Story | Evidence / status line (put near the first claim) | Primary source read |
|---|---|---|---|
| 1 | **Under the Microscope — "Private and Secure" — Then Sent to Meta?** FTC and now seven states allege Hims & Hers shared customers' treatment categories with ad platforms while promising privacy, and used confusing billing and cancellation. | **Federal and state enforcement lawsuit — allegations in an amended complaint; no court finding; Hims says it will defend itself.** | FTC release 10 Nov [S1]; First Amended Complaint ECF 67 [S2]; original complaint 29 Jul [S3] |
| 2 | **A smartwatch ECG plus AI flagged weak heart pumping — and asking twice cut false alarms in half.** | **Conference late-breaking abstract (not peer-reviewed); single South Korean hospital, referred patients; presenter is CMO of the company that built the AI; not an FDA-cleared feature.** | AHA newsroom 9 Nov [S4] |
| 3 | **AI drafts of heart-ultrasound reports needed edits about as often as human drafts — and cardiologists still signed every one.** | **Randomized, blinded non-inferiority study presented as a conference abstract (not peer-reviewed); no patient-outcome data.** | AHA newsroom 9 Nov [S5] |
| 4 | **Show a chatbot a drug ad and it is more likely to recommend that drug.** | **Peer-reviewed controlled experiment (Lancet Digital Health); simulated cases, no real prescribing or patient outcomes.** Journal page not opened. | Mount Sinai release via News-Medical 11 Nov [S6]; Medical Economics [S7] |
| 5 | **Irregular sleep tracked by a smart ring was associated with more depression and anxiety symptoms.** | **Peer-reviewed cross-sectional analysis of a cohort (Scientific Reports); association only, self-reported symptoms; funded in part by Oura, with author ties to Oura.** Journal page not opened. | Neuroscience News quoting abstract [S8]; Bioengineer [S9] |

### Key verified facts by story

**1. Hims & Hers (deep dive)** — from [S1]–[S3]
- 10 Nov 2026: Arizona, Florida, Nebraska, Ohio and Wisconsin joined the FTC, California (through Los Angeles County Counsel) and Utah. First Amended Complaint, N.D. Cal. case 3:26-cv-07871-VC, ECF 67; Commission vote 2-0 [S1][S2]. Original complaint filed 29 July 2026 by FTC, California, Utah [S3].
- Promises alleged (¶¶74–77): "medical records and sensitive information are only accessed by the medical providers managing your care"; "100% online, private, and secure process"; "discreet", "totally private" [S2].
- Meta (¶81): about 14 million email addresses uploaded Sept 2020–June 2023 for Custom Audiences; about 10 million matched to Meta users; emails also used for 90 Lookalike Audiences (Mar 2020–Sept 2023). Audience names quoted include "All Time Hims ED Purchasers", "Churned_ED_Customers", "Hers Apollo Signups"; internal codewords: Apollo = mental health, Zeus = erectile dysfunction, Atlas = premature ejaculation [S2].
- Pixel/Conversions API (¶¶83–85): "Complete Registration" and "Purchase" events sent about 8 million times, with product_bucket/product_type parameters (e.g., "M-R" for mental health) [S2].
- Snap (¶88): five email lists totalling over 1 million, including "All_Time_Hers_Psych_Signups". Other tracking partners named include Google Ads, Microsoft Bing, TikTok, Pinterest, Reddit, X, Criteo, The Trade Desk and others [S2].
- Period: sharing "through at least May 2024" (¶78). **Hashing is not mentioned — do not claim either way.**
- Billing (¶¶38–66): checkout button "Pay $0 today"/"Due Now - $0" with auto-renewal terms in small low-contrast text below; refills allegedly charged ~10 days early; cancel option labelled "Add/remove items from order" with 3–10 survey screens. "$147 for a 3-month supply" is a **consumer complaint quoted in the complaint**, not an alleged list price.
- Claims: FTC Act §5 (Counts I–III), ROSCA (IV–VI), California FAL/UCL, Utah CSPA, and the five new states' consumer-protection laws (X–XVI). **The FTC Health Breach Notification Rule is not pleaded.**
- Relief sought: permanent injunction, monetary relief (refunds/restitution), state civil penalties, fees and costs. No penalty amount set.
- Response: Hims says it will "vigorously defend" (via Reuters as cited by PPC Land [S10]; Reuters not opened — attribute carefully).

**2. Smartwatch AI-ECG** — [S4]
- Released 9 Nov 2026, AHA Scientific Sessions (Chicago, 6–9 Nov), Late-Breaking Science abstract 27869. The release does **not** use the name "WATCH-LV".
- Clinic group: 2,211 adults already scheduled for echocardiography recorded 30-second ECGs on both an Apple Watch and a Galaxy Watch; AI performance was similar across watches, but 200 people (9%) got different results on the two devices.
- Home group: 146 outpatients; repeat-testing analysis on 108 (70 without, 38 with LVSD). Requiring a positive on 2 of 3 days cut false positives from 18 to 9 of 70, while catching 31 of 38 cases vs 33 with a single positive day.
- 81% of consistently positive participants had LVSD; about 6% of consistently negative had it; mixed results (49% of participants) → 40% had LVSD.
- Presenter: Hak Seung Lee, MD, chief medical officer of Medical AI Co. (developer of the model); Sejong Medical Research Institute, Incheon. **Conflict of interest to disclose.**
- Limits: single hospital, referred patients, exploratory subgroup, <3% poor-quality ECGs excluded, reminders given at home, no outcome data, not peer-reviewed. No AUC/sensitivity/specificity or FDA status given.

**3. AI-drafted echo reports** — [S5]
- Released 9 Nov 2026, AHA abstract 28202; Kaiser Permanente Northern California; co-senior author/presenter Keane K. Lee, MD.
- Randomized, blinded comparison: 1,200 echocardiograms from 21 centres (recorded over two weeks in March 2025); AI, a sonographer and a cardiologist drafted preliminary reports; 9 sonographers, 20 cardiologists.
- Substantial edits needed: 50.6% of AI drafts vs 49.7% of human drafts — met non-inferiority. Interpretation time 4.6 vs 8.5 minutes (~46% less; "about 50%" is the release headline rounding).
- Cardiologists reviewed and finalised every report and remained responsible.
- Limits: no patient outcomes, awareness of being studied, not tested at scale, not peer-reviewed. Any direct quote must be re-checked against the page by Run C.

**4. Drug ads and consumer AI** — [S6], [S7]
- "Ad-verse Effects: Pharmaceutical Advertising and Drug Recommendations by Consumer-Facing AI in a Controlled Study", Lancet Digital Health, published 11 Nov 2026; DOI 10.1016/j.landig.2026.101114; Mahmud Omar (first author), Girish Nadkarni (senior), Icahn School of Medicine at Mount Sinai.
- 12 consumer-facing models (from Google, OpenAI, Anthropic and others — individual models not named in what was read), 33 physician-written cases, with or without a clearly labelled real drug advertisement; 258,559 responses.
- Advertised drug chosen 47.6% with ad vs 35% without; in four cases from 0% to 100%. In a free-text subset, models mentioned the ad 29.9% of the time.
- Ads did not clearly increase recommendations for unsupported supplements or clearly suboptimal drugs. No prescriptions, patient decisions or outcomes studied. Funding: in part NCATS/NIH (per Medical Economics).
- **Gap:** journal page not opened; numbers consistent across two secondary sources reproducing the Mount Sinai release.

**5. Smart-ring sleep regularity** — [S8], [S9]
- "Associations between sleep regularity indexed from wearable device data and mental health symptoms in the TemPredict longitudinal cohort study", Scientific Reports, ~12–13 Nov 2026; UCSF/UC San Diego (Soltani … Smarr, Mason).
- n = 22,894; average 154 days of data; mean age 46; Oura ring (per Neuroscience News). Design described in the abstract as **cross-sectional**.
- Sleep Regularity Index: depression 83.74 (minimal) vs 74.93 (severe); anxiety 83.67 vs 78.94; loneliness 83.75 vs 81.79; p<.0001.
- Funding: MTEC/US Army (DoD), #StartSmall Foundation and Oura Health Oy; authors with consulting ties/financial interest in Oura. **Disclose.**
- Limits: association only, direction unknown, self-reported symptoms, cohort originally recruited for COVID-19 detection.
- **Gap:** nature.com page blocked; publication date not confirmed on the journal site (12 vs 13 Nov — both in window).

## 7. Global Watch decision

**Include one Global Watch item: India's DPDP Consent Manager registration opens.** Strategic value: the world's most populous country switched on the first operational layer of its national data-protection law, with a six-month countdown to 13 May 2027, when people's data rights, breach-notification duties and Board penalties begin. It is in window, credible and not a repeat (Ep 22's India item was the ABDM review).

Verified facts:
- DPDP Rules, 2025 (G.S.R. 846(E), 13 Nov 2025) Rule 1: Rule 4 (consent managers) in force one year after publication (→13 Nov 2026); Rules 3, 5–16, 22–23 eighteen months after (→~13 May 2027) [S11].
- First Schedule Part A: net worth not less than ₹2 crore; interoperable platform; Part B: the consent manager must not be able to read the personal data, acts in a fiduciary capacity, keeps records ≥7 years [S11]. Act s.2(g)/6(7)–(9): "single point of contact", "accountable to the Data Principal" [S12].
- MeitY announced on 14 Nov that eligible Indian companies can apply through dpbi.gov.in; MeitY Secretary S Krishnan launched the portal [S13][S14][S15].

**Status / safeguards:** Launch details come from wire copies of a MeitY release (ANI/IANS, Inc42); **no PIB or dpbi.gov.in page could be opened.** No official statement links DPDP consent managers to health data or ABDM; ABDM's own "Health Information Exchange and Consent Manager" is a separate NHA system under ABDM policy — **do not conflate.** DPDP has no special "sensitive health data" category. The health link that *is* documented: Fourth Schedule Part A exempts clinical establishments and healthcare professionals from certain children's-data rules when providing health services [S11]. Penalty ceilings (e.g., up to ₹250 crore for security-safeguard failures) apply only from May 2027 and are maximums.

## 8. Editorial safeguards (for Run C)

- **Hims & Hers:** "the FTC and seven states allege"; "according to the complaint"; never "Hims sold/leaked data" or "Hims violated HIPAA". Not a breach and not an HBNR case. Say the data allegedly shared included email addresses and purchase/registration events tagged by treatment category — not medical records. Do not claim hashing either way. Mention Hims says it will defend. Make the consumer lesson about reading telehealth privacy terms and ad-tracking settings — framed as questions, not accusations against telehealth generally.
- **Smartwatch ECG:** "a study presented at a conference found"; "flagged" not "diagnosed"; always pair with "in people already referred for a heart scan at one Korean hospital"; disclose the presenter's company role; never say the feature is available on watches. The 9% device disagreement is a core point.
- **Echo AI:** "non-inferior" = "needed edits about as often"; emphasise cardiologists finalised every report; no claim of better care or outcomes.
- **Drug ads:** "in a controlled experiment"; "simulated cases"; do not name specific models as biased (they weren't named in what was read); state that ads did not clearly push unsafe picks.
- **Sleep regularity:** "was associated with"; never "irregular sleep causes depression"; disclose Oura funding; no mental-health advice — include a gentle line that anyone worried about mood should talk to a professional.
- **Global Watch:** "registration opened"; rights and penalties "from May 2027"; no ABDM conflation.
- Medical-information notice required in brief, scripts and metadata.
- Suggested Privacy Radar: Hims — High; drug-ad chatbots — Medium (influence/transparency, conversation data held by AI providers); smartwatch ECG — Medium; sleep ring — Medium (continuous sleep data held by ring maker/researchers); echo AI — Low–Medium (data stays within health system).

## 9. Complete source record

| ID | Source | Date | Claim(s) supported | Opened? |
|---|---|---|---|---|
| S1 | FTC — "Five States Join FTC Lawsuit Alleging Hims & Hers Engaged in Deceptive, Unlawful Privacy Practices" — https://www.ftc.gov/news-events/news/press-releases/2026/11/five-states-join-ftc-lawsuit-alleging-hims-hers-engaged-deceptive-unlawful-privacy-practices | 10 Nov 2026 | States joining, vote, claims, history | Yes |
| S2 | FTC v. Hims & Hers, First Amended Complaint (ECF 67) — https://www.ftc.gov/system/files/ftc_gov/pdf/x260029himsamendedcomplaint.pdf | 10 Nov 2026 | All Story 1 allegations, ¶ references, claims, relief | Yes (read in full) |
| S3 | FTC v. Hims & Hers, original complaint (redacted) — https://www.ftc.gov/system/files/ftc_gov/pdf/Hims-Complaint-Redacted-E-Filed.pdf | filed 29 Jul 2026 | Original filing date and plaintiffs | Yes |
| S10 | PPC Land — "Hims & Hers faces seven states as five join FTC privacy and billing suit" — https://ppc.land/hims-hers-faces-seven-states-as-five-join-ftc-privacy-and-billing-suit/ | Nov 2026 | Count increase 9→16; Hims "vigorously defend" (citing Reuters) | Yes (secondary) |
| S4 | American Heart Association newsroom — "AI analysis of ECG data measured by smartwatch may help detect reduced heart pumping function" — https://newsroom.heart.org/news/ai-analysis-of-ecg-data-measured-by-smartwatch-may-help-detect-reduced-heart-pumping-function | 9 Nov 2026 | All Story 2 facts, presenter, limits | Yes |
| S5 | American Heart Association newsroom — "AI-interpreted echocardiograms comparable to human reports; cardiologists' time cut by about 50%" — https://newsroom.heart.org/news/ai-interpreted-echocardiograms-comparable-to-human-reports-cardiologists-time-cut-by-about-50 | 9 Nov 2026 | All Story 3 facts | Yes |
| S6 | News-Medical (Mount Sinai release) — "Drug ads can subtly sway AI medical treatment recommendations" — https://www.news-medical.net/news/20261111/Drug-ads-can-subtly-sway-AI-medical-treatment-recommendations.aspx | 11 Nov 2026 | Story 4 design and results | Yes (secondary) |
| S7 | Medical Economics — "AI chatbot treatment recommendations are swayed by drug ads" — https://www.medicaleconomics.com/view/ai-chatbot-treatment-recommendations-are-swayed-by-drug-ads | Nov 2026 | Story 4 title, authors, funding, limits | Yes (secondary) |
| — | Lancet Digital Health article — https://doi.org/10.1016/j.landig.2026.101114 | 11 Nov 2026 | Primary for Story 4 | **No (blocked) — Run C should retry** |
| S8 | Neuroscience News — irregular sleep, loneliness, depression — https://neurosciencenews.com/irregular-sleep-loneliness-depression-32412/ | 13 Nov 2026 | Story 5 title, n, SRI values, design, Oura, funding | Yes (secondary, quotes abstract) |
| S9 | Bioengineer.org — "Irregular sleep schedules linked to greater depression and anxiety in wearable study" — https://bioengineer.org/irregular-sleep-schedules-linked-to-greater-depression-and-anxiety-in-wearable-study/ | 12 Nov 2026 | Story 5 date, design | Yes (secondary) |
| — | Scientific Reports article — https://www.nature.com/articles/s41598-026-77545-y | ~12 Nov 2026 | Primary for Story 5 | **No (blocked) — Run C should retry** |
| S11 | Digital Personal Data Protection Rules, 2025 — Gazette G.S.R. 846(E) — https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf | 13 Nov 2025 | Rule 1 phasing, Rule 4, First Schedule, Rule 7, Rule 12 / Fourth Schedule | Yes |
| S12 | Digital Personal Data Protection Act, 2023 — https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf | 2023 | s.2(g), s.6(7)–(9), penalty schedule | Yes |
| S13 | The Tribune (ANI) — "Govt opens registration for consent managers under DPDP Act; Rs 2 crore net worth required" — https://www.tribuneindia.com/news/consent-managers/govt-opens-registration-for-consent-managers-under-dpdp-act-rs-2-crore-net-worth-required | 14 Nov 2026 | Launch date, Krishnan, eligibility, role | Yes (wire) |
| S14 | Inc42 — "DPDP Act implementation: MeitY opens consent manager registration portal" — https://inc42.com/buzz/dpdp-act-implementation-meity-opens-consent-manager-registration-portal/ | 14 Nov 2026 | Launch, 13 Nov effect | Yes |
| S15 | India Briefing — "India DPDP consent manager registration" — https://www.india-briefing.com/news/india-dpdp-consent-manager-registration-47884.html | 14 Nov 2026 | Application process detail (17 documents — unverified against primary) | Yes |
| S16 | PIB (MoHFW) — "Steps taken for cyber security under ABDM" — https://www.pib.gov.in/PressReleasePage.aspx?PRID=2152537 | 5 Aug 2025 | ABDM HIE-CM is separate; consent-based exchange | Yes |
| S17 | HIPAA Journal — Dorsata / Bay Area Psychological Consultants breaches — https://www.hipaajournal.com/data-breaches-dorsata-bay-area-psychological-consultants-lansing-urgent-care | 13 Nov 2026 | Rejected/alternate candidate | Yes |
| S18 | HMP Global — DETECT-HF / Cordio HearO release — https://www.hmpgloballearningnetwork.com/site/cathlab/press-release/detect-hf-pivotal-study-validates-cordio-medicals-smartphone-based-voice | 9 Nov 2026 | Reserve candidate | Yes |
| S19 | FDA — CDRH New: News and Updates — https://www.fda.gov/medical-devices/medical-devices-news-and-events/cdrh-new-news-and-updates | as of 10 Nov 2026 | Null result for FDA digital actions | Yes |
| S20 | AHA late-breaking science programme — https://professional.heart.org/en/meetings/scientific-sessions/programming/late-breaking-science | Nov 2026 | Session dates | Yes |

**Sources that could not be opened this run:** Lancet Digital Health and Scientific Reports article pages; FTC case page and July press release; hhs.gov press room; healthit.gov prior-auth page; dpbi.gov.in; ABDM HIE-CM documents; MLex full text (Meta reproductive-health ruling). None is relied on for a claim beyond what is marked.
