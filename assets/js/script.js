var timeEl = document.querySelector(".timer-count");
var secondsLeft = 90;

// timer starting from 90 seconds counting donw to 0
var timerInterval = setInterval(function () {
    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to go to end screen
    } else {
      timeEl.textContent = secondsLeft + ' seconds remaining';
      secondsLeft--;
    }
  }, 1000);




// everytime user gets question wrong, cuts timer down 10 seconds
// each question switches (maybe carrosel)
// right and wrong alerts at bottom
// knowing when its right and wrong.
// display score at end (which is remaining timer)
// place to put initals (form)
//highscore page with drop down list (todo)
//clear highscore button to clear (local storage)
// play again button at the end (eventlistener)
