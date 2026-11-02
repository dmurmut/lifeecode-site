# Publishing a weekly brief on the website

A brief is one JSON file: `client/src/content/lifeecode/brief-data/<issue>.json`. Adding it publishes the page at `/lifeecode/briefs/<issue>/` and automatically updates the brief archive, the issue navigation on every brief, the "latest brief" links, the sitemap and the `/briefs/<issue>` redirect. Nothing else needs editing.

Copy `brief-data/12.json` as the model. The build refuses an incomplete file and names the missing field.

## Fields

| Field | Content |
|---|---|
| `issue` | Episode number; must match the file name |
| `coverage` | Week covered, e.g. `"November 1 – 7, 2026"` (shown as "Week of …") |
| `signal` | One or two sentences under the hero: "This week, LifeeCode examines …" |
| `notice` | Optional medical-information notice; omit to use the standard one |
| `deepDive.title` | Under the Microscope headline (also the page title) |
| `deepDive.privacy` | `"high"`, `"medium"` or `"low"` |
| `deepDive.take` | The LifeeCode Take, one sentence |
| `deepDive.whyItMatters`, `deepDive.futuristLens` | Optional summary cards |
| `deepDive.sections` | In order: What happened · The hidden risk / the opportunity · What you should do · The bigger picture. Each `{ "heading", "paragraphs": [...] }` |
| `deepDive.privacyRating` | One-sentence reason for the LifeeCode Privacy Rating |
| `deepDive.sources` | `[{ "label", "url" }]`, primary source first |
| `signals` | Exactly four stories: `title`, `privacy`, `paragraphs`, `whyItMatters`, `futuristLens`, `sources` |
| `radar` | Exactly five Privacy Radar rows (one per main story, deep dive first): `story`, `privacy`, `data` (who has your data), `action` |
| `globalWatch` | Optional `{ "title", "paragraphs", "sources" }` |
| `globalWatchNote` | When there is no Global Watch item: one sentence giving the editorial reason |
| `closing` | Optional `{ "label", "text" }` banner. Do not use "What's next?" |
| `references` | Numbered reference list `[{ "label", "url" }]` |

## Inline markup in any text field

- `[3]` — citation; links to `references[2]`. Every citation must have a reference.
- `[label](https://…)` — inline link.
- `**text**` — bold.

## Check before committing

```sh
pnpm check && pnpm exec vite build && node scripts/prepare-static.mjs
```
