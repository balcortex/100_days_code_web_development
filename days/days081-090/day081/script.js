const buttons = document.querySelector('#buttons').children;
// all the children (buttons) of the div with id='buttons'
const playerChoiceField = document.querySelector('#player-choice');

for (btn of buttons) {
    btn.addEventListener('click', playerSelection);
}

function playerSelection() {
    playerChoiceField.textContent = `You chose: ${this.id}`;
}
