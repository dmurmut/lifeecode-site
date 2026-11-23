# Research and Duplicate Screen — LifeeCode English Episode 24

**Coverage window:** Sunday 15 November – Saturday 21 November 2026 (America/New_York)
**Prepared:** Sunday 22 November 2026 (Run A — Research)
**Branch:** `weekly/2026-11-22`
**Status:** Research complete for Run C. Nothing published, posted, uploaded or merged.

---

## 1. Sequential episode baseline

- `main`'s `editorial/archive/episode-index.md` still says "Next episodes: English 22, Hindi 20", because **neither `weekly/2026-11-08` (English 22 / Hindi 20) nor `weekly/2026-11-15` (English 23 / Hindi 21) has been merged into `main`.** Both branches hold complete packages. This run therefore numbers the new work **English Episode 24** and **Hindi Episode 22**, and the index on this branch carries the English 22–23 and Hindi 20–21 rows forward so the baseline is not lost.
- Last brief published on the site: Episode 12 (`brief-data/12.json`, 24–30 August 2026).
- **Needs the creator's judgement:** if Episodes 22 and 23 are never going to be merged/published, the numbering should be revisited before Run C writes `brief-data/24.json`.

## 2. Archive check and explicit limitations

| Source | What was available |
|---|---|
| `client/src/content/lifeecode/pages.ts` (legacy issues 1–3, 5–9, 11) | Titles (Issue 11 also its signal line) |
| `brief-data/12.json` | Full brief (deep dive, four signals, Global Watch) |
| `weekly/2026-11-08` — English 22 research screen, Hindi 20 research notes | Full research |
| `weekly/2026-11-15` — English 23 research screen, Hindi 21 research notes | Full research |
| `editorial/archive/episode-index.md` | Episode list |

**Limitations (stated honestly):**

- **English Episodes 13–21 and Hindi Episodes 11–19 were produced in Manus and are not in this repository by title or content.** They could not be screened. The creator should check the five stories below against his memory of late-August–October 2026 episodes.
- Legacy Episodes 1–3, 5–9 and 11 were screened by title only; Episodes 12, 22 and 23 were screened in full.

## 3. Editorial theme and working title

**Theme:** *Your health data is on the move — who checks it on the way?* A new federal HIPAA rule makes it faster and easier to pull your records into apps of your choosing — and, in doing so, carries them outside HIPAA's protection. A peer-reviewed NHS study finds AI-drafted discharge summaries were signed off more often than doctors' own, with doctors still checking every one. A Japanese survey links higher mental-health need with leaning on AI chatbots for emotional support. A clinic group's security filing shows how much a cosmetic-clinic booking database can reveal. And a large US survey finds wearable users more often meet exercise guidelines — an association, not proof.

**Working title (deep dive):** *Your Records, Your App — and Outside HIPAA: What the New Privacy Rule Changes for You*

## 4. Progressive-versus-cautionary balance

**3 progressive : 2 cautionary** (meets the rule).

| # | Story | Lean |
|---|---|---|
| 1 | HHS final HIPAA Privacy Rule: 15-day access, records to personal health apps, more care-coordination sharing (Under the Microscope) | Progressive (access) — with the privacy gap as the "hidden risk" |
| 2 | AI-drafted NHS discharge summaries signed off more often than clinicians' (JAMA Network Open) | Progressive |
| 3 | Higher mental-health need associated with regular emotional-support AI use (JAMA Network Open, Japan) | Cautionary |
| 4 | SBC Medical Group discloses intrusions exposing clinic-patient and booking data (SEC 8-K) | Cautionary |
| 5 | Wearable / multi-tool users more often meet both exercise guidelines (Frontiers in Physiology, HINTS 2024) | Progressive (correlational) |

## 5. Duplicate-screen table (every candidate considered)

| Candidate | Date | Editorial status | Duplicate result | Reason |
|---|---|---|---|---|
| HHS OCR final rule modernizing the HIPAA Privacy Rule (care coordination, individual access, burden reduction) | Announced 16 Nov; FR publication 19 Nov (secondary) | **Selected — Under the Microscope** | Adjacent, not duplicate | Ep 5 (Google/US gov't merging records with Fitbit) and Ep 23 (Hims & Hers ad-tracking) touch records-meet-consumer-tech. This is the first final federal rule change to patient access and app delivery; different actor and mechanism. Run C can link to Ep 23 in one line (the FTC is the backstop once data leaves HIPAA). |
| LLM-generated discharge summaries, five London hospitals (JAMA Netw Open, Goldsmith et al.) | 17 Nov | **Selected — Signal 2** | Adjacent | Ep 23 Signal 3 (AI-drafted echo reports, AHA abstract) and Ep 22 Signal 5 (India scribe with doctor sign-off) share the human-sign-off principle. This is a different task (discharge summaries), peer-reviewed, and includes harm and omission ratings. Use as a callback ("the pattern continues"), not a repeat. |
| Mental-health need and emotional-support AI use (JAMA Netw Open research letter, Koda et al.) | 17 Nov online | **Selected — Signal 3** | No match | Ep 23 Signal 4 was drug ads swaying chatbots; this is who relies on chatbots for emotional support. Distinct. |
| SBC Medical Group 8-K: database intrusion + Tribeau booking platform | Detected 16 Nov; filed 18 Nov | **Selected — Signal 4** | Adjacent to Ep 22 vendor theme | Ep 22 deep dive was a US transcription vendor. This is a clinic group's own system plus a third-party booking platform in Japan, with treatment-related fields. Different actor and data. |
| Digital health engagement profiles and guideline adherence (Frontiers in Physiology; Univ. of Mississippi) | Releases 16 Nov | **Selected — Signal 5** | Partial adjacency | Ep 11 (scores ≠ outcomes) and Hindi Ep 2 (signal vs noise) are adjacent; use Ep 11's principle as a callback. Only wearable-specific candidate this week. |
| Cloud vs on-premises LLMs for urgent patient-portal messages (npj Digital Medicine, MGB) | Listed 20 Nov | Reserve for Signal 5 | No match | Strong privacy angle (on-site models keep data in-house) but the article page would not open; figures come only from the Research Square preprint. Run C may swap in only if the journal page is opened and matches. |
| BMJ Open audit of UK direct-to-consumer health tests (50 vendors) | 18 Nov | Rejected — alternate cautionary | No match | Press release only; consumer testing rather than wearables/apps. |
| Google extends Gemini temporary-chat retention to ~2 months | 17 Nov | Rejected | — | Secondary only (TechCrunch); no health link stated; Google help page blocked. |
| CMS–Education Dept computer matching program (Medicaid / student enrollment) | FR 16 Nov | Rejected | — | Government data matching, not health technology. |
| FDA "Super Intelligence" terminology under EO 14434 | Effective 16 Nov | Rejected — possible explainer later | — | Communications change only; FDA's own page not opened; nothing changes in device regulation. |
| ONC/ASTP TEFCA 2026–27 workplan; VA and DoD live | 17–19 Nov | Rejected | — | Blog post not opened; figures from Nextgov only. Secondary-use angle worth a future look. |
| CMS CRUSH anti-fraud proposed rule | 16–19 Nov | Rejected | — | Weak health-tech fit. |
| CMS/HHS Clinical Super Intelligence Roadmap | 13 Nov | Rejected | — | Two days before the window. |
| Meta wins dismissal of Wisp reproductive-health Pixel suit (A.A. v. Meta, N.D. Cal.) | Ruling 13 Nov | Rejected | Adjacent to Ep 22 S4 | Outside window; order not obtained (paywalled report). |
| Ochsner Health / Monadnock / Access Dental breach notices | 18–19 Nov | Rejected | Breach theme | Secondary only (HIPAA Journal); counts unknown or events outside window. |
| Dorsata EMR breach | CA AG filing ~9 Nov | Rejected | — | Outside window; secondary. |
| HAPI FHIR 9.0.0 patch for cross-tenant CVEs | scheduled 19 Nov | Rejected | — | Release could not be confirmed. Revisit next week. |
| Heart-mapping vest (UCL/BHF) | Release 18 Nov; presented 6–9 Nov | Rejected | — | Presented before window; no paper. |
| Computer-vision OR timestamps (JAMA Surgery) | 18 Nov | Rejected | — | Paywalled; no data obtained. |
| Apple Health AI Usage Study launch | ~16 Nov | Rejected | — | Study launch, no results; primary page not opened. |
| UK MHRA Women's Health Programme 2026–2030 | 16 Nov | Global Watch alternate (not used) | No match | Primary source opened; but no wearable, app or AI content. |
| Singapore single HealthHub app | targeted Nov 2026 | Global Watch alternate (not used) | — | Launch not confirmed in window. |
| PwC Voice of the Consumer 2026 — India | 17 Nov | Used for Hindi Ep 22 | No match | India-specific survey; better suited to the Hindi episode. |
| CERT-In advisory on C-DAC e-Sushrut | 17 Nov | Rejected (Hindi alternate) | — | CERT-In page not opened; CVE IDs unverified. |
| FDA CDRH news / consumer-wearable clearances / OCR settlements / CISA ICSMA | 15–21 Nov | None usable | — | No wearable clearance, no OCR settlement, no Digital Health Advisory Committee meeting found; CISA ICS page failed to open, so a medical advisory cannot be fully excluded. |

## 6. Selected main stories — evidence/status lines

| # | Story | Evidence / status line (put near the first claim) | Primary source read |
|---|---|---|---|
| 1 | **Under the Microscope — Your Records, Your App — and Outside HIPAA.** HHS finalized changes that cut the access deadline to 15 days, clarify that records must go to a personal health app when the provider can produce them that way, and expressly permit sharing with social-services and community organizations for care coordination. | **Final federal rule (HHS OCR); effective 60 days after Federal Register publication, compliance 180 days after that. Not yet in force.** | HHS press release [S1]; HHS rule summary page [S2] |
| 2 | **AI drafts of hospital discharge summaries were signed off more often than doctors' drafts — and doctors still reviewed every one.** | **Peer-reviewed retrospective comparative study (JAMA Network Open), five London NHS hospitals, one model (GPT-4o mini) in a secure environment; reviewers' ratings, no patient-outcome data.** | JAMA Netw Open [S6] |
| 3 | **People with greater mental-health needs were more likely to use AI chatbots for emotional support.** | **Peer-reviewed research letter (JAMA Network Open); two-wave internet-panel survey in Japan; association only; chatbot content and safety not studied.** | JAMA Netw Open [S7] |
| 4 | **A clinic group's breach filing shows what a booking database can reveal.** | **Company disclosure in an SEC filing; unauthorized access confirmed by the company; electronic medical records not confirmed affected; reported to Japan's privacy regulator.** | SEC 8-K Ex. 99.1 [S8] |
| 5 | **Wearable users were more likely to meet both exercise guidelines.** | **Peer-reviewed cross-sectional analysis of a national survey (HINTS 2024); association only — authors say it does not prove the tools cause more activity.** Journal page not opened. | Univ. of Mississippi release [S9]; EurekAlert [S10] |

### Key verified facts by story

**1. HIPAA Privacy Rule final rule (deep dive)** — [S1]–[S5]
- HHS press release dated **16 November 2026** [S1]; rule page "last reviewed November 16, 2026", links public-inspection document **2026-23429** [S2]. Federal Register publication **19 November 2026** per GovInfoSecurity [S4] (FR page not opened).
- Access: respond "no more than 15 calendar days after receipt of the request (reduced from the current 30-day period), with the opportunity for one extension of no more than 30 calendar days" [S2].
- Apps: clarifies when a covered entity must provide ePHI "through a personal health application"; applies "when the covered entity has the capability to produce the PHI in that form and format" [S1][S2]. Individuals can direct an electronic copy to a third party they choose [S1].
- Fees: amends permissible fees, specifies when ePHI access must be free, requires estimated fee schedules posted on websites and advance notice of fees [S1][S2].
- Identity verification: "reduces the burden of identity verification" on people exercising access rights [S2]. GovInfoSecurity reports the rule points to NIST IAL2/AAL2 and limits refusing an app on security grounds while allowing providers to warn patients [S4] — **secondary; Run C should attribute or re-verify.**
- Care coordination: "expressly permits covered entities to disclose PHI to social services agencies, community-based organizations" for individual-level care coordination and case management [S1].
- Burden: eliminates the good-faith effort to get written acknowledgment of the Notice of Privacy Practices; adds a right to discuss the notice with a designated contact [S1][S2].
- Timing: effective 60 days after publication; compliance 180 days after the effective date [S2] → **19 Jan 2027 effective, 19 Jul 2027 compliance** (dates per Nixon Peabody [S5] and GovInfoSecurity [S4]; consistent with HHS's day counts). Nixon Peabody: business-associate agreements until 18 Jan 2028 [S5].
- Context (secondary): proposed January 2021; HHS estimates ~$784M first-year cost then ~$703M/yr net savings years 2–5; proposal to relax minimum-necessary dropped (Healthcare Dive [S3]); proposed "good faith" family/caregiver standard dropped (Nixon Peabody [S5]).
- **Hidden risk:** once records reach a consumer app not covered by HIPAA, HIPAA no longer protects them; FTC Act / Health Breach Notification Rule and state laws apply. Background: on 9 Sep 2026 the FTC rescinded its 2021 policy statement on applying the HBNR to health apps (the rule and its 2024 amendments remain) [S11] — **background, outside window; secondary law-firm source.**

**2. AI discharge summaries** — [S6]
- "Clinician Acceptance of Large Language Model–Generated Discharge Summaries", JAMA Netw Open, published online **17 Nov 2026**, doi 10.1001/jamanetworkopen.2026.44496; Goldsmith … Mayer (Imperial College London).
- Retrospective comparative effectiveness study, prespecified non-inferiority margin 5 points; five North West London hospitals, Sept 2022–Sept 2023; 1,294 summaries (649 clinician, 645 LLM); 12 resident doctors, 1,442 evaluations.
- GPT-4o mini (18 Jul 2024 release) in a secure data environment, clinician-co-designed prompt.
- Signed off with no or minor edits: **89.7% AI vs 67.1% clinician**; adjusted difference 22.2 points (95% CI 19.0–27.5).
- Potential harm rated ≥3: plan/requested actions 26.8% vs 51.5%; clinical summary 26.2% vs 45.1%.
- Omissions 23.5% vs 39.8%; hallucinated content 6.0% vs 6.9%.
- Conclusion: LLM summaries "met the current standard of care"; authors stress close clinician oversight.
- Verification note: the 22.2-point difference and harm figures were confirmed verbatim in the abstract by two separate reads; the raw 89.7/67.1, omission and hallucination figures were read in the article body by one read — **Run C re-checks before quoting.**
- Limits: retrospective; single model; resident reviewers only; writing style may reveal which drafts were AI; no workflow or patient-outcome data; about half of AI drafts still needed some edits.

**3. Emotional-support AI** — [S7]
- "Mental Health Needs and Emotional-Support Artificial Intelligence Use", JAMA Netw Open research letter, published online **17 Nov 2026** (doi 10.1001/jamanetworkopen.2026.44315; citation metadata shows issue date 2 Nov — online publication is 17 Nov). Koda, Harada, Matsui … Tabuchi.
- JACSIS two-wave internet panel (2024 → 2025); 6,852 adults with no usual source of care.
- Regular emotional-support AI use: 4.6% (lower need) → 9.4% (elevated) → 16.3% (high) → 20.7% (both indicators); adjusted prevalence ratios 1.67, 2.61, 2.71. Pattern also held among 6,424 adults with a usual source of care.
- Limits stated by authors: self-report, non-probability panel, no confirmation of pre-2025 AI use, residual confounding, no assessment of conversation content or safety. Authors: not evidence AI is therapeutic or safe; may signal unmet need.
- Funding JSPS KAKENHI; some authors report pharma-related fees/grants.

**4. SBC Medical Group breach** — [S8]
- Exhibit 99.1 dated **18 Nov 2026**; unauthorized access detected **16 Nov 2026**; reported to Japan's Personal Information Protection Commission on 16 Nov; police to be consulted.
- Basic personal information of **1,624,000** individuals: names, sex, phone, email, passwords, addresses, dates of birth, patient card numbers, member IDs, survey responses.
- Also: 255,416 reservation requests; 217,769 website inquiries; 4,513 treatment-monitor records; 15,007 reviews. Via third-party booking platform Tribeau: 12,641 reservation records and 6,804 treatment-received records. ~20,000 employee account records. 14 card numbers in inquiry forms (company says expired).
- "The Company has not confirmed unauthorized acquisition of electronic medical records."
- Safeguards: categories may overlap — **do not add them up** (some coverage reports ">2 million"); patients are mainly of Japanese aesthetic/cosmetic clinics; say "the company disclosed", not "hackers stole medical records".

**5. Wearables and exercise guidelines** — [S9][S10]
- University of Mississippi and EurekAlert releases dated **16 Nov 2026**; paper "Digital health engagement profiles and physical activity guideline adherence…", Frontiers in Physiology, DOI 10.3389/fphys.2026.1901594.
- Latent class analysis of 2024 HINTS (>5,000 US adults).
- About 1 in 3 wearable-focused or multi-tool users met both aerobic and muscle-strengthening guidelines vs about 1 in 5 portal-focused or low-engagement users, adjusted for age, income, education.
- Authors: the study "does not prove" the tools cause more activity; active people may adopt them.
- **Gaps:** journal page not opened; journal publication date not confirmed (releases in window); no odds ratios in releases; funding not stated.

## 7. Global Watch decision

**No standalone Global Watch item this week.** Candidates tested:

- **UK MHRA Women's Health Programme 2026–2030 (16 Nov)** — credible and in window (gov.uk release opened: 1.1% of 4,616 UK trial applications 2019–2023 included pregnant women, 0.6% breastfeeding; FemTech sector ~£300m/yr). But the release says nothing about wearables, apps or AI; including it would stretch the brand's scope.
- **Singapore's single HealthHub app** — scheduled for November 2026, launch not confirmed in window.
- EU items (Apply AI Summit, Horizon call) — secondary roundup only.

Editorial reason for the brief: *"No standalone Global Watch this week: the strongest international item, the UK regulator's new women's-health evidence programme, does not yet touch digital tools. This week's international signals appear inside the main stories — a Japanese clinic group's breach and a Japanese study of emotional-support chatbots."* **Creator may override** and run MHRA as a short FemTech-evidence item if he prefers.

## 8. Editorial safeguards (for Run C)

- **HIPAA rule:** "HHS finalized"; "takes effect in January, with compliance by July 2027" — never "now requires". Say "when the provider can produce records that way". Do not claim the rule regulates apps; it does not — the point is that HIPAA's protection ends once you send records to a non-covered app. Attribute app-security-refusal and IAL2 details to reporting. Present the care-coordination sharing neutrally (helps coordination; also sharing without authorization). Practical actions: ask your provider how to request records; read an app's privacy policy before connecting records; prefer apps that let you delete data; remember you can choose not to connect.
- **Discharge summaries:** "reviewers signed off more often"; "doctors still reviewed every one"; never "AI writes better than doctors" or "safer for patients" — no outcomes measured; mention single model and NHS setting.
- **Emotional-support AI:** "was associated with"; no claim that chatbots help or harm; include a gentle line that anyone struggling should reach a qualified professional or local support line. Japan-only, self-report.
- **SBC breach:** company disclosure; do not sum categories; EMR not confirmed affected; avoid fear imagery; action — change reused passwords, be wary of phishing using clinic details.
- **Wearables & exercise:** "were more likely to"; "doesn't show the device caused it"; disclose journal page not checked.
- Medical-information notice required in brief, scripts and metadata.
- Suggested Privacy Radar: HIPAA/apps — Medium-High (records leave HIPAA once in a consumer app); SBC breach — High; emotional-support AI — Medium (sensitive conversations held by AI providers); discharge AI — Low–Medium (secure environment, stays in health system); wearables & exercise — Low–Medium (survey data; activity data held by device makers).

## 9. Complete source record

| ID | Source | Date | Claim(s) supported | Opened? |
|---|---|---|---|---|
| S1 | HHS press release — "HHS Issues New Final Rule to Modernize HIPAA Privacy Rule…" — https://www.hhs.gov/press-room/hhs-issues-new-final-rule-modernize-hipaa-privacy-rule-support-coordinated-care-individual-engagement-reduce-regulatory-burdens.html | 16 Nov 2026 | Release date; app capability condition; third-party copy; social-services/CBO disclosures; NPP acknowledgment removed; fee notice | Yes (twice) |
| S2 | HHS rule summary — https://www.hhs.gov/hipaa/for-professionals/privacy/changes-support-coordinated-care-individual-engagement-reduce-regulatory-burdens-final-rule.html | 16 Nov 2026 | 15-day access + one 30-day extension; personal health application; fee schedules; ID verification; effective/compliance day counts; doc 2026-23429 | Yes (twice) |
| S3 | Healthcare Dive — "Updated HIPAA privacy law sets rules for sharing health data with apps" — https://www.healthcaredive.com/news/updated-hipaa-privacy-law-sets-rules-for-sharing-health-data-with-apps/874845/ | Nov 2026 | Cost estimates; 2021 proposal; minimum-necessary proposal dropped | Yes (secondary) |
| S4 | GovInfoSecurity — "HHS Finalizes Sweeping HIPAA Privacy Rule Changes" — https://www.govinfosecurity.com/hhs-finalizes-sweeping-hipaa-privacy-rule-changes-a-33423 | Nov 2026 | FR publication 19 Nov; effective/compliance dates; app-security refusal limits; IAL2/AAL2 | Yes (secondary) |
| S5 | Nixon Peabody — "HHS finalizes HIPAA Privacy Rule changes" — https://www.nixonpeabody.com/insights/alerts/2026/11/20/hhs-finalizes-hipaa-privacy-rule-changes | 20 Nov 2026 | Effective 19 Jan 2027; compliance 19 Jul 2027; BAAs 18 Jan 2028; $6.50 fee recalculation; caregiver standard dropped | Yes (secondary) |
| S11 | Epstein Becker Green — "FTC reverses course on health app privacy" — https://www.ebglaw.com/health-law-advisor/ftc-reverses-course-on-health-app-privacy | Sep 2026 | FTC rescinded 2021 HBNR policy statement on 9 Sep (background) | Yes (secondary) |
| — | AHA News — OCR finalizes HIPAA privacy rule — https://www.aha.org/news/headline/2026-11-16-ocr-finalizes-hipaa-privacy-rule-coordinated-care-and-individual-engagement | 16 Nov 2026 | Corroboration of 15 days | Yes (secondary) |
| — | Federal Register public inspection 2026-23429 — https://www.federalregister.gov/public-inspection/2026-23429 | 19 Nov 2026 | Primary rule text | **No (blocked) — Run C should retry** |
| S6 | JAMA Network Open — "Clinician Acceptance of Large Language Model–Generated Discharge Summaries" — https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2856756 | 17 Nov 2026 | All Story 2 facts | Yes (journal page) |
| S7 | JAMA Network Open — "Mental Health Needs and Emotional-Support Artificial Intelligence Use" — https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2856761 | 17 Nov 2026 online | All Story 3 facts | Yes (journal page) |
| S8 | SBC Medical Group Holdings — Form 8-K Exhibit 99.1 — https://www.sec.gov/Archives/edgar/data/0001930313/000149315226053135/ex99-1.htm | 18 Nov 2026 | All Story 4 facts | Yes (twice) |
| S9 | University of Mississippi — "Study probes how step trackers, health apps relate to exercise levels" — https://olemiss.edu/news/2026/11/study-probes-how-step-trackers-health-apps-relate-to-exercise-levels/index.html | 16 Nov 2026 | Story 5 design, findings, caveat | Yes (university release) |
| S10 | EurekAlert — news release 1152130 — https://www.eurekalert.org/news-releases/1152130 | 16 Nov 2026 | Story 5 corroboration, DOI | Yes |
| — | Frontiers in Physiology — DOI 10.3389/fphys.2026.1901594 | — | Primary for Story 5 | **No — Run C should retry** |
| S12 | npj Digital Medicine journal listing — https://www.nature.com/npjdigitalmed/ ; preprint https://assets-eu.researchsquare.com/files/rs-7830207/v1/2508efa92d8fd729322e048a.html | 20 Nov 2026 | Reserve candidate (on-site vs cloud LLM triage) | Listing + preprint only; article page failed |
| S13 | BMJ Group — "Many claims for health tests marketed to UK consumers are unsubstantiated" — https://bmjgroup.com/many-claims-for-health-tests-marketed-to-uk-consumers-are-unsubstantiated/ | 17–18 Nov 2026 | Rejected alternate | Yes (release) |
| S14 | MHRA — "MHRA launches new programme to tackle evidence gaps on women's health" — https://www.gov.uk/government/news/mhra-launches-new-programme-to-tackle-evidence-gaps-on-womens-health | 16 Nov 2026 | Global Watch alternate | Yes |
| S15 | Synapxe / MOH Singapore — HealthHub unification — https://www.synapxe.sg/media-releases/collaboration/healthcare-apps-unified-healthhub-2026 ; https://www.moh.gov.sg/newsroom/streamlining-digital-apps-of-public-healthcare-providers-for-better-user-experience/ | Jul–Sep 2026 | Global Watch alternate (not confirmed launched) | Yes |
| S16 | TechCrunch — Gemini chat retention — https://techcrunch.com/2026/11/17/google-to-keep-gemini-chats-for-two-months-up-from-72-hours-even-with-history-off/ | 17 Nov 2026 | Rejected | Yes (secondary) |
| S17 | Federal Register public inspection — CMS/ED matching program 2026-23237 — https://public-inspection.federalregister.gov/2026-23237.pdf | 16 Nov 2026 | Rejected | Yes |
| S18 | RAPS — FDA "Super Intelligence" terminology — https://www.raps.org/resource/fda-to-refer-to-ai-as-super-intelligence-going-forward.html | 17 Nov 2026 | Rejected | Yes (secondary) |
| S19 | Nextgov — TEFCA workplan — https://www.nextgov.com/digital-government/2026/11/tefca-set-grow-update-policies-after-dod-va-connections/417342/ | 19 Nov 2026 | Rejected | Yes (secondary) |
| S20 | HIPAA Journal — Access Dental / Ochsner / Valley Family breaches — https://www.hipaajournal.com/access-dental-valley-family-health-care-ochsner-health-data-breach/ | 20 Nov 2026 | Rejected | Yes (secondary) |
| S21 | seclists oss-sec — HAPI FHIR CVEs — https://seclists.org/oss-sec/2026/q4/336 | Oct 2026 | Rejected (patch unconfirmed) | Yes |

**Sources that could not be opened this run:** Federal Register rule text (2026-23429); Frontiers article page; npj Digital Medicine article page; CISA ICS advisories page; FDA "Super Intelligence" page; healthit.gov TEFCA blog post; Bloomberg Law / MLex full text (Wisp ruling); Google Gemini help page; California AG breach page. None is relied on for a claim beyond what is marked.

Research method note: candidate discovery used parallel research passes (US regulation; peer-reviewed studies; privacy/breaches; international/India), each opening source pages; key primary pages (S1, S2, S6, S7, S8, PwC India) were then re-opened in an independent verification pass.

## 10. Run C production note (Monday 23 November 2026)

- **Re-verification attempted, not completed.** Run C tried to re-open S1, S2, the Federal Register rule text (2026-23429), S6, S7, S8, S9, S10 and the Frontiers article. Every page fetch was refused in this unattended run (permission prompt not answered), so no source was re-opened. A web search confirmed that S9, S10 and a News-Medical report (17 Nov 2026) about the wearables study exist, but search snippets were not used for any claim.
- **What the package therefore relies on:** Run A's reads, using only facts Run A marked as verified. In line with Run A's instruction, the raw sign-off rates (89.7% vs 67.1%), omission rates and hallucination rates for the discharge-summary study were **left out** of every public deliverable because they had been read only once; the brief uses the abstract figures that were confirmed twice (adjusted difference 22.2 points, harm ratings).
- **Attributed, not stated as HHS's words:** effective/compliance dates (Nixon Peabody, GovInfoSecurity, consistent with HHS's day counts) and the limit on refusing apps on security grounds (GovInfoSecurity).
- **Global Watch:** omitted as Run A recommended; `globalWatchNote` used in the JSON.
- **Episode numbering:** Episode 22 was merged and published on 22 November, so numbering 24 stands; `main` was merged into this branch.
