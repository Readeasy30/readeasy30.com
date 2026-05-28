# Accessibility Testing Notes

Date added: 2026-05-28

## Purpose

Use these notes to keep ReadEasy30 usable for children, adults, ESL learners, older learners, parents, tutors, and struggling readers.

The site should feel calm, readable, and easy to use on phones, tablets, and computers.

## Main accessibility goals

- Large readable text
- Clear buttons
- Simple navigation
- Strong color contrast
- Keyboard-friendly controls
- Helpful labels
- No shame language
- No rushed experience
- Calm error and retry messages

## Pages to test

- `index.html`
- `app.html`
- `daily-reading-practice.html`
- `parent-tutor-guide.html`
- `sample-reading-worksheet.html`
- `about.html`
- `contact.html`
- `privacy.html`
- `terms.html`

## App-specific checks

Test `app.html` carefully because it has the most interaction.

### Placement check

1. The Start Placement Check button is easy to see.
2. Placement questions have visible labels.
3. Answer boxes are large enough to tap on mobile.
4. Step label updates through the placement path.
5. Read Placement Aloud button is easy to find.
6. Retry feedback is calm and not embarrassing.

### Manual levels

1. Manual level buttons A-H are visible.
2. Button text is readable on mobile.
3. Levels explain the reading band clearly.
4. Buttons do not overlap or become too small.

### Lesson flow

1. Story title is visible.
2. Story text is easy to read.
3. Read Aloud button is easy to find.
4. Vocabulary pills are readable.
5. Questions are clearly separated.
6. Answer boxes have enough spacing.
7. Check Answers and Clear Answers are easy to tap.
8. Next Lesson is disabled until answers are correct.
9. Bubbles coaching is calm and helpful.
10. Fluency Coach appears after the story.

## Keyboard test

Use only the keyboard:

1. Press Tab from the top of the page.
2. Confirm the skip link appears.
3. Continue tabbing through navigation.
4. Confirm every button can be reached.
5. Confirm every answer box can be reached.
6. Confirm focus is visible.
7. Confirm Reset Progress is reachable but not too easy to hit accidentally.

## Screen reader label check

Check that important controls have understandable text:

- Home link
- Lesson App link
- Daily Practice link
- Parent / Tutor Guide link
- Start Placement Check button
- Read Placement Aloud button
- Check Placement button
- Manual level buttons
- Read Aloud button
- Check Answers button
- Clear Answers button
- Previous Lesson button
- Next Lesson button
- Reset Progress button

## Mobile check

Test around 390px wide:

1. Text does not run off screen.
2. Buttons stack cleanly.
3. Manual level buttons are readable.
4. Story text has comfortable spacing.
5. Footer links are usable.
6. Worksheet page prints cleanly.

## Print check

For `sample-reading-worksheet.html`:

1. Click Print Worksheet.
2. Confirm navigation does not print.
3. Confirm answer key does not print.
4. Confirm blank answer lines print.
5. Confirm passages do not break awkwardly if possible.

## Content safety check

Every lesson should:

- encourage rereading
- ask for proof from the story
- avoid shame language
- avoid scary or sensitive content
- avoid medical, legal, or personal data collection
- use plain language when possible

## Current known safe limits

Do not add these yet:

- accounts
- student names
- saved personal profiles
- live analytics
- live ads
- payment systems
- public comments
- open-ended chatbot behavior

## Next accessibility improvements

1. Add visible focus styles if any button/link focus is weak.
2. Add aria-live status for answer feedback if needed.
3. Improve manual level button layout if A-H feels crowded.
4. Add larger print styles if worksheet printing needs polish.
5. Test on phone and desktop after each major app change.
