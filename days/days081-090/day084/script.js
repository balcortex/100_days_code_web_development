const AVAILABLE_CHOICES = ['rock', 'paper', 'scissors'];
const buttons = document.querySelector('#buttons').children;
// all the children (buttons) of the div with id='buttons'
const playerChoiceField = document.querySelector('#player-choice');
const computerChoiceField = document.querySelector('#computer-choice');
const roundResultField = document.querySelector('#round-result');
const gameScoreField = document.querySelector('#game-score');
let playerScore = 0;
let computerScore = 0;
for (btn of buttons) {
    btn.addEventListener('click', playRound);
}
function playRound() {
    let playerChoice = this.id;
    let computerChoice = getComputerChoice();
    let playerWins = true;
    playerChoiceField.textContent = `You chose: ${playerChoice}`;
    computerChoiceField.textContent = `Computer chose: ${computerChoice}`;
    if (playerChoice == computerChoice) {
        roundResultField.textContent = 'Round result: draw';
        return;
    }
    if (playerChoice == 'rock' & computerChoice == 'paper' |
        playerChoice == 'paper' & computerChoice == 'scissors' |
        playerChoice == 'scissors' & computerChoice == 'rock') {
        playerWins = false;
    }
    if (playerWins) {
        roundResultField.textContent = 'Round result: you win';
        playerScore++;
    }
    else {
        roundResultField.textContent = 'Round result: you lose';
        computerScore++;
    }
    gameScoreField.textContent = `Game score: Player(${playerScore}) - Computer(${computerScore})`;

    if (playerScore >= 5 | computerScore >= 5) {
        let winner = playerScore > computerScore ? ' - YOU WIN' : " - YOU LOSE";
        gameScoreField.textContent += winner;
        for (btn of buttons) {
            btn.disabled = true; // disable all the buttons
        }
    }
}
function getComputerChoice() {
    return AVAILABLE_CHOICES[Math.floor(Math.random() * 3)];
}