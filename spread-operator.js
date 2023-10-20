//Spread Array
const citrus = ["lime", "lemon", "orange"];
const fruits = ["apple", "banana", "coconut", ...citrus]

console.log(fruits);

//Spread Object
const fullName = {
    fName : "Rasyid",
    lName : "Annas"
}

const user = {
    ...fullName,
    id:1,
    userName: "rasyidannas657"
}

console.log(user);