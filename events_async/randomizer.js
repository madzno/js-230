/*
Input = a variable number of callbacks (use rest syntax)
Output = calls the callbacks at some random point in time between now and
2 * n seconds where n represents the number of callbacks

Algo
-define a function randomizer that takes an argument ...args
- declare a variable maxSeconds and initialize it to the length of args multiplied by 2
- declare a variable callbackNums to an empty array
- iterate through the args and for each arg, choose a random num for that arg
 - declare a while loop with true as the condition
 - initialize a variable randomNum to the return value of Math.floor(Math.random() * max)
 - if randomNum is not in callbackNums, push it to callbackNums and break out of the while loop

- iterate through args with an index parameter and for each callback, set a setTimeoutFunction with the callback as the first
argument and the number at the current index in callbackNums as the second argument multiplied by 1000

- start a for loop with counter set to 1, iteration while counter is less than or equal to maxSeconds and add 1 to counter
on each iteration
- if counter is not included in callbackNums, output counter to the screen
*/

const { random } = require("underscore");


function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...args) {
  let maxSeconds = args.length * 2;
  let callbackNums = [];

  args.forEach(func => {
    while (true) {
      let randomNum = Math.floor(Math.random() * maxSeconds) + 1;
      if (!callbackNums.includes(randomNum)) {
        callbackNums.push(randomNum);
        break;
      }
    }
  });

  args.forEach((func, index) => {
    let currentNum = callbackNums[index];
    setTimeout(func, currentNum * 1000);
  });

  for (let counter = 1; counter <= maxSeconds; counter += 1) {
    if (!callbackNums.includes(counter)) {

      setTimeout(() => {
        console.log(counter);
      }, counter * 1000);

    }
  }
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6
