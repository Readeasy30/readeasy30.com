# ReadEasy30 Locked Checkpoint

Date locked: 2026-06-06

Repository: `Wholelychit/readeasy30.com`
Branch: `main`

## Locked Day One state

ReadEasy30 is locked as a simple, mobile-first, static reading-practice website.

Use only:

- HTML
- CSS
- JavaScript
- GitHub
- Cloudflare
- browser `localStorage` for simple device progress

Do not convert this project to React, Vite, Next.js, TypeScript, a build system, or a server app.

## Locked public funnel

The homepage must guide visitors in this order:

1. Start Reading Now
2. Find Starting Level
3. Print Worksheets
4. Parent / Tutor Help
5. Reading + Math Plan

Do not bring back a giant top navigation menu.

## Locked core files

- `index.html` — clean SEO homepage funnel
- `app.html` — clean reading app shell
- `app.js` — clean 240-day app engine
- `student-profiles.js` — learner/profile support
- `parent-tutor-guide.html` — mobile-friendly helper guide
- `printable-reading-worksheets.html` — worksheet hub
- `free-reading-and-math-practice.html` — shared reading + math plan
- `sitemap.xml` — crawl priority map
- `robots.txt` — crawler instructions
- `README.md` — production standard
- `PROJECT-STATUS.md` — current state and QA queue

## Locked app standard

The public app shell loads only:

```text
student-profiles.js
app.js
```

The app should not depend on the old fragile script stack.

Do not re-add these as public app dependencies unless there is a clear tested reason:

```text
level-b-lessons.js
level-c-lessons.js
level-d-lessons.js
level-e-lessons.js
level-f-lessons.js
level-g-lessons.js
level-h-lessons.js
read-live-240-integration.js
grade-path-lessons.js
audio-fix.js
session-timer.js
report.js
vocab-helper.js
learner-mode.js
session-plan.js
startup-fix.js
bubbles-question-buttons.js
```

## Locked app features

The clean app engine in `app.js` provides:

- 240 generated daily reading lessons
- 8 reading levels: A through H
- placement check
- manual level choice
- day selector
- progress tracking
- streak count
- timer
- read-aloud support
- vocabulary words
- short comprehension questions
- Bubbles coaching messages
- parent/tutor link inside the app

## Locked reading path

- Level A — Days 1-30 — early-reader confidence
- Level B — Days 31-60 — Grade 1 path
- Level C — Days 61-90 — Grade 2 path
- Level D — Days 91-120 — Grade 3 path
- Level E — Days 121-150 — Grade 4 path
- Level F — Days 151-180 — Grade 5 path
- Level G — Days 181-210 — Grades 6-7 path
- Level H — Days 211-240 — Grade 8 readiness

## Locked SEO standard

Every important public page should have:

- one clear title
- useful meta description
- canonical URL
- mobile viewport
- one clear H1
- readable language
- strong internal links
- visible parent/tutor path
- no fake urgency
- no confusing paid/pricing language
- no cluttered top navigation

## Locked mobile/tutor standard

The Parent / Tutor Help path must be easy to tap on a phone.

Important pages should link to:

```text
parent-tutor-guide.html
```

Use the label:

```text
Parent / Tutor Help
```

## Bubbles rule

Bubbles stays calm and controlled.

Bubbles should encourage learners to slow down, reread, find proof in the story, try one small step, and keep practicing without shame.

Do not turn Bubbles into an open-ended chatbot until safety and content controls are ready.

## Safety lock

Do not add without direct approval:

- live ads
- tracking scripts
- payments
- affiliate links
- accounts
- uploads
- private keys
- scraping
- social automation
- public AI tools
- framework migrations

## QA required after this checkpoint

Manual/live QA is required on phone and desktop:

1. Homepage loads.
2. Homepage funnel buttons work.
3. `app.html` loads without getting stuck.
4. Placement check opens.
5. Manual levels A-H work.
6. Jump to Day fills with 240 days.
7. Read Aloud works where supported.
8. Check Answers works.
9. Next Lesson works.
10. Parent / Tutor Help opens.
11. Sitemap opens at `/sitemap.xml`.

## Working rule

Replace broken files cleanly. Do not stack tiny repairs on broken repairs.

For public pages, prefer complete-file replacement when the page is stale, cluttered, or inconsistent.
