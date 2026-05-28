# ReadEasy30

ReadEasy30 is a free, calm reading-practice website built for children, adults, ESL learners, older learners, parents, tutors, and struggling readers.

The site helps learners practice reading with short daily lessons, simple questions, vocabulary support, read-aloud help, progress tracking, and Bubbles the calm reading coach.

## Current structure

This project is intentionally simple and must stay simple:

- `index.html` — marketing homepage
- `app.html` — lesson app page
- `app.js` — stable lesson engine and reading logic
- `grade-path-lessons.js` — expanded 30-day reading path from early reader through Grade 8 readiness
- `css/style.css` — main site styling
- `css/site-links.css` — shared navigation, footer, resource-page, and accessibility helper styles
- Small support JavaScript files — safe helper features only

## Current working features

- Placement check
- Manual level choice
- 30 reading lessons
- Levels A through H
- Early reader through Grade 8 readiness path
- Day selector
- Locked future lessons
- localStorage progress tracking
- Streak count
- Timer
- Read Aloud
- Vocabulary helper
- Fluency coach
- Bubbles coaching messages
- Progress report
- Mobile-friendly layout foundation
- Public support pages
- Basic SEO metadata and sitemap

## Reading level path

ReadEasy30 now uses a 30-day progression:

1. Level A — early reader
2. Level B — Grade 1 path
3. Level C — Grade 2 path
4. Level D — Grade 3 path
5. Level E — Grade 4 path
6. Level F — Grade 5 path
7. Level G — Grades 6-7 path
8. Level H — Grade 8 readiness

The stable app engine stays in `app.js`.

The expanded lesson content is loaded from `grade-path-lessons.js` after `app.js` so the lesson engine, placement, progress, day selector, read aloud, and Bubbles features are preserved.

## Public pages

- `index.html` — homepage
- `app.html` — reading lesson app
- `daily-reading-practice.html` — useful SEO/help content page
- `parent-tutor-guide.html` — helper guide
- `about.html` — about page
- `contact.html` — contact status and feedback guidance
- `privacy.html` — plain-language privacy policy
- `terms.html` — plain-language terms of use

## Connected growth system

ReadEasy30 is part of the shared Wholelychit education growth system with MathEasy30.

Shared planning lives in `Wholelychit/marketing-system`.

Use these marketing-system files before creating new campaign work:

- `EDUCATION-GROWTH-PLAN.md` — shared ReadEasy30 + MathEasy30 positioning and growth queue
- `CAMPAIGNS/README.md` — campaign folder rules and index
- `CAMPAIGNS/readeasy30-matheasy30-confidence-campaign.md` — first shared education campaign

Website code stays in this repo. Shared marketing plans, campaign files, content batches, social posts, Canva notes, and growth tracking stay in `marketing-system`.

## Development rules

Do not convert this project to React, Vite, Next.js, TypeScript, or any build tool.

Do not redesign the app unless the owner clearly requests it.

Safe work means:

1. Read `AGENTS.md`, `AGENT-INSTRUCTIONS.md`, and `LOCKED-CHECKPOINT.md` first.
2. Keep the locked HTML/CSS/JavaScript architecture.
3. Make small useful improvements.
4. Preserve working features.
5. Commit changes with clear messages.
6. Update `LOCKED-CHECKPOINT.md` and `PROJECT-STATUS.md` after a new stable stage.
7. Put shared marketing and campaign planning in `Wholelychit/marketing-system`.

## Product direction

ReadEasy30 should grow into a trustworthy education site with:

- stronger reading-level progression
- practical reading lessons
- printable worksheets
- parent and tutor resources
- future SEO content pages
- future display ads only when they do not hurt trust
- future premium resources only after the free core works well

## Bubbles coach rule

Bubbles should stay calm and controlled.

Bubbles should encourage readers to slow down, reread, find proof in the story, and keep practicing without shame.

Bubbles should not act like an open-ended chatbot until safety and content controls are ready.

## QA file

Use `GRADE-8-PATH-QA-CHECKLIST.md` to test the expanded reading path after deployment.

## Next useful queue

1. Manually test `app.html` after deployment.
2. Confirm placement check shows 8 steps.
3. Confirm manual levels A-H load the correct lesson bands.
4. Confirm Day 30 reaches Grade 8 readiness content.
5. Add one free sample printable worksheet page.
6. Add accessibility checks and manual testing notes.
7. Add more useful SEO content pages carefully.
8. Keep ReadEasy30 aligned with the shared education growth plan in `marketing-system`.
9. Add a safe contact form only after privacy/spam handling is decided.
10. Do not add live ads, payments, tracking, or accounts yet.
