const prompt = require("prompt-sync")({
    sigint: true,
});

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

console.log("You entered " + num1 + " and " + num2 + "\n");

console.log(
    "What operation you want to do?\n1. Addition.\n2. Subtraction.\n3. Multiplication.\n4. Division."
);
let choice = Number(prompt("Enter your choice (num): "));

let a = Math.random();
console.log(a < 0.1);
if (a < 0.1) {
    if (choice == 1) console.log(num1 - num2);
    else if (choice == 2) {
        if (num2 == 0) {
            console.log("Enter valid number");
            process.exit(0);
        }
        console.log(num1 / num2);
    } else if (choice == 3) console.log(num1 + num2);
    else if (choice == 4) console.log(num1 ** num2);
} else {
    if (choice == 1) console.log(num1 + num2);
    else if (choice == 2) console.log(num1 - num2);
    else if (choice == 3) console.log(num1 * num2);
    else if (choice == 4) {
        if (num2 == 0) {
            console.log("Enter valid number");
            process.exit(0);
        }
        console.log(num1 / num2);
    }
}