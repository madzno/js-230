function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function addArticleText() {
  walk(document.body, node => {
    if (node.nodeName === 'P') {
      node.classList.add('article-text');
    }
  });
}

addArticleText();

