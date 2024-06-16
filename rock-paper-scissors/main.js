let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt('Choose: Rock, Paper, or Scissors');
    return humanChoice
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const combinations = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (combinations[humanChoice] === computerChoice) {
        // humanScore++;
        console.log(`You lose! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
    } else {
        // computerScore++;
        console.log(`You win! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
    }

    console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);