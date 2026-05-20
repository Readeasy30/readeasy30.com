const readEasyVocabDefinitions = {
  park: "A place outside where people can walk, play, or rest.",
  friendly: "Kind and nice to others.",
  saw: "Looked at something in the past.",
  baked: "Cooked food using heat in an oven.",
  grandmother: "The mother of your mother or father.",
  kitchen: "A room where food is cooked.",
  helped: "Gave support or made something easier.",
  carry: "To hold something and move it from one place to another.",
  groceries: "Food and household items bought from a store.",
  simple: "Easy to understand or do.",
  slowly: "Not fast. Taking your time.",
  think: "Use your mind to understand something.",
  library: "A place where people can read or borrow books.",
  return: "To bring something back.",
  animals: "Living creatures like dogs, cats, birds, or horses.",
  practiced: "Did something again and again to improve.",
  confident: "Feeling sure that you can do something.",
  noticed: "Saw or became aware of something.",
  routine: "A regular way of doing something.",
  passage: "A short piece of reading.",
  "main idea": "The most important point in a reading passage.",
  improve: "To get better at something."
};

function getVocabDefinition(word) {
  const cleanWord = word.trim().toLowerCase();
  return readEasyVocabDefinitions[cleanWord] || "Read the sentence again and use nearby words to help understand this word.";
}

function createVocabHelper() {
  if (document.getElementById("vocabHelperBox")) return;

  const vocabBox = document.querySelector(".vocab-box");
  if (!vocabBox) return;

  const helperBox = document.createElement("div");
  helperBox.id = "vocabHelperBox";
  helperBox.className = "vocab-helper-box";
  helperBox.innerHTML = `
    <h3>Word Helper</h3>
    <p id="vocabHelperText">Tap a word above to see a simple meaning.</p>
    <p id="vocabHelperTip" class="vocab-helper-tip">Tip: Use the sentence around the word to help understand it.</p>
  `;

  vocabBox.appendChild(helperBox);
  injectVocabHelperStyles();
}

function attachVocabEvents() {
  createVocabHelper();

  const pills = document.querySelectorAll(".vocab-pill");
  const helperText = document.getElementById("vocabHelperText");
  const helperTip = document.getElementById("vocabHelperTip");

  pills.forEach(pill => {
    if (pill.dataset.vocabReady === "true") return;

    pill.dataset.vocabReady = "true";
    pill.setAttribute("role", "button");
    pill.setAttribute("tabindex", "0");
    pill.title = "Tap for word meaning";

    const showMeaning = () => {
      const word = pill.textContent.trim();

      document.querySelectorAll(".vocab-pill").forEach(item => {
        item.classList.remove("active-vocab-pill");
      });

      pill.classList.add("active-vocab-pill");

      if (helperText) {
        helperText.innerHTML = `<strong>${word}:</strong> ${getVocabDefinition(word)}`;
      }

      if (helperTip) {
        helperTip.textContent = getVocabTip(word);
      }
    };

    pill.addEventListener("click", showMeaning);
    pill.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showMeaning();
      }
    });
  });
}

function getVocabTip(word) {
  const cleanWord = word.trim().toLowerCase();

  if (["main idea", "passage", "routine"].includes(cleanWord)) {
    return "Tip: This is a stronger reading word. Ask: What does this word do in the sentence?";
  }

  if (["slowly", "think", "confident", "improve"].includes(cleanWord)) {
    return "Tip: This word tells how someone acts, feels, or grows.";
  }

  if (["park", "kitchen", "library"].includes(cleanWord)) {
    return "Tip: This word tells where something happens.";
  }

  return "Tip: Reread the sentence and look for clues before and after the word.";
}

function injectVocabHelperStyles() {
  if (document.getElementById("vocabHelperStyles")) return;

  const style = document.createElement("style");
  style.id = "vocabHelperStyles";
  style.textContent = `
    .vocab-pill{cursor:pointer;transition:transform .18s ease, box-shadow .18s ease}.vocab-pill:hover,.vocab-pill:focus{transform:translateY(-1px);box-shadow:0 3px 10px rgba(0,0,0,.08);outline:none}.active-vocab-pill{background:#ecfeff!important;border-color:#06b6d4!important;color:#0f7f92}.vocab-helper-box{margin-top:1rem;background:white;border:1px solid #fde68a;border-radius:.75rem;padding:.9rem}.vocab-helper-box h3{margin:0 0 .4rem}.vocab-helper-box p{margin:.35rem 0;line-height:1.7}.vocab-helper-tip{color:#854d0e;font-weight:bold}`;

  document.head.appendChild(style);
}

const vocabObserver = new MutationObserver(() => {
  attachVocabEvents();
});

window.addEventListener("load", () => {
  attachVocabEvents();

  const vocabList = document.getElementById("vocabList");
  if (vocabList) {
    vocabObserver.observe(vocabList, { childList: true, subtree: true });
  }
});
