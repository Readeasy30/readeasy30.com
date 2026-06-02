# Locked Checkpoint: Adult Reading Link Cleanup

Date locked: 2026-06-02

## Purpose

This checkpoint freezes the ReadEasy30 cleanup work around the adult reading page transition.

The better public page is:

`adult-reading-practice-without-shame.html`

The old page is:

`adult-reading-practice.html`

The old page should remain as a redirect/bridge only. New visitor-facing links should point to the no-shame page.

## Locked decision

Use `adult-reading-practice-without-shame.html` as the preferred public Adult Reading destination.

Do not point new navigation, footer links, marketing copy, or resource links to `adult-reading-practice.html` unless the purpose is a redirect bridge or historical reference.

## Completed in this work session

### Redirect/authority cleanup

- Confirmed the old adult reading page points users/search engines toward the no-shame page.
- Confirmed sitemap does not need to promote the old page.

### Visible page cleanup completed or verified

The following visitor-facing pages have been updated or verified to use the no-shame adult reading page:

- `printable-reading-worksheets.html`
- `about.html`
- `contact.html`
- `terms.html`
- `privacy.html`
- `daily-reading-practice.html`
- `parent-tutor-guide.html`
- `esl-reading-practice.html`
- `calm-reading-practice-30-minutes-a-day.html`
- `reading-comprehension-practice.html`

## Verified current examples

- `reading-comprehension-practice.html` footer points Adult Reading to `adult-reading-practice-without-shame.html`.
- `calm-reading-practice-30-minutes-a-day.html` top navigation points Adult Reading to `adult-reading-practice-without-shame.html`.
- `esl-reading-practice.html` footer points Adult Reading to `adult-reading-practice-without-shame.html`.
- `terms.html` footer points Adult Reading to `adult-reading-practice-without-shame.html`.

## Remaining safe cleanup queue

Run one final exact search for:

`href="adult-reading-practice.html"`

Then inspect only the remaining public HTML pages. Likely remaining candidates may include:

- `phonics-practice-for-beginners.html`
- `esl-reading-practice-everyday-english.html`
- `adult-reading-practice-without-shame.html` itself

If the match is inside the no-shame page itself and only references the old page as historical/redirect context, leave it alone unless it is a visible navigation/footer link.

## Do not do yet

Do not redesign the site.
Do not change the architecture.
Do not add React, Vite, Next.js, TypeScript, or build tools.
Do not add accounts, payments, live ads, live tracking, email signup, uploads, or public AI.
Do not delete the old page unless a redirect strategy is reviewed first.

## Resume instruction

Next task should continue with:

1. Search exact old link: `href="adult-reading-practice.html"`.
2. Fetch each remaining current file before editing, because GitHub search can lag.
3. Update only visible visitor-facing links to `adult-reading-practice-without-shame.html`.
4. Skip planning docs unless they directly affect public navigation.
