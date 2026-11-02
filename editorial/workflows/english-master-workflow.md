---
name: lifeecode-weekly-healthtech-workflow
description: "Faceless-first LifeeCode weekly Health Technology and Wearables editorial workflow. Researches the latest completed Sunday–Saturday period in America/New_York, duplicate-screens the archive, selects five evidence-led stories, and produces a complete no-publish editorial package."
---

# LifeeCode Weekly Health Tech / Wearables — Master Workflow

Use this as either:

1. a **copy-paste master prompt** for a weekly production run; or
2. the substantive content for a maintained LifeeCode weekly-content skill.

This specification is intended to supersede older workflows that assume a Monday–Thursday schedule, NotebookLM as a required step, on-camera delivery, automatic publication, or asset generation by default.

## 1. Brand and Editorial Positioning

| Element | Standard |
|---|---|
| Brand | LifeeCode |
| Creator | Deveendra Murmu |
| Positioning | Privacy-First · Evidence-Based · Human-AI Collaboration |
| Core topics | Health Technology and Wearables only |
| Primary audience | Health-conscious general audience; not medical specialists |
| Voice | Warm, precise, evidence-led, accessible, non-alarmist |
| Format | Faceless-first video and audio; on-camera presence is optional, never assumed |
| Editorial job | Separate meaningful health-tech signals from hype, while showing what changes for a person’s health, data, and future |
| Medical boundary | Educational content only; never diagnosis, treatment, or individualized medical advice |

### Non-Negotiable Editorial Principles

- Prioritize privacy, security, data governance, patient identity, evidence quality, and human accountability.
- Describe research as research; do not call it a real-world outcome, clinical service, or consumer benefit unless the source establishes that.
- Describe a clearance, authorization, recall, advisory vote, policy proposal, guidance document, product claim, systematic review, and patient-outcome evidence differently.
- Never convert an association into causation.
- Never imply that an app, wearable, AI system, or risk score independently diagnoses, treats, replaces a clinician, or is suitable for urgent-care decisions.
- Write in short, natural sentences. Define technical terms the first time they matter.
- Use a `3:2` or `2:3` balance of progressive breakthroughs and critical/cautionary signals across the five main stories.
- Keep the narration moving: every **20–30 seconds**, reveal a surprising fact, sharpen a consequence, establish personal relevance, or raise the next question.

---

## 2. Master Prompt — Copy and Paste for Each Weekly Run

```text
Run the LifeeCode weekly Health Tech / Wearables content workflow autonomously.

TIME WINDOW
- Use America/New_York calendar time.
- Cover the immediately completed Sunday-through-Saturday window ending on the day before this run.
- State the exact coverage dates in every deliverable.

SEQUENTIAL EPISODE NUMBERING AND ARCHIVE REVIEW
1. Inspect /home/ubuntu/lifeeecode_weekly/.
2. Identify the highest completed editorial episode number from the available archive. Do not use asset-only folders as evidence of a completed editorial package unless the user has explicitly confirmed the episode number.
3. Create the next sequential episode folder with an appropriate date-based name. Use this pattern:
   /home/ubuntu/lifeeecode_weekly/week[EPISODE]_[month]_[start-day]_[end-day]_[year]/
4. Read the current LifeeCode weekly-content skill, all applicable templates and references, and the most recent complete editorial package before planning.
5. Duplicate-screen the new story candidates against Episodes 7 through the latest completed episode. If packages are missing, document the archive limitation clearly, screen all available packages, and avoid direct repeats of available material. Never falsely claim a complete duplicate screen where archive material is absent.

RESEARCH SCOPE
- Research strictly credible Health Technology and Wearables developments in the coverage window.
- Include only developments that signal a meaningful long-term shift in technology, policy, data governance, clinical practice, or health behavior.
- Exclude general science, general climate, unrelated policy, company hype, routine financing, unvalidated product marketing, and generic AI news without a direct health-technology connection.
- Prefer primary sources: regulators, peer-reviewed journals, official health-system or government announcements, clinical-trial records, credible universities, and recognized standards bodies.
- Use high-quality specialist or mainstream reporting only to add context, never as a substitute for primary evidence when it is available.
- Open and read source pages. Do not rely only on search snippets.
- Record each source URL with the exact claim it supports.

STORY SELECTION
- Select exactly five non-duplicate main stories.
- Select one privacy, security, data-governance, patient-identity, provenance, or health-data-integrity story for Under the Microscope whenever credible evidence supports it.
- Maintain a 3:2 or 2:3 balance of progressive breakthroughs and critical/cautionary signals.
- Research one genuine international Global Watch candidate. Include exactly one Global Watch item only when it adds strategic value and does not duplicate a recent theme. If no candidate is strong enough, omit the standalone story and state the editorial reason.
- Do not pad the package with a weak Global Watch item.

EVIDENCE AND LANGUAGE SAFEGUARDS
- Preserve the distinction between research, regulatory steps, advisory votes, guidance, proposals, clearances/authorizations, recalls, product claims, clinical deployment, and patient outcome evidence.
- For observational studies, use “associated with,” not “caused,” “reduced,” or “prevented.”
- For recalls or safety notices, explain the exact documented failure mechanism; do not generalize to unrelated devices or products.
- For AI and wearable studies, do not imply diagnosis, autonomous treatment, universal performance, or consumer readiness without explicit evidence.
- Include a medical-information notice in public-facing brief, scripts, and platform metadata.

CREATE THE COMPLETE EDITORIAL PACKAGE
Create exactly these eight Markdown files in the new episode folder:

1. website_brief_episode[EPISODE].md
2. episode[EPISODE]_faceless_video_master_script.md
3. episode[EPISODE]_audio_only_script.md
4. recording_marks_guide.md
5. social_and_seo_episode[EPISODE].md
6. faceless_visual_guide_episode[EPISODE].md
7. image_prompts_episode[EPISODE].md
8. research_and_duplicate_screen.md

DELIVERABLE 1 — CITED WEBSITE BRIEF
Use these headings in this exact order:

# Health Tech Weekly Brief — Episode [EPISODE], [YEAR]

[Coverage line and estimated read time]

> **Medical-information notice:** [General education; no diagnosis, treatment, or individual medical advice; speak to a qualified clinician before making care decisions from an app, AI, wearable, or risk score.]

## Under the Microscope

### [Privacy-first deep-dive title]

> **The LifeeCode Take:** [One-sentence framing]

### What Happened
[Evidence-led explanation with citations.]

### The Hidden Risk / The Opportunity
[Privacy, safety, data-governance, validation, access, or accountability analysis.]

### What You Should Do
[Two to four practical, non-medical-advice actions.]

### The Bigger Picture
[Five-to-ten-year implication.]

**LifeeCode Privacy Rating:** [High / Medium / Low] — [One-sentence reason.]

## This Week’s Signals

### 2. [Story]
[Two to three factual sentences.]

**Why It Matters for Your Wellness:** [Personal consequence without medical advice.]

**The Futurist Lens:** [Five-to-ten-year implication.]

**Source:** [Linked source]

[Repeat the same structure for stories 3, 4, and 5.]

## Privacy Radar This Week

Use exactly this fixed four-column table:

| Story | Data Risk | Who Has Your Data | Action Required |
|---|---|---|---|
| [Story 1] | [Risk] | [Data holder] | [Practical action] |
| [Story 2] | [Risk] | [Data holder] | [Practical action] |
| [Story 3] | [Risk] | [Data holder] | [Practical action] |
| [Story 4] | [Risk] | [Data holder] | [Practical action] |
| [Story 5] | [Risk] | [Data holder] | [Practical action] |

## Global Watch

- Add one international story only when it is strategically useful, credible, date-verified, and non-duplicative.
- If no strong Global Watch is included, state that the section has no standalone story and give the editorial reason briefly.

## References

- Use a numbered source list with a short descriptive title for every citation.
- Cite factual claims close to the relevant text.
- Omit “What’s Next.”

DELIVERABLE 2 — FACELESS VIDEO MASTER SCRIPT
Create a 10–11 minute faceless-first master script with visual cues and on-screen text. Include these sections in order:

1. **0:00–0:25 — Cold Open**
   - Start with a surprising fact, personal question, or concrete consequence.
   - Give the viewer a reason to care before the show intro.
   - Include visual cue and short on-screen text.

2. **Intro + Lineup**
   - Welcome to LifeeCode and state the recurring editorial question: what does this mean for your health, your data, and your future?
   - Name Under the Microscope, four supporting signals, Global Watch status, and Privacy Radar.

3. **Under the Microscope**
   - Explain the deep dive with careful evidence language.
   - Include at least two visual transitions, a practical question/action card, and a 5–10-year futurist lens.

4. **This Week’s Signals**
   - Cover each supporting story in roughly 45–70 seconds.
   - State what changed, the evidence/status line, what it means personally, and why it matters over time.

5. **Global Watch**
   - Include a short Global Watch signpost. If no standalone item is included, explain briefly that it was intentionally omitted rather than filled with a weak or repetitive story.

6. **Privacy Radar**
   - Narrate every main story’s risk rating and practical action.

7. **Closing**
   - Summarize the unifying signal in a short, reflective ending.
   - End with: privacy-first, evidence-based health technology; invite listeners to follow and share.

For every segment, include:
- `**NARRATION**`
- `**[VISUAL CUE:]**`
- `**[ON-SCREEN TEXT:]**` where useful
- explicit source/evidence safeguards at the end of the script

Never assume an on-camera host. Avoid real patient records, fake EHR screens, identifiable patients, clinician portraits, robot doctors, hospital logos, panic imagery, and visual metaphors that incorrectly imply a breach, diagnosis, or emergency.

DELIVERABLE 3 — AUDIO-ONLY SCRIPT
Create a stand-alone spoken script that contains no visual cues and naturally names these signposts:

- Opening
- Under the Microscope
- This Week’s Signals
- Global Watch
- Privacy Radar
- Closing

Maintain all evidence distinctions in spoken language. Use conversational phrasing and approximately 135–145 words per minute. Include a medical-information notice near the beginning. Include an audio source note that directs production staff to the website brief for citations.

DELIVERABLE 4 — RECORDING MARKS GUIDE
Provide:

- delivery tone;
- pacing target;
- pause, full-beat, slow-down, emphasis, and lower-intensity marks;
- pronunciation guidance for unusual names/acronyms;
- marked opening;
- deep-dive priority marks;
- a signal-by-signal pacing table;
- marked Privacy Radar;
- marked closing;
- pre-record checklist covering evidence language, no-overclaim, medical caveat, and narration momentum.

DELIVERABLE 5 — SOCIAL AND SEO PACK
Include all of the following:

- Recommended YouTube title plus three alternate titles.
- YouTube description, chapters, tags, and hashtags.
- Spotify episode title and description.
- Six-post X thread.
- LinkedIn post.
- Facebook post.
- SEO keyword table: primary, secondary, long-tail, and supporting keywords.
- Thumbnail brief with concept, headline, layout, palette, type, and exclusions.
- Production checklist.

Use direct-link placeholders such as `[link]` and `[insert website brief URL]` where live links do not yet exist.

The production checklist must explicitly say:

- Do not generate or alter thumbnail artwork as part of the editorial workflow.
- Do not generate or alter Spotify art as part of the editorial workflow.
- Add the episode to the website’s `client/src/lib/episodes.config.ts` only after direct YouTube, Spotify, and Apple Podcasts URLs are live.

DELIVERABLE 6 — FACELESS VISUAL GUIDE
Include:

- episode visual thesis;
- visual-language modules;
- segment-by-segment build table with time, visual sequence, and on-screen copy;
- asset direction;
- editing rhythm;
- accessibility and captioning requirements;
- source-card language that reflects evidence status;
- LifeeCode color/type tokens.

Use the LifeeCode visual system:

| Token | Value | Use |
|---|---|---|
| Navy | #0A1628 | Main background |
| Amber | #F5A623 | Review/attention |
| White | #F7F8FA | Primary text |
| Teal | #00D4D4 | Bounded, verified data flow |
| Red | #E53E3E | High-risk privacy/data marker only |

DELIVERABLE 7 — IMAGE PROMPTS
Create specifications and prompts only. Do not generate visual assets in the standard weekly workflow.

Include:

- one 16:9 thumbnail concept;
- one visual prompt for Under the Microscope;
- one visual prompt for each supporting signal;
- one Privacy Radar background prompt;
- one Global Watch check or Global Watch story prompt if applicable;
- global visual constraints;
- a negative prompt.

Every prompt must preserve LifeeCode’s deep-navy, teal, amber, red, and white visual language. Prompts should request abstract, non-identifiable editorial concepts rather than real patients, health records, fake interfaces, branded devices, robots, or hospital logos.

DELIVERABLE 8 — RESEARCH AND DUPLICATE SCREEN
Include:

- coverage window;
- sequential episode baseline;
- archive check and explicit limitations;
- editorial theme and working title;
- progressive-versus-cautionary balance;
- duplicate-screen table listing every candidate, editorial status, duplicate result, and reason;
- selected-main-stories table with precise evidence/status line;
- Global Watch decision;
- complete source record;
- editorial safeguards that prevent overclaiming.

QUALITY CONTROL BEFORE DELIVERY
1. Verify all eight required files exist and are non-empty.
2. Verify the website brief contains Under the Microscope, This Week’s Signals, Privacy Radar This Week, Global Watch, a medical-information notice, five main stories, a fixed four-column Privacy Radar table, and source citations.
3. Verify the master script has cold open, intro + lineup, deep dive, four signals, Global Watch, Privacy Radar, closing, visual cues, and on-screen text.
4. Verify the audio-only script has natural spoken signposts for Under the Microscope, This Week’s Signals, Global Watch, Privacy Radar, and Closing.
5. Verify the research screen records the archive limitation honestly when relevant.
6. Verify no art, thumbnails, Spotify assets, external posts, uploads, or publishing were generated or performed.
7. Deliver a concise summary and a direct file link to each of the eight files.
```

---

## 3. Default File and Folder Naming

```text
/home/ubuntu/lifeeecode_weekly/
└── week[EPISODE]_[month]_[start-day]_[end-day]_[year]/
    ├── website_brief_episode[EPISODE].md
    ├── episode[EPISODE]_faceless_video_master_script.md
    ├── episode[EPISODE]_audio_only_script.md
    ├── recording_marks_guide.md
    ├── social_and_seo_episode[EPISODE].md
    ├── faceless_visual_guide_episode[EPISODE].md
    ├── image_prompts_episode[EPISODE].md
    └── research_and_duplicate_screen.md
```

Examples:

```text
week20_october_18_24_2026/
week21_october_25_31_2026/
```

---

## 4. Research and Shortlisting Method

Use this sequence before drafting:

1. **Confirm the coverage window.** Derive Sunday–Saturday in `America/New_York`; do not use a rolling seven-day period.
2. **Inventory the archive.** Identify the highest complete episode and assess which earlier packages are available for duplicate screening.
3. **Research broadly, then verify narrowly.** Find more candidates than needed, but open primary sources and keep only source-supported candidates.
4. **Score candidates.** Favor impact, evidence quality, consumer relevance, distinctiveness, and a genuine privacy/security/data-governance angle.
5. **Choose five.** Make the progressive/cautionary ratio explicit.
6. **Choose the Under the Microscope story.** Prefer a deeply reportable governance or privacy story over a flashy announcement.
7. **Test Global Watch separately.** Include only a strategically differentiated international signal, not an obligatory sixth story.
8. **Preserve status language.** Put the study or regulatory category near the first factual claim, not in a buried caveat.
9. **Draft from citations outward.** Do not write a claim first and hunt for support later.
10. **Build scripts from the brief.** The master and audio scripts should not introduce broader claims than the brief supports.

### Candidate Evaluation Questions

- Is the item genuinely within the specified Sunday–Saturday coverage window?
- Is it health technology or wearable-related, rather than unrelated science or policy?
- Does a primary source support the key fact?
- Does it change how people may encounter health technology, health data, or clinical workflow in the future?
- Can the story be explained without medical hype or false certainty?
- Is it substantively different from archived episodes?
- Does it contribute to the progressive/cautionary balance?
- Does it offer a personal implication and a 5–10-year lens?

---

## 5. Evidence-Language Guide

| Evidence / status | Safe wording | Avoid |
|---|---|---|
| Peer-reviewed research | “A study found…” / “Researchers reported…” | “This proves…” |
| Observational study | “Was associated with…” | “Caused,” “prevented,” “reduced” |
| Systematic review | “The review pooled…” / “The authors concluded…” | “All clinical AI fails…” |
| FDA clearance / authorization | “FDA cleared/authorized…” | “FDA proved it works for everyone” |
| FDA recall / safety notice | “FDA issued a recall/safety notice for…” | “All devices of this kind are unsafe” |
| Proposed rule / policy | “CMS/FDA proposed…” | “The rule now requires…” |
| Guidance / educational case | “FDA guidance/examples describe…” | “FDA approved/mandated…” |
| Product claim | “The company says…” | “The product delivers…” without independent evidence |
| Preliminary / accepted manuscript | “Early peer-reviewed/accepted research…” | “Settled evidence” |
| Wearable metric validation | “The processing method was validated…” | “The wearable diagnoses…” |

---

## 6. Production and Publishing Boundary

The standard weekly workflow produces **editorial files only**. It does not:

- generate Spotify art;
- generate thumbnails;
- create video or audio assets;
- upload to YouTube, Spotify, Apple Podcasts, or a website;
- publish social posts;
- update the website episode config before direct episode links exist.

Do any of these only when separately requested by the user.

When direct live links are available, the normal website-update surface is:

```text
/home/ubuntu/devenmurmu/client/src/lib/episodes.config.ts
```

Update `LATEST_EPISODE_NUMBER`, `LATEST_LINKS`, the English episode entry, and the weekly issue entry in that one config file. Then run a fresh build check before delivery.

---

## 7. Standard Closing Response After a Weekly Run

Use a brief delivery message. State:

- the episode number and coverage window;
- the central editorial theme;
- whether Global Watch was included or intentionally omitted;
- that no art, publishing, or platform upload occurred;
- direct links to all eight required files.

Do not paste the full package into chat.

---

## 8. Notes for Maintaining This as a Skill

- Keep this file aligned with the most recent user-approved workflow, not an older day-by-day production calendar.
- The package is **faceless-first**. A creator intro/outro may be recorded, but an on-camera appearance is optional.
- Use the same source of truth for all story claims: the cited website brief.
- Keep actual Episode numbering user-confirmed when archived packages are incomplete or ambiguous.
- Preserve the “no generation or publishing unless separately requested” default.
- Treat `episodes.config.ts` as the normal website-update surface after publication links exist.
