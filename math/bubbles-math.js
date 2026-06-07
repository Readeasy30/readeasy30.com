const bubblesMathAnswers = [
  {
    label: "What does MathEasy30 do?",
    keywords: ["what", "do", "matheasy", "site", "help", "math"],
    answer: "MathEasy30 helps you practice math with short daily lessons, calm problems, and steady coaching. Start with one lesson. Go slowly."
  },
  {
    label: "Where should I start?",
    keywords: ["start", "begin", "first", "placement", "level"],
    answer: "Start with the placement check. It helps choose a good starting level. You can also choose a level yourself from Level A to Level H."
  },
  {
    label: "What if math feels hard?",
    keywords: ["hard", "stuck", "struggle", "difficult", "can't", "cannot", "wrong", "confused"],
    answer: "Slow down. Read the problem again. Look at the hint. Try one step at a time. It is okay to get it wrong. That is what practice is for."
  },
  {
    label: "Can adults use this?",
    keywords: ["adult", "adults", "older", "grown", "esl", "tutor", "parent"],
    answer: "Yes. MathEasy30 is for children, adults, ESL learners, older learners, parents, tutors, and anyone rebuilding math confidence."
  },
  {
    label: "How long should I practice?",
    keywords: ["long", "time", "minutes", "practice", "daily"],
    answer: "A good session can be ten to thirty minutes. Stop while the learner is still calm. Small daily practice works better than pressure."
  },
  {
    label: "How do I check my answer?",
    keywords: ["check", "answer", "submit", "button", "how"],
    answer: "Type your answer in the box and tap Check My Answers. Bubbles will tell you how you did and give you a tip if you need it."
  },
  {
    label: "What is a good hint strategy?",
    keywords: ["hint", "strategy", "tip", "approach", "method"],
    answer: "Read the problem slowly. Look at the numbers. Ask: what operation do I need? Add, subtract, multiply, or divide. Then try one step at a time."
  },
  {
    label: "What if I get it wrong?",
    keywords: ["wrong", "mistake", "incorrect", "error", "fail"],
    answer: "That is good practice. Mistakes show what to work on next. Read the tip, look at your work, and try again. You are learning, not racing."
  }
];

function getMathBubblesElements() {
  return {
    input: document.getElementById("bubblesMathInput"),
    answer: document.getElementById("bubblesMathAnswer"),
    status: document.getElementById("bubblesMathVoiceStatus"),
    face: document.getElementById("bubblesMathFace")
  };
}

function scoreBubblesVoice(voice) {
  if (!voice || !voice.name) return -100;
  const name = voice.name.toLowerCase();
  const lang = (voice.lang || "").toLowerCase();
  let score = 0;

  if (lang.startsWith("en-us")) score += 45;
  else if (lang.startsWith("en-gb") || lang.startsWith("en-ca") || lang.startsWith("en-au")) score += 35;
  else if (lang.startsWith("en")) score += 25;
  else score -= 75;

  if (name.includes("victoria")) score += 130;
  if (name.includes("samantha")) score += 62;
  if (name.includes("karen")) score += 58;
  if (name.includes("zira")) score += 55;
  if (name.includes("susan")) score += 50;
  if (name.includes("aria")) score += 48;
  if (name.includes("jenny")) score += 48;
  if (name.includes("google us english")) score += 45;
  if (name.includes("natural")) score += 35;
  if (name.includes("neural")) score += 35;
  if (name.includes("online")) score += 20;
  if (name.includes("female")) score += 30;
  if (name.includes("woman")) score += 25;
  if (name.includes("david")) score -= 40;
  if (name.includes("mark")) score -= 35;
  if (name.includes("guy")) score -= 30;
  if (name.includes("male")) score -= 30;
  if (name.includes("compact")) score -= 20;

  return score;
}

function getMathBubblesVoice() {
  if (!window.speechSynthesis || !window.speechSynthesis.getVoices) return null;
  const voices = window.speechSynthesis.getVoices();
  const englishVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
  const candidates = englishVoices.length ? englishVoices : voices;
  return candidates.slice().sort((a, b) => scoreBubblesVoice(b) - scoreBubblesVoice(a))[0] || null;
}

function speakMathBubbles(text) {
  const { status, face } = getMathBubblesElements();

  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    if (status) status.textContent = "Voice is not supported in this browser. You can still read Bubbles' answer.";
    return;
  }

  const startSpeech = () => {
    const speech = new SpeechSynthesisUtterance(text);
    const voice = getMathBubblesVoice();
    speech.rate = 0.78;
    speech.pitch = 1.08;
    speech.volume = 1;
    speech.lang = voice && voice.lang ? voice.lang : "en-US";
    if (voice) speech.voice = voice;

    speech.onstart = () => {
      if (status) status.textContent = voice ? `Bubbles is speaking with ${voice.name}.` : "Bubbles is speaking.";
      if (face) face.classList.add("bubbles-speaking");
    };
    speech.onend = () => {
      if (status) status.textContent = "Ask Bubbles another math question.";
      if (face) face.classList.remove("bubbles-speaking");
    };
    speech.onerror = () => {
      if (status) status.textContent = "Voice was blocked or stopped. Check sound, then try again.";
      if (face) face.classList.remove("bubbles-speaking");
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();
    setTimeout(() => window.speechSynthesis.speak(speech), 60);
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    if (status) status.textContent = "Loading Bubbles' voice. Tap again if it does not start.";
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      startSpeech();
    };
    setTimeout(startSpeech, 300);
    return;
  }

  startSpeech();
}

function findMathBubblesAnswer(questionText) {
  const question = (questionText || "").toLowerCase();
  if (!question.trim()) {
    return "Ask me about starting math practice, choosing a level, what to do when math feels hard, or how long to practice.";
  }
  const scored = bubblesMathAnswers.map(item => {
    const score = item.keywords.reduce((total, kw) => total + (question.includes(kw) ? 1 : 0), 0);
    return { ...item, score };
  }).sort((a, b) => b.score - a.score);

  if (scored[0] && scored[0].score > 0) return scored[0].answer;
  return "I can answer simple MathEasy30 questions. Try asking: Where should I start? What if math feels hard? How long should I practice?";
}

function askMathBubbles(questionText) {
  const { input, answer } = getMathBubblesElements();
  const question = questionText || (input ? input.value : "");
  const reply = findMathBubblesAnswer(question);
  if (answer) answer.textContent = reply;
  speakMathBubbles(reply);
}

function introduceMathBubbles() {
  const intro = "Hi, I am Bubbles. I help math learners slow down, read carefully, and try one step at a time. Start with one calm lesson.";
  const { answer } = getMathBubblesElements();
  if (answer) answer.textContent = intro;
  speakMathBubbles(intro);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-bubbles-math-question]").forEach(button => {
    button.addEventListener("click", () => askMathBubbles(button.getAttribute("data-bubbles-math-question")));
  });
  const input = document.getElementById("bubblesMathInput");
  if (input) {
    input.addEventListener("keydown", event => {
      if (event.key === "Enter") askMathBubbles();
    });
  }
});
