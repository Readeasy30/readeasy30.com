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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", reopenNextOpenLesson);
  } else {
    setTimeout(reopenNextOpenLesson, 0);
  }
})();
