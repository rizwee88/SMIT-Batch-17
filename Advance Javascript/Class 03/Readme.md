## ⭐ 1. Arrow Functions

Arrow functions are a modern and shorter way to write functions in
JavaScript. They make code clean and easier to read.

### When to Use?

-   When you want short functions
-   When you don't need `this` keyword

### Example

``` js
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

------------------------------------------------------------------------

## ⭐ 2. Callbacks

A callback is a function that you **send as a parameter** into another
function. The outer function can run it whenever it wants.

### Why Do We Use Callbacks?

-   To run code **after** something finishes
-   Useful in asynchronous tasks (API calls, timers)

### Example

``` js
function processData(data, callback) {
  console.log("Processing: " + data);
  callback();
}

function done() {
  console.log("Task Completed!");
}

processData("User Data", done);
```

------------------------------------------------------------------------

## ⭐ 3. Map

`map()` helps you make a **new array** by changing each element of the
old array.

### When to Use?

-   When you want to transform values
-   Example: multiply all numbers, extract names from objects

### Example

``` js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
```

------------------------------------------------------------------------

## ⭐ 4. Filter

`filter()` returns only those items that match your condition. It **does
not change** the original array.

### When to Use?

-   Get only even numbers
-   Get only adults from age list
-   Remove unwanted items

### Example

``` js
const ages = [15, 18, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25, 30]
```

------------------------------------------------------------------------

## ⭐ 5. forEach

`forEach()` is used when you want to perform an action for every element
of an array. It **does not return** anything.

### When to Use?

-   Print items
-   Update UI for each item
-   Perform some actions but don't need a new array

### Example

``` js
const fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => console.log(fruit));
```

------------------------------------------------------------------------

## ⭐ 6. Find

`find()` returns the **first** value that matches the condition.

### When to Use?

-   Find first product with price \> 100
-   Find first user with age \> 18

### Example

``` js
const numbers = [10, 20, 30, 40];
const result = numbers.find(n => n > 25);
console.log(result); // 30
```

------------------------------------------------------------------------

## ⭐ 7. Reduce

`reduce()` combines all values of an array to make **one final value**.

### When to Use?

-   Find total price
-   Sum of numbers
-   Count items
-   Convert arrays into objects

### Example

``` js
const nums = [1, 2, 3, 4];
const total = nums.reduce((sum, value) => sum + value, 0);
console.log(total); // 10
```

------------------------------------------------------------------------

## ⭐ 8. Some

`some()` checks if **at least one** element matches your condition.

### When to Use?

-   To check if any student failed
-   To check if any product is out of stock

### Example

``` js
const marks = [35, 50, 80, 90];
const hasFail = marks.some(m => m < 40);
console.log(hasFail); // true
```

------------------------------------------------------------------------

## ⭐ 9. Every

`every()` checks if **all** items match your condition.

### When to Use?

-   Check if every student passed
-   Check if all prices are above 0

### Example

``` js
const scores = [60, 70, 80];
const allPass = scores.every(score => score >= 60);
console.log(allPass); // true
```

------------------------------------------------------------------------

## ⭐ 10. Flat

`flat()` helps remove nested levels from arrays.

### When to Use?

-   Remove extra brackets from nested arrays
-   Prepare data for mapping or filtering

### Example

``` js
const data = [1, [2, [3, 4]]];
const flatData = data.flat(2);
console.log(flatData); // [1, 2, 3, 4]
```

------------------------------------------------------------------------
