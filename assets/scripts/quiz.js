//html selectors - sample: var startButtonEl = document.querySelector("#start");
//var submitEl = document.querySelector("#intiails-sumbit")
//global variables
    //question number - current question
    //store the time - var timeLeft - 300
    //array of questions - var Question = ["what's two plus two", "what's two plus two", "what's two plus two", "what's two plus two",]; 
    //array of answers - var Answers = [["4", "5" "6", "7"],["9", "8" "7", "6"],["11", "12" "16", "17"],["24", "25" "26", "27"],]
    //    answers[1] // ["9", "8", "7", "6"]
    //    answers[1][3] // "6"
    //array of correct answers var correctAnswers = ["4", "8",]
//functions 

function startGame() {
    //action to initialize the game
    //start button disappears
    //welcome text disappears
    //timer starts
    //first question appears
    //response options for first question appears
}

function startTimer() {
    //set interval -- look through the activities from today
    //decrement the time left each second
    //check if the time is zero, if yes - endGame (new function outside of this function)
}

function guess() {
    //triggered by an event listener on the options
    //what was clicked? event.target -- did the user click the correct answer
    //compare what was selected to what is the correct answer
    //if correct answer - message that says correct
    //else - message that say incorrect, reduce the time by 10 seconds
    //call newQuestion function - renews the question on the page
}

function newQuestion() {
    //presented with the new question
    //presented with new response options
    //increment the current question number
    //if you are at the end of the array - endGame function
}

function endGame() {
    //everything disappears
    //message "all done!" - summary text
    //input field for initials - eventListener
    //stop decrementing the time left
}

function afterSubmit() {
    //create an edge case check - empty array of scores
    //create scrore object
    //initialField.value for the initials value in the score object
    //insert new score into localStorage ! array of objects  [{initials: "HCW", score: 23}, {initials: "CL": score: 31}] 
    //show high score 
    //options to start over and clear high score
}

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