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

const resultMessage = document.getElementById("resultMessage");
const coachMessage = document.getElementById("coachMessage");

const daySelect = document.getElementById("daySelect");
const nextBtn = document.getElementById("nextBtn");

function loadLesson() {
  const lesson = lessons[currentLesson];

  lessonPassed = false;

  storyTitle.textContent = lesson.title;
  storyText.textContent = lesson.story;

  lessonCount.textContent = `Lesson ${currentLesson + 1} of 30`;

  updateCompleted();

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
      </div>
    `;
  });

  coachMessage.textContent = "Read carefully. You can do this.";
  resultMessage.textContent = "";

  daySelect.value = currentLesson;

  updateNextButton();
}

function checkAnswers() {
  const lesson = lessons[currentLesson];

  let score = 0;

  lesson.answers.forEach((answer, index) => {
    const userAnswer = document
      .getElementById(`answer${index}`)
      .value
      .trim()
      .toLowerCase();

    if (userAnswer.includes(answer.toLowerCase())) {
      score++;
    }
  });

  if (score === lesson.answers.length) {
    lessonPassed = true;

    resultMessage.textContent = "✅ Great job! All answers are correct.";
    coachMessage.textContent = "Fantastic reading today. You may go to the next lesson.";

    saveProgress();
  } else {
    lessonPassed = false;

    resultMessage.textContent = `You got ${score} out of ${lesson.answers.length} correct.`;
    coachMessage.textContent = "Good effort. Try reading the story again slowly.";
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
  }
}

function prevLesson() {
  if (currentLesson > 0) {
    currentLesson--;
    loadLesson();
  }
}

function clearAnswers() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {
    input.value = "";
  });

  lessonPassed = false;

  resultMessage.textContent = "";
  coachMessage.textContent = "Answers cleared. Try again slowly.";

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
  const savedProgress =
    Number(localStorage.getItem("readEasyProgress")) || 0;

  const newProgress = currentLesson + 1;

  if (newProgress > savedProgress) {
    localStorage.setItem("readEasyProgress", newProgress);
  }

  updateCompleted();
}

function updateCompleted() {
  const completed =
    localStorage.getItem("readEasyProgress") || 0;

  completedCount.textContent = `Completed: ${completed}`;
}

function buildDaySelector() {
  daySelect.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = `Day ${index + 1}`;

    daySelect.appendChild(option);
  });
}

function jumpToDay() {
  currentLesson = Number(daySelect.value);
  loadLesson();
}

function updateNextButton() {
  if (!nextBtn) return;

  nextBtn.disabled = !lessonPassed;
}

daySelect.addEventListener("change", jumpToDay);

buildDaySelector();
loadLesson();
