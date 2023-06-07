$(function () {
  let $ul = $('ul');
  let $figure = $('figure');

  $ul.on('click', 'a', function (event) {
    event.preventDefault();

    $ul.find('.active').removeClass('active');
    let $li = $(event.currentTarget).closest('li');
    $li.addClass('active');

    let $mainImg = $figure.children('img');
    let $clickedImg = $(event.currentTarget).children('img');
    $mainImg.attr('src', `${$clickedImg.attr('src')}`);

  });
});
