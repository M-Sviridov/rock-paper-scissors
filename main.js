let computerPoints = 0;
let playerPoints = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
}

rock.addEventListener('click', () => {
    game(playerSelection = rock.getAttribute('value'))
});

paper.addEventListener('click', () => {
    game(playerSelection = paper.getAttribute('value'))
});

scissors.addEventListener('click', () => {
    game(playerSelection = scissors.getAttribute('value'))
});


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

    if (playRound(playerSelection, computerSelection) === 'player') {
        playerPoints++;
        console.log('The Player wins the round.')
    } else if (playRound(playerSelection, computerSelection) === 'computer') {
        computerPoints++;
        console.log('The Computer wins the round.')
    } else if (playRound(playerSelection, computerSelection) === 'tie') {
        console.log('It is a tie!')
    }

    if (computerPoints === 5) {
        console.log('The Computer has won the game.')
    } else if (playerPoints === 5) {
        console.log('The Player has won the game.')
    }

    console.log(playerPoints, computerPoints)

}