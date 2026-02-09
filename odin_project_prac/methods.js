// Exercise for map, filter and reduce methods

// Create a function that will:
// 1. Take in an array
// 2. For every even number, it will triple that even number
// 3. Then it will sum all those even numbers

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Regular function first
// function sumOfTripleEvens(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             const tripleEvenNum = array[i] * 3;
//             sum+= tripleEvenNum;
//         }
//     }

//     return sum;
// }
// console.log(sumOfTripleEvens(array));

// // Rewritten using map, filter and reduce methods
// function isEven(array) {
//     return array % 2 === 0;
// };

// let evenNum = array.filter(isEven);
// console.log(evenNum);

// let tripledEvens = evenNum.map((num) => num * 3);
// console.log(tripledEvens);

// let sumOfTripledEvens = tripledEvens.reduce((total, currentItem) => {
//     return total + currentItem;
// }, 0);
// console.log(sumOfTripledEvens);

// // Simplified
// function sumOfTripleEvens(array) {
//     return array
//     .filter((num) => num % 2 === 0)
//     .map((num) => num * 3)
//     .reduce((actual, current) => actual + current);
// };
// console.log(sumOfTripleEvens(array));


// // Write a function that changes dash-separated words into camel-cased words
// function camelize(words) {
//     return console.log(words
//     .split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join(''));
// }
// camelize("background-colour");

// // Write a function filterRange(arr, a, b) that gets an array, looks for elements with values
// // higher or equal to a and lower or equal to b, and return end result as an array.
// // The function should not modify the array, but return a new one.

// function filterRange(arr, a, b) {
//     return arr
//     .filter((arr, a, b) => {
//         if (arr >= a) {
//             return a;
//         } else if (arr <= b) {
//             return b;
//         }
//     })
// }

// let arr = [5, 8, 3, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);


// // Create a function that copies and sorts an array
// function copySorted(arr) {
//     return arr.concat().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"]

// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);


// Create a function that shuffles an array randomly at each call
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(array);
console.log(array);