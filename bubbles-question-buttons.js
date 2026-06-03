// ReadEasy30 Bubbles preset question buttons
// Safe helper layer. Adds local preset question buttons without changing lesson logic.
(function () {
  const answers = {
    start: "Start with the placement check or Day 1. Read slowly. The goal is not speed. The goal is understanding and confidence.",
    hard: "If reading feels hard, pause and reread one sentence. Look for one word you know. Then try the sentence again. Rereading is part of learning.",
    day30: "Day 30 is the first milestone. After Day 30, use the 240-day path or the Days 31-240 preview to keep building toward stronger reading levels.",
    adult: "Yes. Adults can use ReadEasy30 too. The practice is calm, respectful, and built to avoid shame.",
    proof: "To find proof, go back to the story and point to the sentence that helped you answer. Good readers use the text, not guessing.",
    aloud: "Use Read Aloud when your eyes or brain feel tired. Listening and reading together can help the words make sense."
  };

  function byId(id) { return document.getElementById(id); }

  function addStyles() {
    if (byId("bubblesPresetStyles")) return;
    const style = document.createElement("style");
    style.id = "bubblesPresetStyles";
    style.textContent = ".bubbles-preset-panel{margin-top:1rem;padding:1rem;border:1px solid #bae6fd;background:#f0f9ff;border-radius:1rem}.bubbles-preset-panel h3{margin:.1rem 0 .35rem}.bubbles-preset-panel p{margin:.25rem 0 .8rem}.bubbles-preset-buttons{display:flex;flex-wrap:wrap;gap:.5rem}.bubbles-preset-buttons button{border:0;border-radius:999px;padding:.65rem .85rem;background:#dbeafe;color:#0f172a;font-weight:800;cursor:pointer}.bubbles-preset-buttons button:hover,.bubbles-preset-buttons button:focus{background:#bfdbfe;outline:2px solid #38bdf8;outline-offset:2px}.bubbles-preset-answer{margin-top:.9rem;padding:.8rem;background:#ffffff;border-radius:.85rem;border:1px solid #e0f2fe}.bubbles-preset-actions{display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.7rem}.bubbles-preset-actions button{border:0;border-radius:.7rem;padding:.55rem .75rem;background:#1597ad;color:white;font-weight:800;cursor:pointer}@media(max-width:650px){.bubbles-preset-buttons button,.bubbles-preset-actions button{width:100%}}";
    document.head.appendChild(style);
  }

  function speak(text) {
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88;
    utterance.pitch = 1.08;
    utterance.volume = 1;
    const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
    const preferred = voices.find(function (voice) {
      return /female|victoria|samantha|zira|hazel|karen|moira/i.test(voice.name);
    }) || voices.find(function (voice) { return /en-/i.test(voice.lang); });
    if (preferred) utterance.voice = preferred;
    window.speechSynthesis.speak(utterance);
  }

  function answer(key) {
    const text = answers[key] || answers.start;
    const coach = byId("coachMessage");
    const output = byId("bubblesPresetAnswer");
    if (coach) coach.textContent = text;
    if (output) output.textContent = text;
    speak(text);
  }

  function addPanel() {
    if (byId("bubblesPresetPanel")) return;
    const target = document.querySelector(".coach-box") || document.querySelector(".bubbles-card") || document.querySelector(".lesson-card");
    if (!target) return;

    addStyles();
    const panel = document.createElement("section");
    panel.id = "bubblesPresetPanel";
    panel.className = "bubbles-preset-panel";
    panel.innerHTML = "<h3>Ask Bubbles</h3><p>Choose a question. Bubbles will answer in simple words.</p><div class='bubbles-preset-buttons'><button type='button' data-bubbles-answer='start'>Where should I start?</button><button type='button' data-bubbles-answer='hard'>Reading feels hard</button><button type='button' data-bubbles-answer='proof'>How do I find proof?</button><button type='button' data-bubbles-answer='aloud'>When should I use Read Aloud?</button><button type='button' data-bubbles-answer='day30'>What happens after Day 30?</button><button type='button' data-bubbles-answer='adult'>Can adults use this?</button></div><div id='bubblesPresetAnswer' class='bubbles-preset-answer' aria-live='polite'>Pick a question and I will help.</div><div class='bubbles-preset-actions'><button type='button' id='bubblesPresetRepeat'>🔊 Read answer again</button><button type='button' id='bubblesPresetStop'>Stop voice</button></div>";
    target.insertAdjacentElement("afterend", panel);

    panel.addEventListener("click", function (event) {
      const button = event.target.closest("[data-bubbles-answer]");
      if (button) answer(button.getAttribute("data-bubbles-answer"));
    });

    const repeat = byId("bubblesPresetRepeat");
    const stop = byId("bubblesPresetStop");
    if (repeat) repeat.addEventListener("click", function () {
      const output = byId("bubblesPresetAnswer");
      speak(output ? output.textContent : answers.start);
    });
    if (stop) stop.addEventListener("click", function () {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    });
  }

  window.ReadEasyBubblesAnswer = answer;

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addPanel);
  else addPanel();
})();
