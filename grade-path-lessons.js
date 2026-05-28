// ReadEasy30 expanded lesson path
// This file safely replaces the starter lesson data without changing the app engine.

const gradeLevelDescriptions = {
  A: "Early reader: short sentences, familiar words, and clear answers.",
  B: "Grade 1 path: longer sentences, simple details, and everyday vocabulary.",
  C: "Grade 2 path: short paragraphs, sequence, setting, and main idea.",
  D: "Grade 3 path: stronger paragraphs, cause and effect, and simple inference.",
  E: "Grade 4 path: nonfiction passages, context clues, summaries, and purpose.",
  F: "Grade 5 path: compare ideas, evidence, author choices, and practical reading.",
  G: "Grades 6-7 path: multi-paragraph reading, claims, evidence, and deeper inference.",
  H: "Grade 8 readiness: theme, argument, bias, synthesis, and critical thinking."
};

const expandedLevelStart = { A: 0, B: 3, C: 6, D: 10, E: 14, F: 18, G: 22, H: 26 };

const expandedPlacementSteps = [
  {
    level: "A",
    title: "Placement A: The Red Hat",
    story: "Ben has a red hat. He puts the hat on his bed. The hat is soft.",
    questions: ["Who has a red hat?", "Where does Ben put the hat?", "How does the hat feel?"],
    answers: ["ben", "bed", "soft"]
  },
  {
    level: "B",
    title: "Placement B: Lunch Bag",
    story: "Nina packed lunch before school. She put an apple, a sandwich, and water in her bag. She checked the bag before she left.",
    questions: ["When did Nina pack lunch?", "Name one food Nina packed.", "What did Nina check?"],
    answers: ["before school", "apple|sandwich", "bag"]
  },
  {
    level: "C",
    title: "Placement C: The Book Report",
    story: "Carlos wanted to finish his book report. First, he read two chapters. Next, he wrote the main idea. Then he explained the story to his sister.",
    questions: ["What did Carlos want to finish?", "What did he write?", "Who heard his explanation?"],
    answers: ["book report", "main idea", "sister"]
  },
  {
    level: "D",
    title: "Placement D: Rereading for Clues",
    story: "Maya noticed that reading became easier when she slowed down. Instead of guessing, she reread confusing sentences and used nearby words to understand new vocabulary.",
    questions: ["What helped Maya read better?", "What did she do instead of guessing?", "What helped her understand new vocabulary?"],
    answers: ["slowed down|slow", "reread", "nearby words|clues"]
  },
  {
    level: "E",
    title: "Placement E: The Garden Notice",
    story: "A notice at the community garden explained a new watering schedule. Members should water plants before noon because afternoon heat causes more water to evaporate. The notice also asked members to report broken hoses to the volunteer desk.",
    questions: ["What did the notice explain?", "Why should members water before noon?", "Where should members report broken hoses?"],
    answers: ["watering schedule", "evaporate|afternoon heat", "volunteer desk"]
  },
  {
    level: "F",
    title: "Placement F: Two Study Plans",
    story: "Lena compared two study plans. The first plan asked her to read one long chapter on Sunday. The second plan divided the chapter into four shorter parts across the week. Lena chose the second plan because it gave her time to review and ask questions.",
    questions: ["What did Lena compare?", "How did the second plan divide the work?", "Why did Lena choose the second plan?"],
    answers: ["study plans", "four shorter parts|across the week", "review|ask questions"]
  },
  {
    level: "G",
    title: "Placement G: A School Proposal",
    story: "A student proposal argued that the school should add a quiet reading room. The writer claimed that many students need a calm place to read before class. As evidence, the proposal included a survey showing that most students used the library when it was open early.",
    questions: ["What change did the proposal suggest?", "What claim did the writer make?", "What evidence supported the claim?"],
    answers: ["quiet reading room", "calm place|quiet place", "survey|library"]
  },
  {
    level: "H",
    title: "Placement H: Reading a Viewpoint",
    story: "The article praised a new city bus route, but it mostly quoted people who already supported the plan. It gave little space to riders worried about longer walks to bus stops. A careful reader would notice that the article's evidence was useful but incomplete.",
    questions: ["What did the article praise?", "Which concern received little space?", "Why was the evidence incomplete?"],
    answers: ["bus route", "longer walks", "only supporters|little space|incomplete"]
  }
];

const expandedLessonData = [
  ["Level A", gradeLevelDescriptions.A, "Day 1: The Red Hat", "Ben has a red hat. He puts the hat on his bed. The hat is soft.", ["Who has a red hat?", "Where does Ben put the hat?", "How does the hat feel?"], ["ben", "bed", "soft"], ["hat", "bed", "soft"]],
  ["Level A", gradeLevelDescriptions.A, "Day 2: Rain Boots", "Rain falls outside. Mia puts on boots. She steps over a puddle and stays dry.", ["What falls outside?", "What does Mia put on?", "Why does Mia stay dry?"], ["rain", "boots", "steps over|puddle"], ["rain", "boots", "puddle"]],
  ["Level A", gradeLevelDescriptions.A, "Day 3: Max Helps", "Max helps Dad carry a bag. The bag is not heavy. Dad smiles and says thank you.", ["Who helps Dad?", "What does Max carry?", "What does Dad say?"], ["max", "bag", "thank you"], ["helps", "carry", "thank"]],

  ["Level B", gradeLevelDescriptions.B, "Day 4: The Library Card", "Maria went to the library with her aunt. She got a library card and chose a book about turtles. At home, she read ten pages after dinner.", ["Where did Maria go?", "What kind of card did she get?", "When did Maria read ten pages?"], ["library", "library card", "after dinner"], ["library", "card", "turtles"]],
  ["Level B", gradeLevelDescriptions.B, "Day 5: The Bus Stop", "Leah waited at the bus stop after school. The bus was late, so she read the sign on the pole. The sign helped her know the next bus time.", ["Where did Leah wait?", "What was late?", "What helped Leah know the next bus time?"], ["bus stop", "bus", "sign"], ["bus", "late", "sign"]],
  ["Level B", gradeLevelDescriptions.B, "Day 6: The New Word", "Jay saw a new word in his book. He did not guess. He read the sentence again and used the other words to help him.", ["What did Jay see?", "What did Jay not do?", "What helped Jay understand the word?"], ["new word", "guess", "other words|sentence"], ["guess", "sentence", "understand"]],

  ["Level C", gradeLevelDescriptions.C, "Day 7: Reading After Dinner", "Jordan practiced reading every evening after dinner. At first, some words felt difficult. He reread each sentence and underlined words he wanted to learn.", ["When did Jordan practice reading?", "What did Jordan underline?", "What did Jordan do when words felt difficult?"], ["after dinner", "words", "reread"], ["practiced", "underlined", "reread"]],
  ["Level C", gradeLevelDescriptions.C, "Day 8: The Work Schedule", "Angela looked at her work schedule on the break room wall. The schedule showed that she worked Monday, Wednesday, and Friday. She copied the days into her phone so she would not forget.", ["Where was the schedule?", "What days did Angela work?", "Why did she copy the days into her phone?"], ["break room wall", "monday wednesday friday", "not forget"], ["schedule", "copied", "forget"]],
  ["Level C", gradeLevelDescriptions.C, "Day 9: Main Idea Practice", "The school garden needed water every morning. Three students filled watering cans, and two students pulled weeds. By Friday, the lettuce plants looked taller and greener.", ["What needed water every morning?", "What did two students pull?", "What is the main idea?"], ["school garden", "weeds", "students cared|garden grew"], ["garden", "weeds", "main idea"]],
  ["Level C", gradeLevelDescriptions.C, "Day 10: Finding Proof", "Noah thought the story was about a lost kitten. He reread the first paragraph. The paragraph said the kitten was hiding under the porch, not lost.", ["What did Noah think at first?", "What did Noah reread?", "Where was the kitten?"], ["lost kitten", "first paragraph", "under the porch"], ["proof", "paragraph", "hiding"]],

  ["Level D", gradeLevelDescriptions.D, "Day 11: The Science Jar", "Amira placed two bean seeds in a clear jar with a damp paper towel. She put the jar near a sunny window. After four days, one seed cracked open and a tiny root appeared.", ["Where did Amira put the seeds?", "Why did she put the jar near a window?", "What happened after four days?"], ["jar", "sunny|sun", "root appeared|seed cracked"], ["seed", "damp", "root"]],
  ["Level D", gradeLevelDescriptions.D, "Day 12: The Class Debate", "The class debated whether students should have more time for lunch. Ben said longer lunch would help students eat without rushing. Kayla said the school day might need to end later if lunch became longer.", ["What was the debate about?", "Why did Ben support longer lunch?", "What concern did Kayla raise?"], ["more time for lunch|longer lunch", "without rushing|not rush", "end later"], ["debate", "support", "concern"]],
  ["Level D", gradeLevelDescriptions.D, "Day 13: Cause and Effect", "During the storm, heavy rain filled the street drains with leaves. Because the water could not drain quickly, a large puddle formed near the curb. City workers cleared the leaves the next morning.", ["What filled the drains?", "Why did the puddle form?", "Who cleared the leaves?"], ["leaves", "water could not drain|drain quickly", "city workers"], ["storm", "drain", "curb"]],
  ["Level D", gradeLevelDescriptions.D, "Day 14: A Character Choice", "Tomas found a wallet under a park bench. He wanted to keep walking, but he noticed a school ID inside. Tomas took the wallet to the office because he knew someone would be looking for it.", ["What did Tomas find?", "What did he notice inside?", "What does his choice show about him?"], ["wallet", "school id", "honest|responsible|helpful"], ["wallet", "choice", "responsible"]],

  ["Level E", gradeLevelDescriptions.E, "Day 15: How Bees Help", "Bees collect nectar from flowers, but they also move pollen as they travel. This process helps many plants grow fruit and seeds. Without pollinators, farmers would have a harder time growing some foods.", ["What do bees collect?", "What else do bees move?", "Why are pollinators important to farmers?"], ["nectar", "pollen", "grow food|fruit|seeds"], ["nectar", "pollen", "pollinators"]],
  ["Level E", gradeLevelDescriptions.E, "Day 16: Reading a Chart", "A chart showed how many minutes four students read each night. Luis read for 15 minutes, Hana read for 20, Marcus read for 10, and Priya read for 25. Priya read the longest, but all four students practiced.", ["What did the chart show?", "Who read the longest?", "What is one conclusion from the chart?"], ["minutes|read", "priya", "all practiced|priya read longest"], ["chart", "minutes", "conclusion"]],
  ["Level E", gradeLevelDescriptions.E, "Day 17: Context Clues", "The trail was muddy after the rain, so the hikers moved cautiously. They stepped slowly around puddles and held tree branches for balance. The word cautiously means they were careful.", ["Why was the trail muddy?", "How did the hikers move?", "What does cautiously mean?"], ["rain", "slowly|carefully", "careful"], ["cautiously", "balance", "clues"]],
  ["Level E", gradeLevelDescriptions.E, "Day 18: Author's Purpose", "The flyer explained three reasons to join the neighborhood cleanup. It listed the meeting time, showed photos of the park, and asked families to volunteer. The author's purpose was to persuade people to help.", ["What did the flyer explain?", "What did it ask families to do?", "What was the author's purpose?"], ["reasons|cleanup", "volunteer|help", "persuade"], ["purpose", "persuade", "volunteer"]],

  ["Level F", gradeLevelDescriptions.F, "Day 19: Comparing Plans", "Two study plans covered the same chapter. Plan A asked students to read everything on Sunday. Plan B divided the chapter across four nights and included review time. Plan B would likely help students remember more because it spreads practice over several days.", ["What did both plans cover?", "How was Plan B different?", "Why might Plan B help students remember more?"], ["same chapter", "four nights|review", "spreads practice|several days"], ["compare", "review", "practice"]],
  ["Level F", gradeLevelDescriptions.F, "Day 20: The Water Filter", "A science article explained that a simple water filter can remove some dirt from water, but it cannot make all water safe to drink. The article warned readers not to confuse clearer water with clean drinking water.", ["What can a simple filter remove?", "What can it not always do?", "What warning did the article give?"], ["dirt", "safe to drink", "clearer water|clean drinking water"], ["filter", "warning", "safe"]],
  ["Level F", gradeLevelDescriptions.F, "Day 21: Evidence in a Review", "A review said the new lunch line was faster than the old one. To support the claim, the writer timed both lines for a week. The new line took six minutes on average, while the old line took nine.", ["What claim did the review make?", "How did the writer support the claim?", "Which line was faster?"], ["faster", "timed both lines", "new line"], ["claim", "evidence", "average"]],
  ["Level F", gradeLevelDescriptions.F, "Day 22: Inference from Action", "When the coach announced extra practice, Malik packed his shoes before anyone reminded him. He also wrote the practice time on a note and placed it by the door. Malik's actions suggest that he wanted to be prepared.", ["What did Malik pack?", "Where did he place the note?", "What can you infer about Malik?"], ["shoes", "by the door", "prepared|responsible"], ["infer", "prepared", "actions"]],

  ["Level G", gradeLevelDescriptions.G, "Day 23: A School Proposal", "A student proposal argued that the school should open the library before first period. The writer claimed that early library hours would give students a calm place to read or finish homework. As evidence, the proposal included a survey showing that many students arrived at school twenty minutes early.", ["What change did the proposal suggest?", "What claim did the writer make?", "What evidence supported the claim?"], ["open the library|early library", "calm place", "survey|twenty minutes early"], ["proposal", "claim", "evidence"]],
  ["Level G", gradeLevelDescriptions.G, "Day 24: Evaluating a Source", "An online post claimed that one snack improved memory for every student. The post sounded exciting, but it did not name any researchers or explain how the claim was tested. A careful reader would question the source before trusting it.", ["What did the post claim?", "What information was missing?", "Why should a reader question the source?"], ["snack improved memory", "researchers|tested", "missing evidence|not tested"], ["source", "claim", "question"]],
  ["Level G", gradeLevelDescriptions.G, "Day 25: Theme in a Story", "In the story, Nia practiced the violin every day even when the songs sounded rough. She wanted to quit before the concert, but her grandfather reminded her that progress often sounds messy at first. By the concert, Nia played with confidence. One theme is that steady effort can turn frustration into growth.", ["What did Nia practice?", "Who encouraged her?", "What is one theme of the story?"], ["violin", "grandfather", "steady effort|growth|practice"], ["theme", "effort", "confidence"]],
  ["Level G", gradeLevelDescriptions.G, "Day 26: Cause, Effect, and Solution", "The town park had fewer visitors after several lights stopped working. Families felt less comfortable staying near sunset. After the city repaired the lights and trimmed bushes near the path, evening visits increased again.", ["Why did the park have fewer visitors?", "What solution did the city use?", "What happened after the repairs?"], ["lights stopped working", "repaired lights|trimmed bushes", "visits increased"], ["cause", "solution", "increased"]],

  ["Level H", gradeLevelDescriptions.H, "Day 27: Recognizing Bias", "The article praised the new bus route, but it mostly quoted people who already supported the plan. It gave little space to riders worried about longer walks to bus stops. The article's information was useful, but a reader should notice that the evidence was not balanced.", ["What did the article praise?", "Whose concern received little space?", "Why was the article not balanced?"], ["bus route", "riders|longer walks", "mostly quoted supporters|not balanced"], ["bias", "balanced", "evidence"]],
  ["Level H", gradeLevelDescriptions.H, "Day 28: Argument and Counterargument", "An editorial argued that students should have more project-based learning because projects can make lessons feel useful. A counterargument is that projects take time and can be hard to grade fairly. A strong decision should consider both learning value and classroom limits.", ["What did the editorial argue for?", "What counterargument was mentioned?", "What should a strong decision consider?"], ["project based learning", "hard to grade|take time", "learning value|classroom limits"], ["argument", "counterargument", "decision"]],
  ["Level H", gradeLevelDescriptions.H, "Day 29: Synthesizing Two Texts", "One text explained that sleep helps the brain store new learning. Another text described students who improved test scores after setting a regular bedtime. Together, the texts suggest that sleep habits can affect learning, not just energy.", ["What did the first text explain?", "What did the second text describe?", "What idea do the texts support together?"], ["sleep helps|store learning", "test scores|regular bedtime", "sleep habits affect learning"], ["synthesize", "sleep", "learning"]],
  ["Level H", gradeLevelDescriptions.H, "Day 30: Reading Like a Thinker", "Strong readers do more than finish words on a page. They ask what the text says, how the writer supports ideas, and what may be missing. When readers compare evidence, notice bias, and explain their thinking, they are ready for harder middle-school reading.", ["What do strong readers do besides finish words?", "Name one thing strong readers notice or compare.", "What shows readiness for harder reading?"], ["ask|what the text says", "evidence|bias|missing", "explain their thinking|compare evidence"], ["evidence", "bias", "thinking"]]
];

if (typeof lessons !== "undefined" && typeof addLesson === "function") {
  lessons.length = 0;

  expandedLessonData.forEach(lesson => addLesson(...lesson));

  Object.keys(levelStart).forEach(key => delete levelStart[key]);
  Object.assign(levelStart, expandedLevelStart);

  placementSteps.length = 0;
  expandedPlacementSteps.forEach(step => placementSteps.push(step));

  getPlacementSummary = function(level) {
    const summaries = {
      A: "Start with early-reader sentences. Build comfort first.",
      B: "Start with Grade 1 style reading. Practice details and simple vocabulary.",
      C: "Start with Grade 2 style paragraphs. Practice sequence, setting, and main idea.",
      D: "Start with Grade 3 style reading. Practice cause, effect, and simple inference.",
      E: "Start with Grade 4 style nonfiction. Practice context clues, purpose, and summaries.",
      F: "Start with Grade 5 style reading. Compare ideas and find evidence.",
      G: "Start with Grades 6-7 style reading. Practice claims, evidence, and source thinking.",
      H: "Start with Grade 8 readiness. Practice argument, bias, synthesis, and critical thinking."
    };
    return summaries[level] || summaries.A;
  };

  getBubblesMessage = function() {
    const completed = getCompleted();
    const savedPlacement = getSavedPlacementLevel();

    if (!savedPlacement && completed === 0) return "Start with the placement check, or choose a level manually.";
    if (completed < 6) return "Small reading steps become big progress.";
    if (completed < 14) return "You are building paragraph confidence. Reread for proof.";
    if (completed < 22) return "Now you are reading stronger nonfiction. Look for main ideas and evidence.";
    if (completed < 27) return "You are practicing middle-school reading skills. Slow down and explain your thinking.";
    return "You are working toward 8th-grade readiness. Find evidence, notice bias, and connect ideas.";
  };

  if (typeof buildDaySelector === "function") buildDaySelector();
  if (typeof loadLesson === "function") loadLesson();
  if (typeof updateAchievements === "function") updateAchievements();
}
