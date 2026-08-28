(function() {
    const coachState = { voice: null, rate: 0.85, pitch: 1.05, isSpeaking: false };
    function initVoice() {
        if (!window.speechSynthesis) return;
        const voices = window.speechSynthesis.getVoices();
        coachState.voice = voices.find(v => v.name.includes('Natural') && v.lang.startsWith('en')) || 
                           voices.find(v => v.name.includes('Google US English')) ||
                           voices.find(v => v.lang.startsWith('en')) || null;
    }
    if (window.speechSynthesis) {
        if (window.speechSynthesis.onvoiceschanged !== undefined) { window.speechSynthesis.onvoiceschanged = initVoice; }
        initVoice();
    }
    function injectCoachUI() {
        if (document.getElementById('bubbles-voice-coach')) return;
        const coachContainer = document.createElement('div');
        coachContainer.id = 'bubbles-voice-coach';
        coachContainer.style.position = 'fixed';
        coachContainer.style.bottom = '20px';
        coachContainer.style.right = '20px';
        coachContainer.style.zIndex = '10000';
        coachContainer.innerHTML = `
            <div id="bubbles-avatar-card" style="background: #ffffff; border: 2px solid #1a365d; border-radius: 16px; padding: 12px 16px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); display: flex; align-items: center; gap: 12px; max-width: 320px;">
                <div id="bubbles-visual-indicator" style="width: 44px; height: 44px; background: #3182ce; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px;">🎈</div>
                <div style="flex-grow: 1;">
                    <div style="font-weight: 700; color: #1a365d; font-size: 14px; font-family: sans-serif;">Bubbles Voice Coach</div>
                    <div id="bubbles-status-text" style="color: #4a5568; font-size: 12px; font-family: sans-serif; margin-top: 2px;">Ready to read together!</div>
                </div>
                <button id="bubbles-speak-btn" style="background: #3182ce; border: none; color: white; font-weight: bold; padding: 6px 12px; border-radius: 8px; cursor: pointer; font-size: 12px;">Listen</button>
            </div>
        `;
        document.body.appendChild(coachContainer);
        setupEventListeners();
    }
    function setupEventListeners() {
        const speakBtn = document.getElementById('bubbles-speak-btn');
        document.addEventListener('click', function(e) {
            const targetElement = e.target.closest('.story-word, .vocab-pill, [data-read-aloud]');
            if (targetElement) { e.preventDefault(); speakText(targetElement.innerText || targetElement.textContent); }
        });
        speakBtn.addEventListener('click', () => {
            const visibleText = document.querySelector('h1, p')?.innerText || "Let's read this page out loud together.";
            speakText(visibleText);
        });
    }
    function speakText(text) {
        if (!window.speechSynthesis || coachState.isSpeaking) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        if (coachState.voice) utterance.voice = coachState.voice;
        utterance.rate = coachState.rate;
        utterance.pitch = coachState.pitch;
        const status = document.getElementById('bubbles-status-text');
        utterance.onstart = () => { coachState.isSpeaking = true; status.innerText = "Listening..."; };
        utterance.onend = () => { coachState.isSpeaking = false; status.innerText = "Ready to read together!"; };
        window.speechSynthesis.speak(utterance);
    }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', injectCoachUI); } else { injectCoachUI(); }
})();
