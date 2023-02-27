var question1 = $('#1');
var question2 = $('#2');
var question3 = $('#3');
var question4 = $('#4');
var beginButton = $('#start');
var startScreen = $('#startScreen');
var questionBox = $('.question-container');
var currentQuestion = 0;

var timeEl = document.querySelector(".time");

// Selects element by id


var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    
      
    }

  }, 1000);
}


const questions = [

    {
        question: "A website's building blocks uses these three languages:",
        answers:[
            { text: "HTML, Ruby, Firefox", correct: false },
            { text: "Java, CSS, HTML", correct: false},
            { text: "CSS, Javascript, HTML", correct: true},
            { text: "Javascript, CSS, HTTPS", correct: false},
        ]
    
    },
    {
        question: "The Math.floor function:",
        answers: [
            {text: "Rounds a decimal down to the nearest integer", correct: true},
            {text: "Rounds a decimal up to the nearest integer", correct: false},
            {text: "Chooses a random number from an array's floor", correct: false},
            {text: "Creates a floor for an array", correct:false},
        ]
    },
    {
        question: "This argument returns either true or false:",
        answers: [
            {text: "Modulus", correct: false},
            {text: "Boolean", correct: true},
            {text: "Arithmetic", correct: false},
            {text: "Rogerian", correct: false},
        ]
    },
    {
        question: "Which of these is a JS comment:",
        answers: [
            {text: "//Comment//", correct: true},
            {text: "<!--Comment-->", correct: false},
            {text: "/*Comment*/", correct: false},
            {text: "?Comment?", correct: false},
        ]
    },
    {
        question: "Use this Git Command to send repo changes to GitHub:",
        answers: [
            {text: "Git Push", correct: true},
            {text: "Git Pull", correct: false},
            {text: "Git Status", correct: false},
            {text: "Git Commit", correct: false},
        ]
    },
    {
        question: "Use this Git Command to receive repo changes from GitHub:",
        answers: [
            {text: "Git Push", correct: false},
            {text: "Git Pull", correct: true},
            {text: "Git Status", correct: false},
            {text: "Git Commit", correct: false},
        ]
    },
    {
        question: "Which language is a CSS database?",
        answers: [
            {text: "Java", correct: false},
            {text: "Bootstrap", correct: true},
            {text: "HTML", correct: false},
            {text: "JQuery", correct: false},
        ]
    },
]

function buildQuiz () {
    $('#startScreen').hide();
    $(questionBox).show();

    setTime();
    
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0
    
    
}



$(beginButton).on("click", buildQuiz)
