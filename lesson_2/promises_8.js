function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

async function test(input) {
  const a = await after1s(2); // returns a new promise that resolves after one second to a value of 2
  const b = await after1s(3); // returns a new promise that resolves after one second to a value of 3
  return input * a * b; // input is 3 * 2 * 3 = 18
}

test(3).then((value) => console.log(value));

/*
On lines 1 -7 we define a function `after1s` that takes a single argument `x`

`after1S` returns a new Promis object that resolves to a value of x after one second has elapsed.

On lines 9-13 we define an asychronous function with the async keyword called test.

On lines 11 and 12 we declare two constants `a` and `b` respectively to the return value of calling
the after1s function and passing 2 as an argument. We prepend the funciton calls to 10 and 11 with the `await` operator
When JavaScript encounters the `await` operator it knows to wait until the code following it resolves to a Promise, if
the code following is not a promise it converts it to a resolved promise.

On line 15 we invoke the test function and pass 3 as an argument, test immediately returns a pending Promise and
the callback to `then` won't run until that Promise rsolves.

Then, the code in `test` runs, `after1s` on line 10 returns a pending Promise that after one second resolves to the argument
passed to `after1s` , the integer 2. We again call `after1s` on line 11 and pass 3 as an argument, this again returns a pending process
and resolves to the value of its argument, the value 3. Since lines 10 and 11 are prepended with the await keyword, JavaScript
waits for the Promise to be resolved to assign a and b their values.

On line 12 we return the value of 3 * 3 * 2, or the integer 18 and this is logged to the console. Since collectively `after1s`
and `after2s` took 2 seconds for their respective Promises' to resolve, 18 is logged approximatley 2 seconds after the program is
invoked.


*/
