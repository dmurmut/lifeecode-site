# LifeeCode Weekly Production Workflow

## Overview

Total time: 7-9.5 hours/week across 4 days.
Tools: Manus AI (research + scripting), NotebookLM (audio generation), phone (intro/outro recording), CapCut free (video assembly), Canva free (thumbnail), YouTube Studio (upload).

---

## Monday — Research & Planning (1.5-2 hours)

**Step 1: Run the Research Prompt (45 min)**
Copy the research prompt from `templates/research_prompt.md` and run it in Manus. Review the 5 updates returned, plus the explicit Global Signal check.

**Step 2: Select the Deep Dive Topic (15 min)**
From the 5 updates, choose the one that:
- Has the strongest privacy, accuracy, or innovation angle
- Has high search intent (check YouTube autocomplete for the topic)
- You find genuinely interesting

**Step 3: Keyword Research (15 min)**
Search YouTube for your deep dive topic. Note the autocomplete suggestions — these are real user queries. Select 1 primary keyword, 1 secondary keyword, and 1 long-tail keyword from the SEO guide or from your search findings.

**Step 4: Write the Title and Thumbnail Headline (15 min)**
Use the title formula from `references/seo_youtube_guide.md`. Write the thumbnail headline (shorter, punchier version of the title — max 5 words).

---

## Tuesday — Content Creation (2-2.5 hours)

**Step 5: Format the Website Brief (30 min)**
Ask Manus: "Format these 5 health tech updates into the locked LifeeCode website brief format used in Episode 7. Story [N] is the deep dive. Preserve the Privacy Radar This Week table format, omit What's Next, and add a Global Signal section only if this week has a genuinely strong international signal." Use `templates/website_brief_template.md` as the format reference.

**Step 6: Expand the Deep Dive (30 min)**
Ask Manus: "Expand Story [N] into a full deep dive section for the website brief. Keep the fixed subsection order: What Happened, The Hidden Risk / The Opportunity, What You Should Do, The Bigger Picture, and a LifeeCode Privacy Rating." Provide the original update and any additional source URLs.

**Step 7: Write the Episode Script (45 min)**
Ask Manus: "Write an 8-10 minute podcast/YouTube script for the deep dive on [TOPIC] using the LifeeCode script template. Primary keyword: [X]. Secondary keyword: [Y]. Long-tail keyword: [Z]." Use `templates/script_template.md` as the format reference.

**Step 8: Write the Intro Script (15 min)**
Choose the appropriate intro option from `references/intro_outro_scripts.md`. Fill in the bracketed sections for this week's topic.

---

## Wednesday — Audio & Video Production (2-3 hours)

**Step 9: Generate NotebookLM Audio (15 min setup, 20-30 min processing)**
Upload the website brief (or the script Segments 1-5) to NotebookLM as a source. Use the NotebookLM prompt from `templates/script_template.md`. Download the generated audio overview.

**Step 10: Record Your Intro and Outro (20-30 min)**
Record 3 takes of your 60-second intro and 20-second outro using your phone Voice Memos app. Choose the best take. No editing needed at this stage.

**Step 11: Assemble the YouTube Video (45-60 min)**
In CapCut (free):
1. Import: branded title card image (from Canva), NotebookLM audio, your intro audio, your outro audio
2. Sequence: Title card (5 sec) → Your intro audio (over title card) → NotebookLM audio (over title card or simple B-roll) → Your outro audio → End card
3. Export at 1080p

**Step 12: Create the Thumbnail (10-15 min)**
Open your Canva Template B. Update the headline and subtext for this week's topic. Change the icon if needed (see icon guide in SEO reference). Download as JPG.

---

## Thursday — Publishing (1-1.5 hours)

**Step 13: Publish the Website Brief (20 min)**
Copy the formatted Markdown brief into the Briefs page on devmmurmu.com.

**Step 14: Upload to YouTube (20 min)**
Upload the video. Add title, description (from SEO template), tags (from master tag list), thumbnail, and chapters. Schedule for your consistent publish time (recommend: Thursday 8am or Friday 8am in your timezone).

**Step 15: Upload to Podcast Platforms (15 min)**
Upload the NotebookLM audio (with your intro/outro added) to your podcast host (Spotify for Podcasters, Buzzsprout, or Anchor). Use the same title and description as YouTube.

**Step 16: Promote on Social Media (15-20 min)**
Post on X: Use the "Why It Matters" line from your deep dive as the post text. Add the YouTube link.
Post on LinkedIn: Write 2-3 sentences expanding the key insight. Add the website brief link.

---

## Time Summary

| Day | Task | Time |
|---|---|---|
| Monday | Research + topic selection + keywords + title | 1.5-2 hrs |
| Tuesday | Website brief + deep dive + script + intro | 2-2.5 hrs |
| Wednesday | NotebookLM + recording + video assembly + thumbnail | 2-3 hrs |
| Thursday | Publishing + promotion | 1-1.5 hrs |
| **Total** | | **7-9.5 hrs** |

---

## 6-Month Success Metrics

Evaluate at Month 3 and Month 6:

| Metric | Month 3 Target | Month 6 Target |
|---|---|---|
| Episodes published | 12 (no missed weeks) | 24 (no missed weeks) |
| Website monthly visitors | 100-300 | 300-800 |
| YouTube subscribers | 50-150 | 150-500 |
| Podcast listeners/ep | 20-80 | 80-300 |
| Email subscribers | 30-100 | 100-400 |
| Audience engagement | First comments/shares | Regular community |

If Month 6 shows clear upward trajectory on 3+ metrics, continue and consider expanding to Science & Tech. If growth is flat, analyse which format (website/podcast/YouTube) performs best and double down on that one before expanding.
