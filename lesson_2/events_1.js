/*
- User action is the event we need to handle = click
- The element that will receive the event is the entire document
- When the event occurs we want to change the horizontal position of the x to event.clientX
and the vertical position of x to event.clientY
*/

// document.addEventListener('click', event => {
//   let xclass = document.querySelector('.x');
//   xclass.style.left = String(event.clientX) + 'px';
//   xclass.style.top = String(event.clientY) + 'px';
// });

// document.addEventListener('mousemove', event => {
//   let xclass = document.querySelector('.x');
//   xclass.style.left = String(event.clientX) + 'px';
//   xclass.style.top = String(event.clientY) + 'px';
// });

function getKeyColor(keyName) {
  if (keyName === 'b') {
    return 'blue';
  } else if (keyName === 'g') {
    return 'green';
  } else if (keyName === 'r') {
    return 'red'
  }
}

document.addEventListener('mousemove', event => {
  let xclass = document.querySelector('.x');
  xclass.style.left = String(event.clientX) + 'px';
  xclass.style.top = String(event.clientY) + 'px';
  let horizontal = document.querySelector('.x .horizontal');
  let vertical = document.querySelector('.x .vertical');
  horizontal.style.background = getKeyColor(event.key);
  vertical.style.background = getKeyColor(event.key);
});
