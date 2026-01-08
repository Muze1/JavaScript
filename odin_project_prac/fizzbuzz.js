let answer = parseInt(prompt("Choose a number to FizzBuzz up to: "))

for (let i = 1; i <= answer; i++) {
    console.log(i);

    if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }

    
}

