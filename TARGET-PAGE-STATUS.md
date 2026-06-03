# ReadEasy30 Target Page Status

Use this file to track which public target pages and curriculum build pages are complete.

## Completed target pages

| Page | File | Status |
|---|---|---|
| Home page | `index.html` | Complete with public 240-day links |
| Current lesson app | `app.html` | Complete and working with full live 240-day integration and Bubbles preset question buttons |
| 240-day reading path | `240-day-reading-path.html` | Complete |
| Days 1-240 public curriculum | `days-1-240-curriculum.html` | Complete |
| Internal 240-day lesson test page | `lesson-test-240.html` | Complete, noindex |
| 240-day preview app | `app-240.html` | Complete, noindex |
| Reading levels beginner to 8th grade | `reading-levels-beginner-to-8th-grade.html` | Complete |
| Daily reading practice | `daily-reading-practice.html` | Complete |
| Printable reading worksheets | `printable-reading-worksheets.html` | Complete |
| Beginner phonics practice | `phonics-practice-for-beginners.html` | Complete |
| Reading comprehension practice | `reading-comprehension-practice.html` | Complete |
| Functional literacy practice | `functional-literacy-practice.html` | Complete |
| Adult reading without shame | `adult-reading-practice-without-shame.html` | Complete |
| ESL reading practice | `esl-reading-practice.html` | Complete |
| Parent / tutor guide | `parent-tutor-guide.html` | Complete |
| About | `about.html` | Complete |
| Contact | `contact.html` | Complete |
| Privacy | `privacy.html` | Complete |
| Terms | `terms.html` | Complete |
| Sitemap | `sitemap.xml` | Complete and includes 240-day pages |
| Robots | `robots.txt` | Verified complete |

## Completed source/data files

| File | Status |
|---|---|
| `DAYS-1-240-CURRICULUM.md` | Complete |
| `DAYS-31-240-CURRICULUM.md` | Complete |
| `curriculum-240.js` | Complete |
| `level-b-lessons.js` | Complete: Days 31-60 |
| `level-c-lessons.js` | Complete: Days 61-90 |
| `level-d-lessons.js` | Complete: Days 91-120 |
| `level-e-lessons.js` | Complete: Days 121-150 |
| `level-f-lessons.js` | Complete: Days 151-180 |
| `level-g-lessons.js` | Complete: Days 181-210 |
| `level-h-lessons.js` | Complete: Days 211-240 |
| `lesson-loader-240.js` | Complete: combines staged Levels B-H |
| `lesson-test-240.js` | Complete: verifies staged lesson loader |
| `app-240.js` | Complete: preview app script |
| `read-live-240-integration.js` | Complete: expands live app to Days 1-240 |
| `bubbles-question-buttons.js` | Complete: local preset question buttons and voice readback |
| `read-240-path-helper.js` | Complete |
| `240-DAY-UPDATE-BUNDLE.md` | Complete |
| `APP-240-PREVIEW-TARGET.md` | Complete |

## Still needed

| Target | Status | Notes |
|---|---|---|
| Sister voice clip support | Pending | Add later if permission and audio files are provided |

## Current build rule

The working app engine is preserved. The live app now loads staged Level B-H data through a safe integration layer instead of deleting the original 30-day code.

## Current 240-day lesson status

- Days 31-240 interactive lesson data is complete and live-integrated.
- Levels B-H are loaded into the live app through `read-live-240-integration.js`.
- `app.html` now presents the path as a full 240-day reading app.
- `lesson-test-240.html` and `app-240.html` remain available as noindex testing/preview pages.
- The public homepage links to the 240-day path and Days 1-240 curriculum.
- The current live app engine has full 240-day integration and local Bubbles preset question buttons.
