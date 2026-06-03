# ReadEasy30 Target Page Status

Use this file to track which public target pages and curriculum build pages are complete.

## Completed target pages

| Page | File | Status |
|---|---|---|
| Home page | `index.html` | Complete, but needs small 240-day link refresh later |
| Current lesson app | `app.html` | Complete and working |
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
| `read-240-path-helper.js` | Complete |
| `240-DAY-UPDATE-BUNDLE.md` | Complete |
| `APP-240-PREVIEW-TARGET.md` | Complete |

## Still needed

| Target | Status | Notes |
|---|---|---|
| Homepage 240-day link refresh | Pending | Use a small patch only |
| Live app Days 31-240 wiring | Pending | Do only after staged test/preview pages are checked |
| Ask Bubbles preset question buttons | Pending | Add after curriculum wiring is stable |
| Sister voice clip support | Pending | Add later if permission and audio files are provided |

## Current build rule

Do not replace the working app engine until the 240-day interactive lesson data has been tested in a separate preview path.

## Current 240-day lesson status

- Days 31-240 interactive lesson data is complete and staged.
- Levels B-H are loaded through `lesson-loader-240.js`.
- `lesson-test-240.html` is available for internal verification.
- `app-240.html` is available as a noindex preview app.
- The current live app engine remains protected.
