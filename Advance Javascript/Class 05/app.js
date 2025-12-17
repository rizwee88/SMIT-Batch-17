console.log("Hello")

// Exponentiation Operator (**)

let num = 2 ** 4

console.log(num)

let num = Math.pow(2, 4)

console.log(num)

// First Class Function

const sayHello = function () {
    console.log("Hello");
};

sayHello();

// Function Passed an Arguments

function greet(fn) {
    fn();
}

function hello() {
    console.log("Hello World");
}

greet(hello);

// Function returned from another function

function outer() {
    return function inner() {
        console.log("Inner Function");
    };
}

const myFunc = outer();
myFunc();