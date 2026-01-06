let add7 = c => c + 7;

console.log(add7(10));

// let multiply = function multiply (num1, num2) {
//     return num1 * num2;
// }

// console.log(multiply(3, 2));

let multiply = (a, b) => a * b;

console.log(multiply(3, 2));

let capFirst = function capitalize(string) {
    let final = string.toLowerCase();
    final = final.replace(final[0], final[0].toUpperCase());

    return final;
}

console.log(capFirst("HELLooo"));