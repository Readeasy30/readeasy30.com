function getSessionCompleted() {
  return Number(localStorage.getItem("readEasyProgress")) || 0;
}

function getSessionPlacement() {
  return localStorage.getItem("readEasyPlacementLevel") || "";
}

function getSessionMode() {
  return localStorage.getItem("readEasyLearnerMode") || "child";
}

function getSessionModeLabel(mode) {
  const labels = {
    child: "Child Reader",
    adult: "Adult Reader",
    esl: "ESL Learner",
    tutor: "Parent / Tutor Mode"
  };

  return labels[mode] || labels.child;
}

function getTodayPlanSteps() {
  const completed = getSessionCompleted();
  const placement = getSessionPlacement();

  if (!placement) {
    return [
      "Choose the reader type.",
      "Start the placement check.",
      "Read slowly and answer the placement questions.",
      "Begin at the recommended level."
    ];
  }

  if (completed === 0) {
    return [
      "Read Day 1 slowly.",
      "Use Read Aloud if needed.",
      "Answer each question from the story.",
      "Check answers and finish the day."
    ];
  }

  return [
    "Review the current level.",
    "Read today’s story slowly.",
    "Tap vocabulary words you do not know.",
    "Answer with proof from the story.",
    "Update or print the progress report if needed."
  ];
}

function createSessionPlan() {
  if (document.getElementById("sessionPlanBox")) return;

  const learnerBox = document.getElementById("learnerModeBox");
  const assessmentBox = document.getElementById("assessmentBox");
  const target = learnerBox || assessmentBox;
  if (!target) return;

  const planBox = document.createElement("section");
  planBox.id = "sessionPlanBox";
  planBox.className = "session-plan-box";
  planBox.innerHTML = `
    <div class="session-plan-header">
      <div>
        <p class="session-plan-label">Today’s Plan</p>
        <h2 id="sessionPlanTitle">Start Today’s Reading</h2>
        <p id="sessionPlanSummary">Follow the steps below. No rushing.</p>
      </div>
    </div>

    <ol id="sessionPlanList" class="session-plan-list"></ol>
  `;

  target.insertAdjacentElement("afterend", planBox);
  injectSessionPlanStyles();
  updateSessionPlan();
}

function updateSessionPlan() {
  const title = document.getElementById("sessionPlanTitle");
  const summary = document.getElementById("sessionPlanSummary");
  const list = document.getElementById("sessionPlanList");
  if (!title || !summary || !list) return;

  const completed = getSessionCompleted();
  const placement = getSessionPlacement();
  const mode = getSessionMode();
  const modeLabel = getSessionModeLabel(mode);

  title.textContent = placement
    ? `Today’s Reading Plan — ${modeLabel}`
    : "Start with Placement";

  summary.textContent = placement
    ? `You have completed ${completed} reading day${completed === 1 ? "" : "s"}. Keep going one calm step at a time.`
    : "Choose a reader type, then use the placement check to start at the right level.";

  list.innerHTML = "";

  getTodayPlanSteps().forEach(step => {
    const item = document.createElement("li");
    item.textContent = step;
    list.appendChild(item);
  });
}

function injectSessionPlanStyles() {
  if (document.getElementById("sessionPlanStyles")) return;

  const style = document.createElement("style");
  style.id = "sessionPlanStyles";
  style.textContent = `
    .session-plan-box{margin-top:1.2rem;background:#fff7ed;border:1px solid #fed7aa;border-left:.35rem solid #f97316;padding:1rem;border-radius:.9rem}.session-plan-label{display:inline-block;margin:0 0 .35rem;padding:.25rem .55rem;background:#ffedd5;color:#9a3412;border-radius:999px;font-size:.75rem;font-weight:bold;text-transform:uppercase;letter-spacing:.03em}.session-plan-box h2{margin-bottom:.35rem}.session-plan-box p{color:#4b5563;line-height:1.7}.session-plan-list{margin:.75rem 0 0;padding-left:1.4rem}.session-plan-list li{margin:.45rem 0;line-height:1.6;font-weight:bold;color:#374151}`;

  document.head.appendChild(style);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    createSessionPlan();
    setInterval(updateSessionPlan, 2000);
  }, 200);
});
