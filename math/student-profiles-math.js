(() => {
  const CONFIG = {
    appId: "mathEasy30",
    appName: "MathEasy30",
    subject: "math",
    scopePrefixes: ["mathEasy", "mathEasy30", "matheasy30"],
    profilesKey: "mathEasy30StudentProfiles",
    activeKey: "mathEasy30ActiveStudent",
    migratedKey: "mathEasy30LegacyMigratedV1",
    dataPrefix: "mathEasy30StudentData::",
    appProgressKey: "matheasy30.progress.v1",
    insertBeforeSelector: "#mathAssessmentBox",
    resetSelector: ".danger-row button",
    resetLabel: "Reset This Student",
    newStudentPlaceholder: "Student name or initials"
  };

  const StorageProto = Storage.prototype;
  const rawGetItem = StorageProto.getItem;
  const rawSetItem = StorageProto.setItem;
  const rawRemoveItem = StorageProto.removeItem;
  const rawKey = StorageProto.key;

  const getRaw = key => rawGetItem.call(localStorage, key);
  const setRaw = (key, value) => rawSetItem.call(localStorage, key, String(value));
  const removeRaw = key => rawRemoveItem.call(localStorage, key);

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function createId() {
    return `student-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function cleanName(name, fallback) {
    const cleaned = String(name || "").trim().replace(/\s+/g, " ").slice(0, 32);
    return cleaned || fallback;
  }

  function readProfiles() {
    try {
      const saved = JSON.parse(getRaw(CONFIG.profilesKey) || "[]");
      return Array.isArray(saved) ? saved.filter(p => p && p.id && p.name) : [];
    } catch { return []; }
  }

  function writeProfiles(profiles) {
    setRaw(CONFIG.profilesKey, JSON.stringify(profiles));
  }

  function getActiveId() { return getRaw(CONFIG.activeKey) || ""; }
  function setActiveId(id) { setRaw(CONFIG.activeKey, id); }

  function ensureProfiles() {
    let profiles = readProfiles();
    if (profiles.length === 0) {
      profiles = [{ id: createId(), name: "Student 1", createdAt: new Date().toISOString() }];
      writeProfiles(profiles);
      setActiveId(profiles[0].id);
    }
    let activeId = getActiveId();
    if (!profiles.some(p => p.id === activeId)) {
      activeId = profiles[0].id;
      setActiveId(activeId);
    }
    return profiles;
  }

  function scopedKeyFor(profileId, key) {
    return `${CONFIG.dataPrefix}${profileId}::${key}`;
  }

  function isReservedKey(key) {
    return key === CONFIG.profilesKey ||
      key === CONFIG.activeKey ||
      key === CONFIG.migratedKey ||
      key.startsWith(CONFIG.dataPrefix);
  }

  function shouldScopeKey(key) {
    if (typeof key !== "string" || key.length === 0) return false;
    if (isReservedKey(key)) return false;
    return CONFIG.scopePrefixes.some(prefix => key.startsWith(prefix));
  }

  function getCurrentProfileId() {
    ensureProfiles();
    return getActiveId();
  }

  function mapKey(key) {
    if (!shouldScopeKey(key)) return key;
    return scopedKeyFor(getCurrentProfileId(), key);
  }

  function migrateLegacyData(activeProfileId) {
    if (getRaw(CONFIG.migratedKey) === "true") return;
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = rawKey.call(localStorage, i);
      if (key && shouldScopeKey(key)) keys.push(key);
    }
    keys.forEach(key => {
      const newKey = scopedKeyFor(activeProfileId, key);
      if (getRaw(newKey) === null) {
        const value = getRaw(key);
        if (value !== null) setRaw(newKey, value);
      }
      removeRaw(key);
    });
    setRaw(CONFIG.migratedKey, "true");
  }

  function patchLocalStorage() {
    const guardKey = `__${CONFIG.appId}StudentProfilesPatched`;
    if (window[guardKey]) return;
    window[guardKey] = true;

    StorageProto.getItem = function(key) {
      if (this === localStorage) return rawGetItem.call(this, mapKey(key));
      return rawGetItem.call(this, key);
    };
    StorageProto.setItem = function(key, value) {
      if (this === localStorage) return rawSetItem.call(this, mapKey(key), value);
      return rawSetItem.call(this, key, value);
    };
    StorageProto.removeItem = function(key) {
      if (this === localStorage) return rawRemoveItem.call(this, mapKey(key));
      return rawRemoveItem.call(this, key);
    };
  }

  function getProfileValue(profileId, key) {
    return getRaw(scopedKeyFor(profileId, key));
  }

  function parseMathState(profileId) {
    try {
      return JSON.parse(getProfileValue(profileId, CONFIG.appProgressKey) || "{}");
    } catch { return {}; }
  }

  function getLevelFromIndex(index) {
    const day = (Number(index) || 0) + 1;
    if (day <= 30) return "A";
    if (day <= 60) return "B";
    if (day <= 90) return "C";
    if (day <= 120) return "D";
    if (day <= 150) return "E";
    if (day <= 180) return "F";
    if (day <= 210) return "G";
    return "H";
  }

  function getMathStats(profileId) {
    const state = parseMathState(profileId);
    const completed = Array.isArray(state.completed) ? state.completed.length : 0;
    const streak = Number(state.streak) || 0;
    const level = state.currentLesson === undefined ? "Not set" : getLevelFromIndex(state.currentLesson);
    return { completed, streak, level };
  }

  function buildProfileCards(profiles, activeId) {
    return profiles.map(profile => {
      const stats = getMathStats(profile.id);
      const activeClass = profile.id === activeId ? " active-student" : "";
      const selectedText = profile.id === activeId ? "Selected" : "Switch";
      return `
        <button class="student-card${activeClass}" type="button" data-profile-id="${escapeHtml(profile.id)}" aria-pressed="${profile.id === activeId}">
          <span class="student-name">${escapeHtml(profile.name)}</span>
          <span class="student-stats">Level ${escapeHtml(stats.level)} • ${stats.completed} days • Streak ${stats.streak}</span>
          <span class="student-action">${selectedText}</span>
        </button>
      `;
    }).join("");
  }

  function renderProfileBox() {
    const anchor = document.querySelector(CONFIG.insertBeforeSelector);
    if (!anchor || document.getElementById(`${CONFIG.appId}StudentProfiles`)) return;

    const profiles = ensureProfiles();
    const activeId = getActiveId();
    const activeProfile = profiles.find(p => p.id === activeId) || profiles[0];

    const section = document.createElement("section");
    section.id = `${CONFIG.appId}StudentProfiles`;
    section.className = "student-profile-box";
    section.innerHTML = `
      <div class="student-profile-header">
        <div>
          <p class="student-profile-label">Shared Device Profiles</p>
          <h2>Who is practicing today?</h2>
          <p>Choose a student before starting. Each student gets their own math progress on this device.</p>
        </div>
        <div class="active-student-pill">Now: ${escapeHtml(activeProfile.name)}</div>
      </div>
      <div class="student-card-grid" id="${CONFIG.appId}StudentList">
        ${buildProfileCards(profiles, activeId)}
      </div>
      <form class="add-student-form" id="${CONFIG.appId}AddStudentForm">
        <label for="${CONFIG.appId}NewStudentName">Add another student</label>
        <div class="add-student-row">
          <input id="${CONFIG.appId}NewStudentName" type="text" maxlength="32" placeholder="${CONFIG.newStudentPlaceholder}" autocomplete="off" />
          <button type="submit">Add Student</button>
        </div>
        <p class="student-profile-note">For schools or libraries, use first name, initials, or a simple nickname. This saves only on this device.</p>
      </form>
      <div class="student-profile-actions">
        <button type="button" class="student-remove-btn" id="${CONFIG.appId}RemoveStudentBtn">Remove Selected Student</button>
      </div>
    `;

    anchor.parentNode.insertBefore(section, anchor);
    wireProfileBox(section);
  }

  function wireProfileBox(section) {
    section.querySelectorAll("[data-profile-id]").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-profile-id");
        if (!id || id === getActiveId()) return;
        setActiveId(id);
        window.location.reload();
      });
    });

    const form = document.getElementById(`${CONFIG.appId}AddStudentForm`);
    const input = document.getElementById(`${CONFIG.appId}NewStudentName`);
    form.addEventListener("submit", event => {
      event.preventDefault();
      const profiles = readProfiles();
      const newProfile = {
        id: createId(),
        name: cleanName(input.value, `Student ${profiles.length + 1}`),
        createdAt: new Date().toISOString()
      };
      profiles.push(newProfile);
      writeProfiles(profiles);
      setActiveId(newProfile.id);
      window.location.reload();
    });

    const removeButton = document.getElementById(`${CONFIG.appId}RemoveStudentBtn`);
    removeButton.addEventListener("click", () => {
      const profiles = readProfiles();
      const activeId = getActiveId();
      const activeProfile = profiles.find(p => p.id === activeId);
      if (profiles.length <= 1) {
        alert("Keep at least one student profile on this device.");
        return;
      }
      const ok = confirm(`Remove ${activeProfile ? activeProfile.name : "this student"} and their saved math progress from this device?`);
      if (!ok) return;
      deleteProfileData(activeId);
      const remaining = profiles.filter(p => p.id !== activeId);
      writeProfiles(remaining);
      setActiveId(remaining[0].id);
      window.location.reload();
    });
  }

  function deleteProfileData(profileId) {
    const prefix = `${CONFIG.dataPrefix}${profileId}::`;
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = rawKey.call(localStorage, i);
      if (key && key.startsWith(prefix)) keys.push(key);
    }
    keys.forEach(removeRaw);
  }

  function resetActiveStudent() {
    const profiles = readProfiles();
    const activeId = getActiveId();
    const activeProfile = profiles.find(p => p.id === activeId);
    const name = activeProfile ? activeProfile.name : "this student";
    const ok = confirm(`Reset ${name}'s math progress on this device? Other students will not be changed.`);
    if (!ok) return;
    deleteProfileData(activeId);
    window.location.reload();
  }

  function updateResetButtonText() {
    document.querySelectorAll(CONFIG.resetSelector).forEach(button => {
      button.textContent = CONFIG.resetLabel;
      button.setAttribute("aria-label", `${CONFIG.resetLabel} only`);
    });
  }

  function interceptResetClicks() {
    document.addEventListener("click", event => {
      const button = event.target.closest("button");
      if (!button) return;
      const text = (button.textContent || "").trim().toLowerCase();
      const isReset = button.matches(CONFIG.resetSelector) ||
        text === "reset this student" ||
        text === "reset progress on this device";
      if (!isReset) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      resetActiveStudent();
    }, true);
  }

  function injectStyles() {
    if (document.getElementById(`${CONFIG.appId}StudentProfileStyles`)) return;
    const style = document.createElement("style");
    style.id = `${CONFIG.appId}StudentProfileStyles`;
    style.textContent = `
      .student-profile-box{margin-top:1.4rem;background:linear-gradient(180deg,#f8fafc,#eefcff);border:1px solid #cfeff5;border-radius:1rem;padding:1.2rem}.student-profile-header{display:flex;justify-content:space-between;gap:1rem;align-items:flex-start}.student-profile-label{display:inline-block;margin:0 0 .45rem;padding:.25rem .55rem;background:#dff7fb;color:#0f7f92;border-radius:999px;font-size:.75rem;font-weight:bold;text-transform:uppercase;letter-spacing:.03em}.student-profile-header h2{margin-bottom:.35rem}.student-profile-header p{margin:.2rem 0 0;color:#555;line-height:1.7}.active-student-pill{background:#111827;color:white;border-radius:999px;padding:.45rem .75rem;font-weight:bold;white-space:nowrap}.student-card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.7rem;margin-top:1rem}.student-card{display:grid;gap:.25rem;text-align:left;background:white;color:#111827;border:2px solid #dbeafe;border-radius:.85rem;padding:.9rem;cursor:pointer;min-height:5.3rem}.student-card:hover,.student-card:focus{border-color:#1597ad;box-shadow:0 0 0 4px rgba(21,151,173,.12)}.student-card.active-student{border-color:#1597ad;background:#ecfeff}.student-name{font-weight:900;font-size:1.05rem}.student-stats{font-size:.82rem;color:#475569;line-height:1.4}.student-action{font-size:.78rem;font-weight:bold;color:#0f7f92}.add-student-form{margin-top:1rem;background:white;border:1px solid #dbeafe;border-radius:.85rem;padding:1rem}.add-student-form label{display:block;font-weight:bold;margin-bottom:.55rem}.add-student-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:.6rem}.add-student-row input{width:100%;padding:.8rem;border-radius:.65rem;border:1px solid #cbd5e1}.add-student-row button{background:#1597ad;color:white;border:none;border-radius:.65rem;padding:.8rem 1rem;font-weight:bold;cursor:pointer}.student-profile-note{font-size:.82rem;color:#64748b;margin:.7rem 0 0}.student-profile-actions{margin-top:.8rem}.student-remove-btn{background:#fff;color:#b91c1c;border:1px solid #fecaca;border-radius:.65rem;padding:.65rem .8rem;font-weight:bold;cursor:pointer}@media(max-width:768px){.student-profile-header{flex-direction:column}.active-student-pill{white-space:normal}.add-student-row{grid-template-columns:1fr}.add-student-row button,.student-remove-btn{width:100%}}
    `;
    document.head.appendChild(style);
  }

  const profiles = ensureProfiles();
  migrateLegacyData(getActiveId() || profiles[0].id);
  patchLocalStorage();
  injectStyles();
  interceptResetClicks();
  renderProfileBox();
  updateResetButtonText();

  window.MathEasy30StudentProfiles = {
    getProfiles: readProfiles,
    getActiveId,
    resetActiveStudent,
    deleteProfileData
  };
})();
