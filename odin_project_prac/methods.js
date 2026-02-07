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

// Rewritten using map, filter and reduce methods
function isEven(array) {
    return array % 2 === 0;
};

let evenNum = array.filter(isEven);
console.log(evenNum);

let tripledEvens = evenNum.map((num) => num * 3);
console.log(tripledEvens);

let sumOfTripledEvens = tripledEvens.reduce((total, currentItem) => {
    return total + currentItem;
}, 0);
console.log(sumOfTripledEvens);

// Simplified
function sumOfTripleEvens(array) {
    return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((actual, current) => actual + current);
};
console.log(sumOfTripleEvens(array));