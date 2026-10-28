# Launch preparation — author site and LifeeCode

**Status: staging content and route preparation complete; not published.**

## Completed

- The approved author pages remain unchanged in content and design.
- LifeeCode retains its approved homepage and original reading text/font. All publication navigation, announcement links, cards, footer links, cross-language links and article navigation now remain inside the staging site.
- Sixteen remaining published pages are preserved under `/lifeecode/`: the English archive, nine English written briefs (1, 2, 3, 5, 6, 7, 8, 9, 11), English podcast, Hindi hub, three Hinglish written briefs (8, 9, 11), and LifeeCode About.
- Original article copy, citations, source destinations, privacy ratings, Privacy Radar, existing disclaimers, archive ordering, Spotify destinations and independent Hindi audio numbering were preserved. There is no invented Issue 4, Issue 10 article, or Hindi audio episode paired by English numbering.
- Major literary headings and display-only closing callouts use Instrument Serif 400. All Inter reading styles match the captured live styles. Original custom page structure remains intact.
- Original LifeeCode About illustration was uploaded into the staging project's media storage.
- Every page has a canonical production URL and distinct title/description. Article Open Graph metadata is distinguished from hub pages.
- Build-time static rendering creates 23 full content pages, 15 legacy URL fallback pages, a 404 document and a 21-URL sitemap. Content and metadata exist before JavaScript runs.
- Preview indexing is disabled in `client/src/site.config.json` and `robots.txt`. Draft newsletter/privacy pages stay excluded from the sitemap and nonindexable.
- Newsletter collection remains disabled; `hello@devmmurmu.com` remains the author contact.

## URL migration

`/briefs`, all nine existing `/briefs/{issue}` URLs, `/podcast`, `/hindi`, and all three `/hindi/briefs/{issue}` URLs resolve to their corresponding `/lifeecode/` routes. Both trailing-slash and no-slash legacy forms were tested. Client fallback navigation preserves the query string and hash.

`/` intentionally becomes the author homepage. `/about` and `/about/` intentionally become the author biography. The former LifeeCode About is retained at `/lifeecode/about/`; no redirect from `/about` is created. LifeeCode navigation points only to its own About page.

`client/public/_redirects` contains 30 **candidate** permanent HTTP redirects. This format is host-specific and is not proof the managed production host applies them. The client and static fallbacks are not represented as verified HTTP 301 responses.

## Tests completed

- All 16 migrated pages: complete normalized copy comparison and all content/source/podcast link comparisons passed.
- All original Inter reading properties (family, size, weight, line height, color, max-width, letter spacing) passed comparison. Only display-type closing callouts intentionally differ.
- Sixteen routes at 320, 375, 768, 1024 and 1440 pixels: no horizontal overflow or clipped content found (80 route/width checks).
- Thirty old-path forms: compatibility navigation passed, including query/hash retention.
- Missing briefs and invalid LifeeCode paths: genuine not-found UI, no fabricated content.
- `/about/`: remains the author biography, not the old publication About.
- Desktop/mobile visual inspection: archives, full English/Hinglish articles, podcast, Hindi hub and LifeeCode About.
- TypeScript and production build: passed.
- Local production build: all 16 migrated route bodies passed; representative author/publication pages have readable static content and canonical metadata with JavaScript disabled. No runtime errors.
- Original live homepage application assets remain unchanged. No DNS, mail, domain, live project or account settings were modified.

## Publication maintenance

Each preserved page is an editable React module in `client/src/content/lifeecode/`, with metadata in `manifest.json`. The lazy module registry is generated from the manifest, so there is no second hard-coded route list to maintain.

For a future **approved** English written issue:

1. Add its content module, preserving the locked LifeeCode brief format and reviewed sources.
2. Add a manifest entry with the final path, legacy path if needed, module name, language, article flag, issue number, unique title and description.
3. Update the English archive and relevant current-issue cards deliberately. Do not assume a Hindi written version or audio exists.
4. Add a Hindi/Hinglish module and manifest entry only if that written brief is separately prepared and approved. Hindi audio numbering stays independent.
5. Update audio destinations in the appropriate hub without creating an article for audio-only releases.
6. Run `pnpm check` and `pnpm build`, then compare source links, privacy ratings, disclaimers, archive ordering, cross-language links and mobile layouts.

The build regenerates the sitemap and static pages. `pnpm prepare:static` requires a fresh Vite build and intentionally refuses a second run over prepared output. No publishing automation was enabled or modified. The original live editing task/workflow must be retargeted to this project's content structure before the next actual issue is published.

## Release gates — still required before live launch

1. **Original live source backup/access:** the live editable source project was not attached here. Retain a current repository-level checkpoint/export of that live project before replacing or attaching its custom domain. The earlier public-deployment archive alone is not a source-project backup.
2. **HTTP redirects:** establish which redirect mechanism the chosen managed production host supports. Activate and test the 30 permanent redirects. Verify one hop, correct destination and query behavior. Do not claim `_redirects` works until tested against that host.
3. **HTTP 404:** the inherited generic local server returns HTTP 200 with a not-found screen for unknown paths. A static `404.html` is prepared, but the production host must return HTTP 404 for invalid paths. No backend/server code was changed in this frontend-only preparation.
4. **Media delivery:** staging media loads correctly. A bare local Express preview does not implement Manus media storage delivery. Verify the original hero and About illustration on the chosen production host before domain cutover.
5. **Final content sweep:** confirm the live publication has not received another issue since the captured October 10/11, 2026 reference; merge any newer content before launch.
6. **Indexing:** after launch approval, set `indexingEnabled` to `true`, rebuild, and verify production robots/canonical/sitemap. Keep preview domains nonindexable and draft newsletter/privacy paths excluded.
7. **Newsletter/privacy:** current form stays disabled and the privacy page stays explicitly draft. If launching with it disabled, review its visible staging language; if activating, approve a real provider, consent/privacy copy, welcome email and unsubscribe flow first. Hostinger mailbox service is not a newsletter list provider.
8. **Final explicit launch approval:** approve the exact combined site and domain cutover after the above hosting checks, source backup and fresh live-content comparison. This preparation does not authorize or perform live publication.
