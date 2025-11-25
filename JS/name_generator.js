let adjectives = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
}

let shopName = {
    1 : "Engines",
    2 : "Foods",
    3 : "Garments"
}

let anotherWord = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
}

var ran_1 = Math.floor(Math.random() * 3 ) + 1;
var ran_2 = Math.floor(Math.random() * 3 ) + 1;
var ran_3 = Math.floor(Math.random() * 3 ) + 1;

const finalName = adjectives[ran_1] + " " + shopName[ran_2] + " " + anotherWord[ran_3];

console.log("The generated shop name is: ", finalName)