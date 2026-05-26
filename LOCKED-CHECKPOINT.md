# ReadEasy30 Locked Checkpoint

Date locked: 2026-05-26

## Current Locked Architecture

This project is locked as a simple GitHub Pages reading-practice website.

Use this structure:

- `index.html` = marketing homepage
- `app.html` = lesson app page
- `app.js` = lesson engine and reading logic
- `css/style.css` = styling
- Supporting JavaScript files may stay separate when they add small features safely

Do not convert this project to React, Vite, Next.js, TypeScript, or another framework unless the owner explicitly changes the architecture later.

## Locked Working Features

The current app includes:

- Placement check
- Manual starting level choice
- 30 reading lessons
- Levels A, B, C, and D
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
- `parent-tutor-guide.html` for a public support page
- `css/site-links.css` for shared footer and resource-page navigation styles
- `robots.txt`
- `sitemap.xml`
- `LEVEL-E-ROADMAP.md`
- `PRINTABLE-WORKSHEETS-PLAN.md`

## Homepage SEO Status

The homepage now includes:

- canonical URL
- EducationalApplication schema markup
- stronger footer navigation
- link to the parent/tutor guide
- sitemap link

## Build Rule Going Forward

Use this workflow every time:

1. Check current files first.
2. Do not rebuild features that already exist.
3. Make one small upgrade at a time.
4. Commit after the upgrade works.
5. Update this checkpoint or create a new checkpoint when the app reaches a new stable stage.

## Next Safe Upgrade

Next recommended upgrade:

Improve lesson quality and progression, not structure.

Suggested next work:

1. Review all 30 lessons for reading-level progression.
2. Strengthen Level A through Level D text quality.
3. Add a free sample printable worksheet page.
4. Add accessibility checks.
5. Improve app footer links when connector write filter allows the `app.html` update.
6. Keep Bubbles calm and simple.
7. Keep the site easy for adults, parents, ESL learners, and struggling readers.

## Connector Note

On 2026-05-26, the homepage and supporting files committed successfully. A full `app.html` replacement was blocked by connector safety checks, so app-page navigation should be updated later in smaller patches or by Codex.

## Important Warning

Do not let AI or Codex redesign the whole app, replace the architecture, or remove the stable lesson engine. Future work should be careful expansion, not demolition.
