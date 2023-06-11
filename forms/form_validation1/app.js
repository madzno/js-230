$(function () {
  let form = document.querySelector('form');
  let firstName = document.getElementById('first_name');
  let firstErrorMessage = firstName.nextElementSibling;

  firstName.addEventListener('blur', event => {
    if (firstName.validity.valid) {
      firstName.className = ''
      firstErrorMessage.textContent = ''
    } else {
      firstName.classList.add('invalid_field');
      firstErrorMessage.textContent = 'First Name Required';
      event.preventDefault();
    }
  });

  let lastName = document.getElementById('last_name');
  let lastErrorMessage = lastName.nextElementSibling;

  lastName.addEventListener('blur', event => {
    if (lastName.validity.valid) {
      lastName.className = '';
      lastErrorMessage.textContent = '';
    } else {
      lastName.classList.add('invalid_field');
      lastErrorMessage.textContent = 'Last Name Required';
      event.preventDefault;
    }
  });
})
