# ReadEasy30 Project Status

Date updated: 2026-05-28

## What the site does

ReadEasy30 is a simple HTML, CSS, and JavaScript GitHub Pages reading-practice website. It provides a calm 30-minutes-a-day reading lesson app, a 30-day A-H reading path from early reader through Grade 8 readiness, Bubbles coaching messages, vocabulary support, read-aloud support, localStorage progress tracking, and public support resources for children, adults, ESL learners, parents, tutors, and struggling readers.

ReadEasy30 is aligned with the shared Wholelychit education growth system with MathEasy30. Shared campaign and marketing planning belongs in `Wholelychit/marketing-system`; website code stays in this repo.

## Current tech stack

- Static HTML
- CSS
- JavaScript
- GitHub Pages style hosting

No framework conversion has been made. Do not convert this project to React, Vite, Next.js, TypeScript, or build tools unless Gerry clearly requests a rebuild.

## Files/pages complete

Public pages currently available and covered by sitemap:

- `index.html`
- `app.html`
- `daily-reading-practice.html`
- `calm-reading-practice-30-minutes-a-day.html`
- `adult-reading-practice.html`
- `adult-reading-practice-without-shame.html`
- `esl-reading-practice.html`
- `esl-reading-practice-everyday-english.html`
- `parent-tutor-guide.html`
- `reading-levels-beginner-to-8th-grade.html`
- `sample-reading-worksheet.html`
- `about.html`
- `contact.html`
- `privacy.html`
- `terms.html`
- `sitemap.xml`
- `robots.txt`

Core app and support files:

- `app.js`
- `grade-path-lessons.js`
- `report.js`
- `startup-fix.js`
- `css/style.css`
- `css/site-links.css`
- `css/launch-fixes.css`
- `README.md`
- `AGENTS.md`
- `CODEX-WORKFLOW.md`
- `LOCKED-CHECKPOINT.md`
- `GRADE-8-PATH-QA-CHECKLIST.md`
- `GRADE-8-STATIC-QA.md`
- `ACCESSIBILITY-TESTING-NOTES.md`
- `CODEX-UNIVERSAL-REPO-AUDIT.txt`
- `MANUAL-QA-CHECKLIST.md`
- `CONTENT-PLAN.md`
- `SEO-CHECKLIST.md`

## Files/pages needing work

- `contact.html` does not have a live contact form by design. Add a form only after privacy, spam handling, and storage decisions are approved.
- Manual browser QA is still required for `app.html`, placement, levels A-H, read aloud, day selector, localStorage progress, and progress report behavior.
- Future useful content may include more printable worksheets and carefully scoped SEO resources.

## SEO status

Universal audit confirmed the sitemap-listed public pages have titles, meta descriptions, canonical URLs, and H1s. The site has multiple support/SEO pages for daily reading practice, calm 30-minute practice, adult reading, ESL reading, reading levels, parent/tutor support, and a printable worksheet.

`SEO-CHECKLIST.md` now records the required title, description, canonical, H1, internal link, sitemap, readability, and monetization-safety checks for future pages.

No live ads, tracking, payments, affiliate links, accounts, or public AI features were added.

## Sitemap/robots status

- `sitemap.xml` exists and includes all public pages checked in this audit.
- `robots.txt` exists and points to `https://readeasy30.com/sitemap.xml`.
- The compact sitemap format is currently working and should be preserved unless a safe full replacement succeeds later.

## Footer/navigation status

Public pages include main navigation and footer navigation. During this audit, `privacy.html` footer links were updated to include the current resource cluster, including Calm Reading, Adult Reading Without Shame, Everyday ESL Reading, and the worksheet page.

Navigation is intentionally broad because ReadEasy30 has several resource pages. Future cleanup may consolidate resource links if the footer becomes too large, but no risky navigation change is needed now.

## Trust/legal status

- `about.html` exists and states what ReadEasy30 does and does not promise.
- `contact.html` exists and explains that no public contact form is connected yet.
- `privacy.html` exists and states that localStorage progress is stored on the learner's device and that accounts, payments, live ads, and private school records are not currently collected.
- `terms.html` exists and states that ReadEasy30 is practice support, not a replacement for a teacher, tutor, school plan, doctor, or reading specialist.

## Monetization status

No live ads, live affiliate links, payment tools, tracking scripts, account systems, ordering systems, credentials, API keys, or public AI chatbot features are installed.

Future ads, premium resources, email signup, forms, accounts, analytics, or payments require privacy/safety review and direct approval before launch.

## QA status

Universal Codex Repo Audit completed on 2026-05-28 for `Wholelychit/readeasy30.com`.

Checks run:

- Read control files first: `README.md`, `PROJECT-STATUS.md`, `AGENTS.md`, `CODEX-WORKFLOW.md`, `sitemap.xml`, and `robots.txt`.
- Confirmed optional control files were missing, then added `MANUAL-QA-CHECKLIST.md`, `CONTENT-PLAN.md`, and `SEO-CHECKLIST.md` for repo control consistency.
- Checked sitemap-listed public pages for title, meta description, canonical URL, H1, navigation, footer, trust/legal presence, contact status, and stale placeholder text.
- Checked `sitemap.xml` coverage and `robots.txt` sitemap pointer.
- Checked responsive/readability CSS signals in `css/style.css`, `css/site-links.css`, and `css/launch-fixes.css`.
- Checked for forbidden live integrations: ads, affiliate links, tracking scripts, payments, credentials, API keys, accounts, ordering integrations, and public AI.

Static audit result: passed after the safe `privacy.html` footer update and control-file additions.

Manual/browser QA still required after deployment.

## Real blockers

- Browser/manual QA is still required for the lesson app behavior and cannot be fully verified from static GitHub file reads alone.
- Public contact form setup is intentionally blocked until privacy, spam handling, and storage decisions are approved.
- Live ads, tracking, payments, affiliate links, accounts, credentials, API keys, and public AI are blocked until direct approval.

## Next safe queue

1. Manually test `app.html` in browser after deployment.
2. Confirm placement check shows 8 steps.
3. Confirm manual levels A-H start at the right day.
4. Confirm Day 30 reaches Grade 8 readiness content.
5. Confirm Progress Report shows Levels A-H correctly.
6. Keep Bubbles calm and controlled.
7. Add more printable worksheets or SEO pages only when they clearly improve learner/parent/tutor clarity.
8. Do not add live ads, payments, tracking, accounts, API keys, public AI, or a contact form without direct approval.

## Do Not Repeat

Do not rebuild the day selector.
Do not replace the lesson engine.
Do not convert to React, Vite, Next.js, TypeScript, or build tools.
Do not remove working localStorage progress, read-aloud, placement, or lesson navigation features.
