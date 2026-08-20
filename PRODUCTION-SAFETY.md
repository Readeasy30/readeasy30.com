# ReadEasy30 Production Safety Lock

Last updated: 2026-08-20

## Mission

Keep ReadEasy30 operational. Production must not be repeatedly broken by development work.

## Permanent rule

PRODUCTION IS NOT THE WORKSPACE.

Changes follow:

LOCAL
→ TEST
→ COMMIT
→ GITHUB
→ CLOUDFLARE
→ LIVE VERIFICATION

## Rules

1. Preserve the last known-good production release.
2. Never delete uncertain files.
3. Never replace working lesson/app code without a documented reason.
4. Do not convert the project to React, Vite, Next.js, TypeScript, or another build system.
5. Never commit API keys, passwords, tokens, or private credentials.
6. Experimental work must not silently replace production.
7. Every meaningful release must be verified after deployment.
8. Record the release commit after successful verification.

## Recovery

If a new release fails:

ROLL BACK FIRST.
INVESTIGATE SECOND.

Do not repeatedly modify production while trying to discover the cause.

## Minimum learner smoke test

- Homepage opens.
- app.html opens.
- Level/day navigation works.
- Lesson content loads.
- Read-aloud does not block the application.
- Progress behavior works where implemented.
- Worksheets open.
- No obvious JavaScript failure.

## Current recovery checkpoint

Tag:

production-known-good-2026-08-20

Repository commit at checkpoint:

a86f0d6e2599f5e817d72a61bbf2c9907135359c

This checkpoint protects the current repository state. It does not claim that the current live site is the desired final learner build.
