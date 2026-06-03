function setAudioStatus(message) {
  if (typeof coachMessage !== "undefined" && coachMessage) {
    coachMessage.textContent = message;
  }
}

const READEASY_VOICE_KEY = "readEasyPreferredVoice";
let readEasyAudioSession = 0;
let readEasyAudioActive = false;
let readEasyPreferredVoice = null;

function getReadEasyVoiceList() {
  if (!window.speechSynthesis || !window.speechSynthesis.getVoices) return [];
  return window.speechSynthesis.getVoices() || [];
}

function scoreReadEasyVoice(voice) {
  if (!voice || !voice.name) return -100;

  const name = voice.name.toLowerCase();
  const lang = (voice.lang || "").toLowerCase();
  let score = 0;

  if (lang.startsWith("en-us")) score += 60;
  else if (lang.startsWith("en-gb") || lang.startsWith("en-ca") || lang.startsWith("en-au")) score += 42;
  else if (lang.startsWith("en")) score += 30;
  else score -= 90;

  // Warm classic reading-coach preference: calm, clear, reassuring, parent-like.
  if (name.includes("jenny")) score += 165;
  if (name.includes("aria")) score += 140;
  if (name.includes("samantha")) score += 120;
  if (name.includes("victoria")) score += 105;
  if (name.includes("zira")) score += 95;
  if (name.includes("karen")) score += 90;
  if (name.includes("susan")) score += 78;
  if (name.includes("google us english")) score += 68;
  if (name.includes("microsoft")) score += 24;
  if (name.includes("natural")) score += 50;
  if (name.includes("neural")) score += 45;
  if (name.includes("online")) score += 24;
  if (name.includes("female") || name.includes("woman")) score += 28;
  if (voice.localService) score += 10;

  // These can work, but usually feel flatter or less nurturing for young/new readers.
  if (name.includes("david")) score -= 50;
  if (name.includes("mark")) score -= 38;
  if (name.includes("guy")) score -= 30;
  if (name.includes("male")) score -= 24;
  if (name.includes("compact")) score -= 24;

  return score;
}

function getSavedVoiceName() {
  try {
    return localStorage.getItem(READEASY_VOICE_KEY) || "";
  } catch (error) {
    return "";
  }
}

function saveVoiceName(voice) {
  if (!voice || !voice.name) return;
  try {
    localStorage.setItem(READEASY_VOICE_KEY, voice.name);
  } catch (error) {
    // Private browsing may block storage. The voice still works without saving.
  }
}

function getReadableVoice() {
  const voices = getReadEasyVoiceList();
  if (!voices.length) return null;

  const savedVoiceName = getSavedVoiceName();
  const savedVoice = savedVoiceName ? voices.find(voice => voice.name === savedVoiceName) : null;
  if (savedVoice) return savedVoice;

  const englishVoices = voices.filter(voice => voice.lang && voice.lang.toLowerCase().startsWith("en"));
  const candidates = englishVoices.length ? englishVoices : voices;
  const bestVoice = candidates.slice().sort((a, b) => scoreReadEasyVoice(b) - scoreReadEasyVoice(a))[0] || null;

  if (bestVoice) saveVoiceName(bestVoice);
  return bestVoice;
}

function warmVoiceList() {
  if (!window.speechSynthesis) return;
  readEasyPreferredVoice = getReadableVoice();
}

function splitReadEasySentences(text) {
  return text
    .replace(/\s+/g, " ")
    .trim()
    .match(/[^.!?]+[.!?]+|[^.!?]+$/g)
    ?.map(sentence => sentence.trim())
    .filter(Boolean) || [];
}

function getCurrentReadingLevelName() {
  if (typeof lessons === "undefined" || typeof currentLesson === "undefined") return "Level A";
  return lessons[currentLesson] && lessons[currentLesson].level ? lessons[currentLesson].level : "Level A";
}

function getWarmReadingSettings(sentence, sentenceIndex, totalSentences) {
  const level = getCurrentReadingLevelName();
  const isQuestion = /\?$/.test(sentence);
  const isExclamation = /!$/.test(sentence);
  const isLongSentence = sentence.split(" ").length > 14;
  const isOpeningSentence = sentenceIndex === 0;
  const isClosingSentence = sentenceIndex === totalSentences - 1;

  // Warm, patient, classic family-reading feel. Not a character copy.
  let rate = 0.72;
  let pitch = 1.08;

  if (level.includes("Level A")) rate = 0.66;
  else if (level.includes("Level B")) rate = 0.70;
  else if (level.includes("Level C")) rate = 0.74;
  else if (level.includes("Level D")) rate = 0.77;

  if (isLongSentence) rate -= 0.045;
  if (isOpeningSentence) {
    rate -= 0.025;
    pitch += 0.025;
  }
  if (isClosingSentence) {
    rate -= 0.02;
    pitch -= 0.015;
  }
  if (isQuestion) pitch += 0.09;
  if (isExclamation) pitch += 0.055;

  return {
    rate: Math.max(0.60, Math.min(rate, 0.82)),
    pitch: Math.max(0.98, Math.min(pitch, 1.18)),
    volume: 1
  };
}

function getSentencePause(sentence, sentenceIndex, totalSentences) {
  let pause = 520;

  if (/,|;|:/.test(sentence)) pause += 90;
  if (/\?$/.test(sentence)) pause += 160;
  if (sentence.split(" ").length <= 6) pause += 80;
  if (sentenceIndex === 0) pause += 80;
  if (sentenceIndex === totalSentences - 1) pause = 0;

  return pause;
}

function buildUtterance(sentence, voice, sentenceIndex, totalSentences) {
  const speech = new SpeechSynthesisUtterance(sentence);
  const settings = getWarmReadingSettings(sentence, sentenceIndex, totalSentences);

  speech.rate = settings.rate;
  speech.pitch = settings.pitch;
  speech.volume = settings.volume;
  speech.lang = voice && voice.lang ? voice.lang : "en-US";
  if (voice) speech.voice = voice;

  return speech;
}

function stopReadEasyAudio(message) {
  readEasyAudioSession++;
  readEasyAudioActive = false;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (message) setAudioStatus(message);
}

function speakSentenceQueue(sentences, voice, onStart, onEnd) {
  const sessionId = ++readEasyAudioSession;
  let sentenceIndex = 0;
  let started = false;

  readEasyAudioActive = true;
  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();

  const speakNextSentence = () => {
    if (!readEasyAudioActive || sessionId !== readEasyAudioSession) return;

    if (sentenceIndex >= sentences.length) {
      readEasyAudioActive = false;
      setAudioStatus("Good reading. Now answer by finding proof in the story.");
      if (typeof onEnd === "function") onEnd();
      return;
    }

    const sentence = sentences[sentenceIndex];
    const speech = buildUtterance(sentence, voice, sentenceIndex, sentences.length);

    speech.onstart = () => {
      if (!started) {
        started = true;
        setAudioStatus(
          voice
            ? `Warm Read Aloud is using ${voice.name}. Listen to one calm sentence at a time.`
            : "Warm Read Aloud is reading one calm sentence at a time."
        );
        if (typeof onStart === "function") onStart();
      }
    };

    speech.onend = () => {
      if (!readEasyAudioActive || sessionId !== readEasyAudioSession) return;
      const pause = getSentencePause(sentence, sentenceIndex, sentences.length);
      sentenceIndex++;
      window.setTimeout(speakNextSentence, pause);
    };

    speech.onerror = () => {
      if (sessionId !== readEasyAudioSession) return;
      readEasyAudioActive = false;
      setAudioStatus("Read Aloud was blocked or stopped. Check volume, then tap Read Aloud again.");
    };

    window.speechSynthesis.speak(speech);
  };

  window.setTimeout(speakNextSentence, 100);
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

  if (readEasyAudioActive || window.speechSynthesis.speaking) {
    stopReadEasyAudio("Read Aloud stopped. Tap the button again to restart from the first sentence.");
    return false;
  }

  const sentences = splitReadEasySentences(text);
  if (!sentences.length) {
    setAudioStatus("There is no reading text ready yet. Try the button again after the story loads.");
    return false;
  }

  const startSpeech = () => {
    try {
      readEasyPreferredVoice = getReadableVoice();
      speakSentenceQueue(sentences, readEasyPreferredVoice, onStart, onEnd);
      return true;
    } catch (error) {
      setAudioStatus("Read Aloud could not start. Refresh the page, then tap the button again.");
      return false;
    }
  };

  if (getReadEasyVoiceList().length === 0) {
    setAudioStatus("Loading the reading voice. Tap Read Aloud again if it does not start.");
    window.speechSynthesis.onvoiceschanged = () => {
      warmVoiceList();
      window.speechSynthesis.onvoiceschanged = null;
      startSpeech();
    };
    window.setTimeout(startSpeech, 350);
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
    setAudioStatus("Placement reading is playing one calm sentence at a time. Listen, then answer slowly.");
  });
}

if ("speechSynthesis" in window) {
  warmVoiceList();
  window.speechSynthesis.onvoiceschanged = warmVoiceList;
}
