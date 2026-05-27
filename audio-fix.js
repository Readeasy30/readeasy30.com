function setAudioStatus(message) {
  if (typeof coachMessage !== "undefined" && coachMessage) {
    coachMessage.textContent = message;
  }
}

function getReadableVoice() {
  if (!window.speechSynthesis || !window.speechSynthesis.getVoices) return null;
  const voices = window.speechSynthesis.getVoices();
  return voices.find(voice => voice.lang && voice.lang.toLowerCase().startsWith("en")) || voices[0] || null;
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

      speech.rate = 0.82;
      speech.pitch = 1;
      speech.volume = 1;
      speech.lang = voice && voice.lang ? voice.lang : "en-US";
      if (voice) speech.voice = voice;

      speech.onstart = () => {
        setAudioStatus("Reading aloud now. Listen, then reread one sentence slowly.");
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
