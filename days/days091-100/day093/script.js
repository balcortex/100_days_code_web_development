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

    const upBtn = document.createElement('button');
    upBtn.innerHTML = '&uarr;'
    upBtn.addEventListener('click', moveItemUp)

    const downBtn = document.createElement('button');
    downBtn.innerHTML = '&darr;'
    downBtn.addEventListener('click', moveItemDown)

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', e => e.target.parentNode.remove())

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', toggleMark);

    item.appendChild(checkBox);
    item.appendChild(text);
    item.appendChild(downBtn);
    item.appendChild(upBtn);
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

    if (isDone) list.appendChild(item); // Move to end
    else list.insertBefore(item, list.firstChild); // Move to top
}

function moveItemDown(e) {
    let item = this.parentNode; // `this` refers to button down
    let list = item.parentNode;

    if (item === list.lastElementChild) return; // If last item, do nothing

    let itemRef = item.nextElementSibling.nextElementSibling;
    list.insertBefore(item, itemRef); // Move one place down
}

function moveItemUp(e) {
    let item = this.parentNode; // `this` refers to the button up
    let list = item.parentNode;

    if (item === list.firstElementChild) return; // If first item, do nothing

    let itemRef = item.previousElementSibling;
    list.insertBefore(item, itemRef); // Move one place up
}