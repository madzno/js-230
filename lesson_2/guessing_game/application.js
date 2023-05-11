document.addEventListener("DOMContentLoaded", () => {
  let answer = Math.floor(Math.random() * 100) + 1;
  let form = document.querySelector('form');
  let userInput = document.querySelector('#guess');
  let newGame = document.querySelector('a');
  let display = document.querySelector('p');

  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = parseInt(userInput.value, 10);
    let message;

    if (guess > answer) {
      message = `My number is lower than ${String(guess)}`
    } else if (guess < answer) {
      message = `My number is higher than ${String(guess)}`
    } else {
      message = 'You guessed it!'
    }

    display.textContent = message;
  });

  newGame.addEventListener('click', event => {
    answer = Math.floor(Math.random() * 100) + 1;
    display.textContent = 'Guess a number from 1 to 100';
  });
});
