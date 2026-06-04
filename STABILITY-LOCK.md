# ReadEasy30 Stability Lock

Last updated: 2026-06-04

## Purpose

This file protects ReadEasy30 from repeated production breakage.

ReadEasy30 is a plain static site. Keep it simple, stable, and deployable from GitHub `main` to Cloudflare Pages.

## Locked production paths

Core working files:

- `index.html`
- `app.html`
- `app.js`
- `css/style.css`
- `sitemap.xml`
- `robots.txt`

## App rules

Do not replace the working lesson engine without direct approval.

Do not remove these working app features:

- placement check
- level/day navigation
- read aloud
- Bubbles guidance
- localStorage progress
- progress report behavior

## Framework lock

Do not convert this repo to:

- React
- Vite
- Next.js
- TypeScript
- Tailwind
- Any build system

Cloudflare should publish the repo root as a static site.

## Do not add without approval

- API keys
- private keys
- tracking scripts
- live ads
- payment systems
- affiliate links
- user accounts
- upload systems
- public AI tools
- contact form storage

## Required manual checks after deploy

Open these in a browser after important changes:

1. `https://readeasy30.com/`
2. `https://readeasy30.com/app.html`
3. `https://readeasy30.com/printable-reading-worksheets.html`
4. `https://readeasy30.com/functional-literacy-worksheet-1.html`
5. `https://readeasy30.com/functional-literacy-worksheet-2.html`
6. `https://readeasy30.com/functional-literacy-worksheet-3.html`

Pass condition:

- Homepage opens.
- App opens.
- Placement check works.
- Day/level navigation works.
- Read aloud does not block the app.
- Worksheet pages open and print reasonably.
- No redirect loops.

## Agent rule

If a future assistant, Codex task, or automation wants to change app routing, lesson engine behavior, or app script loading, it must read this file first and preserve the locked rules above.
