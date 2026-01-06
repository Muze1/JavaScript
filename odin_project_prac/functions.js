let add7 = c => c + 7;

console.log(add7(10));


// let multiply = function multiply (num1, num2) {
//     return num1 * num2;
// }

// console.log(multiply(3, 2));


let multiply = (a, b) => a * b;

console.log(multiply(3, 2));

// let capFirst = function capitalize(string) {
//     let final = string.toLowerCase();
//     final = final.replace(final[0], final[0].toUpperCase());

//     return final;
// }

let capFirst = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capFirst("abcd"));
console.log(capFirst("ABCD"));
console.log(capFirst("aBcD"));


let lastLetter = function(string) {
    return string.charAt(string.length-1);
}
console.log(lastLetter("abcd"));