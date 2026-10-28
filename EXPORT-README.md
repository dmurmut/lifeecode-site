# devmmurmu.com — source export

Exported from the available saved Manus website project on 2026-10-28T03:16:17.320423+00:00.

- Saved source revision: `e25a2f8db98693dffa94688f766d2d18f80c2e05`
- Saved revision time: 2026-10-11T02:06:24+00:00
- Project: Deveendra Murmu — Nonfiction Author, including LifeeCode.
- This is a project-source ZIP, not a GitHub download. GitHub and the managed Git remote could not be authenticated during this export, so a newer remote revision has not been ruled out.
- Live homepage build-asset comparison against the available local production build: MATCHED. See `EXPORT-MANIFEST.json` for details.

## Included

The exact 162 tracked source/configuration files from the saved revision, plus three backed-up LifeeCode images in `export-media/`. Author pages, publication pages, article content, styles, routing, server delivery rules, build scripts, package lockfile and schema definitions are included. Original spelling of Deveendra and LifeeCode is retained.

## Excluded

Environment variables, passwords, API tokens, `.env` files, `.git` history/remotes, dependencies, build output, terminal logs, browser sessions, email mailbox contents, database contents, and DNS/account configuration. This is source plus the listed image backups, not a full hosting/account backup.

## Development and build

Use a compatible modern Node.js runtime (Node 22 recommended) and pnpm 10.4.1, as specified by the package manager field.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
pnpm start
```

For development, use `pnpm dev`. Supply any required hosting environment variables securely; none are included here. The exported code is unchanged from the saved revision.

## Moving away from Manus hosting

The app contains Manus runtime, media-storage, and optional platform integration plumbing. In particular `/manus-storage/` is served by the Manus storage proxy and normally needs platform environment credentials. The three matching image files are included in `export-media/` using the filenames referenced by the source. Their original bytes are WebP-encoded despite the historical `.png` filenames; serve them with the appropriate `image/webp` content type or deliberately convert them when migrating. A developer can serve them at the corresponding `/manus-storage/<filename>` URLs on the new host or deliberately change image URLs and replace the storage proxy. The export does not make those hosting changes automatically.

Preserve `server/launchDelivery.ts` behavior when choosing a host: legacy permanent redirects, canonical trailing slashes, true HTTP 404 responses, and production-domain indexing. A static SPA-only host may not apply those server rules. Google-hosted fonts remain external dependencies.

## Historical notes

`launch-readiness.md`, `qa-notes.md`, and `core-pages-qa.md` are historical development notes included as tracked source; their staging-status wording is not a current deployment-status report. The site cutover was completed after those notes were written. Newsletter collection remained disabled in this source revision.

No website deployment, DNS, mail, or GitHub repository was changed to create this archive.
