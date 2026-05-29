# CODEX-CURRENT-TASK.md

Last updated: 2026-05-29

## Repository

`Wholelychit/readeasy30.com`

## Current operating mode

Use ChatGPT 5.5 and Codex as the production workflow.

No local Git. No terminal Git. No VS Code requirement. No manual repo file creation or paste updates.

Workflow:

1. ChatGPT 5.5 manages the plan.
2. Codex performs repository work.
3. GitHub stores files and commits.
4. Cloudflare Pages publishes from GitHub when connected.

## Current project focus

ReadEasy30 is a simple HTML/CSS/JS reading-practice website.

Keep the locked architecture:

- `index.html` = marketing/homepage
- `app.html` = lesson app page
- `app.js` = lesson and progress logic
- `css/style.css` = styling
- no React
- no Vite
- no Next.js
- no framework rebuild

## Current safe queue

1. Preserve the stable non-React/non-Vite structure.
2. Review existing lesson app behavior before changing it.
3. Improve mobile-first usability only with small safe edits.
4. Add or improve day selector only after checking existing app structure.
5. Keep Bubbles as a calm reading coach, not an open-ended chatbot.
6. Improve accessibility, titles, meta description, canonical URL, footer, robots.txt, and sitemap.xml.
7. Keep progress tracking localStorage-first unless a later approved backend is added.
8. Do not delete major working code.

## Stop points

Stop before:

- framework migration
- major code deletion
- public AI/chatbot integrations
- user accounts
- upload systems
- private keys or API keys
- live ads or tracking
- payment setup
- anything that breaks the locked stable architecture

## Reporting

Report only after useful commits or a real blocker.
