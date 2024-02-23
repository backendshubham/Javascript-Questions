// These are JavaScript keywords used to declare variables. var has a function scope, while let and const have block scope. let allows reassignment, while const creates a constant whose value cannot be changed after initialization.

// When we will use let
let name = "pushpendra";
name = "pushpendra"; // Allowed
console.log(name); // Output: Jane

// When we will use var
var count = 10;
count = 15; // Allowed
console.log(count); // Output: 15

// When we will use const with objects
const person = { name: "pushpendra", age: 26 };
person.age = 27; // Allowed, but you can't reassign person to a different object
console.log(person.age); // Output: 31

// When we will use const with array
const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Allowed, but you can't reassign numbers to a different array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6] 
