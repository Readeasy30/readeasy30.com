# ReadEasy30 User Experience Guide

Last updated: 2026-06-06

## Purpose

ReadEasy30 must stay simple, calm, fast, mobile-first, and easy to use.

The learner should understand the next step in under 10 seconds.

## Current public funnel

The homepage should guide visitors in this order:

1. Start Reading Now
2. Find Starting Level
3. Print Worksheets
4. Parent / Tutor Help
5. Reading + Math Plan

Do not bring back a giant top navigation menu.

## Main UX goal

Help a learner start reading practice without confusion, pressure, shame, or clutter.

The site should feel safe for children, respectful for adults, and useful for parents, tutors, homeschool helpers, ESL learners, and community programs.

## Core rules

- Use plain words.
- Use large readable text.
- Use clear buttons.
- Keep the next step obvious.
- Keep the Parent / Tutor Help path visible.
- Preserve the clean app dependency list.
- Avoid clutter.
- Avoid long paragraphs.
- Avoid shame language.
- Keep Bubbles calm and controlled.
- Update status files after stable changes.

## Current app standard

The public app shell loads only:

```text
student-profiles.js
app.js
```

The clean app provides:

- 240 generated daily reading lessons
- Levels A-H
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

## App screen priority

The lesson app should keep this order when possible:

1. Home/navigation links
2. Page title and short explanation
3. Placement check or day selector
4. Progress message
5. Bubbles coaching message
6. Reading passage
7. Read Aloud button
8. Vocabulary support
9. Questions
10. Check / Clear / Previous / Next buttons
11. Parent or helper tip
12. Progress or completion message

## Button rules

- Primary button should be the next main action.
- Secondary buttons should support the learner.
- Button text should be short and clear.
- Buttons should be large enough for mobile users.
- Do not hide the main start button.
- Do not bury Parent / Tutor Help.

## Reading lesson UX

Each lesson should include:

- one clear passage
- simple questions
- enough spacing to read comfortably
- calm feedback
- a clear next step
- optional helper support

## Adult learner rule

ReadEasy30 can help children and adults.

Do not make the site feel babyish.

Use supportive language that respects adults, ESL learners, older learners, and struggling readers.

## Parent / Tutor rule

Helper notes should be short and practical.

Good helper guidance:

- read slowly together
- ask one question at a time
- let the learner think
- praise effort
- review mistakes calmly

Important pages should link to:

```text
parent-tutor-guide.html
```

Use the label:

```text
Parent / Tutor Help
```

## Shared education growth rule

ReadEasy30 is connected to MathEasy30 through `Wholelychit/marketing-system`.

Website code stays in this repo.

Marketing plans stay in `marketing-system`.

## AI workflow

Use safe repository edits only when a reliable write path is available.

Do not use ChatGPT GitHub connector writes unless Gerry explicitly authorizes one specific write action in the current chat.

Preferred write paths:

1. Codex with a working non-connector write path
2. GitHub website editor
3. github.dev
4. GitHub Desktop
5. local Git after it is correctly installed

Read-only connector checks are allowed.

## Replacement rule

If a public file is stale, cluttered, or inconsistent, replace the whole file cleanly.

Do not stack tiny repairs on top of broken repairs.

Do not create duplicate parallel systems.

Do not use tiny patches to preserve a bad page.

## Do not add

- React, Vite, Next.js, TypeScript, or build tools.
- Live ads.
- Live tracking.
- Payment setup.
- Affiliate links.
- User accounts.
- Upload systems.
- Private keys.
- Public AI tools.
- Open-ended chatbot behavior for Bubbles.
- Major rewrites unless live QA proves a current blocker.
- Old app script dependencies.

## Live QA rule

Manual phone and desktop QA is required before major new feature work.

Test:

1. Homepage funnel buttons.
2. App loading.
3. Placement check.
4. Jump to Day.
5. Read Aloud.
6. Check Answers.
7. Next Lesson.
8. Parent / Tutor Help.
9. Worksheet hub.
10. Sitemap.
