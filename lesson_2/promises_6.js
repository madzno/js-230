const promise = new Promise(res => res(1));
promise
  .then((num) => {
    console.log(num);
    return num + 2;
  })
  .then((num) => {
    console.log(num);
    return num + 3;
  })
  .then((num) => {
    console.log(num);
    return num + 4;
  })
  .finally((num) => {
    console.log(num);
    return num + 5;
  });

/*
- On line 1 we construct a new `Promise` object using the `Promise` constructor with the `new` keyword.
This `Promise` resolves when the `res` function is invoked and is fufilled with a value of `1`.

- On line 2 we invoke the `then` method on the `promise` object, any calls to `then` are invoked when our `promise`
is fulfilled.  Since as explained earlier, our `promise` fulfilled with a value of `1` , the callback to `then`
is invoked with `1` passed as an argument. The callback logs `1` to the console and returns `3`.

- The return value of the first `then` call is passed to the second call to `then` on line 7,
the callback to this `then` runs and logs `3` to the console and returns a value of `6`.

- The return value of the second `then` call is passed to the third and final call to   `then`
is on line 10 and this logs `6` to the console and returns a value of `10`.

- `finally` is invoked after the final `then` call. `finally` is invoked when the promise is *settled*
(rejected *or* resolved). The callback to `finally` takes *no arguments.*  Thus, when we pass an argument to the callback
(`num` in this example) it always evaluates to `undefined` regardless of what was returned by the previous `then` call.
On line 16 we log the value of `num` and thus `undefined` is logged to the console.
*/
