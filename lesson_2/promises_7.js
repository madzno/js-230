const promise = new Promise((resolve, reject) => {
  resolve("Got it!");
  reject("Oops.");
  resolve("Again!");
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/*
This code will log `'Got it!'` to the console. Once a promise is fufilled or rejcted, its status cannot be changed.
*/
