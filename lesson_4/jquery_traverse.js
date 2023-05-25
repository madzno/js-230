$(function () {
  let $headings = $('h1'); // 1

  let $firstheading = $('#site_title'); // 2

  let $listItems = $('article li'); // 3

  let $thirdItem = $('article li').eq(2); // 4

  let $tableOdd = $('table tr').odd(); // 5

  let $acAnte = $listItems.filter(function (index) {
    return this.textContent === 'ac ante'
  });

  let $acAnteParent = $acAnte.parents('li'); // 6

  let $acAnteNextSibling = $acAnte.next(); // 7

  let $tableCells = $('table td').last(); // 8

  let $notProtected = $('td').not('.protected'); //9

  let $links = $("a[href^='#']"); // 10

  let $blockEls = $("[class*='block']"); // 11

});

