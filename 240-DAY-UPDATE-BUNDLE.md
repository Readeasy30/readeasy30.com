# ReadEasy30 240-Day Update Bundle

Status file for the batch update before live app wiring.

## Completed files

- `DAYS-31-240-CURRICULUM.md` — detailed continuation path from Level B through Level H.
- `DAYS-1-240-CURRICULUM.md` — complete master path from Day 1 through Day 240.
- `curriculum-240.js` — app-ready data source exposing `window.READEASY240_LEVELS` and `window.READEASY240_CURRICULUM`.
- `240-day-reading-path.html` — public 240-day reading readiness page with attainable word-count chart.
- `days-1-240-curriculum.html` — public Days 1-240 reading curriculum page.

## Curriculum structure

| Days | Level | Goal |
|---:|---|---|
| 1-30 | A | Starter reading confidence |
| 31-60 | B | Stronger early reading |
| 61-90 | C | Paragraph confidence |
| 91-120 | D | Practical reading and longer text |
| 121-150 | E | Vocabulary and summaries |
| 151-180 | F | Evidence and nonfiction strength |
| 181-210 | G | Middle-school thinking |
| 211-240 | H | 8th-grade readiness |

## Honest marketing language

Use this wording:

> 30 days to confidence. 240 days toward readiness.

Avoid this wording:

> Guaranteed 8th-grade reading in 240 days.

## App wiring plan

Do not overwrite the current working app engine until the next batch update is ready.

Next safe steps:

1. Load `curriculum-240.js` in `app.html` after the existing lesson app scripts.
2. Add a level selector for Levels A-H.
3. Add Day 1-240 selector.
4. Map Day 1-30 to the current live lessons.
5. Add placeholder lesson screens for Days 31-240 using the app-ready curriculum data.
6. Replace placeholders with full lesson stories/questions in small safe batches.
7. Preserve current localStorage progress keys or migrate them carefully.
8. Test Level A before exposing Level B-H navigation.

## Current safety note

The complete 240-day curriculum is now uploaded as source and data files. The live app remains safe until final wiring.
