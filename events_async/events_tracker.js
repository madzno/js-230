/*
2 parts
 - tracker object
 - record event function

Tracker object
 - list property that is an array of elements (keep private )
 - list method that returns a copy of the list array
 - elements method that returns an array of the elements that the event occured
 on (event.target)
 - clear element that clears the list of events

track function (inside the same IFFEE as tracker object so it has
 access to the list array)
  - takes a callback function as an argument
  - pushes the event object to the tracker object
*/

const divRed = document.querySelector('#red');
const divBlue = document.querySelector('#blue');
const divOrange = document.querySelector('#orange');
const divGreen = document.querySelector('#green');

const tracker = (function () {
  const eventsList = [];
  return {
    list() {
      return eventsList.slice();
    },
    elements() {
      return this.list().map(event => event.target);
    },
    add(event) {
      eventsList.push(event);
    },
    clear() {
      eventsList.length = 0;
      return eventsList.length;
    },
  };
})();

function track(callback) {
  function eventExists(list, event) {
    return list.includes(event);
  }

  return event => {
    if (!eventExists(tracker.list(), event)) {
      tracker.add(event);
    }

    callback(event);
  };
}

divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));
