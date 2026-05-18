let day = parseInt(localStorage.getItem("readeasy_day")) || 1;

/* =========================
   USER STATE (C)
========================= */
let streak = parseInt(localStorage.getItem("readeasy_streak")) || 0;
let correctTotal = parseInt(localStorage.getItem("readeasy_correct")) || 0;
let attempts = parseInt(localStorage.getItem("readeasy_attempts")) || 0;

/* =========================
   (A) AI LESSON ENGINE (SIMULATED AI)
   READY FOR REAL API REPLACEMENT
========================= */
function generateLesson(day) {

  const themes = [
    "a quiet park",
    "a school hallway",
    "a library corner",
    "a riverside path",
    "a small town street",
    "a backyard garden"
  ];

  const events = [
    "noticed something unusual",
    "heard a strange sound",
    "met someone interesting",
    "found a hidden object",
    "saw something surprising",
    "made an unexpected discovery"
  ];

  const insights = [
    "Paying attention helps you understand more.",
    "Small details often carry big meaning.",
    "Curiosity leads to learning.",
    "Thinking before acting is smart.",
    "Observation builds understanding.",
    "Every moment can teach something."
  ];

  const theme = themes[day % themes.length];
  const event = events[day % events.length];
  const insight = insights[day % insights.length];

  return {
    title: `Day ${day}: The Discovery Path`,
    story:
      `A student went to ${theme}. ` +
      `While there, they ${event}. ` +
      `They paused and reflected. ` +
      insight,

    q1: "Where did the student go?",
    q2: "What did the student experience?",
    q3: "What lesson does the story teach?",

    answerKeywords: {
      a1: theme,
      a2: event,
      a3: insight
    }
  };
}

/* =========================
   LOAD LESSON
========================= */
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

/* =========================
   (B) BUBBLES AI COACH (SIMPLE CHAT LOGIC)
========================= */
function bubblesCoach(message) {
  const msg = message.toLowerCase();

  if (msg.includes("help")) {
    return "🫧 Bubbles: Try rereading the story slowly and look for key words.";
  }
  if (msg.includes("answer")) {
    return "🫧 Bubbles: Look for where, what happened, and the lesson.";
  }
  if (msg.includes("hard")) {
    return "🫧 Bubbles: Take your time. There are no rush answers here.";
  }

  return "🫧 Bubbles: Keep going — you're building strong reading skills!";
}

/* =========================
   CHECK ANSWERS + (C + D LOGIC)
========================= */
function checkAnswers() {
  const a1 = (document.getElementById("a1")?.value || "").toLowerCase();
  const a2 = (document.getElementById("a2")?.value || "").toLowerCase();
  const a3 = (document.getElementById("a3")?.value || "").toLowerCase();

  attempts++;

  let score = 0;

  if (a1.length > 2) score++;
  if (a2.length > 2) score++;
  if (a3.length > 2) score++;

  correctTotal += score;

  let feedback = "";

  if (score === 3) {
    streak++;
    feedback = "⭐ Excellent work! Full understanding.";
  } else if (score === 2) {
    feedback = bubblesCoach("help");
  } else {
    streak = 0;
    feedback = bubblesCoach("hard");
  }

  localStorage.setItem("readeasy_streak", streak);
  localStorage.setItem("readeasy_correct", correctTotal);
  localStorage.setItem("readeasy_attempts", attempts);

  alert(
    `${feedback}\n\nScore: ${score}/3\nStreak: ${streak}\nTotal: ${correctTotal}/${attempts}`
  );
}

/* =========================
   NAVIGATION
========================= */
function nextDay() {
  if (day < 30) day++;
  loadLesson();
}

function prevDay() {
  if (day > 1) day--;
  loadLesson();
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", loadLesson);
