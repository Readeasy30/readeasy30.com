# ReadEasy30 Locked Checkpoint

Date locked: 2026-06-06

Repository: `Wholelychit/readeasy30.com`
Branch: `main`

## Locked stable state

ReadEasy30 is locked as a simple, mobile-first, static reading-practice website.

Use only:

- HTML
- CSS
- JavaScript
- GitHub
- Cloudflare
- browser `localStorage` for simple device progress

Do not convert this project to React, Vite, Next.js, TypeScript, a build system, or a server app.

## Locked public funnel

The homepage must guide visitors in this order:

1. Start Reading Now
2. Find Starting Level
3. Print Worksheets
4. Parent / Tutor Help
5. Reading + Math Plan

Do not bring back a giant top navigation menu.

## Locked core files

- `index.html` — clean SEO homepage funnel
- `app.html` — clean reading app shell
- `app.js` — locked 240-day app engine
- `student-profiles.js` — shared-device learner/profile support
- `parent-tutor-guide.html` — mobile-friendly helper guide
- `printable-reading-worksheets.html` — worksheet hub
- `free-reading-and-math-practice.html` — shared reading + math plan
- `sitemap.xml` — crawl priority map
- `robots.txt` — crawler instructions
- `README.md` — production standard
- `PROJECT-STATUS.md` — current state and QA queue

## Locked app standard

The public app shell loads only:

```text
student-profiles.js
app.js
```

Current locked app cache versions:

```text
student-profiles.js?v=20260606-students2
app.js?v=20260606-locked1
```

The app should not depend on the old fragile script stack.

Do not re-add these as public app dependencies unless there is a clear tested reason:

```text
level-b-lessons.js
level-c-lessons.js
level-d-lessons.js
level-e-lessons.js
level-f-lessons.js
level-g-lessons.js
level-h-lessons.js
read-live-240-integration.js
grade-path-lessons.js
audio-fix.js
session-timer.js
report.js
vocab-helper.js
learner-mode.js
session-plan.js
startup-fix.js
bubbles-question-buttons.js
```

## Fixes locked on 2026-06-06

1. Student profile progress scoping is fixed.
   - `student-profiles.js` now scopes `readEasy`, `readEasy30`, and `readeasy30` storage keys.
   - Current app progress key `readeasy30.clean.progress.v1` is included.

2. Shared-device student progress is protected.
   - Each student profile keeps its own reading progress on the same device.
   - Reset is limited to the selected student.

3. Blank answers are blocked.
   - Lesson answers cannot pass when blank.
   - Placement answers cannot pass when blank.

4. App files are cache-busted.
   - `app.html` now loads the locked app script version.

## Commits included in this lock

- `7334cc0ab0f4685e0a4cfcbcd676a48f0f9236f4` — fixed student profile progress scoping
- `2f9c62d712b1e0ac330fc5b64327e8e5e014105e` — forced updated student profile script load
- `c2ac98337c66ca7028788828fee0b61cd0d8ecc3` — fixed blank answer checking
- `3bc892c2a36a1b4cbb3fbb2a3fc93c0b620e725f` — locked app script cache version

## Do not redo

Do not rebuild the app from scratch.
Do not replace it with React, Vite, Node, or a framework.
Do not rework student profiles unless a new bug is proven.
Do not change storage keys without a migration.
Do not overwrite the locked app with an older app version.

## Next safe QA check

1. Open `https://readeasy30.com/app.html`.
2. Hard refresh the browser.
3. Add Student 1 and Student 2.
4. Complete one lesson as Student 1.
5. Switch to Student 2 and confirm progress is separate.
6. Leave answers blank and confirm the app blocks completion.
