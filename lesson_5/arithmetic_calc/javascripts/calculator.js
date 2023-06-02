document.addEventListener('DOMContentLoaded', () => {
  let firstInput = document.getElementById('first-number');
  let secondInput = document.getElementById('second-number');
  let selectOperator = document.getElementById('operator');
  let form = document.querySelector('form');
  let resultHeading = document.getElementById('result');

  function calculateResult(operator, firstNum, secondNum) {
    if (operator === '+') {
      return firstNum + secondNum;
    } else if (operator === '-') {
      return firstNum - secondNum;
    } else if (operator === '*') {
      return firstNum * secondNum;
    } else {
      return (firstNum / secondNum).toFixed(2);
    }
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    let firstNum = Number(firstInput.value);
    let secondNum = Number(secondInput.value);
    let operator = selectOperator.value;
    let result = calculateResult(operator, firstNum, secondNum);

    resultHeading.innerText = String(result);

  });
});
