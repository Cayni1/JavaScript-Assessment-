// Define the questions and answers
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which artist released the album 'Thriller'?",
      choices: ["Michael Jackson", "Elton John", "Prince", "Madonna"],
      correctAnswer: "Michael Jackson"
    },
    {
      question: "What is the most common instrument in a rock band?",
      choices: ["Guitar", "Keyboard", "Drums", "Saxophone"],
      correctAnswer: "Guitar"
    }
  ];
  
  // Get HTML elements
  const quizContainer = document.getElementById("quiz");
  const questionContainer = document.getElementById("question");
  const choicesContainer = document.getElementById("choices");
  const startButton = document.getElementById("start");  // Changed the button ID to "start"
  const resultsContainer = document.getElementById("results");
  
  let currentQuestion = 0;
  let score = 0;
  let quizStarted = false;
  
  // Function to display the current question and choices
  function buildQuiz() {
    if (currentQuestion < questions.length) {
      const currentQuiz = questions[currentQuestion];
      questionContainer.textContent = currentQuiz.question;
      choicesContainer.innerHTML = "";
  
      currentQuiz.choices.forEach((choice, index) => {
        const choiceElement = document.createElement("div");
        choiceElement.textContent = choice;
        choiceElement.addEventListener("click", () => selectAnswer(index));
        choicesContainer.appendChild(choiceElement);
      });
    } else {
      showResults();
    }
  }
  
  // Function to handle the user's answer selection
  function selectAnswer(selectedIndex) {
    if (quizStarted) {
      const currentQuiz = questions[currentQuestion];
      if (currentQuiz.choices[selectedIndex] === currentQuiz.correctAnswer) {
        score++;
      }
  
      currentQuestion++;
      buildQuiz();
    }
  }

  // Function to display the quiz results
function showResults() {
    quizContainer.style.display = "none";
    resultsContainer.innerHTML = `<h2>Quiz Results</h2>`;
    
    questions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      const isCorrect = userAnswer === question.correctAnswer;
      
      const resultElement = document.createElement("div");
      resultElement.textContent = `Question ${index + 1}: ${isCorrect ? 'Correct' : 'Wrong'}`;
      
      if (!isCorrect) {
        resultElement.innerHTML += `<br>Your answer: ${userAnswer}`;
        resultElement.innerHTML += `<br>Correct answer: ${question.correctAnswer}`;
      }
      
      resultsContainer.appendChild(resultElement);
    });
    
    resultsContainer.style.display = "block";
  }
  
  // Initialize an array to store user answers
  const userAnswers = [];
  
  // Function to handle the user's answer selection
  function selectAnswer(selectedIndex) {
    if (quizStarted) {
      const currentQuiz = questions[currentQuestion];
      userAnswers[currentQuestion] = currentQuiz.choices[selectedIndex]; // Store user's answer
  
      if (currentQuiz.choices[selectedIndex] === currentQuiz.correctAnswer) {
        score++;
      }
  
      currentQuestion++;
      buildQuiz();
    }
  }
  
  
  // Event listener for the "Start" button
  startButton.addEventListener("click", () => {
    quizStarted = true;
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    buildQuiz();
  });
  
  // Initial setup
  resultsContainer.style.display = "none";
  