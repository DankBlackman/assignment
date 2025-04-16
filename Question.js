const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2
    },
    {
      question: "Which language runs in a web browser?",
      answers: ["Java", "C", "Python", "JavaScript"],
      correct: 3
    },
    {
      question: "What does CSS stand for?",
      answers: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets"
      ],
      correct: 1
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswer = null;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextBtn = document.getElementById("nextBtn");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion() {
    const current = questions[currentQuestionIndex];
    questionElement.textContent = current.question;
    answersElement.innerHTML = "";
  
    current.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.addEventListener("click", () => {
        selectedAnswer = index;
        document.querySelectorAll("#answers button").forEach(b => b.style.backgroundColor = "");
        btn.style.backgroundColor = "#cce5ff";
      });
      answersElement.appendChild(btn);
    });
  }
  
  nextBtn.addEventListener("click", () => {
    if (selectedAnswer === null) return alert("Please select an answer!");
    
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      score++;
    }
  
    currentQuestionIndex++;
    selectedAnswer = null;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    questionElement.style.display = "none";
    answersElement.style.display = "none";
    nextBtn.style.display = "none";
    scoreElement.style.display = "block";
    scoreElement.textContent = `Your score: ${score} / ${questions.length}`;
  }
  
  loadQuestion();
  