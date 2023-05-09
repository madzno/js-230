let divs = document.querySelectorAll('.pick');
// [<div>, <main>, <section>]


// adds eventListener for a click to <div>, <main> and <section> elements
// that fires on the capture phase
for (let index = 0; index < divs.length; index += 1) {
  divs[index].addEventListener('click', highlightThis, true);
}

// alert box appears that writes the value of this.className and
// event.currentTargettagName
function highlightThis(e) {
  alert(`${this.className} ${e.currentTarget.tagName}`);
}

/*
When we click on "4", the event object is dispatched from window -> document
Since the `useCapture` argument is set to true, event listener fires in the capturing phase
Thus, when the event
- reaches <div> 1 and there is an event listener, this outputs 'd1 pick' 'DIV' (this references
the currentTarget)
- reaches <main> 2 and there is an event listener, this outputs 'd2 pick' 'MAIN'
- <div> 3 doesnt have an event listener added
- reaches target element section 4, which has an event listener and this outputs 'd4 pick' 'SECTION'
*/

/*
If we add the following line of code
`document.querySelector('.d3') returns the d3 div element,
adding an event listneer that occurs with a click event in the BUBBLING PHASE
and calls highlightThis
- Therefore, After the above happens, 'd3 DIV` will be output (since it occurs in the bubbling
phase)
*/
