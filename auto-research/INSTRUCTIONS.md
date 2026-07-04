# Auto Research Engineer — Instructions

## Goal
Optimize `app.html` for faster page load speed.

Measured by: **render-blocking resource count** (lower = better).
A render-blocking resource is any `<link rel="stylesheet">` in `<head>` or any `<script>` tag without `defer` or `async`.

## Rules
1. Run in ~5-minute loops, overnight, indefinitely, until the score reaches 0 or Gerry stops the loop.
2. Each loop: make ONE change to `app.html` only.
3. Score the change using `SCORING.md` only — never change the scoring definition.
4. If the new score is LOWER (better) than the baseline → keep it. It becomes the new baseline.
5. If the new score is EQUAL OR HIGHER → revert `app.html` to the previous version immediately. No exceptions.
6. Log every round in `RESULTS-LOG.md`: round number, what changed, score before → after, kept or reverted.
7. Never change `INSTRUCTIONS.md` or `SCORING.md`. Only `app.html` and `RESULTS-LOG.md` may be edited.
8. Never move the goalposts. The scoring formula in `SCORING.md` is locked forever.

## Asset
`app.html` — the ReadEasy30 reading practice app page.

## Scoring file
`auto-research/SCORING.md`

## Results log
`auto-research/RESULTS-LOG.md`
