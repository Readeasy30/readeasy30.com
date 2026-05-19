const lessons = [
  {
    title: "Day 1 Reading",
    story: "Tom went to the park. He saw a dog. The dog was friendly.",
    questions: [
      "Where did Tom go?",
      "What did Tom see?",
      "Was the dog friendly?"
    ]
  },

  {
    title: "Day 2 Reading",
    story: "Maria read a book at school. The book was about a cat.",
    questions: [
      "Where did Maria read?",
      "What did Maria read?",
      "What was the book about?"
    ]
  },

  {
    title: "Day 3 Reading",
    story: "Jake helped his mother carry groceries into the house.",
    questions: [
      "Who helped his mother?",
      "What did Jake carry?",
      "Where did they take the groceries?"
    ]
  },

  {
    title: "Day 4 Reading",
    story: "Sara planted flowers in the garden. She watered them every day.",
    questions: [
      "What did Sara plant?",
      "Where were the flowers planted?",
      "What did Sara do every day?"
    ]
  },

  {
    title: "Day 5 Reading",
    story: "Ben rode his bicycle to the store to buy some milk.",
    questions: [
      "Who rode the bicycle?",
      "Where did Ben go?",
      "What did Ben buy?"
    ]
  },

  {
    title: "Day 6 Reading",
    story: "Lily baked cookies with her grandmother in the kitchen.",
    questions: [
      "Who baked cookies?",
      "Who helped Lily?",
      "Where did they bake?"
    ]
  },

  {
    title: "Day 7 Reading",
    story: "David played soccer with his friends after school.",
    questions: [
      "Who played soccer?",
      "Who did David play with?",
      "When did they play?"
    ]
  },

  {
    title: "Day 8 Reading",
    story: "Emma fed the fish before going to bed.",
    questions: [
      "Who fed the fish?",
      "What animal was fed?",
      "When did Emma feed them?"
    ]
  },

  {
    title: "Day 9 Reading",
    story: "Noah cleaned his room and put away his toys.",
    questions: [
      "Who cleaned the room?",
      "What did Noah put away?",
      "What room was cleaned?"
    ]
  },

  {
    title: "Day 10 Reading",
    story: "Ava drew a picture of a rainbow during art class.",
    questions: [
      "Who drew a picture?",
      "What did Ava draw?",
      "When did she draw it?"
    ]
  },

  {
    title: "Day 11 Reading",
    story: "Mia found a red ball under the table. She gave it to her brother.",
    questions: [
      "What did Mia find?",
      "Where was the ball?",
      "Who did Mia give it to?"
    ]
  },

  {
    title: "Day 12 Reading",
    story: "Sam saw dark clouds in the sky. He took his umbrella to school.",
    questions: [
      "What did Sam see?",
      "What did Sam take?",
      "Where did Sam go?"
    ]
  },

  {
    title: "Day 13 Reading",
    story: "Nina made a card for her teacher. She used paper, glue, and crayons.",
    questions: [
      "Who made a card?",
      "Who was the card for?",
      "What did Nina use?"
    ]
  },

  {
    title: "Day 14 Reading",
    story: "Owen helped wash the car. He used soap, water, and a sponge.",
    questions: [
      "Who helped wash the car?",
      "What did Owen wash?",
      "What did he use?"
    ]
  },

  {
    title: "Day 15 Reading",
    story: "Zoe read a story to her little sister before bedtime.",
    questions: [
      "Who read a story?",
      "Who listened to the story?",
      "When did Zoe read it?"
    ]
  }
];

let currentDay = 0;

function loadLesson() {

  const lesson = lessons[currentDay];

  document.getElementById("title").textContent =
    lesson.title;

  document.getElementById("progress").textContent =
    "Lesson " + (currentDay + 1) +
    " of " + lessons.length;

  document.getElementById("story").textContent =
    lesson.story;

  document.getElementById("q1").textContent =
    lesson.questions[0];

  document.getElementById("q2").textContent =
    lesson.questions[1];

  document.getElementById("q3").textContent =
    lesson.questions[2];

  document.getElementById("a1").value = "";
  document.getElementById("a2").value = "";
  document.getElementById("a3").value = "";

  document.getElementById("result").style.display =
    "none";

  document.getElementById("result").textContent =
    "";

  document.getElementById("coachMessage").textContent =
    "Take your time. Read the story first. Then answer the questions.";
}

function checkAnswers() {

  const a1 =
    document.getElementById("a1").value.trim();

  const a2 =
    document.getElementById("a2").value.trim();

  const a3 =
    document.getElementById("a3").value.trim();

  const result =
    document.getElementById("result");

  result.style.display = "block";

  if (a1 && a2 && a3) {

    result.textContent =
      "✅ Nice work. You answered all 3 questions.";

    document.getElementById("coachMessage").textContent =
      "Great job. You stayed with the story and answered the questions.";

  } else {

    result.textContent =
      "🫧 Please answer all 3 questions before moving on.";

    document.getElementById("coachMessage").textContent =
      "No rush. Go back to the story and try again.";
  }
}

function nextDay() {

  if (currentDay < lessons.length - 1) {

    currentDay++;

    loadLesson();

  } else {

    document.getElementById("coachMessage").textContent =
      "🎉 You finished all available lessons. Great work.";
  }
}

function prevDay() {

  if (currentDay > 0) {

    currentDay--;

    loadLesson();
  }
}

loadLesson();

