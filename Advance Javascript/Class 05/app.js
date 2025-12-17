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

// High Order Function

// Function as Arguments

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, multiply)); // 15

// Function Returned

function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10

// Buit in Highorder Function 

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(doubled); // [2,4,6,8]
console.log(evens);   // [2,4]
console.log(sum);     // 10