let allParagraphs = document.getElementsByTagName('p');
let paragraphsArray = Array.prototype.slice.call(allParagraphs);
paragraphsArray.forEach(paragraph => {
  paragraph.classList.add("article-text");
});
