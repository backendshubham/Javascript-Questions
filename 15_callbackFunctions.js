// A callback function in JavaScript is a function passed as an argument to another function, to be executed later, often after an asynchronous task completes.

function fetchData(callback) {
    setTimeout(function () {
      const data = "Fetched data";
      callback(data); // invoking the callback function with the fetched data
    }, 1000); // Delay of 1 second
  }
  
  // Using the callback function
  fetchData(function (result) {
    console.log(result); // Output: Fetched data
  }); 