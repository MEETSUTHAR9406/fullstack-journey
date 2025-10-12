console.log("This is about strings.")
let a = "Meet"
console.log(a)

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[3])
// console.log(a[4]) undefined

console.log(a.length)

let his_name = "Meet"
let friend = "Het"

console.log("His name is " + his_name + " and his friends name is " + friend)
console.log(`His name is ${his_name} and his friends name is ${friend}`) // Template literals

let b = "World"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.charAt(2))
console.log(b.slice(1, 4))
console.log(b.slice(2))

console.log(b.replace("World", "Hello"))

let n1 = "Hello "
let n2 = "World"
console.log(n1.concat(n2))

let rm = "                           Meet"
console.log(rm.trim())
