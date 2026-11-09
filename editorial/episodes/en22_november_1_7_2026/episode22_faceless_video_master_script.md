# LifeeCode Episode 22 — Faceless Video Master Script

**Coverage:** Sunday 1 November – Saturday 7 November 2026 (America/New_York)
**Runtime target:** 10:30 (10–11 minutes) · ~140 wpm
**Format:** Faceless-first. Narrator voice-over; creator on camera is optional and never assumed.
**Deep dive:** The Vendor You Never Met: A Transcription Breach, 13.3 Million Patients, and a Missing Login Check
**Source of truth:** `website_brief_episode22.md`

> **Medical-information notice (on screen at 0:40 and in description):** LifeeCode is general education. It does not diagnose, treat, or give individual medical advice. Speak to a qualified clinician before making care decisions based on an app, AI tool, wearable, or risk score.

---

## 0:00–0:25 — Cold Open

**NARRATION**
Somewhere, a company you have never heard of may be holding your diagnosis, your test results, and your Social Security number. You didn't choose it. You probably can't name it. And this week, four state attorneys general showed what happens when that company skips one simple login check.

**[VISUAL CUE:]** Slow push through a deep-navy space. A single glowing teal document node drifts toward a clinic outline, then splits into three faint, unlabeled side-channels leading off-screen into shadow. One channel flickers amber.
**[ON-SCREEN TEXT:]** "Who else is holding your health story?"

---

## 0:25–1:15 — Intro + Lineup

**NARRATION**
Welcome to LifeeCode. I'm Deveendra Murmu. Every week we ask one question about health technology: what does this mean for your health, your data, and your future?

A quick note: LifeeCode is general education. It doesn't diagnose, treat, or give individual medical advice. Please talk to a qualified clinician before acting on an app, an AI tool, a wearable, or a risk score.

This is the week of November first to seventh, 2026. Under the Microscope: the vendor you never met. Then four signals — a smartwatch blood-pressure study, an FDA paper on medical robots, a ruling in the Meta Pixel case, and an AI scribe in India that has to wait for a doctor. Then Global Watch, and the Privacy Radar.

**[VISUAL CUE:]** LifeeCode wordmark resolves on navy. Medical notice card (white on navy, amber rule) holds 5 seconds. Lineup builds as five stacked cards; the deep-dive card is larger with an amber "Under the Microscope" tab. A greyed sixth slot reads "Global Watch — no standalone story."
**[ON-SCREEN TEXT:]** "Week of Nov 1–7, 2026" · "Educational only — not medical advice" · lineup titles

---

## 1:15–5:00 — Under the Microscope: The Vendor You Never Met

### 1:15–2:05 — What happened

**NARRATION**
On November sixth, Connecticut's attorney general, with Michigan and New Jersey, announced a settlement with five Perry Johnson companies. New York announced it too. These companies did coding, billing, and recording work for health-care organizations — the people who turn a doctor's dictated notes into a written record.

This is a settlement with state attorneys general, not a court finding. But here is what the attorneys general say happened. In March 2023, hackers logged in with an employee's credentials. The company didn't require multi-factor authentication for remote access — that second code on your phone. The attackers harvested passwords and opened unencrypted files.

**[VISUAL CUE:]** Abstract login gate: one keyhole glows teal, a second keyhole beside it stays dark and empty. A key-shaped light passes the first gate unchallenged. Files appear as translucent sheets without the teal lock glyph.
**[ON-SCREEN TEXT:]** "State enforcement settlement — not a court finding" · "No second login check (MFA)" · "Unencrypted files"

### 2:05–2:45 — The alarm that never rang

**NARRATION**
Here's the part that stays with me. The company's own software recorded the intruders. It saw them. But it wasn't configured to alert anyone. The companies learned of the breach two months later — when the hackers contacted them.

**[VISUAL CUE:]** **Transition 1:** a monitoring waveform scrolls, logging amber spikes; a muted bell icon beside it never animates. Calendar pages flip quietly: March → May.
**[ON-SCREEN TEXT:]** "Activity recorded. No alert sent." · "Discovered ~2 months later"

### 2:45–3:30 — What was exposed, and the terms

**NARRATION**
The files held names, birth dates, addresses, Social Security numbers, diagnoses, insurance details, lab and diagnostic results, and medication names. More than thirteen point three million people. About four point two million in New York.

The companies pay at least three hundred thousand dollars now. Another nine point seven million is due only if they fail the terms — a full security program, multi-factor authentication, encryption, annual risk assessments, and rules for keeping and destroying health data.

**[VISUAL CUE:]** Data-type chips (text only, no real records) stack into a column. A counter climbs to "13.3M+". Money bar: a small solid amber segment ($300K) beside a long dashed outline ($9.7M, labelled "suspended").
**[ON-SCREEN TEXT:]** "13.3 million+ people" · "$300K now · $9.7M only if terms are broken" · "Required: MFA · encryption · risk assessments"

### 3:30–4:10 — The hidden risk

**NARRATION**
The hidden risk is distance. You choose your hospital. You don't choose the vendor behind it. Yet that vendor may hold the most detailed version of your story. And these weren't exotic failures — a missing login check, unencrypted files, an alarm that never rang. Basics. One fair caution: this case doesn't prove other transcription companies share these gaps. The lesson is oversight.

**[VISUAL CUE:]** **Transition 2:** pull back from the vendor node to reveal the clinic in the foreground and several anonymous vendor nodes behind it, connected by thin teal lines. One line glows red briefly, then returns to teal.
**[ON-SCREEN TEXT:]** "You choose the clinic. Not the vendors behind it."

### 4:10–4:40 — Action card

**NARRATION**
What can you do? Read breach letters closely, especially if they name a company you don't know. If your Social Security number was involved, consider a credit freeze or the free monitoring offered. Ask your provider which outside companies handle your records — and whether they use multi-factor authentication and encryption. And check your insurance statements for services you never received.

**[VISUAL CUE:]** Four-item checklist card on navy, each item ticks in teal as narrated.
**[ON-SCREEN TEXT:]** "1. Read breach letters · 2. Consider a credit freeze · 3. Ask: which vendors? MFA? encryption? · 4. Check insurance statements"

### 4:40–5:00 — Futurist lens + rating

**NARRATION**
Over the next five to ten years, more of your records will pass through vendors — including AI note-takers. Vendor security is becoming patient safety. The question won't just be "is my hospital secure?" It'll be "who else is holding my story?" Our Privacy Rating: High.

**[VISUAL CUE:]** Timeline arrow "2026 → 2036" with vendor nodes multiplying; red High rating badge lands.
**[ON-SCREEN TEXT:]** "5–10 years: vendor security = patient safety" · "LifeeCode Privacy Rating: HIGH"

---

## 5:00–8:40 — This Week's Signals

### 5:00–6:05 — Signal 2: A smartwatch and your blood pressure

**NARRATION**
On November fifth, Google Research, with Beth Israel Deaconess and Harvard Medical School, described a study published in Nature. Their model used a consumer smartwatch's pulse sensor and motion data, plus height, to look for signs of high blood pressure.

In a research study of 196 people at five US sites, checked against 24-hour blood-pressure monitoring, the watch model caught about sixty-six percent of people with high blood pressure and correctly cleared about ninety percent of those without it. A single office check caught about fifty-five percent.

But Google calls this early feasibility research — not a product feature, not a diagnosis. Its current blood-pressure trends feature is labelled for general wellness and "not a prescreener." High blood pressure is often silent, so a nudge toward a proper cuff reading could help one day. Today, no watch replaces the cuff, or your clinician.

**[VISUAL CUE:]** Abstract unbranded wrist silhouette with a soft teal pulse waveform. Two horizontal bars compare "Watch model 65.8%" and "Office check 55.3%" sensitivity, both under a header "Research setting, n = 196". Amber stamp: "Early feasibility research".
**[ON-SCREEN TEXT:]** "Peer-reviewed research (Nature) — not a product, not a diagnosis" · "Sensitivity 65.8% vs 55.3% · Specificity 90.0%" · "A hint, not a reading"

### 6:05–6:55 — Signal 3: FDA and medical robots

**NARRATION**
On November sixth, the FDA posted a discussion paper on weighing benefits and risks for medical robots that work with some autonomy, or are steered remotely. It's a request for feedback, open until January fifth. The FDA is clear: this is not guidance, draft or final.

For you, the question is: if software or a surgeon in another city is involved in a procedure, who's in control at each step — and what happens if the connection drops? Over the next decade, these robots could widen access to specialists. The rules written now decide how accountability is shared.

**[VISUAL CUE:]** Abstract articulated arm in white line art (no hospital, no patient). A long teal signal line runs from a distant city skyline glyph to the arm; the line briefly breaks and an amber "?" appears at the break.
**[ON-SCREEN TEXT:]** "FDA discussion paper — not guidance" · "Feedback until Jan 5, 2027 · Docket FDA-2026-N-13135"

### 6:55–7:50 — Signal 4: Hospital websites and Meta

**NARRATION**
In an order dated October thirtieth — two days before our window, but reported during it — a federal judge in California certified four classes of Facebook users in the Meta Pixel health-care case. Plaintiffs allege a tracking tool on more than 660 hospital and provider websites sent health information — clicks, conditions, doctors, prescriptions — to Meta without consent.

To be precise: this lets people sue together. It doesn't decide whether Meta broke any law, and Meta plans to appeal. But it asks a question worth holding onto: when you searched a hospital website, was that private?

**[VISUAL CUE:]** Generic browser frame (no real site or logo) with a search field typing "appointment"; a tiny pixel dot in the corner emits faint lines toward an abstract off-screen node. Four class tiles appear: "Patient status · Health info · Prescriptions · Device cookie".
**[ON-SCREEN TEXT:]** "Class certification — no ruling on the merits" · "Plaintiffs allege…" · "Meta plans to appeal" · "Order dated Oct 30"

### 7:50–8:40 — Signal 5: India's AI scribe

**NARRATION**
In Kolkata on November fifth and sixth, India's National Health Authority demonstrated an AI voice scribe that turns a doctor–patient conversation into a structured record, in several Indian languages. The safeguard: a doctor must review and approve that record before it's linked to the patient's health account. States were also encouraged to benchmark AI tools before buying them and to name cybersecurity leads.

These were demonstrations and recommendations — no rollout dates, no accuracy figures. Still, human sign-off built in from the start is exactly the design to look for.

**[VISUAL CUE:]** Two abstract speech waveforms flow into a structured card; the card pauses at an amber "Doctor review" gate, then a teal check unlocks it and it slides into a consent-locked vault icon labelled "ABHA".
**[ON-SCREEN TEXT:]** "Government demonstration — no rollout or accuracy data yet" · "Doctor approves before it reaches your record"

---

## 8:40–9:00 — Global Watch

**NARRATION**
No separate Global Watch story this week. Our strongest international signal — India's AI scribe — is already a main story, and other international candidates fell outside the window. We'd rather leave the space empty than fill it with something weak.

**[VISUAL CUE:]** Slowly rotating navy globe with a single teal pin over India linking back to Signal 5; a greyed "Global Watch" card.
**[ON-SCREEN TEXT:]** "Global Watch: intentionally no standalone story this week"

---

## 9:00–10:00 — Privacy Radar

**NARRATION**
Time for the Privacy Radar.
The Perry Johnson breach: High. Read breach notices, consider a credit freeze, and ask which vendors handle your records.
The smartwatch blood-pressure research: Medium. Treat any alert as a prompt for a proper cuff reading, and check your app's sharing settings.
The FDA robotics paper: Low, for now. Before a robot-assisted procedure, ask who controls each step and what happens if the link fails.
The Meta Pixel case: High. Use tracking protection on health websites, and the patient portal or phone for sensitive bookings.
India's AI scribe: Medium. Ask whether AI helped write your notes, and check your record for mistakes.

**[VISUAL CUE:]** Radar sweep on navy; five blips light in turn — red for High, amber for Medium, teal for Low — with the four-column table building row by row.
**[ON-SCREEN TEXT:]** Table: Story · Data Risk · Who Has Your Data · Action Required (as in the brief)

---

## 10:00–10:30 — Closing

**NARRATION**
This week's thread: the weak link is rarely the gadget. It's the vendor, the tracking code, the missing sign-off — the people and systems around the technology. And every one of those can be asked about.
That's LifeeCode: privacy-first, evidence-based health technology. If this helped, follow and share it with someone who'd want to know who's holding their story. I'm Deveendra Murmu. See you next week.

**[VISUAL CUE:]** The vendor nodes from the cold open return, now each labelled with a small teal "?" — questions you can ask. Fade to LifeeCode end card.
**[ON-SCREEN TEXT:]** "The weak link is rarely the gadget." · "Privacy-first · Evidence-based · Human-AI collaboration" · "Follow · Share · Brief: [insert website brief URL]"

---

## Source and evidence safeguards (production — not read aloud)

| Story | Status wording to keep | Never say |
|---|---|---|
| Perry Johnson | "settlement with state attorneys general"; "the attorneys general say"; "$300K now, $9.7M only if terms are broken" | "admitted", "found liable", "$10 million fine"; do not name hospital clients; do not generalise to all transcription vendors |
| Google smartwatch | "a study found", "in a research study of 196 people", "early feasibility research", "not a product feature, not a diagnosis" | "detects hypertension", "measures blood pressure", "rivals a doctor", "accuracy" for sensitivity |
| FDA robotics | "discussion paper and request for feedback"; "not guidance" | "FDA approved / regulates / sets rules for" |
| Meta Pixel | "certified classes", "plaintiffs allege", "no ruling on the merits", "Meta plans to appeal"; order dated 30 Oct | "Meta broke the law", "Meta stole" |
| India scribe | "demonstrated", "encouraged", "advised"; doctor approval before linking | "rolled out nationwide", accuracy or adoption claims |

Citations: see `website_brief_episode22.md`, references 1–12. Visuals contain no real patients, records, logos, branded devices, clinician portraits, robots-as-doctors, or panic imagery.
