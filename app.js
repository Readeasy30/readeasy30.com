const lessons = [
  {
    day: 1,
    title: "Day 1 Reading",
    story: "Tom went to the park. He saw a friendly dog near a tree.",
    questions: [
      "Where did Tom go?",
      "What did Tom see?",
      "Where was the dog?"
    ],
    answers: ["park", "dog", "tree"],
    bubbles: "Look for who and where in the story."
  },

  {
    day: 2,
    title: "Day 2 Reading",
    story: "Maria read a book at school before lunch.",
    questions: [
      "Who read a book?",
      "Where did Maria read?",
      "When did she read?"
    ],
    answers: ["maria", "school", "before lunch"],
    bubbles: "Read carefully for time words."
  },

  {
    day: 3,
    title: "Day 3 Reading",
    story: "Jake helped his mother carry groceries into the house.",
    questions: [
      "Who helped his mother?",
      "What did Jake carry?",
      "Where did they take the groceries?"
    ],
    answers: ["jake", "groceries", "house"],
    bubbles: "Look for the who, what, and where."
  },

  {
    day: 4,
    title: "Day 4 Reading",
    story: "The class planted flowers beside the school building.",
    questions: [
      "What did the class plant?",
      "Where were the flowers planted?",
      "Who planted the flowers?"
    ],
    answers: ["flowers", "beside the school building", "class"],
    bubbles: "Small details help you answer correctly."
  },

  {
    day: 5,
    title: "Day 5 Reading",
    story: "Lena baked cookies with her grandfather on Saturday.",
    questions: [
      "Who baked cookies?",
      "Who helped Lena?",
      "When did they bake?"
    ],
    answers: ["lena", "grandfather", "saturday"],
    bubbles: "Slow reading builds strong understanding."
  }
];

/* Fill remaining lessons up to 30 */

for (let i = 6; i <= 30; i++) {
  lessons.push({
    day: i,
    title: `Day ${i} Reading`,
    story: `This is the reading story for Day ${i}. The student should read slowly and answer carefully.`,
    questions: [
      "What day is this lesson?",
      "What should the student do?",
      "How should the student read?"
    ],
    answers: [
      `${i}`,
      "answer carefully",
      "slowly"
    ],
    bubbles: "Take your time and think before answering."
  });
}

let currentLesson = 0;

const lessonLabel = document.getElementById("lessonLabel");
const completedLabel = document.getElementById("completedLabel");
const progressBar = document.getElementById("progressBar");

const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");

const question1Label = document.getElementById("question1Label");
const question2Label = document.getElementById("question2Label");
const question3Label = document.getElementById("question3Label");

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");

const feedback = document.getElementById("feedback");

const bubblesMessage = document.getElementById("bubblesMessage");

const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const resetBtn = document.getElementById("resetBtn");

const readAloudBtn = document.getElementById("readAloudBtn");

const daySelect = document.getElementById("daySelect");

function saveProgress() {
  localStorage.setItem("readEasyLesson", currentLesson);
}

function loadSavedProgress() {
  const saved = localStorage.getItem("readEasyLesson");

  if (saved !== null) {
    currentLesson = Number(saved);
  }
}

function updateProgressBar() {
  const progress = ((currentLesson + 1) / lessons.length) * 100;

  progressBar.style.width = `${progress}%`;
}

function buildDaySelector() {
  daySelect.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = `Day ${lesson.day}`;

    daySelect.appendChild(option);
  });
}

function loadLesson() {
  const lesson = lessons[currentLesson];

  lessonLabel.textContent = `Lesson ${lesson.day} of 30`;

  completedLabel.textContent = `Completed: ${currentLesson}`;

  storyTitle.textContent = lesson.title;

  storyText.textContent = lesson.story;

  question1Label.textContent = lesson.questions[0];

  question2Label.textContent = lesson.questions[1];

  question3Label.textContent = lesson.questions[2];

  bubblesMessage.textContent = lesson.bubbles;

  answer1.value = "";
  answer2.value = "";
  answer3.value = "";

  feedback.textContent = "";

  daySelect.value = currentLesson;

  updateProgressBar();

  saveProgress();

  prevBtn.disabled = currentLesson === 0;

  if (currentLesson >= lessons.length - 1) {
    nextBtn.textContent = "Finish";
  } else {
    nextBtn.textContent = "Next ➡";
  }
}

function normalize(text) {
  return text.trim().toLowerCase();
}

function checkAnswers() {
  const lesson = lessons[currentLesson];

  const userAnswers = [
    normalize(answer1.value),
    normalize(answer2.value),
    normalize(answer3.value)
  ];

  let score = 0;

  lesson.answers.forEach((answer, index) => {
    if (userAnswers[index].includes(answer)) {
      score++;
    }
  });

  if (score === 3) {
    feedback.textContent = "✅ Great job! All answers look correct.";
  } else if (score === 2) {
    feedback.textContent = "🟡 Nice work. Try checking one answer again.";
  } else {
    feedback.textContent = "🔵 Keep trying. Read the story one more time slowly.";
  }
}

function nextLesson() {
  if (currentLesson < lessons.length - 1) {
    currentLesson++;

    loadLesson();
  } else {
    showCompletionScreen();
  }
}

function prevLesson() {
  if (currentLesson > 0) {
    currentLesson--;

    loadLesson();
  }
}

function clearAnswers() {
  answer1.value = "";
  answer2.value = "";
  answer3.value = "";

  feedback.textContent = "";
}

function resetProgress() {
  const confirmed = confirm(
    "Are you sure you want to reset all reading progress?"
  );

  if (!confirmed) return;

  currentLesson = 0;

  localStorage.removeItem("readEasyLesson");

  loadLesson();
}

function jumpToDay() {
  currentLesson = Number(daySelect.value);

  loadLesson();
}

function readStory() {
  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(
    storyText.textContent
  );

  speech.rate = 0.9;

  speech.pitch = 1;

  speechSynthesis.speak(speech);
}

function showCompletionScreen() {
  document.querySelector(".lesson-card").innerHTML = `
    <div class="completion-screen">

      <h2>🎉 Great Work!</h2>

      <p>
        You completed all 30 reading lessons.
      </p>

      <p>
        Keep practicing reading every day.
      </p>

      <button id="restartCourseBtn">
        Start Again
      </button>

    </div>
  `;

  const restartCourseBtn =
    document.getElementById("restartCourseBtn");

  restartCourseBtn.addEventListener("click", () => {
    currentLesson = 0;

    localStorage.removeItem("readEasyLesson");

    location.reload();
  });
}

checkBtn.addEventListener("click", checkAnswers);

nextBtn.addEventListener("click", nextLesson);

prevBtn.addEventListener("click", prevLesson);

clearBtn.addEventListener("click", clearAnswers);

resetBtn.addEventListener("click", resetProgress);

readAloudBtn.addEventListener("click", readStory);

daySelect.addEventListener("change", jumpToDay);

loadSavedProgress();

buildDaySelector();

loadLesson();
