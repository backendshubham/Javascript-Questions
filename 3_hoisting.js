// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase. However, only the declarations are hoisted, not the initializations.

console.log(x); // undefined
var x = 10;
console.log(x); // 10

// Or

var x;
console.log(x); // undefined
x = 10;
console.log(x); // 10