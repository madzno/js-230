/*
1.

let html = document.lastChild; // gets ust he html Element node
let body = html.lastChild; // gets the body Element node
console.log(body.childNOdes) // NodeList [text, h1, text, p, text, p, text, p, text, p, text, p, text]
let heading = body.childNodes[1]; // access h1 heading, skipping text node
heading.style.color = 'red'
heading.style.fontSize = '48px'

2.

let count = 0;

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document.body, node => {
  if (node.nodeName === 'P') {
    count += 1;
  }
});

console.log(count); // 5

3.
let firstWord = [];

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document.body, node => {
  if (node.nodeName === 'P') {
    let text = node.firstChild.data.trim();
    let words = text.split(' ');
    firstWord.push(words[0]);
  }
});

4.

let firstParagraph = body.childNodes[3];
walk(document.body, node => {
  if (node.nodeName === 'P' && node !== firstParagraph) {
    node.classList.add('stanza');
  }
});

5.

let images = [];

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document, node => {
  if (node.toString() === '[object HTMLImageElement]') {
    images.push(node);
  }
});

console.log(images.length); // 48


let pngImages = images.filter(node => {
  return node.src.includes('.png');
});

console.log(pngImages.length); // 23

walk(document, node => {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
});
*/
