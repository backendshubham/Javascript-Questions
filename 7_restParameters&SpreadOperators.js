// Rest parameters allow a function to accept an indefinite number of arguments as an array, while spread operators allow an array to be expanded into individual elements. 

function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
  }
  
console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// And it is the suitable expmple of spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2]; // Here we are merging both of arrays
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
