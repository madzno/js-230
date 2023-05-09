// elem0 refers to the <div> 0 element
let elem0 = document.querySelector('#elem0');

// elem1 refers to the <div> 1 element
let elem1 = document.querySelector('#elem1');

// elem 4 refers to the <div> 4 element
let elem4 = document.querySelector('#elem4');

// elem0 event listener occurs on a click event, in the bubbling phase the alert box shows
// the current Targets Id value (elem0)
elem0.addEventListener('click', event => alert(event.currentTarget.id));

// elem1 event listener occurs on a click event, in the capturing phase,
// the alert box shows the current target's id value (elem1)
elem1.addEventListener('click', event => alert(event.currentTarget.id), true);

// elem4 event listener occurs on a click event, in the bubblign phase, the alert
// box shows the current Target Id value (elem3)
elem4.addEventListener('click', event => alert(event.currentTarget.id));

/*
When elem4 is clicked *Only* the elem1 and elem4 boxes will be shown since elem0
is not a parent element of elem4 in the DOM hierarchy and therefore not included
in its capturing or bubbling phases.
*/
