const promise = new Promise((resolve, reject) => {
  console.log("foo");
  reject();
  console.log("bar");
});

promise
  .then(() => {
    console.log("baz");
  })
  .catch(() => {
    console.log("qux");
  });

console.log("abc");

/*
- The above will log `foo` , `bar` , `abc` , `qux` to the console.

- On lines 1-5 we construct a new `Promise` object using the `Promise` constructor with the `new` keyword.
The callback passed to the `Promise` constructor runs when the new `Promise` object is constructed.
Thus, the `console.log` on line 2 is invoked, which outputs `foo` to the console.
On line 3, the `Promise` rejects as marked by the `reject()` invocation.
However, since `catch()` is not called yet, nothing happens. On line 4, `bar` is logged to the screen,
so it is the second line of output.

- We invoke `promise.then` followed by `.catch` on lines 7-13.
Since both the callback’s to `then` and and `catch` are run asynchronously, they would run *after* any synchronous code
in the program. Thus, the `console.log` on line 11 is run and `'abc'` is logged to the console.

- Since `promise` was `rejected` , the callback to `catch` is invoked rather than `then` ,
thus `'qux'` is logged to the console after `'abc'`.
*/
