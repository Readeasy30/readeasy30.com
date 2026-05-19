import { testData } from "./data/lessons.js";

const app = document.getElementById("app");

let state = {
  step: "start",
  score: 0,
  level: 0
};

function renderStart() {
  app.innerHTML = `
    <div class="screen center">
      <h1>📘 ReadEasy30</h1>
      <p>Find your reading level in 2 minutes</p>

      <button onclick="startTest()">
        Start Placement Test
      </button>
    </div>
  `;
}

function startTest() {
  state.step = "test";
  state.score = 0;
  state.level = 0;
  renderTest();
}



function renderTest() {
  const item = testData[state.level];

  app.innerHTML = `
    <div class="screen">
      <h2>Reading Check</h2>

      <p class="lesson-text">${item.text}</p>

      <p>${item.q}</p>

      <input id="answer" placeholder="Type answer..." />

      <br><br>

      <button onclick="nextQuestion()">Next</button>
    </div>
  `;
}

function nextQuestion() {
  const answer = document.getElementById("answer").value;

  if (answer.length > 2) {
    state.score++;
  }

  state.level++;

  if (state.level >= testData.length) {
    showResult();
  } else {
    renderTest();
  }
}

function showResult() {
  let levelText = "Level 1";

  if (state.score === 1) levelText = "Level 2";
  if (state.score >= 2) levelText = "Level 3";

  app.innerHTML = `
    <div class="screen center">
      <h1>✅ Placement Complete</h1>
      <h2>${levelText}</h2>

      <button onclick="location.reload()">
        Restart
      </button>
    </div>
  `;
}

window.startTest = startTest;
window.nextQuestion = nextQuestion;

renderStart();

