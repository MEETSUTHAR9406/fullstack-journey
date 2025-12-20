let age = Number(prompt("Enter your age: "));

if(age >= 18 && age <= 100) {
    console.log("You are eligible for driving license.");
} else if(age > 100) {
    console.log("Contact at admin office for status.");
} else {
    console.log("You are not eligible for driving license.");
}

console.log(age > 18 ? "adult" : "not adult");
console.log(age);