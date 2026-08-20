# PROJECT CONTROL — ReadEasy30

## Project
ReadEasy30.com

## Status
ACTIVE — PRODUCTION SAFETY LOCKED

## Primary Teacher
Bubbles — reading teacher

## Mission
Keep ReadEasy30 functional for existing learners and improve it incrementally without disrupting working features.

## Architecture
Static HTML/CSS/JS.
GitHub main → Cloudflare Pages → readeasy30.com.

## Operating Rules

- Preserve working code.
- Repair before rebuilding.
- Do not delete uncertain files.
- Archive before removal.
- Use open-source/free technology.
- Protect existing learners.
- Keep ReadEasy30 separate from MathEasy30.
- Checkpoint meaningful changes.
- Verify deployment after major changes.
- Never experiment directly against production.
- Roll back before investigating a failed release.
- Never commit credentials or API keys.

## Release Path

LOCAL
→ TEST
→ GIT COMMIT
→ GITHUB MAIN
→ PRODUCTION GUARD
→ CLOUDFLARE
→ LIVE VERIFICATION

## Recovery

Known repository checkpoint:

production-known-good-2026-08-20

Commit:
a86f0d6e2599f5e817d72a61bbf2c9907135359c

## Current Known Situation

The repository contains a substantial ReadEasy30 codebase, including the learner app, lesson files, Bubbles components, worksheets, curriculum, accessibility material, and production documentation.

The live domain is currently serving an older website than the intended newer learner build.

Do not replace production until the correct intended build has been identified and tested.

## DO NOT TOUCH

- MathEasy30
- Top Shelf Websites
- Executive Avatar work
- Anna repository
- Unrelated files

## Recovery Rule

If work stops, update this file with:

- What was completed
- What was tested
- What remains broken
- Exact next task
- Last known-good checkpoint
