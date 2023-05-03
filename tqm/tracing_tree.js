/*
Input = id of the element
Output = a nested array starting with the element and then tracing back all
the way to the first element, Article

['A'] (22)
['STRONG'] .parentElement, .prevoiusElementSibling = null, .nextElementSibling = null
['SPAN', 'SPAN'] .parentElement, .previousElementSibling = SPAN then .previousE

Data Structure - Array

Algorithm
- define a function domTreeTracer that takes an Id
- declare a variable familyTree to an empty array
- declare a variable currentId to the value of the passed in Id
- Start a while loop with a condition while currentId is not an empty '' (so while currentId)
- Declare a variable currentEl to the return value of document.getElementbyId(currentId)
- Declare a variable parent to the return value of the .parentElement property on the currentEl
- Declare a variable siblings to the return value of the .childNodes property on parent and coerced into an
array
- Declare a variable elementSiblings to the return value of calling filter on siblings and returning
those siblings whos value of .nodeType === 1
- Declare a variable tagNames to the return value of calling map on elementSiblings and returning
the .tagName of each sibling
- push the tagNames array to the family tree array
- re-assign currentId to the value of parent's id
- return family Tree
*/

function domTreeTracer(id) {
  let familyTree = [];
  let currentId = id;

  while (currentId) {
    let currentEl = document.getElementById(currentId);
    let parent = currentEl.parentElement;
    let siblings = Array.prototype.slice.call(parent.childNodes);
    let elementSiblings = siblings.filter(node => node.nodeType === 1);
    let tagNames = elementSiblings.map(node => node.tagName);
    familyTree.push(tagNames);
    currentId = parent.id;
  }

  return familyTree;
}
