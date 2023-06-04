## Add an event handler for the submit event on the form
- retrieve the 'form' element from the page
- add an event listener on it for a 'submit' event
- prevent the default action

## Retrieve the item name and value from the form elements
- declare a variable itemName and initialize it to the .value of the '#name' input element
- declare a variable itemQuantity and initialize it to the .value of the '#quantity' element

## Use a quanitty of 1 if the quantity field is left empty
- if the value of '#quantity' is '', re-assign it to the string '1'

## Create a new list item object using the name and quantity as strings
- document.createElement('li');
- innerText set to `${quantity} ${element}`
- retrieve the 'ul' item
- append the list item to the 'ul' item

## Add the list item to the grocery list portion of the HTML

## Clear the forms contents
- call form.reset();
