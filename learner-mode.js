const learnerModes = {
  child: {
    label: "Child Reader",
    coach: "You are doing reading practice one small step at a time.",
    helper: "Use calm praise. If the reader struggles, read one sentence together first.",
    goal: "Build reading confidence with short daily practice."
  },
  adult: {
    label: "Adult Reader",
    coach: "No embarrassment here. Read slowly, build skill, and move at your own pace.",
    helper: "Focus on independence, privacy, and useful everyday reading confidence.",
    goal: "Build practical reading strength for daily life."
  },
  esl: {
    label: "ESL Learner",
    coach: "Read for meaning first. New words become easier with practice.",
    helper: "Let the learner say words aloud. Explain meaning using simple examples.",
    goal: "Grow vocabulary, sentence comfort, and understanding."
  },
  tutor: {
    label: "Parent / Tutor Mode",
    coach: "Guide the reader calmly. Ask them to find proof in the story.",
    helper: "Do not rush. Let the reader try, then support one question at a time.",
    goal: "Support practice without pressure."
  }
};

function getLearnerMode() {
  return localStorage.getItem("readEasyLearnerMode") || "child";
}

function setLearnerMode(mode) {
  if (!learnerModes[mode]) return;

  localStorage.setItem("readEasyLearnerMode", mode);
  applyLearnerMode();
}

function createLearnerModeBox() {
  if (document.getElementById("learnerModeBox")) return;

  const assessmentBox = document.getElementById("assessmentBox");
  if (!assessmentBox) return;

  const modeBox = document.createElement("section");
  modeBox.id = "learnerModeBox";
  modeBox.className = "learner-mode-box";
  modeBox.innerHTML = `
    <div class="learner-mode-header">
      <div>
        <p class="learner-mode-label">Learner Setup</p>
        <h2>Choose Reader Type</h2>
        <p id="learnerModeGoal">Build reading confidence with short daily practice.</p>
      </div>
    </div>

    <div class="learner-mode-buttons">
      <button data-mode="child" onclick="setLearnerMode('child')">Child<br><span>Gentle practice</span></button>
      <button data-mode="adult" onclick="setLearnerMode('adult')">Adult<br><span>Private support</span></button>
      <button data-mode="esl" onclick="setLearnerMode('esl')">ESL<br><span>Word meaning</span></button>
      <button data-mode="tutor" onclick="setLearnerMode('tutor')">Helper<br><span>Parent/tutor</span></button>
    </div>
  `;

  assessmentBox.insertAdjacentElement("beforebegin", modeBox);
  injectLearnerModeStyles();
}

function applyLearnerMode() {
  createLearnerModeBox();

  const mode = getLearnerMode();
  const settings = learnerModes[mode] || learnerModes.child;
  const goal = document.getElementById("learnerModeGoal");
  const coach = document.getElementById("coachMessage");
  const helperTip = document.querySelector(".helper-tip p");

  document.querySelectorAll(".learner-mode-buttons button").forEach(button => {
    button.classList.toggle("active-mode", button.dataset.mode === mode);
  });

  if (goal) goal.textContent = settings.goal;

  if (coach && (!coach.textContent || coach.textContent.includes("Start with") || coach.textContent.includes("Small reading"))) {
    coach.textContent = settings.coach;
  }

  if (helperTip) {
    helperTip.textContent = settings.helper;
  }
}

function injectLearnerModeStyles() {
  if (document.getElementById("learnerModeStyles")) return;

  const style = document.createElement("style");
  style.id = "learnerModeStyles";
  style.textContent = `
    .learner-mode-box{margin-top:1.4rem;background:#f8fafc;border:1px solid #e5e7eb;border-left:.35rem solid #4f46e5;padding:1rem;border-radius:.9rem}.learner-mode-label{display:inline-block;margin:0 0 .35rem;padding:.25rem .55rem;background:#eef2ff;color:#3730a3;border-radius:999px;font-size:.75rem;font-weight:bold;text-transform:uppercase;letter-spacing:.03em}.learner-mode-box h2{margin-bottom:.35rem}.learner-mode-box p{color:#4b5563;line-height:1.7}.learner-mode-buttons{display:grid;grid-template-columns:repeat(4,1fr);gap:.6rem;margin-top:.8rem}.learner-mode-buttons button{background:white;color:#111827;border:1px solid #cbd5e1;padding:.8rem .55rem;border-radius:.7rem;font-weight:bold;cursor:pointer}.learner-mode-buttons button span{display:block;font-size:.7rem;font-weight:normal;color:#64748b;margin-top:.2rem}.learner-mode-buttons button.active-mode{background:#eef2ff;border-color:#4f46e5;color:#3730a3;box-shadow:0 3px 12px rgba(79,70,229,.12)}@media(max-width:768px){.learner-mode-buttons{grid-template-columns:1fr 1fr}}@media(max-width:420px){.learner-mode-buttons{grid-template-columns:1fr}}`;

  document.head.appendChild(style);
}

window.addEventListener("load", () => {
  createLearnerModeBox();
  applyLearnerMode();
});
