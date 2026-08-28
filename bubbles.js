(function () {
  "use strict";

  const state = {
    speaking: false,
    minimized: false,
    voice: null
  };

  const coachAnswers = [
    {
      match: /\b(hello|hi|hey)\b/i,
      answer: "Hi! I am Bubbles. I can read this page aloud, help explain a word, or help you think about what you read."
    },
    {
      match: /\b(help|what can you do)\b/i,
      answer: "Try Read this page to hear the page, or type a word and I will help you understand it. You can also ask about the main idea, a character, or a hard sentence."
    },
    {
      match: /\b(main idea|what is this about|summary|summarize)\b/i,
      answer: "Look for the big idea that the whole page keeps returning to. Ask yourself: What is the author mostly trying to teach, tell, or show me?"
    },
    {
      match: /\b(word|vocabulary|mean|definition)\b/i,
      answer: "Type one word in the box. I will give a simple explanation and help you use it in a sentence."
    },
    {
      match: /\b(read|read aloud|listen)\b/i,
      answer: "Press Read this page. I will read the page slowly. You can press Stop any time."
    },
    {
      match: /\b(stuck|hard|confus|don't understand|do not understand)\b/i,
      answer: "That is okay. Read one sentence at a time. Look for who or what the sentence is about, then look for what happened or what the writer says about it."
    }
  ];

  const simpleWords = {
    analyze: "Analyze means to look closely at something so you can understand it better.",
    compare: "Compare means to look for ways two things are alike and different.",
    conclude: "Conclude means to decide something after looking at the information.",
    context: "Context means the words and ideas around a word that help explain its meaning.",
    evidence: "Evidence means facts or details that support an idea.",
    fluency: "Fluency means reading smoothly, accurately, and with a natural voice.",
    infer: "Infer means to use clues to figure out something the writer does not say directly.",
    main: "Main means most important.",
    predict: "Predict means to make a careful guess about what may happen next.",
    summarize: "Summarize means to tell the most important parts in a short way.",
    vocabulary: "Vocabulary means the words a person knows and uses."
  };

  function textFromPage() {
    const main = document.querySelector("main");
    const source = main || document.body;
    const raw = (source && source.innerText ? source.innerText : "").replace(/\s+/g, " ").trim();
    return raw.slice(0, 5000) || "Let us read together.";
  }

  function setStatus(message) {
    const node = document.getElementById("bubbles-status");
    if (node) node.textContent = message;
  }

  function setReply(message) {
    const node = document.getElementById("bubbles-reply");
    if (node) node.textContent = message;
    setStatus("Ready to help.");
  }

  function chooseVoice() {
    if (!window.speechSynthesis) return;
    const voices = window.speechSynthesis.getVoices();
    state.voice =
      voices.find(function (voice) { return /^en(-|_)/i.test(voice.lang) && /natural|aria|zira|samantha|google/i.test(voice.name); }) ||
      voices.find(function (voice) { return /^en(-|_)/i.test(voice.lang); }) ||
      null;
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) {
      setReply("Your browser does not support read-aloud. Try a current version of Chrome, Edge, Safari, or Firefox.");
      return;
    }

    window.speechSynthesis.cancel();
    chooseVoice();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.86;
    utterance.pitch = 1;
    if (state.voice) utterance.voice = state.voice;

    utterance.onstart = function () {
      state.speaking = true;
      setStatus("Reading aloud...");
    };

    utterance.onend = function () {
      state.speaking = false;
      setStatus("Ready to help.");
    };

    utterance.onerror = function () {
      state.speaking = false;
      setStatus("Read-aloud could not start.");
    };

    window.speechSynthesis.speak(utterance);
  }

  function stopSpeaking() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    state.speaking = false;
    setStatus("Stopped reading.");
  }

  function explainWord(word) {
    const cleaned = String(word || "")
      .toLowerCase()
      .replace(/[^a-z'-]/g, "")
      .trim();

    if (!cleaned) {
      setReply("Type one word you want help with. For example: evidence, compare, infer, or summarize.");
      return;
    }

    if (simpleWords[cleaned]) {
      setReply(cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + ": " + simpleWords[cleaned]);
      return;
    }

    setReply("Let us work on “" + cleaned + ".” Read the sentence around the word. What is happening? Which nearby words give a clue? Then say the word slowly and try using it in your own short sentence.");
  }

  function answerQuestion(question) {
    const cleaned = String(question || "").trim();

    if (!cleaned) {
      setReply("Type a word or a short reading question. You can ask about the main idea, a hard word, or what to do when a sentence feels confusing.");
      return;
    }

    for (let i = 0; i < coachAnswers.length; i += 1) {
      if (coachAnswers[i].match.test(cleaned)) {
        setReply(coachAnswers[i].answer);
        return;
      }
    }

    if (/^[a-z'-]+$/i.test(cleaned)) {
      explainWord(cleaned);
      return;
    }

    setReply("Let us break that down. First, reread the sentence or paragraph. Next, name the person, place, thing, or idea it is about. Then look for the action or the most important detail. If you can, type one difficult word from the sentence.");
  }

  function buildCoach() {
    if (document.getElementById("bubbles-coach")) return;

    const root = document.createElement("aside");
    root.id = "bubbles-coach";
    root.setAttribute("aria-label", "Bubbles reading helper");
    root.innerHTML = [
      '<div id="bubbles-panel">',
      '  <div id="bubbles-heading">',
      '    <span id="bubbles-icon" aria-hidden="true">🫧</span>',
      '    <div>',
      '      <strong>Bubbles Reading Helper</strong>',
      '      <span id="bubbles-status" aria-live="polite">Ready to help.</span>',
      '    </div>',
      '    <button id="bubbles-minimize" type="button" aria-label="Minimize Bubbles">−</button>',
      '  </div>',
      '  <div id="bubbles-content">',
      '    <p id="bubbles-reply" aria-live="polite">Hi! I can read this page aloud or help with a word.</p>',
      '    <div id="bubbles-actions">',
      '      <button id="bubbles-read" type="button">Read this page</button>',
      '      <button id="bubbles-stop" type="button">Stop</button>',
      '    </div>',
      '    <label for="bubbles-input">Ask about reading or type one word</label>',
      '    <div id="bubbles-input-row">',
      '      <input id="bubbles-input" type="text" maxlength="180" autocomplete="off" placeholder="Example: What is main idea?">',
      '      <button id="bubbles-ask" type="button">Ask</button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join("");

    const style = document.createElement("style");
    style.id = "bubbles-coach-style";
    style.textContent = [
      "#bubbles-coach{position:fixed;right:16px;bottom:16px;z-index:2147483647;width:min(360px,calc(100vw - 32px));font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#102a43;}",
      "#bubbles-panel{overflow:hidden;border:2px solid #1d4ed8;border-radius:16px;background:#fff;box-shadow:0 12px 34px rgba(15,23,42,.25);}",
      "#bubbles-heading{display:flex;align-items:center;gap:10px;padding:12px;background:#eff6ff;}",
      "#bubbles-icon{font-size:27px;line-height:1;}",
      "#bubbles-heading strong{display:block;font-size:15px;color:#1e3a8a;}",
      "#bubbles-status{display:block;margin-top:2px;font-size:12px;color:#475569;}",
      "#bubbles-minimize{margin-left:auto;width:30px;height:30px;border:1px solid #93c5fd;border-radius:8px;background:#fff;color:#1d4ed8;font-size:20px;line-height:1;cursor:pointer;}",
      "#bubbles-content{padding:12px;}",
      "#bubbles-reply{min-height:58px;margin:0 0 10px;font-size:14px;line-height:1.4;}",
      "#bubbles-actions{display:flex;gap:8px;margin-bottom:10px;}",
      "#bubbles-coach button{font:inherit;cursor:pointer;}",
      "#bubbles-read,#bubbles-ask{border:0;border-radius:8px;background:#1d4ed8;color:#fff;padding:8px 10px;font-weight:700;}",
      "#bubbles-stop{border:1px solid #94a3b8;border-radius:8px;background:#fff;color:#334155;padding:8px 10px;font-weight:700;}",
      "#bubbles-content label{display:block;margin-bottom:5px;font-size:12px;font-weight:700;color:#334155;}",
      "#bubbles-input-row{display:flex;gap:7px;}",
      "#bubbles-input{min-width:0;flex:1;border:1px solid #94a3b8;border-radius:8px;padding:8px;font:inherit;font-size:14px;}",
      "#bubbles-coach.is-minimized #bubbles-content{display:none;}",
      "@media(max-width:480px){#bubbles-coach{right:10px;bottom:10px;width:calc(100vw - 20px);}#bubbles-actions{flex-wrap:wrap;}}"
    ].join("");

    document.head.appendChild(style);
    document.body.appendChild(root);

    document.getElementById("bubbles-read").addEventListener("click", function () {
      speak(textFromPage());
    });

    document.getElementById("bubbles-stop").addEventListener("click", stopSpeaking);

    document.getElementById("bubbles-ask").addEventListener("click", function () {
      const input = document.getElementById("bubbles-input");
      answerQuestion(input.value);
      input.value = "";
      input.focus();
    });

    document.getElementById("bubbles-input").addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("bubbles-ask").click();
      }
    });

    document.getElementById("bubbles-minimize").addEventListener("click", function () {
      root.classList.toggle("is-minimized");
      const minimized = root.classList.contains("is-minimized");
      this.textContent = minimized ? "+" : "−";
      this.setAttribute("aria-label", minimized ? "Open Bubbles" : "Minimize Bubbles");
    });

    document.addEventListener("click", function (event) {
      const target = event.target.closest(".story-word, .vocab-pill, [data-read-aloud]");
      if (!target || root.contains(target)) return;
      const word = (target.textContent || "").trim();
      if (word) {
        event.preventDefault();
        explainWord(word);
      }
    });
  }

  function initialize() {
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = chooseVoice;
      chooseVoice();
    }
    buildCoach();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
}());

/**
 * ReadEasy30 - Bubbles Automated Verbal Mobile Teacher Assistant
 * Optimized for Mobile Safari, Android Chrome, and Accessibility/Special-Ed Tapping Targets.
 */

class BubblesVoiceCoach {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.currentStoryText = "";
    this.synth = window.speechSynthesis;
    
    // Core Elements for Speech Recognition (Using Webkit Prefix for Mobile iOS support)
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.setupRecognitionSettings();
    } else {
      console.warn("Verbal Input not natively supported on this browser profile.");
    }
  }

  // Optimize speech settings specifically for young learners and special-ed tempos
  setupRecognitionSettings() {
    this.recognition.continuous = false; // Stops after every utterance to give immediate feedback
    this.recognition.interimResults = false; // Only finalize clear matches
    this.recognition.lang = 'en-US';

    this.recognition.onstart = () => {
      this.isListening = true;
      this.updateCoachUI(true);
    };

    this.recognition.onerror = (event) => {
      console.error("Speech Assistant recognition error:", event.error);
      this.stopListening();
    };

    this.recognition.onend = () => {
      this.isListening = false;
      this.updateCoachUI(false);
    };

    this.recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase().trim();
      this.verifyStudentReading(spokenText);
    };
  }

  // Triggers the mobile device microphone to listen safely
  startListening(expectedText = "") {
    if (!this.recognition || this.isListening) return;
    this.currentStoryText = expectedText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    
    try {
      this.recognition.start();
    } catch (e) {
      console.error("Failed to cycle microphone activation path:", e);
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  }

  // Evaluates spoken text against current word targeting logic
  verifyStudentReading(spokenText) {
    console.log(`Bubbles Coach Heard: "${spokenText}" | Expected: "${this.currentStoryText}"`);
    
    // Simple, robust verification loop
    if (spokenText === this.currentStoryText || this.currentStoryText.includes(spokenText)) {
      this.speakFeedback("Excellent reading! Let's keep moving forward!");
      this.triggerSuccessAnimation();
    } else {
      // Gentle phonetic correction scaffolding for special education paths
      this.speakFeedback(`So close! Let's try that one more time together.`);
    }
  }

  // Calibrated warm classic reading coach parameters
  speakFeedback(textToSpeak) {
    if (!this.synth) return;
    this.synth.cancel(); // Terminate lingering active playback threads

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const voices = this.synth.getVoices();
    
    // Fallback prioritizing warmer premium natural accessibility voices on modern OS layers
    const nativeCoachVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Samantha') || v.lang === 'en-US');
    if (nativeCoachVoice) utterance.voice = nativeCoachVoice;

    utterance.rate = 0.85; // Slightly slower tempo for processing cadence support
    utterance.pitch = 1.05; // Friendly, neutral instructional resonance
    
    this.synth.speak(utterance);
  }

  updateCoachUI(active) {
    const coachButton = document.getElementById('bubbles-coach-trigger');
    if (!coachButton) return;
    if (active) {
      coachButton.classList.add('bg-green-500', 'animate-pulse');
      coachButton.innerText = "🎤 Bubbles is Listening...";
    } else {
      coachButton.classList.remove('bg-green-500', 'animate-pulse');
      coachButton.innerText = "✨ Tap to Read to Bubbles";
    }
  }

  triggerSuccessAnimation() {
    // Interface feedback pipeline hooks (dispatched back to learner-mode.js/app.js state cascades)
    const event = new CustomEvent('bubbles-lesson-passed', { detail: { timestamp: Date.now() } });
    window.dispatchEvent(event);
  }
}

// Global initialization logic linking the coach instance safely across document fragments
document.addEventListener('DOMContentLoaded', () => {
  window.BubblesCoachInstance = new BubblesVoiceCoach();
});
