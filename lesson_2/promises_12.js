const test = Promise.resolve("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();

/*
We define a asychronous arrow function on lines 3 - 11 with the `asyc` keyword. This funciton is immediately
invoked using IFFE syntax.

On line 5 inside the `asyc` arrow funciton's body, the code within the `try` block is invoked/ The await
operator is used and tells JavaScript to wait until the Promise referenced by test to resolve. The promise resolves
right away to a value of "A". THus, line 5 logs "A" to the screen.

The catch block is not invoked since none of the code inside the try block raises an error and the promise referenced
by test does not reject.

The finally block is invoked since the Promise referenced by test is settled, and "B" is output to the screen.
*/
