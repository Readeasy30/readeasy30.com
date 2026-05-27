/* ReadEasy30 repair helpers: stable non-React lesson support. */
(function () {
  function text(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function completed() {
    return Number(localStorage.getItem("readEasyProgress")) || 0;
  }

  function addProofReminder() {
    if (document.getElementById("proofReminder")) return;
    const questionsBox = document.querySelector(".questions-box");
    if (!questionsBox) return;

    const box = document.createElement("section");
    box.id = "proofReminder";
    box.className = "proof-reminder";
    box.innerHTML = "<h2>Find Proof</h2><p>Before you check answers, point to the sentence that proves each answer.</p>";
    questionsBox.insertAdjacentElement("beforebegin", box);
  }

  function addStyles() {
    if (document.getElementById("readRepairStyles")) return;
    const style = document.createElement("style");
    style.id = "readRepairStyles";
    style.textContent = ".proof-reminder{margin-top:1.1rem;background:#fff7ed;border:1px solid #fed7aa;border-left:.35rem solid #f97316;border-radius:.85rem;padding:1rem}.proof-reminder h2{margin:.1rem 0 .35rem}.proof-reminder p{margin:0;color:#57534e;line-height:1.6}.disabled-btn{opacity:.55;cursor:not-allowed}";
    document.head.appendChild(style);
  }

  function guardDaySelector() {
    const selector = document.getElementById("daySelect");
    if (!selector || selector.dataset.repairReady === "true") return;
    selector.dataset.repairReady = "true";
    selector.addEventListener("change", function () {
      const selected = Number(selector.value);
      const maxOpen = completed();
      if (selected > maxOpen) {
        selector.value = String(maxOpen);
        text("coachMessage", "Finish the open lessons first. One calm step at a time.");
      }
    });
  }

  function boot() {
    addStyles();
    addProofReminder();
    guardDaySelector();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
