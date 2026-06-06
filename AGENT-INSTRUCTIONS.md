# ReadEasy30 AI Agent Instructions

## Mission

Build ReadEasy30 into a trustworthy, mobile-first reading-practice website that helps learners build confidence one calm lesson at a time.

The site serves beginning readers, older learners, adult learners, ESL learners, parents, tutors, homeschool helpers, and community programs.

## Current product message

ReadEasy30 is:

```text
100% free calm reading practice.
```

Public wording should be honest, simple, and supportive.

Do not promise instant reading success.

Do not use shame language.

Do not make the site sound broken or temporary.

## Technical rules

Use only:

- HTML
- CSS
- JavaScript
- GitHub
- Cloudflare
- browser `localStorage` for simple device progress

Do not use:

- React
- Vite
- TypeScript
- Next.js
- build tools
- unnecessary frameworks
- server requirements

Keep the site fast, simple, mobile-first, and easy for Gerry to manage.

## Write-path rule

Use safe repository edits only when a reliable write path is available.

Do not use ChatGPT GitHub connector writes unless Gerry explicitly authorizes one specific write action in the current chat.

Preferred write paths:

1. Codex with a working non-connector write path
2. GitHub website editor
3. github.dev
4. GitHub Desktop
5. local Git after it is correctly installed

Read-only connector checks are allowed.

## Current public funnel

The homepage should guide visitors in this order:

1. Start Reading Now
2. Find Starting Level
3. Print Worksheets
4. Parent / Tutor Help
5. Reading + Math Plan

Do not bring back a giant top navigation menu.

## Current core files

- `index.html` — clean SEO homepage funnel
- `app.html` — clean reading app shell
- `app.js` — clean 240-day app engine
- `student-profiles.js` — learner/profile support
- `parent-tutor-guide.html` — mobile-friendly parent/tutor guide
- `printable-reading-worksheets.html` — worksheet hub
- `free-reading-and-math-practice.html` — shared education campaign landing page
- `sitemap.xml` — crawl priority map
- `robots.txt` — crawler instructions
- `README.md` — project standard
- `AGENTS.md` — direct working rules
- `PROJECT-STATUS.md` — current state
- `LOCKED-CHECKPOINT.md` — locked production state
- `CODEX-CURRENT-TASK.md` — current QA queue
- `CODEX-WORKFLOW.md` — workflow rules

## Current app standard

The public app shell loads only:

```text
student-profiles.js
app.js
```

The clean `app.js` engine owns:

- generated lesson data
- 240-day path
- level mapping
- placement flow
- answer checking
- day selector
- progress saving
- read aloud
- Bubbles messages
- vocabulary display
- timer
- parent/tutor link path

Do not re-add the old helper-script stack unless live QA proves a real current need.

## Reading level path

- Level A — Days 1-30 — early-reader confidence
- Level B — Days 31-60 — Grade 1 path
- Level C — Days 61-90 — Grade 2 path
- Level D — Days 91-120 — Grade 3 path
- Level E — Days 121-150 — Grade 4 path
- Level F — Days 151-180 — Grade 5 path
- Level G — Days 181-210 — Grades 6-7 path
- Level H — Days 211-240 — Grade 8 readiness

## UX rules

The site should be:

- calm
- simple
- readable
- mobile-first
- easy to tap
- low pressure
- useful for helpers

Avoid:

- cluttered navigation
- tiny text
- fake urgency
- long walls of text
- confusing education jargon
- public labels that make the site sound broken

## Parent / Tutor rule

The Parent / Tutor Help path must be visible and easy to tap on phones.

Important pages should link to:

```text
parent-tutor-guide.html
```

Use the label:

```text
Parent / Tutor Help
```

## Bubbles coach rules

Bubbles should act like a calm reading coach.

Bubbles should:

- encourage slow reading
- remind learners to reread
- tell learners to find proof in the story
- celebrate effort calmly
- avoid acting like an open-ended chatbot until safety and content controls are ready

## SEO rules

Every important public page should include:

- unique title
- meta description
- canonical URL
- mobile viewport
- one clear H1
- readable headings
- internal links
- footer navigation
- plain language

Build future topical clusters around:

- daily reading practice
- adult reading help
- ESL reading practice
- reading comprehension practice
- printable reading worksheets
- parent reading help
- tutor reading resources
- practical reading skills

Maintain:

- `robots.txt`
- `sitemap.xml`
- clean canonical URLs

## Monetization rules

Prepare the site for monetization later, but do not hurt trust.

Do not add without direct approval:

- live ads
- live tracking
- payment setup
- affiliate links
- account systems
- upload systems
- scraping
- public AI tools
- social automation

Possible future monetization only after the free core is stable:

- printable packs
- premium worksheets
- sponsor placements clearly labeled
- reviewed partner links
- display ads only when they do not hurt trust

## Safe work pattern

When making changes:

1. Check existing files first.
2. Preserve the simple HTML/CSS/JS structure.
3. Prefer complete-file replacement when a page is messy or stale.
4. Do not stack tiny repairs on broken repairs.
5. Keep navigation consistent.
6. Keep parent/tutor access visible.
7. Add important public pages to the sitemap.
8. Avoid breaking mobile layout.
9. Commit safe improvements with clear messages.
10. Report changed files and commit SHAs after useful work.

## Stop points

Pause for:

- blocked writes
- unclear repository state
- credentials/private keys
- payment setup
- live tracking
- live ads
- affiliate links
- framework migration
- major deletion that cannot be safely reversed

## Current safe queue

1. Run live phone QA on homepage, app, parent/tutor guide, worksheet hub, and sitemap.
2. Fix only verified live-page issues.
3. Keep the five-step homepage funnel.
4. Keep the app dependency list clean.
5. Improve worksheet/support pages only after the app passes QA.
6. Keep Bubbles calm and controlled.

## Do not repeat work rule

Before editing this repo, check:

1. `README.md`
2. `AGENTS.md`
3. `AGENT-INSTRUCTIONS.md`
4. `PROJECT-STATUS.md`
5. `LOCKED-CHECKPOINT.md`
6. `CODEX-CURRENT-TASK.md`
7. `CODEX-WORKFLOW.md`
8. current file being changed
9. relevant sitemap/robots files

Then make the safest replacement that moves the site forward.
