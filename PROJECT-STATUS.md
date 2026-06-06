# ReadEasy30 Project Status

Last updated: 2026-06-06

Repository: `Wholelychit/readeasy30.com`

## Current status

ReadEasy30 is in the Day One clean production state.

The public-facing site has been cleaned around one simple visitor path:

1. Start Reading Now
2. Find Starting Level
3. Print Worksheets
4. Parent / Tutor Help
5. Reading + Math Plan

The site remains plain HTML, CSS, and JavaScript. No framework migration was made.

## Current product message

ReadEasy30 is 100% free reading practice for learners who need calm, steady support.

The site should feel respectful for children, adult learners, ESL learners, parents, tutors, homeschool helpers, and community programs.

Public copy should stay simple:

```text
Start small. Read slowly. Practice a little each day.
```

## Current core files

- `index.html` — replaced with clean SEO homepage funnel
- `app.html` — replaced with clean app shell
- `app.js` — replaced with clean 240-day app engine
- `student-profiles.js` — learner/profile support
- `parent-tutor-guide.html` — replaced with mobile-friendly parent/tutor guide
- `printable-reading-worksheets.html` — worksheet hub
- `free-reading-and-math-practice.html` — shared reading + math plan
- `sitemap.xml` — replaced with clean crawl priority map
- `robots.txt` — clean and points to sitemap
- `README.md` — replaced with Day One production standard

## Current app state

The public app shell loads only:

```text
student-profiles.js
app.js
```

The old fragile app script stack should not be re-added as public app dependencies.

The clean `app.js` engine now includes:

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
- comprehension questions
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

## SEO status

Current SEO cleanup completed:

- homepage replaced with cleaner funnel
- app page has updated metadata and schema
- parent/tutor guide replaced with mobile-friendly helper content
- sitemap replaced with priority structure
- robots file verified clean
- README replaced with clean SEO and app standards

Primary crawl/visitor pages:

- `/`
- `/app.html`
- `/parent-tutor-guide.html`
- `/printable-reading-worksheets.html`
- `/free-reading-and-math-practice.html`
- `/daily-reading-practice.html`
- `/reading-levels-beginner-to-8th-grade.html`
- `/adult-reading-practice-without-shame.html`
- `/esl-reading-practice.html`

## Mobile and tutor status

Parent/tutor access is now intentionally visible on the homepage, app page, and footer.

Important tutor path:

```text
parent-tutor-guide.html
```

The parent/tutor guide was replaced as a phone-friendly helper page with simple steps, tutor phrases, and clear action buttons.

## Marketing connection

ReadEasy30 is paired with MathEasy30.

Shared marketing and campaign planning belongs in:

```text
Wholelychit/marketing-system
```

Website code stays in this repo.

## Safety lock

Do not add without direct approval:

- live ads
- tracking scripts
- payment setup
- affiliate links
- accounts
- uploads
- private keys
- scraping
- social automation
- public AI tools
- framework migrations

## Current blockers

Manual/live QA is still required because static repo reads cannot fully prove browser behavior.

Needed phone/desktop tests:

1. Homepage loads and buttons are easy to tap.
2. `app.html` loads without getting stuck.
3. Placement check opens.
4. Manual levels A-H work.
5. Jump to Day fills with 240 days.
6. Read Aloud works where supported.
7. Check Answers works.
8. Next Lesson works.
9. Parent / Tutor Guide opens.
10. Sitemap opens at `/sitemap.xml`.

## Next safe queue

1. Run live phone QA on the homepage, app, parent/tutor guide, worksheet hub, and sitemap.
2. Fix only verified live-page issues.
3. Improve worksheet pages and support pages only after the app passes QA.
4. Keep the five-step homepage funnel.
5. Keep Bubbles calm and controlled.
6. Do not re-add old app script dependencies.
7. Do not reopen marketing-system cleanup unless a new real blocker appears.

## Working rule

Replace broken or stale public files cleanly. Do not stack tiny repairs on broken repairs.

For public pages, prefer complete-file replacement with a clear commit message when the page is stale, cluttered, or inconsistent.
