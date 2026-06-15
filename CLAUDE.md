# CLAUDE.md — Repository Working Rules

GitHub is the source of truth for this project.

## Required startup steps

Before making claims or edits, Claude must:

1. Read this CLAUDE.md file.
2. Read STATUS.md if it exists.
3. Inspect the real GitHub file tree.
4. Trust actual repository files over memory, chat summaries, or old notes.
5. Report any mismatch before editing.

## Permissions

Claude may read, write, create, rename, and delete files inside this GitHub repository when needed to complete Gerry’s requested task.

Claude must not delete important files unless there is a clear reason.

If deleting files, Claude must say what was deleted and why.

## Work style

- Make the best reasonable assumption and continue.
- Do not ask many small questions.
- Keep answers short and useful.
- Use full-file replacements when practical.
- Avoid tiny scattered edits.
- Do not redesign unless Gerry asks.
- Keep plain HTML, CSS, and JavaScript unless Gerry clearly asks otherwise.
- No React, Vite, Node build tools, npm build systems, or complicated routing for ReadEasy30 unless Gerry clearly approves.

## Website rules

For consumer-facing pages:

- Use simple language.
- Aim for grade 7–9 reading level.
- Mobile-first layout.
- Fast loading.
- Clear buttons.
- Good SEO basics.
- No fake claims.
- No broken links.

## Commit rules

After changes, commit with a clear message.

Preferred commit message format:

`Update repo files: short description`

## End-of-task report

At the end, report only:

1. Repo worked on
2. Files changed
3. Commit made
4. What to check next
5. Any blocker

---

# ReadEasy30 — Project Context for Claude

## Project Overview
- **Site:** ReadEasy30.com — a reading education app for students
- **Tech Stack:** Vanilla HTML, CSS, JavaScript (no build step) hosted on Cloudflare Pages
- **Deployment:** Cloudflare Pages, connected to this GitHub repo (main branch auto-deploys)
- **Domain:** readeasy30.com (Cloudflare managed)

## Project Structure
- `index.html` — homepage
- `app.html` + `app.js` — main reading app
- `app-240.html` + `app-240.js` — 240-day curriculum variant
- `worksheet.html` — printable worksheets
- `level-a-lessons.js` through `level-h-lessons.js` — lesson content by reading level
- `student-profiles.js` — student data management
- `grade-path-lessons.js` — grade-based lesson routing
- `curriculum-240.js` — 240-day curriculum logic
- `report.js` — progress reporting
- `vocab-helper.js` — vocabulary tools
- `learner-mode.js` — learner-specific UI modes
- `audio-fix.js` — audio playback compatibility fixes
- `bubbles-home.js`, `bubbles-question-buttons.js` — Bubbles AI assistant UI
- `css/` — stylesheets
- `scripts/` — utility scripts (link checker, sitemap checker)
- `_headers` — Cloudflare Pages security and cache headers
- `_redirects` — Cloudflare Pages URL redirects
- `sitemap.xml`, `robots.txt` — SEO files

## Commands
- **Check links:** `npm run check:links`
- **Check sitemap:** `npm run check:sitemap`
- **Run all checks:** `npm run check`
- No build step — deploy by pushing to main

## Git Workflow
- `main` branch auto-deploys to Cloudflare Pages
- Feature branches: `feature/branch-name`
- Follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`

## Important Rules
- No frameworks — pure HTML/CSS/JS only
- No npm packages at runtime (only dev scripts)
- Keep lesson files modular per level (level-a through level-h)
- Test audio on mobile before deploying audio changes
