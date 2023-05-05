/*
Input - two element id's
Output =- true if the elements are able to be swapped and undefined for invalid

What constitutes "invalid"?
- One of the id's doesn't exist in the document
- One of the nodes is a "child" of the other

What does a "swap" mean?
- the node itself, including all child nodes gets swapped positions with the other node

DataStructure
Array

- Define a function nodeSwap with two parameters idOne and idTwo
- Declare a variable elOne to the return value of getElementById and passing the String version of idOne as an argument
- Declare a variable elTwo to the return value of getElementById and passing the String version of idTwo as an argument
- if elOne or elTwo is null return undefined
- if elOne.contains(elTwo) or elTwo.contains(elOne) return undefined

- make a deepClone of elOne and store it in copyOfOne (node.cloneNod(true))
- Declare a variable parent and initalize it to the return value of calling parent on elOne
- Declare a variable ndextSibling and initailize it to the return value of calling nextElementSibling on elTwo
-  call replace on parent and pass elTwo as the first argument and elOne as the second
- if sibling is null, parent.insertAdjacentElement("beforeend", copyOfOne)
- if sibling is not null, nextSibling.insertAdjacentElement('beforebegin', copyOfOne)
*/

function nodeSwap(idOne, idTwo) {
  let elOne = document.getElementById(String(idOne));
  let elTwo = document.getElementById(String(idTwo));

  if (elOne === null || elTwo === null) return undefined;
  if (elOne.contains(elTwo) || elTwo.contains(elOne)) return undefined;

  let copyOfOne = elOne.cloneNode(true);
  let parent = elOne.parentNode;
  let nextSibling = elTwo.nextElementSibling;

  parent.replaceChild(elTwo, elOne);

  if (nextSibling === null) {
    parent.insertAdjacentElement("beforeend", copyOfOne);
  } else {
    nextSibling.insertAdjacentElement("beforebegin", copyOfOne);
  }

  return true;

}
