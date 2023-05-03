/*
Input = two ids, a start id and an end id
Output = an array of the element with an id of EndId to the element with an id of StartId
and all the parent elements in between

Rules
 - Only elements that have body as an ancestor are sliceable
 - If the id of the start or end index is not in the DOM return undefined
 - If theres no path connecting the ending index to the starting index return
 undefined (start index must be an ancestor of end index )

Algorithm
- define a function sliceTree with two parameters startId and endID
- Declare a variable endingEl to the return value of calling document.getElementbyId(endId)
- Declare a variable startingEl to the return value of  calling document.getElementbyId(startID)
- if startingEl or endingEl is === null return undefined
- If document.querySelector('body') does not contain endingEl or startingEl, return undefined
- if startingEl does not contain endingEl, return undefined

- declare a variable allEls to an array with the endingEl tagname as a single element
- declare a variable currentEl to the endingEl
- while the id exists AND it is greater than startId
- declare a variable parent to the value of .parentElement of currentEl
- unshift the tagName of parent to allEls
- re assign currentEl to parent

- unshift the tagname of the startingEl to allEls
- return allEls
*/

function sliceTree(startId, endId) {
  let endingEl = document.getElementById(endId);
  let startingEl = document.getElementById(startId);
  let body = document.querySelector('body');

  if (endingEl === null || startingEl === null) return undefined;
  if (!body.contains(endingEl) || !body.contains(startingEl)) return undefined;
  if (!startingEl.contains(endingEl)) return undefined;

  let allEls = [endingEl.tagName];
  let currentEl = endingEl;

  while (currentEl.id && currentEl.id > startId) {
    let parent = currentEl.parentElement;
    allEls.unshift(parent.tagName);
    currentEl = parent;
  }

  return allEls;

}
