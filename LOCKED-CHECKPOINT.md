# ReadEasy30 Locked Checkpoint

Date locked: 2026-05-25

## Current Locked Architecture

This project is locked as a simple GitHub Pages reading-practice website.

Use this structure:

- `index.html` = marketing homepage
- `app.html` = lesson app page
- `app.js` = lesson engine and reading logic
- `css/style.css` = styling
- Supporting JavaScript files may stay separate when they add small features safely

Do not convert this project to React, Vite, Next.js, or another framework unless the owner explicitly changes the architecture later.

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
- Vocabulary pills
- Correct / retry answer feedback
- Clear answers
- Reset progress
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
3. Add Level E planning notes for future 5th-8th grade expansion.
4. Keep Bubbles calm and simple.
5. Keep the site easy for adults, parents, ESL learners, and struggling readers.

## Important Warning

Do not let AI or Codex redesign the whole app, replace the architecture, or remove the stable lesson engine. Future work should be careful expansion, not demolition.
