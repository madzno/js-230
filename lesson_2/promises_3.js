const promise = new Promise(function (resolve, reject) {
  resolve("I am a Promise");
});

promise.then(value => console.log(value));
console.log("I am NOT a Promise");

/*
This will log 'I am NOT a Promise' and then 'I am a Promise' to the console.

'I am NOT a promise" is logged first because all synchronous code runs before
asynchronous code.

On lines 1-3 we create a new Promise object with the Promise constructor function and
new keyword. The promise constructor takes a single argument, a callback function.

This callback function takes two callbacks as arguments, resolve and reject. If the
action that the Promise is waiting for is successful, the resolve function is invoked and
if it is not the reject funciton is invoked.

In this case, the resolve funciton is invoked with a value of 'I am a Promise'. This means
that the Promise is fufilled with a value of `I am a Promise`

On line 5 we call the `then` method on the `promise` `Promise` object, `then` takes one callback
function that is invoked if/when the Promise is fufilled and is passed the fufilled value.
As explained earlier the fufilled value is 'I am a Promise' and thus this is logged to the screen.

*/
