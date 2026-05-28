# ReadEasy30 Project Status

Date updated: 2026-05-28

## Current Status

ReadEasy30 is a simple HTML, CSS, and JavaScript GitHub Pages website.

Locked structure:

- `index.html` = homepage
- `app.html` = lesson app
- `app.js` = lesson engine
- `grade-path-lessons.js` = expanded 30-day lesson ladder through Grade 8 readiness
- `sample-reading-worksheet.html` = free printable worksheet page
- `reading-levels-beginner-to-8th-grade.html` = SEO/support page for the A-H reading path
- `adult-reading-practice.html` = SEO/support page for adult readers rebuilding confidence
- `css/style.css` = main styling
- `css/site-links.css` = shared navigation, footer, resource page, and accessibility helper styles

No framework conversion has been made.

## Codex-First Workflow

Codex is the primary workflow for routine ReadEasy30 repository editing.

The ChatGPT GitHub connector should be used only for small reads, checks, reviews, or emergency single-file edits when Codex is unavailable.

Reason: connector write-action labels like `create_file` or `update_file` can confuse the owner and slow the workflow.

Current workflow file:

- `CODEX-WORKFLOW.md`

## Shared Education Growth Alignment

ReadEasy30 is now connected to the shared Wholelychit education growth system with MathEasy30.

Shared planning belongs in `Wholelychit/marketing-system`.

Current shared planning files:

- `EDUCATION-GROWTH-PLAN.md`
- `CAMPAIGNS/README.md`
- `CAMPAIGNS/readeasy30-matheasy30-confidence-campaign.md`

Website code stays in this repo.

## Safe Production Queue Completed

Completed in earlier build stages:

- Verified homepage metadata and navigation.
- Confirmed main repo instruction files exist.
- Added shared skip-link styling.
- Added `about.html`.
- Added `contact.html`.
- Added `privacy.html`.
- Added `terms.html`.
- Added `daily-reading-practice.html`.
- Updated homepage navigation and footer links.
- Updated lesson app navigation and footer links.
- Updated parent/tutor guide navigation and footer links.
- Updated sitemap with new public pages.
- Updated README.
- Updated locked checkpoint.

Completed on 2026-05-28:

- Updated README to point to the shared education growth plan in `marketing-system`.
- Recorded ReadEasy30 as part of the ReadEasy30 + MathEasy30 campaign system.
- Added `CODEX-WORKFLOW.md` for Codex-first repo editing.
- Added `grade-path-lessons.js` with an expanded 30-day lesson ladder from early reading through Grade 8 readiness.
- Updated `app.html` manual level buttons from A-D to A-H.
- Wired the expanded grade path after the stable `app.js` engine without replacing the engine.
- Added `GRADE-8-PATH-QA-CHECKLIST.md` for testing the expanded lesson path.
- Updated README to document the A-H reading path.
- Added `sample-reading-worksheet.html` as a free printable worksheet page.
- Updated `sitemap.xml` to include the worksheet page.
- Added `ACCESSIBILITY-TESTING-NOTES.md`.
- Added `reading-levels-beginner-to-8th-grade.html` as an SEO/support page for the A-H path.
- Linked the reading levels page from the homepage navigation, helpful resources, and footer.
- Updated `sitemap.xml` to include the reading levels page.
- Added `adult-reading-practice.html` as an SEO/support page for adult readers.
- Linked the adult reading page from the homepage navigation, helpful resources, and footer.
- Updated `sitemap.xml` to include the adult reading page.

## Pages Now Available

- `index.html`
- `app.html`
- `daily-reading-practice.html`
- `parent-tutor-guide.html`
- `reading-levels-beginner-to-8th-grade.html`
- `adult-reading-practice.html`
- `sample-reading-worksheet.html`
- `about.html`
- `contact.html`
- `privacy.html`
- `terms.html`
- `sitemap.xml`

## Lesson Path Status

The app now has a 30-day progression with these bands:

1. Level A = early reader
2. Level B = Grade 1 path
3. Level C = Grade 2 path
4. Level D = Grade 3 path
5. Level E = Grade 4 path
6. Level F = Grade 5 path
7. Level G = Grades 6-7 path
8. Level H = Grade 8 readiness

The lesson engine remains in `app.js`. The expanded content lives in `grade-path-lessons.js` so the stable app logic is not demolished.

## Blocked / Resolved

A full formatted sitemap replacement was blocked once by connector safety checks.

Resolution: the sitemap update was retried in a smaller compact format and committed successfully.

The first attempt to create this status file was also blocked. This shorter version was used instead.

## Next Safe Queue

1. Manually test `app.html` in browser after deployment.
2. Confirm placement check shows 8 steps.
3. Confirm manual levels A-H start at the right day.
4. Confirm Day 30 reaches Grade 8 readiness content.
5. Add ESL reading practice SEO page.
6. Keep Bubbles calm and controlled.

## Do Not Repeat

Do not rebuild the day selector.
Do not replace the lesson engine.
Do not convert to React, Vite, Next.js, TypeScript, or build tools.
Do not remove working localStorage progress, read-aloud, placement, or lesson navigation features.
