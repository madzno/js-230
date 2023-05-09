/*
The event "typing" is happending on the textarea element

The event adding a character count is happening on the p
.counter element

The counter element's textContent changes based on the word
count of the textarea

When the count reachs 140, the color of the .composer textarea
invalid turns to red (could add the class invalid?)
*/

// document.addEventListener('DOMContentLoaded', () => {
//   let composer = document.querySelector('.composer');
//   let textArea = composer.querySelector('textarea');
//   let counter = composer.querySelector('.counter');
//   let button = composer.querySelector('button');

//   function updateCounter() {
//     let length = textArea.value.length;
//     let remaining = 140 - length;
//     let message = `${remaining} characters remaining`;
//     let invalid = remaining < 0;

//     textArea.classList.toggle('invalid', invalid);
//     button.disabled = invalid;

//     counter.textContent = message;
//   }

//   textArea.addEventListener('keyup', updateCounter);

//   updateCounter();
// });


document.addEventListener('DOMContentLoaded', () => {
  let composer = document.querySelector('.composer');
  let textArea = composer.querySelector('textarea');
  let counter = composer.querySelector('.counter');
  let button = composer.querySelector('button');

  textArea.addEventListener('keyup', () => {
    let length = textArea.value.length;
    let remaining = 140 - length;
    let message = `${remaining} characters remaining`;
    let invalid = remaining < 0;

    textArea.classList.toggle('invalid', invalid);
    button.disabled = invalid;

    counter.textContent = message;
  });

});
