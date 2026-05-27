function setAudioStatus(message) {
  if (typeof coachMessage !== "undefined" && coachMessage) {
    coachMessage.textContent = message;
  }
}

function scoreReadEasyVoice(voice) {
  if (!voice || !voice.name) return -100;

  const name = voice.name.toLowerCase();
  const lang = (voice.lang || "").toLowerCase();
  let score = 0;

  if (lang.startsWith("en-us")) score += 45;
  else if (lang.startsWith("en-gb") || lang.startsWith("en-ca") || lang.startsWith("en-au")) score += 35;
  else if (lang.startsWith("en")) score += 25;
  else score -= 75;

  // Best calm, natural female voices when the browser/device exposes them.
  if (name.includes("aria")) score += 70;
  if (name.includes("jenny")) score += 70;
  if (name.includes("samantha")) score += 62;
  if (name.includes("karen")) score += 58;
  if (name.includes("zira")) score += 55;
  if (name.includes("susan")) score += 50;
  if (name.includes("victoria")) score += 48;
  if (name.includes("google us english")) score += 45;

  // Browser wording for newer cloud/natural voices.
  if (name.includes("natural")) score += 35;
  if (name.includes("online")) score += 25;
  if (name.includes("neural")) score += 35;
  if (name.includes("premium")) score += 20;

  // Prefer female-coded names for this learning situation.
  if (name.includes("female")) score += 30;
  if (name.includes("woman")) score += 25;

  // Avoid harsher or less suitable default male/system voices when alternatives exist.
  if (name.includes("david")) score -= 40;
  if (name.includes("mark")) score -= 35;
  if (name.includes("guy")) score -= 30;
  if (name.includes("male")) score -= 30;
  if (name.includes("compact")) score -= 20;

  return score;
}

function getReadableVoice() {
  if (!window.speechSynthesis || !window.speechSynthesis.getVoices) return null;

  const voices = window.speechSynthesis.getVoices();
  const englishVoices = voices.filter(voice => voice.lang && voice.lang.toLowerCase().startsWith("en"));
  const candidates = englishVoices.length ? englishVoices : voices;

  return candidates
    .slice()
    .sort((a, b) => scoreReadEasyVoice(b) - scoreReadEasyVoice(a))[0] || null;
}

function speakReadEasyText(text, onStart, onEnd) {
  if (!text || !text.trim()) {
    setAudioStatus("There is no reading text ready yet. Try the button again after the story loads.");
    return false;
  }

  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    setAudioStatus("This browser does not support Read Aloud. Try Chrome, Edge, or Safari with sound turned on.");
    return false;
  }

  const startSpeech = () => {
    try {
      const speech = new SpeechSynthesisUtterance(text);
      const voice = getReadableVoice();

      speech.rate = 0.78;
      speech.pitch = 1.08;
      speech.volume = 1;
      speech.lang = voice && voice.lang ? voice.lang : "en-US";
      if (voice) speech.voice = voice;

      speech.onstart = () => {
        setAudioStatus("Reading aloud now in a calmer voice. Listen, then reread one sentence slowly.");
        if (typeof onStart === "function") onStart();
      };

      speech.onend = () => {
        setAudioStatus("Read Aloud finished. Now answer by finding proof in the story.");
        if (typeof onEnd === "function") onEnd();
      };

      speech.onerror = () => {
        setAudioStatus("Read Aloud was blocked or stopped. Check device volume, browser sound permission, then tap the button again.");
      };

      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();
      setTimeout(() => {
        window.speechSynthesis.speak(speech);
      }, 60);

      return true;
    } catch (error) {
      setAudioStatus("Read Aloud could not start. Refresh the page, then tap the button again.");
      return false;
    }
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    setAudioStatus("Loading the reading voice. Tap Read Aloud again if it does not start.");
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      startSpeech();
    };
    setTimeout(startSpeech, 300);
    return true;
  }

  return startSpeech();
}

function readStory() {
  const lesson = lessons[currentLesson];
  const text = lesson && lesson.story ? lesson.story : (storyText ? storyText.textContent : "");

  speakReadEasyText(text, () => {
    storyReadCount++;
    localStorage.setItem(getReadCountKey(), storyReadCount);
    updateFluencyCoach("read-aloud");
  });
}

function readPlacementStory() {
  const step = placementSteps[placementIndex];
  const text = step && step.story ? step.story : (assessmentStoryText ? assessmentStoryText.textContent : "");

  speakReadEasyText(text, () => {
    setAudioStatus("Placement reading is playing. Listen once, then answer slowly.");
  });
}
