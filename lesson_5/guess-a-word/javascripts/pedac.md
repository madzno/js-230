## Bind a keypress event to the document
- document.addEventListener('keyup');

## Callback method passed to the keyup event
- define a method processKey
- if the key is not a letter key, a-z, return from the method
- declare a variable letter to the return value of event.key
- if letter is included in the this.lettersGuessed array, simply return from the method
- add the letter to this.lettersGuessed array
- if the letter is included in the currentWord array, call the this.outputLetter() method with letter as an argument and call this.outputGuess() method
with letter as an argument
- if the letter is not included in the currentWord array, call the incorrectGuess() method

## this.outputLetter(letter) method
- declare a variable matchingIndexes
- iterate through this.currentWord with forEach with char and index as parameters, if the current char is equal to letter add the
index to the matchingIndexes array
- declare a variable spansArr to calling querySelectAll('span') on the spaces div and converting it into an array
- declare a variable matchingSpans to the return value of filter the spansArr to those data-id's (converted to numbers) that are included in matchingIndexes
- iterate through matchingSpans and set each span's textContent to letter

## this.incorrectGUess() mthod
- add 1 to this.incorrect
- set the .classList property of the apples div to `guess_${this.incorrect}`

## this.gameOver() method
- get the message paragraph and set its textContent to gameOverMessage
- game over mesasage = 'Sorry! You're out of guesses'
- get the replay link using getElementbyId('replay');
- using classList, add the class ('visible');
- unbind the 'keyup' event using removeEventListener (make sure all of the argumetns match)

## Click event for the replay link
- 'click' on replay link  (may need to be in the 'DOMContentLoaded' listner)
- prevent default
- new game constructor is called

## this.outputGuess(letter) method
- get the guesses' div , id 'guesses'
- create a string `<span>${letter}</span>`
- inserttheadjacentHTML 'beforeend' of the 'guesses' div

## this.gameWon() method
- if all of the char's from currentWord are included in the lettersGuessed array, then call gameWon() method
- get the message paragraph and set its textContent to the gameWon message
- get the replay link using getElementbyId('replay');
- using classList, add the class ('visible');
- unbind the 'keyup' event using removeEventListener (make sure all of the arguments match)

## this.reset() method 
- called everytime the new constructor is called
- class visible is removed from the replay link
- className of the 'apples' div is reset to ''
- content of the message paragraph is set to ''
- remove all the spans from the guesses' div (can combine with removing from the word div)
- reset the document.body className to '' 
