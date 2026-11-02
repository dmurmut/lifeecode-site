# LifeeCode weekly runbook

Instructions for the three scheduled weekly runs. Each run starts in a fresh session with no memory of earlier runs, so everything a run needs is in this repository.

## Weekly schedule (America/New_York)

| Run | When | Does |
|---|---|---|
| A — Research | Sunday ~8:15 AM | Research, duplicate screen, English shortlist + deep dive, Hindi topic |
| B — Hindi package | Sunday ~2:20 PM | Hindi audio episode package (publishes Tuesday 8:00 AM IST) |
| C — English package | Monday ~7:40 AM | English eight-file package + website brief, opened as a pull request with a preview |

Each run is sized to fit in one Claude Pro usage window. Do not merge the runs' work into fewer sessions.

## Shared rules for every run

- **Repository:** `dmurmut/lifeecode-site`. Work on the branch `weekly/<sunday-date>` (for example `weekly/2026-11-08`). Run A creates it from `main`; Runs B and C check it out and pull it. Never commit weekly work directly to `main`.
- **Coverage window:** the Sunday-through-Saturday week that ended the day before Run A, in America/New_York time. For the run on Sunday 8 November 2026, that is Sunday 1 – Saturday 7 November 2026. State the exact dates in every deliverable.
- **Episode numbers:** English and Hindi have separate numbering. Read `editorial/archive/episode-index.md`; the next episode is one more than the highest listed. The first runs here are **English Episode 22** and **Hindi Episode 20**.
- **Folders:** English work goes in `editorial/episodes/en<NN>_<month>_<start>_<end>_<year>/` (e.g. `en22_november_1_7_2026/`). Hindi work goes in `editorial/episodes/hi<NN>_<month>_<start>_<end>_<year>/`.
- **Workflows:** the English workflow is `editorial/workflows/english-master-workflow.md` (current; supersedes older English instructions). The Hindi workflow is `editorial/workflows/hindi-skill/SKILL.md` with its templates and references, plus the "Phase 3: Hindi audio episode" section and Hindi cover system of `editorial/workflows/older-combined-master-prompt.md`. Ignore any instruction in those files to use Manus, a `/home/ubuntu/...` path, or NotebookLM inside this session: paths map to this repository, and NotebookLM is a step the creator does himself with the files you prepare.
- **Research quality:** open and read primary sources; never rely on search snippets. Record each URL with the claim it supports. Keep the evidence-language guide in the English workflow.
- **Nothing is published by a run.** No posting, uploading or merging. Image generation is not available: write image prompts only.
- **Report to the creator** at the end of each run with `SendUserMessage`: what was produced, anything that needs his judgement, and the files (send the key Markdown files with `SendUserFile`). Keep it short.
- **Commit attribution:** follow the attribution lines the session provides.
- **If something blocks the run** (repo cannot be attached, branch missing, a source cannot be verified), finish what can be finished honestly, commit it, and say plainly in the report what is missing.

## Run A — Research (Sunday morning)

1. Attach and clone the repo, create the branch `weekly/<today's date>` from `main`.
2. Read `editorial/archive/episode-index.md`, the most recent folders in `editorial/episodes/`, and the published briefs listed in `client/src/content/lifeecode/pages.ts` (legacy issues) and `client/src/content/lifeecode/brief-data/`. This is the duplicate-screen baseline. Episodes known only by title are screened by title; state that limitation.
3. Follow sections 4 ("Research and Shortlisting Method") and the STORY SELECTION / EVIDENCE rules of the English workflow. Find more candidates than needed, verify, score, and select exactly five English stories with one Under the Microscope deep dive and a Global Watch decision.
4. Write `research_and_duplicate_screen.md` (English Deliverable 8) in the English episode folder, complete with the source record.
5. Choose the Hindi episode topic following Steps 1–2 of the Hindi skill (audio-native, India-localized, non-repetitive against Hindi titles in the index). It may draw on this week's research or be a separate India-relevant signal. Write `research_notes.md` in the Hindi episode folder: topic, why it fits, India context, verified sources with claims, and limits.
6. Add both new episodes to `editorial/archive/episode-index.md` with status "in production" and the working titles.
7. Commit, push the branch, report the English five, the deep dive, the Global Watch decision and the Hindi topic.

## Run B — Hindi package (Sunday afternoon)

1. Attach and clone the repo; check out `weekly/<this Sunday's date>`.
2. Read the Hindi folder's `research_notes.md` and the Hindi workflow files.
3. Produce the Hindi package in the Hindi episode folder, as separate Markdown files:
   - `script_hi<NN>.md` — full 8–10 minute two-host Hindi/Hinglish script in Devanagari with Roman tech terms, creator intro/outro, the fixed Hindi outro and tagline, and the spoken educational boundary;
   - `notebooklm_source_pack_hi<NN>.md` — source pack and NotebookLM instruction, per the template;
   - `spotify_metadata_hi<NN>.md` — title, description, summary, disclaimer, per the metadata template;
   - `social_posts_hi<NN>.md` — LinkedIn, X and Facebook launch posts;
   - `cover_art_prompts_hi<NN>.md` — prompts for two 1920×1920 covers following the Hindi cover system (prompts only).
4. Re-verify every factual claim against the sources in `research_notes.md`.
5. Update the Hindi row in the episode index with the final title. Commit, push, report (send the script and Spotify metadata files).

## Run C — English package and website brief (Monday morning)

1. Attach and clone the repo; check out `weekly/<yesterday's date>`.
2. Read the English folder's `research_and_duplicate_screen.md` and the English workflow.
3. Create the remaining seven English deliverables in the English episode folder, exactly as the workflow specifies (website brief Markdown, faceless video master script, audio-only script, recording marks guide, social and SEO pack, faceless visual guide, image prompts). Run the workflow's quality control.
4. Publish-ready website brief: convert the Markdown website brief into `client/src/content/lifeecode/brief-data/<NN>.json` following `editorial/PUBLISHING.md`. The JSON must say the same thing as the Markdown brief.
5. Build check: `pnpm install --frozen-lockfile && pnpm check && pnpm exec vite build && node scripts/prepare-static.mjs`. Fix any brief validation error it reports.
6. Update the English row in the episode index with the final title and status "awaiting review".
7. Commit, push, and open a pull request from the branch into `main` titled `LifeeCode Episode <NN> — <deep-dive title>` (use `gh pr create`). The body lists the files and says: "Merging this pull request publishes the brief on devmmurmu.com." Vercel adds a preview link to the pull request.
8. Report: the pull request link, a one-paragraph summary, anything needing his judgement; send the website brief and audio-only script with `SendUserFile`.

## Publishing (done by the creator)

Reviewing the pull request's Vercel preview and merging it publishes the brief and the editorial files. Changes can be requested in any Claude session attached to this repository before merging.
