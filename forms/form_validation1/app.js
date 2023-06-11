class formValidator {
  constructor() {
    this.form = document.querySelector('form');
    this.inputArr = Array.from(document.querySelectorAll('input'));
    this.bindEvents();
  }

  bindEvents() {
    this.inputArr.forEach(input => {
      input.addEventListener('blur', this.handleBlurEvent.bind(this));
      input.addEventListener('focus', this.handleFocusEvent.bind(this));
    });
    this.form.addEventListener('submit', this.handleFormEvent.bind(this));
  }

  removeError(element, errorSpan) {
    element.classList.toggle('invalid_field');
    errorSpan.textContent = '';
  }

  inputIsValid(element) {
    return element.validity.valid;
  }

  missingInput(element) {
    return element.validity.valueMissing;
  }

  makeInvalid(element) {
    return element.classList.toggle('invalid_field');
  }

  missingInputError(element, error) {
    let label = document.querySelector('label[for="' + element.id + '"]');
    this.makeInvalid(element);
    error.textContent = `${label.textContent} is a required field.`;
  }

  patternErrors(element, error, id) {
    this.makeInvalid(element);

    if (id === 'password') {
      error.textContent = 'Password must be at least 10 characters long.';
    } else if (id === 'email') {
      error.textContent = 'Please enter a valild email.';
    } else {
      error.textContent = 'Please enter a valid phone number.'
    }
  }

  handleBlurEvent(event) {
    let currentElement = event.currentTarget;
    let errorMessage = currentElement.nextElementSibling;

    if (this.inputIsValid(currentElement)) {
      this.removeError(currentElement, errorMessage);
    } else if (this.missingInput(currentElement)) {
      this.missingInputError(currentElement, errorMessage);
    } else {
      this.patternErrors(currentElement, errorMessage, currentElement.id);
    }
  }

  handleFocusEvent(event) {
    let currentElement = event.currentTarget;
    let errorMessage = currentElement.nextElementSibling;
    this.removeError(currentElement, errorMessage);
  }

  handleFormEvent(event) {
    let formErrorElement = document.querySelector('.form_errors');

    if (event.currentTarget.checkValidity()) {
      formErrorElement.textContent = '';
    } else {
      formErrorElement.textContent = 'Fix errors before submitting this form';
      event.preventDefault();
    }
  }

}

$(function () {
  new formValidator();
})
