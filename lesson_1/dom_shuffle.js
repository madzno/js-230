/*
1. Need to move header element to before the main element
2. Need to move h1 in the main element to the header ellement before nav
3. Need to move the two figures to inside the article element
4. Move the second figure to above the first figure
5. Need to switch the figcaptions
*/

let pageBody = document.querySelector('body');
let pageMain = document.querySelector('main');
let pageHeader = document.querySelectorAll('header')[1];

pageBody.insertBefore(pageHeader, pageMain);

let firstH1 = document.querySelector('h1');
pageHeader.insertAdjacentElement('afterbegin', firstH1);

let figures = document.querySelectorAll('figure');
[figure1, figure2] = figures; // figure1 = baby, figure2 = chin

let mainArticle = document.querySelector('article');
mainArticle.insertAdjacentElement('beforeend', figure2);
mainArticle.insertAdjacentElement('beforeend', figure1);

let figcaptions = document.querySelectorAll('figcaption');
[caption1, caption2] = figcaptions; // caption1 = The baby mop - great for wet and dry mopping!
// caption2 = The chin stick - stay upright while sleeping!

figure1.insertAdjacentElement('beforeend', caption1);
figure2.insertAdjacentElement('beforeend', caption2);

