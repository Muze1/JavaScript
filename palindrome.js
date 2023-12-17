// Program to check if a user input string is a palindrome or not

const prompt = require('prompt-sync')();

function isPalindrome() {
    let word = prompt("Please enter a word: ");
    let lower = word.toLowerCase();
    let list = lower.split('');
    let loopComplete = true;

    for (let i = 0; i < (list.length / 2); i++) {
        let firstElement = list[i];
        let lastElement = list[list.length - 1 - i];

        if (firstElement !== lastElement) {
            console.log(`No, the word "${word}" is not a palindrome.`) // Self-reminder: Used backticks here instead of double or single quotes. This allows the use of template literals.
            loopComplete = false;
            break;
        }
    }

    if (loopComplete) {
        console.log(`Yes, the word ${word} is a palindrome.`)
    }
}

while (true) {
    isPalindrome();

    let repeat = prompt("Would you like to enter another word? (yes/no): ").trim();
    if (repeat.toLowerCase() !== 'yes') {
        console.log("Bye... :(");
        break;
    }
}