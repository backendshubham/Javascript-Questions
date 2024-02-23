// Map => It's a function that applies another function to all the values in a given array and returns a new array with the modified values.

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(x => x ** 2);
console.log(squared); // Output: [1, 4, 9, 16, 25]


// Filter => Create a new array with elements that pass the test implemented by the provided function.

const num = [1, 2, 3, 4, 5];
const evens = num.filter(x => x % 2 === 0);
console.log(evens); // Output: [2, 4]

// Reduce => Apply a function to each element of an array (from left to right) to reduce it to a single value.

const array = [1, 2, 3, 4, 5];
const product = array.reduce((x, y) => x * y); // Here the x value will be 0 (default)
console.log(product); // Output: 120  

