# CODEX-CURRENT-TASK.md

Last updated: 2026-06-04

## Repository

`Wholelychit/readeasy30.com`

## Current task: Continue locked production build

Continue from the locked production checkpoint. Do not restart, redesign, or replace the working lesson engine.

## Current locked status

ReadEasy30 is already in a strong production stage with:

- Static HTML/CSS/JavaScript architecture
- Homepage
- Reading lesson app
- 30-day A-H reading path toward Grade 8 readiness
- Placement check
- Read aloud
- Bubbles coaching
- Vocabulary support
- Progress tracking
- Printable worksheet hub
- Functional literacy worksheet cluster
- Adult reading support pages
- ESL reading support pages
- Parent/tutor guide
- Privacy, terms, contact, robots, and sitemap

## Current safe queue

1. Browser-test `https://readeasy30.com/` after Cloudflare deploys.
2. Browser-test `https://readeasy30.com/app.html`.
3. Confirm placement check shows 8 steps.
4. Confirm manual levels A-H start at the right lesson bands.
5. Confirm Day 30 reaches Grade 8 readiness content.
6. Confirm Progress Report shows Levels A-H correctly.
7. Browser-test `https://readeasy30.com/printable-reading-worksheets.html`.
8. Print-test the functional literacy worksheet pages.
9. Add future printable worksheet pages only when they support the reading path and do not duplicate the current cluster.
10. Keep ReadEasy30 aligned with MathEasy30 and `Wholelychit/marketing-system`.

## Rules

- Do not redesign the site.
- Do not convert to React, Vite, Next.js, TypeScript, Tailwind, or build tools.
- Keep plain HTML/CSS/JS.
- Do not rebuild the day selector.
- Do not replace the lesson engine.
- Do not remove working localStorage progress, read-aloud, placement, Bubbles, or lesson navigation features.
- Do not recreate the existing functional literacy worksheet trio.
- Do not add API keys, tracking scripts, live ads, payment systems, affiliate links, user accounts, upload systems, or public AI.
- Fix small safe issues directly when possible.
- Work in useful batches and commit clear changes.

## Stop points

Stop before private keys, API keys, live tracking, live ads, payment setup, user accounts, upload systems, affiliate links, framework migration, major code deletion, or anything that risks breaking production.
