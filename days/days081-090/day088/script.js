const AVAILABLE_CHOICES = ['rock', 'paper', 'scissors'];

const buttons = document.querySelector('#buttons').children;
// all the children (buttons) of the div with id='buttons'
const gameScoreField = document.querySelector('#game-score');
const imgPlayerField = document.querySelector('#img-player');
const imgComputerField = document.querySelector('#img-computer');

let playerScore = 0;
let computerScore = 0;

for (btn of buttons) {
    btn.addEventListener('click', playRound);
}

function playRound() {
    let playerChoice = this.id;
    let computerChoice = getComputerChoice();
    let playerWins = true;

    imgPlayerField.setAttribute('src', `img/${playerChoice}.png`);
    imgComputerField.setAttribute('src', `img/${computerChoice}.png`);
    imgPlayerField.style.opacity = 1.0;
    imgComputerField.style.opacity = 1.0;

    if (playerChoice == computerChoice) {
        imgPlayerField.style.opacity = 0.4;
        imgComputerField.style.opacity = 0.4;
        return;
    }
    if (playerChoice == 'rock' & computerChoice == 'paper' |
        playerChoice == 'paper' & computerChoice == 'scissors' |
        playerChoice == 'scissors' & computerChoice == 'rock') {
        playerWins = false;
    }
    if (playerWins) {
        imgComputerField.style.opacity = 0.4;
        playerScore++;
    }
    else {
        imgPlayerField.style.opacity = 0.4;
        computerScore++;
    }
    gameScoreField.innerHTML = `Score<br>${playerScore} &dash; ${computerScore}`;

    if (playerScore >= 5 || computerScore >= 5) {
        for (btn of buttons) {
            btn.disabled = true; // disable all the buttons
        }

        let gameEndMessage = document.createElement('p');
        if (playerScore > computerScore) gameEndMessage.textContent = 'You Win the Game!';
        else gameEndMessage.textContent = 'You Lose, Try Again';
        gameEndMessage.style.fontSize = '30px';
        gameEndMessage.style.fontWeight = 'bold';
        document.querySelector('body').appendChild(gameEndMessage);

    }

}

function getComputerChoice() {
    return AVAILABLE_CHOICES[Math.floor(Math.random() * 3)];
}
