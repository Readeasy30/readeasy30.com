// ReadEasy30 240-day preview app script
(function () {
  function byId(id) { return document.getElementById(id); }
  function lessons() { return window.READEASY_NEXT_PATH_LESSONS || []; }
  function getLesson(day) { return window.getReadEasyStagedLesson ? window.getReadEasyStagedLesson(day) : null; }

  function renderLesson(dayNumber) {
    const lesson = getLesson(dayNumber);
    const output = byId("previewLesson");
    if (!lesson || !output) return;

    const questionList = (lesson.questions || []).map(function (q, index) {
      return "<li><strong>Question " + (index + 1) + ":</strong> " + q.prompt + "</li>";
    }).join("");

    output.innerHTML = "<h2>Day " + lesson.day + ": " + lesson.title + "</h2>" +
      "<p><strong>Level " + lesson.level + "</strong> — " + lesson.focus + "</p>" +
      "<div class='story-box'><h3>Reading</h3><p>" + lesson.story + "</p></div>" +
      "<div class='story-box'><h3>Bubbles Says</h3><p>" + lesson.bubbles + "</p></div>" +
      "<div class='story-box'><h3>Practice Questions</h3><ol>" + questionList + "</ol></div>" +
      "<p><a class='start-button' href='app.html'>Open Current Lesson App</a></p>";
  }

  function boot() {
    const status = byId("previewStatus");
    const select = byId("previewDaySelect");
    const data = lessons();

    if (status) {
      const s = window.READEASY_240_LESSON_STATUS;
      status.textContent = s ? ("Loaded " + s.stagedNextPath + " staged lessons, Day " + s.firstStagedDay + " through Day " + s.lastStagedDay + ".") : "Lesson status not found.";
    }

    if (!select || !data.length) return;
    select.innerHTML = data.map(function (lesson) {
      return "<option value='" + lesson.day + "'>Day " + lesson.day + " - Level " + lesson.level + ": " + lesson.title + "</option>";
    }).join("");

    select.addEventListener("change", function () { renderLesson(Number(select.value)); });
    select.value = "31";
    renderLesson(31);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
