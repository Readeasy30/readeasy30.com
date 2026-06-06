# ReadEasy30 240-Day App QA Checklist

Date updated: 2026-06-06

## Purpose

Use this checklist to test the clean ReadEasy30 app after the Day One rebuild.

The app now uses a clean app shell and one clean app engine:

```text
app.html
app.js
student-profiles.js
```

The public app should no longer depend on `grade-path-lessons.js` or the old helper-script stack.

## Current app facts

The clean app provides:

- 240 generated daily reading lessons
- 8 levels: A through H
- placement check
- manual level choice
- jump-to-day selector
- progress tracking
- streak count
- timer
- read-aloud support
- vocabulary words
- comprehension questions
- Bubbles coaching messages
- parent/tutor link inside the app

## Level path

- Level A — Days 1-30 — early-reader confidence
- Level B — Days 31-60 — Grade 1 path
- Level C — Days 61-90 — Grade 2 path
- Level D — Days 91-120 — Grade 3 path
- Level E — Days 121-150 — Grade 4 path
- Level F — Days 151-180 — Grade 5 path
- Level G — Days 181-210 — Grades 6-7 path
- Level H — Days 211-240 — Grade 8 readiness

## Phone QA steps

1. Open `https://readeasy30.com/app.html` on a phone.
2. Confirm the page loads without staying on `Loading story...`.
3. Confirm the top buttons are easy to tap.
4. Tap `Find Starting Level`.
5. Confirm the placement check opens.
6. Tap `Start Placement Check`.
7. Confirm Step 1 appears.
8. Confirm the placement story text is readable.
9. Confirm answer boxes are easy to tap.
10. Tap `Read Placement Aloud` and confirm audio works where supported.
11. Return to the lesson area.
12. Confirm `Jump to Day` contains 240 day options.
13. Choose Day 31 and confirm Level B appears.
14. Choose Day 61 and confirm Level C appears.
15. Choose Day 91 and confirm Level D appears.
16. Choose Day 121 and confirm Level E appears.
17. Choose Day 151 and confirm Level F appears.
18. Choose Day 181 and confirm Level G appears.
19. Choose Day 211 and confirm Level H appears.
20. Confirm the Parent / Tutor Help link opens `parent-tutor-guide.html`.

## Desktop QA steps

1. Open `https://readeasy30.com/app.html` on desktop.
2. Confirm the story title appears.
3. Confirm Bubbles message appears.
4. Confirm vocabulary pills appear.
5. Type answers into the three answer boxes.
6. Tap `Check Answers`.
7. Confirm correct answers show success feedback.
8. Confirm weak answers show retry feedback.
9. Tap `Clear Answers`.
10. Confirm answers clear.
11. Tap `Next Lesson`.
12. Confirm the next lesson appears.
13. Refresh the browser.
14. Confirm progress is still saved on the device.
15. Tap `Reset This Student` only on a test device.
16. Confirm reset clears progress.

## Read-aloud QA

1. Tap `Read Aloud` on a lesson.
2. Confirm the browser reads the story text where speech synthesis is supported.
3. Confirm the page still works if read-aloud is not supported by the browser.

## Tutor/helper QA

1. Open `https://readeasy30.com/parent-tutor-guide.html` on a phone.
2. Confirm the text is readable without zooming.
3. Confirm buttons are easy to tap.
4. Confirm `Open Lesson App` works.
5. Confirm `Start Placement Check` works.
6. Confirm `Print Worksheets` works.

## Stop and fix if

Stop and fix if any of these happen:

- the story never loads
- placement check does not open
- day selector is empty
- day selector does not show 240 days
- manual level buttons fail
- next lesson does not work
- answer boxes cannot be typed into
- check answers button does nothing
- parent/tutor guide link fails
- phone layout requires zooming

## Do not re-add

Do not re-add the old script stack as app dependencies:

```text
grade-path-lessons.js
level-b-lessons.js
level-c-lessons.js
level-d-lessons.js
level-e-lessons.js
level-f-lessons.js
level-g-lessons.js
level-h-lessons.js
read-live-240-integration.js
audio-fix.js
session-timer.js
report.js
vocab-helper.js
learner-mode.js
session-plan.js
startup-fix.js
bubbles-question-buttons.js
```

Old files may remain in the repo temporarily, but the public app should not depend on them.
