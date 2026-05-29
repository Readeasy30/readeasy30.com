# Worksheet Funnel Browser QA Checklist

Date: 2026-05-29

## Purpose

Use this checklist for a fast manual browser check of the ReadEasy30 worksheet funnel.

Do not fake live test results. If a live checker is blocked or search has not indexed a page yet, record that honestly and continue with direct browser checks.

## Start pages to test

1. `https://readeasy30.com/`
2. `https://readeasy30.com/printable-reading-worksheets.html`
3. `https://readeasy30.com/app.html`

## Homepage checks

- [ ] Homepage loads on desktop.
- [ ] Homepage loads on mobile width.
- [ ] Top navigation is not too crowded.
- [ ] Main call-to-action opens `app.html`.
- [ ] Worksheet call-to-action opens `printable-reading-worksheets.html`.
- [ ] Placement check link opens `app.html#assessmentBox`.
- [ ] Footer links open without 404 errors.

## Worksheet hub checks

Open `printable-reading-worksheets.html` and confirm these links work:

- [ ] Cause and effect worksheet
- [ ] Sequence worksheet
- [ ] Evidence from text worksheet
- [ ] Vocabulary in context worksheet
- [ ] Main idea worksheet
- [ ] Phonics worksheet
- [ ] Functional literacy worksheet 1: schedules and appointments
- [ ] Functional literacy worksheet 2: signs and simple instructions
- [ ] Functional literacy worksheet 3: forms and labels
- [ ] Functional worksheet
- [ ] Sample worksheet

## Individual worksheet page checks

For each worksheet page:

- [ ] Page loads without broken layout.
- [ ] Page has a clear title.
- [ ] Print button is visible.
- [ ] Print button opens browser print dialog.
- [ ] Header navigation returns to worksheet hub.
- [ ] Footer links work.
- [ ] Worksheet content is respectful and not babyish.
- [ ] Helper answer key appears on screen.
- [ ] Helper answer key is hidden in print view if print CSS is intended to hide it.

Pages:

- [ ] `cause-and-effect-reading-worksheet.html`
- [ ] `sequence-reading-worksheet.html`
- [ ] `evidence-from-text-worksheet.html`
- [ ] `vocabulary-in-context-worksheet.html`
- [ ] `main-idea-reading-worksheet.html`
- [ ] `phonics-reading-worksheet.html`
- [ ] `functional-literacy-worksheet-1.html`
- [ ] `functional-literacy-worksheet-2.html`
- [ ] `functional-literacy-worksheet-3.html`
- [ ] `worksheet.html`
- [ ] `sample-reading-worksheet.html`

## App connection checks

- [ ] Worksheet hub links to lesson app.
- [ ] Lesson app opens.
- [ ] ReadEasy30 homepage links to lesson app.
- [ ] Placement check anchor does not break the app page.

## Sitemap checks

Open `https://readeasy30.com/sitemap.xml` and confirm these are listed:

- [ ] `printable-reading-worksheets.html`
- [ ] `cause-and-effect-reading-worksheet.html`
- [ ] `sequence-reading-worksheet.html`
- [ ] `evidence-from-text-worksheet.html`
- [ ] `vocabulary-in-context-worksheet.html`
- [ ] `main-idea-reading-worksheet.html`
- [ ] `phonics-reading-worksheet.html`
- [ ] `functional-literacy-worksheet-1.html`
- [ ] `functional-literacy-worksheet-2.html`
- [ ] `functional-literacy-worksheet-3.html`

## Mobile checks

- [ ] Navigation wraps cleanly.
- [ ] Buttons are easy to tap.
- [ ] Worksheet cards do not overflow the screen.
- [ ] Text is readable without zooming.
- [ ] Print pages are still usable from mobile browser menu.

## Record results

Use this format:

```text
Browser QA date:
Device/browser:
Pages checked:
Passed:
Issues found:
Fixes needed:
Live checker/search indexing status:
```

## Known limitation

Live web checker access may be blocked for direct ReadEasy30 URLs. Search engines may also take time to index new pages. Do not treat missing search results as a broken page until direct browser access is checked.
