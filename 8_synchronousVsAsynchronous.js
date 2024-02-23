// Synchronous operations are executed sequentially, blocking further execution until they complete, while asynchronous operations allow the program to continue executing while waiting for a response.


console.log("Start");

function synchronousTask() {
  for (let i = 0; i < 3; i++) {
    console.log("Synchronous Task");
  }
}

synchronousTask();

console.log("End");

// It will run like:
// Start
// Synchronous Task
// Synchronous Task
// Synchronous Task
// End


console.log("Start");

function asynchronousTask() {
  setTimeout(function() {
    console.log("Asynchronous Task");
  }, 2000); // Executes after 2 seconds
}

asynchronousTask();

console.log("End");


// It will run like 
// Start
// End
// Asynchronous Task
 