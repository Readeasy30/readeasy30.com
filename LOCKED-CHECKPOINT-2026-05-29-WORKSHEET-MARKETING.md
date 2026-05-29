# Locked Checkpoint — Worksheet Marketing and Connector Workaround

Date locked: 2026-05-29

## Locked state

ReadEasy30 marketing and worksheet funnel work is locked at this checkpoint.

## Major work completed

- Added and connected the printable worksheet hub.
- Added beginner phonics support page.
- Added ESL reading comprehension support page.
- Expanded functional literacy support.
- Simplified homepage navigation into major hub links.
- Removed duplicate worksheet QA checklist.
- Added a single broad worksheet funnel QA checklist.
- Added connector workaround workflow notes.
- Added static local link checker script.
- Added sitemap checker script.
- Added npm check scripts.

## Worksheet funnel pages now part of the marketing cluster

- `printable-reading-worksheets.html`
- `phonics-reading-worksheet.html`
- `main-idea-reading-worksheet.html`
- `vocabulary-in-context-worksheet.html`
- `evidence-from-text-worksheet.html`
- `sequence-reading-worksheet.html`
- `cause-and-effect-reading-worksheet.html`
- `functional-literacy-worksheet-1.html`
- `functional-literacy-worksheet-2.html`
- `functional-literacy-worksheet-3.html`
- `worksheet.html`
- `sample-reading-worksheet.html`

## Connector workaround files locked

- `CONNECTOR-WORKAROUND.md`
- `CODEX-WORKFLOW.md`
- `MARKETING-STATUS-2026-05-29-CONNECTOR-WORKAROUND.md`
- `scripts/check-static-links.mjs`
- `scripts/check-sitemap.mjs`
- `package.json`

## QA file to use

Use this file only:

- `WORKSHEET-FUNNEL-QA-CHECKLIST.md`

The duplicate file `WORKSHEET-FUNNEL-BROWSER-QA.md` was removed.

## Next required checks

Run or request Codex to run:

```bash
npm run check
```

Then perform browser QA using:

- `WORKSHEET-FUNNEL-QA-CHECKLIST.md`

## Do not repeat

- Do not recreate duplicate worksheet QA files.
- Do not recreate existing worksheet pages.
- Do not rewrite the whole marketing status file unless necessary.
- Do not convert the project to React, Vite, Next.js, TypeScript, or another framework.
- Do not add ads, tracking, payments, accounts, API keys, or public AI features without direct approval.

## Current next safe queue

1. Run `npm run check`.
2. Fix missing local links or sitemap entries reported by the scripts.
3. Browser-check worksheet funnel.
4. Record results in a small dated QA status file if needed.
