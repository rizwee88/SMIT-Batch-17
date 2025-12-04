// Normal function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3));

// CallBacks

function processData(data, callback) {
    console.log("Processing: " + data);
    callback();
}

function done() {
    console.log("Task Completed!");
}

processData("User Data", done);


// Array Advanced Methods


// Map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

// Filter
const ages = [15, 18, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults);


// For Each
const fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => console.log(fruit));

// Find

const numbers = [10, 20, 30, 40];
const result = numbers.find(n => n > 25);
console.log(result); 

// Reduce
const nums = [1, 2, 3, 4];
const total = nums.reduce((sum, value) => sum + value, 0);
console.log(total); 

// Some
const marks = [35, 50, 80, 90];
const hasFail = marks.some(m => m < 40);
console.log(hasFail);

// Every

const scores = [60, 70, 80];
const allPass = scores.every(score => score >= 60);
console.log(allPass); 

// Flat

const data = [1, [2, [3, 4]]];
const flatData = data.flat(2);
console.log(flatData); 




