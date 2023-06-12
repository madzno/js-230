class formValidator {
  constructor() {
    this.$form = $('form');
    this.$phone = $('#phone_number');
    this.$infoIputs = $('#first_name, #last_name, #email, #password, #phone_number');
    this.$nameInputs = $('#first_name, #last_name');
    this.$creditCardFields = $('#cc1, #cc2, #cc3, #cc4');
    this.$firstThreeCC = $('#cc1, #cc2, #cc3');

    this.bindEvents();
  }

  bindEvents() {
    this.$infoIputs.on('blur', this.handleBlurEvent.bind(this));
    this.$infoIputs.on('focus', this.handleFocusEvent.bind(this));
    this.$form.on('submit', this.handleFormEvent.bind(this));
    this.$nameInputs.on('keypress', this.handleNonAlpha.bind(this));
    this.$phone.on('keypress', this.handlePhoneDigits.bind(this));
    this.$creditCardFields.on('keypress', this.onlyNumeric.bind(this));
    this.$firstThreeCC.on('keyup', this.handleTabForward.bind(this));
  }

  removeError(element, errorSpan) {
    element.className = '';
    errorSpan.textContent = '';
  }

  inputIsValid(element) {
    return element.validity.valid;
  }

  missingInput(element) {
    return element.validity.valueMissing;
  }

  makeInvalid(element) {
    return element.classList.add('invalid_field');
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

  formIsValid(form) {
    return form.checkValidity();
  }

  displayQueryString(form) {
    let data = new FormData(form);
    let params = new URLSearchParams([...data]);
    let allCreditCardNums = params.getAll('credit_card').join('');
    params.set('credit_card', allCreditCardNums);
    let paragraph = document.createElement('p');
    let serializedDiv = document.querySelector('div.serialized');
    serializedDiv.appendChild(paragraph);
    paragraph.textContent = params;
  }

  handleFormEvent(event) {
    event.preventDefault();
    let formErrorElement = document.querySelector('.form_errors');
    let form = event.currentTarget;

    if (this.formIsValid(form)) {
      formErrorElement.textContent = '';
      this.displayQueryString(form);
    } else {
      formErrorElement.textContent = 'Fix errors before submitting this form';
    }
  }

  handleNonAlpha(event) {
    let key = event.key;

    if (key.match(/[^a-zA-Z]/g)) {
      event.preventDefault();
    }
  }

  handlePhoneDigits(event) {
    let key = event.key;

    if (key.match(/[^\-0-9]/g)) {
      event.preventDefault();
    }
  }

  onlyNumeric(event) {
    let key = event.key;

    if (key.match(/[^0-9]/g)) {
      event.preventDefault();
    }
  }

  handleTabForward(event) {
    let currentValue = event.currentTarget.value;
    let nextCC = $(event.currentTarget).nextAll('input')[0];
    let maxLength = Number(event.currentTarget.getAttribute('maxLength'));

    if (currentValue.length === maxLength) {
      $(nextCC).trigger('focus');
    }
  }
}


$(function () {
  new formValidator();
});
