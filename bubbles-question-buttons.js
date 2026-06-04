// ReadEasy30 Bubbles Free Voice Coach
// Safe helper layer. Adds guided voice tutoring with browser speechSynthesis.
// No paid API. No accounts. No tracking. Plain HTML/CSS/JS.
(function () {
  const coachAnswers = {
    start: "Start with the placement check or Day 1. Read slowly. The goal is not speed. The goal is understanding and confidence.",
    hard: "If reading feels hard, pause and reread one sentence. Look for one word you know. Then try the sentence again. Rereading is part of learning.",
    proof: "To find proof, go back to the story and point to the sentence that helped you answer. Good readers use the text, not guessing.",
    aloud: "Use Read Aloud when your eyes or brain feel tired. Listening and reading together can help the words make sense.",
    hint: "Here is a calm hint. Read the question first. Then look back in the story for the same person, place, or action.",
    reread: "Let us reread slowly. Stop after each sentence. Ask yourself: who is this about, and what happened?",
    word: "Choose a word from Words to Know. Bubbles can say the word, explain it in simple words, and use it in a sentence.",
    day30: "Day 30 is the first milestone. After Day 30, keep going on the 240-day path toward stronger reading levels.",
    adult: "Yes. Adults can use ReadEasy30 too. The practice is calm, respectful, and built to avoid shame."
  };

  const fallbackDefinitions = {
    about: "about means connected to something or telling what something is on.",
    again: "again means one more time.",
    answer: "an answer is what you say or write after a question.",
    appointment: "an appointment is a planned time to meet someone.",
    bag: "a bag is something used to carry things.",
    bed: "a bed is a place where someone sleeps or rests.",
    beside: "beside means next to.",
    book: "a book has pages with words or pictures.",
    boots: "boots are shoes that cover more of the foot or leg.",
    card: "a card is a small piece of paper or plastic with information.",
    careful: "careful means doing something with attention so mistakes are less likely.",
    cart: "a cart is used to carry things in a store.",
    check: "check means to look again to make sure something is right.",
    clinic: "a clinic is a place where people get health care.",
    copied: "copied means wrote or made the same thing again.",
    corner: "a corner is where two sides or roads meet.",
    crosswalk: "a crosswalk is a marked place to cross a street.",
    deleted: "deleted means removed or erased.",
    directions: "directions tell what to do or where to go.",
    doctor: "a doctor helps people take care of their health.",
    dose: "a dose is an amount of medicine.",
    folder: "a folder holds papers.",
    forget: "forget means to not remember.",
    form: "a form is a paper or screen where you fill in information.",
    garden: "a garden is a place where plants grow.",
    gate: "a gate is a door in a fence.",
    grocery: "grocery means food or things bought at a store.",
    guess: "guess means to try an answer when you are not sure.",
    hat: "a hat is something worn on the head.",
    helps: "helps means makes something easier for someone.",
    hiding: "hiding means staying where others cannot easily see you.",
    label: "a label gives information about something.",
    late: "late means after the expected time.",
    library: "a library is a place to read or borrow books.",
    list: "a list is words written one after another to remember things.",
    little: "little means small.",
    lunch: "lunch is a meal usually eaten in the middle of the day.",
    main: "main means most important.",
    medicine: "medicine is something used to help a person feel better or treat sickness.",
    message: "a message is information sent to someone.",
    note: "a note is a short written message.",
    notice: "a notice is written information people should read.",
    nurse: "a nurse helps care for people who are sick or hurt.",
    page: "a page is one side of paper in a book.",
    paragraph: "a paragraph is a group of sentences about one idea.",
    passage: "a passage is a short piece of reading.",
    password: "a password is a secret word or code used to sign in.",
    patient: "a patient is a person getting health care.",
    permission: "permission means being allowed to do something.",
    proof: "proof is information that shows an answer is true.",
    puddle: "a puddle is a small pool of water on the ground.",
    question: "a question asks for an answer.",
    reading: "reading means looking at words and understanding them.",
    reread: "reread means read again.",
    rests: "rests means stops working or moving to feel better.",
    rice: "rice is a small grain people cook and eat.",
    rinsed: "rinsed means washed quickly with water.",
    routine: "a routine is something done the same way often.",
    sentence: "a sentence is a group of words that gives a complete thought.",
    signed: "signed means wrote a name to show agreement or approval.",
    slowly: "slowly means not fast.",
    soft: "soft means easy to press, gentle, or not hard.",
    steady: "steady means regular and continuing.",
    table: "a table is furniture with a flat top.",
    thank: "thank means to show you are grateful.",
    turtles: "turtles are animals with hard shells.",
    understand: "understand means to know what something means.",
    urgent: "urgent means needing attention quickly.",
    visit: "visit means to go see a person or place.",
    waits: "waits means stays until something happens.",
    water: "water is a clear liquid people, animals, and plants need."
  };

  let lastSpokenText = coachAnswers.start;
  let speechReady = false;

  function byId(id) {
    return document.getElementById(id);
  }

  function currentLessonSafe() {
    if (Array.isArray(window.lessons) && Number.isInteger(window.currentLesson)) {
      return window.lessons[window.currentLesson] || null;
    }
    if (typeof lessons !== "undefined" && Number.isInteger(currentLesson)) {
      return lessons[currentLesson] || null;
    }
    return null;
  }

  function currentStoryText() {
    const story = byId("storyText");
    return story ? story.textContent.trim() : "";
  }

  function currentCoachText() {
    const coach = byId("coachMessage");
    return coach ? coach.textContent.trim() : coachAnswers.start;
  }

  function getVoices() {
    if (!window.speechSynthesis || !window.speechSynthesis.getVoices) return [];
    return window.speechSynthesis.getVoices();
  }

  function pickVoice() {
    const voices = getVoices();
    return voices.find(function (voice) {
      return /samantha|zira|jenny|aria|natasha|susan|victoria|karen|moira|hazel|female/i.test(voice.name) && /^en/i.test(voice.lang);
    }) || voices.find(function (voice) {
      return /^en-US/i.test(voice.lang);
    }) || voices.find(function (voice) {
      return /^en/i.test(voice.lang);
    }) || voices[0];
  }

  function speak(text, options) {
    const clean = String(text || "").replace(/\s+/g, " ").trim();
    if (!clean) return;
    lastSpokenText = clean;

    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
      setStatus("This device does not support free browser voice. Reading help still works on screen.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = options && options.slow ? 0.72 : 0.86;
    utterance.pitch = 1.04;
    utterance.volume = 1;
    const voice = pickVoice();
    if (voice) utterance.voice = voice;
    utterance.onend = function () { setStatus("Voice ready."); };
    utterance.onerror = function () { setStatus("Voice paused. Tap a voice button again if needed."); };
    setStatus(options && options.slow ? "Bubbles is reading slowly..." : "Bubbles is speaking...");
    window.speechSynthesis.speak(utterance);
  }

  function stopVoice() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setStatus("Voice stopped.");
  }

  function setCoach(text, speakNow, slow) {
    const output = byId("bubblesPresetAnswer");
    const coach = byId("coachMessage");
    if (coach) coach.textContent = text;
    if (output) output.textContent = text;
    if (speakNow) speak(text, { slow: !!slow });
  }

  function setStatus(text) {
    const status = byId("bubblesVoiceStatus");
    if (status) status.textContent = text;
  }

  function addStyles() {
    if (byId("bubblesPresetStyles")) return;
    const style = document.createElement("style");
    style.id = "bubblesPresetStyles";
    style.textContent = "\
.bubbles-preset-panel{margin-top:1rem;padding:1rem;border:1px solid #bae6fd;background:#f0f9ff;border-radius:1rem;box-shadow:0 10px 25px rgba(15,23,42,.06)}\
.bubbles-preset-panel h3{margin:.1rem 0 .35rem;font-size:1.35rem}\
.bubbles-preset-panel p{margin:.25rem 0 .8rem}\
.bubbles-preset-grid{display:grid;grid-template-columns:1fr;gap:1rem}\
.bubbles-preset-buttons,.bubbles-preset-actions,.bubbles-word-actions{display:flex;flex-wrap:wrap;gap:.5rem}\
.bubbles-preset-buttons button,.bubbles-word-actions button{border:0;border-radius:999px;padding:.65rem .85rem;background:#dbeafe;color:#0f172a;font-weight:800;cursor:pointer}\
.bubbles-preset-actions button{border:0;border-radius:.7rem;padding:.62rem .8rem;background:#1597ad;color:white;font-weight:800;cursor:pointer}\
.bubbles-preset-actions button.secondary{background:#334155}\
.bubbles-preset-buttons button:hover,.bubbles-preset-buttons button:focus,.bubbles-word-actions button:hover,.bubbles-word-actions button:focus,.bubbles-preset-actions button:hover,.bubbles-preset-actions button:focus{filter:brightness(.96);outline:2px solid #38bdf8;outline-offset:2px}\
.bubbles-preset-answer,.bubbles-word-box{margin-top:.9rem;padding:.85rem;background:#ffffff;border-radius:.85rem;border:1px solid #e0f2fe}\
.bubbles-word-row{display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;margin-top:.7rem}\
.bubbles-word-row input{flex:1;min-width:190px;border:1px solid #cbd5e1;border-radius:.7rem;padding:.7rem;font-size:1rem}\
.bubbles-status{font-size:.95rem;color:#475569;font-weight:700;margin-top:.7rem}\
@media(min-width:780px){.bubbles-preset-grid{grid-template-columns:1.1fr .9fr}}\
@media(max-width:650px){.bubbles-preset-buttons button,.bubbles-preset-actions button,.bubbles-word-actions button{width:100%}.bubbles-word-row input{width:100%;min-width:0}}";
    document.head.appendChild(style);
  }

  function getCurrentVocabWords() {
    const lesson = currentLessonSafe();
    if (lesson && Array.isArray(lesson.vocab) && lesson.vocab.length) return lesson.vocab;
    const vocabText = byId("vocabList") ? byId("vocabList").textContent : "";
    return vocabText.split(/[^a-zA-Z'-]+/).filter(function (word, index, arr) {
      return word && arr.indexOf(word) === index;
    }).slice(0, 8);
  }

  function explainWord(rawWord, speakNow) {
    const word = String(rawWord || "").toLowerCase().replace(/[^a-z'-]/g, "").trim();
    if (!word) {
      const msg = "Type or choose a word. Bubbles will explain it in simple words.";
      setCoach(msg, speakNow);
      return;
    }
    const definition = fallbackDefinitions[word] || (word + " is one of today’s reading words. Look at the sentence around the word. The nearby words can help you understand it.");
    const example = "Example: I can read the word " + word + " slowly and look for clues.";
    const message = "The word is " + word + ". " + definition + " " + example;
    setCoach(message, speakNow, true);
  }

  function readStorySlowly() {
    const text = currentStoryText();
    if (!text) {
      setCoach("I do not see the story yet. Try choosing a day first.", true);
      return;
    }
    speak(text, { slow: true });
  }

  function readOneSentence() {
    const text = currentStoryText();
    const sentence = text.split(/(?<=[.!?])\s+/).find(Boolean) || text;
    if (!sentence) {
      setCoach("I do not see a sentence yet. Try choosing a day first.", true);
      return;
    }
    speak(sentence, { slow: true });
  }

  function answer(key) {
    const text = coachAnswers[key] || coachAnswers.start;
    setCoach(text, true);
  }

  function buildWordButtons(panel) {
    const holder = panel.querySelector("#bubblesWordButtons");
    if (!holder) return;
    const words = getCurrentVocabWords();
    holder.innerHTML = "";
    words.slice(0, 8).forEach(function (word) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = word;
      button.setAttribute("data-bubbles-word", word);
      holder.appendChild(button);
    });
    if (!words.length) {
      holder.innerHTML = "<p>Choose a lesson to load today’s words.</p>";
    }
  }

  function addPanel() {
    if (byId("bubblesPresetPanel")) return;
    const target = document.querySelector(".coach-box") || document.querySelector(".bubbles-card") || document.querySelector(".lesson-card");
    if (!target) return;

    addStyles();
    const panel = document.createElement("section");
    panel.id = "bubblesPresetPanel";
    panel.className = "bubbles-preset-panel";
    panel.setAttribute("aria-label", "Bubbles free voice reading coach");
    panel.innerHTML = "<h3>🫧 Bubbles Free Voice Coach</h3><p>Free voice tutoring on this device. No paid AI, no account, no tracking. Choose a button and Bubbles will speak.</p><div class='bubbles-preset-grid'><div><h4>Reading help</h4><div class='bubbles-preset-buttons'><button type='button' data-bubbles-answer='start'>Where should I start?</button><button type='button' data-bubbles-answer='hard'>Reading feels hard</button><button type='button' data-bubbles-answer='hint'>Give me a hint</button><button type='button' data-bubbles-answer='proof'>How do I find proof?</button><button type='button' data-bubbles-answer='reread'>Help me reread</button><button type='button' data-bubbles-answer='adult'>Can adults use this?</button></div><div id='bubblesPresetAnswer' class='bubbles-preset-answer' aria-live='polite'>Pick a question and I will help.</div><div class='bubbles-preset-actions'><button type='button' id='bubblesReadStorySlow'>🔊 Read story slowly</button><button type='button' id='bubblesReadSentence'>🔊 Read first sentence</button><button type='button' id='bubblesRepeatVoice'>🔁 Repeat Bubbles</button><button type='button' id='bubblesStopVoice' class='secondary'>Stop voice</button></div></div><div><h4>Word helper</h4><p>Choose a lesson word or type a word.</p><div id='bubblesWordButtons' class='bubbles-word-actions'></div><div class='bubbles-word-row'><input id='bubblesWordInput' type='text' placeholder='Type a word' aria-label='Type a word for Bubbles to explain'><button type='button' id='bubblesExplainTyped'>Explain word</button></div><div class='bubbles-word-box'>Tip: good readers use nearby words as clues.</div></div></div><p id='bubblesVoiceStatus' class='bubbles-status' aria-live='polite'>Voice ready after you tap a button.</p>";
    target.insertAdjacentElement("afterend", panel);

    panel.addEventListener("click", function (event) {
      const answerButton = event.target.closest("[data-bubbles-answer]");
      if (answerButton) answer(answerButton.getAttribute("data-bubbles-answer"));

      const wordButton = event.target.closest("[data-bubbles-word]");
      if (wordButton) explainWord(wordButton.getAttribute("data-bubbles-word"), true);
    });

    const readSlow = byId("bubblesReadStorySlow");
    const readSentence = byId("bubblesReadSentence");
    const repeat = byId("bubblesRepeatVoice");
    const stop = byId("bubblesStopVoice");
    const explainTyped = byId("bubblesExplainTyped");
    const wordInput = byId("bubblesWordInput");

    if (readSlow) readSlow.addEventListener("click", readStorySlowly);
    if (readSentence) readSentence.addEventListener("click", readOneSentence);
    if (repeat) repeat.addEventListener("click", function () { speak(lastSpokenText || currentCoachText()); });
    if (stop) stop.addEventListener("click", stopVoice);
    if (explainTyped) explainTyped.addEventListener("click", function () { explainWord(wordInput ? wordInput.value : "", true); });
    if (wordInput) wordInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") explainWord(wordInput.value, true);
    });

    buildWordButtons(panel);
    document.addEventListener("change", function (event) {
      if (event.target && event.target.id === "daySelect") {
        setTimeout(function () { buildWordButtons(panel); }, 300);
      }
    });
    setTimeout(function () { buildWordButtons(panel); }, 900);
  }

  if (window.speechSynthesis && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = function () {
      speechReady = true;
      setStatus("Voice ready.");
    };
  }

  window.ReadEasyBubblesAnswer = answer;
  window.ReadEasyBubblesSpeak = speak;
  window.ReadEasyBubblesStop = stopVoice;
  window.ReadEasyBubblesExplainWord = explainWord;

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addPanel);
  else addPanel();
})();
