/*
Algorithm
- Have one Object called animalClassObj
 with Animal clasifications with their animal options as an array
- Have another Object called anmialsObj with Animals with their classifications

- declare a variable classList to the return value of calling query selector on
document and passing #animal-classifications as an argument

- declarea a variable animalsList to the return value of calling query selector
on document and passing #animals as an argument

- add an event listener to classList for a 'change' event,
 - declare a variable classChosen to the value of event.target.value
 - declare a variable currentOptions to classList.options
 - set the length of animalsList.options to 0
 - Find the array at animalsObj for the current classChosen
 - iterate through that array and add to animalsList.options a new Option for each value
*/

const animalsClassObj = {
  Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  Mammal: ['Bear', 'Whale'],
  Bird: ['Ostrich'],
}

const classificationObj = {
  Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  Turtle: ['Vertebrate', 'Cold-blooded'],
  Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  Salmon: ['Vertebrate', 'Cold-blooded'],
  Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
}

const allAnimals = ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'];
const allClassifications = ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'];

document.addEventListener('DOMContentLoaded', () => {
  let classificationList = document.querySelector('#animal-classifications');
  let animalsList = document.querySelector('#animals');
  let clrButton = document.querySelector('#clear');
  let optionsList;

  function generateNewOptions(choices) {
    optionsList.length = 0;

    choices.forEach((choice, index) => {
      optionsList[index] = new Option(choice);
    })
  }

  classificationList.addEventListener('change', event => {
    let classChosen = event.target.value;
    let animalOptions = animalsClassObj[classChosen];
    optionsList = animalsList.options;
    generateNewOptions(animalOptions);
  });

  animalsList.addEventListener('change', event => {
    let animalChosen = event.target.value;
    let classOptions = classificationObj[animalChosen];
    optionsList = classificationList.options;
    generateNewOptions(classOptions);
  });

  clrButton.addEventListener('click', event => {
    event.preventDefault();
    optionsList = classificationList.options;
    generateNewOptions(allClassifications);
    optionsList = animalsList.options;
    generateNewOptions(allAnimals);
  });
});
