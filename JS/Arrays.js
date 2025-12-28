let marks = [97, 82, 75, 64, 36];

console.log(marks);
console.log(marks.length);


let heroes = ["Ironman", "Thor", "Hulk", "Shaktiman", "Spiderman", "Antman"];

console.log(heroes);
console.log(heroes.length);

marks[0]; 


// For loop

/*
for(let i = 0; i < marks.length; i++) {
    console.log("Student", i + 1, "marks is:", marks[i]);
    console.log("Hero", i + 1, "is:", heroes[i]);
}
*/

// For - of loop

/*
for (let element of marks) {
    console.log(element);
}
*/

let cities = ["Delhi", "Pune", "Mumbai", "Hydrebad", "Gurgaon"];

for(let city of cities) {
    console.log(city.toUpperCase());
}

// console.log(cities.slice(0, 2));

console.log(cities.splice(1, 2, "Gujarat", "Punjab"));
console.log(cities);