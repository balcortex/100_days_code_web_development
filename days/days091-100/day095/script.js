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
    text.addEventListener('click', renameItem);

    const checkBoxImg = document.createElement('img');
    checkBoxImg.setAttribute('src', 'img/square.svg');
    checkBoxImg.classList.add('checkbox');
    checkBoxImg.addEventListener('click', toggleMark);

    const delImg = document.createElement('img');
    delImg.setAttribute('src', 'img/trash-can.svg');
    delImg.classList.add('img-button');
    delImg.addEventListener('click', e => e.target.parentNode.remove());

    const upImg = document.createElement('img');
    upImg.classList.add('img-button');
    upImg.setAttribute('src', 'img/up.svg');
    upImg.addEventListener('click', moveItemUp)

    const downImg = document.createElement('img');
    downImg.classList.add('img-button');
    downImg.setAttribute('src', 'img/down.svg');
    downImg.addEventListener('click', moveItemDown);


    item.appendChild(checkBoxImg);
    item.appendChild(text);
    item.appendChild(downImg);
    item.appendChild(upImg);
    item.appendChild(delImg);
    itemsList.appendChild(item);

    newItemField.value = '';
}

function toggleMark(e) {
    let item = this.parentNode; // `this` refers to the img checkbox
    let text = item.querySelector('span');
    let list = item.parentNode;

    text.classList.toggle('items-done');
    let isDone = text.classList.contains('items-done');

    if (isDone) {
        list.appendChild(item); // Move to end
        this.setAttribute('src', 'img/square-check.svg');
    }
    else {
        list.insertBefore(item, list.firstChild); // Move to top
        this.setAttribute('src', 'img/square.svg');
    }
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

function renameItem(e) {
    let item = this.parentNode; // `this` refers to the checkbox
    let text = item.querySelector('span');

    const newNameInput = document.createElement('input')
    newNameInput.type = 'text';
    newNameInput.value = text.textContent; // previous value of item text
    newNameInput.classList.add('item-rename');
    item.insertBefore(newNameInput, text.nextElementSibling); // input box
    text.remove() // remove the text to put the input box in the same place
    newNameInput.select(); // select the text of the input box for easy editing

    newNameInput.addEventListener('keypress', e => {
        if (e.key == 'Enter') execRename();
    });

    newNameInput.addEventListener('blur', e => execRename());

    function execRename() {
        text.textContent = newNameInput.value; // set the new text
        item.insertBefore(text, newNameInput); // insert the text before the box
        newNameInput.remove(); // remove the input text box
    }
}

