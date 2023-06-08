let Game = function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const messageNoWords = "Sorry, I've run out of words!";
  const messageGameOver = "Sorry, You're out of guesses!";
  const messageWon = "You won!";

  const messageDisplay = document.getElementById('message');
  const spaces = document.getElementById('spaces');
  const apples = document.getElementById('apples');
  const guess = document.getElementById('guesses');
  const replayLink = document.getElementById('replay');


  let randomWord = function () {
    let words = ['apple', 'banana', 'orange', 'pear'];

    return function () {
      let word = words[Math.floor(Math.random() * words.length)];
      words.splice(words.indexOf(word), 1);
      return word;
    };
  }();

  return class {
    constructor() {
      this.incorrect = 0;
      this.lettersGuessed = [];
      this.maxGuesses = 6;
      this.currentWord = randomWord();
      if (!this.currentWord) {
        this.displayMessage(messageNoWords);
        this.hideReplay();
        return this;
      }
      this.currentWord = this.currentWord.split('');
      this.reset();
      this.bindEvents();
      this.generateSpaces();
    }

    bindEvents() {
      this.processKeyHandler = (e) => this.processKey(e);
      document.addEventListener('keyup', this.processKeyHandler);
    }

    unbindEvents() {
      document.removeEventListener('keyup', this.processKeyHandler);
    }

    displayMessage(message) {
      messageDisplay.textContent = `${message}`;
    }

    getSpansArr(DOMElement) {
      return Array.from(DOMElement.querySelectorAll('span'));
    }

    removePreviousSpaces(DOMElement) {
      let spanArr = this.getSpansArr(DOMElement);
      spanArr.forEach(span => DOMElement.removeChild(span));
    }

    generateSpaces() {
      this.removePreviousSpaces(spaces);

      let spans = '';

      for (let counter = 0; counter < this.currentWord.length; counter += 1) {
        spans += `<span data-id=${counter}></span>`;
      }
      spaces.insertAdjacentHTML('beforeend', spans);
    }

    notALetter(letter) {
      return !alphabet.includes(letter);
    }

    duplicateKey(letter) {
      return this.lettersGuessed.includes(letter);
    }

    guessedAllLetters() {
      return this.currentWord.every(char => this.lettersGuessed.includes(char))
    }

    processKey() {
      let letter = event.key.toLowerCase();
      if (this.notALetter(letter)) { return; }
      if (this.duplicateKey(letter)) { return; }

      this.lettersGuessed.push(letter);

      if (this.currentWord.includes(letter)) {
        this.outputLetter(letter);

        if (this.guessedAllLetters()) {
          this.gameWon();
        }

      } else {
        this.incorrectGuess();
      }

      if (this.incorrect >= this.maxGuesses) {
        this.gameOver();
      } else {
        this.outputGuess(letter);
      }

    }

    getMatchingIndexes(letter) {
      let matchingIndexes = [];
      this.currentWord.forEach((char, idx) => {
        if (letter === char) {
          matchingIndexes.push(idx);
        }
      });
      return matchingIndexes;
    }

    outputLetter(letter) {
      let matchingIndexes = this.getMatchingIndexes(letter);

      let spansArr = this.getSpansArr(spaces);

      spansArr.forEach(span => {
        let id = Number(span.getAttribute('data-id'));
        if (matchingIndexes.includes(id)) {
          span.textContent = letter;
        }
      });
    }

    outputGuess(letter) {
      let html = `<span>${letter}</span>`
      guess.insertAdjacentHTML('beforeend', html);
    }

    incorrectGuess() {
      this.incorrect += 1;
      apples.className = `guess_${this.incorrect}`;
    }

    gameOver() {
      this.unbindEvents();
      this.displayMessage(messageGameOver);
      this.makeReplayVisible();
      document.body.classList.add('lose');
    }

    gameWon() {
      this.unbindEvents();
      this.displayMessage(messageWon);
      this.makeReplayVisible();
      document.body.classList.add('win');
    }

    makeReplayVisible() {
      replayLink.classList.add('visible');
    }

    hideReplay() {
      replayLink.classList.remove('visible');
    }

    reset() {
      this.hideReplay();
      apples.className = '';
      document.body.className = '';
      this.displayMessage('');
      this.removePreviousSpaces(guess);
    }


  }
}();

document.addEventListener('DOMContentLoaded', () => {
  new Game();

  document.getElementById('replay').addEventListener('click', event => {
    event.preventDefault();
    new Game();
  });
});
