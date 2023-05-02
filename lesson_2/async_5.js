let counter;

function startCounting() {
  let num = 1;
  counter = setInterval(() => {
    console.log(num);
    num += 1;
  }, 1000);
  return counter;
}

startCounting();

function stopCounting() {
  clearInterval(counter);
}

stopCounting();
