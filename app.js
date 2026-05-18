// =========================
// READEASY30
// =========================


// -------------------------
// LESSON DATA
// -------------------------

const lessons = [
    {
        title: "Day 1",
        passage: `
Tom went to the park.
He saw a dog.
The dog was friendly.
        `,
        questions: [
            "Where did Tom go?",
            "What did he see?",
            "Was the dog friendly?"
        ]
    }
];


// -------------------------
// ASSESSMENT DATA
// -------------------------

const assessmentLevels = [

    {
        level: 1,
        passage: `
Sam has a cat.
The cat is small.
Sam likes the cat.
        `,
        questions: [
            "Who has a cat?",
            "What is small?",
            "Does Sam like the cat?"
        ]
    },

    {
        level: 2,
        passage: `
Lisa went to the store with her mother.
She bought apples and milk.
        `,
        questions: [
            "Where did Lisa go?",
            "Who went with Lisa?",
            "What did she buy?"
        ]
    },

    {
        level: 3,
        passage: `
Michael enjoyed walking through the forest trail.
He stopped to watch birds in the trees.
        `,
        questions: [
            "Where did Michael walk?",
            "What did he watch?",
            "Where were the birds?"
        ]
    }

];


// -------------------------
// APP STATE
// -------------------------

let lessonStarted = false;
let lessonCompleted = false;

let placementComplete = false;
let currentAssessmentLevel = 0;
let assessmentScore = 0;

let assignedReadingLevel = 1;


// -------------------------
// START ASSESSMENT
// -------------------------

function startAssessment() {
    renderAssessment();
}


// -------------------------
// RENDER ASSESSMENT
// -------------------------

function renderAssessment() {

    const app = document.getElementById("app");

    const assessment = assessmentLevels[currentAssessmentLevel];

    app.innerHTML = `
        <div class="assessment-screen">

            <h1>📘 Reading Assessment</h1>

            <p>
                Read the passage below and answer the questions.
            </p>

            <div class="passage">
                ${assessment.passage}
            </div>

            <div class="questions">

                ${assessment.questions.map((question, index) => `
                    <div class="question-block">
                        <p>${question}</p>

                        <input
                            type="text"
                            id="answer-${index}"
                            placeholder="Type your answer"
                        >
                    </div>
                `).join("")}

            </div>

            <button onclick="submitAssessment()">
                Continue
            </button>

        </div>
    `;
}


// -------------------------
// SUBMIT ASSESSMENT
// -------------------------

function submitAssessment() {

    assessmentScore++;

    currentAssessmentLevel++;

    if (currentAssessmentLevel >= assessmentLevels.length) {

        placementComplete = true;

        assignedReadingLevel = assessmentScore;

        renderLesson();

        return;
    }

    renderAssessment();
}


// -------------------------
// START LESSON
// -------------------------

function startLesson() {

    lessonStarted = true;

    renderLesson();
}


// -------------------------
// FINISH LESSON
// -------------------------

function finishLesson() {

    lessonCompleted = true;

    const app = document.getElementById("app");

    app.innerHTML = `
        <div class="complete-screen">

            <h1>⭐ Great Job!</h1>

            <p>
                You completed today's lesson.
            </p>

            <p>
                Reading Level Assigned:
                <strong>${assignedReadingLevel}</strong>
            </p>

            <button onclick="location.reload()">
                Start Again
            </button>

        </div>
    `;
}


// -------------------------
// MAIN LESSON RENDER
// -------------------------

function renderLesson() {

    const app = document.getElementById("app");


    // -------------------------
    // START SCREEN
    // -------------------------

    if (!placementComplete) {

        app.innerHTML = `
            <div class="start-screen">

                <h1>📘 ReadEasy30</h1>

                <p>
                    25 Minutes to Reading Success
                </p>

                <button onclick="startAssessment()">
                    Find My Reading Level
                </button>

            </div>
        `;

        return;
    }


    // -------------------------
    // LESSON START SCREEN
    // -------------------------

    if (!lessonStarted) {

        app.innerHTML = `
            <div class="lesson-start-screen">

                <h1>
                    Welcome Reader
                </h1>

                <p>
                    Your Reading Level:
                    <strong>${assignedReadingLevel}</strong>
                </p>

                <button onclick="startLesson()">
                    Start Today's Lesson
                </button>

            </div>
        `;

        return;
    }


    // -------------------------
    // LESSON CONTENT
    // -------------------------

    const lesson = lessons[0];

    app.innerHTML = `
        <div class="lesson-screen">

            <h1>${lesson.title}</h1>

            <div class="passage">
                ${lesson.passage}
            </div>

            <div class="questions">

                ${lesson.questions.map((question, index) => `
                    <div class="question-block">

                        <p>${question}</p>

                        <input
                            type="text"
                            placeholder="Type your answer"
                        >

                    </div>
                `).join("")}

            </div>

            <button onclick="finishLesson()">
                Finish Lesson
            </button>

        </div>
    `;
}


// -------------------------
// START APP
// -------------------------

renderLesson();





