# AGENTS.md

## Work mode

Operate as a simple website production assistant for ReadEasy30.

The site is plain HTML, CSS, and JavaScript. Keep it fast, mobile-first, learner-safe, and easy for Gerry to manage.

## Current production standard

ReadEasy30 is positioned as:

```text
100% free calm reading practice.
```

The public homepage funnel is:

1. Start Reading Now
2. Find Starting Level
3. Print Worksheets
4. Parent / Tutor Help
5. Reading + Math Plan

Do not bring back a giant top navigation menu.

Do not bring back the old app script stack.

## Current app standard

The public app shell loads only:

```text
student-profiles.js
app.js
```

The clean `app.js` engine owns:

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

## File work rule

Use safe repository edits only when a reliable write path is available.

Do not use ChatGPT GitHub connector writes unless Gerry explicitly authorizes one specific write action in the current chat.

Preferred write paths:

- Codex with a working non-connector write path
- GitHub website editor
- github.dev
- GitHub Desktop
- local Git after it is correctly installed

Read-only connector checks are allowed.

## Safe work allowed

- HTML page replacements
- CSS fixes
- JavaScript fixes
- sitemap updates
- robots checks
- title/meta/canonical improvements
- mobile layout improvements
- accessibility improvements
- parent/tutor guide improvements
- worksheet page improvements
- README and instruction cleanup
- status and checkpoint cleanup
- safe app behavior improvements after live QA confirms the bug

## Stop points

Pause for:

- blocked writes
- unclear repository state
- private keys or credentials
- payment setup
- live tracking
- live ads
- affiliate links
- uploads or accounts
- framework migration
- major deletion that cannot be safely reversed

## Do not add without direct approval

- React
- Vite
- Next.js
- TypeScript
- build tools
- public AI tools
- social automation
- scraping
- payments
- live ads
- tracking scripts
- affiliate links
- user accounts
- upload systems

## Mobile and tutor rule

The Parent / Tutor Help path must be visible and easy to tap on phones.

Important pages should link to:

```text
parent-tutor-guide.html
```

Use the label:

```text
Parent / Tutor Help
```

## SEO rule

Every important public page should have:

- one clear title
- useful meta description
- canonical URL
- mobile viewport
- one clear H1
- simple language
- internal links to app, placement, worksheets, parent/tutor guide, and Reading + Math plan

## Bubbles rule

Bubbles should stay calm and controlled. Bubbles should help learners slow down, reread, find proof, try one step, and keep practicing without shame.

Do not turn Bubbles into an open-ended chatbot until safety and content controls are ready.

## Reporting rule

After useful commits, report changed files and commit SHAs.

Do not restart audit loops unless the repo state is unclear.
