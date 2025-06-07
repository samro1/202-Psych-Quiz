const questions = [
  {
    question: "What is a group according to social psychology?",
    answers: [
      { text: "A set of individuals who interact over time with shared goals", correct: true },
      { text: "People randomly gathered in the same place", correct: false },
      { text: "Individuals competing against each other", correct: false },
      { text: "Only family members", correct: false },
    ],
    explanation: "Groups are defined as sets of individuals who interact over time and share fate, goals, or identity."
  },
  {
    question: "What is 'group cohesiveness'?",
    answers: [
      { text: "Extent to which members feel close and united", correct: true },
      { text: "Rules of behavior within a group", correct: false },
      { text: "Status ranking among group members", correct: false },
      { text: "Competition between groups", correct: false },
    ],
    explanation: "Group cohesiveness refers to the forces that push members closer together, such as intimacy, unity, and commitment to group goals."
  },
  {
    question: "What theory explains why people may rate a group more positively after severe initiation?",
    answers: [
      { text: "Cognitive dissonance", correct: true },
      { text: "Social facilitation", correct: false },
      { text: "Groupthink", correct: false },
      { text: "Social loafing", correct: false },
    ],
    explanation: "Cognitive dissonance theory states that when people experience discomfort (like a severe initiation) and then encounter conflicting evidence (the group is boring), they change their attitude to reduce discomfort."
  },
  {
    question: "What is social loafing?",
    answers: [
      { text: "When people put in less effort in a group than when alone", correct: true },
      { text: "Working harder when others are watching", correct: false },
      { text: "Disrupting group tasks intentionally", correct: false },
      { text: "A type of group decision making", correct: false },
    ],
    explanation: "Social loafing is the tendency for individuals to reduce effort when working in a group compared to when working alone, often due to diffusion of responsibility."
  },
  {
    question: "What is 'groupthink'?",
    answers: [
      { text: "Excessive desire for group unanimity overriding rational decisions", correct: true },
      { text: "Brainstorming to create ideas", correct: false },
      { text: "Conflict between groups", correct: false },
      { text: "Social identity theory", correct: false },
    ],
    explanation: "Groupthink is a group decision-making style where members prioritize consensus over critical thinking, often leading to poor decisions."
  },
  {
    question: "Which of these is NOT a way to prevent groupthink?",
    answers: [
      { text: "Encourage outside consultation", correct: false },
      { text: "Use subgroups for discussion", correct: false },
      { text: "Promote criticism within the group", correct: false },
      { text: "Suppress dissenting opinions", correct: true },
    ],
    explanation: "Suppressing dissent encourages groupthink. Prevention strategies include encouraging criticism, outside consultation, and subgroup discussions."
  },
  {
    question: "What is the 'prisoner's dilemma'?",
    answers: [
      { text: "A social dilemma about cooperation vs. competition", correct: true },
      { text: "A type of social loafing", correct: false },
      { text: "A group decision-making technique", correct: false },
      { text: "A personality disorder", correct: false },
    ],
    explanation: "The prisoner's dilemma is a classic social dilemma where individuals must choose between cooperating or acting selfishly, impacting group outcomes."
  },
  {
    question: "What does the 'outgroup homogeneity effect' describe?",
    answers: [
      { text: "Assuming members of outgroups are more similar to each other than they really are", correct: true },
      { text: "Viewing outgroups as diverse", correct: false },
      { text: "Ignoring group differences", correct: false },
      { text: "Positive stereotyping", correct: false },
    ],
    explanation: "Outgroup homogeneity is the perception that members of an outgroup are more alike than members of one's own group."
  },
  {
    question: "What is a stereotype?",
    answers: [
      { text: "A cognitive belief associating traits to a whole group", correct: true },
      { text: "A deliberate behavior to harm", correct: false },
      { text: "Always accurate perception", correct: false },
      { text: "An emotional response", correct: false },
    ],
    explanation: "Stereotypes are cognitive beliefs or associations linking traits to entire groups, which can distort perceptions and are often resistant to change."
  },
  {
    question: "What is the difference between prejudice and discrimination?",
    answers: [
      { text: "Prejudice is an attitude; discrimination is behavior", correct: true },
      { text: "They mean the same thing", correct: false },
      { text: "Discrimination is a feeling; prejudice is an action", correct: false },
      { text: "Prejudice is legal; discrimination is illegal", correct: false },
    ],
    explanation: "Prejudice refers to negative feelings toward a group, while discrimination is the behavioral action taken against that group."
  },
  {
    question: "Which of the following is an example of social facilitation?",
    answers: [
      { text: "Cycling faster when others are watching", correct: true },
      { text: "Cheering less loudly in a group", correct: false },
      { text: "Feeling anonymous in a crowd", correct: false },
      { text: "Ignoring group norms", correct: false },
    ],
    explanation: "Social facilitation occurs when the presence of others improves performance on simple or well-learned tasks."
  },
  {
    question: "What is 'deindividuation'?",
    answers: [
      { text: "Loss of personal identity leading to deviant behavior in groups", correct: true },
      { text: "Increased self-awareness in crowds", correct: false },
      { text: "Individual decision making", correct: false },
      { text: "A leadership style", correct: false },
    ],
    explanation: "Deindividuation happens when individuals lose their sense of self-awareness and personal responsibility in groups, sometimes leading to antisocial behavior."
  },
  {
    question: "What is the main cause of hostility between groups in Realistic Conflict Theory?",
    answers: [
      { text: "Competition for limited resources", correct: true },
      { text: "Differences in personality", correct: false },
      { text: "Genetic differences", correct: false },
      { text: "Social loafing", correct: false },
    ],
    explanation: "Realistic Conflict Theory states that intergroup hostility arises from competition over scarce resources."
  },
  {
    question: "What is 'social identity theory' concerned with?",
    answers: [
      { text: "How group membership influences self-esteem and intergroup behavior", correct: true },
      { text: "Individual personality traits", correct: false },
      { text: "Brain functions", correct: false },
      { text: "Language development", correct: false },
    ],
    explanation: "Social Identity Theory explores how being part of a group affects individuals’ self-concept and intergroup relations."
  },
  {
    question: "What does 'brainstorming' aim to reduce to increase creativity?",
    answers: [
      { text: "Evaluation apprehension, social loafing, and production blocking", correct: true },
      { text: "Social facilitation", correct: false },
      { text: "Groupthink", correct: false },
      { text: "Deindividuation", correct: false },
    ],
    explanation: "Brainstorming encourages free idea generation by reducing fear of evaluation, social loafing, and blocking caused by interruptions."
  },
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let answerOrder = [];

const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');

function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function loadQuestion() {
  const q = shuffledQuestions[currentQuestionIndex];
  questionContainer.innerHTML = '';

  const questionEl = document.createElement('h2');
  questionEl.textContent = `Q${currentQuestionIndex + 1}: ${q.question}`;
  questionContainer.appendChild(questionEl);

  const answersList = document.createElement('ul');
  answersList.className = 'answers';

  const shuffledAnswers = shuffle(q.answers.map((a, i) => ({ ...a, originalIndex: i })));

  shuffledAnswers.forEach((answer, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <label>
        <input type="radio" name="answer" value="${index}"> ${answer.text}
      </label>
    `;

    li.addEventListener('click', () => {
      if (userAnswers[currentQuestionIndex] != null) return; // Prevent changing answer

      userAnswers[currentQuestionIndex] = answer.originalIndex;

      // Show correct/incorrect
      answersList.querySelectorAll('li').forEach((li, i) => {
        li.classList.remove('correct', 'incorrect');
        const original = shuffledAnswers[i];
        if (original.correct) li.classList.add('correct');
        if (!original.correct && originalIndexMatch(original, answer)) {
          li.classList.add('incorrect');
        }
      });

      // Show explanation
      const explanationDiv = document.createElement('div');
      explanationDiv.className = 'explanation';
      explanationDiv.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;
      questionContainer.appendChild(explanationDiv);
    });

    answersList.appendChild(li);
  });

  questionContainer.appendChild(answersList);

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.textContent = currentQuestionIndex === shuffledQuestions.length - 1 ? 'Finish' : 'Next';
}

function originalIndexMatch(original, clicked) {
  return original.text === clicked.text && original.originalIndex === clicked.originalIndex;
}


function showFeedback() {
  const q = shuffledQuestions[currentQuestionIndex];
  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) return;

  const selectedIndex = parseInt(selected.value);
  userAnswers[currentQuestionIndex] = selectedIndex;

  const answersList = document.querySelectorAll('.answers li');
  answerOrder[currentQuestionIndex].forEach((ans, idx) => {
    const li = answersList[idx];
    if (ans.correct) {
      li.classList.add('correct');
    } else if (idx === selectedIndex) {
      li.classList.add('incorrect');
    }
  });

  // Show explanation
  const explanationDiv = document.createElement('div');
  explanationDiv.className = 'explanation';
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;
  questionContainer.appendChild(explanationDiv);
}

function showResults() {
  let correctCount = 0;
  shuffledQuestions.forEach((q, idx) => {
    if (userAnswers[idx] != null && q.answers[userAnswers[idx]].correct) {
      correctCount++;
    }
  });

  questionContainer.style.display = 'none';
  prevBtn.style.display = 'none';
  nextBtn.style.display = 'none';

  resultContainer.style.display = 'block';
  resultContainer.innerHTML = `
    <h2>Quiz Results</h2>
    <p>You answered <strong>${correctCount}</strong> out of <strong>${shuffledQuestions.length}</strong> questions correctly.</p>
    <p>Your score: <strong>${Math.round((correctCount / shuffledQuestions.length) * 100)}%</strong></p>
    <button id="restart-btn">Restart Quiz</button>
  `;

  document.getElementById('restart-btn').addEventListener('click', () => {
    startQuiz();
  });
}


nextBtn.addEventListener('click', () => {
  if (userAnswers[currentQuestionIndex] == null) {
    alert("Please select an answer before proceeding.");
    return;
  }

  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    // Last question, show results
    showResults();
  }
});


prevBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
});

function startQuiz() {
  shuffledQuestions = shuffle(questions);
  answerOrder = [];
  currentQuestionIndex = 0;
  userAnswers = [];
  questionContainer.style.display = 'block';
  prevBtn.style.display = 'inline-block';
  nextBtn.style.display = 'inline-block';
  resultContainer.style.display = 'none';
  loadQuestion();
}

startQuiz();