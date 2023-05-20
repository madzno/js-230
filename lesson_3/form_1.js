let store = document.getElementById('store');

store.addEventListener('submit', event => {
  let form = event.target;

  event.preventDefault();

  let data = new FormData(form);
  let request = new XMLHttpRequest();

  request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com' + form.getAttribute('action'))
  request.setRequestHeader('Authorization', 'token AUTH_TOKEN')

  request.addEventListener('load', event => store.innerHTML = request.response);

  request.send(data);
});
