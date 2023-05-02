/*
1.
document.getElementById('primary_heading').setAttribute('class', 'heading');

2.
document.getElementById('list').setAttribute('class', 'bulleted');

3.
let hiddenLink = document.getElementById('notice');
let toggleLink = document.getElementById('toggle');

toggleLink.onclick = function (e) {
  e.preventDefault();
  if (hiddenLink.getAttribute('class') === 'hidden') {
    hiddenLink.setAttribute('class', 'visible');
  } else {
    hiddenLink.setAttribute('class', 'hidden');
  }
};

4.

let hiddenLink = document.getElementById('notice');

hiddenLink.onclick = function (e) {
  e.preventDefault();

  e.currentTarget.setAttribute('class', 'hidden');
};

5.

let multiply = document.getElementById('multiplication');
multiply.textContent = '117';

6.

document.querySelector('body').id = 'styled';
*/
