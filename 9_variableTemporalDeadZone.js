// The Temporal Dead Zone (TDZ) is the period between entering scope and the declaration being initialized where accessing the variable results in a ReferenceError.

console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 'test';
 