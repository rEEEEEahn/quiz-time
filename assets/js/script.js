var quizContainer = document.getElementById('quiz');
var timeEl = document.querySelector(".timer-count");
var secondsLeft = 90;
var current = 0;

// create array that holds objects(questions)
// put choices and answers in the objects
var questions = [
    {
    question: "what does CSS stand?",
    answers: ["HyperText Markup Language", "Cascading Style Sheets", "Cool Students Study", "Cookie Sheets Suck"],
    correctAnswer: "Cascading Style Sheets"
    },

    {
    question: "Is it okay to 'GOOGLE' things you do not know in coding?",
    answers: ["YES", "NO", "give up", "eat food"],
    correctAnswer: "YES"
    },  

    {
    question: "How do you change background color in CSS?",
    answers: ["color", "back-color", "bckgrd-clr", "background-color"],
    correctAnswer: "background-color"
    }, 

    {
    question: "_______ is the process of finding errors and fixing them within a program.?",
    answers: ["Compliling", "Executing", "Debugging","Scanning"],
    correctAnswer: "Debugging"
    },

    {
    question: "The first Jack-o-Lanterns were made out of what?",
    answers: ["pumpkins", "turnips", "watermelons", "coconuts"],
    correctAnswer: "turnips"
    },                      
];
// function, to start the quiz. shows question and starts timer
function startQuiz (){
    document.getElementById('question').innerHTML ='';
    var qElem = document.createElement('div');
    qElem.innerHTML = `
      <h3>Question ${current + 1}: ${questions[current].question}</h3>
      <ul class="collection">
        <li class="collection-item" data-choice="${questions[current].answers[0]}" id="option0">
                A) ${questions[current].answers[0]}</li>
        <li class="collection-item" data-choice="${questions[current].answers[1]}" id="option1">
                B) ${questions[current].answers[1]}</li>
        <li class="collection-item" data-choice="${questions[current].answers[2]}" id="option2">
                C) ${questions[current].answers[2]}</li>
        <li class="collection-item" data-choice="${questions[current].answers[3]}" id="option3">
                D) ${questions[current].answers[3]}</li>
      </ul>
      `;
      document.getElementById('question').append(qElem);
      for (let i = 0; i < questions[current].answers.length; i++) {
        if (questions[current].correctAnswer === questions[current].answers[i]) {
          document.getElementById(`option${i}`).className = 'collection-item';
        }
      }
    }


// timer starting from 90 seconds counting donw to 0
document.getElementById("start-button").addEventListener('click', function() {
    document.getElementById("start-button").remove();
    var timerInterval = setInterval(function () {
    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
     //make this***
      clearInterval(timerInterval);
      // Calls function to go to end screen
    } else {
      timeEl.textContent = secondsLeft + ' seconds remaining';
      secondsLeft--;
    }
  }, 1000);
  startQuiz();
});

document.addEventListener('click', function(event){
    if (event.target.classList.contains('collection-item')) {
      if (event.target.dataset.choice !== questions[current].answers) {
        secondsLeft -= 15;
      }
      console.log(event.target.dataset.choice);
      current++;
      setTimeout(function () {
        if (current >= questions.length) {
          endGame(); //make *****
          clearInterval(secondsLeft);
        }
        else {
          startQuiz();
        }
      }, 200);
    }
  });
// function, (where must is going to be)
//if answered wrong deduct 10 secs from timer, show "youre wrong statemnt", 
//if timer is <0 stop quiz and show score
// if timer is >0, continue quiz til <0
//when right, show "youre right" statement
//if timer is <0 stop quiz and show score ( same as top)
// if timer is >0 show next question
//if timer is >0 and there are no more questions, show score

//either win lose, must grab timer variable for answer







// everytime user gets question wrong, cuts timer down 10 seconds
// each question switches (maybe carrosel)
// right and wrong alerts at bottom
// knowing when its right and wrong.
// display score at end (which is remaining timer)
// place to put initals (form)
//highscore page with drop down list (todo)
//clear highscore button to clear (local storage)
// play again button at the end (eventlistener)//
