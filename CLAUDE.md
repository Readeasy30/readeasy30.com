# CLAUDE.md — Repository Working Rules

GitHub is the source of truth for this project.

## Required startup steps

Before making claims or edits, Claude must:

1. Read this `CLAUDE.md` file.
2. Read `STATUS.md` if it exists.
3. Inspect the real GitHub file tree or the exact files needed for the task.
4. Trust actual repository files over memory, chat summaries, or old notes.
5. Report any important mismatch before editing.

## Permissions

Claude may read, write, create, rename, and delete files inside this GitHub repository when needed to complete Gerry’s requested task.

Claude must not delete important files unless there is a clear reason.

If deleting files, Claude must say what was deleted and why.

## Gerry workflow

Use:

- Short answers.
- Numbered steps.
- One task batch at a time.
- Best reasonable assumptions.
- Plain language.
- Copy/paste-ready instructions when Gerry must act.
- Full-file replacements when practical.
- Patches for tiny fixes when safer.

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

```text
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
3. Prefer direct edits over long discussion.
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

When done, report which repos got the file and confirm each commit.
