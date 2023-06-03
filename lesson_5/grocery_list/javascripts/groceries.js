document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');

  form.addEventListener('submit', event => {
    event.preventDefault();
    let itemName = document.getElementById('name').value;
    let itemAmount = document.getElementById('quantity').value;

    if (itemAmount === '') {
      itemAmount = '1';
    }

    let ul = document.querySelector('ul');
    let listItem = document.createElement('li');
    listItem.innerText = `${itemAmount} ${itemName}`;
    ul.appendChild(listItem);

    form.reset();
  });
});
