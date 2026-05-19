const lessons = [
  { title: "Day 1 Reading", story: "Tom went to the park. He saw a dog. The dog was friendly.", questions: ["Where did Tom go?", "What did Tom see?", "Was the dog friendly?"], coach: "Point to each word as you read. Go slowly." },
  { title: "Day 2 Reading", story: "Maria read a book at school. The book was about a cat.", questions: ["Where did Maria read?", "What did Maria read?", "What was the book about?"], coach: "Read the story one time. Then read it again before answering." },
  { title: "Day 3 Reading", story: "Jake helped his mother carry groceries into the house.", questions: ["Who helped his mother?", "What did Jake carry?", "Where did they take the groceries?"], coach: "Look for the who, what, and where in the story." },
  { title: "Day 4 Reading", story: "Sara planted flowers in the garden. She watered them every day.", questions: ["What did Sara plant?", "Where were the flowers planted?", "What did Sara do every day?"], coach: "Try saying the story out loud before answering." },
  { title: "Day 5 Reading", story: "Ben rode his bicycle to the store to buy some milk.", questions: ["Who rode the bicycle?", "Where did Ben go?", "What did Ben buy?"], coach: "Find the action word. What did the person do?" },
  { title: "Day 6 Reading", story: "Lily baked cookies with her grandmother in the kitchen.", questions: ["Who baked cookies?", "Who helped Lily?", "Where did they bake?"], coach: "Think about the people in the story first." },
  { title: "Day 7 Reading", story: "David played soccer with his friends after school.", questions: ["Who played soccer?", "Who did David play with?", "When did they play?"], coach: "Look for the time clue in the sentence." },
  { title: "Day 8 Reading", story: "Emma fed the fish before going to bed.", questions: ["Who fed the fish?", "What animal was fed?", "When did Emma feed them?"], coach: "Read carefully. Small words can give big clues." },
  { title: "Day 9 Reading", story: "Noah cleaned his room and put away his toys.", questions: ["Who cleaned the room?", "What did Noah put away?", "What room was cleaned?"], coach: "Picture the story in your mind." },
  { title: "Day 10 Reading", story: "Ava drew a picture of a rainbow during art class.", questions: ["Who drew a picture?", "What did Ava draw?", "When did she draw it?"], coach: "Try reading the story two times before answering." },
  { title: "Day 11 Reading", story: "Mia found a red ball under the table. She gave it to her brother.", questions: ["What did Mia find?", "Where was the ball?", "Who did Mia give it to?"], coach: "Notice where the object was found." },
  { title: "Day 12 Reading", story: "Sam saw dark clouds in the sky. He took his umbrella to school.", questions: ["What did Sam see?", "What did Sam take?", "Where did Sam go?"], coach: "Ask yourself why Sam needed the umbrella." },
  { title: "Day 13 Reading", story: "Nina made a card for her teacher. She used paper, glue, and crayons.", questions: ["Who made a card?", "Who was the card for?", "What did Nina use?"], coach: "Look for the list of things used." },
  { title: "Day 14 Reading", story: "Owen helped wash the car. He used soap, water, and a sponge.", questions: ["Who helped wash the car?", "What did Owen wash?", "What did he use?"], coach: "Read the second sentence for extra details." },
  { title: "Day 15 Reading", story: "Zoe read a story to her little sister before bedtime.", questions: ["Who read a story?", "Who listened to the story?", "When did Zoe read it?"], coach: "Find who did the action and who received it." },
  { title: "Day 16 Reading", story: "Caleb packed his lunch before leaving for school.", questions: ["Who packed his lunch?", "What did Caleb pack?", "Where was Caleb going?"], coach: "Look for what happened before school." },
  { title: "Day 17 Reading", story: "Grace found a small bird near the tree. She called her dad for help.", questions: ["What did Grace find?", "Where was the bird?", "Who did Grace call?"], coach: "If the story has two actions, answer them one at a time." },
  { title: "Day 18 Reading", story: "Henry put his shoes by the door so he could find them in the morning.", questions: ["Who put shoes by the door?", "Where did Henry put his shoes?", "When did he want to find them?"], coach: "Look for the reason why Henry did it." },
  { title: "Day 19 Reading", story: "Ella helped set the table before dinner. She put out plates and forks.", questions: ["Who helped set the table?", "When did Ella help?", "What did she put out?"], coach: "Read for the time, then read for the objects." },
  { title: "Day 20 Reading", story: "Lucas read a sign at the park. The sign said to keep the gate closed.", questions: ["Who read the sign?", "Where was the sign?", "What did the sign say?"], coach: "Signs give instructions. Find what the sign said." },
  { title: "Day 21 Reading", story: "Harper picked apples from the tree and placed them in a basket.", questions: ["Who picked apples?", "Where were the apples?", "What did Harper use?"], coach: "Look for where the apples came from and where they went." },
  { title: "Day 22 Reading", story: "Jack watered the plants on the porch before the sun came up.", questions: ["Who watered the plants?", "Where were the plants?", "When did Jack water them?"], coach: "Find the place clue and the time clue." },
  { title: "Day 23 Reading", story: "Leah wore her rain boots because the ground was wet outside.", questions: ["Who wore rain boots?", "Why did Leah wear them?", "What was wet?"], coach: "The word because tells you the reason." },
  { title: "Day 24 Reading", story: "Ryan opened the window to let fresh air into the room.", questions: ["Who opened the window?", "Why did Ryan open it?", "Where did the fresh air go?"], coach: "Look for the reason after the word to." },
  { title: "Day 25 Reading", story: "Chloe drew stars and moons on her science project poster.", questions: ["Who drew stars and moons?", "What did Chloe draw on?", "What shapes did she draw?"], coach: "Find the person, the place, and the details." },
  { title: "Day 26 Reading", story: "Mason found his library book in his backpack after lunch.", questions: ["Who found the book?", "Where was the book?", "When did Mason find it?"], coach: "Look for where and when in the same sentence." },
  { title: "Day 27 Reading", story: "Sofia helped her friend pick up pencils from the classroom floor.", questions: ["Who helped her friend?", "What did Sofia pick up?", "Where were the pencils?"], coach: "Break the sentence into small parts." },
  { title: "Day 28 Reading", story: "Ethan listened to music while he cleaned the kitchen table.", questions: ["Who listened to music?", "What did Ethan clean?", "Where was the table?"], coach: "Two things happened at the same time. Find both." },
  { title: "Day 29 Reading", story: "Isla saw a bright star in the sky before she went inside.", questions: ["Who saw a star?", "What kind of star was it?", "Where was the star?"], coach: "Look for describing words like bright." },
  { title: "Day 30 Reading", story: "Liam finished his reading lesson and smiled because he was proud.", questions: ["Who finished the lesson?", "Why did Liam smile?", "How did Liam feel?"], coach: "Great finish. Look for the feeling in the story." }
];

let currentDay = Number(localStorage.getItem("readeasy-currentDay")) || 0;
let completedLessons = JSON.parse(localStorage.getItem("readeasy-completedLessons")) || [];

function saveProgress() {
  localStorage.setItem("readeasy-currentDay", currentDay);
  localStorage.setItem("readeasy-completedLessons", JSON.stringify(completedLessons));
}

function loadLesson() {
  const lesson = lessons[currentDay];

  document.getElementById("title").textContent = lesson.title;

  document.getElementById("progress").textContent =
    "Lesson " + (currentDay + 1) + " of " + lessons.length +
    " | Completed: " + completedLessons.length;

  document.getElementById("story").textContent = lesson.story;
  document.getElementById("q1").textContent = lesson.questions[0];
  document.getElementById("q2").textContent = lesson.questions[1];
  document.getElementById("q3").textContent = lesson.questions[2];

  document.getElementById("a1").value = "";
  document.getElementById("a2").value = "";
  document.getElementById("a3").value = "";

  document.getElementById("result").style.display = "none";
  document.getElementById("result").textContent = "";

  document.getElementById("coachMessage").textContent = lesson.coach;

  saveProgress();
}

function checkAnswers() {
  const a1 = document.getElementById("a1").value.trim();
  const a2 = document.getElementById("a2").value.trim();
  const a3 = document.getElementById("a3").value.trim();

  const result = document.getElementById("result");
  result.style.display = "block";

  if (a1 && a2 && a3) {
    if (!completedLessons.includes(currentDay)) {
      completedLessons.push(currentDay);
    }

    saveProgress();

    result.textContent = "✅ Nice work. Lesson complete.";
    document.getElementById("coachMessage").textContent =
      "Great job. You have completed " + completedLessons.length + " lesson(s).";
  } else {
    result.textContent = "🫧 Please answer all 3 questions before moving on.";
    document.getElementById("coachMessage").textContent =
      "No rush. Go back to the story and try again.";
  }

  document.getElementById("progress").textContent =const progressPercent =
  ((completedLessons.length / lessons.length) * 100);

document.getElementById("progressBar").style.width =
  progressPercent + "%";
    "Lesson " + (currentDay + 1) + " of " + lessons.length +
    " | Completed: " + completedLessons.length;
}

function nextDay() {
  if (currentDay < lessons.length - 1) {
    currentDay++;
    loadLesson();
  } else {
    document.getElementById("coachMessage").textContent =
      "🎉 You finished all 30 lessons. Great work.";
  }
}

function prevDay() {
  if (currentDay > 0) {
    currentDay--;
    loadLesson();
  }
}

function resetProgress() {
  localStorage.removeItem("readeasy-currentDay");
  localStorage.removeItem("readeasy-completedLessons");

  currentDay = 0;
  completedLessons = [];

  loadLesson();

  document.getElementById("coachMessage").textContent =
    "Progress reset. Start again at Day 1.";
}

document.addEventListener("DOMContentLoaded", () => {
  loadLesson();
});
