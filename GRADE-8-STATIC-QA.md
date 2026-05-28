# Grade 8 Static QA Notes

Date added: 2026-05-28

## Purpose

This file records a static code review of the expanded ReadEasy30 A-H lesson path.

This is not a replacement for browser testing. It confirms the repository wiring before live manual testing.

## Files reviewed

- `app.html`
- `app.js`
- `grade-path-lessons.js`
- `startup-fix.js`

## Static QA result

No obvious architecture-breaking issue was found in the static review.

## Confirmed wiring

### App engine stays stable

`app.js` still owns the lesson engine, including:

- `lessons`
- `addLesson()`
- placement flow
- answer checking
- day selector
- progress saving
- read aloud
- Bubbles coaching
- achievements
- fluency coach
- startup loading

### Expanded lesson data loads after engine

`app.html` loads scripts in this safe order:

1. `app.js`
2. `grade-path-lessons.js`
3. helper scripts
4. `startup-fix.js`

This lets the stable engine load first, then lets the expanded A-H lesson data replace the starter A-D data.

### Manual levels are present

`app.html` includes manual level buttons for:

- Level A
- Level B
- Level C
- Level D
- Level E
- Level F
- Level G
- Level H

### Placement path is expanded

`grade-path-lessons.js` includes placement steps for:

- A
- B
- C
- D
- E
- F
- G
- H

The placement label in `app.html` says `Step 1 of 8`, and `renderPlacementStep()` uses `placementSteps.length`, so the interface should reflect the expanded placement array.

### Lesson count remains 30

`grade-path-lessons.js` replaces the starter lesson data with 30 lessons.

The app uses `lessons.length` for the lesson count and progress bar, so the lesson count should remain dynamic.

### Level start map is expanded

`grade-path-lessons.js` updates `levelStart` to:

- A = Day 1
- B = Day 4
- C = Day 7
- D = Day 11
- E = Day 15
- F = Day 19
- G = Day 23
- H = Day 27

This supports manual starting points A-H.

### Startup fix should still work

`startup-fix.js` uses `lessons.length` and `currentLesson` dynamically.

Because it loads after `grade-path-lessons.js`, it should reopen the next available lesson using the expanded 30-day path.

## Manual browser QA still required

The next step is live browser testing:

1. Open `app.html` after deployment.
2. Reset progress.
3. Start Placement Check.
4. Confirm it shows Step 1 of 8.
5. Confirm all A-H placement steps render.
6. Choose Level H manually.
7. Confirm the app loads Day 27.
8. Confirm Day 30 is Grade 8 readiness content when reached.
9. Confirm answers, read aloud, day selector, and progress still work.

## Do not change

Do not replace the lesson engine.
Do not rebuild the day selector.
Do not convert to React, Vite, Next.js, TypeScript, or build tools.
