$(function () {
  let form = $('form');

  form.submit((e1) => {
    e1.preventDefault();
    let character = $('#key').val();

    $(document).off('keypress').on('keypress', (e2) => {
      if (e2.key !== character) {
        return;
      }

      $('a').trigger('click');
    });
  });

  $('a').on('click', event => {
    event.preventDefault();
    $('#accordion').slideToggle();
  });

});
