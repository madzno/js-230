const test = Promise.reject("A");

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
- The above logs `"E"` and `"B"` to the console.

- On line 1 we declare a constant `test` and initialize it to a rejected Promise with a rejected value of `"A"` .

- The code in the `try` block is executed. On line 5 the `async` keyword tells JavaScript to wait until the
Promise referenced by `test` resolves or rejects.
As explained earlier, the Promise is rejected and therefore JavaScript raises an exception and the `catch` block is executed.
The code inside the `catch` block logs `"E"` to the screen.

- The `finally` clause runs since the Promise is settled and this logs `"B"` to the screen.
*/
