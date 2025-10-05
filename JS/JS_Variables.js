console.log("Hello World!")

// letiable name must start from $, _ or "letter" only. (Starting from numbers is not valid.)
// Case sensitive
// Cannot use reserved words

let a = 5;
let b = 6; 
let c = "Hello" // JS will fetch the data type automatically.

// console.log(a + b + 10)
// console.log(typeof a, typeof b, typeof c)

{
    let a = 66;
    console.log(a)
}

console.log(a);

let x = "Hello";
let y = 94;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof(x), typeof(y), typeof(z), typeof(p), typeof(q), typeof(r))

let o = {
    name: "Meet",
    "job code": 94,
    is_handsome: true 
}

console.log(o)
o.salary = "100Crores"
console.log(o)
o.salary = "500Crores"
console.log(o)