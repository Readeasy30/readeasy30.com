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

function getCompleted() {
  return Number(localStorage.getItem("readEasyProgress")) || 0;
}

function getStreak() {
  return Number(localStorage.getItem("readEasyStreak")) || 0;
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

function checkAnswers() {
  const lesson = lessons[currentLesson];
  let score = 0;

  lesson.answers.forEach((answer, index) => {
    const input = document.getElementById(`answer${index}`);
    const feedback = document.getElementById(`feedback${index}`);

    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = answer.toLowerCase();

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
  const confirmReset = confirm("Reset all ReadEasy30 progress on this device?");

  if (!confirmReset) return;

  localStorage.removeItem("readEasyProgress");
  localStorage.removeItem("readEasyStreak");

  currentLesson = 0;
  lessonPassed = false;

  buildDaySelector();
  loadLesson();

  coachMessage.textContent = "Progress reset. Start again slowly with Day 1.";
  resultMessage.textContent = "Progress has been reset.";
}

function setStartingLevel(level) {
  const levelStart = {
    A: 0,
    B: 8,
    C: 16,
    D: 23
  };

  const startIndex = levelStart[level];

  if (startIndex === undefined) return;

  currentLesson = startIndex;

  if (getCompleted() < startIndex) {
    localStorage.setItem("readEasyProgress", startIndex);
  }

  buildDaySelector();
  loadLesson();

  coachMessage.textContent = `Starting at Level ${level}. Move slowly and build confidence.`;
}

function getBubblesMessage() {
  const completed = getCompleted();

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

daySelect.addEventListener("change", jumpToDay);

buildDaySelector();
loadLesson();
