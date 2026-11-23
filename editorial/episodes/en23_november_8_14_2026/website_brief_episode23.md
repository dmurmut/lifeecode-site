# Health Tech Weekly Brief — Episode 23, 2026

**Coverage:** Sunday 8 November – Saturday 14 November 2026 (America/New_York) · **Estimated read time:** 8 minutes

> **Medical-information notice:** LifeeCode is general education. It does not diagnose, treat, or give individual medical advice. Speak to a qualified clinician before making care decisions based on an app, AI tool, wearable, or risk score.

This week, LifeeCode examines a federal and seven-state lawsuit alleging that telehealth company Hims & Hers shared customers' treatment categories with advertising platforms while promising privacy, a smartwatch ECG study in which repeating the test cut false alarms, a randomized study of AI-drafted heart-scan reports that cardiologists still signed, an experiment showing drug ads can sway consumer AI chatbots, and a smart-ring study linking irregular sleep with mental-health symptoms.

## Under the Microscope

### "Private and Secure" — Then Sent to Meta? The FTC and Seven States vs. Hims & Hers

> **The LifeeCode Take:** When a health app promises privacy, the question is not only who can read your records — it is who learns what you were treated for.

### What Happened

On 10 November, the Federal Trade Commission announced that Arizona, Florida, Nebraska, Ohio, and Wisconsin had joined its lawsuit against telehealth company Hims & Hers, alongside California and Utah, the original state plaintiffs [1]. The FTC, California, and Utah filed the original complaint on 29 July 2026 [3]; the Commission voted 2–0 to file the amended complaint in federal court in Northern California [1] [2].

This is an **enforcement lawsuit**. Everything below is an allegation in the amended complaint, not a court finding, and Hims & Hers has said it will vigorously defend itself [4].

According to the complaint, Hims & Hers told customers that "medical records and sensitive information are only accessed by the medical providers managing your care" and described a "100% online, private, and secure process" [2]. Yet the regulators allege the company:

- uploaded about **14 million customer email addresses** to Meta between September 2020 and June 2023 to build advertising audiences, about 10 million of which matched Meta users, with audience names such as "All Time Hims ED Purchasers" and "Hers Apollo Signups" — Apollo being, the complaint says, an internal codeword for mental health [2];
- sent "Complete Registration" and "Purchase" events to Meta about **8 million times** through tracking tools, tagged with product categories such as mental health [2];
- shared email lists with Snap, including one named "All_Time_Hers_Psych_Signups", and used tracking from other ad platforms, with sharing alleged to continue through at least May 2024 [2].

The complaint does not allege a hack or a leak of medical records. It alleges that email addresses and purchase or sign-up events labelled by treatment category reached advertising companies, contrary to the company's privacy promises [2]. The case also alleges confusing billing: a checkout button showing "Pay $0 today" with auto-renewal terms in small, low-contrast text, refills charged early, and a cancellation option labelled "Add/remove items from order" followed by several survey screens [2].

The regulators seek a court order, refunds or other monetary relief, and state civil penalties; no amount has been set [2].

### The Hidden Risk / The Opportunity

The hidden risk is a gap between two meanings of "private." A company can keep your clinical notes locked away and still, according to these allegations, let advertising systems learn that you signed up for an erectile-dysfunction or mental-health product. For many people, that fact is the sensitive part.

Last week, LifeeCode looked at hospital websites and the Meta Pixel. This week, regulators are suing a health company itself over what it allegedly shared and promised. The legal theory here is consumer protection — deceptive claims, unfair practices, and online-subscription rules — not HIPAA.

The opportunity is accountability. If the court accepts the regulators' case, it would reinforce that a privacy promise in marketing is enforceable, and that a treatment category is health information even when it travels as a tag on an ad event. None of this means telehealth is unsafe in general, or that other companies behave this way.

### What You Should Do

- **Read the privacy policy, not just the banner.** Look for whether the service shares data with "advertising partners" and whether you can opt out of targeted advertising.
- **Use a separate email** for health sign-ups if you want to reduce how easily ad platforms can match your account.
- **Check subscription terms before you pay.** Note the renewal date, the full price after any "$0 today" offer, and where the cancel option lives.
- **Ask one question of any health app:** which companies receive information about what I buy or sign up for?

### The Bigger Picture

Over the next five to ten years, more care will begin in an app rather than a waiting room. The line between a health service and an advertising customer will matter more, and regulators are signalling that treatment categories, not just medical records, deserve protection. Expect privacy promises to be read as commitments, and tracking tools on health sign-up pages to face the same scrutiny as medical records.

**LifeeCode Privacy Rating:** High — The complaint alleges that the categories of treatment customers sought — including sexual health and mental health — were linked to their email addresses and shared with advertising platforms despite explicit privacy promises.

## This Week's Signals

### 2. A Smartwatch ECG Plus AI Flagged Weak Heart Pumping — and Asking Twice Cut False Alarms

A study presented on 9 November as a late-breaking abstract at the American Heart Association's Scientific Sessions tested an AI model that reads 30-second smartwatch ECGs for signs of reduced heart pumping (left-ventricular systolic dysfunction) [5]. **This is a conference abstract, not a peer-reviewed paper**, from one South Korean hospital, in people already referred for a heart scan. Among 2,211 adults who used both an Apple Watch and a Galaxy Watch, the AI performed similarly on both, but 200 people (9%) got different results on the two devices [5]. In a home group, requiring a positive result on two of three days cut false positives from 18 to 9 of 70 people without the condition, while catching 31 of 38 people with it, versus 33 with a single positive day [5]. The presenter is chief medical officer of the company that built the model [5].

**Why It Matters for Your Wellness:** A watch flag may one day prompt a proper heart test. Today this is not a feature on your watch, and a watch result never replaces a clinician's assessment or an echocardiogram.

**The Futurist Lens:** The useful lesson is repetition. Wearable screening may move from single alerts to patterns over days — fewer false alarms, if the evidence holds in wider populations.

**Source:** [American Heart Association — AI analysis of ECG data measured by smartwatch may help detect reduced heart pumping function](https://newsroom.heart.org/news/ai-analysis-of-ecg-data-measured-by-smartwatch-may-help-detect-reduced-heart-pumping-function)

### 3. AI Drafts of Heart-Ultrasound Reports Needed Edits About as Often as Human Drafts

In a **randomized, blinded study presented as a conference abstract** on 9 November, Kaiser Permanente Northern California compared preliminary echocardiogram reports drafted by AI, by sonographers, and by cardiologists across 1,200 scans from 21 centres [6]. Cardiologists made substantial edits to 50.6% of AI drafts and 49.7% of human drafts, meeting the study's test for non-inferiority, and their interpretation time fell from 8.5 to 4.6 minutes [6]. Cardiologists reviewed and finalised every report [6]. The study did not measure patient outcomes [6].

**Why It Matters for Your Wellness:** Faster reporting could mean quicker results, but the safeguard that matters is the one this study kept: a qualified clinician signs off on every report.

**The Futurist Lens:** Expect AI to draft more of the paperwork behind tests, with human review as the accountability point. The question to ask will be who checked the draft, not whether AI wrote it.

**Source:** [American Heart Association — AI-interpreted echocardiograms comparable to human reports; cardiologists' time cut by about 50%](https://newsroom.heart.org/news/ai-interpreted-echocardiograms-comparable-to-human-reports-cardiologists-time-cut-by-about-50)

### 4. Show a Chatbot a Drug Ad and It Is More Likely to Recommend That Drug

A **peer-reviewed controlled experiment** in *The Lancet Digital Health*, published 11 November by researchers at the Icahn School of Medicine at Mount Sinai, tested 12 consumer-facing AI models on 33 physician-written cases, with or without a clearly labelled real drug advertisement, across 258,559 responses [7] [8] [9]. The advertised drug was chosen 47.6% of the time with the ad present, versus 35% without; in four cases, the rate went from 0% to 100% [7]. Ads did not clearly push the models toward unsupported supplements or clearly inferior drugs [7]. The study used simulated cases; no real prescribing or patient outcomes were measured [7] [8].

**Why It Matters for Your Wellness:** If you ask a chatbot about treatment, what else is on the page or in the conversation may shape the answer. Treat chatbot suggestions as questions to take to a clinician, not recommendations.

**The Futurist Lens:** As AI assistants carry advertising, the separation between ads and health answers may become a regulatory question, much as it is for doctors and drug marketing today.

**Source:** [News-Medical (Mount Sinai) — Drug ads can subtly sway AI medical treatment recommendations](https://www.news-medical.net/news/20261111/Drug-ads-can-subtly-sway-AI-medical-treatment-recommendations.aspx)

### 5. Irregular Sleep Tracked by a Smart Ring Was Associated With More Depression and Anxiety Symptoms

A **peer-reviewed cross-sectional analysis** in *Scientific Reports* from UCSF and UC San Diego used Oura ring data from 22,894 people in the TemPredict cohort, averaging 154 days each [10] [11] [12]. Average sleep regularity scores were lower in people reporting severe depression symptoms than minimal symptoms (74.93 vs 83.74), with smaller gaps for anxiety and loneliness [10]. This is an **association**: it does not show that irregular sleep causes these symptoms, symptoms were self-reported, and the cohort was originally recruited to study COVID-19 [10]. The study was funded in part by Oura, and some authors have financial ties to the company [10].

**Why It Matters for Your Wellness:** A consistent sleep schedule is a sensible habit for many people, but a ring's regularity score is not a mental-health assessment. If you are worried about your mood, talk to a qualified professional.

**The Futurist Lens:** Wearables may one day add context to mental-health care, but only with independent studies, honest labels, and strong protection for some of the most sensitive data a device can collect.

**Source:** [Neuroscience News — Irregular sleep linked to loneliness and depression](https://neurosciencenews.com/irregular-sleep-loneliness-depression-32412/)

## Privacy Radar This Week

| Story | Data Risk | Who Has Your Data | Action Required |
|---|---|---|---|
| Hims & Hers lawsuit (allegations) | High | The telehealth company and, according to the complaint, advertising platforms such as Meta and Snap | Read privacy policies for "advertising partners"; opt out of targeted ads; consider a separate email for health sign-ups |
| Smartwatch AI-ECG study | Medium | Watch makers, the AI developer, and the research hospital | Check what heart data your watch app shares; treat any flag as a prompt to see a clinician |
| AI-drafted echo reports | Low | Your health system, which ran the AI within its own care process | Ask whether AI helped draft your report and who reviewed it |
| Drug ads and AI chatbots | Medium | AI chatbot providers, which hold your conversations | Avoid sharing identifying health details; check chatbot data and training settings |
| Smart-ring sleep study | Medium | The ring maker and, if you join research, the study team | Review ring-app sharing and research-consent settings |

## Global Watch

### India Opens Registration for Consent Managers Under Its Data-Protection Law

On 14 November, India's Ministry of Electronics and Information Technology (MeitY) opened registration for "consent managers" under the Digital Personal Data Protection Act, according to wire reports of the ministry's announcement [15] [16]. The DPDP Rules, 2025 bring the consent-manager rule into force one year after their November 2025 publication, with most other obligations — including people's data rights and breach-notification duties — following eighteen months after publication, around May 2027 [13]. A consent manager is a registered Indian company, with a net worth of at least ₹2 crore, that gives people a single point of contact to give, manage, and withdraw consent; it is accountable to the individual and must not be able to read the personal data passing through it [13] [14].

The DPDP Act does not create a separate category for health data, and its consent managers are distinct from the consent manager used in India's digital health mission (ABDM). The signal is the model: in the world's most populous country, consent is becoming something a regulated intermediary manages on a person's behalf.

## References

1. [FTC — Five States Join FTC Lawsuit Alleging Hims & Hers Engaged in Deceptive, Unlawful Privacy Practices (Nov 10, 2026)](https://www.ftc.gov/news-events/news/press-releases/2026/11/five-states-join-ftc-lawsuit-alleging-hims-hers-engaged-deceptive-unlawful-privacy-practices)
2. [FTC v. Hims & Hers — First Amended Complaint, N.D. Cal. No. 3:26-cv-07871 (Nov 10, 2026)](https://www.ftc.gov/system/files/ftc_gov/pdf/x260029himsamendedcomplaint.pdf)
3. [FTC v. Hims & Hers — Original complaint, redacted (filed Jul 29, 2026)](https://www.ftc.gov/system/files/ftc_gov/pdf/Hims-Complaint-Redacted-E-Filed.pdf)
4. [PPC Land — Hims & Hers faces seven states as five join FTC privacy and billing suit (Nov 2026)](https://ppc.land/hims-hers-faces-seven-states-as-five-join-ftc-privacy-and-billing-suit/)
5. [American Heart Association — AI analysis of ECG data measured by smartwatch may help detect reduced heart pumping function (Nov 9, 2026)](https://newsroom.heart.org/news/ai-analysis-of-ecg-data-measured-by-smartwatch-may-help-detect-reduced-heart-pumping-function)
6. [American Heart Association — AI-interpreted echocardiograms comparable to human reports; cardiologists' time cut by about 50% (Nov 9, 2026)](https://newsroom.heart.org/news/ai-interpreted-echocardiograms-comparable-to-human-reports-cardiologists-time-cut-by-about-50)
7. [News-Medical (Mount Sinai release) — Drug ads can subtly sway AI medical treatment recommendations (Nov 11, 2026)](https://www.news-medical.net/news/20261111/Drug-ads-can-subtly-sway-AI-medical-treatment-recommendations.aspx)
8. [Medical Economics — AI chatbot treatment recommendations are swayed by drug ads (Nov 2026)](https://www.medicaleconomics.com/view/ai-chatbot-treatment-recommendations-are-swayed-by-drug-ads)
9. [The Lancet Digital Health — Ad-verse Effects: Pharmaceutical Advertising and Drug Recommendations by Consumer-Facing AI in a Controlled Study (Nov 11, 2026)](https://doi.org/10.1016/j.landig.2026.101114)
10. [Neuroscience News — Irregular sleep linked to loneliness and depression (Nov 13, 2026)](https://neurosciencenews.com/irregular-sleep-loneliness-depression-32412/)
11. [Bioengineer.org — Irregular sleep schedules linked to greater depression and anxiety in wearable study (Nov 12, 2026)](https://bioengineer.org/irregular-sleep-schedules-linked-to-greater-depression-and-anxiety-in-wearable-study/)
12. [Scientific Reports — Associations between sleep regularity indexed from wearable device data and mental health symptoms in the TemPredict longitudinal cohort study (Nov 2026)](https://www.nature.com/articles/s41598-026-77545-y)
13. [MeitY — Digital Personal Data Protection Rules, 2025, G.S.R. 846(E) (Nov 13, 2025)](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf)
14. [MeitY — Digital Personal Data Protection Act, 2023](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf)
15. [The Tribune (ANI) — Govt opens registration for consent managers under DPDP Act; Rs 2 crore net worth required (Nov 14, 2026)](https://www.tribuneindia.com/news/consent-managers/govt-opens-registration-for-consent-managers-under-dpdp-act-rs-2-crore-net-worth-required)
16. [Inc42 — DPDP Act implementation: MeitY opens consent manager registration portal (Nov 14, 2026)](https://inc42.com/buzz/dpdp-act-implementation-meity-opens-consent-manager-registration-portal/)

*Sourcing note: the journal pages for references 9 and 12 could not be opened during research or production; the figures for stories 4 and 5 come from the institutions' releases and specialist coverage reproducing the abstracts.*
