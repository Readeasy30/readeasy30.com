# ReadEasy30 Auto Lesson Generator

This system defines how to automatically generate consistent reading lessons for Day 1–30.

It follows LESSON-ENGINE.md strictly.

---

# 🧠 CORE PURPOSE

Generate complete lessons that are:
- consistent
- simple
- beginner-friendly
- mobile-ready
- structured for Codex deployment

---

# 📄 INPUT FORMAT

When generating a lesson, provide:

- Day number (1–30)
- Theme (optional)
- Difficulty level (auto based on day)

Example input:
"Generate Day 3 lesson about animals"

---

# 📤 OUTPUT FORMAT (MANDATORY)

Each generated lesson must include:

## 1. Title
Day X: Simple Clear Title

---

## 2. Reading Passage
- 3–8 sentences (Days 1–10)
- 5–10 sentences (Days 11–20)
- 8–12 sentences (Days 21–30)

Rules:
- short sentences
- simple vocabulary
- one idea per sentence
- no complex grammar

---

## 3. Vocabulary Section
- 3–5 words max
- simple definitions only
- easy explanations

---

## 4. Comprehension Questions
- 2–5 questions
- directly based on passage
- no trick questions

---

## 5. Bubbles AI Section

Must include:
- encouragement message
- “Ask Bubbles for help” instruction
- simple support prompt

Example:
"If you need help, ask Bubbles to explain any sentence."

---

## 6. Encouragement Message

Always end with:

- positive tone
- motivational message
- simple language

---

# 📊 DIFFICULTY RULES

## Days 1–10
- very simple stories
- basic words
- short sentences

## Days 11–20
- slightly longer stories
- new vocabulary
- simple comprehension depth

## Days 21–30
- longer passages
- more thinking required
- still beginner friendly

---

# 🤖 AI GENERATION RULES

When generating lessons:

- Follow LESSON-ENGINE.md exactly
- Do NOT invent new structure
- Do NOT add extra sections
- Do NOT make lessons complex
- Keep tone consistent across all lessons

---

# ⚙️ CODEx INSTRUCTIONS

When Codex generates lessons:

1. Read LESSON-ENGINE.md first
2. Read AUTO-LESSON-GENERATOR.md
3. Generate ONLY requested day(s)
4. Do NOT modify other lessons
5. Keep file naming consistent:
   - day1.html
   - day2.html
   - etc.

---

# 🧩 FILE OUTPUT STRUCTURE

Each lesson must map to:

/lessons/day1.html
/lessons/day2.html
...
/lessons/day30.html

---

# 🚀 GOAL

This system allows:
- fast lesson creation
- consistent structure
- scalable expansion
- future automation

---

# ⚠️ SAFETY RULE

Never regenerate full website unless explicitly requested.
