function lsPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error: Not Launch School');
    }, 2000);
  });
}

lsPromise().catch(message => {
  console.log(message);
});
