const promise1 = new Promise((resolve, reject) => {
  console.log("foo");
  resolve();
  console.log("bar");
});

promise1.then(() => {
  console.log("baz");
});

console.log("qux");

/*
The following will log foo, bar, qux, baz to the console.

On lines 1-5 we construct a new Promise object using the Promise constructor
with the new keyword. The callback passed to the Promise constructor runs when the new
Promise object is constructed. Thus the console.log on line 2 is invoked, which outputs 'foo'.
On line 3 the Promise resolves as marked by the resolve() invocation. However, since
then() is not called yet, nothing happens. On line 4 "bar" is logged to the screen, so
it is the second line of output.

We invoke promise1.then on line 7 but since then's callback runs asynchronously it is run *after*
any sychrnous code in the snippet. Thus, the console.log on line 11 is run and "qux" is output to
the console.

Finally, the asychronous callback tot hen is invoked and "baz" is logged to the screen.

*/
