const itemsList = document.querySelector('#list');
const newItemField = document.querySelector('#item');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', addToList);
newItemField.addEventListener('keypress', e => {
    if (e.key == 'Enter') addBtn.click();
});

newItemField.focus();

function addToList() {
    newItemField.focus();
    if (newItemField.value == '') return; // do not add empty items

    const item = document.createElement('li');
    item.textContent = newItemField.value;
    itemsList.appendChild(item);

    newItemField.value = '';
}