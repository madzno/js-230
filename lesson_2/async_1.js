function runTimeOut(num) {
  setTimeout(() => {
    console.log(num);
  }, num * 1000);
}

function delayLog() {
  let currentNum = 1;

  while (currentNum <= 10) {
    runTimeOut(currentNum);
    currentNum += 1;
  }
}

delayLog();

