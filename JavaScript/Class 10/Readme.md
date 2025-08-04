## ✂️ Array Methods: `slice()` and `splice()`

### 🔹 `slice()` Method

- `slice(start, end)` returns a **shallow copy** of a portion of an array.
- It **does not modify** the original array.
- The `end` index is **not included** in the result.

```js
let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

let sliced = fruits.slice(1, 4);
console.log(sliced);    // ['banana', 'cherry', 'date']
console.log(fruits);    // ['apple', 'banana', 'cherry', 'date', 'fig']

