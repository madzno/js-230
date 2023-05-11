document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  let userInput = document.querySelector('#guess');
  let link = document.querySelector('a');
  let display = document.querySelector('p');
  let answer;
  let guesses;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    display.textContent = 'Guess a number from 1 to 100';
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = parseInt(userInput.value, 10);
    let message;

    guesses += 1;

    if (guess > answer) {
      message = `My number is lower than ${String(guess)}`
    } else if (guess < answer) {
      message = `My number is higher than ${String(guess)}`
    } else {
      message = `You guessed it! It took you ${String(guesses)} guesses.`
    }

    display.textContent = message;
  });

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  });

  newGame();
});
