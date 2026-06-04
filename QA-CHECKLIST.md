# QA Checklist

Last updated: 2026-06-04

Use this checklist before calling ReadEasy30 stable.

## Required live checks

Open each URL in a browser:

1. `https://readeasy30.com/`
2. `https://readeasy30.com/app.html`
3. `https://readeasy30.com/printable-reading-worksheets.html`
4. `https://readeasy30.com/functional-literacy-worksheet-1.html`
5. `https://readeasy30.com/functional-literacy-worksheet-2.html`
6. `https://readeasy30.com/functional-literacy-worksheet-3.html`
7. `https://readeasy30.com/sitemap.xml`
8. `https://readeasy30.com/robots.txt`

## Pass conditions

- Homepage opens without a 404 or redirect loop.
- App page opens.
- Placement check appears and works.
- Day or level navigation appears.
- Read aloud controls do not block the app.
- Bubbles guidance appears.
- Progress behavior does not break the lesson flow.
- Printable worksheet hub opens.
- Functional literacy worksheets open.
- Sitemap opens.
- Robots file opens.

## Protected app behavior

Do not casually remove or replace:

- placement check
- level/day navigation
- read aloud
- Bubbles guidance
- localStorage progress
- progress report behavior

## Browser refresh

If a page was recently fixed, test with:

- `Ctrl + F5` on Windows
- A private/incognito browser window
- Site cookies cleared only if redirect errors continue

## Record results

After testing, update `PROJECT-STATUS.md` or `CHANGELOG.md` with the date tested, pages tested, pass/fail result, and remaining issues.
