const READ_EASY_SESSION_GOAL_SECONDS = 30 * 60;
let readEasySessionGoalReached = false;
let readEasySessionWatch = null;

function showReadEasySessionComplete() {
  if (readEasySessionGoalReached) return;
  readEasySessionGoalReached = true;

  if (typeof coachMessage !== "undefined" && coachMessage) {
    coachMessage.textContent = "🎉 30-minute reading goal reached. Great work. You may stop here or finish your current answer calmly.";
  }

  if (typeof resultMessage !== "undefined" && resultMessage) {
    resultMessage.textContent = "30-minute session complete. The lesson is still open so you can finish without pressure.";
  }

  if (typeof completeCard !== "undefined" && completeCard) {
    completeCard.classList.remove("hidden");
  }

  if (typeof completeMessage !== "undefined" && completeMessage) {
    completeMessage.textContent = "You reached the 30-minute daily practice goal. Nice steady work.";
  }

  document.body.classList.add("session-goal-reached");
}

function watchReadEasySessionGoal() {
  clearInterval(readEasySessionWatch);
  readEasySessionGoalReached = false;

  readEasySessionWatch = setInterval(() => {
    if (typeof timerSeconds === "undefined") return;
    if (timerSeconds >= READ_EASY_SESSION_GOAL_SECONDS) {
      showReadEasySessionComplete();
      clearInterval(readEasySessionWatch);
    }
  }, 1000);
}

(function attachReadEasySessionTimer() {
  const originalStartTimer = window.startTimer;

  if (typeof originalStartTimer === "function") {
    window.startTimer = function enhancedStartTimer() {
      originalStartTimer();
      watchReadEasySessionGoal();
    };
  }

  document.addEventListener("DOMContentLoaded", watchReadEasySessionGoal);
})();
