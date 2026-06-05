# ReadEasy30 DevTools QA

Last updated: 2026-06-05

Use the shared Chrome DevTools workflow in:

`Wholelychit/marketing-system/chrome-devtools-agent/CHROME-DEVTOOLS-QA-WORKFLOW.md`

## Repo rule

Keep ReadEasy30 as plain HTML/CSS/JS.

Do not add React, Vite, Next.js, TypeScript, build tools, tracking scripts, live ads, payment tools, public AI chat tools, accounts, uploads, API keys, or private credentials.

## Current homepage refresh

The homepage file was replaced as a complete file on 2026-06-05.

Expected homepage message:

```text
100% Free Reading Practice • 30 Minutes a Day
```

Expected main headline:

```text
Free Reading Practice That Feels Calm, Simple, and Doable
```

Expected primary button:

```text
Start Free Reading Practice
```

Commit recorded in marketing system:

```text
59d3fbf82cf464811bb14190c36b74954513e076
```

## Required live checks

| Page | URL | Required checks | Status |
|---|---|---|---|
| Homepage | `https://readeasy30.com/` | new hero text, start buttons, nav, footer, campaign links, mobile layout | Needs browser check |
| Lesson app | `https://readeasy30.com/app.html` | read aloud, check answers, clear answers, prev/next, reset progress, day selector | Untested |
| Campaign page | `https://readeasy30.com/free-reading-and-math-practice.html` | ReadEasy30/MathEasy30 links, CTA clarity, mobile layout | Untested |
| Reading worksheets | `https://readeasy30.com/printable-reading-worksheets.html` | printable links, readability, mobile spacing | Untested |

## Chrome homepage verification steps

1. Open `https://readeasy30.com/` in Chrome.
2. Press `Ctrl + F5` to hard refresh.
3. Confirm the hero eyebrow says `100% Free Reading Practice • 30 Minutes a Day`.
4. Confirm the headline says `Free Reading Practice That Feels Calm, Simple, and Doable`.
5. Confirm the primary button says `Start Free Reading Practice`.
6. Click `Start Free Reading Practice` and confirm it opens `/app.html`.
7. Go back home.
8. Click `Take Placement Check` and confirm it opens `/app.html#assessmentBox`.
9. Click `Reading + Math Plan` and confirm it opens `/free-reading-and-math-practice.html`.
10. Click `Print Worksheets` and confirm it opens `/printable-reading-worksheets.html`.
11. Resize browser to phone width or use DevTools mobile view.
12. Confirm buttons wrap cleanly and text is readable.

## App button checklist

| Button / control | Expected result | Status |
|---|---|---|
| Start Free Reading Practice | Opens lesson app | Needs browser check |
| Take Placement Check | Opens placement section | Needs browser check |
| Reading + Math Plan | Opens campaign page | Needs browser check |
| Print Worksheets | Opens worksheet hub | Needs browser check |
| Read Aloud | Uses browser speech to read story | Untested |
| Check Answers | Shows learner feedback without shame | Untested |
| Clear Answers | Clears answer inputs | Untested |
| Previous Lesson | Goes back one lesson safely | Untested |
| Next Lesson | Goes forward one lesson safely | Untested |
| Reset Progress | Resets local progress only after clear action | Untested |
| Day selector | Jumps to selected day and stays synced | Untested |
| Back to Home | Returns to homepage | Untested |

## DevTools findings table

| Date | Page | Issue | Severity | Fix file | Status |
|---|---|---|---|---|---|
| 2026-06-04 | Shared workflow added | Chrome DevTools QA file added | Low | `DEVTOOLS-QA.md` | Ready |
| 2026-06-05 | Homepage | Complete-file homepage refresh committed | Low | `index.html` | Browser check needed |
| 2026-06-05 | Homepage live fetch | ChatGPT environment could not confirm live deployment | Medium | Browser/Cloudflare check | Manual check needed |

## Marketing link checks

| Link | Expected destination | Status |
|---|---|---|
| Main homepage CTA | `/app.html` | Needs browser check |
| Placement check CTA | `/app.html#assessmentBox` | Needs browser check |
| Campaign page link | `/free-reading-and-math-practice.html` | Needs browser check |
| Worksheet page link | `/printable-reading-worksheets.html` | Needs browser check |
| MathEasy30 sister link | `https://matheasy30.com/` | Needs browser check |

## Pass / fail rule

Homepage passes only when:

- the new hero text appears on the live site,
- the main buttons open the correct pages,
- the homepage is readable on mobile width,
- no console error blocks normal page use.

## Next safe action

Run a Chrome DevTools QA pass and update this file with real findings before changing app logic.
