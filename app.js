const STORAGE_KEY = "readeasy30.clean.progress.v1";
spx-tastytrade-autotrader: code-complete; needs local .env (TT_SECRET, TT_REFRESH) + a local run to confirm the live connection.
claude-seo-agent Worker: built, not deployed; needs CLAUDE_API_KEY + GOOGLE_JSON secrets set, then deploy.
README path fixes (Wholelychit/ → Readeasy30/) where not yet done.
const levelInfo = {
  A: { label: "Level A", range: [1, 30], description: "Early-reader sentences, familiar words, and beginner confidence." },
  B: { label: "Level B", range: [31, 60], description: "Longer sentences, everyday vocabulary, and stronger comprehension." },
  C: { label: "Level C", range: [61, 90], description: "Short paragraphs, sequence, main idea, and details." },
  D: { label: "Level D", range: [91, 120], description: "Practical passages with real-life reading and proof-finding." },
  E: { label: "Level E", range: [121, 150], description: "Grade 4 style passages with deeper thinking and vocabulary." },
  F: { label: "Level F", range: [151, 180], description: "Grade 5 style passages with inference, purpose, and details." },
  G: { label: "Level G", range: [181, 210], description: "Grades 6-7 practice with nonfiction, evidence, and reasoning." },
  H: { label: "Level H", range: [211, 240], description: "Grade 8 readiness with complex passages and careful explanation." }
};

const levelStarts = { A: 0, B: 30, C: 60, D: 90, E: 120, F: 150, G: 180, H: 210 };

const placementSteps = [
  { level: "A", title: "Placement Reading A", story: "Ben has a red hat. He puts the hat on his bed.", questions: ["Who has a red hat?", "What color is the hat?", "Where does Ben put the hat?"], answers: ["ben", "red", "bed"] },
  { level: "B", title: "Placement Reading B", story: "Nina packed her lunch before school. She put an apple, a sandwich, and water in her bag.", questions: ["When did Nina pack lunch?", "Name one food she packed.", "Where did she put the lunch?"], answers: ["before school", "apple|sandwich", "bag"] },
  { level: "C", title: "Placement Reading C", story: "Carlos wanted to finish his book report. He read two chapters, wrote down the main idea, and asked his sister to listen while he explained the story.", questions: ["What did Carlos want to finish?", "What did he write down?", "Who listened to him explain the story?"], answers: ["book report", "main idea", "sister"] },
  { level: "D", title: "Placement Reading D", story: "Maya noticed that reading became easier when she slowed down and looked for clues. Instead of guessing, she reread confusing sentences and used nearby words to understand new vocabulary.", questions: ["What helped reading become easier for Maya?", "What did she do instead of guessing?", "What helped her understand new vocabulary?"], answers: ["slowed down|slow", "reread", "nearby words|clues"] },
  { level: "E", title: "Placement Reading E", story: "After several weeks of practice, Devon compared two short articles about gardens. One article explained how to plant seeds, while the other described how compost helps soil hold water.", questions: ["What did Devon compare?", "What did one article explain?", "What did compost help soil do?"], answers: ["two short articles|articles", "plant seeds", "hold water"] },
  { level: "F", title: "Placement Reading F", story: "A community center changed its evening schedule because more families asked for homework help. The director added reading practice on Tuesday and math practice on Thursday so volunteers could focus on one subject at a time.", questions: ["Why did the schedule change?", "What was added on Tuesday?", "Why were subjects split by day?"], answers: ["families asked|homework help", "reading practice", "focus"] },
  { level: "G", title: "Placement Reading G", story: "The author argues that daily practice works best when it is predictable, short, and encouraging. The passage supports this idea by describing learners who improved after repeating small skills over time.", questions: ["What does the author argue?", "What three words describe the best practice?", "What evidence supports the idea?"], answers: ["daily practice", "predictable|short|encouraging", "learners improved|repeating small skills"] },
  { level: "H", title: "Placement Reading H", story: "When readers analyze a practical text, they must separate the main instruction from extra details. This skill matters because forms, notices, and workplace messages often include both required actions and background information.", questions: ["What must readers separate?", "Why does this skill matter?", "Name one type of practical text mentioned."], answers: ["main instruction", "required actions|background information", "forms|notices|workplace messages"] }
];

const storyTemplates = {
  A: [
    { topic: "A Small Win", story: "Sam reads one short page. He points to each word. Sam smiles when he is done.", vocab: ["page", "points", "done"] },
    { topic: "The Blue Bag", story: "Mia has a blue bag. She puts a book in the bag. The bag is light.", vocab: ["blue", "book", "light"] },
    { topic: "After Lunch", story: "Leo eats lunch. He wipes the table. Then he reads one card.", vocab: ["lunch", "table", "card"] }
  ],
  B: [
    { topic: "The Library Visit", story: "A learner visits the library and chooses one book. The book has short chapters and clear pictures. Reading a little each day helps the story feel easier.", vocab: ["library", "chapters", "easier"] },
    { topic: "The Grocery List", story: "A helper writes milk, rice, apples, and soup on a grocery list. At the store, the learner checks each word before the item goes in the cart.", vocab: ["grocery", "list", "cart"] },
    { topic: "The Bus Sign", story: "A sign at the bus stop shows the next bus time. The learner reads the sign twice and knows when to wait.", vocab: ["sign", "bus", "wait"] }
  ],
  C: [
    { topic: "Finding the Main Idea", story: "Every evening, Jordan reads one paragraph after dinner. At first, he stops often. After practice, he can tell the main idea and name two details.", vocab: ["paragraph", "main idea", "details"] },
    { topic: "The Work Schedule", story: "Angela checks her work schedule on the wall. She copies the days into her phone so she will not forget. Careful reading helps her plan the week.", vocab: ["schedule", "copies", "plan"] },
    { topic: "A Helpful Label", story: "Marcus reads a label before using plant food. The directions say to mix one spoon with water. Marcus reads twice so he can be careful.", vocab: ["label", "directions", "careful"] }
  ],
  D: [
    { topic: "Reading a Notice", story: "A notice on the apartment door says the water will be off from nine to eleven on Saturday. Carla fills two bottles with water the night before because she understands the notice.", vocab: ["notice", "apartment", "understands"] },
    { topic: "Comparing Two Notes", story: "Two notes are on the table. One note is from school and one is from the dentist. The learner compares the notes to know which one needs a signature.", vocab: ["compare", "signature", "dentist"] },
    { topic: "Online Safety", story: "Mina receives an email asking for her password. The message looks urgent, but she reads carefully and deletes it because real companies should not ask for passwords by email.", vocab: ["urgent", "password", "carefully"] }
  ],
  E: [
    { topic: "Two Articles", story: "Devon reads two articles about gardens. One explains how seeds grow. The other explains why compost helps soil. Devon writes one sentence about how the articles are alike.", vocab: ["articles", "compost", "alike"] },
    { topic: "The Community Flyer", story: "A flyer lists free classes at the community center. The reader studies the dates, times, and room numbers before choosing a class that fits the family schedule.", vocab: ["flyer", "community", "schedule"] },
    { topic: "Cause and Effect", story: "The garden soil was dry for many days, so the plants began to wilt. After volunteers watered each morning, the leaves looked stronger and greener.", vocab: ["cause", "effect", "volunteers"] }
  ],
  F: [
    { topic: "Author Purpose", story: "A notice explains why the library added evening reading practice. The author wants families to know when help is available and how to sign up.", vocab: ["purpose", "available", "sign up"] },
    { topic: "Evidence in a Passage", story: "The passage says that short daily practice helped three learners attend more sessions. That detail supports the idea that routines can help people continue.", vocab: ["evidence", "supports", "routine"] },
    { topic: "Compare Viewpoints", story: "One speaker believes practice should be quiet and private. Another speaker believes group practice helps learners feel less alone. Both want reading to feel safe.", vocab: ["viewpoint", "private", "group"] }
  ],
  G: [
    { topic: "Predictable Practice", story: "The author argues that predictable practice helps learners continue. The passage gives examples of short routines, friendly reminders, and helpers who praise effort first.", vocab: ["argues", "predictable", "examples"] },
    { topic: "Practical Texts", story: "Forms, notices, and workplace messages often include required actions and extra details. Strong readers learn to find the action first and then check supporting information.", vocab: ["required", "supporting", "workplace"] },
    { topic: "Reading for Decisions", story: "A family compares two program schedules. They choose the class that meets after work, costs nothing, and includes help with reading and math.", vocab: ["compare", "program", "decision"] }
  ],
  H: [
    { topic: "Separating Details", story: "When a text includes background information and instructions, readers need to separate what is interesting from what must be done. This helps them avoid missing the required action.", vocab: ["background", "instructions", "required"] },
    { topic: "Analyzing a Claim", story: "The article claims that small daily lessons can improve confidence. It supports the claim with examples of learners who returned each day because the practice felt manageable.", vocab: ["claim", "supports", "manageable"] },
    { topic: "Reading With Purpose", story: "A reader may scan a page for a phone number, read closely for directions, or compare two paragraphs for different views. Purpose changes how the reader uses the text.", vocab: ["scan", "closely", "purpose"] }
  ]
};

function getLevelForDay(day) {
  if (day <= 30) return "A";
  if (day <= 60) return "B";
  if (day <= 90) return "C";
  if (day <= 120) return "D";
  if (day <= 150) return "E";
  if (day <= 180) return "F";
  if (day <= 210) return "G";
  return "H";
}

function makeLesson(day) {
  const levelKey = getLevelForDay(day);
  const info = levelInfo[levelKey];
  const templates = storyTemplates[levelKey];
  const template = templates[(day - 1) % templates.length];
  const levelDay = day - info.range[0] + 1;
  const title = `Day ${day}: ${template.topic}`;
  const story = `${template.story} Today is ${info.label}, lesson ${levelDay}. Read slowly, look for proof, and answer one question at a time.`;
  return {
    day,
    level: info.label,
    levelKey,
    levelDescription: info.description,
    title,
    story,
    vocab: template.vocab,
    questions: [
      "What is this reading mostly about?",
      "Name one detail from the story.",
      "What should the reader do when the text feels hard?"
    ],
    answers: [
      template.topic.toLowerCase().split(" ")[0],
      template.vocab.join("|"),
      "read slowly|reread|look for proof|try again"
    ]
  };
}

const lessons = Array.from({ length: 240 }, (_, index) => makeLesson(index + 1));

let state = loadState();
let currentLesson = clampNumber(state.currentLesson || 0, 0, lessons.length - 1);
let lessonPassed = false;
let timerSeconds = 0;
let timerInterval = null;
let placementIndex = 0;
let placementScores = [];

const el = id => document.getElementById(id);
const storyTitle = el("storyTitle");
const storyText = el("storyText");
const questionsDiv = el("questions");
const lessonCount = el("lessonCount");
const completedCount = el("completedCount");
const streakCount = el("streakCount");
const timerCount = el("timerCount");
const resultMessage = el("resultMessage");
const coachMessage = el("coachMessage");
const daySelect = el("daySelect");
const progressBar = el("progressBar");
const progressText = el("progressText");
const completeCard = el("completeCard");
const completeMessage = el("completeMessage");
const levelTitle = el("levelTitle");
const levelDescription = el("levelDescription");
const storyLevel = el("storyLevel");
const vocabList = el("vocabList");

function clampNumber(value, min, max) {
  return Math.max(min, Math.min(max, Number(value) || 0));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") throw new Error("Bad saved state");
    if (!Array.isArray(saved.completed)) saved.completed = [];
    if (!Number.isFinite(Number(saved.streak))) saved.streak = 0;
    return saved;
  } catch {
    return { currentLesson: 0, completed: [], streak: 0 };
  }
}

function saveState() {
  state.currentLesson = currentLesson;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalize(text) {
  return String(text || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function answerMatches(input, accepted) {
  const value = normalize(input);
  if (!value) return false;

  return String(accepted).split("|").some(part => {
    const term = normalize(part);
    if (!term) return false;
    if (value === term) return true;
    if (value.length >= 3 && term.length >= 3 && value.includes(term)) return true;
    if (value.length >= 4 && term.length >= 4 && term.includes(value)) return true;
    return false;
  });
}

function buildDaySelector() {
  if (!daySelect) return;
  daySelect.innerHTML = lessons.map((lesson, index) => `<option value="${index}">Day ${lesson.day} — ${lesson.level}</option>`).join("");
  daySelect.value = String(currentLesson);
  daySelect.addEventListener("change", () => {
    currentLesson = clampNumber(daySelect.value, 0, lessons.length - 1);
    lessonPassed = false;
    renderLesson();
    saveState();
  });
}

function renderLesson() {
  const lesson = lessons[currentLesson];
  if (!lesson) return;

  storyTitle.textContent = lesson.title;
  storyText.textContent = lesson.story;
  lessonCount.textContent = `Lesson ${lesson.day} of ${lessons.length}`;
  levelTitle.textContent = lesson.level;
  levelDescription.textContent = lesson.levelDescription;
  storyLevel.textContent = lesson.level;
  coachMessage.textContent = getCoachMessage(lesson);
  completeCard.classList.add("hidden");
  resultMessage.textContent = "";
  lessonPassed = false;

  vocabList.innerHTML = lesson.vocab.map(word => `<span class="vocab-pill">${word}</span>`).join("");
  questionsDiv.innerHTML = lesson.questions.map((question, index) => `
    <div class="question-block">
      <label for="answer${index}">${index + 1}. ${question}</label>
      <input id="answer${index}" type="text" autocomplete="off" placeholder="Type your answer" />
    </div>
  `).join("");

  if (daySelect) daySelect.value = String(currentLesson);
  updateProgress();
  startTimer();
}

function getCoachMessage(lesson) {
  const messages = [
    "Read slowly. Look for the answer in the story.",
    "Rereading is not cheating. Rereading is learning.",
    "Try one question at a time. Small steps count.",
    "Find proof in the words before you answer.",
    "A calm try is better than a rushed guess."
  ];
  return `${messages[currentLesson % messages.length]} ${lesson.level} is practice, not a test.`;
}

function updateProgress() {
  const completed = new Set(state.completed || []);
  const completedCountValue = completed.size;
  const percent = Math.round((completedCountValue / lessons.length) * 100);
  completedCount.textContent = `Completed: ${completedCountValue}`;
  streakCount.textContent = `Streak: ${state.streak || 0}`;
  progressText.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
}

function startTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  updateTimer();
  timerInterval = setInterval(() => {
    timerSeconds += 1;
    updateTimer();
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = String(timerSeconds % 60).padStart(2, "0");
  timerCount.textContent = `Time: ${minutes}:${seconds}`;
}

function checkAnswers() {
  const lesson = lessons[currentLesson];
  const inputs = lesson.questions.map((_, index) => el(`answer${index}`));
  let correct = 0;
  let blanks = 0;

  inputs.forEach((input, index) => {
    const blank = normalize(input.value) === "";
    if (blank) blanks += 1;
    const ok = answerMatches(input.value, lesson.answers[index]);
    input.classList.toggle("answer-correct", ok);
    input.classList.toggle("answer-needs-work", !ok);
    if (ok) correct += 1;
  });

  if (blanks > 0) {
    resultMessage.textContent = "Please answer each question before checking. Blank answers do not count.";
    coachMessage.textContent = "Try every question. A guess is better than leaving it blank.";
    return;
  }

  if (correct >= Math.ceil(lesson.questions.length * 0.67)) {
    markComplete();
    resultMessage.textContent = `Nice work. You answered ${correct} of ${lesson.questions.length}. Day ${lesson.day} is complete.`;
  } else {
    resultMessage.textContent = `You answered ${correct} of ${lesson.questions.length}. Reread the story and try again.`;
    coachMessage.textContent = "Look back at the story. The words can help you find the answer.";
  }
}

function markComplete() {
  const completed = new Set(state.completed || []);
  if (!completed.has(currentLesson)) {
    completed.add(currentLesson);
    state.completed = Array.from(completed).sort((a, b) => a - b);
    state.streak = (state.streak || 0) + 1;
  }
  lessonPassed = true;
  completeMessage.textContent = `You finished Day ${lessons[currentLesson].day}. Small wins count.`;
  completeCard.classList.remove("hidden");
  updateProgress();
  saveState();
}

function clearAnswers() {
  lessons[currentLesson].questions.forEach((_, index) => {
    const input = el(`answer${index}`);
    if (input) {
      input.value = "";
      input.classList.remove("answer-correct", "answer-needs-work");
    }
  });
  resultMessage.textContent = "Answers cleared. Try again calmly.";
}

function nextLesson() {
  if (currentLesson < lessons.length - 1) {
    currentLesson += 1;
    renderLesson();
    saveState();
  } else {
    resultMessage.textContent = "You reached the end of the 240-day path. Great steady work.";
  }
}

function prevLesson() {
  if (currentLesson > 0) {
    currentLesson -= 1;
    renderLesson();
    saveState();
  }
}

function resetProgress() {
  const ok = confirm("Reset reading progress for this student on this device?");
  if (!ok) return;
  state = { currentLesson: 0, completed: [], streak: 0 };
  currentLesson = 0;
  saveState();
  renderLesson();
}

function speak(text) {
  if (!text || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.86;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function readStory() {
  const lesson = lessons[currentLesson];
  speak(`${lesson.title}. ${lesson.story}`);
}

function startPlacementTest() {
  placementIndex = 0;
  placementScores = [];
  el("assessmentIntro").classList.add("hidden");
  el("assessmentResult").classList.add("hidden");
  el("assessmentTest").classList.remove("hidden");
  renderPlacementStep();
}

function restartPlacementTest() {
  startPlacementTest();
}

function renderPlacementStep() {
  const step = placementSteps[placementIndex];
  el("assessmentStepLabel").textContent = `Step ${placementIndex + 1} of ${placementSteps.length}`;
  el("assessmentStoryTitle").textContent = step.title;
  el("assessmentStoryText").textContent = step.story;
  el("assessmentQuestions").innerHTML = step.questions.map((question, index) => `
    <div class="question-block">
      <label for="placementAnswer${index}">${index + 1}. ${question}</label>
      <input id="placementAnswer${index}" type="text" autocomplete="off" placeholder="Type your answer" />
    </div>
  `).join("");
}

function checkPlacementAnswers() {
  const step = placementSteps[placementIndex];
  let score = 0;
  let blanks = 0;

  step.questions.forEach((_, index) => {
    const input = el(`placementAnswer${index}`);
    if (normalize(input.value) === "") blanks += 1;
    if (answerMatches(input.value, step.answers[index])) score += 1;
  });

  if (blanks > 0) {
    const result = el("assessmentResult");
    result.classList.remove("hidden");
    result.innerHTML = "<p>Please answer each placement question before checking.</p>";
    return;
  }

  placementScores.push({ level: step.level, score });

  if (placementIndex < placementSteps.length - 1 && score >= 2) {
    placementIndex += 1;
    el("assessmentResult").classList.add("hidden");
    renderPlacementStep();
    return;
  }

  const best = placementScores.filter(item => item.score >= 2).pop() || placementScores[0] || { level: "A" };
  showPlacementResult(best.level);
}

function showPlacementResult(level) {
  currentLesson = levelStarts[level] || 0;
  el("assessmentTest").classList.add("hidden");
  const result = el("assessmentResult");
  result.classList.remove("hidden");
  result.innerHTML = `<h3>Suggested Starting Point: ${levelInfo[level].label}</h3><p>${levelInfo[level].description}</p><button class="primary-action" type="button" onclick="setStartingLevel('${level}')">Start ${levelInfo[level].label}</button>`;
  renderLesson();
  saveState();
}

function readPlacementStory() {
  const step = placementSteps[placementIndex];
  speak(`${step.title}. ${step.story}`);
}

function setStartingLevel(level) {
  currentLesson = levelStarts[level] || 0;
  el("assessmentIntro").classList.remove("hidden");
  el("assessmentTest").classList.add("hidden");
  el("assessmentResult").classList.add("hidden");
  renderLesson();
  saveState();
  location.hash = "lessonArea";
}

window.addEventListener("DOMContentLoaded", () => {
  buildDaySelector();
  renderLesson();
});
