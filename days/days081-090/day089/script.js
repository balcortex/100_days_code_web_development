const itemsList = document.querySelector('#list');
const newItemField = document.querySelector('#item');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', addToList);

function addToList() {
    let text = newItemField.value;

    if (text === '') {
        newItemField.focus()
        return;
    }

    newItemField.value = '';

    const item = document.createElement('li');
    const name = document.createElement('span');
    const delBtn = document.createElement('button');

    name.textContent = text;
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', e => e.target.parentNode.remove());

    item.appendChild(name);
    item.appendChild(delBtn);
    itemsList.appendChild(item);

    newItemField.focus()
}