// Higher order Functions / Methods (Uses function as a parameter OR return function as a output)

// let arr = ["Gujarat", "Delhi", "Pune", "Mumbai"];

/*
arr.forEach(function myFunc(val) {
  console.log(val);
});
*/

/*
arr.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});
*/

/*
Map
*/
// Creates new array -- Similar to forEach but forEach doesn't create new array.
// arr.map(callbackFnx(value, index, array))

// Print Method
/*
arr.map((val) => {
  console.log(val);
});
*/

// Copy the array
/*
let newArr = arr.map((val) => {
  return val.toUpperCase();
});

console.log(newArr);
*/

/*
Filter Method
*/
// Creates a new array if the given condition becomes true

/*
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = nums.filter((val) => {
  return val % 2 == 0;
});
console.log(newNums);
*/

/*
Reduce Method 
*/
// Redues the array to single value & returns that value

let nums = [1, 2, 3, 4, 5, 24, 234, 54, 34];

const output = nums.reduce((res, curr) => {
  return res + curr;
});
console.log(output);

const maxNum = nums.reduce((res, curr) => {
  return res > curr ? res : curr;
});
console.log(maxNum);
