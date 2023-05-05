/*
What does same level of indentation mean?

1 - passed in number is 1

4, 7, 12, 16 - passed in number is 4

  <a href="#" id="4" class="child1x1">4</a>

   <p id="7" class="child1x1">

  <p id="12" class="child1x1">12


  <p id="16" class="child1x2">16


10, 15, 19, 22 - passed in number is 7

3, 6, 11, 24 - passed in number is 3


0 and 8 passed in - nothing is colored


Algorithm
 - define a function colorGeneration that takes an integer as an argument, targetGeneration
 - declare a local variable currentGen to 0
 - declare a local variable parents to an array with the document.body as its ownly element
 - declare a local variable elements

 - while the currentGen is less than the targetGeneration
 - add 1 to the currentGen
 - re-assign elements to the return value of turning all parent elements into their children in a single flat array

- helper funciton getAllChildrenOf takes parents array as an argument
- iterates through the parents array and calls children on each element, parents array now contains sub arrays of HTMLcollections
- iterate through the parents array and for each HTMLCollection convert it to an Array (Array.prototpye.slice.call(children))
- then flatten the parents array using flat

- re-assign parents to elements

- if there are elements in elements (if(elements)) -> iterate through the elements array and for each element, add 'generation-color' to
its classList
*/

function getAllChildrenOf(parents) {
  let allChildren = parents.map(parent => parent.children);
  let allChildrenArr = allChildren.map(collection => Array.prototype.slice.call(collection));
  return allChildrenArr.flat();
}

function colorGeneration(targetGeneration) {
  let generation = 0;
  let parents = [document.body];
  let elements;

  while (generation < targetGeneration) {
    generation += 1;
    elements = getAllChildrenOf(parents);
    parents = elements;
  }

  if (elements && elements.length > 0) {
    elements.forEach(el => el.classList.add('generation-color'))
  }
}
