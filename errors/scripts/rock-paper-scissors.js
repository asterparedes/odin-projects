let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();
    if(randomNumber < 1) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Rock Paper Scissors?');
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    
}