# ReadEasy30 Manual QA Checklist

Date created: 2026-05-28

Use this checklist after deployment or after any safe app/content update. Keep testing calm, simple, and repeatable.

## Core browser test

1. Open `https://readeasy30.com/`.
2. Confirm the homepage loads without broken layout.
3. Confirm the main buttons open the lesson app and support pages.
4. Open `https://readeasy30.com/app.html`.
5. Confirm the app loads without a blank page.
6. Confirm Bubbles appears as a calm reading coach.
7. Confirm mobile view is readable and buttons are easy to tap.

## Placement test

1. Start the placement check.
2. Confirm the placement check has 8 steps.
3. Confirm each question can be read and answered.
4. Confirm empty answers show a helpful message.
5. Confirm correct answers show encouraging feedback.
6. Confirm incorrect answers give a retry or hint-style message.
7. Finish the placement check.
8. Confirm the recommended level appears.

## Daily lesson path

1. Start Day 1.
2. Confirm story text appears.
3. Confirm questions appear under the story.
4. Confirm Read Aloud works when the browser supports speech.
5. Confirm Clear Answers clears typed answers only.
6. Confirm Check Answers gives feedback.
7. Confirm Next moves forward safely.
8. Confirm future lessons stay locked until progress opens them.
9. Confirm the day selector shows the correct day.
10. Confirm progress is saved after refresh.

## Levels A-H

1. Confirm Level A starts early-reader practice.
2. Confirm Level B starts Grade 1 style practice.
3. Confirm Level C starts Grade 2 style practice.
4. Confirm Level D starts Grade 3 style practice.
5. Confirm Level E starts Grade 4 style practice.
6. Confirm Level F starts Grade 5 style practice.
7. Confirm Level G starts Grades 6-7 style practice.
8. Confirm Level H starts Grade 8 readiness practice.

## Day 30 / Grade 8 readiness

1. Jump to or unlock Day 30 in a test browser profile.
2. Confirm Day 30 asks for evidence, reasoning, synthesis, bias, or missing-information thinking.
3. Confirm the language is clear and not too harsh.
4. Confirm Bubbles encourages careful thinking instead of speed.

## Support pages

Check these pages for title, visible H1, useful text, footer links, and no broken internal links:

- `daily-reading-practice.html`
- `calm-reading-practice-30-minutes-a-day.html`
- `adult-reading-practice.html`
- `adult-reading-practice-without-shame.html`
- `esl-reading-practice.html`
- `esl-reading-practice-everyday-english.html`
- `parent-tutor-guide.html`
- `reading-levels-beginner-to-8th-grade.html`
- `sample-reading-worksheet.html`
- `about.html`
- `contact.html`
- `privacy.html`
- `terms.html`

## Safety check

Confirm the site still has no:

- live ads
- live tracking scripts
- payment setup
- account system
- user-upload system
- public open-ended chatbot
- API keys or secrets

## Notes

Record any issue with:

- page URL
- browser/device
- what happened
- what should have happened
- whether it blocks launch
