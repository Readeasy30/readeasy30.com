const lessons = [
  {
    title: "Day 1 Reading",
    story: "Tom went to the park. He saw a dog. The dog was friendly.",
    questions: [
      "Where did Tom go?",
      "What did he see?",
      "Was the dog friendly?"
    ],
    answers: ["park", "dog", "yes"]
  },

  {
    title: "Day 2 Reading",
    story: "Sara baked cookies with her grandmother in the kitchen.",
    questions: [
      "Who baked cookies?",
      "Who helped Sara?",
      "Where did they bake?"
    ],
    answers: ["sara", "grandmother", "kitchen"]
  },

  {
    title: "Day 3 Reading",
    story: "Jake helped his mother carry groceries into the house.",
    questions: [
      "Who helped his mother?",
      "What did Jake carry?",
      "Where did they take the groceries?"
    ],
    answers: ["jake", "groceries", "house"]
  },

  {
    title: "Day 4 Reading",
    story: "Emily read a book under a large tree after school.",
    questions: [
      "Who read the book?",
      "Where did Emily sit?",
      "When did she read?"
    ],
    answers: ["emily", "tree", "after school"]
  },

  {
    title: "Day 5 Reading",
    story: "Noah fed the fish before eating breakfast.",
    questions: [
      "Who fed the fish?",
      "What animal was fed?",
      "When did Noah feed them?"
    ],
    answers: ["noah", "fish", "before breakfast"]
  }
];

while (lessons.length < 30) {
  const day = lessons.length + 1;

  lessons.push({
    title: `Day ${day} Reading`,
    story: `This is the reading story for Day ${day}. Read slowly. Think about the words. Then answer the questions.`,
    questions: [
      "What day is this lesson?",
      "How should you read?",
      "What should you do after reading?"
    ],
    answers: [
      `${day}`,
      "slowly",
      "answer questions"
    ]
  });
}

let currentLesson = 0;
let lessonPassed = false;

const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const questionsDiv = document.getElementById("questions");

const lessonCount = document.getElementById("lessonCount");
const completedCount = document.getElementById("completedCount");
const streakCount = document.getElementById("streakCount");

const resultMessage = document.getElementById("resultMessage");
const coachMessage = document.getElementById("coachMessage");

const daySelect = document.getElementById("daySelect");
const nextBtn = document.getElementById("nextBtn");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const completeCard = document.getElementById("completeCard");
const completeMessage = document.getElementById("completeMessage");

function getCompleted() {
  return Number(localStorage.getItem("readEasyProgress")) || 0;
}

function getStreak() {
  return Number(localStorage.getItem("readEasyStreak")) || 0;
}

function loadLesson() {
  const lesson = lessons[currentLesson];

  lessonPassed = false;

  storyTitle.textContent = lesson.title;
  storyText.textContent = lesson.story;

  lessonCount.textContent = `Lesson ${currentLesson + 1} of 30`;

  questionsDiv.innerHTML = "";

  lesson.questions.forEach((question, index) => {
    questionsDiv.innerHTML += `
      <div class="question-block">
        <label>${question}</label>

        <input
          type="text"
          id="answer${index}"
          placeholder="Type answer here"
        />

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
        `You completed Day ${currentLesson + 1}. Slow reading wins.`;
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
  const speech = new SpeechSynthesisUtterance(
    lessons[currentLesson].story
  );

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

  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }

  if (progressText) {
    progressText.textContent = `${percent}%`;
  }
}

function buildDaySelector() {
  const completed = getCompleted();
  const maxOpenDay = Math.min(completed + 1, lessons.length);

  daySelect.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const option = document.createElement("option");

    option.value = index;

    if (index + 1 <= maxOpenDay) {
      option.textContent = `Day ${index + 1}`;
      option.disabled = false;
    } else {
      option.textContent = `Day ${index + 1} 🔒`;
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
  const confirmReset = confirm(
    "Reset all ReadEasy30 progress on this device?"
  );

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

function getBubblesMessage() {
  const completed = getCompleted();

  if (completed === 0) {
    return "Start slow. Look back at the story when you need help.";
  }

  if (completed < 5) {
    return "You are building a reading habit. Small steps count.";
  }

  if (completed < 15) {
    return "You are getting stronger. Read carefully and trust the words.";
  }

  if (completed < 30) {
    return "You have built real momentum. Keep going one lesson at a time.";
  }

  return "You completed the full 30-day path. That is real progress.";
}

daySelect.addEventListener("change", jumpToDay);

buildDaySelector();
loadLesson();
