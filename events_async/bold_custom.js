function makeBold(element, func) {
  element.classList.add('highlight');

  if (func && typeof func === 'function') {
    func(element);
  }
}
