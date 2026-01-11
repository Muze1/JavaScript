function getComputerChoice() {
    // Generate a random number which can be either 0, 1 or 2
    let generateNumber = Math.floor(Math.random() * 3);

    if (generateNumber === 2) {
        return "Scissors"
    } else if (generateNumber === 1) {
        return "Paper"
    } else {
        return "Rock"
    }
}

console.log(getComputerChoice());