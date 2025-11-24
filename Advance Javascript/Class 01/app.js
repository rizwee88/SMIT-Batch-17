// Var have Global Scope

var name = "Adil";
var name = "Ahmed";
console.log(name);

// Let have Blocked Scope

let age = 20;
age = 21;
console.log(age);

// Const Used for values that should not change.

const country = "Pakistan";
console.log(country);

// Closure 

function outerFunction() {
    let counter = 0;

    function innerFunction() {
        counter++;
        console.log(counter);
    }

    return innerFunction;
}

const myCounter = outerFunction();

myCounter();
myCounter();
myCounter();

// Destructuring

const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first, second, third);

// Object Destructuring

const student = {
    name: "Adil",
    age: 30,
    city: "Karachi"
};

const { name, age, city } = student;
console.log(name, age, city);