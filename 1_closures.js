// Closures are functions that remember the lexical scope in which they were defined, allowing them to access variables from that scope even after the outer function has finished executing.

function outerFunction() {
    let outerVariable = 'Hello, I am outer';
    return function innerFunction() {
        console.log(outerVariable);
    };
}
let innerFunc = outerFunction();
innerFunc(); // Output: Hello, I am outer
 

