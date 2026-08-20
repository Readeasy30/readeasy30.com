#!/usr/bin/env bash
set -euo pipefail

fail() {
  echo "PRODUCTION GUARD: FAIL — $1"
  exit 1
}

required=(
  "index.html"
  "app.html"
  "app.js"
  "css/style.css"
  "sitemap.xml"
  "robots.txt"
)

for file in "${required[@]}"; do
  [ -f "$file" ] || fail "Missing required file: $file"
done

[ -s "index.html" ] || fail "index.html is empty"
[ -s "app.html" ] || fail "app.html is empty"
[ -s "app.js" ] || fail "app.js is empty"
[ -s "css/style.css" ] || fail "css/style.css is empty"

# Never allow a tracked credential file to contain a secret.
if [ -f "CLAUDE_API_KEY" ] && [ -s "CLAUDE_API_KEY" ]; then
  fail "CLAUDE_API_KEY is non-empty"
fi

# Catch accidental unresolved merge conflicts.
if grep -RIn --exclude-dir=.git \
  -E '^(<<<<<<<|=======|>>>>>>>)' \
  index.html app.html app.js css 2>/dev/null; then
  fail "Merge-conflict marker detected"
fi

echo "PRODUCTION GUARD: PASS"
