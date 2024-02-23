// call => call allows you to invoke a function with a specified this value and arguments provided individually.

function greet(age) {
    console.log(`Hello, ${this.name}, ${age} years old.`);
}

const person = { name: 'Pushpendra' };

greet.call(person, '26'); // Output: Hello, Pushpendra, 26 years old.



// apply => apply is similar to call, but it accepts arguments as an array.

greet.apply(person, ['26']); // Output: Hello, Pushpendra, 26 years old.



// bind => bind creates a new function with a specified this value and initial arguments. It doesn't immediately execute the function.

greet.bind(person, ['26'])(); // Output: Hello, Pushpendra, 26 years old
greet.bind(person, '26')(); // Output: Hello, Pushpendra, 26 years old 




