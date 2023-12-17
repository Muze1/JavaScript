// Program to check if a user input string is a palindrome or not

const prompt = require('prompt-sync')();

let word = prompt("Please enter a word: ");
let lower = word.toLowerCase();
let list = lower.split('');
let reversedList = list.toReversed();

for (let i = 0; i < (list.length / 2); i++) {
    let firstElement = list[i];
    let lastElement = list[list.length - 1 - i];

    if (firstElement === lastElement) {
        continue;
    } else {
        console.log(`The word "${word}" is not a palindrome.`) // Self-reminder: Used backticks here instead of double or single quotes. This allows the use of template literals.
        break;
    }
}
console.log(`The word ${word} is a palindrome.`)
