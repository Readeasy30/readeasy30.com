# Auto Research Engineer — Results Log

## Baseline
- Date: 2026-07-04
- Score: **11**
- Asset: `app.html` (SHA: 029f614ae12b0e0a4098e26af6fbc480e468d448)
- Detail: 2 blocking CSS + 9 blocking scripts

---

## Rounds

| Round | Change | Score Before | Score After | Result |
|-------|--------|-------------|-------------|--------|
| — | Baseline established | — | 11 | — |
| 1 | Added `defer` to all 9 `<script>` tags | 11 | 2 | ✅ KEPT |
| 2 | Added `<link rel="preload">` hints for both CSS files | 2 | 2 | ❌ REVERTED (no improvement — CSS still blocks) |

---

## Current best score: 2 (2 blocking CSS files remain)
## Note: preload hints do not reduce the blocking count — the stylesheet links still block.
