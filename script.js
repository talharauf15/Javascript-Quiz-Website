const quizData = [
  {
    question: "What is the capital of France?",
    options: [" Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    answer: "Au",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: "Diamond",
  },
  {
    question: "Who is the author of 'Pride and Prejudice'?",
    options: ["Jane Austen", "Charles Dickens", "Emily Brontë", "George Eliot"],
    answer: "Jane Austen",
  },
  {
    question: "What is the main ingredient in traditional Japanese miso soup?",
    options: ["Rice", "Noodles", "Soybeans", "Seaweed"],
    answer: "Soybeans",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
    answer: "Hydrogen",
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Seoul", "Beijing", "Bangkok", "Tokyo"],
    answer: "Tokyo",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Marie Curie",
      "Alexander Fleming",
      "Isaac Newton",
      "Albert Einstein",
    ],
    answer: "Alexander Fleming",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
  const currentQuiz = quizData[currentQuestionIndex];
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = `
        <h2>${currentQuiz.question}</h2>
        ${currentQuiz.options
          .map(
            (option, index) => `
            <label>
                <input type="radio" name="answer" value="${option}">
                ${option}
            </label><br>
        `
          )
          .join("")}
    `;
}

function nextQuestion() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  const answer = selectedOption.value;
  if (answer === quizData[currentQuestionIndex].answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuiz();
  } else {
    document.getElementById("quiz").innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly!</h2>
        `;
    document.getElementById("next-button").style.display = "none";
  }
}

loadQuiz();
