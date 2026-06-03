// ReadEasy30 240-day curriculum data
// Safe source file only. It is not wired into the live app until app.html/app.js load it.
(function () {
  const levels = [
    {
      level: "A",
      range: "Days 1-30",
      title: "Starter reading confidence",
      outcome: "Read simple sentences, short passages, and basic everyday text with less fear.",
      topics: [
        "Simple sentences", "Rereading", "Short vowel words", "Sight words", "Confidence review",
        "CVC words", "Beginning sounds", "Ending sounds", "Word matching", "Level A check 1",
        "Sentence meaning", "Details", "Main idea intro", "Sequence intro", "Review",
        "Short story stamina", "Vocabulary intro", "Context clue intro", "Who where when", "Level A check 2",
        "Real-life words", "Functional reading", "Finding proof", "Read aloud practice", "Confidence review",
        "Longer sentences", "Simple paragraph", "Retell", "Final Level A review", "Level A celebration"
      ]
    },
    {
      level: "B",
      range: "Days 31-60",
      title: "Stronger early reading",
      outcome: "Read stronger phonics patterns, sight words, short paragraphs, and basic real-life notes.",
      topics: [
        "Short vowel review", "Consonant blends", "Digraphs", "Silent e", "Word families",
        "Sight words 1", "Sentence fluency", "Who and what details", "Where and when details", "Main idea basics",
        "Sequence", "Cause and effect", "Vocabulary clues", "Signs and labels", "Review",
        "AI and AY words", "EE and EA words", "OA and OW words", "AR and OR words", "ER IR UR words",
        "Compound words", "Contractions", "Short paragraph", "Text evidence", "Character feelings",
        "Problem and solution", "Compare", "Everyday notes", "Level B review", "Level B check"
      ]
    },
    {
      level: "C",
      range: "Days 61-90",
      title: "Paragraph confidence",
      outcome: "Read full paragraphs, answer with proof, summarize, and use context clues.",
      topics: [
        "Paragraph stamina", "Main idea and details", "Context clues", "Examples as clues", "Multiple meaning words",
        "Prefixes un and re", "Suffixes ed and ing", "Suffixes ful and less", "Expression", "Dialogue",
        "Sequence four steps", "Paragraph summary", "Inference intro", "Character traits", "Review",
        "Headings", "Fact and opinion", "Tables", "Directions", "Problem and solution nonfiction",
        "Compare passages", "Author purpose", "Roots intro", "Long sentences", "Pronouns",
        "Ask questions", "Forms", "Level C review", "Level C check", "Bridge to D"
      ]
    },
    {
      level: "D",
      range: "Days 91-120",
      title: "Practical reading and longer text",
      outcome: "Read notices, schedules, labels, emails, directions, and longer connected paragraphs.",
      topics: [
        "Notices", "Schedules", "Labels", "Menus", "Letters",
        "Emails", "Instructions", "Connected paragraphs", "Main idea across paragraphs", "Evidence review",
        "Cause and effect chain", "Viewpoints", "Practical vocabulary", "Warnings and steps", "Review",
        "Short article", "Author purpose", "Fact opinion advice", "Persuasion", "Practical inference",
        "Directions text", "Appointment info", "Workplace note", "School notice", "Practical summary",
        "Vocabulary review", "Mixed comprehension", "Level D review", "Level D check", "Bridge to E"
      ]
    },
    {
      level: "E",
      range: "Days 121-150",
      title: "Vocabulary and summaries",
      outcome: "Build reading endurance, stronger vocabulary, summaries, and early analysis.",
      topics: [
        "Endurance", "Central idea", "Supporting details", "Story summary", "Nonfiction summary",
        "Contrast clues", "Definition clues", "Prefixes", "Suffixes", "Roots",
        "Inference and evidence", "Motivation", "Theme intro", "Compare characters", "Review",
        "Text features", "Graphs", "Opinion and reasons", "Bias intro", "Point of view",
        "Compare articles", "Timeline and process", "Cause and effect nonfiction", "Problem solution article", "Complex sentences",
        "Academic vocabulary", "Mixed passage", "Level E review", "Level E check", "Bridge to F"
      ]
    },
    {
      level: "F",
      range: "Days 151-180",
      title: "Evidence and nonfiction strength",
      outcome: "Read longer nonfiction, judge evidence, paraphrase, and answer with support.",
      topics: [
        "Long nonfiction", "Central idea across text", "Evidence quality", "Paraphrasing", "Description structure",
        "Sequence structure", "Compare structure", "Cause effect structure", "Problem solution structure", "Academic words 1",
        "Academic words 2", "Nonfiction inference", "Author claim", "Reasons and evidence", "Review",
        "Perspective", "Loaded language", "Compare sources", "Credibility", "Visual information",
        "Technical directions", "Rules and policies", "Multi-section summary", "Evidence response", "Advanced vocabulary",
        "Theme in longer story", "Character change", "Level F review", "Level F check", "Bridge to G"
      ]
    },
    {
      level: "G",
      range: "Days 181-210",
      title: "Middle-school thinking",
      outcome: "Analyze arguments, tone, connotation, data, media, synthesis, and longer responses.",
      topics: [
        "Grade 6 nonfiction", "Implied main idea", "Multiple claims", "Analyze evidence", "Compare arguments",
        "Tone", "Connotation", "Figurative language", "Theme across text", "Conflict",
        "Narrator", "Mixed structures", "Research question", "Note-taking", "Review",
        "Argument vocabulary", "Counterclaim", "Evaluate reasoning", "Data in text", "Media literacy",
        "Audience and purpose", "Compare genres", "Synthesis intro", "Longer response", "Roots advanced",
        "Reading stamina", "Strategy check", "Level G review", "Level G check", "Bridge to H"
      ]
    },
    {
      level: "H",
      range: "Days 211-240",
      title: "8th-grade readiness",
      outcome: "Practice 8th-grade readiness: inference, claim, credibility, synthesis, media reading, and final review.",
      topics: [
        "8th-grade nonfiction", "Deeper inference", "Author claim", "Counterclaim and response", "Source credibility",
        "Bias and framing", "Two-source synthesis", "Compare evidence", "Technical text", "Adult functional text",
        "Literary theme", "Character development", "Point of view effect", "Figurative analysis", "Review",
        "Vocabulary mastery", "Structure mastery", "Argument response", "Long summary", "Compare themes",
        "News and media reading", "Data and claims", "Independent reading", "Hard text strategy", "Practical review",
        "Explain aloud", "Final review 1", "Final review 2", "Level H check", "Celebration"
      ]
    }
  ];

  function makeGoal(level, focus) {
    if (level === "A") return `Practice ${focus.toLowerCase()} with calm support and simple questions.`;
    if (level === "B") return `Build early reading skill with ${focus.toLowerCase()} and short proof-based answers.`;
    if (level === "C") return `Read paragraphs using ${focus.toLowerCase()}, then explain the answer in simple words.`;
    if (level === "D") return `Use ${focus.toLowerCase()} to build practical real-life reading confidence.`;
    if (level === "E") return `Strengthen vocabulary, summary, and comprehension through ${focus.toLowerCase()}.`;
    if (level === "F") return `Use evidence and nonfiction strategies while practicing ${focus.toLowerCase()}.`;
    if (level === "G") return `Practice middle-school thinking with ${focus.toLowerCase()} and clear explanation.`;
    return `Work toward 8th-grade readiness with ${focus.toLowerCase()} and evidence-based answers.`;
  }

  window.READEASY240_LEVELS = levels;
  window.READEASY240_CURRICULUM = levels.flatMap((levelBlock, levelIndex) => {
    return levelBlock.topics.map((focus, topicIndex) => {
      const day = levelIndex * 30 + topicIndex + 1;
      return {
        day,
        level: levelBlock.level,
        range: levelBlock.range,
        levelTitle: levelBlock.title,
        levelOutcome: levelBlock.outcome,
        focus,
        goal: makeGoal(levelBlock.level, focus),
        minutes: 30,
        status: day <= 30 ? "starter-live" : "planned-next-path"
      };
    });
  });
})();
