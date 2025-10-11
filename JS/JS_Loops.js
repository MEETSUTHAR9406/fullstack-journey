let a = 1;

// for (a = 1; a <= 10; a++) {
//   console.log(a);
// }

let obj = {
  name: "Meet",
  role: "Student",
  company: "NO DATA",
};

for (const key in obj) {    
    const element = obj[key];
    console.log(key);
}

for (const ch of "Meet") {
    console.log(ch)
}

// let i = 5;
// while (i < 6) {
//     console.log(i)
//     i++
// }

// let i = 10 
// do {
//     console.log(i)
//     i++
// } while (i < 6);

let person = {
    name: "Meet",
    role: "Student",
    company: "No data"
};

for(const key in person) {
    console.log(key, ":", person[key]);
}

let numbers = [10, 20, 30];

numbers.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
})