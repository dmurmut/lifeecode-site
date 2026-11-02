---
name: lifeecode-hindi-audio-podcast
description: "Hindi-first, India-focused LifeeCode podcast workflow. Use for: researching and packaging episodes for Indian listeners, localizing global health-tech evidence into familiar Indian use cases, preparing NotebookLM-ready source packs and script seeds, guiding intro/outro assembly for audio-first episodes, writing Devanagari-plus-Roman metadata and social copy, applying medical-disclaimer best practice, planning Spotify-ready publishing assets, and generating brand-aligned episode art. Keep separate from the English/global LifeeCode workflow."
---

# LifeeCode Hindi Audio Podcast Skill

## Overview

Use this skill for **LifeeCode Hindi**, the Hindi-first and India-focused branch of the LifeeCode ecosystem. This skill is for **audio-first podcast production** built around familiar Indian listener realities, not the English/global weekly workflow.

The core job is to turn health-tech topics into **familiar Indian listener use cases**, then package them for the working sequence below:

> **Research → India-localized framing → NotebookLM source pack → script seed → title/description/disclaimer → episode art → intro/outro assembly → publishing/social packaging**

Keep the tone **evidence-based, warm, privacy-aware, and non-hype**. Prefer ordinary listener language over technical jargon.

## When to Use This Skill

Use this skill when the user wants any of the following for **LifeeCode Hindi**:

| Use case | Apply this skill? |
|---|---|
| Launch or refine a Hindi podcast episode for Indian listeners | **Yes** |
| Turn a health-tech topic into a NotebookLM-ready briefing pack | **Yes** |
| Localize a global research topic into familiar Indian listener scenarios | **Yes** |
| Create episode title, description, disclaimer, social copy, or publishing metadata in the LifeeCode Hindi style | **Yes** |
| Generate episode-specific podcast art aligned with the LifeeCode Hindi brand | **Yes** |
| Prepare intro/outro or assembly guidance for NotebookLM-based audio episodes | **Yes** |
| Produce English/global LifeeCode weekly content | **No** — use `health-tech-weekly-content` instead |

## Non-Negotiable Editorial Rules

Follow these rules every time.

| Rule | Standard |
|---|---|
| **Audience** | Hindi-speaking Indian listeners, not a generic global audience |
| **Positioning** | Privacy-First, Evidence-Based, Human-AI Collaboration |
| **Format** | Audio-native first; explain through conversation, narrative, and practical interpretation |
| **Medical boundary** | Educational content only, never personal medical advice |
| **Localization** | Do not merely translate; adapt to Indian behavior, buying patterns, routines, and concerns |
| **Practicality** | Always give the listener something concrete to understand or do |
| **Product separation** | Keep LifeeCode Hindi distinct from the English/global LifeeCode stream |
| **Social distribution** | Use the main LifeeCode presence with clearly labeled Hindi posts unless the user decides to create separate accounts later |

## Language and Script Standard

Use **Devanagari for Hindi body text** while keeping the **brand name** and major **tech terms** in **Roman**. This is the default written style for website copy, Spotify copy, and social copy unless the user explicitly asks for a Romanized-only version.

Apply the script rule below.

| Element | Default treatment |
|---|---|
| **Brand name** | Keep **LifeeCode** in Roman |
| **Hindi body text** | Write in **Devanagari** |
| **Tech and platform terms** | Keep familiar terms such as **smartwatch**, **sleep score**, **privacy**, **wearables**, **health apps**, **AI**, **fitness band**, and **Spotify** in Roman when that reads more naturally |
| **Hashtags** | Prefer **Roman-script hashtags** for consistency and easier typing unless the user wants to test Hindi hashtags |
| **Fallback** | If a user wants Romanized Hindi/Hinglish for a specific surface, provide it as an alternate rather than replacing the main standard |

Read `templates/episode_metadata_template.md` when generating episode metadata in this mixed-script style.

## Workflow

Follow the sequence below unless the user requests only one sub-part.

### Step 1: Choose an audio-native episode angle

Prefer topics that work well without visuals. Good formats include myth-busting, weekly analysis, interviews, behavior-change guidance, and narrative case studies.

A topic is strong when it passes all three tests:

| Test | What to check |
|---|---|
| **Familiarity** | Will an Indian listener immediately recognize the use case? |
| **Interpretation need** | Does the listener need help making sense of a metric, claim, or technology? |
| **Audio suitability** | Can the idea be explained clearly without showing charts or screens? |

### Step 2: Gather evidence and India-specific context

Research the science, but also gather **Indian listener context**. The final episode can rely on global evidence, but it must be framed for Indian life.

Read `references/localization_guide.md` before drafting if the episode topic is new.

At minimum, capture these three layers:

| Layer | What to gather |
|---|---|
| **Evidence** | Studies, reviews, policy documents, privacy policies, or other defensible evidence |
| **Indian market context** | Adoption, pricing, consumer familiarity, sales behavior, gifting behavior, or common use patterns |
| **Listener scenarios** | Commute stress, shift work, late dinners, family responsibilities, exam pressure, late-night scrolling, aspirational fitness use, gift-purchase devices, and similar real-life patterns |

### Step 3: Build the NotebookLM source pack

Use `templates/notebooklm_source_pack_template.md`.

The source pack should do three things:

1. State the **episode recommendation** and why it matters in India.
2. Separate **India-specific framing** from **global evidence** so the logic stays honest.
3. Give NotebookLM a strong narrative base, not just raw notes.

Do not dump links without interpretation. The pack should read like a clear editorial brief.

### Step 4: Build the script seed

Use `templates/script_seed_template.md`.

The script seed should sound like a plausible Hindi/Hinglish spoken episode. It does not need to be the final script, but it should be close enough to guide NotebookLM and the later intro/outro assembly pass.

Write for the ear. Prefer short sentences, familiar Hindi/Hinglish phrasing, immediate definition of technical ideas, and a memorable closing rule.

### Step 5: Write title, description, and disclaimer

Use `templates/episode_metadata_template.md` and read `references/disclaimer_standard.md`.

Apply the standard below:

| Item | Rule |
|---|---|
| **Title** | Curiosity-driven, listener-centered, familiar, simple |
| **Description** | Explain the question, the practical value, and the privacy or accuracy angle |
| **Script style** | Default to **Devanagari-plus-Roman**, not all-Roman Hinglish, unless the user asks otherwise |
| **Disclaimer** | Full version in show description, short version in every episode description, spoken line only when medically sensitive |

Do not make the metadata sound like a gadget review channel. This is **health-tech interpretation**, not generic tech commentary.

### Step 6: Generate episode art

Use `templates/episode_art_prompt_template.md`.

Episode art must remain visually aligned with the approved **LifeeCode Hindi** show identity while adding a **topic-specific symbolic visual**.

| Element | Standard |
|---|---|
| **Brand** | LifeeCode in consistent font; Hindi differentiated tastefully |
| **Tone** | Premium, calm, credible, editorial, not flashy |
| **Palette** | Dark deep-indigo / near-midnight foundation unless the user requests otherwise |
| **Topic symbol** | Minimal, symbolic, clear at small size |
| **No clutter** | Avoid thumbnail-style overcrowding or gadget-ad aesthetics |
| **Known approved direction** | Dark premium background, subtitle at the bottom, no unnecessary red accent unless the user explicitly wants a change |

If refining existing art, use the current approved show art as a reference.

### Step 7: Prepare the audio assembly handoff

LifeeCode Hindi currently uses a **NotebookLM-generated main audio** plus a **custom recorded intro and outro** from the creator.

Package the episode so the user can assemble it in this order:

> **Title card / cold open if needed → custom intro → NotebookLM main audio → custom outro**

When preparing intro/outro guidance, keep the language natural and brief. The intro should frame the listener question; the outro should reinforce the educational boundary, future-listening cue, and optional website cue.

### Step 8: Prepare publishing and social packaging

Read `references/distribution_workflow.md` when the user needs publishing or social distribution help.

At minimum, package these surfaces cleanly:

| Surface | What to prepare |
|---|---|
| **Spotify or podcast host** | Title, description, disclaimer, episode art, and publish timing guidance |
| **Website** | Landing-page or episode-page copy when needed |
| **Social posts** | Platform-adapted copy for LinkedIn, X, and Facebook |
| **Outro cue** | A short repeatable website or future-episode line when useful |

## What “India-Localized” Means Here

This skill should **not** pretend that every claim comes from India-only evidence. Instead, it should do this honestly:

> Use the best available evidence, then interpret it through Indian consumer behavior, Indian listener routines, Indian price sensitivity, and Indian digital-health literacy gaps.

That distinction matters. The content should feel locally relevant without overstating local evidence.

Read `references/localization_guide.md` whenever you need to sharpen this distinction.

## Episode Output Bundle

When the user asks for a full episode package, produce these items if relevant:

| Output | Purpose |
|---|---|
| NotebookLM source pack | Main research-and-framing document |
| Script seed | Easier audio generation or recording draft |
| Episode title and description | Publishing metadata |
| Disclaimer copy | Episode-safe educational boundary |
| Episode art | Platform-ready visual asset |
| Social post package | Platform-ready launch copy |
| Intro/outro notes | Assembly-ready host cues |
| Optional notes file | Overflow evidence and backup material |

## Recommended Tone

The voice should feel like **a calm, thoughtful guide** explaining modern health technology to an intelligent general listener.

| Use more of this | Use less of this |
|---|---|
| Clear interpretation | Hype |
| Familiar examples | Abstract industry talk |
| Warm authority | Clinical stiffness |
| Evidence with humility | Overconfident claims |
| Privacy awareness | Gadget obsession |

## Reference Files

Read these as needed, not automatically.

| File | When to read it |
|---|---|
| `references/localization_guide.md` | When turning a topic into an Indian listener story without fake localization |
| `references/disclaimer_standard.md` | When writing show descriptions, episode descriptions, or spoken medical-boundary lines |
| `references/distribution_workflow.md` | When packaging Spotify setup, social posts, website mentions, publish cadence, or platform-specific post handling |

## Templates

Use these templates when generating repeatable outputs.

- `templates/notebooklm_source_pack_template.md`
- `templates/script_seed_template.md`
- `templates/episode_metadata_template.md`
- `templates/episode_art_prompt_template.md`

## Separation from the English/Global Skill

Keep this skill separate from `health-tech-weekly-content`.

The English/global skill is broader and supports newsletter, YouTube, podcast, and weekly publishing for a wider audience. This skill is narrower and should be used when the work specifically requires:

1. **Hindi-first delivery**,
2. **Indian audience relevance**,
3. **audio-native podcast structure**,
4. **NotebookLM-plus-host assembly**, and
5. **episode-level packaging including art, metadata, and social distribution**.

If the user later wants a full Hindi weekly operating system with its own recurring editorial cadence beyond this episode-packaging workflow, create a **parallel Hindi weekly skill** rather than merging it into the English/global one.
