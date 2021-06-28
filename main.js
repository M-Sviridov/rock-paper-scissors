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


function game() {
    let computerPoints = 0;
    let playerPoints = 0;

    while (computerPoints < 5 && playerPoints < 5) {
        const computerSelection = computerPlay();
        const playerSelection = prompt('Make your move: ').toLowerCase();

        if (playRound(playerSelection, computerSelection) === 'player') {
            playerPoints++;
            alert('The Player wins the round.')
        } else if (playRound(playerSelection, computerSelection) === 'computer') {
            computerPoints++;
            alert('The Computer wins the round.')
        } else if (playRound(playerSelection, computerSelection) === 'tie') {
            alert('It is a tie!')
        }

        if (computerPoints === 5) {
            alert('The Computer has won the game.')
        } else if (playerPoints === 5) {
            alert('The Player has won the game.')
        }
    }
}