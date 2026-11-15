# LifeeCode Hindi — Episode 21 Research Notes

**Coverage window:** Sunday 8 November – Saturday 14 November 2026 (America/New_York)
**Prepared:** Sunday 15 November 2026 (Run A — Research) · Branch `weekly/2026-11-15`
**Planned release:** Tuesday 17 November 2026, 8:00 AM IST (Run B builds the package)
**Status:** Research only. Nothing published.

---

## 1. Topic

**Working title (Devanagari + Roman):**
**आपका health data, आपकी permission? — India के नए data law का पहला कदम**
*Aapka health data, aapki permission? — India ke naye data law ka pehla kadam*

**Subtitle:** Consent Manager क्या है, 13 May 2027 को क्या बदलेगा, और तब तक आप क्या कर सकते हैं

**One-line angle:** On 13 November 2026 the first operational piece of India's Digital Personal Data Protection (DPDP) law switched on: companies can now apply to the Data Protection Board to become "Consent Managers" — a single place where a person can give, review and withdraw consent for their data. The bigger change — people's data rights, the 72-hour breach-reporting duty and penalties — starts on 13 May 2027, about six months away. For Indian listeners who share lab reports on WhatsApp, upload prescriptions to pharmacy apps and have an ABHA number, the episode explains in plain Hindi what consent actually means, what this law does and does not yet do, and the habits they can start now.

**Source in this week's research:** English Episode 23, Global Watch (see `../en23_november_8_14_2026/research_and_duplicate_screen.md` §7).

## 2. Why it fits (Hindi skill Steps 1–2)

| Test | Assessment |
|---|---|
| **Familiarity** | High. "OTP दे दो", "Aadhaar की copy दे दो", lab report on WhatsApp, pharmacy app asking for prescription upload, ABHA card made at a hospital or camp — everyday experiences. Consent pop-ups ("Allow / Accept") are universal. |
| **Interpretation need** | High. Most listeners have heard "DPDP" or "data protection law" in the news but don't know what is in force now vs later, what a Consent Manager is, or how ABDM's own consent system differs. Common myths (e.g., "law आ गया, अब कोई मेरा data misuse नहीं कर सकता") need correcting. |
| **Audio suitability** | Strong. No charts needed. Works as a conversation: one host has just been asked by a diagnostic-lab app to "Allow all"; the other explains the law with two simple dates (13 Nov 2026, 13 May 2027) and one idea (consent = पूछना, बताना, वापस लेना). |
| **Non-repetition** | Known Hindi titles: Ep 1 (smartwatch sleep-score accuracy), Ep 2 (signal vs noise), Hindi briefs 8, 9, 11 (wearables-as-clinical-tools themes), Ep 20 (smartwatch and high BP — on unmerged branch `weekly/2026-11-08`). A privacy-law/consent episode is new among known titles and deliberately moves away from two smartwatch-accuracy episodes in a row. **Limitation:** Hindi Episodes 11–19 titles are not in the repository — the creator should confirm no recent DPDP episode. |

## 3. India context (separate from the law itself)

**Digital-health scale (background, dated)**
- PIB backgrounder (6 Jul 2026): "over 104 crore health records now linked with over 93 crore ABHA" accounts; sharing happens through "the patient's revocable, time-bound consent." [H6]
- IBEF (13 Jul 2026, citing DD News): more than 93.95 crore ABHA IDs; over 105 crore linked digital health records; 5.33 lakh facilities and 9.85 lakh professionals registered. [H7]
- Use as "जुलाई 2026 तक" — not as today's figure.

**Why consent matters — Indian incidents (allegations, not findings)**
- Star Hospitals, Hyderabad: patient records, staff data and internal documents allegedly published on a website; Telangana Cyber Security Bureau registered a case (reported 3 Aug 2026). Patients affected not stated. [H8]
- Supreme Court issued notice (6 Aug 2026) on a plea seeking a CBI probe into the alleged transfer of data of "more than 1.5 lakh Indian citizens" including medical records to a foreign server. **Do not name the firms** (named only in the petition). [H9]
- Say "एक case दर्ज हुआ", "आरोप है" — never that a breach is proven.

**Listener scenarios (prompts for Run B, not facts)**
- Diagnostic-lab app asks to access contacts, location and photos before showing a blood report.
- Parent's ABHA number made at a health camp; family doesn't know which hospitals can see records.
- Pharmacy app offers a discount for uploading old prescriptions; later, medicine ads follow you on social media.
- Office wellness programme or insurance app asks to connect a fitness band.
- Family WhatsApp group where everyone's lab reports are forwarded for "doctor relative" opinion.

**Market data gap:** no credible primary source on Indian health-app usage or data-sharing habits was found this run. Run B must not invent figures.

## 4. Evidence — what the law actually says (primary documents)

**Timeline — DPDP Rules, 2025 (G.S.R. 846(E), dated 13 Nov 2025), Rule 1** [H1]
- Rules 1, 2 and 17–21: in force on publication (13 Nov 2025) — Data Protection Board set-up provisions.
- **Rule 4 (Consent Managers): in force one year after publication → 13 Nov 2026.**
- **Rules 3, 5–16, 22, 23: in force eighteen months after publication → ~13 May 2027.** These include notice (Rule 3), security safeguards, breach intimation (Rule 7), children's data (Rule 10), and the rights machinery.

**What opened this week** [H3][H4][H5]
- MeitY announced on Saturday 14 Nov 2026 that "Eligible Indian Companies Can Now Apply For Registration As Consent Managers Through dpbi.gov.in"; the framework took effect 13 Nov. MeitY Secretary S Krishnan launched the portal (no direct quote available).
- Consent Manager, per the release as reported: a Board-registered entity "that enables Data Principals to give, manage, review and withdraw consent through an accessible, transparent and interoperable platform."
- Eligibility: company incorporated in India; adequate technical, operational and financial capacity; net worth of at least ₹2 crore. The Board will publish a list of registered consent managers.

**What a Consent Manager must do — DPDP Rules First Schedule; DPDP Act** [H1][H2]
- Part A: net worth not less than ₹2 crore; interoperable platform, independently certified.
- Part B: must not be able to read the personal data it helps share; acts in a fiduciary capacity towards the person; keeps records at least seven years; no subcontracting; discloses shareholders above 2%; transfer of control needs Board approval.
- Act s.2(g): a "single point of contact" for consent; s.6(7)–(9): "accountable to the Data Principal and shall act on her behalf."

**What starts in May 2027 (not now)** [H1][H2]
- Rule 7: tell affected people "without delay" and the Board "within seventy-two hours of becoming aware of the breach."
- Rule 10: "verifiable consent of the parent" for children's data (under 18).
- Penalty ceilings in the Act's Schedule, e.g. up to ₹250 crore for failing to take reasonable security safeguards (s.8(5)); up to ₹200 crore for failing to report a breach (s.8(6)); up to ₹200 crore for children's-data obligations; up to ₹50 crore residual. **These are maximums, enforceable only once the relevant rules are in force.**

**Health-specific points** [H1][H2][H10]
- The DPDP Act has **no separate "sensitive health data" category.** Health appears in legitimate-use grounds (s.7(f)–(g): medical emergencies, epidemics/public-health threats).
- Rule 12 + Fourth Schedule Part A: clinical establishments, mental-health establishments and healthcare professionals (and allied healthcare professionals, more narrowly) are exempt from the parental-consent and no-tracking rules of s.9(1) and 9(3) **only** to the extent needed to provide health services/treatment to the child.
- ABDM already has its own consent layer — the "Health Information Exchange and Consent Manager (HIECM)" gateway, where "health data exchange between the intended stakeholders is allowed only after the patient's consent" (PIB/MoHFW, 5 Aug 2025). It runs under ABDM's Health Data Management Policy. **No official source links ABDM's HIECM to DPDP consent managers.**

## 5. Limits — what the evidence does NOT show (Run B must respect)

- **No primary page for the 14 Nov launch could be opened** (no PIB release found; dpbi.gov.in blocked). Launch facts rest on ANI/IANS wire copies and Inc42 quoting the MeitY release. The underlying rule (Rule 4 from 13 Nov 2026) is verified from the Gazette.
- **Do not say** consent managers are part of ABDM, or that ABHA records will now flow through DPDP consent managers.
- **Do not say** the 72-hour breach rule, data rights or penalties apply today. They begin ~13 May 2027.
- **Do not say** "₹250 crore जुर्माना हर गलती पर" — it is the ceiling for security failures only.
- **Do not say** DPDP treats health data as "sensitive".
- No registered consent manager exists yet (registration just opened); do not name companies as consent managers.
- India Briefing's 17-document checklist is unverified against an official source — leave it out.
- This is educational content about a law, not legal advice.

## 6. Spoken educational boundary (for the script)

यह episode सिर्फ जानकारी के लिए है — यह medical advice या legal advice नहीं है। किसी app, hospital या insurance से जुड़ा फ़ैसला लेने से पहले उनकी official privacy policy पढ़ें, और ज़रूरत हो तो किसी qualified expert से बात करें। सेहत से जुड़े फ़ैसले हमेशा अपने doctor के साथ लें।

## 7. Practical takeaways (educational, non-legal)

1. Consent के तीन सवाल याद रखें: **क्या data ले रहे हैं? किस काम के लिए? वापस कैसे लूँ?**
2. Health या lab app में "Allow all" से पहले permissions देखें — report देखने के लिए contacts या location ज़रूरी नहीं।
3. Lab reports family WhatsApp group में forward करने से पहले सोचें — वह data अब कई phones में है।
4. ABHA से जुड़े records के लिए consent requests देखें और जो समझ न आए उसे approve न करें (ABDM's own consent flow — no new DPDP claim).
5. 13 May 2027 याद रखें — उसके बाद companies पर breach बताने और आपके rights मानने की कानूनी ज़िम्मेदारी लागू होगी।

## 8. Verified sources with claims

| ID | Source (opened) | Date | Claims supported |
|---|---|---|---|
| H1 | Digital Personal Data Protection Rules, 2025 — Gazette G.S.R. 846(E) — https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf | 13 Nov 2025 | Rule 1 phasing; Rule 4; First Schedule; Rule 7 (72 hours); Rule 10; Rule 12 + Fourth Schedule health exemptions |
| H2 | Digital Personal Data Protection Act, 2023 — https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf | 2023 | s.2(g); s.6(7)–(9); s.7(f)–(g); penalty Schedule |
| H3 | The Tribune (ANI) — "Govt opens registration for consent managers under DPDP Act; Rs 2 crore net worth required" — https://www.tribuneindia.com/news/consent-managers/govt-opens-registration-for-consent-managers-under-dpdp-act-rs-2-crore-net-worth-required | 14 Nov 2026 | Launch, release headline, role, eligibility |
| H4 | Inc42 — MeitY opens consent manager registration portal — https://inc42.com/buzz/dpdp-act-implementation-meity-opens-consent-manager-registration-portal/ | 14 Nov 2026 | 13 Nov effect; Krishnan launched portal |
| H5 | TenNews (IANS) — "Eligible firms can now apply as consent managers, says govt" — https://tennews.in/personal-data-protection-eligible-firms-can-now-apply-as-consent-managers-says-govt/ | 14 Nov 2026 | Corroborates launch |
| H6 | PIB backgrounder — Ayushman Bharat Digital Mission — https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc202676912801.pdf | 6 Jul 2026 | 104 crore records / 93 crore ABHA; revocable, time-bound consent |
| H7 | IBEF — ABDM crosses 93.95 crore ABHA IDs — https://www.ibef.org/news/ayushman-bharat-digital-mission-crosses-93-95-crore-abha-ids-strengthens-india-s-digital-healthcare-ecosystem | 13 Jul 2026 | 93.95 crore ABHA; 105 crore records; facilities/professionals |
| H8 | Telangana Today — case over alleged leak of Star Hospitals patient data — https://telanganatoday.com/telangana-cyber-security-bureau-registers-case-over-alleged-leak-of-star-hospitals-patient-data | 3 Aug 2026 | Alleged leak; case registered |
| H9 | ThePrint (ANI) — SC seeks govt response on plea seeking CBI probe into breach of 1.5 lakh citizens' medical data — https://theprint.in/india/sc-seeks-govt-response-on-plea-seeking-cbi-probe-into-breach-involving-1-5-lakh-citizens-medical-data/3007420/ | 6 Aug 2026 | SC notice; allegation of 1.5 lakh citizens' data |
| H10 | PIB (MoHFW) — Steps taken for cyber security under ABDM — https://www.pib.gov.in/PressReleasePage.aspx?PRID=2152537 | 5 Aug 2025 | ABDM HIECM gateway; consent before exchange |

**Could not be opened this run:** dpbi.gov.in; any PIB release on the 14 Nov launch (none found); ABDM HIE-CM technical documents (robots-blocked). Not relied on.

**Note for Run B:** Re-try dpbi.gov.in and a PIB search before finalising; if still unavailable, attribute launch details as "सरकार की ओर से जारी जानकारी के मुताबिक़, news reports में".
