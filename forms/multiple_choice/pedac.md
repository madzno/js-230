## Set up the UI
- declare a constant questions to the questsions array of objects

- compile the template/generate the html to be inserted
- select the handlebars template (id #question_template);
- declare a variable templateFunc to the return value of Handlebars.compile(template.innerHtml);
- declare a variable html to the return value of templateFunc({questions})

- insert the html
- get the fieldset element
- append the html onto that fieldset element

## when the user submits the form

- mark each question as correct, wrong or unanswered and display appropriate message
- declare a variable questions to a jquery object of all the '.question' div's on the page
- iterate through questions (may need to convert it to the array)
- for the current question, convert it to a jquery object
- get the value of the 'data-id' of the question and initalize this to a variable id
- call find on the question object and pass 'input:checked' as the selector to get the checked input jquery object for that question
- declare a variable messageP to the return value of calling find and passing 'p.result' as the selector and this gets the jquery object
that is that input element's errorMessage paragraph
- declare a variable correct answer to the value at the id in the answerKey object

- if checked[0] is null,
- add the class 'wrong' to the messageP
- set the text of messageP to 'You did not answer the question. Correct answer is: "`${correctAnswer}`".
- if checked.val() is equal to correctAnswer
- set the class 'correct' to the messageP
- set the text of messageP to 'Correct Answer'
- otherwise,
- set the class 'wrong' to the messageP
- set the text of messageP to 'Wrong Answer. The correct answer is: "`${correctAnswer}`"


- Disable the submit button
