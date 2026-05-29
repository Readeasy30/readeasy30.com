# Connector Workaround

Date: 2026-05-29

## Problem

The ChatGPT GitHub connector can sometimes block harmless plain-text website updates. This has happened during normal ReadEasy30 work such as worksheet pages, sitemap updates, and status notes.

## Repo-side workaround

This repo cannot change OpenAI connector safety behavior. Instead, use a workflow that avoids the worst friction.

## Rules for future AI/Codex work

- Prefer small commits.
- Avoid giant full-file replacements when a smaller update will work.
- Keep status/checkpoint files short.
- Use dated status files when a main status file becomes too large.
- Do not stop safe work only because one large status update is blocked.
- If a connector update is blocked, split the work into smaller commits.
- Do not ask Gerry to paste, create, or manually update files when repo write access works.

## Safe checkpoint naming

Use names like:

- `MARKETING-STATUS-YYYY-MM-DD-N.md`
- `QA-STATUS-YYYY-MM-DD-N.md`
- `DEPLOYMENT-CHECK-YYYY-MM-DD-N.md`

## Locked production guardrails

- No React, Vite, Next.js, TypeScript, or framework migration unless directly requested.
- No live ads, tracking, payments, accounts, API keys, private keys, or public AI chatbot without direct approval.
- Keep ReadEasy30 static HTML/CSS/JS.
- Keep the existing lesson app engine stable unless fixing a clear bug.
