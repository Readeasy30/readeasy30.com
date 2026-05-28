# ReadEasy30 Locked Checkpoint

Date locked: 2026-05-28

## Current Locked Architecture

This project is locked as a simple GitHub Pages reading-practice website.

Use this structure:

- `index.html` = marketing homepage
- `app.html` = lesson app page
- `app.js` = stable lesson engine and reading logic
- `grade-path-lessons.js` = expanded 30-day reading ladder through Grade 8 readiness
- `css/style.css` = styling
- `css/site-links.css` = shared navigation, resource-page, and accessibility helper styling
- Supporting JavaScript files may stay separate when they add small features safely

Do not convert this project to React, Vite, Next.js, TypeScript, or another framework unless the owner explicitly changes the architecture later.

## Locked Working Features

The current app includes:

- Placement check
- Manual starting level choice
- 30 reading lessons
- Levels A through H
- Early reader through Grade 8 readiness path
- Day selector / jump-to-day control
- Locked future lessons
- Progress tracking with localStorage
- Streak count
- Timer
- Read Aloud
- Placement Read Aloud
- Bubbles coaching messages
- Fluency coach
- Achievement / badge system
- Vocabulary pills and word helper
- Correct / retry answer feedback
- Clear answers
- Reset progress
- Progress report
- Reader type selector
- Session plan helper
- Startup fix to reopen the next open lesson
- Mobile-friendly CSS foundation

## Grade Path Status

The app now uses `grade-path-lessons.js` to safely replace the original starter lesson data without replacing the stable engine in `app.js`.

Current 30-day path:

1. Level A = early reader
2. Level B = Grade 1 path
3. Level C = Grade 2 path
4. Level D = Grade 3 path
5. Level E = Grade 4 path
6. Level F = Grade 5 path
7. Level G = Grades 6-7 path
8. Level H = Grade 8 readiness

Day 30 now practices Grade 8 readiness skills: evidence, bias, missing information, synthesis, argument, and explaining thinking.

## Day Selector Status

The day selector is already built and should not be rebuilt from scratch.

Confirmed pieces:

- `app.html` contains `<select id="daySelect">`
- `app.js` contains `buildDaySelector()`
- `app.js` contains `jumpToDay()`
- `app.js` connects `daySelect.addEventListener("change", jumpToDay)`
- `loadLesson()` syncs `daySelect.value = currentLesson`
- Future lessons are disabled until progress opens them
- `css/style.css` contains `.day-picker` styling

## Stable Repo Additions

The repo now includes:

- `README.md` for project overview and workflow rules
- `AGENTS.md`
- `AGENT-INSTRUCTIONS.md`
- `LOCKED-CHECKPOINT.md`
- `PROJECT-STATUS.md`
- `CODEX-WORKFLOW.md`
- `grade-path-lessons.js`
- `parent-tutor-guide.html` for a public support page
- `daily-reading-practice.html` for one useful SEO/help content page
- `about.html`
- `contact.html`
- `privacy.html`
- `terms.html`
- `css/site-links.css` for shared footer, navigation, resource-page, and skip-link styles
- `robots.txt`
- `sitemap.xml`
- `LEVEL-E-ROADMAP.md`
- `PRINTABLE-WORKSHEETS-PLAN.md`

## Homepage SEO Status

The homepage now includes:

- canonical URL
- EducationalApplication schema markup
- stronger top navigation
- stronger footer navigation
- skip-to-content accessibility link
- links to daily practice, parent/tutor guide, about, contact, privacy, terms, and sitemap

## Lesson App SEO / Navigation Status

The lesson app page now includes:

- canonical URL for `https://readeasy30.com/app.html`
- robots meta tag
- theme-color meta tag
- shared `css/site-links.css` footer styles
- skip-to-content accessibility link
- top navigation to Home, Daily Practice, and Parent / Tutor Guide
- footer navigation linking Home, Lesson App, Daily Practice, Parent / Tutor Guide, About, Contact, Privacy, Terms, and Sitemap
- expanded manual level buttons A-H
- `grade-path-lessons.js` loaded after `app.js`

## Support Page Status

Added support and legal foundation pages:

- `about.html`
- `contact.html`
- `privacy.html`
- `terms.html`

These are plain-language starter pages. Review before adding accounts, forms, analytics, live ads, payments, or user-submitted content.

## Content Page Status

Added `daily-reading-practice.html` as the first useful SEO/help content page.

This page supports the future content cluster around daily reading practice, parent reading help, adult reading help, ESL reading practice, and practical reading skills.

## Build Rule Going Forward

Use this workflow every time:

1. Check current files first.
2. Do not rebuild features that already exist.
3. Make one small upgrade at a time.
4. Commit after the upgrade works.
5. Update this checkpoint or create a new checkpoint when the app reaches a new stable stage.

## Next Safe Upgrade

Next recommended upgrade:

Test and polish the expanded Grade 8 readiness lesson path.

Suggested next work:

1. Manually test `app.html` after deployment.
2. Confirm placement check shows 8 steps.
3. Confirm manual level buttons A-H load correctly.
4. Confirm Day 30 displays Grade 8 readiness content.
5. Add a free sample printable worksheet page.
6. Add accessibility testing notes.
7. Add more useful SEO content pages carefully.
8. Keep Bubbles calm and simple.
9. Keep the site easy for adults, parents, ESL learners, and struggling readers.

## Connector Note

On 2026-05-26, the homepage and supporting files committed successfully. A full `app.html` replacement was previously blocked by connector safety checks, so app-page navigation should be updated only in small safe patches when possible.

On 2026-05-28, `app.html` was safely updated to load `grade-path-lessons.js` and show manual levels A-H.

## Important Warning

Do not let AI or Codex redesign the whole app, replace the architecture, or remove the stable lesson engine. Future work should be careful expansion, not demolition.
