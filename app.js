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

  document.getElementById("title").innerText = lesson.title;
  document.getElementById("story").innerText = lesson.story;

  document.getElementById("q1").innerText = lesson.q1;
  document.getElementById("q2").innerText = lesson.q2;
  document.getElementById("q3").innerText = lesson.q3;

  window.currentLesson = lesson;

  localStorage.setItem("readeasy_day", day);
}

function checkAnswers() {
  const a1 = document.getElementById("a1").value.toLowerCase();
  const a2 = document.getElementById("a2").value.toLowerCase();
  const a3 = document.getElementById("a3").value.toLowerCase();

  let score = 0;

  if (a1.includes("quiet") || a1.includes("place")) score++;
  if (a2.includes("interesting")) score++;
  if (a3.includes("think")) score++;

  alert("Score: " + score + "/3");
}

function nextDay() {
  if (day < 30) day++;
  loadLesson();
}

function prevDay() {
  if (day > 1) day--;
  loadLesson();
}

loadLesson();
