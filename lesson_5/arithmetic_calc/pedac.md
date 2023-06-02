## User choosing arithmetic operator
- retrieve '#operator' select element
- add event listneer for change event
- access the value of the choice by getting the innerText of the target element of the event and
initialize this to a (global) variable operator

## Submitting form
- retireve th 'form' element
- add an event listener for th 'submit' event
- prevent the default action

- retrieve the value of the '#first-number' input element and assign it to firstNum as a Number
- retireve the value of the '#second-number' input element and assign it to the secondNum as a number
- retrieve the selectedOptions property on the '#operator' select list, the operator value is the innerText of the <option> element
at index 0

- declare a variable result
- use a if/else statement
- if operator === '+'
  - convert firstNumber and secondNumber to Numbers and add
- if operator === '-'
  - convert firstNumber and secondNumber to Numbers and subtract
- if operator === '*'
  - convert firstNumber and secondNumber to Numbers and multiply
- if operator === '/'
  - convert firstNumber and secondNumber to Numbers and divide
- for all of these, assign the value of result to the result
- retireve the '#result' h1 element
- set the innerText of #result to the value of result
