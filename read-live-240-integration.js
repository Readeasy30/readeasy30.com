// ReadEasy30 live 240-day integration
// Expands the proven 30-day live app to use staged Days 31-240.
// This keeps existing app controls, progress, read-aloud, Bubbles, and answer checking.
(function () {
  function safeArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function answerText(question) {
    if (!question) return "";
    return String(question.answer || question.correct || "").trim();
  }

  function normalizeLevelName(level) {
    const clean = String(level || "").replace(/^Level\s+/i, "").trim().toUpperCase();
    return clean ? "Level " + clean : "Level B";
  }

  function levelDescriptionFor(level, focus) {
    const clean = String(level || "").replace(/^Level\s+/i, "").trim().toUpperCase();
    const descriptions = {
      B: "Longer sentences, vocabulary, and early paragraph confidence.",
      C: "Paragraph stamina, context clues, main idea, and practical comprehension.",
      D: "Real-life reading with notices, schedules, forms, labels, and directions.",
      E: "Longer reading, summaries, evidence, theme, bias, and academic vocabulary.",
      F: "Stronger nonfiction, text structure, credibility, rules, and evidence responses.",
      G: "Middle-school bridge skills: claims, tone, connotation, media literacy, and synthesis.",
      H: "8th-grade readiness: source quality, argument response, technical text, and independent reading."
    };
    return descriptions[clean] || focus || "Next-level reading practice.";
  }

  function vocabWords(vocab) {
    return safeArray(vocab).map(function (item) {
      if (typeof item === "string") return item;
      if (item && item.word && item.meaning) return item.word + ": " + item.meaning;
      if (item && item.word) return item.word;
      return String(item || "");
    }).filter(Boolean);
  }

  function convertLesson(lesson) {
    const questionItems = safeArray(lesson.questions);
    return {
      level: normalizeLevelName(lesson.level),
      levelDescription: levelDescriptionFor(lesson.level, lesson.focus),
      title: "Day " + lesson.day + ": " + lesson.title,
      story: lesson.story || lesson.problem || "Practice lesson loading...",
      questions: questionItems.map(function (item) { return item.prompt || item.question || "Answer the question."; }),
      answers: questionItems.map(answerText),
      vocab: vocabWords(lesson.vocab),
      bubbles: lesson.bubbles || "Read slowly and find proof in the text."
    };
  }

  function integrate() {
    if (window.__readEasyLive240Integrated) return;
    window.__readEasyLive240Integrated = true;

    if (typeof lessons === "undefined") return;

    const staged = [
      ...safeArray(window.READEASY_LEVEL_B_LESSONS),
      ...safeArray(window.READEASY_LEVEL_C_LESSONS),
      ...safeArray(window.READEASY_LEVEL_D_LESSONS),
      ...safeArray(window.READEASY_LEVEL_E_LESSONS),
      ...safeArray(window.READEASY_LEVEL_F_LESSONS),
      ...safeArray(window.READEASY_LEVEL_G_LESSONS),
      ...safeArray(window.READEASY_LEVEL_H_LESSONS)
    ].sort(function (a, b) { return a.day - b.day; });

    if (!staged.length) return;

    const existingCount = lessons.length;
    const hasStagedAlready = lessons.some(function (lesson) {
      return lesson && /^Day\s+31:/i.test(String(lesson.title || ""));
    });

    if (!hasStagedAlready) {
      staged.forEach(function (lesson) {
        lessons.push(convertLesson(lesson));
      });
    }

    if (typeof levelStart !== "undefined") {
      levelStart.B = 30;
      levelStart.C = 60;
      levelStart.D = 90;
      levelStart.E = 120;
      levelStart.F = 150;
      levelStart.G = 180;
      levelStart.H = 210;
    }

    const status = {
      originalLiveLessons: existingCount,
      stagedAdded: staged.length,
      liveLessonsNow: lessons.length,
      firstStagedDay: staged[0] ? staged[0].day : null,
      lastStagedDay: staged[staged.length - 1] ? staged[staged.length - 1].day : null
    };

    window.READEASY_LIVE_240_STATUS = status;

    if (typeof getPlacementSummary === "function") {
      const originalPlacementSummary = getPlacementSummary;
      window.getPlacementSummary = getPlacementSummary = function (level) {
        const summaries = {
          A: "Start with short sentences. Build comfort first, then move up slowly.",
          B: "Start with Level B in the 240-day path: longer sentences and early paragraph confidence.",
          C: "Start with Level C in the 240-day path: paragraphs, main idea, and context clues.",
          D: "Start with Level D in the 240-day path: real-life reading, notices, labels, and directions.",
          E: "Start with Level E: longer reading, summaries, evidence, and stronger vocabulary.",
          F: "Start with Level F: nonfiction structure, credibility, and evidence responses.",
          G: "Start with Level G: claims, tone, media literacy, and synthesis.",
          H: "Start with Level H: 8th-grade readiness, source quality, argument, and independent reading."
        };
        return summaries[level] || originalPlacementSummary(level);
      };
    }

    if (typeof buildDaySelector === "function") buildDaySelector();
    if (typeof updateProgressBar === "function") updateProgressBar();
    if (typeof updateAchievements === "function") updateAchievements();

    const coach = document.getElementById("coachMessage");
    if (coach) {
      coach.textContent = "ReadEasy30 is now live through Day 240. Start where you are and move one lesson at a time.";
    }

    const lessonCount = document.getElementById("lessonCount");
    if (lessonCount && typeof currentLesson !== "undefined") {
      lessonCount.textContent = "Lesson " + (currentLesson + 1) + " of " + lessons.length;
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", integrate);
  else integrate();
})();
