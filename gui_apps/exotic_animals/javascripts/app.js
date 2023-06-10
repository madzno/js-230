"use strict";
/*
- add a mousenter event to only figures within the #exotic_animals div
- declare a variable currentFigure to the e.target element
- find figcaption child of the e.target element (think it should only be figure's)
- fade in that figcaption
*/

$(function () {
  let $exoticAnimals = $('#exotic_animals');

  $exoticAnimals.on('mouseenter', 'figure', event => {
    let $currentFig = $(event.target);
    let $currentCaption = $currentFig.find('figcaption');
    $currentCaption.fadeIn();
  });

  $exoticAnimals.on('mouseleave', 'figure', event => {
    let $currentFig = $(event.target);
    let $currentCaption = $currentFig.find('figcaption');
    $currentCaption.fadeOut());
});
