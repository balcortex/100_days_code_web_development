const AVAILABLE_CHOICES = ['rock', 'paper', 'scissors']

const buttons = document.querySelector('#buttons').children;
const playerChoiceField = document.querySelector('#player-choice');
const computerChoiceField = document.querySelector('#computer-choice');

let playerChoice;
let computerChoice;

for (btn of buttons) {
    btn.addEventListener('click', round);
}

function getComputerChoice() {
    return AVAILABLE_CHOICES[Math.floor(Math.random() * 3)]
}

function round() {
    playerChoice = this.id;
    playerChoiceField.textContent = `You chose: ${this.id}`;
    computerChoiceField.textContent = `Computer chose: ${this.id}`;
}
