# Connector Workaround Status

Date: 2026-05-29

## What changed

The repo now includes a small connector workaround workflow because harmless plain-text GitHub connector updates were sometimes blocked.

## Files added or updated

- `CONNECTOR-WORKAROUND.md`
- `CODEX-WORKFLOW.md`
- `scripts/check-static-links.mjs`
- `scripts/check-sitemap.mjs`
- `package.json`

## New checks

Run:

```bash
npm run check
```

This runs:

- local static HTML link check
- sitemap file existence check

## Workflow rule

Future AI/Codex work should use small commits, avoid giant status-file replacements, and create small dated checkpoint files when the main status file is too large or blocked.

## Safety

No app engine changes, framework changes, tracking, payments, ads, accounts, API keys, or public AI features were added.
