var timerEl = $('#timer');
var startBtn = $('#start');

//questions taken from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
var questions = [
    {
        prompt: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<js>", "<javascript>", "<script>"],
        answer: "<script>"
    },

    {
        prompt: "How do you write Hello World in an alert box?",
        options: ["alertBox(''Hello World'')", "msgBox(''Hello World'')", "msg(''Hello World'')", "alert(''Hello World'')"],
        answer: "alert(''Hello World'')"
    },

    {
        prompt: "How do you call a function named myFunction?",
        options: ["call myFunction()", "myFunction()", "call function myFunction", ".myFunction{}"],
        answer: "myFunction()"
    },

    {
        prompt: "In JavaScript, which of the following is a logical operator?",
        options: ["|", "&&", "%", "/"],
        answer: "&&" 
    },

    {
        prompt: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseclick", "onmouseover", "onclick", "onchange"],
        answer: "onclick"
    }];


var timeLeft = questions.length * 20;
var timerStart;

function startQuiz() {
    timerStart = setInterval(clockTick, 1000);
    timerEl.textContent = timeLeft;
}



function timer() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      gameOver();
    }
  }



function gameOver() {
    clearInterval(timerId);
    var endScreenEl = document.getElementById("quiz-end");
    endScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
}