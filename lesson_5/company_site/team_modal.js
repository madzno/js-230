$(function () {
  let $layerDiv = $('#modal-layer');
  let $modalDiv = $('#modal');

  function showModal(link) {
    $layerDiv.toggleClass('hide');
    $layerDiv.toggleClass('show');

    $modalDiv.toggleClass('hide');
    $modalDiv.toggleClass('show');

    let $h3 = $('#modal > h3');
    let name = link.attr('data-name');
    $h3.text(`${name}`);

    let $p = $('#modal > p');
    let info = link.attr('data-text');
    $p.text(`${info}`);

    let $teamImg = $('#modal > img');
    let imgLink = link.attr('data-image-source');
    $teamImg.attr({
      src: `${imgLink}`,
      alt: `${name}`
    });
  }

  let $list = $('#team-members');

  $list.on('click', 'a', function (event) {
    event.preventDefault();
    let $link;

    if (event.target.tagName === 'A') {
      $link = $(event.target);
    } else {
      $link = $(event.target.parentNode);
    }

    showModal($link);
  });

});
