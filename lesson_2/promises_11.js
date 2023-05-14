const testPromise = () => Promise.resolve("1");

function test1() {
  testPromise().then((result) => console.log(result));
  console.log("2");
}

function test2() {
  console.log("3");
}

test1();
test2();

/*
Above logs "2", "3", and "1" to the console.

When we invoke the test1 function, it invokes  the `testPromise` arrow function on line 4 but since this code
is asychronous, JavaScript doesn't wait for `testPromise` to resolve.

Instead, JavaScript moves on to line 5 and logs "2" to the screen.

JavaScript will finish running all of the ayshcronous code before it returns to the asychronous code on line 4.
Thus, on line 13 when test2 is called, the console.log on line 9 is run and "3" is logged to the screen next.

Now, since all of the sychronous code is run, JavaScript returns to the call to testPromise() which is an arrow
function defined on line 1 and calls the static method `Promise.resolve` in its body. `Promise.,resolve` returns
a resolved Promise object with a value of "1".  The `then` method is then invoked since `testPromise()` returns a resolved
Promise and the resolved Promises' value, "1", is logged to the console.
*/
