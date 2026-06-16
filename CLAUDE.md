# CLAUDE.md — Repository Working Rules

## Source of truth
GitHub is the source of truth for this project.

Before saying something is done, missing, broken, pending, or ready:
1. Inspect the actual repo files.
2. Compare with STATUS.md if it exists.
3. Trust repo files over memory, summaries, or old chat notes.

## Required startup steps
Before making claims or edits, Claude must:
1. Read this `CLAUDE.md` file.
2. Read `STATUS.md` if it exists.
3. Inspect the real GitHub file tree, or the exact files needed for the task.
4. Trust actual repository files over memory, chat summaries, or old notes.
5. Report any important mismatch before editing.

## Permissions
Claude may read, write, create, rename, and delete files inside this GitHub repository when needed to complete Gerry's requested task.
Claude must not delete important files unless there is a clear reason.
If deleting files, Claude must say what was deleted and why.
Before destructive changes:
- Confirm the file path.
- Explain the reason briefly.
- Prefer safer replacement over deletion when possible.

## Gerry workflow
Use:
- Short answers.
- Numbered steps.
- One task batch at a time.
- Full-file replacements when editing files.
- Patches for tiny fixes when safer.
- Best reasonable assumptions.
- Plain language.
- Copy/paste-ready instructions when Gerry must act.

Avoid:
- Repeating questions.
- Re-litigating settled decisions.
- Long explanations unless asked.
- Reading the whole repo unless necessary.
- Large token-heavy summaries.
- Redesigning unless Gerry asks.
- Tiny scattered edits when one clean change is better.

## Project overview
- Site: `ReadEasy30.com`
- Purpose: reading education app for students, families, helpers, and teachers
- Stack: plain HTML, CSS, and JavaScript
- Hosting: Cloudflare Pages connected to GitHub
- Deployment branch: `main`
- Domain: `readeasy30.com`, managed in Cloudflare

## Project structure
Core pages and scripts:
- `index.html` — homepage
- `app.html` and `app.js` — main reading app
- `app-240.html` and `app-240.js` — 240-day curriculum variant
- `worksheet.html` — printable worksheets
- `student-profiles.js` — student data management
- `grade-path-lessons.js` — grade-based lesson routing
- `curriculum-240.js` — 240-day curriculum logic
- `report.js` — progress reporting
- `vocab-helper.js` — vocabulary tools
- `learner-mode.js` — learner-specific UI modes
- `audio-fix.js` — audio playback compatibility fixes
- `bubbles-home.js` and `bubbles-question-buttons.js` — Bubbles helper UI

Lesson files:
- `level-a-lessons.js`
- `level-b-lessons.js`
- `level-c-lessons.js`
- `level-d-lessons.js`
- `level-e-lessons.js`
- `level-f-lessons.js`
- `level-g-lessons.js`
- `level-h-lessons.js`

Support files:
- `css/` — stylesheets
- `scripts/` — utility scripts
- `_headers` — Cloudflare Pages security and cache headers
- `_redirects` — Cloudflare Pages redirects
- `sitemap.xml` — SEO sitemap
- `robots.txt` — search engine rules

## Website rules
For consumer-facing pages:
- Use simple language.
- Aim for grade 7–9 reading level.
- Use mobile-first layout.
- Keep pages fast.
- Use clear buttons.
- Use good SEO basics.
- Do not make fake claims.
- Do not leave broken links.

## Technical rules
Default stack:
- Plain HTML
- Plain CSS
- Plain JavaScript
- GitHub
- Cloudflare Pages

Do not switch to React, Vite, Node build tools, npm build systems, routing frameworks, or complex stacks unless Gerry clearly asks.
No npm packages at runtime. Dev scripts are allowed only for checks already in the repo.
Keep lesson files modular by level.
Test audio carefully on mobile before changing or deploying audio behavior.

## Commands
Use these only if the repo includes the matching scripts:
- Check links: `npm run check:links`
- Check sitemap: `npm run check:sitemap`
- Run all checks: `npm run check`

There is no build step. Deploy by pushing to `main`.

## Git workflow
- `main` auto-deploys to Cloudflare Pages.
- Feature branches may use: `feature/short-name`.
- Commit messages should be clear.

Preferred commit message format:
```
Update repo files: short description
```

Conventional Commit prefixes are also acceptable when useful:
- `feat:`
- `fix:`
- `chore:`
- `docs:`

## Token saving rules
1. Read only the files needed for the task.
2. Summarize findings in 5 bullets or fewer.
3. Prefer patches or full-file replacements over long discussion.
4. Do not paste huge file contents unless Gerry needs to copy them.
5. Use `/compact` after large tasks.
6. Use `/clear` when changing to a new project.

## End-of-task report
At the end, report only:
1. Repo worked on.
2. Files changed.
3. Commit made.
4. What to check next.
5. Any blocker.
If "fix this" meant something else (a failed commit, a merge conflict, or wrong file names in the structure list), say which and I'll redo.You said: you paste ityou paste it5:54 PMClaude responded: I can't push it without auth — no PAT is loaded in this session.Identified authentication gap; needs PAT to proceed with commitIdentified authentication gap; needs PAT to proceed with commitI can't push it without auth — no PAT is loaded in this session. To commit it via the GitHub API I need you to paste your fine-grained PAT (your usual session-start step).
Once you paste it, I'll:

Confirm target repo (Readeasy30/readeasy30.com, path CLAUDE.md).
Pull the current file to get its SHA.
Commit the replacement with message docs: clean up CLAUDE.md rules.

Paste the PAT and I'll go.You said: where should I paste thiswhere should I paste this5:55 PMClaude responded: The only input in this interface is the chat box — there's no separate secure field.Weighed security risks against interface limitations and workflow optionsWeighed security risks against interface limitations and workflow optionsThe only input in this interface is the chat box — there's no separate secure field. That means anything you paste here (including a PAT) ends up in the transcript, which is exactly what burned you last time.
Two clean options:

You commit it (no token needed, your proven method): open CLAUDE.md in the repo → pencil (Edit) → Ctrl+A → Delete → paste the corrected file → Commit. Safest, nothing exposed.
I commit it: paste a PAT here, but treat it as burned — regenerate it in GitHub right after I'm done.

I'd go with option 1. Want me to give you the exact click path to the file in the repo?You said: which repo?which repo?5:56 PMClaude responded: Readeasy30/readeasy30.Identified repository location through documentation cross-referenceIdentified repository location through documentation cross-referenceReadeasy30/readeasy30.com — the file's whole "Project overview" and structure are ReadEasy30-specific (readeasy30.com domain, reading app, level-a through level-h lesson files), so it belongs in that repo's root as CLAUDE.md.
Direct link to edit it: https://github.com/Readeasy30/readeasy30.com/edit/main/CLAUDE.md
That opens the file straight in edit mode → Ctrl+A → Delete → paste → Commit.
