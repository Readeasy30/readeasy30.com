# ReadEasy30 240-Day Static QA Notes

Date updated: 2026-06-06

## Purpose

This file records the current static QA target after the Day One rebuild.

It replaces the old notes that described the previous 30-day `grade-path-lessons.js` setup.

## Current app wiring

The public app should use this simple script order:

```text
student-profiles.js
app.js
```

The public app should not depend on the old helper-script stack.

## Static QA target

Review these files together:

- `app.html`
- `app.js`
- `student-profiles.js`
- `parent-tutor-guide.html`
- `README.md`
- `PROJECT-STATUS.md`
- `LOCKED-CHECKPOINT.md`

## Confirmed intended architecture

The clean app engine in `app.js` owns:

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

## Static checks to perform

1. Confirm `app.html` has a mobile viewport tag.
2. Confirm `app.html` has one clear H1.
3. Confirm `app.html` links to `parent-tutor-guide.html`.
4. Confirm `app.html` loads `student-profiles.js`.
5. Confirm `app.html` loads `app.js`.
6. Confirm `app.html` does not load `grade-path-lessons.js`.
7. Confirm `app.html` does not load the old helper-script stack.
8. Confirm `app.js` creates 240 lessons.
9. Confirm `app.js` includes Level A-H mapping.
10. Confirm `app.js` builds the day selector from the lessons array.
11. Confirm `app.js` includes placement steps A-H.
12. Confirm `app.js` saves progress in `localStorage`.
13. Confirm `app.js` has read-aloud support that fails safely if unsupported.
14. Confirm `parent-tutor-guide.html` has phone-friendly action buttons.
15. Confirm `sitemap.xml` includes the main app, homepage, parent/tutor guide, worksheets, and reading + math page.

## Expected level bands

- A starts at Day 1
- B starts at Day 31
- C starts at Day 61
- D starts at Day 91
- E starts at Day 121
- F starts at Day 151
- G starts at Day 181
- H starts at Day 211

## Manual browser QA still required

Static review cannot prove live browser behavior.

Browser QA must still confirm:

1. App loads.
2. Story text appears.
3. Day selector fills with 240 days.
4. Placement check works.
5. Manual levels work.
6. Read Aloud works where supported.
7. Check Answers works.
8. Next Lesson works.
9. Parent / Tutor Guide opens.
10. Phone layout is readable without zooming.

## Stop and fix if

Stop and fix if static review or browser review finds:

- `Loading story...` stays visible
- day selector is empty
- old scripts are loaded again
- placement does not render
- parent/tutor link is missing
- answer checking does nothing
- mobile buttons are too small
- the app depends on deleted or stale files

## Do not change

Do not convert to React, Vite, Next.js, TypeScript, or build tools.

Do not re-add old app dependencies unless there is a clear tested reason.

Do not remove the parent/tutor path.

Do not add live ads, tracking, payments, affiliate links, accounts, uploads, public AI tools, scraping, or credentials.
