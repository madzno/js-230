/*
- Function with 4 arguments:
  - parentElement
  - selector
  - eventType
  - callback

- Returns true if it was able to add an event listener to the
parent element
- Returns undefined if it wasn't able to add even tlistener

- callback of eventType gets added to the parentElement
- callback only triggers callback for elements of selector type
within the callback


- define a function delegateEvent with four arguments
parentElement, selector, eventType, callback
- add an event listener to the parentElement with the first argument as event type
and the second argument a callback with event arg
- if parent.querySelectorAll('selector').includes?(event.target) , then execute the
passed in callback and return true

- otherwise return undefined

*/

function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement && parentElement instanceof Element) {
    let targetEls = Array.from(parentElement.querySelectorAll(selector));
    parentElement.addEventListener(eventType, event => {
      if (targetEls.includes(event.target)) {
        callback(event);
        return true;
      }
    });
  }
}
