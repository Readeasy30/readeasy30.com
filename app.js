const lessons = [];

function addLesson(level, description, title, story, questions, answers, vocab) {
  lessons.push({
    level,
    levelDescription: description,
    title,
    story,
    questions,
    answers,
    vocab
  });
}

const levelA = "Short sentences and beginner reading confidence.";
const levelB = "Longer sentences and stronger comprehension practice.";
const levelC = "Short paragraphs and deeper understanding skills.";
const levelD = "Longer passages with stronger thinking and detail recall.";

const levelStart = {
  A: 0,
  B: 8,
  C: 16,
  D: 23
};

const placementSteps = [
  {
    level: "A",
    title: "Placement Reading A",
    story: "Ben has a red hat. He puts the hat on his bed.",
    questions: ["Who has a red hat?", "What color is the hat?", "Where does Ben put the hat?"],
    answers: ["ben", "red", "bed"]
  },
  {
    level: "B",
    title: "Placement Reading B",
    story: "Nina packed her lunch before school. She put an apple, a sandwich, and water in her bag.",
    questions: ["When did Nina pack lunch?", "Name one food she packed.", "Where did she put the lunch?"],
    answers: ["before school", "apple|sandwich", "bag"]
  },
  {
    level: "C",
    title: "Placement Reading C",
    story: "Carlos wanted to finish his book report. He read two chapters, wrote down the main idea, and asked his sister to listen while he explained the story.",
    questions: ["What did Carlos want to finish?", "What did he write down?", "Who listened to him explain the story?"],
    answers: ["book report", "main idea", "sister"]
  },
  {
    level: "D",
    title: "Placement Reading D",
    story: "Maya noticed that reading became easier when she slowed down and looked for clues. Instead of guessing, she reread confusing sentences and used nearby words to understand new vocabulary.",
    questions: ["What helped reading become easier for Maya?", "What did she do instead of guessing?", "What helped her understand new vocabulary?"],
    answers: ["slowed down|slow", "reread", "nearby words|clues"]
  }
];

addLesson(
  "Level A",
  levelA,
  "Day 1 Reading",
  "Tom went to the park. He saw a dog. The dog was friendly.",
  ["Where did Tom go?", "What did he see?", "Was the dog friendly?"],
  ["park", "dog", "yes"],
  ["park", "friendly", "saw"]
);

addLesson(
  "Level A",
  levelA,
  "Day 2 Reading",
  "Sara baked cookies with her grandmother in the kitchen.",
  ["Who baked cookies?", "Who helped Sara?", "Where did they bake?"],
  ["sara", "grandmother", "kitchen"],
  ["baked", "grandmother", "kitchen"]
);

addLesson(
  "Level A",
  levelA,
  "Day 3 Reading",
  "Jake helped his mother carry groceries into the house.",
  ["Who helped his mother?", "What did Jake carry?", "Where did they take the groceries?"],
  ["jake", "groceries", "house"],
  ["helped", "carry", "groceries"]
);

for (let day = 4; day <= 8; day++) {
  addLesson(
    "Level A",
    levelA,
    `Day ${day} Reading`,
    `This is a simple reading lesson for Day ${day}. Read slowly. Think about each word.`,
    ["What day is this lesson?", "How should you read?", "What should you think about?"],
    [`${day}`, "slowly", "word"],
    ["simple", "slowly", "think"]
  );
}

for (let day = 9; day <= 16; day++) {
  addLesson(
    "Level B",
    levelB,
    `Day ${day} Reading`,
    "Maria walked to the library after school to return her books. She stayed to read a story about animals from around the world.",
    ["Where did Maria go?", "Why did she go there?", "What did she read about?"],
    ["library", "return", "animals"],
    ["library", "return", "animals"]
  );
}

for (let day = 17; day <= 23; day++) {
  addLesson(
    "Level C",
    levelC,
    `Day ${day} Reading`,
    "Jordan practiced reading every evening after dinner. At first, some words felt difficult, but over time he became more confident. His teacher noticed that he was raising his hand more often during class reading time.",
    ["When did Jordan practice reading?", "How did he feel at first?", "What did his teacher notice?"],
    ["evening", "difficult", "raising his hand"],
    ["practiced", "confident", "noticed"]
  );
}

for (let day = 24; day <= 30; day++) {
  addLesson(
    "Level D",
    levelD,
    `Day ${day} Reading`,
    "Ava wanted to improve her reading, so she made a quiet routine after dinner. Each night, she read one passage, marked difficult words, and explained the main idea to her father. After two weeks, Ava noticed that she could read longer passages without stopping as often.",
    ["Why did Ava make a quiet routine?", "What did she mark?", "What changed after two weeks?"],
    ["improve", "difficult words", "longer passages"],
    ["routine", "passage", "main idea", "improve"]
  );
}

let currentLesson = 0;
let lessonPassed = false;
let timerSeconds = 0;
let timerInterval = null;
let placementIndex = 0;
let placementScores = [];

const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const questionsDiv = document.getElementById("questions");
const lessonCount = document.getElementById("lessonCount");
const completedCount = document.getElementById("completedCount");
const streakCount = document.getElementById("streakCount");
const timerCount = document.getElementById("timerCount");
const resultMessage = document.getElementById("resultMessage");
const coachMessage = document.getElementById("coachMessage");
const daySelect = document.getElementById("daySelect");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const completeCard = document.getElementById("completeCard");
const completeMessage = document.getElementById("completeMessage");
const levelTitle = document.getElementById("levelTitle");
const levelDescription = document.getElementById("levelDescription");
const storyLevel = document.getElementById("storyLevel");
const vocabList = document.getElementById("vocabList");
const assessmentBox = document.getElementById("assessmentBox");
const assessmentIntro = document.getElementById("assessmentIntro");
const assessmentTest = document.getElementById("assessmentTest");
const assessmentResult = document.getElementById("assessmentResult");
const assessmentStepLabel = document.getElementById("assessmentStepLabel");
const assessmentStoryTitle = document.getElementById("assessmentStoryTitle");
const assessmentStoryText = document.getElementById("assessmentStoryText");
const assessmentQuestions = document.getElementById("assessmentQuestions");

function getCompleted() {
  return Number(localStorage.getItem("readEasyProgress")) || 0;
}

function getStreak() {
  return Number(localStorage.getItem("readEasyStreak")) || 0;
}

function getSavedPlacementLevel() {
  return localStorage.getItem("readEasyPlacementLevel") || "";
}

function loadLesson() {
  const lesson = lessons[currentLesson];

  lessonPassed = false;
  timerSeconds = 0;

  storyTitle.textContent = lesson.title;
  storyText.textContent = lesson.story;
  storyLevel.textContent = lesson.level;
  levelTitle.textContent = lesson.level;
  levelDescription.textContent = lesson.levelDescription;
  lessonCount.textContent = `Lesson ${currentLesson + 1} of ${lessons.length}`;

  questionsDiv.innerHTML = "";
  vocabList.innerHTML = "";

  lesson.vocab.forEach(word => {
    vocabList.innerHTML += `<span class="vocab-pill">${word}</span>`;
  });

  lesson.questions.forEach((question, index) => {
    questionsDiv.innerHTML += `
      <div class="question-block">
        <label>${question}</label>
        <input type="text" id="answer${index}" placeholder="Type answer here" />
        <p id="feedback${index}" class="answer-feedback"></p>
      </div>
    `;
  });

  coachMessage.textContent = getBubblesMessage();
  resultMessage.textContent = "";

  if (completeCard) {
    completeCard.classList.add("hidden");
  }

  daySelect.value = currentLesson;

  updateCompleted();
  updateProgressBar();
  updateNextButton();
  startTimer();
}

function startPlacementTest() {
  placementIndex = 0;
  placementScores = [];
  assessmentIntro.classList.add("hidden");
  assessmentResult.classList.add("hidden");
  assessmentTest.classList.remove("hidden");
  renderPlacementStep();
  coachMessage.textContent = "Take your time. This check helps us choose a good starting level.";
}

function restartPlacementTest() {
  placementIndex = 0;
  placementScores = [];
  assessmentResult.classList.add("hidden");
  assessmentTest.classList.remove("hidden");
  renderPlacementStep();
}

function renderPlacementStep() {
  const step = placementSteps[placementIndex];

  assessmentStepLabel.textContent = `Step ${placementIndex + 1} of ${placementSteps.length}`;
  assessmentStoryTitle.textContent = step.title;
  assessmentStoryText.textContent = step.story;
  assessmentQuestions.innerHTML = "";

  step.questions.forEach((question, index) => {
    assessmentQuestions.innerHTML += `
      <div class="question-block">
        <label>${question}</label>
        <input type="text" id="placementAnswer${index}" placeholder="Type answer here" />
        <p id="placementFeedback${index}" class="answer-feedback"></p>
      </div>
    `;
  });
}

function checkPlacementAnswers() {
  const step = placementSteps[placementIndex];
  let score = 0;

  step.answers.forEach((answer, index) => {
    const input = document.getElementById(`placementAnswer${index}`);
    const feedback = document.getElementById(`placementFeedback${index}`);
    const userAnswer = normalizeAnswer(input.value);
    const correctAnswers = answer.split("|").map(item => normalizeAnswer(item));
    const isCorrect = correctAnswers.some(correct => userAnswer.includes(correct));

    input.classList.remove("correct-answer", "wrong-answer");

    if (isCorrect) {
      score++;
      input.classList.add("correct-answer");
      feedback.textContent = "Correct";
    } else {
      input.classList.add("wrong-answer");
      feedback.textContent = "Try again";
    }
  });

  placementScores[placementIndex] = score;

  if (score < 2) {
    finishPlacementTest();
    return;
  }

  if (placementIndex < placementSteps.length - 1) {
    placementIndex++;
    setTimeout(() => {
      renderPlacementStep();
      assessmentTest.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 450);
    return;
  }

  finishPlacementTest();
}

function finishPlacementTest() {
  const recommendedLevel = getRecommendedPlacementLevel();
  const startIndex = levelStart[recommendedLevel];

  localStorage.setItem("readEasyPlacementLevel", recommendedLevel);

  currentLesson = startIndex;

  if (getCompleted() < startIndex) {
    localStorage.setItem("readEasyProgress", startIndex);
  }

  assessmentTest.classList.add("hidden");
  assessmentResult.classList.remove("hidden");
  assessmentResult.innerHTML = `
    <h3>Recommended Starting Point: Level ${recommendedLevel}</h3>
    <p>${getPlacementSummary(recommendedLevel)}</p>
    <div class="button-row">
      <button onclick="acceptPlacementLevel('${recommendedLevel}')">Start Level ${recommendedLevel}</button>
      <button onclick="restartPlacementTest()">Retake Placement</button>
    </div>
  `;

  buildDaySelector();
  loadLesson();

  coachMessage.textContent = `Placement complete. Level ${recommendedLevel} is a good starting point.`;
  assessmentResult.scrollIntoView({ behavior: "smooth", block: "start" });
}

function acceptPlacementLevel(level) {
  setStartingLevel(level, true);

  if (assessmentBox) {
    assessmentBox.classList.add("placement-complete");
  }

  coachMessage.textContent = `Good choice. Start with Level ${level} and move one lesson at a time.`;
}

function getRecommendedPlacementLevel() {
  let highestPassedIndex = 0;

  placementScores.forEach((score, index) => {
    if (score >= 2) {
      highestPassedIndex = index;
    }
  });

  return placementSteps[highestPassedIndex].level;
}

function getPlacementSummary(level) {
  const summaries = {
    A: "Start with short sentences. Build comfort first, then move up slowly.",
    B: "Start with longer sentences and simple details. This should feel steady, not stressful.",
    C: "Start with short paragraphs and main-idea practice. Read slowly and explain what happened.",
    D: "Start with stronger passages. Focus on vocabulary, details, and main ideas."
  };

  return summaries[level] || summaries.A;
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ");
}

function checkAnswers() {
  const lesson = lessons[currentLesson];
  let score = 0;

  lesson.answers.forEach((answer, index) => {
    const input = document.getElementById(`answer${index}`);
    const feedback = document.getElementById(`feedback${index}`);

    const userAnswer = normalizeAnswer(input.value);
    const correctAnswer = normalizeAnswer(answer);

    input.classList.remove("correct-answer", "wrong-answer");

    if (userAnswer.includes(correctAnswer)) {
      score++;
      input.classList.add("correct-answer");
      feedback.textContent = "Correct";
    } else {
      input.classList.add("wrong-answer");
      feedback.textContent = "Try again";
    }
  });

  if (score === lesson.answers.length) {
    lessonPassed = true;

    resultMessage.textContent = "✅ Great job! All answers are correct.";
    coachMessage.textContent = "Fantastic reading today. You may go to the next lesson.";

    if (completeCard) {
      completeCard.classList.remove("hidden");
    }

    if (completeMessage) {
      completeMessage.textContent =
        `You completed Day ${currentLesson + 1} in ${formatTime(timerSeconds)}.`;
    }

    saveProgress();
  } else {
    lessonPassed = false;

    resultMessage.textContent = `You got ${score} out of ${lesson.answers.length} correct.`;
    coachMessage.textContent = "Good effort. Read the story again slowly and try once more.";

    if (completeCard) {
      completeCard.classList.add("hidden");
    }
  }

  updateNextButton();
}

function nextLesson() {
  if (!lessonPassed) {
    resultMessage.textContent = "Check your answers first.";
    coachMessage.textContent = "Read the story, answer the questions, then press Check Answers.";
    return;
  }

  if (currentLesson < lessons.length - 1) {
    currentLesson++;
    loadLesson();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function prevLesson() {
  if (currentLesson > 0) {
    currentLesson--;
    loadLesson();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function clearAnswers() {
  const inputs = document.querySelectorAll(".question-block input");
  const feedbackMessages = document.querySelectorAll(".answer-feedback");

  inputs.forEach(input => {
    input.value = "";
    input.classList.remove("correct-answer", "wrong-answer");
  });

  feedbackMessages.forEach(message => {
    message.textContent = "";
  });

  lessonPassed = false;
  resultMessage.textContent = "";
  coachMessage.textContent = "Answers cleared. Try again slowly.";

  if (completeCard) {
    completeCard.classList.add("hidden");
  }

  updateNextButton();
}

function readStory() {
  const speech = new SpeechSynthesisUtterance(lessons[currentLesson].story);

  speech.rate = 0.85;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

function readPlacementStory() {
  const step = placementSteps[placementIndex];
  const speech = new SpeechSynthesisUtterance(step.story);

  speech.rate = 0.85;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

function saveProgress() {
  const savedProgress = getCompleted();
  const newProgress = currentLesson + 1;

  if (newProgress > savedProgress) {
    localStorage.setItem("readEasyProgress", newProgress);

    const newStreak = getStreak() + 1;
    localStorage.setItem("readEasyStreak", newStreak);
  }

  updateCompleted();
  updateProgressBar();
  buildDaySelector();
}

function updateCompleted() {
  const completed = getCompleted();
  const streak = getStreak();

  completedCount.textContent = `Completed: ${completed}`;
  streakCount.textContent = `Streak: ${streak}`;
}

function updateProgressBar() {
  const completed = getCompleted();
  const percent = Math.round((completed / lessons.length) * 100);

  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;
}

function buildDaySelector() {
  const completed = getCompleted();
  const maxOpenDay = Math.min(completed + 1, lessons.length);

  daySelect.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const option = document.createElement("option");

    option.value = index;

    if (index + 1 <= maxOpenDay) {
      option.textContent = `${lesson.level} — Day ${index + 1}`;
      option.disabled = false;
    } else {
      option.textContent = `${lesson.level} — Day ${index + 1} 🔒`;
      option.disabled = true;
    }

    daySelect.appendChild(option);
  });
}

function jumpToDay() {
  const selectedLesson = Number(daySelect.value);
  const completed = getCompleted();

  if (selectedLesson > completed) {
    coachMessage.textContent = "Finish the open lessons first. One step at a time.";
    daySelect.value = currentLesson;
    return;
  }

  currentLesson = selectedLesson;
  loadLesson();
}

function updateNextButton() {
  if (!nextBtn) return;

  nextBtn.disabled = !lessonPassed;

  if (lessonPassed) {
    nextBtn.classList.remove("disabled-btn");
  } else {
    nextBtn.classList.add("disabled-btn");
  }
}

function resetProgress() {
  const confirmReset = confirm("Reset all ReadEasy30 progress and placement on this device?");

  if (!confirmReset) return;

  localStorage.removeItem("readEasyProgress");
  localStorage.removeItem("readEasyStreak");
  localStorage.removeItem("readEasyPlacementLevel");

  currentLesson = 0;
  lessonPassed = false;
  placementIndex = 0;
  placementScores = [];

  if (assessmentBox) {
    assessmentBox.classList.remove("placement-complete");
  }

  assessmentIntro.classList.remove("hidden");
  assessmentTest.classList.add("hidden");
  assessmentResult.classList.add("hidden");

  buildDaySelector();
  loadLesson();

  coachMessage.textContent = "Progress reset. Start again slowly with Day 1.";
  resultMessage.textContent = "Progress has been reset.";
}

function setStartingLevel(level, fromPlacement = false) {
  const startIndex = levelStart[level];

  if (startIndex === undefined) return;

  currentLesson = startIndex;
  localStorage.setItem("readEasyPlacementLevel", level);

  if (getCompleted() < startIndex) {
    localStorage.setItem("readEasyProgress", startIndex);
  }

  buildDaySelector();
  loadLesson();

  if (!fromPlacement) {
    assessmentIntro.classList.add("hidden");
    assessmentTest.classList.add("hidden");
    assessmentResult.classList.remove("hidden");
    assessmentResult.innerHTML = `
      <h3>Manual Starting Point: Level ${level}</h3>
      <p>${getPlacementSummary(level)}</p>
    `;
  }

  if (assessmentBox) {
    assessmentBox.classList.add("placement-complete");
  }

  coachMessage.textContent = `Starting at Level ${level}. Move slowly and build confidence.`;
}

function getBubblesMessage() {
  const completed = getCompleted();
  const savedPlacement = getSavedPlacementLevel();

  if (!savedPlacement && completed === 0) {
    return "Start with the placement check, or choose a level manually.";
  }

  if (completed < 5) {
    return "Small reading steps become big progress.";
  }

  if (completed < 15) {
    return "You are becoming a stronger reader every day.";
  }

  if (completed < 24) {
    return "Now you are reading longer ideas. Take your time.";
  }

  return "You are building real reading confidence with stronger passages.";
}

function startTimer() {
  clearInterval(timerInterval);

  timerSeconds = 0;
  timerCount.textContent = "Time: 0:00";

  timerInterval = setInterval(() => {
    timerSeconds++;
    timerCount.textContent = `Time: ${formatTime(timerSeconds)}`;
  }, 1000);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function restoreSavedPlacement() {
  const savedPlacement = getSavedPlacementLevel();

  if (!savedPlacement || !assessmentResult) return;

  assessmentIntro.classList.add("hidden");
  assessmentTest.classList.add("hidden");
  assessmentResult.classList.remove("hidden");
  assessmentResult.innerHTML = `
    <h3>Saved Starting Point: Level ${savedPlacement}</h3>
    <p>${getPlacementSummary(savedPlacement)}</p>
    <div class="button-row">
      <button onclick="restartPlacementTest()">Retake Placement</button>
    </div>
  `;

  if (assessmentBox) {
    assessmentBox.classList.add("placement-complete");
  }
}

daySelect.addEventListener("change", jumpToDay);

buildDaySelector();
restoreSavedPlacement();
loadLesson();
