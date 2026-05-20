document.addEventListener("DOMContentLoaded", () => {
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
    }
  ];

  for (let i = 4; i <= 30; i++) {
    lessons.push({
      day: i,
      title: `Day ${i} Reading`,
      story: `This is the reading story for Day ${i}. Read slowly and answer carefully.`,
      questions: [
        "What day is this lesson?",
        "How should you read?",
        "What should you do after reading?"
      ],
      answers: [`${i}`, "slowly", "answer carefully"],
      bubbles: "Take your time. Good readers slow down and think."
    });
  }

  let currentLesson = Number(localStorage.getItem("readEasyLesson")) || 0;

  const lessonLabel = document.getElementById("lessonLabel");
  const completedLabel = document.getElementById("completedLabel");
  const progressBar = document.getElementById("progressBar");
  const daySelect = document.getElementById("daySelect");

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

    progressBar.style.width = `${((currentLesson + 1) / lessons.length) * 100}%`;

    prevBtn.disabled = currentLesson === 0;
    nextBtn.textContent = currentLesson === lessons.length - 1 ? "Finish" : "Next ➡";

    localStorage.setItem("readEasyLesson", currentLesson);
  }

  function checkAnswers() {
    const lesson = lessons[currentLesson];

    const userAnswers = [
      answer1.value.trim().toLowerCase(),
      answer2.value.trim().toLowerCase(),
      answer3.value.trim().toLowerCase()
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
      feedback.textContent = "🟡 Nice work. Check one answer again.";
    } else {
      feedback.textContent = "🔵 Read the story again slowly and try once more.";
    }
  }

  function nextLesson() {
    if (currentLesson < lessons.length - 1) {
      currentLesson++;
      loadLesson();
    } else {
      feedback.textContent = "🎉 You completed all 30 lessons!";
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
    currentLesson = 0;
    localStorage.removeItem("readEasyLesson");
    loadLesson();
  }

  function readStory() {
    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(storyText.textContent);
    speech.rate = 0.9;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
  }

  checkBtn.addEventListener("click", checkAnswers);
  clearBtn.addEventListener("click", clearAnswers);
  prevBtn.addEventListener("click", prevLesson);
  nextBtn.addEventListener("click", nextLesson);
  resetBtn.addEventListener("click", resetProgress);
  readAloudBtn.addEventListener("click", readStory);

  daySelect.addEventListener("change", () => {
    currentLesson = Number(daySelect.value);
    loadLesson();
  });

  buildDaySelector();
  loadLesson();
});
