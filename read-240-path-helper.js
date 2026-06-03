/*
  ReadEasy30 240-day path helper
  Safe helper only. It displays the 240-day path inside the app without replacing the working lesson engine.
*/
(function () {
  function byId(id) {
    return document.getElementById(id);
  }

  function getCurriculum() {
    return window.READEASY240_CURRICULUM || [];
  }

  function getLevels() {
    return window.READEASY240_LEVELS || [];
  }

  function ensureStyles() {
    if (byId("read240HelperStyles")) return;
    const style = document.createElement("style");
    style.id = "read240HelperStyles";
    style.textContent = `
      .read240-card{margin:1rem 0;padding:1rem;border:1px solid #c7e7ef;background:#f0fbfd;border-radius:1rem}.read240-card h2,.read240-card h3{margin-top:0}.read240-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.7rem}.read240-mini{padding:.75rem;border:1px solid #d7eef3;background:#fff;border-radius:.8rem}.read240-controls{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.7rem;margin:.8rem 0}.read240-controls select{width:100%;padding:.65rem;border:1px solid #b9dbe3;border-radius:.65rem;background:#fff;font:inherit}.read240-actions{display:flex;gap:.55rem;flex-wrap:wrap;margin-top:.75rem}.read240-actions a,.read240-actions button{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:.7rem;padding:.65rem .85rem;font:inherit;font-weight:800;text-decoration:none;cursor:pointer}.read240-primary{background:#1597ad;color:#fff}.read240-secondary{background:#e4f6fa;color:#075868}.read240-note{color:#415b63;line-height:1.45}@media(max-width:650px){.read240-actions a,.read240-actions button{width:100%}}`;
    document.head.appendChild(style);
  }

  function curriculumDay(dayNumber) {
    return getCurriculum().find(item => item.day === Number(dayNumber));
  }

  function renderSelectedDay() {
    const output = byId("read240SelectedDay");
    const daySelect = byId("read240DaySelect");
    if (!output || !daySelect) return;

    const item = curriculumDay(daySelect.value);
    if (!item) {
      output.innerHTML = "<p>Choose a day to preview the path.</p>";
      return;
    }

    output.innerHTML = `
      <h3>Day ${item.day} - Level ${item.level}</h3>
      <p><strong>${item.focus}</strong></p>
      <p>${item.goal}</p>
      <p class="read240-note">Status: ${item.status === "starter-live" ? "available in the current starter app" : "planned for the next-path lesson build"}.</p>
    `;
  }

  function renderLevelSummary() {
    const levelSelect = byId("read240LevelSelect");
    const summary = byId("read240LevelSummary");
    if (!levelSelect || !summary) return;

    const level = getLevels().find(item => item.level === levelSelect.value);
    if (!level) return;

    summary.innerHTML = `
      <h3>Level ${level.level}: ${level.title}</h3>
      <p><strong>${level.range}</strong></p>
      <p>${level.outcome}</p>
    `;
  }

  function syncLevelToDay() {
    const levelSelect = byId("read240LevelSelect");
    const daySelect = byId("read240DaySelect");
    if (!levelSelect || !daySelect) return;

    const levelIndex = getLevels().findIndex(item => item.level === levelSelect.value);
    if (levelIndex < 0) return;
    daySelect.value = String(levelIndex * 30 + 1);
    renderLevelSummary();
    renderSelectedDay();
  }

  function renderHelper() {
    if (byId("read240PathHelper")) return;
    const levels = getLevels();
    const curriculum = getCurriculum();
    if (!levels.length || !curriculum.length) return;

    ensureStyles();

    const target = document.querySelector(".level-wrap") || document.querySelector(".lesson-status") || document.querySelector(".lesson-card");
    if (!target) return;

    const card = document.createElement("section");
    card.id = "read240PathHelper";
    card.className = "read240-card";
    card.innerHTML = `
      <h2>🧭 240-Day Reading Path</h2>
      <p>Day 30 is the first milestone. Day 31 starts the next level. ReadEasy30 is now staged as 8 levels and 240 practice days.</p>
      <div class="read240-grid">
        <div class="read240-mini"><strong>8 levels</strong><br>Level A through Level H</div>
        <div class="read240-mini"><strong>30 days each</strong><br>Repeat any level when needed</div>
        <div class="read240-mini"><strong>Goal</strong><br>Build toward 8th-grade readiness</div>
      </div>
      <div class="read240-controls">
        <div><label for="read240LevelSelect">Preview level</label><select id="read240LevelSelect"></select></div>
        <div><label for="read240DaySelect">Preview day</label><select id="read240DaySelect"></select></div>
      </div>
      <div id="read240LevelSummary" class="read240-mini"></div>
      <div id="read240SelectedDay" class="read240-mini"></div>
      <div class="read240-actions">
        <a class="read240-primary" href="days-1-240-curriculum.html">View All 240 Days</a>
        <a class="read240-secondary" href="240-day-reading-path.html">240-Day Overview</a>
      </div>
      <p class="read240-note">Safe update note: current Day 1-30 lessons still run normally. Days 31-240 are staged for the next lesson build.</p>
    `;

    target.insertAdjacentElement("afterend", card);

    const levelSelect = byId("read240LevelSelect");
    const daySelect = byId("read240DaySelect");

    levelSelect.innerHTML = levels.map(level => `<option value="${level.level}">Level ${level.level}: ${level.title}</option>`).join("");
    daySelect.innerHTML = curriculum.map(item => `<option value="${item.day}">Day ${item.day}: Level ${item.level} - ${item.focus}</option>`).join("");

    levelSelect.addEventListener("change", syncLevelToDay);
    daySelect.addEventListener("change", renderSelectedDay);

    levelSelect.value = "A";
    daySelect.value = "1";
    renderLevelSummary();
    renderSelectedDay();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderHelper);
  } else {
    setTimeout(renderHelper, 0);
  }
})();
