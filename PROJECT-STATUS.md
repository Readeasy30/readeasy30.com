# ReadEasy30 Project Status

Date updated: 2026-05-29

## What the site does

ReadEasy30 is a simple HTML, CSS, and JavaScript GitHub Pages reading-practice website. It provides a calm 30-minutes-a-day reading lesson app, a 30-day A-H reading path from early reader through Grade 8 readiness, Bubbles coaching messages, vocabulary support, read-aloud support, localStorage progress tracking, and public support resources for children, adults, ESL learners, parents, tutors, and struggling readers.

ReadEasy30 is a free, calm, no-shame reading practice site for adults, students, ESL learners, older learners, parents, tutors, and anyone who wants simple practice toward about an 8th-grade level.

ReadEasy30 is aligned with the shared Wholelychit education growth system with MathEasy30. Shared campaign and marketing planning belongs in `Wholelychit/marketing-system`; website code stays in this repo.

## Locked mission

ReadEasy30 and MathEasy30 are free, calm, beginner-friendly practice websites that help adults, students, ESL learners, and learners who need extra support build skills toward about an 8th-grade level.

ReadEasy30 should not feel babyish. It should feel simple, respectful, and useful for adults and children.

## Current tech stack

- Static HTML
- CSS
- JavaScript
- GitHub Pages style hosting

No framework conversion has been made. Do not convert this project to React, Vite, Next.js, TypeScript, or build tools unless Gerry clearly requests a rebuild.

## Files/pages complete

Public pages currently available and covered by sitemap include:

- `index.html`
- `app.html`
- `daily-reading-practice.html`
- `calm-reading-practice-30-minutes-a-day.html`
- `adult-reading-practice.html`
- `adult-reading-practice-without-shame.html`
- `esl-reading-practice.html`
- `esl-reading-practice-everyday-english.html`
- `esl-reading-comprehension.html`
- `parent-tutor-guide.html`
- `reading-levels-beginner-to-8th-grade.html`
- `reading-comprehension-practice.html`
- `phonics-practice-for-beginners.html`
- `printable-reading-worksheets.html`
- `worksheet.html`
- `functional-literacy-practice.html`
- `functional-literacy-worksheet-1.html`
- `functional-literacy-worksheet-2.html`
- `functional-literacy-worksheet-3.html`
- `phonics-reading-worksheet.html`
- `main-idea-reading-worksheet.html`
- `vocabulary-in-context-worksheet.html`
- `evidence-from-text-worksheet.html`
- `sequence-reading-worksheet.html`
- `cause-and-effect-reading-worksheet.html`
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
- `READEASY30-MATHEASY30-BUILD-BRIEF.md`

## Files/pages needing work

- `contact.html` does not have a live contact form by design. Add a form only after privacy, spam handling, and storage decisions are approved.
- Manual browser QA is still required for `app.html`, placement, levels A-H, read aloud, day selector, localStorage progress, and progress report behavior.
- Future useful content may include more printable worksheets and carefully scoped SEO resources.

## SEO status

The site has public support/SEO pages for daily reading practice, calm 30-minute practice, adult reading, ESL reading, reading comprehension, reading levels, parent/tutor support, and printable worksheets.

The first practical worksheet marketing cluster is now in place:

1. `functional-literacy-worksheet-1.html` — schedules and appointment notes
2. `functional-literacy-worksheet-2.html` — signs and simple instructions
3. `functional-literacy-worksheet-3.html` — forms and labels

`printable-reading-worksheets.html` now acts as the worksheet hub and links into the current worksheet library.

`SEO-CHECKLIST.md` records the required title, description, canonical, H1, internal link, sitemap, readability, and monetization-safety checks for future pages.

No live ads, tracking, payments, affiliate links, accounts, or public AI features were added.

## Sitemap/robots status

- `sitemap.xml` exists and includes the current public page cluster, including the functional literacy worksheet trio.
- `robots.txt` exists and points to `https://readeasy30.com/sitemap.xml`.
- The compact sitemap format is currently working and should be preserved unless a safe full replacement succeeds later.

## Footer/navigation status

Public pages include main navigation and footer navigation.

The homepage points to the worksheet hub through top navigation and CTA buttons.

The worksheet hub links to the active printable worksheet library, including phonics, main idea, vocabulary, evidence, sequence, and functional literacy pages.

Navigation is intentionally broad because ReadEasy30 has several resource pages. Future cleanup may consolidate resource links if the footer becomes too large, but no risky navigation change is needed now.

## Trust/legal status

- `about.html` exists and states what ReadEasy30 does and does not promise.
- `contact.html` exists and explains that no public contact form is connected yet.
- `privacy.html` exists and states that localStorage progress is stored on the learner's device and that accounts, payments, live ads, and private school records are not currently collected.
- `terms.html` exists and states that ReadEasy30 is practice support, not a replacement for a teacher, tutor, school plan, doctor, or reading specialist.

## Monetization status

No live ads, live affiliate links, payment tools, tracking scripts, account systems, ordering systems, credentials, API keys, or public AI chatbot features are installed.

Future ads, premium resources, email signup, forms, accounts, analytics, or payments require privacy/safety review and direct approval before launch.

## Recent improvements

- Universal Codex Repo Audit completed on 2026-05-28 for `Wholelychit/readeasy30.com`.
- Added `MANUAL-QA-CHECKLIST.md`, `CONTENT-PLAN.md`, and `SEO-CHECKLIST.md` for repo control consistency.
- Updated `privacy.html` footer links to include current resource cluster links.
- Added `READEASY30-MATHEASY30-BUILD-BRIEF.md` to lock the shared no-shame education mission with MathEasy30.
- Upgraded `reading-comprehension-practice.html` from a thin page into a full support/SEO page with proof-finding steps, a practice passage, helper tips, and internal links.
- Added practical worksheet funnel and launch support: worksheet hub, functional literacy landing page, and three functional literacy printable worksheets.
- Upgraded adult and ESL landing pages to connect to functional literacy, worksheet pages, and the lesson app.
- Built matching launch-copy assets in `Wholelychit/marketing-system` for the functional literacy worksheet trio.
- Locked public direction: free, calm, respectful reading practice toward about an 8th-grade level for adults, students, ESL learners, and learners who need extra support.

## QA status

Quality-control pass completed on 2026-05-29 for the current worksheet marketing cluster.

Checks confirmed from repo file reads:

- Homepage links to `printable-reading-worksheets.html` through top navigation and hero CTA.
- `printable-reading-worksheets.html` links to the active worksheet library.
- `sitemap.xml` includes `functional-literacy-worksheet-1.html`, `functional-literacy-worksheet-2.html`, and `functional-literacy-worksheet-3.html`.
- Functional literacy worksheets 1, 2, and 3 include title, meta description, canonical URL, viewport tag, print button, no-subscription wording, Bubbles tip, questions, vocabulary, and helper answer key.
- No live ads, live affiliate links, tracking scripts, payments, credentials, API keys, accounts, ordering integrations, or public AI tools were added.

Universal Codex Repo Audit completed on 2026-05-28 for `Wholelychit/readeasy30.com`.

Manual/browser QA still required after deployment.

## Real blockers

- Browser/manual QA is still required for the lesson app behavior and cannot be fully verified from static GitHub file reads alone.
- Public contact form setup is intentionally blocked until privacy, spam handling, and storage decisions are approved.
- Live ads, tracking, payments, affiliate links, accounts, credentials, API keys, and public AI are blocked until direct approval.

## Next safe queue

1. Manually open `https://readeasy30.com/printable-reading-worksheets.html` after deployment and check worksheet links.
2. Manually open and print-test `functional-literacy-worksheet-1.html`, `functional-literacy-worksheet-2.html`, and `functional-literacy-worksheet-3.html`.
3. Manually test `app.html` in browser after deployment.
4. Confirm placement check shows 8 steps.
5. Confirm manual levels A-H start at the right day.
6. Confirm Day 30 reaches Grade 8 readiness content.
7. Confirm Progress Report shows Levels A-H correctly.
8. Keep Bubbles calm and controlled.
9. Use `READEASY30-MATHEASY30-BUILD-BRIEF.md` as the mission guardrail.
10. Use `Wholelychit/marketing-system` launch-copy files for Pinterest, Facebook, Reddit-safe, and library/nonprofit outreach.
11. Do not add live ads, payments, tracking, accounts, API keys, public AI, affiliate links, or a contact form without direct approval.

## Do Not Repeat

Do not rebuild the day selector.
Do not replace the lesson engine.
Do not convert to React, Vite, Next.js, TypeScript, or build tools.
Do not remove working localStorage progress, read-aloud, placement, or lesson navigation features.
Do not recreate the current functional literacy worksheet trio; it is already built, linked from the worksheet hub, and included in the sitemap.
