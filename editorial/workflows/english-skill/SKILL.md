---
name: health-tech-weekly-content
description: "Complete weekly content production workflow for LifeeCode — a health technology newsletter, podcast, and YouTube channel by Deveendra Murmu (devmmurmu.com). Use this skill for researching weekly health tech news, formatting website briefs, writing podcast/YouTube scripts, generating intro/outro scripts, optimizing SEO and YouTube metadata, designing thumbnails, and managing the full weekly publishing workflow. Brand LifeeCode. Positioning Privacy-First, Evidence-Based, Human-AI Collaboration (Manus AI + NotebookLM + human review)."
---

# LifeeCode Weekly Content Production Skill

## Brand Reference

| Element | Value |
|---|---|
| Channel/Brand Name | LifeeCode |
| Creator | Deveendra Murmu |
| Website | devmmurmu.com |
| Positioning | Privacy-First · Evidence-Based · Human-AI Collaboration |
| Tagline | "Speed of AI, Soul of Deveendra" |
| Topic Focus | Health Technology (wearables, medical AI, longevity, FDA, privacy) |
| Tone | Professional, warm, evidence-based, accessible to general audience |
| Workflow | Manus AI (research) → NotebookLM (audio) → Deveendra (intro/outro + review) |

## Workflow Overview

The weekly production cycle runs Monday–Thursday across four phases. Full day-by-day breakdown with time estimates is in `references/weekly_workflow.md`.

| Phase | Day | Key Output |
|---|---|---|
| Research & Planning | Monday | 5 curated updates + deep dive topic + keywords + title |
| Content Creation | Tuesday | Website brief + episode script + intro script |
| Audio & Video | Wednesday | NotebookLM audio + recorded intro/outro + assembled video + thumbnail |
| Publishing | Thursday | Website brief live + YouTube uploaded + podcast uploaded + social posts |

## Core Templates

### Research Prompt
Use `templates/research_prompt.md` — copy-paste into Manus each Monday. Returns 5 health tech updates with summary, source, Why It Matters, and Futurist Lens for each.

### Website Brief
Use `templates/website_brief_template.md` — formats 5 updates into the locked LifeeCode website brief structure used in Episode 7. Story 1 is always the deep dive with the fixed subsection sequence: **What Happened**, **The Hidden Risk / The Opportunity**, **What You Should Do**, **The Bigger Picture**, and **LifeeCode Privacy Rating**. Stories 2-5 are standard updates with **Why It Matters for Your Wellness**, **The Futurist Lens**, and **Source**. After the five stories, always include the **Privacy Radar This Week** table in the Episode 7 format. Then evaluate whether there is a strong international or cross-border development worth adding as a **Global Signal** section. Omit **What's Next?** unless the user explicitly requests it.

When using the template, prefer the Episode 7 editorial cadence: a strong LifeeCode Take, deeper narrative expansion in the lead story, concise but readable update blocks, a structured Privacy Radar table, and a separate Global Signal only when the signal is genuinely useful rather than filler.

From Episode 9 onward, treat this structure as the default brief format.

### Episode Script
Use `templates/script_template.md` — 8-10 minute structure across 5 segments: What Happened → Hidden Risk/Opportunity → The Evidence → What You Should Do → The Futurist Lens. Includes NotebookLM prompt and YouTube chapter timestamps.

## Key Reference Files

- `references/intro_outro_scripts.md` — Four 60-second intro options (Personal Hook, Question Hook, Stat Hook, Evergreen Template) + standard 20-second outro. Recording tips included.
- `references/seo_youtube_guide.md` — Title formulas, master tag template, keyword bank by focus area, spoken keyword placement guide, thumbnail specifications, icon guide by story type, weekly SEO checklist.
- `references/weekly_workflow.md` — Full day-by-day workflow with time estimates, tool instructions, and 6-month success metrics.

## Content Priorities

When selecting the deep dive topic from 5 updates, prioritize in this order:
1. Privacy, security, or data protection angle (strongest LifeeCode differentiator)
2. Peer-reviewed research or clinical study (builds evidence-based credibility)
3. FDA approval or regulatory change (high search intent, timely)
4. Breakthrough innovation with real-world consumer impact
5. Longevity or biological age tracking (growing audience interest)

## Tone and Style Rules

Write all LifeeCode content in active voice with short sentences. Avoid medical jargon — if a technical term is necessary, define it immediately. Never make health claims without citing a source. Always include at least one actionable step the reader/listener can take. The "Why It Matters for Your Wellness" section must connect to personal health impact, not industry implications.

For website briefs specifically, keep section naming and ordering consistent week to week so readers recognize the format immediately. Preserve the Privacy Radar heading and table layout exactly unless the user asks for a redesign. Treat the Global Signal as a standing evaluation step: search for one worthwhile international signal each week, include it only if it adds real strategic value, and skip it rather than padding the brief with a weak example.

## Privacy Rating System

Every deep dive ends with a LifeeCode Privacy Rating:
- 🔴 **High Risk** — Data is actively shared with third parties, sold, or inadequately protected
- 🟡 **Medium Risk** — Data practices are unclear, opt-out required, or risks are conditional
- 🟢 **Low Risk** — Data stays on-device or with the user's healthcare provider only

## Thumbnail Design System

Background: Deep navy `#0A1628`. Primary text: White, Montserrat ExtraBold. Accent: Amber `#F5A623`. Alert: Red `#E53E3E` (privacy stories). Tech graphics: Teal `#00D4D4`. See full icon guide and Canva build instructions in `references/seo_youtube_guide.md`.

## Expanding to New Topics

When the user is ready to expand beyond Health Tech (e.g., to Science & Tech), create a new parallel skill rather than modifying this one. The research prompt, brief template, and script template can be adapted with updated focus areas and keywords. The SEO guide, intro/outro scripts, thumbnail system, and workflow structure transfer directly.
