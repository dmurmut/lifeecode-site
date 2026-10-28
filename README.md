# LifeeCode source export — 27 October 2026

This is a clean, GitHub-ready export of the current LifeeCode project source. The underlying latest project revision is checkpoint `c56f6539`, saved 7 September 2026; the export itself was regenerated on 27 October 2026.

## Run locally

Install Node.js 22 LTS or newer and pnpm 10, then:

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

## Build for deployment

```bash
pnpm build
```

The deployable static site is generated at `dist/public/`. Upload the **contents** of that folder to a static host. Keep `.htaccess` beside `index.html` on Apache-based hosts such as Hostinger shared hosting so direct loads of routes such as `/briefs/11` work.

## Portability changes in this export

The three active public images are stored locally under `client/public/assets/`. Manus-only Vite plugins, debug files, storage proxy, project configuration, external artifact remote, and inactive Map/OAuth template code have been removed. No passwords, secrets, database credentials, or API keys are included.

## Content editing

English written briefs are in `client/src/data/briefs.ts`. Podcast links and the independent Hindi/Hinglish podcast archive are in `client/src/data/publishing.ts`. Devanagari-plus-Roman Hinglish written briefs are in `client/src/pages/HindiBrief*.tsx`. This source has no browser-based CMS.
