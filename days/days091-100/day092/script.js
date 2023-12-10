const itemsList = document.querySelector('#list');
const newItemField = document.querySelector('#item');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', addToList);
newItemField.addEventListener('keypress', e => {
    if (e.key == 'Enter') addBtn.click();
});

function addToList() {
    newItemField.focus();
    if (newItemField.value == '') return; // do not add empty items

    const item = document.createElement('li');

    const text = document.createElement('span');
    text.textContent = newItemField.value;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', e => e.target.parentNode.remove())

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', toggleMark);

    item.appendChild(checkBox);
    item.appendChild(text);
    item.appendChild(delBtn);
    itemsList.appendChild(item);

    newItemField.value = '';
}

function toggleMark(e) {
    let item = this.parentNode; // `this` refers to the checkbox
    let text = item.querySelector('span');
    let list = item.parentNode;

    text.classList.toggle('items-done');
    let isDone = text.classList.contains('items-done');

    if (isDone) {
        item.remove();
        list.appendChild(item);
    }
    else {
        item.remove();
        list.insertBefore(item, list.firstChild);
    }
}