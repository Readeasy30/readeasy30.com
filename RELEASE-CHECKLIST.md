# Release Checklist

Last updated: 2026-06-04

Use this before pushing or accepting a production change for ReadEasy30.

## Before changing files

- Read `STABILITY-DIRECTIVE.md`.
- Read `STABILITY-LOCK.md`.
- Read `PROJECT-STATUS.md`.
- Confirm the task fixes a real problem or advances the current safe queue.
- Confirm the work does not recreate a previously removed broken file.

## Protected files and rules

- Keep `index.html` as the homepage.
- Keep `app.html` as the working lesson app page.
- Keep `app.js` as the main lesson engine.
- Keep `css/style.css` as the main stylesheet.
- Keep `sitemap.xml` and `robots.txt` present.
- Do not replace the lesson engine without direct approval.
- Do not remove placement, level/day navigation, read aloud, Bubbles guidance, progress behavior, or progress report behavior without direct approval and browser testing.

## Before commit

- Confirm `index.html` exists.
- Confirm `app.html` exists.
- Confirm `app.js` exists.
- Confirm `css/style.css` exists.
- Confirm `sitemap.xml` exists.
- Confirm `robots.txt` exists.
- Confirm changed links point to real files.
- Confirm no framework migration was added.
- Confirm no live ads, tracking, payments, accounts, uploads, affiliate links, or public AI were added without approval.

## After Cloudflare deploy

Test:

1. `https://readeasy30.com/`
2. `https://readeasy30.com/app.html`
3. `https://readeasy30.com/printable-reading-worksheets.html`
4. `https://readeasy30.com/functional-literacy-worksheet-1.html`
5. `https://readeasy30.com/functional-literacy-worksheet-2.html`
6. `https://readeasy30.com/functional-literacy-worksheet-3.html`

## Release pass condition

The release is acceptable only when:

- Homepage opens.
- App opens.
- Placement and lesson flow still work.
- Read aloud does not block the app.
- Core worksheet pages open.
- The fix is recorded in `CHANGELOG.md` or `PROJECT-STATUS.md`.

## If something breaks

Stop new feature work.

Restore the last working production path first, then document the cause and the permanent fix.
