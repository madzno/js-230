/*

When a user clicks on a navigation link, the highlight link is
added to that particular article element

- declare a variable allArticles to the return value of querySelectAll('article'), converted to an array object

- Add an event listener on to the ul parent element for click events
- declare a variable articleNumClicked to the event.target.textContent value with String#match called on it and passed
the regex /[0-9]/g as an argument and the string at index 0 of that array
- declare a variable articletoHighlight to the return value of iterating through allArticles with filter and selecting the article
who's id value includes the articleNumClicked
- add the highlight class to the articletoHighlight 's classList property
- declare a variable otherArticles to iterating through allArticles with filter and selecting the articles that are NOT the articleToHighlihgt
does (== work in this case? May need to select the articles who's id's do NOT have the articleNumClicked in them)


- add an event listener to main
- if event.target.tagName === 'ARTICLE' || event.target.parentNode.tagName === 'ARTICLE'
  - declare a variable articleNum to the return value of event.target.id.match(/[0-9]/g)[0] || event.target.parentNode.id.match(/[0-9]/g)[0]
  - pass articleNum to highglightArticle
  - remove highlight from other articles AND main element

- else
  - main.classList.add('highlight')
  - iterate through allArticles and remove highlight from all articles classlists'



*/

document.addEventListener('DOMContentLoaded', () => {
  let navigation = document.querySelector('ul');
  let allArticles = Array.from(document.querySelectorAll('article'));
  let main = document.querySelector('main');

  function highlightArticle(num) {

    let articleToHighlight = allArticles.filter(article => {
      return article.id.includes(num);
    })[0];

    articleToHighlight.classList.add('highlight');
    return articleToHighlight;
  }

  function removeHighlightOtherEls(targetArticle) {
    let otherArticles = allArticles.filter(article => {
      return article !== targetArticle
    });

    otherArticles.forEach(article => article.classList.remove('highlight'));
    main.classList.remove('highlight');
  }

  navigation.addEventListener('click', event => {
    event.stopPropagation();
    let articleNumClicked = event.target.textContent.match(/[0-9]/g)[0];
    let articleHighlighted = highlightArticle(articleNumClicked);
    removeHighlightOtherEls(articleHighlighted);
  });

  document.body.addEventListener('click', event => {
    if (event.target.tagName === 'ARTICLE' ||
      event.target.parentNode.tagName === 'ARTICLE') {

      let articleNum = (event.target.id.match(/[0-9]/g) ||
        event.target.parentNode.id.match(/[0-9]/g))[0];

      let articleHighlighted = highlightArticle(articleNum);
      removeHighlightOtherEls(articleHighlighted);
    } else {
      main.classList.add('highlight');
      allArticles.forEach(article => article.classList.remove('highlight'));
    }
  });

});
