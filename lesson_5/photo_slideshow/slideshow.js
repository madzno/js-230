"use strict";

let imageManager = (function () {
  return class imageManager {
    constructor() {
      this.ul = document.querySelector('ul');
      this.listEvent();
    }

    listEvent() {
      this.ul.addEventListener('click', function (event) {
        event.preventDefault();


        if (event.target.tagName !== 'IMG') {
          return;
        }

        this.removeActive();

        let linkClicked = event.target.parentNode.parentNode;
        this.addActiveToParent(linkClicked);

        let imgClickedSource = event.target.getAttribute('src');
        this.changeMainImgSource(imgClickedSource);

      }.bind(this));
    }

    removeActive() {
      let allLiArr = Array.from(document.querySelectorAll('li'));

      allLiArr.forEach(listItem => {
        if (listItem.classList.contains('active')) {
          listItem.classList.remove('active');
        }
      });
    }

    addActiveToParent(link) {
      link.classList.add('active');
    }

    changeMainImgSource(newSource) {
      let mainImage = document.querySelector('figure').firstElementChild;
      mainImage.setAttribute('src', `${newSource}`);

    }
  }
})();


$(function () {
  let changeImage = new imageManager();
});
