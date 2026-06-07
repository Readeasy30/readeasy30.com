const MATH_KEY = "matheasy30.progress.v1";

const mathLevelInfo = {
  A: { label: "Level A", range: [1, 30], description: "Counting, number sense, and adding and subtracting within 10." },
  B: { label: "Level B", range: [31, 60], description: "Addition and subtraction within 20. Missing numbers. Word problems." },
  C: { label: "Level C", range: [61, 90], description: "Place value, skip counting, and introduction to multiplication." },
  D: { label: "Level D", range: [91, 120], description: "Times tables, division, and introduction to fractions." },
  E: { label: "Level E", range: [121, 150], description: "Multi-digit operations, decimals, and simple percentages." },
  F: { label: "Level F", range: [151, 180], description: "Money, measurement, time, and multi-step word problems." },
  G: { label: "Level G", range: [181, 210], description: "Ratios, proportions, simple equations, and reading charts." },
  H: { label: "Level H", range: [211, 240], description: "Order of operations, negative numbers, equations, and complex problems." }
};

const mathLevelStarts = { A: 0, B: 30, C: 60, D: 90, E: 120, F: 150, G: 180, H: 210 };

const mathPlacementSteps = [
  { level: "A", title: "Number Check A", problem: "What is 3 + 4?", answer: "7", hint: "Count both groups together." },
  { level: "B", title: "Number Check B", problem: "What is 13 + 6?", answer: "19", hint: "Start at 13 and count up 6 more." },
  { level: "C", title: "Number Check C", problem: "What is 5 × 6?", answer: "30", hint: "Count by 5 six times: 5, 10, 15, 20, 25, 30." },
  { level: "D", title: "Number Check D", problem: "What is 28 ÷ 7?", answer: "4", hint: "Think: 7 × ? = 28." },
  { level: "E", title: "Number Check E", problem: "What is 25% of 40?", answer: "10", hint: "25% = one quarter. Divide 40 by 4." },
  { level: "F", title: "Number Check F", problem: "A rectangle is 7 cm long and 4 cm wide. What is its perimeter?", answer: "22", hint: "Perimeter: add all four sides. 7 + 4 + 7 + 4." },
  { level: "G", title: "Number Check G", problem: "Solve: x + 9 = 20. What is x?", answer: "11", hint: "Subtract 9 from both sides: 20 − 9." },
  { level: "H", title: "Number Check H", problem: "What is 2 + 3 × 4? (Multiply before adding.)", answer: "14", hint: "Multiply first: 3 × 4 = 12. Then add 2." }
];

const mathLessonTemplates = {
  A: [
    {
      topic: "Counting to 10",
      instruction: "Count carefully and write the number you get.",
      tip: "Count slowly. Point to each one. Take your time.",
      problems: [
        { question: "How many is 2 + 3?", answer: "5" },
        { question: "What number comes after 6?", answer: "7" },
        { question: "How many fingers are on one hand?", answer: "5" }
      ]
    },
    {
      topic: "Adding Small Numbers",
      instruction: "Add the two numbers together.",
      tip: "Start with the bigger number and count up.",
      problems: [
        { question: "1 + 4 = ?", answer: "5" },
        { question: "3 + 3 = ?", answer: "6" },
        { question: "2 + 5 = ?", answer: "7" }
      ]
    },
    {
      topic: "Subtracting Small Numbers",
      instruction: "Subtract the smaller number from the larger one.",
      tip: "Start at the big number and count back the small number.",
      problems: [
        { question: "8 − 3 = ?", answer: "5" },
        { question: "7 − 4 = ?", answer: "3" },
        { question: "9 − 6 = ?", answer: "3" }
      ]
    },
    {
      topic: "Numbers That Make 10",
      instruction: "Find the missing number that completes each 10.",
      tip: "Use your fingers. Count up from the first number to reach 10.",
      problems: [
        { question: "5 + ___ = 10. What goes in the blank?", answer: "5" },
        { question: "7 + ___ = 10. What goes in the blank?", answer: "3" },
        { question: "9 + ___ = 10. What goes in the blank?", answer: "1" }
      ]
    },
    {
      topic: "Comparing Numbers 0–10",
      instruction: "Which number is more? Which is less?",
      tip: "Think of a number line. Higher numbers are more.",
      problems: [
        { question: "Which is more: 4 or 7? Type the bigger number.", answer: "7" },
        { question: "Which is less: 9 or 3? Type the smaller number.", answer: "3" },
        { question: "What is 1 more than 6?", answer: "7" }
      ]
    },
    {
      topic: "Zero and One More",
      instruction: "Practice adding 0 and adding 1.",
      tip: "Adding 0 keeps the number the same. Adding 1 gives the next number.",
      problems: [
        { question: "0 + 5 = ?", answer: "5" },
        { question: "9 + 1 = ?", answer: "10" },
        { question: "What is 1 more than 8?", answer: "9" }
      ]
    }
  ],
  B: [
    {
      topic: "Adding to 20",
      instruction: "Add the two numbers. The answer will be 20 or less.",
      tip: "Count on from the bigger number, or try making 10 first.",
      problems: [
        { question: "9 + 6 = ?", answer: "15" },
        { question: "7 + 8 = ?", answer: "15" },
        { question: "8 + 9 = ?", answer: "17" }
      ]
    },
    {
      topic: "Subtracting Within 20",
      instruction: "Subtract the smaller number.",
      tip: "Think: what do I add to the small number to reach the big one?",
      problems: [
        { question: "17 − 8 = ?", answer: "9" },
        { question: "14 − 6 = ?", answer: "8" },
        { question: "20 − 7 = ?", answer: "13" }
      ]
    },
    {
      topic: "Finding Missing Numbers",
      instruction: "Figure out what number is missing.",
      tip: "Work backwards. If ___ + 5 = 12, then 12 − 5 = ___.",
      problems: [
        { question: "___ + 5 = 12. What is the missing number?", answer: "7" },
        { question: "8 + ___ = 15. What is the missing number?", answer: "7" },
        { question: "20 − ___ = 13. What is the missing number?", answer: "7" }
      ]
    },
    {
      topic: "Word Problem: Joining",
      instruction: "Read each problem and add to find the answer.",
      tip: "Joining problems mean adding. Find the two groups and add them.",
      problems: [
        { question: "Ana has 6 books. She gets 8 more. How many books does she have?", answer: "14" },
        { question: "There are 9 red apples and 7 green apples. How many apples in all?", answer: "16" },
        { question: "Sam scores 11 points. Then he scores 5 more. How many points total?", answer: "16" }
      ]
    },
    {
      topic: "Word Problem: Taking Away",
      instruction: "Read each problem and subtract to find the answer.",
      tip: "Taking away means subtracting. Start with the total and remove the part.",
      problems: [
        { question: "There are 18 birds. 7 fly away. How many birds are left?", answer: "11" },
        { question: "Rosa has 15 stickers. She gives away 9. How many does she have left?", answer: "6" },
        { question: "20 students are in class. 6 go to lunch. How many stay?", answer: "14" }
      ]
    },
    {
      topic: "Even and Odd Numbers",
      instruction: "Decide if each number is even or odd.",
      tip: "Even numbers end in 0, 2, 4, 6, or 8. Odd numbers end in 1, 3, 5, 7, or 9.",
      problems: [
        { question: "Is 6 even or odd? Type 'even' or 'odd'.", answer: "even" },
        { question: "Is 13 even or odd? Type 'even' or 'odd'.", answer: "odd" },
        { question: "What is the next even number after 8?", answer: "10" }
      ]
    }
  ],
  C: [
    {
      topic: "Tens and Ones",
      instruction: "Break each number into tens and ones.",
      tip: "In 34: the 3 means 3 tens (30). The 4 means 4 ones.",
      problems: [
        { question: "34 — how many tens?", answer: "3" },
        { question: "34 — how many ones?", answer: "4" },
        { question: "What number has 5 tens and 2 ones?", answer: "52" }
      ]
    },
    {
      topic: "Skip Counting by 2s",
      instruction: "Count by 2s to find each answer.",
      tip: "Skip counting by 2 means landing only on even numbers: 2, 4, 6, 8...",
      problems: [
        { question: "Count by 2s: 2, 4, 6, ___. What comes next?", answer: "8" },
        { question: "Count by 2s: 10, 12, 14, ___. What comes next?", answer: "16" },
        { question: "Count by 2s: how many is 6 twos?", answer: "12" }
      ]
    },
    {
      topic: "Skip Counting by 5s and 10s",
      instruction: "Count by 5s or 10s to find each answer.",
      tip: "Counting by 5s: 5, 10, 15, 20, 25... like counting nickels.",
      problems: [
        { question: "Count by 5s: 5, 10, 15, ___. What comes next?", answer: "20" },
        { question: "Count by 10s: 10, 20, 30, ___. What comes next?", answer: "40" },
        { question: "Count by 5s: how many is 4 fives?", answer: "20" }
      ]
    },
    {
      topic: "What Multiplication Means",
      instruction: "Multiplication is fast adding of equal groups.",
      tip: "3 × 4 means 3 groups of 4. That is the same as 4 + 4 + 4 = 12.",
      problems: [
        { question: "3 groups of 4. What is 3 × 4?", answer: "12" },
        { question: "2 groups of 5. What is 2 × 5?", answer: "10" },
        { question: "4 groups of 3. What is 4 × 3?", answer: "12" }
      ]
    },
    {
      topic: "Times 2 Practice",
      instruction: "Multiply each number by 2.",
      tip: "Times 2 means doubling the number.",
      problems: [
        { question: "2 × 6 = ?", answer: "12" },
        { question: "2 × 9 = ?", answer: "18" },
        { question: "2 × 7 = ?", answer: "14" }
      ]
    },
    {
      topic: "Times 5 Practice",
      instruction: "Multiply each number by 5.",
      tip: "Times 5: the answer always ends in 0 or 5.",
      problems: [
        { question: "5 × 4 = ?", answer: "20" },
        { question: "5 × 7 = ?", answer: "35" },
        { question: "5 × 9 = ?", answer: "45" }
      ]
    }
  ],
  D: [
    {
      topic: "Times Tables: 3 and 4",
      instruction: "Multiply using the 3 and 4 times tables.",
      tip: "3s: 3, 6, 9, 12, 15, 18, 21, 24, 27. 4s: 4, 8, 12, 16, 20, 24, 28, 32, 36.",
      problems: [
        { question: "3 × 7 = ?", answer: "21" },
        { question: "4 × 6 = ?", answer: "24" },
        { question: "3 × 9 = ?", answer: "27" }
      ]
    },
    {
      topic: "Times Tables: 6, 7, 8",
      instruction: "Practice these trickier times tables.",
      tip: "6 × 7 = 42. 7 × 8 = 56. 8 × 8 = 64. These take practice. Take your time.",
      problems: [
        { question: "6 × 7 = ?", answer: "42" },
        { question: "8 × 8 = ?", answer: "64" },
        { question: "7 × 9 = ?", answer: "63" }
      ]
    },
    {
      topic: "What Division Means",
      instruction: "Division is splitting into equal groups.",
      tip: "12 ÷ 3 means: share 12 equally into 3 groups. How many in each group?",
      problems: [
        { question: "12 ÷ 3 = ? (Share 12 equally into 3 groups.)", answer: "4" },
        { question: "20 ÷ 4 = ?", answer: "5" },
        { question: "15 ÷ 5 = ?", answer: "3" }
      ]
    },
    {
      topic: "Division Practice",
      instruction: "Use your times tables to help divide.",
      tip: "Think: which times table gets you to that number?",
      problems: [
        { question: "28 ÷ 7 = ?", answer: "4" },
        { question: "36 ÷ 6 = ?", answer: "6" },
        { question: "45 ÷ 9 = ?", answer: "5" }
      ]
    },
    {
      topic: "What is a Fraction?",
      instruction: "A fraction shows parts of a whole.",
      tip: "1/4 means 1 part out of 4 equal parts. The bottom number is how many equal parts total.",
      problems: [
        { question: "A pizza is cut into 4 equal slices. You eat 1. What fraction did you eat? (Example: 1/4)", answer: "1/4" },
        { question: "A bar is split into 2 equal parts. You color 1. What fraction is colored? (Example: 1/2)", answer: "1/2" },
        { question: "Which is more: 1/2 or 1/4? Type the bigger one.", answer: "1/2" }
      ]
    },
    {
      topic: "Fractions of a Set",
      instruction: "Find the fraction of each group.",
      tip: "To find a fraction of a number: divide by the bottom number, multiply by the top number.",
      problems: [
        { question: "There are 8 apples. Half are red. How many are red?", answer: "4" },
        { question: "There are 12 students. One-third are wearing hats. How many?", answer: "4" },
        { question: "There are 10 buttons. 2/5 are blue. How many are blue?", answer: "4" }
      ]
    }
  ],
  E: [
    {
      topic: "Multiplying Larger Numbers",
      instruction: "Break the problem into smaller parts.",
      tip: "23 × 4: do (20 × 4) + (3 × 4) = 80 + 12 = 92.",
      problems: [
        { question: "23 × 4 = ?", answer: "92" },
        { question: "15 × 6 = ?", answer: "90" },
        { question: "32 × 3 = ?", answer: "96" }
      ]
    },
    {
      topic: "Tenths and Hundredths",
      instruction: "Write each value as a decimal.",
      tip: "Tenths are right of the decimal point. Hundredths are one more place to the right.",
      problems: [
        { question: "What decimal means 3 tenths?", answer: "0.3" },
        { question: "What decimal means 7 hundredths?", answer: "0.07" },
        { question: "Which is more: 0.5 or 0.09? Type the bigger one.", answer: "0.5" }
      ]
    },
    {
      topic: "Adding Decimals",
      instruction: "Line up the decimal points and add.",
      tip: "Line up the decimal points. Then add like whole numbers.",
      problems: [
        { question: "0.4 + 0.3 = ?", answer: "0.7" },
        { question: "1.5 + 2.3 = ?", answer: "3.8" },
        { question: "0.25 + 0.50 = ?", answer: "0.75" }
      ]
    },
    {
      topic: "Subtracting Decimals",
      instruction: "Line up the decimal points and subtract.",
      tip: "Line up the decimal points. Then subtract like whole numbers.",
      problems: [
        { question: "0.9 − 0.4 = ?", answer: "0.5" },
        { question: "3.7 − 1.2 = ?", answer: "2.5" },
        { question: "1.00 − 0.25 = ?", answer: "0.75" }
      ]
    },
    {
      topic: "What is a Percentage?",
      instruction: "Percent means 'per hundred.' Find each percentage.",
      tip: "10% of a number: divide by 10. 50% of a number: divide by 2.",
      problems: [
        { question: "50% of 200 = ?", answer: "100" },
        { question: "10% of 80 = ?", answer: "8" },
        { question: "100% of 45 = ?", answer: "45" }
      ]
    },
    {
      topic: "Finding 50%, 25%, and 10%",
      instruction: "Use the shortcut for each common percentage.",
      tip: "25% = divide by 4. 50% = divide by 2. 10% = divide by 10.",
      problems: [
        { question: "25% of 40 = ?", answer: "10" },
        { question: "50% of 60 = ?", answer: "30" },
        { question: "10% of 350 = ?", answer: "35" }
      ]
    }
  ],
  F: [
    {
      topic: "Counting Money",
      instruction: "Add up the coins or bills.",
      tip: "Quarter = 25¢, dime = 10¢, nickel = 5¢, penny = 1¢.",
      problems: [
        { question: "You have 2 quarters, 1 dime, and 1 nickel. How many cents total?", answer: "65" },
        { question: "A dollar bill equals how many cents?", answer: "100" },
        { question: "You have 3 dimes and 4 pennies. How many cents?", answer: "34" }
      ]
    },
    {
      topic: "Making Change",
      instruction: "Find how much change the customer gets back.",
      tip: "Count up from the cost to the amount paid. That difference is the change.",
      problems: [
        { question: "Something costs 75¢. You pay $1.00. How many cents change?", answer: "25" },
        { question: "Something costs $3.50. You pay $5.00. How much change? (in dollars)", answer: "1.50" },
        { question: "Something costs $8.75. You pay $10.00. How much change? (in dollars)", answer: "1.25" }
      ]
    },
    {
      topic: "Measuring Length",
      instruction: "Answer each measurement question.",
      tip: "1 foot = 12 inches. 1 yard = 3 feet. 1 meter = 100 centimeters.",
      problems: [
        { question: "How many inches are in 1 foot?", answer: "12" },
        { question: "How many feet are in 1 yard?", answer: "3" },
        { question: "How many centimeters are in 1 meter?", answer: "100" }
      ]
    },
    {
      topic: "Reading a Clock",
      instruction: "Tell the time shown on each clock description.",
      tip: "When the minute hand is on 12, it is :00. When it is on 6, it is :30.",
      problems: [
        { question: "Hour hand on 3, minute hand on 12. What time? (example: 3:00)", answer: "3:00" },
        { question: "Hour hand on 7, minute hand on 6. What time?", answer: "7:30" },
        { question: "How many minutes are in 1 hour?", answer: "60" }
      ]
    },
    {
      topic: "Multi-Step Word Problems",
      instruction: "Read carefully and solve one step at a time.",
      tip: "Write each step. Multi-step problems need two or more operations.",
      problems: [
        { question: "A bag has 24 apples split equally into 4 boxes. Then 3 more go into each box. How many apples are in each box?", answer: "9" },
        { question: "A store sells 15 red pens and 9 blue pens per day. How many pens in 3 days?", answer: "72" },
        { question: "Sam earns $8 per hour and works 5 hours. He spends $12 on lunch. How much money is left?", answer: "28" }
      ]
    },
    {
      topic: "Area and Perimeter",
      instruction: "Calculate the area or perimeter of each shape.",
      tip: "Perimeter: add all sides. Area: length × width.",
      problems: [
        { question: "A rectangle is 6 cm long and 4 cm wide. What is its perimeter?", answer: "20" },
        { question: "A square has sides of 5 cm. What is its area?", answer: "25" },
        { question: "A rectangle is 8 m long and 3 m wide. What is its area?", answer: "24" }
      ]
    }
  ],
  G: [
    {
      topic: "What is a Ratio?",
      instruction: "A ratio compares two amounts. Write each ratio using a colon.",
      tip: "2:3 means 2 of one thing for every 3 of another.",
      problems: [
        { question: "For every 2 red tiles there are 3 blue tiles. Write the ratio of red to blue. (example: 2:3)", answer: "2:3" },
        { question: "In a class: 4 boys for every 5 girls. Ratio of boys to girls?", answer: "4:5" },
        { question: "A recipe: 1 cup sugar for every 3 cups flour. Ratio of sugar to flour?", answer: "1:3" }
      ]
    },
    {
      topic: "Equivalent Ratios",
      instruction: "Find the missing number in each equivalent ratio.",
      tip: "Multiply or divide both sides by the same number to find equivalent ratios.",
      problems: [
        { question: "2:3 = 4:___. What is the missing number?", answer: "6" },
        { question: "1:5 = 3:___. What is the missing number?", answer: "15" },
        { question: "6:9 simplified = ___:3. What is the missing number?", answer: "2" }
      ]
    },
    {
      topic: "Solving Simple Equations",
      instruction: "Find the value of x in each equation.",
      tip: "To solve, do the opposite operation on both sides.",
      problems: [
        { question: "x + 7 = 15. What is x?", answer: "8" },
        { question: "3x = 18. What is x?", answer: "6" },
        { question: "x − 4 = 9. What is x?", answer: "13" }
      ]
    },
    {
      topic: "Percentages in Real Life",
      instruction: "Solve each real-life percentage problem.",
      tip: "Change percent to a decimal, then multiply. 25% = 0.25.",
      problems: [
        { question: "A $40 shirt is 25% off. How much do you save?", answer: "10" },
        { question: "A test has 20 questions. You score 80%. How many did you get right?", answer: "16" },
        { question: "A $20 restaurant bill gets a 15% tip. How much is the tip?", answer: "3" }
      ]
    },
    {
      topic: "Reading Charts and Tables",
      instruction: "Use the information given to answer each question.",
      tip: "Add for total. Subtract for difference. Divide total by number of items for average.",
      problems: [
        { question: "A chart shows: Monday 5 students, Tuesday 8, Wednesday 3. What is the total?", answer: "16" },
        { question: "Using the same chart: how many more students came Monday than Wednesday?", answer: "2" },
        { question: "What is the average number of students per day? (total ÷ 3)", answer: "5" }
      ]
    },
    {
      topic: "Probability Basics",
      instruction: "Write each probability as a fraction.",
      tip: "Probability = favorable outcomes ÷ total possible outcomes.",
      problems: [
        { question: "A bag has 3 red and 7 blue balls. What is the probability of picking red? (example: 3/10)", answer: "3/10" },
        { question: "You flip a coin. What is the probability of heads?", answer: "1/2" },
        { question: "A die has 6 sides (1–6). What is the probability of rolling a 3?", answer: "1/6" }
      ]
    }
  ],
  H: [
    {
      topic: "Order of Operations",
      instruction: "Multiply and divide before adding and subtracting. Use parentheses first.",
      tip: "PEMDAS: Parentheses first, then Multiply/Divide, then Add/Subtract.",
      problems: [
        { question: "2 + 3 × 4 = ? (Multiply first, then add.)", answer: "14" },
        { question: "(5 + 3) × 2 = ? (Parentheses first.)", answer: "16" },
        { question: "10 − 2 × 3 + 1 = ?", answer: "5" }
      ]
    },
    {
      topic: "Positive and Negative Numbers",
      instruction: "Solve each problem with positive and negative numbers.",
      tip: "Negative numbers are less than zero. On a number line they go left of 0.",
      problems: [
        { question: "−3 + 5 = ?", answer: "2" },
        { question: "4 − 7 = ?", answer: "-3" },
        { question: "−2 × 3 = ?", answer: "-6" }
      ]
    },
    {
      topic: "Equations with One Variable",
      instruction: "Solve each equation for x.",
      tip: "First undo addition or subtraction. Then undo multiplication or division.",
      problems: [
        { question: "2x + 3 = 11. What is x?", answer: "4" },
        { question: "5x − 10 = 20. What is x?", answer: "6" },
        { question: "3x + 6 = 21. What is x?", answer: "5" }
      ]
    },
    {
      topic: "Proportions",
      instruction: "Set up equal ratios and solve for the missing value.",
      tip: "Set up equal fractions and cross-multiply to solve.",
      problems: [
        { question: "3 pencils cost $0.90. How much do 5 pencils cost? (in dollars)", answer: "1.50" },
        { question: "A car goes 120 miles in 2 hours. How far in 5 hours?", answer: "300" },
        { question: "2/5 = ?/20. What is the missing number?", answer: "8" }
      ]
    },
    {
      topic: "Multi-Step Real-World Problems",
      instruction: "Read carefully. Solve one step at a time.",
      tip: "Write out each step. Check your work after each operation.",
      problems: [
        { question: "A worker earns $12/hour and works 40 hours. After 20% tax, what is the take-home pay?", answer: "384" },
        { question: "A rectangle's perimeter is 36 cm. Its length is 10 cm. What is its width?", answer: "8" },
        { question: "A $60 item is discounted 30%, then 10% tax is added to the sale price. What is the final price?", answer: "46.20" }
      ]
    },
    {
      topic: "Number Line and Absolute Value",
      instruction: "Use a number line to answer each question.",
      tip: "On a number line, numbers increase going right. Absolute value is the distance from 0.",
      problems: [
        { question: "What number is halfway between −4 and 2?", answer: "-1" },
        { question: "What is the absolute value of −7? (distance from 0)", answer: "7" },
        { question: "Which is greater: −8 or −3? Type the greater one.", answer: "-3" }
      ]
    }
  ]
};

// ─── State ────────────────────────────────────────────────────────────────────

let mathState = {
  currentLesson: 0,
  completed: [],
  streak: 0,
  lastDate: null,
  placementDone: false,
  placementLevel: "A"
};

let placementStep = 0;
let placementPassed = 0;

// ─── Persistence ──────────────────────────────────────────────────────────────

function saveMathProgress() {
  try { localStorage.setItem(MATH_KEY, JSON.stringify(mathState)); } catch { /* storage full */ }
}

function loadMathProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(MATH_KEY) || "{}");
    if (saved && typeof saved === "object") {
      mathState = Object.assign(mathState, saved);
      if (!Array.isArray(mathState.completed)) mathState.completed = [];
    }
  } catch { /* use defaults */ }
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function updateStreak(wasCompleted) {
  if (!wasCompleted) return;
  const today = todayStr();
  if (mathState.lastDate === today) return;
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  mathState.streak = mathState.lastDate === yesterday ? mathState.streak + 1 : 1;
  mathState.lastDate = today;
}

// ─── Level helpers ────────────────────────────────────────────────────────────

function getLevelForIndex(index) {
  const day = (Number(index) || 0) + 1;
  if (day <= 30) return "A";
  if (day <= 60) return "B";
  if (day <= 90) return "C";
  if (day <= 120) return "D";
  if (day <= 150) return "E";
  if (day <= 180) return "F";
  if (day <= 210) return "G";
  return "H";
}

function getTemplateForIndex(index) {
  const level = getLevelForIndex(index);
  const templates = mathLessonTemplates[level];
  const withinLevel = index - mathLevelStarts[level];
  return templates[withinLevel % templates.length];
}

function dayInLevel(index) {
  const level = getLevelForIndex(index);
  return (index - mathLevelStarts[level]) + 1;
}

// ─── Answer checking ──────────────────────────────────────────────────────────

function normalizeAnswer(text) {
  return String(text || "").trim().toLowerCase().replace(/\s+/g, " ").replace(/\$/g, "");
}

function checkOneAnswer(userAnswer, correctAnswer) {
  const user = normalizeAnswer(userAnswer);
  const options = String(correctAnswer).split("|");
  return options.some(opt => normalizeAnswer(opt) === user);
}

// ─── Rendering ────────────────────────────────────────────────────────────────

function el(id) { return document.getElementById(id); }

function renderProgress() {
  const completed = mathState.completed.length;
  const pct = Math.round((completed / 240) * 100);

  const bar = el("mathProgressBar");
  const label = el("mathProgressLabel");
  const streak = el("mathStreakDisplay");
  const levelDisp = el("mathLevelDisplay");

  if (bar) bar.style.width = pct + "%";
  if (label) label.textContent = `${completed} of 240 days complete`;
  if (streak) streak.textContent = `🔥 Streak: ${mathState.streak} day${mathState.streak !== 1 ? "s" : ""}`;

  const currentLevel = getLevelForIndex(mathState.currentLesson);
  const info = mathLevelInfo[currentLevel];
  if (levelDisp) {
    levelDisp.textContent = `${info.label} — ${info.description}`;
  }
}

function renderLesson() {
  const index = mathState.currentLesson;
  const level = getLevelForIndex(index);
  const template = getTemplateForIndex(index);
  const day = dayInLevel(index);
  const info = mathLevelInfo[level];

  const lessonArea = el("mathLessonArea");
  if (!lessonArea) return;

  const alreadyDone = mathState.completed.includes(index);

  lessonArea.innerHTML = `
    <div class="level-card" style="margin-bottom:1rem;">
      <span class="level-label">${info.label} — Day ${day} of 30</span>
      <h2>${template.topic}</h2>
      <p>${template.instruction}</p>
    </div>

    <div class="math-tip-box">
      <strong>🫧 Bubbles tip:</strong> ${template.tip}
    </div>

    <div id="mathProblems" class="math-problems">
      ${template.problems.map((p, i) => `
        <div class="math-problem" id="mathProblem${i}">
          <p class="math-question"><strong>Problem ${i + 1}:</strong> ${p.question}</p>
          <div class="math-input-row">
            <input
              type="text"
              id="mathAnswer${i}"
              class="math-input"
              placeholder="Your answer"
              autocomplete="off"
              autocorrect="off"
              inputmode="text"
              aria-label="Answer for problem ${i + 1}"
            />
            <span class="math-feedback" id="mathFeedback${i}" aria-live="polite"></span>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="button-row" style="margin-top:1.2rem;">
      <button type="button" class="primary-action" onclick="checkMathAnswers()" id="mathCheckBtn">
        Check My Answers
      </button>
    </div>

    <div id="mathResult" class="math-result hidden" aria-live="polite"></div>

    <div class="button-row" id="mathNextRow" style="display:none; margin-top:1rem;">
      <button type="button" class="primary-action" onclick="nextMathLesson()">
        Next Lesson →
      </button>
      ${index > 0 ? `<button type="button" onclick="prevMathLesson()" style="background:#e5e7eb;color:#111827;border:none;padding:.9rem 1.2rem;border-radius:.75rem;font-weight:bold;cursor:pointer;">← Previous</button>` : ""}
    </div>

    ${alreadyDone ? '<p class="small-note" style="margin-top:.8rem;color:#15803d;">✅ You already completed this lesson. Practice it again any time.</p>' : ""}
  `;

  const inputs = lessonArea.querySelectorAll(".math-input");
  inputs.forEach((input, i) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        if (i < inputs.length - 1) inputs[i + 1].focus();
        else checkMathAnswers();
      }
    });
  });

  renderProgress();
}

window.checkMathAnswers = function() {
  const index = mathState.currentLesson;
  const template = getTemplateForIndex(index);
  let allCorrect = true;
  let correctCount = 0;

  template.problems.forEach((p, i) => {
    const input = el(`mathAnswer${i}`);
    const feedback = el(`mathFeedback${i}`);
    const problemDiv = el(`mathProblem${i}`);
    if (!input || !feedback) return;

    const correct = checkOneAnswer(input.value, p.answer);
    if (correct) {
      correctCount++;
      feedback.textContent = "✅ Correct!";
      feedback.className = "math-feedback correct";
      if (problemDiv) problemDiv.classList.add("problem-correct");
    } else {
      allCorrect = false;
      const hint = p.hint || "Try again. Go slowly.";
      feedback.textContent = `Not quite. ${hint}`;
      feedback.className = "math-feedback incorrect";
      if (problemDiv) problemDiv.classList.add("problem-incorrect");
    }
    input.disabled = true;
  });

  const result = el("mathResult");
  const nextRow = el("mathNextRow");
  const checkBtn = el("mathCheckBtn");

  if (checkBtn) checkBtn.disabled = true;

  const wasNew = !mathState.completed.includes(index);
  if (correctCount >= 2 && wasNew) {
    mathState.completed.push(index);
    updateStreak(true);
    saveMathProgress();
  }

  if (result) {
    result.classList.remove("hidden");
    if (allCorrect) {
      result.className = "math-result result-all-correct";
      result.innerHTML = `<strong>Well done!</strong> All ${template.problems.length} answers are correct. Good practice today.`;
    } else if (correctCount >= 2) {
      result.className = "math-result result-mostly-correct";
      result.innerHTML = `<strong>Good effort.</strong> You got ${correctCount} of ${template.problems.length} right. Look at the tips for the ones that need more practice.`;
    } else {
      result.className = "math-result result-needs-practice";
      result.innerHTML = `<strong>Keep practicing.</strong> You got ${correctCount} of ${template.problems.length}. Mistakes show what to work on next. Try again slowly.`;
    }
  }

  if (nextRow) nextRow.style.display = "flex";
  renderProgress();
};

window.nextMathLesson = function() {
  if (mathState.currentLesson < 239) mathState.currentLesson++;
  saveMathProgress();
  renderLesson();
  el("mathLessonArea").scrollIntoView({ behavior: "smooth", block: "start" });
};

window.prevMathLesson = function() {
  if (mathState.currentLesson > 0) mathState.currentLesson--;
  saveMathProgress();
  renderLesson();
  el("mathLessonArea").scrollIntoView({ behavior: "smooth", block: "start" });
};

// ─── Placement ────────────────────────────────────────────────────────────────

window.startMathPlacementTest = function() {
  placementStep = 0;
  placementPassed = 0;
  showPlacementStep();
};

function showPlacementStep() {
  const intro = el("mathAssessmentIntro");
  const test = el("mathAssessmentTest");
  const result = el("mathAssessmentResult");

  if (intro) intro.classList.add("hidden");
  if (result) result.classList.add("hidden");
  if (test) test.classList.remove("hidden");

  const step = mathPlacementSteps[placementStep];
  const stepLabel = el("mathAssessmentStepLabel");
  const title = el("mathAssessmentTitle");
  const problem = el("mathAssessmentProblem");
  const answerInput = el("mathAssessmentAnswer");
  const hintEl = el("mathAssessmentHint");

  if (stepLabel) stepLabel.textContent = `Check ${placementStep + 1} of ${mathPlacementSteps.length}`;
  if (title) title.textContent = step.title;
  if (problem) problem.textContent = step.problem;
  if (answerInput) { answerInput.value = ""; answerInput.focus(); }
  if (hintEl) hintEl.textContent = "";
}

window.checkMathPlacementAnswer = function() {
  const step = mathPlacementSteps[placementStep];
  const answerInput = el("mathAssessmentAnswer");
  const hintEl = el("mathAssessmentHint");
  if (!answerInput) return;

  const correct = checkOneAnswer(answerInput.value, step.answer);

  if (correct) {
    placementPassed++;
    placementStep++;
    if (placementStep < mathPlacementSteps.length) {
      showPlacementStep();
    } else {
      showPlacementResult("H");
    }
  } else {
    if (hintEl) {
      hintEl.textContent = `Hint: ${step.hint}`;
      hintEl.className = "math-hint-text";
    }
    showPlacementResult(step.level);
  }
};

window.restartMathPlacementTest = function() {
  placementStep = 0;
  placementPassed = 0;
  showPlacementStep();
};

function showPlacementResult(suggestedLevel) {
  const test = el("mathAssessmentTest");
  const result = el("mathAssessmentResult");
  if (test) test.classList.add("hidden");
  if (!result) return;

  result.classList.remove("hidden");
  const info = mathLevelInfo[suggestedLevel];

  result.innerHTML = `
    <h3>Your Suggested Starting Level</h3>
    <p><strong>${info.label}</strong> — ${info.description}</p>
    <p>This is a good place to start. You can always move up or choose a different level below.</p>
    <div class="button-row">
      <button type="button" class="primary-action" onclick="setMathStartingLevel('${suggestedLevel}')">
        Start at ${info.label}
      </button>
      <button type="button" onclick="restartMathPlacementTest()" style="background:#e5e7eb;color:#111827;border:none;padding:.9rem 1.2rem;border-radius:.75rem;font-weight:bold;cursor:pointer;">
        Try Again
      </button>
    </div>
  `;
}

window.setMathStartingLevel = function(level) {
  const start = mathLevelStarts[level] || 0;
  mathState.currentLesson = start;
  mathState.placementDone = true;
  mathState.placementLevel = level;
  saveMathProgress();
  renderLesson();
  el("mathLessonArea").scrollIntoView({ behavior: "smooth", block: "start" });
};

// ─── Read aloud ───────────────────────────────────────────────────────────────

function getMathVoice() {
  if (!window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  const en = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
  return (en.length ? en : voices)[0] || null;
}

window.readMathProblemAloud = function() {
  if (!window.speechSynthesis) return;
  const index = mathState.currentLesson;
  const template = getTemplateForIndex(index);
  const text = template.problems.map((p, i) => `Problem ${i + 1}. ${p.question}`).join(". ");
  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 0.82;
  speech.lang = "en-US";
  const voice = getMathVoice();
  if (voice) speech.voice = voice;
  window.speechSynthesis.cancel();
  setTimeout(() => window.speechSynthesis.speak(speech), 60);
};

// ─── Danger / reset ───────────────────────────────────────────────────────────

window.resetMathProgressOnDevice = function() {
  const ok = confirm("Reset all math progress on this device? This cannot be undone.");
  if (!ok) return;
  try { localStorage.removeItem(MATH_KEY); } catch { /* */ }
  mathState = { currentLesson: 0, completed: [], streak: 0, lastDate: null, placementDone: false, placementLevel: "A" };
  renderLesson();
};

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  loadMathProgress();
  renderLesson();
  renderProgress();
});
