# Grade 8 Path QA Checklist

Date added: 2026-05-28

## Purpose

Use this checklist to test the expanded ReadEasy30 lesson path from early reading through Grade 8 readiness.

The goal is to confirm the new content works without changing or breaking the stable lesson engine.

## Files involved

- `app.html`
- `app.js`
- `grade-path-lessons.js`
- `LOCKED-CHECKPOINT.md`
- `PROJECT-STATUS.md`

## Critical architecture rule

Do not replace the lesson engine in `app.js`.

The expanded path is loaded through `grade-path-lessons.js` after `app.js`.

## Browser test steps

1. Open `app.html` after deployment.
2. Reset progress on the test device.
3. Confirm the placement check says Step 1 of 8.
4. Start the placement check.
5. Confirm the placement check progresses through Levels A, B, C, D, E, F, G, and H.
6. Confirm Read Placement Aloud still works.
7. Confirm manual level buttons show A through H.
8. Click each manual level and confirm the lesson starts near the correct band.
9. Confirm the Day selector still shows 30 total days.
10. Confirm future days remain locked until progress opens them.
11. Complete Day 1 and confirm progress saves.
12. Refresh the page and confirm progress remains saved.
13. Use Read Aloud on a lesson and confirm the text reads aloud.
14. Check answers with correct text and confirm success feedback appears.
15. Check answers with wrong text and confirm retry feedback appears.
16. Confirm Bubbles gives calm coaching messages.
17. Confirm vocabulary pills appear for each lesson.
18. Confirm the Fluency Coach still appears.
19. Confirm the Achievement area still appears.
20. Confirm Reset Progress still clears placement and lesson progress.

## Level checks

### Level A

Confirm Level A uses short early-reader sentences.

### Level B

Confirm Level B feels like Grade 1 reading practice with simple details.

### Level C

Confirm Level C uses Grade 2 paragraph practice, sequence, and main idea.

### Level D

Confirm Level D uses Grade 3 skills like cause and effect and simple inference.

### Level E

Confirm Level E uses Grade 4 nonfiction skills like context clues and author purpose.

### Level F

Confirm Level F uses Grade 5 skills like comparison, evidence, and practical reading.

### Level G

Confirm Level G uses Grades 6-7 skills like claims, evidence, source checking, and theme.

### Level H

Confirm Level H uses Grade 8 readiness skills like bias, counterargument, synthesis, and critical thinking.

## Day 30 check

Day 30 should focus on reading like a thinker.

It should ask the learner to:

- identify what strong readers do
- name evidence, bias, or missing information
- explain thinking

## Mobile checks

1. Open on a phone-sized screen.
2. Confirm placement buttons are readable.
3. Confirm A-H manual level buttons do not feel cramped.
4. Confirm questions and answer boxes are easy to tap.
5. Confirm footer links remain usable.

## Stop points

Stop and record a blocker if:

- lessons do not load
- placement does not start
- manual levels fail
- day selector breaks
- progress does not save
- read aloud fails across normal supported browsers
- the app shows only the old A-D path

## Next polish after QA

After these checks pass, the next safe work is:

1. Add one printable sample worksheet page.
2. Add an accessibility notes file.
3. Add an SEO page about reading levels and daily practice.
4. Review each lesson answer pattern for easier accepted answers.
