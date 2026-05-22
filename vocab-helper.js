const readEasyVocabDefinitions = {
  hat: "Something people wear on their head.",
  bed: "A place where someone sleeps or rests.",
  soft: "Easy to touch. Not hard or rough.",
  cup: "A small container used for drinking.",
  water: "A clear drink people need every day.",
  slowly: "Not fast. Taking your time.",
  helps: "Gives support or makes something easier.",
  bag: "Something used to carry items.",
  thank: "A word used to show appreciation.",
  little: "Small in size.",
  gate: "A door in a fence or wall.",
  waits: "Stays in one place until something happens.",
  lunch: "A meal eaten in the middle of the day.",
  soup: "A warm liquid food eaten from a bowl.",
  table: "A piece of furniture used for eating, writing, or working.",
  rain: "Water that falls from clouds.",
  boots: "Strong shoes that cover the feet and ankles.",
  puddle: "A small pool of water on the ground.",
  sock: "Clothing worn on the foot.",
  under: "Below something.",
  beside: "Next to something.",
  book: "A set of pages with words or pictures.",
  page: "One side of a sheet in a book.",
  rests: "Stops moving or relaxes.",
  library: "A place where people can read or borrow books.",
  card: "A small piece of paper or plastic with information on it.",
  turtles: "Animals with hard shells that often live near water.",
  grocery: "Food and household items bought from a store.",
  list: "Words written down to remember things.",
  cart: "A basket on wheels used in a store.",
  "bus stop": "A place where people wait for a bus.",
  late: "After the expected time.",
  sign: "Words or symbols that give information.",
  guess: "To answer without being sure.",
  sentence: "A group of words that tells a complete idea.",
  understand: "To know what something means.",
  doctor: "A person trained to help people stay healthy.",
  nurse: "A person trained to help care for sick or injured people.",
  directions: "Steps that tell what to do.",
  note: "A short written message.",
  folder: "A cover used to hold papers.",
  visit: "To go see a place or person.",
  corner: "The place where two lines, roads, or walls meet.",
  crosswalk: "A marked place where people cross a street.",
  crossed: "Went from one side to the other.",
  rice: "A small grain often cooked and eaten as food.",
  rinsed: "Washed with water.",
  practiced: "Did something again and again to improve.",
  underlined: "Drew a line under words.",
  passage: "A short piece of reading.",
  schedule: "A plan that shows times or days.",
  copied: "Wrote or made the same information again.",
  forget: "To not remember.",
  label: "Words on a package or bottle that give information.",
  mix: "To put things together.",
  message: "Words sent or written to tell someone something.",
  carefully: "With attention and care.",
  front: "The part that faces forward.",
  garden: "A place where plants are grown.",
  weeds: "Plants growing where they are not wanted.",
  "main idea": "The most important point in a reading passage.",
  proof: "Information that shows an answer is true.",
  paragraph: "A group of sentences about one idea.",
  hiding: "Staying where others may not see you.",
  appointment: "A planned time to meet or get help.",
  refrigerator: "A machine that keeps food cold.",
  routine: "A regular way of doing something.",
  improve: "To get better at something.",
  medicine: "Something used to help a person feel better or stay healthy.",
  dose: "The amount of medicine to take.",
  careful: "Taking time to avoid mistakes.",
  permission: "Approval to do something.",
  reminded: "Helped someone remember.",
  signed: "Wrote a name to show agreement.",
  password: "A secret word or code used to enter an account.",
  urgent: "Needing quick attention.",
  deleted: "Removed or erased.",
  "online safety": "Careful habits that help protect people on the internet.",
  notice: "A written message that gives information.",
  repair: "To fix something.",
  laundry: "Clothes or a place where clothes are washed.",
  pipe: "A tube that carries water or gas.",
  clinic: "A place where people get health care.",
  form: "A paper or screen where information is filled in.",
  patient: "A person getting medical care.",
  explain: "To make something clear.",
  notebook: "A book of blank or lined pages for writing.",
  steady: "Regular and continuing.",
  practice: "Doing something again to get better."
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

  if (["main idea", "passage", "paragraph", "proof", "directions", "schedule", "form", "label"].includes(cleanWord)) {
    return "Tip: This is an important reading word. Ask what job it does in the sentence.";
  }

  if (["slowly", "carefully", "steady", "practice", "improve", "understand"].includes(cleanWord)) {
    return "Tip: This word tells how someone acts, learns, or grows.";
  }

  if (["library", "clinic", "garden", "corner", "crosswalk", "refrigerator"].includes(cleanWord)) {
    return "Tip: This word tells about a place or object in the story.";
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
