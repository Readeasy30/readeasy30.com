const bubblesHomeAnswers = [
  {
    label: "What does ReadEasy30 do?",
    keywords: ["what", "do", "readeasy", "site", "help"],
    answer: "ReadEasy30 helps readers practice with short stories, simple questions, read aloud help, and calm coaching. Start with one lesson. Go slowly."
  },
  {
    label: "Where should I start?",
    keywords: ["start", "begin", "first", "placement", "level"],
    answer: "Start with the placement check. It helps choose a calm starting level. You can also choose Level A, B, C, or D yourself."
  },
  {
    label: "What if reading feels hard?",
    keywords: ["hard", "stuck", "struggle", "difficult", "can't", "cannot"],
    answer: "Slow down. Read one sentence at a time. Use Read Aloud. Then look back at the story to find proof for each answer."
  },
  {
    label: "Can adults use this?",
    keywords: ["adult", "adults", "older", "grown", "esl"],
    answer: "Yes. ReadEasy30 is for children, adults, ESL learners, older learners, parents, tutors, and anyone rebuilding reading confidence."
  },
  {
    label: "How long should I practice?",
    keywords: ["long", "time", "minutes", "practice", "daily"],
    answer: "A good session can be ten to thirty minutes. Stop while the reader is still calm. Small daily practice works better than pressure."
  },
  {
    label: "What is proof in the story?",
    keywords: ["proof", "answer", "find", "story", "evidence"],
    answer: "Proof means the words in the story that show the answer. Do not guess. Go back, reread, and point to the words that prove it."
  }
];

function getBubblesElements() {
  return {
    input: document.getElementById("bubblesQuestionInput"),
    answer: document.getElementById("bubblesAnswer"),
    status: document.getElementById("bubblesVoiceStatus"),
    face: document.getElementById("bubblesFace")
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

function getBubblesVoice() {
  if (!window.speechSynthesis || !window.speechSynthesis.getVoices) return null;

  const voices = window.speechSynthesis.getVoices();
  const englishVoices = voices.filter(voice => voice.lang && voice.lang.toLowerCase().startsWith("en"));
  const candidates = englishVoices.length ? englishVoices : voices;

  return candidates
    .slice()
    .sort((a, b) => scoreBubblesVoice(b) - scoreBubblesVoice(a))[0] || null;
}

function speakBubbles(text) {
  const { status, face } = getBubblesElements();

  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    if (status) status.textContent = "Voice is not supported in this browser. You can still read Bubbles' answer.";
    return;
  }

  const startSpeech = () => {
    const speech = new SpeechSynthesisUtterance(text);
    const voice = getBubblesVoice();

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
      if (status) status.textContent = "Ask Bubbles another reading question.";
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

function findBubblesAnswer(questionText) {
  const question = (questionText || "").toLowerCase();

  if (!question.trim()) {
    return "Ask me about starting, practice time, reading levels, Read Aloud, or what to do when reading feels hard.";
  }

  const scoredAnswers = bubblesHomeAnswers.map(item => {
    const score = item.keywords.reduce((total, keyword) => total + (question.includes(keyword) ? 1 : 0), 0);
    return { ...item, score };
  }).sort((a, b) => b.score - a.score);

  if (scoredAnswers[0] && scoredAnswers[0].score > 0) {
    return scoredAnswers[0].answer;
  }

  return "I can answer simple ReadEasy30 questions. Try asking: Where should I start? What if reading feels hard? How long should I practice?";
}

function askBubbles(questionText) {
  const { input, answer } = getBubblesElements();
  const question = questionText || (input ? input.value : "");
  const reply = findBubblesAnswer(question);

  if (answer) answer.textContent = reply;
  speakBubbles(reply);
}

function introduceBubbles() {
  const intro = "Hi, I am Bubbles. I help readers slow down, reread, and find proof in the story. Start with one calm lesson.";
  const { answer } = getBubblesElements();
  if (answer) answer.textContent = intro;
  speakBubbles(intro);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-bubbles-question]").forEach(button => {
    button.addEventListener("click", () => askBubbles(button.getAttribute("data-bubbles-question")));
  });

  const input = document.getElementById("bubblesQuestionInput");
  if (input) {
    input.addEventListener("keydown", event => {
      if (event.key === "Enter") askBubbles();
    });
  }
});
