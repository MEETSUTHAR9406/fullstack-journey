/*
function myFunction(msg, n) {
    console.log(msg * n);
}

myFunction("100", 100);
*/


/*
function twoSum(a, b) {
    s = a + b;
    console.log("Before Hello World!");
    return s;
    // console.log("After Hello World!");  // Won't execute.
}

let val = twoSum(1, 2); 
console.log(val);
*/


// Arrow Functions

// Normal vs Arrow

function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    console.log(a + b);
}

arrowSum(2, 2);

// Normal vs Arrow

function mul(a, b) {
    return a * b;
}

const arrowMul = (a, b) => {
    return a * b;
}

console.log(arrowMul(2, 4));

arrowMul(2, 3);