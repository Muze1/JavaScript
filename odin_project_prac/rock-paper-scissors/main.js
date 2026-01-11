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

function getHumanChoice() {
    let human = prompt("Enter rock, paper or scissors: ")

    return human;
}


function playGame(round) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        console.log(humanChoice)
        console.log(computerChoice)
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

    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());

    console.log(`Final score is ${computerScore} for the computer and ${humanScore} for you`);
}

playGame(playRound());