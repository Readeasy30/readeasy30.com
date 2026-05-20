function getReportNumber(key) {
  return Number(localStorage.getItem(key)) || 0;
}

function getReportText(key) {
  return localStorage.getItem(key) || "Not set yet";
}

function getTotalReadAloudUses() {
  let total = 0;

  Object.keys(localStorage).forEach(key => {
    if (key.startsWith("readEasyReadCount")) {
      total += Number(localStorage.getItem(key)) || 0;
    }
  });

  return total;
}

function getReportLevelFromCompleted(completed) {
  if (completed >= 24) return "Level D";
  if (completed >= 17) return "Level C";
  if (completed >= 9) return "Level B";
  return "Level A";
}

function getNextReportGoal(completed) {
  if (completed < 1) return "Complete the first reading day.";
  if (completed < 5) return "Reach 5 completed reading days.";
  if (completed < 10) return "Reach 10 completed reading days.";
  if (completed < 20) return "Reach 20 completed reading days.";
  if (completed < 30) return "Finish the full 30-day path.";
  return "Review and move toward stronger reading passages.";
}

function getHelperNote(completed, readAloudUses) {
  if (completed === 0) {
    return "Begin with the placement check. Keep the first session calm and short.";
  }

  if (readAloudUses === 0) {
    return "Encourage the reader to use Read Aloud, then reread one sentence independently.";
  }

  if (completed < 10) {
    return "Praise effort first. Ask the reader to point to the sentence that proves each answer.";
  }

  return "The reader is building stamina. Continue asking for main idea, details, and proof from the passage.";
}

function createProgressReport() {
  if (document.getElementById("progressReportWrap")) return;

  const helperTip = document.querySelector(".helper-tip");
  if (!helperTip) return;

  const reportWrap = document.createElement("section");
  reportWrap.id = "progressReportWrap";
  reportWrap.className = "progress-report-wrap";
  reportWrap.innerHTML = `
    <h2>Progress Report</h2>
    <p class="report-intro">A simple summary for parents, helpers, tutors, or adult learners.</p>

    <div class="report-grid">
      <div class="report-stat">
        <span id="reportCompleted">0</span>
        <p>Days Completed</p>
      </div>
      <div class="report-stat">
        <span id="reportStreak">0</span>
        <p>Reading Streak</p>
      </div>
      <div class="report-stat">
        <span id="reportReadAloud">0</span>
        <p>Read Aloud Uses</p>
      </div>
    </div>

    <div class="report-details">
      <p><strong>Placement:</strong> <span id="reportPlacement">Not set yet</span></p>
      <p><strong>Current Level:</strong> <span id="reportLevel">Level A</span></p>
      <p><strong>Next Goal:</strong> <span id="reportGoal">Complete the first reading day.</span></p>
      <p><strong>Helper Note:</strong> <span id="reportHelperNote">Begin with the placement check.</span></p>
    </div>

    <div class="button-row">
      <button onclick="updateProgressReport()">Update Report</button>
      <button onclick="printProgressReport()">Print Report</button>
    </div>
  `;

  helperTip.insertAdjacentElement("afterend", reportWrap);
  injectReportStyles();
  updateProgressReport();
}

function updateProgressReport() {
  const completed = getReportNumber("readEasyProgress");
  const streak = getReportNumber("readEasyStreak");
  const placement = getReportText("readEasyPlacementLevel");
  const readAloudUses = getTotalReadAloudUses();

  const completedEl = document.getElementById("reportCompleted");
  const streakEl = document.getElementById("reportStreak");
  const readAloudEl = document.getElementById("reportReadAloud");
  const placementEl = document.getElementById("reportPlacement");
  const levelEl = document.getElementById("reportLevel");
  const goalEl = document.getElementById("reportGoal");
  const helperNoteEl = document.getElementById("reportHelperNote");

  if (completedEl) completedEl.textContent = completed;
  if (streakEl) streakEl.textContent = streak;
  if (readAloudEl) readAloudEl.textContent = readAloudUses;
  if (placementEl) placementEl.textContent = placement === "Not set yet" ? placement : `Level ${placement}`;
  if (levelEl) levelEl.textContent = getReportLevelFromCompleted(completed);
  if (goalEl) goalEl.textContent = getNextReportGoal(completed);
  if (helperNoteEl) helperNoteEl.textContent = getHelperNote(completed, readAloudUses);
}

function printProgressReport() {
  updateProgressReport();
  window.print();
}

function injectReportStyles() {
  if (document.getElementById("reportStyles")) return;

  const style = document.createElement("style");
  style.id = "reportStyles";
  style.textContent = `
    .progress-report-wrap{margin-top:1.5rem;background:#f8fafc;border-left:.35rem solid #1597ad;border-top:1px solid #e5e7eb;border-right:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;padding:1rem;border-radius:.8rem}.report-intro{margin-top:0;color:#4b5563}.report-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.7rem;margin:1rem 0}.report-stat{background:white;border:1px solid #e5e7eb;border-radius:.75rem;padding:.85rem;text-align:center}.report-stat span{display:block;font-size:1.6rem;font-weight:bold;color:#0f7f92}.report-stat p{margin:.25rem 0 0;font-weight:bold;color:#334155}.report-details{background:white;border:1px solid #e5e7eb;border-radius:.75rem;padding:1rem}.report-details p{margin:.4rem 0;line-height:1.6}@media(max-width:768px){.report-grid{grid-template-columns:1fr}}@media print{body{background:white}.assessment-box,.button-row,.home-link,.day-picker,.story-box,.questions-box,.vocab-box,.coach-box,.fluency-wrap,.danger-row{display:none!important}.lesson-card{box-shadow:none;max-width:100%;padding:0}.progress-report-wrap{border:1px solid #222;break-inside:avoid}.progress-report-wrap .button-row{display:none!important}}`;

  document.head.appendChild(style);
}

window.addEventListener("load", () => {
  createProgressReport();
  setInterval(updateProgressReport, 2000);
});
