let introElements = document.getElementsByClassName('intro');

for (let index = 0; index < introElements.length; index += 1) {
  let currentDiv = introElements[index];
  let paragraph = currentDiv.getElementsByTagName('p')[0];
  paragraph.classList.add('article-text');
}
