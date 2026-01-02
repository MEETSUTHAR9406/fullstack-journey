// Question...1

/*
let num = Number(prompt("Enter your number: "));

if(num % 5 === 0) {
    console.log("Your number is multiple of 5.");
} else  {
    console.log("Your number is not a multiple of 5.");
}
*/

// Question...2

/*
let num = Number(prompt("Enter your number: "));

if (num < 0 || num > 100) {
  console.log("Please enter a valid number between 0 and 100.");
} else if (num >= 80) {
  console.log("You got A grade.");
} else if (num >= 70) {
  console.log("You got B grade.");
} else if (num >= 60) {
  console.log("You got C grade.");
} else if (num >= 50) {
  console.log("You got D grade.");
} else {
  console.log("You got F grade.");
}
*/

// Question...3

/*
for(let i = 0; i <= 100; i++) {
  if(i % 2 == 0) {
    console.log(i);
  }
}
*/

// Question...4

/*
let gameNum = 94;

let guessedNum = Number(prompt("Guess the number between 0 to 100: "));

if (guessedNum > 100 || guessedNum < 0) {
  console.log("Only guess numbers between 0 to 100.");
} else if (guessedNum === gameNum) {
  console.log("You guessed correct! ", guessedNum, " is the correct number.");
} else {
  console.log("You guessed wrong! Try again.");
}
*/

// Question...5

/*
let fullName = String(prompt("Enter your full name: "));
let username = "@" + fullName + fullName.length;

console.log(username);
*/

// Question...6

/*
let marks = [85, 97, 44, 37, 76, 60];

let avg = 0;
for(let i = 0; i < marks.length; i++) {
  avg += marks[i] / marks.length; 
}

console.log(avg);
*/

// Question...7

/*
let prices = [250, 645, 300, 900, 50];

let offer = 0;
for (let i = 0; i < prices.length; i++) {
  offer = (prices[i] * 10) / 100;
  prices[i] = prices[i] - offer;  
}

for(let price in prices) {
  console.log(prices[price]);
}
*/

// Question...7

/*
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift();
console.log("1. ", companies);

companies.splice(1, 1, "Ola");
console.log("2. ", companies);

companies.push("Amazon");
console.log("3. ", companies);
*/

// Question...8

/*
function countVowels(str) {
  let count = 0;

  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("abc"));
*/

// Question...9

// let nums = [1, 2, 3, 4, 5];

/*
nums.forEach(function (val, idx) {
  console.log(val * val);
});
*/

/*
let calcSquare = (val) => {
  console.log(val, val * val);
};

nums.forEach(calcSquare);
*/

/*
nums.forEach((val) => {
  console.log(val, val * val);
});
*/