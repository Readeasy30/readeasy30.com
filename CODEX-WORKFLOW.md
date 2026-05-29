# Codex Workflow

Last updated: 2026-05-29

## Purpose

Codex is the main workflow for routine ReadEasy30 repository editing.

ReadEasy30 must stay simple, stable, and easy to maintain.

## Current Stack

ReadEasy30 uses:

- HTML
- CSS
- JavaScript
- GitHub Pages style static hosting

Do not convert this project to React, Vite, Next.js, TypeScript, or any build tool unless Gerry clearly requests a full rebuild later.

## Why Codex Is Primary

Codex should handle routine repo work directly because it can read the repo, make safe file edits, and commit useful changes without making Gerry manually paste, create, replace, or update files.

The ChatGPT GitHub connector may show internal write-action labels like `create_file` or `update_file`. Those labels can be confusing. Use that connector mainly for small reads, checks, reviews, or emergency single-file edits when Codex is unavailable.

The connector may also block harmless plain-text website updates. When this happens, Codex should keep work small and continue through safe tasks instead of stopping.

## Connector Workaround Rules

- Use small, focused commits.
- Avoid giant full-file replacements when a smaller update works.
- If a large status file update is blocked, create a small dated status file instead.
- If a connector write is blocked, split the work into smaller commits.
- Do not ask Gerry to manually paste file contents when repo write access works.
- Keep working through the safe queue until a real blocker appears.

## Required Read Order

Before editing, read these files when they exist:

1. `README.md`
2. `AGENTS.md`
3. `AGENT-INSTRUCTIONS.md`
4. `LOCKED-CHECKPOINT.md`
5. `FILE-MANAGEMENT.md`
6. `PROJECT-STATUS.md`
7. `CODEX-WORKFLOW.md`
8. `CONNECTOR-WORKAROUND.md`

## Safe Work Allowed

Codex may directly handle:

- Markdown documentation updates
- homepage copy improvements
- support page improvements
- footer and navigation fixes
- SEO metadata checks
- sitemap and robots.txt updates
- accessibility notes and test checklists
- simple CSS improvements
- small JavaScript repairs that preserve current behavior
- lesson text improvements that keep the same app structure
- checkpoint and project-status updates
- static link and sitemap check scripts

## Do Not Change Without Direct Approval

Do not do these without direct approval:

- framework conversion
- React, Vite, Next.js, TypeScript, or build-tool migration
- major deletion of working app code
- payment setup
- live ads
- live tracking scripts
- accounts or logins
- private keys or API tokens
- replacing the lesson engine
- rebuilding the day selector

## ReadEasy30 Product Rules

Keep Bubbles calm, helpful, and controlled.

Bubbles should encourage the reader to slow down, reread, look for proof in the story, and keep practicing without shame.

Bubbles should not become an open-ended chatbot until safety and content controls are ready.

## Current Safe Queue

1. Run or maintain static link checks.
2. Run or maintain sitemap checks.
3. Browser-check the worksheet funnel.
4. Review all 30 lessons for smoother reading-level progression.
5. Strengthen Level A-D lesson quality.
6. Add more useful SEO content pages carefully.
7. Keep ReadEasy30 aligned with the shared education growth plan in `Wholelychit/marketing-system`.
8. Plan contact form safety before adding a working form.

## Reporting Rule

Commit useful safe changes. Report after several useful commits or when a real blocker appears.

Record blockers in small dated status files when the main status file is too large or blocked.
