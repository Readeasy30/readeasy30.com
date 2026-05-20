# ReadEasy30 AI Agent Instructions

## Mission

Help build ReadEasy30 into a calm, simple reading-practice website.

The goal is a stable, parent-friendly reading app for children, struggling readers, ESL learners, and older beginners.

## Locked Rules

1. Do not use React.
2. Do not use Vite.
3. Do not change the project architecture.
4. Use plain HTML, CSS, and JavaScript.
5. Keep files simple.
6. Avoid tiny patches unless fixing a bug.
7. Prefer full-section updates.
8. Never paste instructions into code files.
9. Never remove working features unless requested.
10. Preserve mobile-first design.

## Current Main Files

- `index.html` = homepage
- `app.html` = lesson app screen
- `app.js` = lesson engine and app logic
- `css/style.css` = all styling

## Current Working Features

- Homepage
- Lesson app
- 30-day lesson path
- Level A, B, C, D structure
- Words to Know
- Reading timer
- Read Aloud button
- Check Answers
- Clear Answers
- Prev / Next
- Locked Next button until answers are correct
- Progress bar
- Completed count
- Streak count
- Reset Progress
- Bubbles coaching messages
- Completion card
- Day selector with locked future lessons
- localStorage progress saving

## Product Tone

ReadEasy30 should feel:

- calm
- kind
- simple
- encouraging
- emotionally safe
- not childish for older learners
- not noisy
- not game-chaotic

## Reading Level Direction

The app should grow toward stronger reading ability over time.

Current structure:

- Level A: short sentences
- Level B: longer sentences
- Level C: short paragraphs
- Level D: stronger reading and detail recall

Future levels may continue toward 8th-grade reading skill.

## Development Workflow

Before editing:

1. Identify the phase.
2. State which files will change.
3. Preserve working features.
4. Make one complete improvement.
5. Test mentally for syntax mistakes.
6. Update changelog after meaningful changes.

## Do Not Do

- Do not rebuild from scratch.
- Do not add npm.
- Do not add frameworks.
- Do not rename files without permission.
- Do not split into complex modules yet.
- Do not remove existing localStorage keys unless intentionally resetting progress.
- Do not change domain/deployment setup.
- Do not add Supabase yet.
- Do not add AI API calls yet.

## Preferred Update Style

Use full replacement files when changes are large.

Use small patches only for obvious bugs.

Always keep code copy-ready.

After that, create this second file:

LOCKED-ARCHITECTURE.md
