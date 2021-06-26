function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a tie!'
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        return 'player'
    } else {
        return 'computer'
    }
}


function game() {
    let computerPoints = 0;
    let playerPoints = 0;

    while (computerPoints < 5 && playerPoints < 5) {
        const computerSelection = computerPlay();
        const playerSelection = prompt('Make your move: ').toLowerCase();
        if (playRound(playerSelection, computerSelection) === 'player') {
            playerPoints++;
        } else if (playRound(playerSelection, computerSelection) === 'computer') {
            computerPoints++;
        }
        if (computerPoints === 5) {
            return 'The Computer wins.'
        } else if (playerPoints === 5) {
            return 'The Player wins.'
        }
    }
}