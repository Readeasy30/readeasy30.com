# ReadEasy30 AI Agent Instructions

## Mission
Build ReadEasy30 into a trustworthy, mobile-first reading-practice website that helps children, adults, ESL learners, older learners, parents, tutors, and struggling readers build confidence one calm lesson at a time.

## Core Product Goal
Create a helpful reading site that can grow into a revenue-producing education project through:
- SEO traffic
- display advertising when appropriate
- printable worksheets
- parent and tutor resources
- future email list growth
- future partner resources that are reviewed first
- future premium learning tools only after the free core works well

The site must stay learner-safe, calm, and honest. Do not promise instant reading success.

## Technical Rules
Use only:
- HTML
- CSS
- JavaScript
- GitHub Pages
- Cloudflare
- localStorage for simple progress tracking until a database is truly needed

Do not use:
- React
- Vite
- TypeScript
- Next.js
- build tools
- unnecessary frameworks

Keep the site fast, simple, mobile-first, and easy for the owner to manage.

## Locked Architecture
Preserve this structure:
- `index.html` = marketing homepage
- `app.html` = lesson app page
- `app.js` = lesson engine and reading logic
- `css/style.css` = main styling
- Small support JavaScript files may be used only when they add safe features without disturbing the main lesson engine

Do not redesign or replace the lesson engine without a specific owner request.

## Content Rules
Every lesson and page should be:
- clear
- beginner-friendly
- emotionally safe
- readable at the correct learner level
- useful for real life
- written in plain language
- supportive without babying adults

Use short paragraphs and direct wording.

Avoid:
- shame language
- confusing instructions
- fake urgency
- overpromising
- complicated education jargon
- long walls of text

## Reading-Level Direction
ReadEasy30 should grow step by step toward stronger reading ability.

Current path:
- Level A: short sentences and familiar words
- Level B: longer sentences and daily-life vocabulary
- Level C: short paragraphs, sequence, main idea, and proof
- Level D: stronger practical passages and real-life reading

Future path:
- Level E and beyond should move carefully toward 5th-8th grade reading skills without overwhelming the learner.

## Bubbles Coach Rules
Bubbles should act like a calm reading coach.

Bubbles should:
- encourage slow reading
- remind learners to reread
- tell learners to find proof in the story
- celebrate effort calmly
- avoid acting like an open-ended chatbot until safety and content controls are ready

## SEO Rules
Every public page should include:
- unique title
- meta description
- one clear H1
- readable headings
- internal links
- footer navigation
- plain language

Build future topical clusters around:
- daily reading practice
- adult reading help
- ESL reading practice
- reading comprehension practice
- printable reading worksheets
- parent reading help
- tutor reading resources
- practical reading skills

## Design Rules
Use a clean learning style:
- soft colors
- strong contrast
- large readable text
- large buttons
- simple cards
- generous spacing
- mobile-first layout

Avoid clutter, harsh colors, tiny text, and distracting animation.

## Monetization Rules
Prepare the site for monetization later, but do not hurt trust.

Allowed future monetization:
- display ad containers
- worksheet downloads
- premium printable packs
- reviewed partner links
- sponsor placements clearly labeled
- email capture sections

Do not add live affiliate links until partner programs are selected and reviewed.

## Safe Work Pattern
When making changes:
1. Check existing files first.
2. Preserve working structure.
3. Do not rebuild features that already exist.
4. Make one safe upgrade at a time.
5. Use full-section updates when tiny patches would be fragile.
6. Keep navigation consistent.
7. Keep footer consistent.
8. Add public pages to sitemap when created.
9. Avoid breaking mobile layout.
10. Commit after the upgrade works.
11. Update `LOCKED-CHECKPOINT.md` when a new stable stage is reached.

## Next Recommended Tasks
1. Connect `startup-fix.js` in `app.html` if not already connected.
2. Strengthen lesson quality and progression before adding flashy features.
3. Add Level E planning notes for future 5th-8th grade growth.
4. Add printable worksheet planning.
5. Add schema markup to the homepage.
6. Improve footer links and sitemap.
7. Add simple parent/tutor guidance pages.
8. Add SEO content pages carefully.
9. Add accessibility checks.
10. Keep Bubbles calm and controlled.

## Owner Preferences
The owner wants direct repo updates when possible, not manual copy/paste unless necessary.
The owner prefers concise instructions, fewer explanations, and steady progress.
Avoid asking for approval when the next safe step is obvious.
