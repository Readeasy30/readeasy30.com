# ReadEasy30

ReadEasy30 is a 100% free, calm reading-practice website for learners who need steady support. It serves beginning readers, older learners, adult learners, ESL learners, parents, tutors, homeschool helpers, and community programs.

The public message is simple:

```text
Start small. Read slowly. Practice a little each day.
```

## Day One production standard

This repo must stay simple, mobile-friendly, and easy to maintain.

Use plain files only:

- HTML
- CSS
- JavaScript
- GitHub
- Cloudflare
- Browser `localStorage` for simple device progress

Do not convert this project to React, Vite, Next.js, TypeScript, a build system, or a server app.

## Current public funnel

The homepage should guide visitors in this order:

1. Start Reading Now
2. Find Starting Level
3. Print Worksheets
4. Parent / Tutor Help
5. Reading + Math Plan

Do not bring back a giant top navigation menu.

Keep the homepage focused on:

- 100% free reading practice
- short daily lessons
- placement help
- read-aloud support
- printable worksheets
- parent/tutor help
- ReadEasy30 + MathEasy30 connection

## Current core files

- `index.html` — clean SEO homepage funnel
- `app.html` — clean reading app shell
- `app.js` — clean 240-day app engine
- `student-profiles.js` — learner/profile support
- `parent-tutor-guide.html` — mobile-friendly helper guide
- `printable-reading-worksheets.html` — worksheet hub
- `free-reading-and-math-practice.html` — shared education campaign landing page
- `sitemap.xml` — crawl priority map
- `robots.txt` — crawler instructions
- `css/style.css` — main styling
- `css/site-links.css` — navigation/footer/link helpers

## App standard

The app should load only the core scripts needed for the stable experience.

Current app shell loads:

```text
student-profiles.js
app.js
```

Do not re-add the old fragile script stack unless there is a clear tested reason.

Do not re-add these as app dependencies:

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

Old support files may remain in the repo temporarily, but the public app should not depend on them.

## Current working features

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

## Reading level path

- Level A — Days 1-30 — early-reader confidence
- Level B — Days 31-60 — Grade 1 path
- Level C — Days 61-90 — Grade 2 path
- Level D — Days 91-120 — Grade 3 path
- Level E — Days 121-150 — Grade 4 path
- Level F — Days 151-180 — Grade 5 path
- Level G — Days 181-210 — Grades 6-7 path
- Level H — Days 211-240 — Grade 8 readiness

## SEO standard

Every important public page should have:

- one clear `<title>`
- one useful meta description
- canonical URL
- mobile viewport
- one clear H1
- readable 7th-9th grade language
- strong internal links
- visible parent/tutor path
- no fake urgency
- no confusing paid/pricing language
- no cluttered top navigation

Primary SEO pages:

- `/`
- `/app.html`
- `/parent-tutor-guide.html`
- `/printable-reading-worksheets.html`
- `/free-reading-and-math-practice.html`
- `/daily-reading-practice.html`
- `/reading-levels-beginner-to-8th-grade.html`
- `/adult-reading-practice-without-shame.html`
- `/esl-reading-practice.html`

## Mobile and tutor standard

The tutor/helper path must be easy to tap on a phone.

Top pages should link to:

```text
parent-tutor-guide.html
```

The app should also include a visible tutor/helper link near the lesson area.

## Bubbles coach rule

Bubbles should stay calm and controlled.

Bubbles should encourage learners to:

- slow down
- reread
- find proof in the story
- try one small step
- keep practicing without shame

Bubbles should not act like an open-ended chatbot until safety and content controls are ready.

## Safety and product lock

Do not add:

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

Future ads or premium resources can be considered only after the free core works well and trust is protected.

## Shared education growth

ReadEasy30 is paired with MathEasy30.

Shared marketing and campaign planning belongs in:

```text
Wholelychit/marketing-system
```

Website code stays in this repo.

## QA checklist before public promotion

Test on phone and desktop:

1. Homepage loads and has the five-part funnel.
2. `app.html` loads without getting stuck.
3. Placement check opens.
4. Manual levels A-H work.
5. Jump to Day fills with 240 days.
6. Read Aloud works.
7. Check Answers works.
8. Next Lesson works.
9. Parent / Tutor Guide opens.
10. Sitemap opens at `/sitemap.xml`.

## Working rule

Replace broken files cleanly. Do not stack small repairs on top of broken repairs.

When changing a public page, prefer one complete-file replacement with a clear commit message.
