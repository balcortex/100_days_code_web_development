const AVAILABLE_CHOICES = ['rock', 'paper', 'scissors'];

const buttons = document.querySelector('#buttons').children;
// all the children (buttons) of the div with id='buttons'
const playerChoiceField = document.querySelector('#player-choice');
const computerChoiceField = document.querySelector('#computer-choice');

for (btn of buttons) {
    btn.addEventListener('click', playRound);
}

function playRound() {
    let playerChoice = this.id;
    let computerChoice = getComputerChoice();

    playerChoiceField.textContent = `You chose: ${playerChoice}`;
    computerChoiceField.textContent = `Computer chose: ${computerChoice}`;
}

function getComputerChoice() {
    return AVAILABLE_CHOICES[Math.floor(Math.random() * 3)];
}
