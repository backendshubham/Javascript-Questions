// Generators are functions that can be paused and resumed, allowing for the generation of a sequence of values lazily. Iterators are objects that implement the Iterable protocol, enabling iteration over collections such as arrays and sets.

function* generatorFunction() { // Here the * is important
    yield 1;
    yield 2;
    yield 3;
}
const iterator = generatorFunction();
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: ture }


