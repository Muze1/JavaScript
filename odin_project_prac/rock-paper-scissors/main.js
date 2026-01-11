function getComputerChoice() {
    // Generate a random number which can be either 0, 1 or 2
    let generateNumber = Math.floor(Math.random() * 3);

    if (generateNumber === 2) {
        return "scissors"
    } else if (generateNumber === 1) {
        return "paper"
    } else {
        return "rock"
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    let human = prompt("Enter rock, paper or scissors: ")

    return human;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "Draw! No points";
    } else if (((humanChoice === "rock") && (computerChoice === "paper")) || 
    ((humanChoice === "paper") && (computerChoice === "scissors")) ||
    ((humanChoice === "scissors") && (computerChoice === "rock"))) {

        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    } else {

        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
}

console.log(playRound(getHumanChoice(),getComputerChoice()));