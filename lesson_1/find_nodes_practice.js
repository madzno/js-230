/*
1.
let headings = document.getElementsByTagName('h2');
let wordCounts = [];

for (let index = 0; index < headings.length; index += 1) {
  let currentText = headings[index].textContent.trim();
  let words = currentText.split(' ');
  wordCounts.push(words.length);
}

2.
document.getElementbyId('toc');
document.querySelector('#toc');
document.querySelectorAll('.toc')[0];

3.

let toc = document.querySelector('#toc');
let list = toc.querySelector('ul');
let links = list.querySelectorAll('a');

for (let index = 0; index < links.length; index += 1) {
  if (index % 2 === 1) {
    links[index].style.color = 'green';
  }
}

4.

let captionText = [];

let thumbnails = document.querySelectorAll('.thumbcaption');

for (let index = 0; index < thumbnails.length; index += 1) {
  let currentCaption = thumbnails[index];
  captionText.push(currentCaption.textContent.trim());
}

5.

let table = document.querySelector('table');
let tableBody = table.querySelector('tbody');
let data = tableBody.querySelectorAll('td');
let ranks = Array.prototype.slice.call(data).filter(row => {
  return row.textContent.match(/:/g);
});
let groupCells = [];

ranks.forEach(rank => {
  let index = Array.prototype.slice.call(data).indexOf(rank);
  groupCells.push(data[index + 1]);
});

let groups = groupCells.map(group => group.textContent);

ranks = ranks.map(rank => rank.textContent.slice(0, -1));

let scientificClass = {};

ranks.forEach((rank, index) => {
  scientificClass[rank] = groups[index];
});

*/
