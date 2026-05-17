# ReadEasy30 Workflow System (Single Source of Truth)

This file controls the full build, edit, and deployment process for ReadEasy30.

---

# 🧠 CORE RULE

Never guess steps. Always follow this workflow exactly.

---

# 🔁 STANDARD DAILY WORKFLOW

## 1. PLAN (ChatGPT)
- Define what needs to change or be built
- Break into small steps
- Identify risks
- Keep changes simple

---

## 2. BUILD (Codex)
- Make ONLY the requested changes
- Follow RULESET.md
- Do not redesign unrelated parts
- Explain changes before applying them

---

## 3. VERIFY (Local Test)
- Open index.html or affected page
- Check:
  - layout
  - buttons
  - mobile view
  - links
  - lesson content

---

## 4. SAVE (GitHub)
- Commit changes with clear message
- Example:
  - "Fixed mobile layout for lesson pages"
  - "Added Day 2 lesson structure"

---

## 5. DEPLOY (Cloudflare)
- Push triggers auto-deploy
- Wait for success status
- Confirm deployment completed

---

## 6. CHECK LIVE SITE
- Open readeasy30.com
- Test:
  - homepage
  - lesson pages
  - mobile view
  - speed
  - navigation

---

# ⚠️ SAFETY RULES

- Never deploy untested major changes
- Never delete working code without backup
- Never skip GitHub commit step
- Never assume Cloudflare deployed correctly
- Always verify live site after updates

---

# 📁 FILE PRIORITY ORDER

When making changes, always respect:

1. RULESET.md (hard rules)
2. DEFAULT-PROMPT.md (behavior rules)
3. WORKFLOW.md (process rules)
4. README.md (project structure)

---

# 🧩 SMALL CHANGE RULE

All Codex changes must:
- be small
- be focused
- affect only necessary files
- avoid full rewrites unless approved

---

# 🚀 SUCCESS GOAL

Every update should:
- improve user experience
- keep site stable
- stay mobile-friendly
- avoid breaking existing lessons
  

