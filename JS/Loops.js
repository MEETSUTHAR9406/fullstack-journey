// For loop

// for(let i = 1; i < 5; i++) {
//     console.log("i = ", i);
// }


// While loop

/* 
let i = 1;
while(i <= 5) {
    console.log("i = ", i);
    i++;
}
*/

// Do-While loop

/*
let i = 1;
do {
    console.log("i = ", i);
    i++;
} while (i <= 0);
*/

// For-of loop

/*
let str = "Hello World!"
let len = 0;

for(let i of str) {
    console.log(i);
    len++;
}

console.log("String length is ", len);
*/

let student = {
    name: "Meet Suthar",
    age: "20",
    CGPA: "8",
    isPass: true
};

for(let val in student) {
    console.log("val = ", val,", value = ", student[val]);
}