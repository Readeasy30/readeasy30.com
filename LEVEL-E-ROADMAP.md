# ReadEasy30 A-H Reading Path Quality Roadmap

Last updated: 2026-06-06

## Purpose

This file replaces the old Level E future-planning note.

Level E is no longer a future-only idea. The clean Day One app now includes Levels A through H across the 240-day path.

Use this document to improve the quality of the existing A-H path without reintroducing the old app script stack.

## Current app path

- Level A — Days 1-30 — early-reader confidence
- Level B — Days 31-60 — Grade 1 path
- Level C — Days 61-90 — Grade 2 path
- Level D — Days 91-120 — Grade 3 path
- Level E — Days 121-150 — Grade 4 path
- Level F — Days 151-180 — Grade 5 path
- Level G — Days 181-210 — Grades 6-7 path
- Level H — Days 211-240 — Grade 8 readiness

## Current app files

The public app shell loads only:

```text
student-profiles.js
app.js
```

Do not re-add old level-specific lesson files or helper-script dependencies unless live QA proves a real current need.

## Quality goal

Improve the content inside the existing clean 240-day structure.

The path should help learners grow carefully from early reading confidence toward stronger real-life reading skills.

The site must stay calm, respectful, and easy to use on a phone.

## Level quality targets

### Level A — Days 1-30

Focus:

- short sentences
- familiar words
- one clear idea
- confidence and rereading

### Level B — Days 31-60

Focus:

- longer simple sentences
- daily-life vocabulary
- who, what, where, when questions
- simple proof from text

### Level C — Days 61-90

Focus:

- short paragraphs
- sequence
- main idea
- details
- rereading for proof

### Level D — Days 91-120

Focus:

- practical passages
- signs, notes, reminders, labels
- careful reading
- basic inference

### Level E — Days 121-150

Focus:

- longer practical paragraphs
- cause and effect
- comparing two ideas
- context clues
- explaining answers with proof

### Level F — Days 151-180

Focus:

- author purpose
- evidence in a passage
- compare viewpoints
- stronger vocabulary
- multi-step thinking

### Level G — Days 181-210

Focus:

- nonfiction passages
- practical forms and notices
- required action vs. extra detail
- reasons and evidence
- reading for decisions

### Level H — Days 211-240

Focus:

- Grade 8 readiness
- analyzing claims
- separating background from instructions
- reading with purpose
- explaining conclusions clearly

## Lesson quality checklist

Each lesson should eventually include:

1. A short practical passage.
2. Clear vocabulary support.
3. Questions that match the passage.
4. At least one detail/proof question.
5. Calm Bubbles guidance.
6. A helper-friendly reading flow.
7. No shame language.
8. No fake promises.
9. No clutter.
10. Phone-readable layout.

## Improvement rule

Improve content in useful batches.

Do not rebuild the app architecture unless live QA proves the current clean architecture is broken.

Do not reintroduce:

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

## Next safe content work

After live QA passes:

1. Improve Level A lesson quality first.
2. Improve Level B and C next.
3. Improve Level D-H in order.
4. Add worksheet support only when it matches the current level path.
5. Keep parent/tutor help visible.
6. Keep ReadEasy30 aligned with MathEasy30.

## Stop rule

Stop before framework changes, accounts, tracking, ads, payments, affiliate links, uploads, scraping, public AI tools, or major deletion.
