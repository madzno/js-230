document.addEventListener('DOMContentLoaded', () => {
  let mainSection = document.querySelector('main');
  let subSection = document.querySelector('section');

  mainSection.addEventListener('contextmenu', event => {
    event.preventDefault();
    alert(`${event.currentTarget.tagName}`);
  });

  subSection.addEventListener('contextmenu', event => {
    event.preventDefault();
    event.stopPropagation();
    alert(`${event.currentTarget.id}`);
  })
})
