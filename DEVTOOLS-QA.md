# ReadEasy30 DevTools QA

Use the shared Chrome DevTools workflow in:

`Wholelychit/marketing-system/chrome-devtools-agent/CHROME-DEVTOOLS-QA-WORKFLOW.md`

## Repo rule

Keep ReadEasy30 as plain HTML/CSS/JS.

Do not add React, Vite, Next.js, TypeScript, build tools, tracking scripts, live ads, payment tools, public AI chat tools, accounts, uploads, API keys, or private credentials.

## Required live checks

| Page | URL | Required checks |
|---|---|---|
| Homepage | `https://readeasy30.com/` | start buttons, nav, footer, campaign links, mobile layout |
| Lesson app | `https://readeasy30.com/app.html` | read aloud, check answers, clear answers, prev/next, reset progress, day selector |
| Campaign page | `https://readeasy30.com/free-reading-and-math-practice.html` | ReadEasy30/MathEasy30 links, CTA clarity, mobile layout |
| Reading worksheets | `https://readeasy30.com/printable-reading-worksheets.html` | printable links, readability, mobile spacing |

## Button checklist

| Button / control | Expected result | Status |
|---|---|---|
| Start Reading / Start Practice | Opens lesson app | Untested |
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

## Marketing link checks

| Link | Expected destination | Status |
|---|---|---|
| Main homepage CTA | `/app.html` | Untested |
| Campaign page link | `/free-reading-and-math-practice.html` | Untested |
| Worksheet page link | `/printable-reading-worksheets.html` | Untested |
| MathEasy30 sister link | `https://matheasy30.com/` | Untested |

## Next safe action

Run a Chrome DevTools QA pass and update this file with real findings before changing app logic.
