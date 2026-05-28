# Codex Workflow

Last updated: 2026-05-28

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

## Required Read Order

Before editing, read these files when they exist:

1. `README.md`
2. `AGENTS.md`
3. `AGENT-INSTRUCTIONS.md`
4. `LOCKED-CHECKPOINT.md`
5. `FILE-MANAGEMENT.md`
6. `PROJECT-STATUS.md`
7. `CODEX-WORKFLOW.md`

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

1. Review all 30 lessons for smoother reading-level progression.
2. Strengthen Level A-D lesson quality.
3. Add a free sample printable worksheet page.
4. Add accessibility testing notes.
5. Add more useful SEO content pages carefully.
6. Keep ReadEasy30 aligned with the shared education growth plan in `Wholelychit/marketing-system`.
7. Plan contact form safety before adding a working form.

## Reporting Rule

Commit useful safe changes. Report after several useful commits or when a real blocker appears.

Record blockers in `PROJECT-STATUS.md` instead of stopping early.
