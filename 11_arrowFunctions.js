// Arrow functions are a concise way to write functions in JavaScript, with implicit return and lexical this. Function expressions define functions as values assigned to variables.

const square = x => x * x;
const add = (a, b) => a + b;
const greet = name => `Hello, ${name}!`;

// Here is no need to do return

console.log(square(2));
console.log(add(2, 4));
console.log(greet('pushpendra'));
