console.log("This is about Functions.")

function hello(name) {
    console.log("Hey " + name + " you are a fruit!")
    console.log("Hey " + name + " you are a fruit!")
    console.log("Hey " + name + " you are a fruit!")
    console.log("Hey " + name + " you are a fruit!")
    console.log("Hey " + name + " you are a fruit!")
}   

hello("Apple")
hello("Grapes")


function sum(a, b) {
    // console.log(a + b)
    return a + b
}

result = sum(3, 5)
result1 = sum(1, 2)

console.log("The sum of these numbers is: ", result)
console.log("The sum of numbers is: ", result1)

const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1("Meet")
func1("Rahi")