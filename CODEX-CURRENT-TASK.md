# CODEX-CURRENT-TASK.md

Last updated: 2026-06-06

Repository: `Wholelychit/readeasy30.com`

## Current task

Continue from the Day One clean production state.

Do not restart the site.

Do not reopen the old 30-day `grade-path-lessons.js` workflow unless live QA proves a current production problem.

Do not bring back the old app script stack, giant navigation, connector-write confusion, or old repair loops.

## Current public funnel

The homepage should guide visitors in this order:

1. Start Reading Now
2. Find Starting Level
3. Print Worksheets
4. Parent / Tutor Help
5. Reading + Math Plan

## Completed Day One cleanup

- Replaced homepage with clean SEO funnel.
- Replaced app shell with clean public app page.
- Replaced app engine with clean 240-day version.
- Replaced parent/tutor guide with mobile-friendly guide.
- Replaced sitemap with clean crawl priority map.
- Verified robots file is clean.
- Replaced README, PROJECT-STATUS, LOCKED-CHECKPOINT, CODEX-WORKFLOW, and Grade 8 QA docs.

## Current app state

The public app shell loads only:

```text
student-profiles.js
app.js
```

The clean app includes:

- 240 generated daily reading lessons
- Levels A-H
- placement check
- manual level choice
- jump-to-day selector
- progress tracking
- streak count
- timer
- read-aloud support
- vocabulary words
- comprehension questions
- Bubbles coaching messages
- parent/tutor link inside the app

## Current safe queue

1. Live phone-test `https://readeasy30.com/`.
2. Live phone-test `https://readeasy30.com/app.html`.
3. Live phone-test `https://readeasy30.com/parent-tutor-guide.html`.
4. Live phone-test `https://readeasy30.com/printable-reading-worksheets.html`.
5. Confirm top buttons are easy to tap.
6. Confirm Parent / Tutor Help is visible without hunting.
7. Confirm app story appears.
8. Confirm Jump to Day contains 240 days.
9. Confirm Placement Check works.
10. Confirm Read Aloud works where supported.
11. Confirm Check Answers works.
12. Confirm Next Lesson works.
13. Confirm sitemap opens at `https://readeasy30.com/sitemap.xml`.
14. Fix only verified live-page issues.

## Rules

- Keep plain HTML/CSS/JS.
- Use complete-file replacement when a public page is stale or broken.
- Do not stack tiny repairs on broken repairs.
- Do not re-add old app script dependencies unless a real tested need is proven.
- Do not add React, Vite, Next.js, TypeScript, Tailwind, or build tools.
- Do not add API keys, tracking scripts, live ads, payment systems, affiliate links, user accounts, upload systems, scraping, social automation, public AI, or credentials.
- Do not use ChatGPT GitHub connector writes unless Gerry explicitly authorizes one specific write action in the current chat.

## Stop points

Stop before private keys, API keys, live tracking, live ads, payment setup, user accounts, upload systems, affiliate links, framework migration, major code deletion, public AI, or anything that risks breaking production.
