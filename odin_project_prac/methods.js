// Exercise for map, filter and reduce methods

// Create a function that will:
// 1. Take in an array
// 2. For every even number, it will triple that even number
// 3. Then it will sum all those even numbers

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Regular function first
function sumOfTripleEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            const tripleEvenNum = array[i] * 3;
            sum+= tripleEvenNum;
        }
    }

    return sum;
}

console.log(sumOfTripleEvens(array));