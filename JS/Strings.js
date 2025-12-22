/*
let str = "Hello World!";

let len = str.length;
console.log(len);

let indices = str[5];
console.log(indices);
*/

// Template literals

/*
let specialStr = `This is a template literal`;
console.log(typeof(specialStr));
*/


/*
let obj = {
    item: "pen",
    price: 10
}

console.log("Item name is", obj.item, "and its price is", obj.price);

console.log(`Item name is ${obj.item} and its price is ${obj.price}`);
*/

// String Methods

let str1 = "Hello";
let str2 = "World!"

let upperStr = str1.toUpperCase();
let lowerStr = str1.toLowerCase();
let trimStr = str1.trim();

console.log(str1);

console.log(upperStr);
console.log(lowerStr);
console.log(trimStr);

let sliceStr = str1.slice(1, 3);
let concatStr = str1.concat(str2);
let replaceStr = str1.replace('Hello', 'Hi');
let charAtStr = str1.charAt(4);

console.log(sliceStr);
console.log(concatStr);
console.log(replaceStr);
console.log(charAtStr);