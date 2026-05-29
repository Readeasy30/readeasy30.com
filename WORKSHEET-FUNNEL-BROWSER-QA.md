# Worksheet Funnel Browser QA

Last updated: 2026-05-29

## Purpose

Use this checklist to manually verify the ReadEasy30 printable worksheet funnel after Cloudflare deploys.

This is a browser QA checklist. Static GitHub file reads confirmed the files exist and are linked. Public live URL checking from ChatGPT was blocked, so manual browser QA is still required.

## Primary live page to open

Open first:

`https://readeasy30.com/printable-reading-worksheets.html`

## Pages to test

### Worksheet hub

- `https://readeasy30.com/printable-reading-worksheets.html`

Check:

- [ ] Page loads without a 404.
- [ ] Page title says Printable Reading Worksheets or similar.
- [ ] Top navigation appears.
- [ ] Hero buttons appear.
- [ ] Worksheet list appears.
- [ ] Page looks readable on desktop.
- [ ] Page looks readable on phone/mobile width.

### Functional Literacy Worksheet 1

- `https://readeasy30.com/functional-literacy-worksheet-1.html`

Topic: schedules and appointment notes

Check:

- [ ] Page loads without a 404.
- [ ] Print Worksheet button appears.
- [ ] Community schedule table appears.
- [ ] Appointment reminder section appears.
- [ ] Vocabulary section appears.
- [ ] Helper answer key appears on screen.
- [ ] Print preview hides navigation and answer key.
- [ ] Print preview keeps the worksheet readable.

### Functional Literacy Worksheet 2

- `https://readeasy30.com/functional-literacy-worksheet-2.html`

Topic: signs and simple instructions

Check:

- [ ] Page loads without a 404.
- [ ] Print Worksheet button appears.
- [ ] Community room sign appears.
- [ ] Computer instruction card appears.
- [ ] Library return notice appears.
- [ ] Vocabulary section appears.
- [ ] Helper answer key appears on screen.
- [ ] Print preview hides navigation and answer key.
- [ ] Print preview keeps the worksheet readable.

### Functional Literacy Worksheet 3

- `https://readeasy30.com/functional-literacy-worksheet-3.html`

Topic: forms and labels

Check:

- [ ] Page loads without a 404.
- [ ] Print Worksheet button appears.
- [ ] Community class sign-up form appears.
- [ ] Food storage label appears.
- [ ] Vocabulary section appears.
- [ ] Helper answer key appears on screen.
- [ ] Print preview hides navigation and answer key.
- [ ] Print preview keeps the worksheet readable.

## Internal link checks

From the worksheet hub, click:

- [ ] Forms Worksheet
- [ ] Signs Worksheet
- [ ] Schedule Worksheet
- [ ] Functional Literacy
- [ ] Adult Reading
- [ ] ESL Reading
- [ ] Lesson App

From each worksheet page, click:

- [ ] Home
- [ ] Lesson App
- [ ] Functional Literacy
- [ ] Worksheet Hub
- [ ] Adult Reading
- [ ] ESL Reading

## Mobile checks

On a phone or narrow browser window:

- [ ] No horizontal scrolling.
- [ ] Buttons are easy to tap.
- [ ] Schedule table is readable.
- [ ] Form rows are readable.
- [ ] Print button is easy to tap.
- [ ] Text does not feel cramped.

## Print checks

For each worksheet page:

- [ ] Click Print Worksheet.
- [ ] Browser print dialog opens.
- [ ] Navigation is hidden in print preview.
- [ ] Helper answer key is hidden in print preview.
- [ ] Questions and blank answer lines appear.
- [ ] Layout is not cut off.

## Pass / fail record

| Page | Desktop | Mobile | Print Preview | Notes |
|---|---|---|---|---|
| Worksheet hub | Pending | Pending | Not needed |  |
| Worksheet 1 | Pending | Pending | Pending |  |
| Worksheet 2 | Pending | Pending | Pending |  |
| Worksheet 3 | Pending | Pending | Pending |  |

## If something fails

Record the exact issue here:

- Page:
- Problem:
- Browser/device:
- Screenshot if possible:
- Fix needed:

## Launch decision

Do not start broad public posting until:

- worksheet hub loads
- all three worksheet pages load
- print preview works well enough
- no obvious broken links in the worksheet funnel

Small private/manual outreach to one trusted contact is okay after the pages load.
