const lessons = [];

for (let i = 1; i <= 30; i++) {
  lessons.push({
    day: i,
    title: `Day ${i} Reading`,
    story:
      i === 1
        ? "Tom went to the park. He saw a friendly dog near a tree."
        : i === 2
        ? "Maria read a book at school before lunch."
        : i === 3
        ? "Jake helped his mother carry groceries into the house."
        : `This is the reading story for Day ${i}. Read slowly. Think about the words. Then answer the questions.`,
    questions:
      i === 1
        ? ["Where did Tom go?", "What did Tom see?", "Where was the dog?"]
        : i === 2
        ? ["Who read a book?", "Where did Maria read?", "When did she read?"]
        : i === 3
        ? ["Who helped his mother?", "What did Jake carry?", "Where did they take the groceries?"]
        : ["What day is this lesson?", "How should you read?", "What should you do after reading?"],
    answers:
      i === 1
        ? ["park", "dog", "tree"]
        : i === 2
        ? ["maria", "school", "before lunch"]
        : i === 3
        ? ["jake", "groceries", "house"]
        : [`${i}`, "slowly", "answer"],
    bubbles: "Read slowly. Look for the answer in the story."
  });
}

let currentLesson = Number(localStorage.getItem("readEasyLesson")) || 0;

function get(id) {
  return document.getElementById(id);
}

function buildDaySelector() {
  const daySelect = get("daySelect");
  if (!daySelect) return;

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

  get("lessonLabel").textContent = `Lesson ${lesson.day} of 30`;
  get("completedLabel").textContent = `Completed: ${currentLesson}`;

  get("storyTitle").textContent = lesson.title;
  get("storyText").textContent = lesson.story;

  get("question1Label").textContent = lesson.questions[0];
  get("question2Label").textContent = lesson.questions[1];
  get("question3Label").textContent = lesson.questions[2];

  get("bubblesMessage").textContent = lesson.bubbles;

  get("answer1").value = "";
  get("answer2").value = "";
  get("answer3").value = "";

  get("feedback").textContent = "";

  get("progressBar").style.width =
    `${((currentLesson + 1) / lessons.length) * 100}%`;

  get("daySelect").value = currentLesson;

  get("prevBtn").disabled = currentLesson === 0;
  get("nextBtn").textContent =
    currentLesson === lessons.length - 1 ? "Finish" : "Next ➡";

  localStorage.setItem("readEasyLesson", currentLesson);
}

function checkAnswers() {
  const lesson = lessons[currentLesson];

  const answers = [
    get("answer1").value.trim().toLowerCase(),
    get("answer2").value.trim().toLowerCase(),
    get("answer3").value.trim().toLowerCase()
  ];

  let score = 0;

  lesson.answers.forEach((correct, index) => {
    if (answers[index].includes(correct)) {
      score++;
    }
  });

  if (score === 3) {
    get("feedback").textContent = "✅ Great job! All answers look correct.";
  } else if (score === 2) {
    get("feedback").textContent = "🟡 Good work. Check one answer again.";
  } else {
    get("feedback").textContent = "🔵 Read the story again slowly and try once more.";
  }
}

function clearAnswers() {
  get("answer1").value = "";
  get("answer2").value = "";
  get("answer3").value = "";
  get("feedback").textContent = "";
}

function nextLesson() {
  if (currentLesson < lessons.length - 1) {
    currentLesson++;
    loadLesson();
  } else {
    get("feedback").textContent = "🎉 You finished all 30 lessons!";
  }
}

function prevLesson() {
  if (currentLesson > 0) {
    currentLesson--;
    loadLesson();
  }
}

function resetProgress() {
  currentLesson = 0;
  localStorage.removeItem("readEasyLesson");
  loadLesson();
}

function readStory() {
  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(get("storyText").textContent);
  speech.rate = 0.9;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
}

document.addEventListener("click", function (event) {
  if (event.target.id === "checkBtn") checkAnswers();
  if (event.target.id === "clearBtn") clearAnswers();
  if (event.target.id === "nextBtn") nextLesson();
  if (event.target.id === "prevBtn") prevLesson();
  if (event.target.id === "resetBtn") resetProgress();
  if (event.target.id === "readAloudBtn") readStory();
});

document.addEventListener("change", function (event) {
  if (event.target.id === "daySelect") {
    currentLesson = Number(event.target.value);
    loadLesson();
  }
});

buildDaySelector();
loadLesson();
window.checkAnswers = checkAnswers;
window.clearAnswers = clearAnswers;
window.nextLesson = nextLesson;
window.prevLesson = prevLesson;
window.resetProgress = resetProgress;
window.readStory = readStory;
