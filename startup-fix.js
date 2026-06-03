/*
  ReadEasy30 startup fix
  Purpose: reopen the lesson app at the learner's next open lesson instead of always returning to Day 1.
  Keep this file small and safe. Do not use it to redesign the lesson engine.
*/
(function () {
  function getSavedProgress() {
    return Number(localStorage.getItem("readEasyProgress")) || 0;
  }

  function reopenNextOpenLesson() {
    if (typeof lessons === "undefined" || typeof currentLesson === "undefined") return;
    if (typeof buildDaySelector !== "function" || typeof loadLesson !== "function") return;

    const completed = getSavedProgress();
    if (completed <= 0) return;

    const nextOpenLesson = Math.min(completed, lessons.length - 1);

    if (currentLesson !== nextOpenLesson) {
      currentLesson = nextOpenLesson;
      buildDaySelector();
      loadLesson();

      if (typeof updateFluencyCoach === "function") updateFluencyCoach("ready");
      if (typeof coachMessage !== "undefined" && coachMessage) {
        coachMessage.textContent = "Welcome back. Continue with your next open lesson.";
      }
    }
  }

  function addScript(id, src) {
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
  }

  function loadReadRepairHelpers() {
    addScript("readRepairScript", "./read-repair.js?v=20260527-repair1");
  }

  function loadRead240PathHelpers() {
    addScript("read240DataScript", "./curriculum-240.js?v=20260603-r1");
    window.setTimeout(function () {
      addScript("read240HelperScript", "./read-240-path-helper.js?v=20260603-rpath1");
    }, 250);
  }

  function bootStartupFixes() {
    reopenNextOpenLesson();
    loadReadRepairHelpers();
    loadRead240PathHelpers();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootStartupFixes);
  } else {
    setTimeout(bootStartupFixes, 0);
  }
})();