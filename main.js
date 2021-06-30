let computerPoints = 0;
let playerPoints = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playContainer = document.querySelector('.play-container');
const playContent = document.createElement('h4');
const playResult = document.createElement('h4');
const resetButtonContainer = document.querySelector('.reset-button-container');
const resetButton = document.createElement('button');

rock.addEventListener('click', () => {
    if (playerPoints < 5 && computerPoints < 5) {
        game(playerSelection = rock.getAttribute('value'))
    } else {
        return;
    }
});

paper.addEventListener('click', () => {
    if (playerPoints < 5 && computerPoints < 5) {
        game(playerSelection = paper.getAttribute('value'))
    } else {
        return;
    }
});

scissors.addEventListener('click', () => {
    if (playerPoints < 5 && computerPoints < 5) {
        game(playerSelection = scissors.getAttribute('value'))
    } else {
        return;
    }
});

resetButton.addEventListener('click', () => {
    window.location.reload()
});

function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie'
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        return 'player'
    } else {
        return 'computer'
    }
}

function game(playerSelection) {
    const computerSelection = computerPlay();

    playContent.textContent = 'Current play: '
        + playerSelection + ' vs ' + computerSelection;
    playContent.id = 'play-content';
    playContainer.appendChild(playContent);

    if (playRound(playerSelection, computerSelection) === 'player') {
        playerPoints++;
        playerScore.textContent = playerPoints;
        playResult.textContent = 'The player wins the round.';
        playResult.id = 'play-result';
        playContainer.appendChild(playResult);
    } else if (playRound(playerSelection, computerSelection) === 'computer') {
        computerPoints++;
        computerScore.textContent = computerPoints;
        playResult.textContent = 'The computer wins the round.'
        playResult.id = 'play-result';
        playContainer.appendChild(playResult);
    } else if (playRound(playerSelection, computerSelection) === 'tie') {
        playResult.textContent = 'It is a tie!';
        playResult.id = 'play-result';
        playContainer.appendChild(playResult);
    }

    if (computerPoints === 5) {
        playResult.textContent = `The computer has won the game.
            Please use the reset button.`;
        playResult.id = 'game-result';
        playContainer.appendChild(playResult);
        resetButton.textContent = 'RESET';
        resetButton.id = 'reset-button';
        resetButtonContainer.appendChild(resetButton);
        return;
    } else if (playerPoints === 5) {
        playResult.textContent = `The player has won the game.
            Please use the reset button.`;
        playResult.id = 'game-result';
        playContainer.appendChild(playResult);
        resetButton.textContent = 'RESET';
        resetButton.id = 'reset-button';
        resetButtonContainer.appendChild(resetButton);
        return;
    }
}