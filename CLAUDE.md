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
