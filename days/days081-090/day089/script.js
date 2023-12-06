const itemsList = document.querySelector('#list');
const newItemField = document.querySelector('#item');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', addToList);

function addToList() {
    const item = document.createElement('li');
    item.textContent = newItemField.value
    itemsList.appendChild(item);
}