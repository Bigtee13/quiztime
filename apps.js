const quizData = [
    {
      question: "What is my favourite food?",
      answers: {
        a: "rice",
        b: "rice and beans",
        c: "pounded yam"
      },
      correctAnswer: "b"
    },
    {
      question: "Am i an introvert",
      answers: {
        a: "yes",
        b: "no",
        c: "none of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "What is favourite movie genre?",
      answers: {
        a: "Action",
        b: "Sci-Fi",
        c: "Adventure"
      },
      correctAnswer: "c"
    },
    {
      question: "What year is my Honda Accord",
      answers: {
        a: "2000",
        b: "2001",
        c: "2002"
      },
      correctAnswer: "c"
    },
    {
        question: "Who among this celebrity do i like?",
        answers: {
          a: "Tyla",
          b: "Tiwa Savage",
          c: "Arya Starr"
        },
        correctAnswer: "c"
      },

      {
        question: "Am i Gay?",
        answers: {
          a: "Yes",
          b: "No",
          c: "None of the above"
        },
        correctAnswer: "a"
      },

      {
        question: "What is my favourite junk?",
        answers: {
          a: "pizaa",
          b: "sharwarma",
          c: "burger"
        },
        correctAnswer: "b"
      },

      {
        question: "Am i a good Driver",
        answers: {
          a: "No",
          b: "Yes",
          c: "Maybe"
        },
        correctAnswer: "b"
      },

      {
        question: "Who would i likely kill first?",
        answers: {
          a: "Chakiti",
          b: "Victor",
          c: "Ini"
        },
        correctAnswer: "a"
      },

      {
        question: "Am i a good friend?",
        answers: {
          a: "Yes",
          b: "No",
          c: "Na you Know"
        },
        correctAnswer: "c"
      }


  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submit_button = document.getElementById('submit');
  
  function buildQuiz() {
    const output = [];
  
    quizData.forEach((currentQuestion, questionNumber) => {
      const answers = [];
  
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter}: ${currentQuestion.answers[letter]}
          </label>`
        );
      }
  
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    });
  
    quizContainer.innerHTML = output.join('');
  }
  
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
  
    quizData.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length}`;
  }
  
  buildQuiz();
  
  submit_button.addEventListener('click', showResults);