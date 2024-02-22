// this refers to the object to which the current code context belongs. Its value is determined by how a function is called.

const obj = {
    name: 'pushpendra',
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};
obj.greet(); // Output: Hello, pushpendra!