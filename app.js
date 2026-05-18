let day = parseInt(localStorage.getItem("readeasy_day")) || 1;

function generateLesson(day) {
  return {
    title: `Day ${day}: The Reading Adventure`,
    story:
      `Tom went to a quiet place on day ${day}. ` +
      `He noticed something interesting near him. ` +
      `It made him stop and think carefully. ` +
      `Small moments can teach big lessons.`,

    q1: "Where did Tom go?",
    q2: "What did he notice?",
    q3: "What should you do when something is interesting or unusual?",

    answers: {
      a1: "quiet place",
      a2: "something interesting",
      a3: "stop and think"
    }
  };
}

function loadLesson() {
  const lesson = generateLesson(day);

  const titleEl = document.getElementById("title");
  const storyEl = document.getElementById("story");
  const q1El = document.getElementById("q1");
  const q2El = document.getElementById("q2");
  const q3El = document.getElementById("q3");

  if (!titleEl || !storyEl || !q1El || !q2El || !q3El) return;

  titleEl.innerText = lesson.title;
  storyEl.innerText = lesson.story;
  q1El.innerText = lesson.q1;
  q2El.innerText = lesson.q2;
  q3El.innerText = lesson.q3;

  window.currentLesson = lesson;

  localStorage.setItem("readeasy_day", day);
}

function checkAnswers() {
  const a1 = (document.getElementById("a1")?.value || "").toLowerCase();
  const a2 = (document.getElementById("a2")?.value || "").toLowerCase();
  const a3 = (document.getElementById("a3")?.value || "").toLowerCase();

  let score = 0;

  if (a1.includes("quiet") || a1.includes("place")) score++;
  if (a2.includes("interesting") || a2.includes("something")) score++;
  if (a3.includes("think")) score++;

  alert(`Score: ${score}/3`);
}

function nextDay() {
  if (day < 30) day++;
  loadLesson();
}

function prevDay() {
  if (day > 1) day--;
  loadLesson();
}

/*
  SAFE INITIALIZATION:
  Runs ONLY when page is fully ready.
  Prevents double-loading and blank screens.
*/
document.addEventListener("DOMContentLoaded", loadLesson);
 
