let day = parseInt(localStorage.getItem("readeasy_day")) || 1;

/* -----------------------------
   PROGRESS TRACKING
------------------------------*/
let streak = parseInt(localStorage.getItem("readeasy_streak")) || 0;

/* -----------------------------
   AI-STYLE CONTENT ENGINE
------------------------------*/
function generateLesson(day) {

  const places = [
    "a quiet park",
    "a school hallway",
    "a small library",
    "a backyard garden",
    "a busy street corner",
    "a calm riverbank"
  ];

  const events = [
    "noticed something unusual",
    "heard a strange sound",
    "met someone new",
    "found a hidden object",
    "saw something interesting",
    "made an unexpected discovery"
  ];

  const lessons = [
    "Paying attention helps you understand more.",
    "Small details can teach big lessons.",
    "Curiosity helps you learn faster.",
    "Thinking before acting is important.",
    "Observation is a powerful skill.",
    "Every moment can teach something new."
  ];

  const place = places[day % places.length];
  const event = events[day % events.length];
  const lesson = lessons[day % lessons.length];

  return {
    title: `Day ${day}: A Small Discovery`,
    story:
      `On day ${day}, a student went to ${place}. ` +
      `While there, they ${event}. ` +
      `This made them pause and think. ` +
      `${lesson}`,

    q1: "Where did the student go?",
    q2: "What did the student experience?",
    q3: "What lesson does the story teach?",

    hint: "Look for key details in the story before answering.",

    answers: {
      a1: place,
      a2: event,
      a3: lesson
    }
  };
}

/* -----------------------------
   LOAD LESSON
------------------------------*/
function loadLesson() {
  const lesson = generateLesson(day);

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };

  set("title", lesson.title);
  set("story", lesson.story);
  set("q1", lesson.q1);
  set("q2", lesson.q2);
  set("q3", lesson.q3);

  window.currentLesson = lesson;

  localStorage.setItem("readeasy_day", day);
}

/* -----------------------------
   ANSWERS + BUBBLES COACH
------------------------------*/
function checkAnswers() {
  const a1 = (document.getElementById("a1")?.value || "").toLowerCase();
  const a2 = (document.getElementById("a2")?.value || "").toLowerCase();
  const a3 = (document.getElementById("a3")?.value || "").toLowerCase();

  let score = 0;

  if (a1.length > 2) score++;
  if (a2.length > 2) score++;
  if (a3.length > 2) score++;

  let message = "";

  if (score === 3) {
    message = "⭐ Great job! You understood the story well.";
    streak++;
  } else if (score === 2) {
    message = "👍 Good effort! Check the story again for details.";
  } else {
    message = "🫧 Bubbles says: Try reading the story one more time slowly.";
  }

  localStorage.setItem("readeasy_streak", streak);

  alert(`${message}\nScore: ${score}/3\nStreak: ${streak}`);
}

/* -----------------------------
   NAVIGATION
------------------------------*/
function nextDay() {
  if (day < 30) day++;
  loadLesson();
}

function prevDay() {
  if (day > 1) day--;
  loadLesson();
}

/* -----------------------------
   INIT (SAFE)
------------------------------*/
document.addEventListener("DOMContentLoaded", loadLesson);
 
