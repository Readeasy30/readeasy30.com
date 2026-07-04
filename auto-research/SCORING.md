# Scoring — LOCKED. Do not edit.

## Metric: Render-Blocking Resource Count
**Lower score = better performance.**

## How to count (apply to `app.html` source):

### +1 point for each:
- `<link rel="stylesheet" ...>` tag in `<head>` (each external CSS file blocks rendering)
- `<script src="...">` tag anywhere WITHOUT a `defer` or `async` attribute

### 0 points for:
- `<script src="..." defer>` or `<script src="..." async>` (non-blocking)
- `<script>` inline blocks (no network request)
- `<link rel="preload">` (non-blocking hint)
- `<meta>`, `<title>`, JSON-LD `<script type="application/ld+json">` tags

## Baseline (starting score)
**11** — recorded 2026-07-04
- 2 render-blocking CSS files in `<head>`
- 9 `<script src>` tags without `defer`

## Goal
Score of **0** (all resources non-blocking).

## This file is LOCKED. Never edit it.
