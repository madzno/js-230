"use strict";

let Modal = (function () {
  return class Modal {
    constructor() {
      this.$layerDiv = $('#modal-layer');
      this.$modalDiv = $('#modal');
      this.$h3 = $('#modal > h3');
      this.$p = $('#modal > p');
      this.$teamImg = $('#modal > img');
      this.$list = $('#team-members');
      this.$closeLink = $('a.close');

      this.bindEvents();
    }

    bindEvents() {
      this.$list.on('click', 'a', function (event) {
        event.preventDefault();
        let $link;

        if (event.target.tagName === 'A') {
          $link = $(event.target);
        } else {
          $link = $(event.target.parentNode);
        }

        this.showModal($link);
      }.bind(this));

      this.$closeLink.on('click', function (event) {
        event.preventDefault();
        this.hideModal();
      }.bind(this))

    }

    toggle() {
      this.$layerDiv.toggleClass('hide');
      this.$layerDiv.toggleClass('show');

      this.$modalDiv.toggleClass('hide');
      this.$modalDiv.toggleClass('show');
    }

    showModal(link) {
      this.toggle();

      let name = link.attr('data-name');
      this.$h3.text(`${name}`);

      let info = link.attr('data-text');
      this.$p.text(`${info}`);

      let imgLink = link.attr('data-image-source');

      this.$teamImg.attr({
        src: `${imgLink}`,
        alt: `${name}`
      });
    }

    hideModal() {
      this.toggle();
      this.$h3.text('');
      this.$p.text('');
      this.$teamImg.attr({
        src: '',
        alt: ''
      });
    }
  }
})();

$(function () {

  let modalManager = new Modal();

});
