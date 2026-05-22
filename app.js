const lessons = [];

function addLesson(level, description, title, story, questions, answers, vocab) {
  lessons.push({ level, levelDescription: description, title, story, questions, answers, vocab });
}

const levelA = "Short sentences, familiar words, and beginner reading confidence.";
const levelB = "Longer sentences, daily-life vocabulary, and stronger comprehension practice.";
const levelC = "Short paragraphs, sequencing, main idea, and deeper understanding skills.";
const levelD = "Longer practical passages with stronger thinking, details, and real-life reading.";

const levelStart = { A: 0, B: 8, C: 16, D: 23 };

const placementSteps = [
  {
    level: "A",
    title: "Placement Reading A",
    story: "Ben has a red hat. He puts the hat on his bed.",
    questions: ["Who has a red hat?", "What color is the hat?", "Where does Ben put the hat?"],
    answers: ["ben", "red", "bed"]
  },
  {
    level: "B",
    title: "Placement Reading B",
    story: "Nina packed her lunch before school. She put an apple, a sandwich, and water in her bag.",
    questions: ["When did Nina pack lunch?", "Name one food she packed.", "Where did she put the lunch?"],
    answers: ["before school", "apple|sandwich", "bag"]
  },
  {
    level: "C",
    title: "Placement Reading C",
    story: "Carlos wanted to finish his book report. He read two chapters, wrote down the main idea, and asked his sister to listen while he explained the story.",
    questions: ["What did Carlos want to finish?", "What did he write down?", "Who listened to him explain the story?"],
    answers: ["book report", "main idea", "sister"]
  },
  {
    level: "D",
    title: "Placement Reading D",
    story: "Maya noticed that reading became easier when she slowed down and looked for clues. Instead of guessing, she reread confusing sentences and used nearby words to understand new vocabulary.",
    questions: ["What helped reading become easier for Maya?", "What did she do instead of guessing?", "What helped her understand new vocabulary?"],
    answers: ["slowed down|slow", "reread", "nearby words|clues"]
  }
];

const lessonData = [
  ["Level A", levelA, "Day 1: The Red Hat", "Ben has a red hat. He puts the hat on his bed. The hat is soft.", ["Who has a red hat?", "Where does Ben put the hat?", "How does the hat feel?"], ["ben", "bed", "soft"], ["hat", "bed", "soft"]],
  ["Level A", levelA, "Day 2: Sara's Cup", "Sara has a blue cup. She fills the cup with water. She drinks slowly.", ["Who has a blue cup?", "What does Sara put in the cup?", "How does she drink?"], ["sara", "water", "slowly"], ["cup", "water", "slowly"]],
  ["Level A", levelA, "Day 3: Max Helps", "Max helps Dad. Max picks up a bag. Dad says thank you.", ["Who helps Dad?", "What does Max pick up?", "What does Dad say?"], ["max", "bag", "thank you"], ["helps", "bag", "thank"]],
  ["Level A", levelA, "Day 4: The Little Dog", "A little dog runs to the gate. The dog sits and waits. Kim opens the gate.", ["What animal runs to the gate?", "What does the dog do?", "Who opens the gate?"], ["dog", "waits", "kim"], ["little", "gate", "waits"]],
  ["Level A", levelA, "Day 5: Lunch Time", "Eli eats lunch. He has soup and bread. He wipes the table when he is done.", ["What does Eli eat?", "Name one food Eli has.", "What does Eli wipe?"], ["lunch", "soup|bread", "table"], ["lunch", "soup", "table"]],
  ["Level A", levelA, "Day 6: Rain Boots", "Rain falls outside. Mia puts on her boots. She steps over a puddle.", ["What falls outside?", "What does Mia put on?", "What does she step over?"], ["rain", "boots", "puddle"], ["rain", "boots", "puddle"]],
  ["Level A", levelA, "Day 7: The Lost Sock", "Sam looks for one sock. He checks under the chair. The sock is beside the chair.", ["What does Sam look for?", "Where does he check?", "Where is the sock?"], ["sock", "under the chair", "beside the chair"], ["sock", "under", "beside"]],
  ["Level A", levelA, "Day 8: Bedtime Book", "Nora picks a book before bed. Mom reads one page. Nora smiles and rests.", ["What does Nora pick?", "When does Nora pick the book?", "Who reads one page?"], ["book", "before bed", "mom"], ["book", "page", "rests"]],
  ["Level B", levelB, "Day 9: The Library Card", "Maria went to the library with her aunt. She got a library card and chose a book about turtles. Maria said she would read ten pages at home.", ["Where did Maria go?", "What kind of card did she get?", "What was the book about?"], ["library", "library card", "turtles"], ["library", "card", "turtles"]],
  ["Level B", levelB, "Day 10: A Grocery List", "Owen helped make a grocery list. He wrote milk, eggs, rice, and apples. At the store, he checked each item before putting it in the cart.", ["What did Owen help make?", "Name one item on the list.", "Where did Owen put the items?"], ["grocery list", "milk|eggs|rice|apples", "cart"], ["grocery", "list", "cart"]],
  ["Level B", levelB, "Day 11: Bus Stop", "Leah waited at the bus stop after school. The bus was late, so she read the sign on the pole. The sign helped her know the next bus time.", ["Where did Leah wait?", "What was late?", "What helped Leah know the next bus time?"], ["bus stop", "bus", "sign"], ["bus stop", "late", "sign"]],
  ["Level B", levelB, "Day 12: The New Word", "Jay saw a new word in his book. He did not guess. He read the sentence again and used the other words to help him.", ["What did Jay see?", "What did Jay not do?", "What helped Jay understand the word?"], ["new word", "guess", "other words"], ["guess", "sentence", "understand"]],
  ["Level B", levelB, "Day 13: Doctor Visit", "Tara went to the doctor for a checkup. The nurse gave her a paper with three simple directions. Tara read each direction with her grandmother.", ["Where did Tara go?", "Who gave Tara a paper?", "Who helped Tara read the directions?"], ["doctor", "nurse", "grandmother"], ["doctor", "nurse", "directions"]],
  ["Level B", levelB, "Day 14: The Class Note", "A note came home in Luis's folder. It said the class would visit the zoo on Friday. Luis gave the note to his father after dinner.", ["Where was the note?", "Where would the class visit?", "When would the class visit the zoo?"], ["folder", "zoo", "friday"], ["note", "folder", "visit"]],
  ["Level B", levelB, "Day 15: A Safe Walk", "Rina walked to the corner with her brother. They stopped at the crosswalk and looked both ways. Then they crossed when the light changed.", ["Where did Rina walk?", "Where did they stop?", "When did they cross?"], ["corner", "crosswalk", "light changed"], ["corner", "crosswalk", "crossed"]],
  ["Level B", levelB, "Day 16: Cooking Rice", "Grandpa showed Maya how to cook rice. First, they rinsed the rice. Then they added water and waited until the rice was soft.", ["Who showed Maya how to cook rice?", "What did they do first?", "When was the rice ready?"], ["grandpa", "rinsed", "soft"], ["rice", "rinsed", "soft"]],
  ["Level C", levelC, "Day 17: Reading After Dinner", "Jordan practiced reading every evening after dinner. At first, some words felt difficult. He reread each sentence and underlined words he wanted to learn. After one week, he could read the same passage with fewer stops.", ["When did Jordan practice reading?", "What did Jordan underline?", "What changed after one week?"], ["after dinner", "words", "fewer stops"], ["practiced", "underlined", "passage"]],
  ["Level C", levelC, "Day 18: The Work Schedule", "Angela looked at her work schedule on the break room wall. The schedule showed that she worked Monday, Wednesday, and Friday. She copied the days into her phone so she would not forget.", ["Where was the schedule?", "What days did Angela work?", "Why did she copy the days into her phone?"], ["break room wall", "monday wednesday friday", "not forget"], ["schedule", "copied", "forget"]],
  ["Level C", levelC, "Day 19: A Helpful Label", "Marcus read the label on a bottle of plant food. The label said to mix one spoon with water. Marcus read the directions twice before feeding the tomato plants.", ["What did Marcus read?", "How much plant food did the label say to mix?", "Why did Marcus read the directions twice?"], ["label", "one spoon", "before feeding|careful"], ["label", "directions", "mix"]],
  ["Level C", levelC, "Day 20: The Text Message", "A text message from Aunt Rose said to meet her by the front door at four. Jada read the message carefully. She knew where to go and what time to be there.", ["Who sent the text message?", "Where should Jada meet Aunt Rose?", "What time should Jada be there?"], ["aunt rose", "front door", "four|4"], ["message", "carefully", "front"]],
  ["Level C", levelC, "Day 21: Main Idea Practice", "The school garden needed water every morning. Three students filled watering cans, and two students pulled small weeds. By Friday, the lettuce plants looked taller and greener.", ["What needed water every morning?", "What did two students pull?", "What is the main idea of the passage?"], ["school garden", "weeds", "garden grew|students cared"], ["garden", "weeds", "main idea"]],
  ["Level C", levelC, "Day 22: Finding Proof", "Noah thought the story was about a lost kitten. He went back and reread the first paragraph. The paragraph said the kitten was hiding under the porch, not lost.", ["What did Noah think at first?", "What did Noah reread?", "Where was the kitten?"], ["lost kitten", "first paragraph", "under the porch"], ["proof", "paragraph", "hiding"]],
  ["Level C", levelC, "Day 23: The Appointment Card", "Mrs. Patel gave Eric an appointment card. The card said Tuesday at ten thirty. Eric placed the card on the refrigerator so everyone at home could see it.", ["Who gave Eric the card?", "What day was the appointment?", "Where did Eric place the card?"], ["mrs patel", "tuesday", "refrigerator"], ["appointment", "card", "refrigerator"]],
  ["Level D", levelD, "Day 24: Building a Reading Routine", "Ava wanted to improve her reading, so she made a quiet routine after dinner. Each night, she read one passage, marked difficult words, and explained the main idea to her father. After two weeks, Ava noticed that she could read longer passages without stopping as often.", ["Why did Ava make a quiet routine?", "What did Ava mark each night?", "What changed after two weeks?"], ["improve her reading", "difficult words", "longer passages"], ["routine", "passage", "main idea", "improve"]],
  ["Level D", levelD, "Day 25: Reading Medicine Directions", "Darnell read the medicine directions before giving his son a dose. The label said to shake the bottle first and use the small cup in the box. Darnell read the label twice because he wanted to be careful.", ["What did Darnell read?", "What did the label say to do first?", "Why did Darnell read the label twice?"], ["medicine directions", "shake the bottle", "careful"], ["medicine", "dose", "careful", "label"]],
  ["Level D", levelD, "Day 26: Comparing Two Notes", "Two notes were on the table. One note was from school, and one note was from the dentist. The school note asked for a signed permission form. The dentist note reminded the family about an appointment next Thursday.", ["Where were the two notes?", "What did the school note ask for?", "What did the dentist note remind the family about?"], ["table", "signed permission form", "appointment next thursday"], ["permission", "appointment", "reminded", "signed"]],
  ["Level D", levelD, "Day 27: Online Safety", "Mina received an email that asked for her password. The message looked urgent, but Mina stopped and read it carefully. She remembered that real companies should not ask for passwords by email, so she deleted the message.", ["What did the email ask for?", "How did the message look?", "Why did Mina delete the message?"], ["password", "urgent", "companies should not ask for passwords"], ["password", "urgent", "deleted", "online safety"]],
  ["Level D", levelD, "Day 28: Reading a Notice", "A notice on the apartment door said the water would be off from nine to eleven on Saturday morning. The notice also said workers would repair a pipe near the laundry room. Carla filled two bottles with water on Friday night.", ["Where was the notice?", "When would the water be off?", "Why did Carla fill two bottles with water?"], ["apartment door", "nine to eleven", "water would be off"], ["notice", "repair", "laundry", "pipe"]],
  ["Level D", levelD, "Day 29: Understanding a Form", "Roberto filled out a simple clinic form. First, he wrote his name and phone number. Then he checked a box that said new patient. He asked the front desk worker to explain one question before he answered it.", ["What kind of form did Roberto fill out?", "What did he write first?", "Why did he ask the front desk worker for help?"], ["clinic form", "name and phone number", "explain one question"], ["clinic", "form", "patient", "explain"]],
  ["Level D", levelD, "Day 30: Looking Back", "On the last day, Maya looked back at her reading notebook. Some early pages had short sentences, and later pages had longer passages. Maya smiled because she could see proof that steady practice had helped her grow.", ["What did Maya look back at?", "What was different about the later pages?", "What helped Maya grow?"], ["reading notebook", "longer passages", "steady practice"], ["notebook", "steady", "practice", "proof"]]
];

lessonData.forEach(lesson => addLesson(...lesson));

let currentLesson = 0;
let lessonPassed = false;
let timerSeconds = 0;
let timerInterval = null;
let placementIndex = 0;
let placementScores = [];
let storyReadCount = 0;

const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const questionsDiv = document.getElementById("questions");
const lessonCount = document.getElementById("lessonCount");
const completedCount = document.getElementById("completedCount");
const streakCount = document.getElementById("streakCount");
const timerCount = document.getElementById("timerCount");
const resultMessage = document.getElementById("resultMessage");
const coachMessage = document.getElementById("coachMessage");
const daySelect = document.getElementById("daySelect");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const completeCard = document.getElementById("completeCard");
const completeMessage = document.getElementById("completeMessage");
const levelTitle = document.getElementById("levelTitle");
const levelDescription = document.getElementById("levelDescription");
const storyLevel = document.getElementById("storyLevel");
const vocabList = document.getElementById("vocabList");
const assessmentBox = document.getElementById("assessmentBox");
const assessmentIntro = document.getElementById("assessmentIntro");
const assessmentTest = document.getElementById("assessmentTest");
const assessmentResult = document.getElementById("assessmentResult");
const assessmentStepLabel = document.getElementById("assessmentStepLabel");
const assessmentStoryTitle = document.getElementById("assessmentStoryTitle");
const assessmentStoryText = document.getElementById("assessmentStoryText");
const assessmentQuestions = document.getElementById("assessmentQuestions");

function getCompleted() {
  return Number(localStorage.getItem("readEasyProgress")) || 0;
}

function getStreak() {
  return Number(localStorage.getItem("readEasyStreak")) || 0;
}

function getSavedPlacementLevel() {
  return localStorage.getItem("readEasyPlacementLevel") || "";
}

function getReadCountKey() {
  return `readEasyReadCount${currentLesson + 1}`;
}

function getStoryReadCount() {
  return Number(localStorage.getItem(getReadCountKey())) || 0;
}

function loadLesson() {
  const lesson = lessons[currentLesson];

  lessonPassed = false;
  timerSeconds = 0;
  storyReadCount = getStoryReadCount();

  storyTitle.textContent = lesson.title;
  storyText.textContent = lesson.story;
  storyLevel.textContent = lesson.level;
  levelTitle.textContent = lesson.level;
  levelDescription.textContent = lesson.levelDescription;
  lessonCount.textContent = `Lesson ${currentLesson + 1} of ${lessons.length}`;

  questionsDiv.innerHTML = "";
  vocabList.innerHTML = "";

  lesson.vocab.forEach(word => {
    vocabList.innerHTML += `<span class="vocab-pill">${word}</span>`;
  });

  lesson.questions.forEach((question, index) => {
    questionsDiv.innerHTML += `
      <div class="question-block">
        <label>${question}</label>
        <input type="text" id="answer${index}" placeholder="Type answer here" />
        <p id="feedback${index}" class="answer-feedback"></p>
      </div>
    `;
  });

  coachMessage.textContent = getBubblesMessage();
  resultMessage.textContent = "";

  if (completeCard) completeCard.classList.add("hidden");

  daySelect.value = currentLesson;

  updateCompleted();
  updateProgressBar();
  updateAchievements();
  updateFluencyCoach("ready");
  updateNextButton();
  startTimer();
}

function startPlacementTest() {
  placementIndex = 0;
  placementScores = [];
  assessmentIntro.classList.add("hidden");
  assessmentResult.classList.add("hidden");
  assessmentTest.classList.remove("hidden");
  renderPlacementStep();
  coachMessage.textContent = "Take your time. This check helps us choose a good starting level.";
}

function restartPlacementTest() {
  placementIndex = 0;
  placementScores = [];
  assessmentResult.classList.add("hidden");
  assessmentTest.classList.remove("hidden");
  renderPlacementStep();
}

function renderPlacementStep() {
  const step = placementSteps[placementIndex];

  assessmentStepLabel.textContent = `Step ${placementIndex + 1} of ${placementSteps.length}`;
  assessmentStoryTitle.textContent = step.title;
  assessmentStoryText.textContent = step.story;
  assessmentQuestions.innerHTML = "";

  step.questions.forEach((question, index) => {
    assessmentQuestions.innerHTML += `
      <div class="question-block">
        <label>${question}</label>
        <input type="text" id="placementAnswer${index}" placeholder="Type answer here" />
        <p id="placementFeedback${index}" class="answer-feedback"></p>
      </div>
    `;
  });
}

function checkPlacementAnswers() {
  const step = placementSteps[placementIndex];
  let score = 0;

  step.answers.forEach((answer, index) => {
    const input = document.getElementById(`placementAnswer${index}`);
    const feedback = document.getElementById(`placementFeedback${index}`);
    const userAnswer = normalizeAnswer(input.value);
    const correctAnswers = answer.split("|").map(item => normalizeAnswer(item));
    const isCorrect = correctAnswers.some(correct => userAnswer.includes(correct));

    input.classList.remove("correct-answer", "wrong-answer");

    if (isCorrect) {
      score++;
      input.classList.add("correct-answer");
      feedback.textContent = "Correct";
    } else {
      input.classList.add("wrong-answer");
      feedback.textContent = "Try again";
    }
  });

  placementScores[placementIndex] = score;

  if (score < 2) {
    finishPlacementTest();
    return;
  }

  if (placementIndex < placementSteps.length - 1) {
    placementIndex++;
    setTimeout(() => {
      renderPlacementStep();
      assessmentTest.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 450);
    return;
  }

  finishPlacementTest();
}

function finishPlacementTest() {
  const recommendedLevel = getRecommendedPlacementLevel();
  const startIndex = levelStart[recommendedLevel];

  localStorage.setItem("readEasyPlacementLevel", recommendedLevel);

  currentLesson = startIndex;

  if (getCompleted() < startIndex) localStorage.setItem("readEasyProgress", startIndex);

  assessmentTest.classList.add("hidden");
  assessmentResult.classList.remove("hidden");
  assessmentResult.innerHTML = `
    <h3>Recommended Starting Point: Level ${recommendedLevel}</h3>
    <p>${getPlacementSummary(recommendedLevel)}</p>
    <div class="button-row">
      <button onclick="acceptPlacementLevel('${recommendedLevel}')">Start Level ${recommendedLevel}</button>
      <button onclick="restartPlacementTest()">Retake Placement</button>
    </div>
  `;

  buildDaySelector();
  loadLesson();

  coachMessage.textContent = `Placement complete. Level ${recommendedLevel} is a good starting point.`;
  assessmentResult.scrollIntoView({ behavior: "smooth", block: "start" });
}

function acceptPlacementLevel(level) {
  setStartingLevel(level, true);
  if (assessmentBox) assessmentBox.classList.add("placement-complete");
  coachMessage.textContent = `Good choice. Start with Level ${level} and move one lesson at a time.`;
}

function getRecommendedPlacementLevel() {
  let highestPassedIndex = 0;
  placementScores.forEach((score, index) => {
    if (score >= 2) highestPassedIndex = index;
  });
  return placementSteps[highestPassedIndex].level;
}

function getPlacementSummary(level) {
  const summaries = {
    A: "Start with short sentences. Build comfort first, then move up slowly.",
    B: "Start with longer sentences and simple details. This should feel steady, not stressful.",
    C: "Start with short paragraphs and main-idea practice. Read slowly and explain what happened.",
    D: "Start with stronger passages. Focus on vocabulary, details, and main ideas."
  };
  return summaries[level] || summaries.A;
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ");
}

function checkAnswers() {
  const lesson = lessons[currentLesson];
  let score = 0;

  lesson.answers.forEach((answer, index) => {
    const input = document.getElementById(`answer${index}`);
    const feedback = document.getElementById(`feedback${index}`);
    const userAnswer = normalizeAnswer(input.value);
    const correctAnswers = answer.split("|").map(item => normalizeAnswer(item));
    const isCorrect = correctAnswers.some(correct => userAnswer.includes(correct));

    input.classList.remove("correct-answer", "wrong-answer");

    if (isCorrect) {
      score++;
      input.classList.add("correct-answer");
      feedback.textContent = "Correct";
    } else {
      input.classList.add("wrong-answer");
      feedback.textContent = "Try again";
    }
  });

  if (score === lesson.answers.length) {
    lessonPassed = true;
    resultMessage.textContent = "✅ Great job! All answers are correct.";
    coachMessage.textContent = getSuccessCoachMessage();
    updateFluencyCoach("success");

    if (completeCard) completeCard.classList.remove("hidden");
    if (completeMessage) completeMessage.textContent = `You completed Day ${currentLesson + 1} in ${formatTime(timerSeconds)}.`;

    saveProgress();
  } else {
    lessonPassed = false;
    resultMessage.textContent = `You got ${score} out of ${lesson.answers.length} correct.`;
    coachMessage.textContent = getRetryCoachMessage(score, lesson.answers.length);
    updateFluencyCoach("retry");
    if (completeCard) completeCard.classList.add("hidden");
  }

  updateNextButton();
}

function getRetryCoachMessage(score, total) {
  if (score === 0) return "No problem. Read the story again slowly. Look for names, places, and action words.";
  if (score < total) return "Good start. One or two answers need another look. Go back to the story and find proof.";
  return "Try again slowly.";
}

function getSuccessCoachMessage() {
  if (storyReadCount === 0) return "Nice work. Next time, try reading the story aloud before answering.";
  if (timerSeconds < 20) return "Great job. You answered quickly; now make sure you also understand each sentence.";
  return "Fantastic reading today. You read carefully and may go to the next lesson.";
}

function nextLesson() {
  if (!lessonPassed) {
    resultMessage.textContent = "Check your answers first.";
    coachMessage.textContent = "Read the story, answer the questions, then press Check Answers.";
    updateFluencyCoach("answer-first");
    return;
  }

  if (currentLesson < lessons.length - 1) {
    currentLesson++;
    loadLesson();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function prevLesson() {
  if (currentLesson > 0) {
    currentLesson--;
    loadLesson();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function clearAnswers() {
  const inputs = document.querySelectorAll(".question-block input");
  const feedbackMessages = document.querySelectorAll(".answer-feedback");

  inputs.forEach(input => {
    input.value = "";
    input.classList.remove("correct-answer", "wrong-answer");
  });

  feedbackMessages.forEach(message => { message.textContent = ""; });

  lessonPassed = false;
  resultMessage.textContent = "";
  coachMessage.textContent = "Answers cleared. Try again slowly.";
  updateFluencyCoach("cleared");

  if (completeCard) completeCard.classList.add("hidden");
  updateNextButton();
}

function readStory() {
  const speech = new SpeechSynthesisUtterance(lessons[currentLesson].story);
  speech.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);

  storyReadCount++;
  localStorage.setItem(getReadCountKey(), storyReadCount);
  updateFluencyCoach("read-aloud");
}

function readPlacementStory() {
  const step = placementSteps[placementIndex];
  const speech = new SpeechSynthesisUtterance(step.story);
  speech.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

function saveProgress() {
  const savedProgress = getCompleted();
  const newProgress = currentLesson + 1;

  if (newProgress > savedProgress) {
    localStorage.setItem("readEasyProgress", newProgress);
    localStorage.setItem("readEasyStreak", getStreak() + 1);
  }

  updateCompleted();
  updateProgressBar();
  updateAchievements();
  buildDaySelector();
}

function updateCompleted() {
  completedCount.textContent = `Completed: ${getCompleted()}`;
  streakCount.textContent = `Streak: ${getStreak()}`;
}

function updateProgressBar() {
  const percent = Math.round((getCompleted() / lessons.length) * 100);
  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;
}

function createAchievementSystem() {
  if (document.getElementById("achievementWrap")) return;
  const progressWrap = document.querySelector(".progress-wrap");
  if (!progressWrap) return;

  const achievementWrap = document.createElement("section");
  achievementWrap.id = "achievementWrap";
  achievementWrap.className = "achievement-wrap";
  achievementWrap.innerHTML = `
    <div class="achievement-card">
      <div>
        <p class="achievement-label">Current Goal</p>
        <h2 id="goalTitle">Complete 5 Reading Days</h2>
        <p id="goalText">Finish lessons one step at a time.</p>
      </div>
      <div class="achievement-progress"><span id="goalProgress">0 / 5</span></div>
    </div>
    <div class="badge-grid">
      <div id="badge1" class="badge-card locked-badge"><span>🌱</span><p>Started Reading</p></div>
      <div id="badge2" class="badge-card locked-badge"><span>📘</span><p>5 Lessons</p></div>
      <div id="badge3" class="badge-card locked-badge"><span>🔥</span><p>10 Lesson Streak</p></div>
      <div id="badge4" class="badge-card locked-badge"><span>🏆</span><p>Reading Champion</p></div>
    </div>
  `;
  progressWrap.insertAdjacentElement("afterend", achievementWrap);
}

function updateAchievements() {
  createAchievementSystem();

  const completed = getCompleted();
  const streak = getStreak();
  const goalTitle = document.getElementById("goalTitle");
  const goalText = document.getElementById("goalText");
  const goalProgress = document.getElementById("goalProgress");

  const goals = [
    { limit: 1, title: "Complete Your First Reading Day", text: "Start with one calm win.", progress: Math.min(completed, 1) },
    { limit: 5, title: "Complete 5 Reading Days", text: "Build a steady reading habit.", progress: Math.min(completed, 5) },
    { limit: 10, title: "Complete 10 Reading Days", text: "Keep the momentum going.", progress: Math.min(completed, 10) },
    { limit: 20, title: "Complete 20 Reading Days", text: "You are becoming a stronger reader.", progress: Math.min(completed, 20) },
    { limit: 30, title: "Finish the 30-Day Path", text: "Complete the full ReadEasy30 journey.", progress: Math.min(completed, 30) }
  ];

  const activeGoal = goals.find(goal => completed < goal.limit) || goals[goals.length - 1];
  if (goalTitle) goalTitle.textContent = activeGoal.title;
  if (goalText) goalText.textContent = activeGoal.text;
  if (goalProgress) goalProgress.textContent = `${activeGoal.progress} / ${activeGoal.limit}`;

  unlockBadge("badge1", completed >= 1);
  unlockBadge("badge2", completed >= 5);
  unlockBadge("badge3", streak >= 10);
  unlockBadge("badge4", completed >= 30);
}

function unlockBadge(id, isUnlocked) {
  const badge = document.getElementById(id);
  if (!badge) return;
  badge.classList.toggle("unlocked-badge", isUnlocked);
  badge.classList.toggle("locked-badge", !isUnlocked);
}

function createFluencySystem() {
  if (document.getElementById("fluencyWrap")) return;
  const storyBox = document.querySelector(".story-box");
  if (!storyBox) return;

  const fluencyWrap = document.createElement("section");
  fluencyWrap.id = "fluencyWrap";
  fluencyWrap.className = "fluency-wrap";
  fluencyWrap.innerHTML = `
    <h2>Fluency Coach</h2>
    <div class="fluency-grid">
      <div class="fluency-step" id="fluencyStep1"><span>1</span><p>Read slowly</p></div>
      <div class="fluency-step" id="fluencyStep2"><span>2</span><p>Read aloud</p></div>
      <div class="fluency-step" id="fluencyStep3"><span>3</span><p>Find proof</p></div>
    </div>
    <p id="fluencyMessage">First, read the story slowly. Then answer from the story, not from guessing.</p>
  `;
  storyBox.insertAdjacentElement("afterend", fluencyWrap);
  injectFluencyStyles();
}

function injectFluencyStyles() {
  if (document.getElementById("fluencyStyles")) return;
  const style = document.createElement("style");
  style.id = "fluencyStyles";
  style.textContent = `
    .fluency-wrap{margin-top:1.2rem;background:#f8fafc;border-left:.35rem solid #8b5cf6;padding:1rem;border-radius:.8rem;border-top:1px solid #e5e7eb;border-right:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}.fluency-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem;margin:.7rem 0}.fluency-step{background:white;border:1px solid #e5e7eb;border-radius:.7rem;padding:.7rem;text-align:center}.fluency-step span{display:inline-grid;place-items:center;width:1.6rem;height:1.6rem;background:#ede9fe;color:#5b21b6;border-radius:999px;font-weight:bold}.fluency-step p{margin:.35rem 0 0;font-weight:bold;font-size:.85rem}.fluency-step.active-fluency{background:#f5f3ff;border-color:#c4b5fd}.fluency-step.complete-fluency{background:#f0fdf4;border-color:#86efac}.fluency-wrap #fluencyMessage{margin:.6rem 0 0;color:#4b5563;line-height:1.7}@media(max-width:768px){.fluency-grid{grid-template-columns:1fr}}`;
  document.head.appendChild(style);
}

function updateFluencyCoach(status) {
  createFluencySystem();

  const message = document.getElementById("fluencyMessage");
  const step1 = document.getElementById("fluencyStep1");
  const step2 = document.getElementById("fluencyStep2");
  const step3 = document.getElementById("fluencyStep3");
  if (!message || !step1 || !step2 || !step3) return;

  [step1, step2, step3].forEach(step => step.classList.remove("active-fluency", "complete-fluency"));

  if (status === "read-aloud") {
    step1.classList.add("complete-fluency");
    step2.classList.add("complete-fluency");
    step3.classList.add("active-fluency");
    message.textContent = "Good. Now answer by finding proof in the story.";
    return;
  }

  if (status === "retry") {
    step1.classList.add("active-fluency");
    step2.classList.add(storyReadCount > 0 ? "complete-fluency" : "active-fluency");
    message.textContent = "Slow down and reread. Look for the exact sentence that proves each answer.";
    return;
  }

  if (status === "success") {
    step1.classList.add("complete-fluency");
    step2.classList.add(storyReadCount > 0 ? "complete-fluency" : "active-fluency");
    step3.classList.add("complete-fluency");
    message.textContent = "Strong work. You read, answered, and checked meaning.";
    return;
  }

  if (status === "answer-first") {
    step1.classList.add("active-fluency");
    message.textContent = "Before moving on, check your answers. Reading progress comes from proof.";
    return;
  }

  if (status === "cleared") {
    step1.classList.add("active-fluency");
    message.textContent = "Fresh start. Read one sentence at a time and try again.";
    return;
  }

  step1.classList.add("active-fluency");
  if (storyReadCount > 0) step2.classList.add("complete-fluency");
  message.textContent = storyReadCount > 0
    ? "You have used Read Aloud. Now answer by finding proof in the story."
    : "First, read the story slowly. Then use Read Aloud if you want extra support.";
}

function buildDaySelector() {
  const completed = getCompleted();
  const maxOpenDay = Math.min(completed + 1, lessons.length);
  daySelect.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const option = document.createElement("option");
    option.value = index;
    if (index + 1 <= maxOpenDay) {
      option.textContent = `${lesson.level} — Day ${index + 1}`;
      option.disabled = false;
    } else {
      option.textContent = `${lesson.level} — Day ${index + 1} 🔒`;
      option.disabled = true;
    }
    daySelect.appendChild(option);
  });
}

function jumpToDay() {
  const selectedLesson = Number(daySelect.value);
  const completed = getCompleted();
  if (selectedLesson > completed) {
    coachMessage.textContent = "Finish the open lessons first. One step at a time.";
    daySelect.value = currentLesson;
    return;
  }
  currentLesson = selectedLesson;
  loadLesson();
}

function updateNextButton() {
  if (!nextBtn) return;
  nextBtn.disabled = !lessonPassed;
  nextBtn.classList.toggle("disabled-btn", !lessonPassed);
}

function resetProgress() {
  const confirmReset = confirm("Reset all ReadEasy30 progress and placement on this device?");
  if (!confirmReset) return;

  localStorage.removeItem("readEasyProgress");
  localStorage.removeItem("readEasyStreak");
  localStorage.removeItem("readEasyPlacementLevel");

  Object.keys(localStorage).forEach(key => {
    if (key.startsWith("readEasyReadCount")) localStorage.removeItem(key);
  });

  currentLesson = 0;
  lessonPassed = false;
  placementIndex = 0;
  placementScores = [];
  storyReadCount = 0;

  if (assessmentBox) assessmentBox.classList.remove("placement-complete");
  assessmentIntro.classList.remove("hidden");
  assessmentTest.classList.add("hidden");
  assessmentResult.classList.add("hidden");

  buildDaySelector();
  loadLesson();
  updateAchievements();
  updateFluencyCoach("ready");

  coachMessage.textContent = "Progress reset. Start again slowly with Day 1.";
  resultMessage.textContent = "Progress has been reset.";
}

function setStartingLevel(level, fromPlacement = false) {
  const startIndex = levelStart[level];
  if (startIndex === undefined) return;

  currentLesson = startIndex;
  localStorage.setItem("readEasyPlacementLevel", level);
  if (getCompleted() < startIndex) localStorage.setItem("readEasyProgress", startIndex);

  buildDaySelector();
  loadLesson();

  if (!fromPlacement) {
    assessmentIntro.classList.add("hidden");
    assessmentTest.classList.add("hidden");
    assessmentResult.classList.remove("hidden");
    assessmentResult.innerHTML = `<h3>Manual Starting Point: Level ${level}</h3><p>${getPlacementSummary(level)}</p>`;
  }

  if (assessmentBox) assessmentBox.classList.add("placement-complete");
  coachMessage.textContent = `Starting at Level ${level}. Move slowly and build confidence.`;
}

function getBubblesMessage() {
  const completed = getCompleted();
  const savedPlacement = getSavedPlacementLevel();

  if (!savedPlacement && completed === 0) return "Start with the placement check, or choose a level manually.";
  if (completed < 5) return "Small reading steps become big progress.";
  if (completed < 15) return "You are becoming a stronger reader every day.";
  if (completed < 24) return "Now you are reading longer ideas. Take your time.";
  return "You are building real reading confidence with stronger passages.";
}

function startTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  timerCount.textContent = "Time: 0:00";
  timerInterval = setInterval(() => {
    timerSeconds++;
    timerCount.textContent = `Time: ${formatTime(timerSeconds)}`;
  }, 1000);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function restoreSavedPlacement() {
  const savedPlacement = getSavedPlacementLevel();
  if (!savedPlacement || !assessmentResult) return;

  assessmentIntro.classList.add("hidden");
  assessmentTest.classList.add("hidden");
  assessmentResult.classList.remove("hidden");
  assessmentResult.innerHTML = `
    <h3>Saved Starting Point: Level ${savedPlacement}</h3>
    <p>${getPlacementSummary(savedPlacement)}</p>
    <div class="button-row"><button onclick="restartPlacementTest()">Retake Placement</button></div>
  `;

  if (assessmentBox) assessmentBox.classList.add("placement-complete");
}

daySelect.addEventListener("change", jumpToDay);

buildDaySelector();
createAchievementSystem();
createFluencySystem();
restoreSavedPlacement();
loadLesson();