// global variables to use in this quiz 
var timeInterval
var startOption = document.getElementById('start-option');
var quizContainerElement = document.getElementById('quiz-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-choices');
var time = 60;

// questions creates an array of question text, choice options and correct answers. These are revealed in order in our Quiz Container in the index.html file
var questions = [
    {
        questionText:"Who is the 2023 World 8 Ball Champ?",
        choices:["Francisco Sanchez Ruiz", "Jayson Shaw", "Darren Appleton", "Shane Van Boening", ],
        correct:"Francisco Sanchez Ruiz",

    },
    {
        questionText:"What country is the best at pool",
        choices:["United States", "England", "Philippines", "Spain", ],
        correct:"Philippines",
        
    },
    {
        questionText:"Who was the 2022 World Pool Champion",
        choices:["Francisco Sanchez Ruiz", "Jayson Shaw", "Darren Appleton", "Shane Van Boening" ],
        correct:"Shane Van Boening",
        
    },
    {
        questionText:"Who is the 2023 World Pool Champion",
        choices:["Francisco Sanchez Ruiz", "Jayson Shaw", "Darren Appleton", "Shane Van Boening" ],
        correct:"Francisco Sanchez Ruiz",
        
    },
    {
        questionText:"Who won the Ohio Open in 2022",
        choices:["Joshua Filler", "Roberto Gomez", "Fedor Gorst", "Eklent Kaci", ],
        correct:"Fedor Gorst",
        
    },
    {
        questionText:"Who is the 2023 World 9 Ball Champ?",
        choices:["Francisco Sanchez Ruiz", "Jayson Shaw", "Darren Appleton", "Shane Van Boening", ],
        correct:"Francisco Sanchez Ruiz",
        
    },
    {
        questionText:"Who is the greatest pool player of all time?",
        choices:["Willie Mosconi", "Earl Strickland", "Johnny Archer", "Efren Reyes", ],
        correct:"Efren Reyes",
        
    }

]
var questionIndex = 0 //starts the quiz with the first question

//start the game and increment through the questions
startOption.addEventListener('click', startGame);

//action to initiate the game. startGame function will make the start button hide, reveal the first question and start the timer
function startGame() {
    startOption.classList.add("hidden"); //start button disappears
    currentQuestionIndex = 0;
    quizContainerElement.classList.remove('hidden'); //first question appears
    setNextQuestion();
    startTimer();

}
// dynamically inserts the answer options into the answer-choices id on the index.html
function setNextQuestion() {
    answerButtonsElement.innerHTML = ""
    showQuestion(currentQuestionIndex);
}

// dynamically inserts the question into the question id on the index.html
function showQuestion() {
    var question = questions [questionIndex]
    questionElement.innerText = question.questionText
    question.choices.forEach(choice => {
        var button = document.createElement('button')
        button.innerText = choice
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    //clearStatusClass(document.body)
    nextOption.classList.add('hidden')
    while (answersButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedAnswer = e.target.innerText
    var correct = questions [questionIndex].correct //if correct move to the next question
    //if incorrect move to the next question and reduce the time 10 seconds
    if (selectedAnswer !== correct) {
        time -= 10
    }
    questionIndex ++
    if (questionIndex >= questions.length) {
        endGame() 
    }
    setNextQuestion()
}
//when the game ends after all the questions have been asked - a prompt will open for the user to enter their initials and record their score in the local storage
function endGame() {
    document.querySelector(".quizCard").classList.add("hidden")
    clearInterval(timeInterval)
    var initials = prompt("enter your initials")
    var highscore = {
        initials, time
    }
    localStorage.setItem("high score", JSON.stringify(highscore))
}

function startTimer() {
    //setting timer - if time is greater than 1 then decrement the time left by 1000ms
    timeInterval = setInterval(function() { 
        if (time > 1) {
            time -= 1
            document.querySelector('#timer') .innerText = time
        }
    }, 1000) 
}

//ACCEPTANCE CRITERIA_____________________________________
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score the initials and score in the localStorage