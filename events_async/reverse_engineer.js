document.querySelector('html').addEventListener('click', () => {
  let containerEl = document.querySelector('#container');

  if (!containerEl.contains(event.target)) {
    containerEl.style = 'display: none';
  }
});
