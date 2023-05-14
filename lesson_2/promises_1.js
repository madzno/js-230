function lsPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Launch School');
    }, 2000);
  });
}

lsPromise().then(message => {
  console.log(message);
});
