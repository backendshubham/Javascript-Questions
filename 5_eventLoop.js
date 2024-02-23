// The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by offloading tasks to the browser's APIs and queuing up events in a loop. This ensures that JavaScript remains responsive to user interactions.


function task2() {
    console.log("Task 2");
    setTimeout(task2, 2000); // Recursive setTimeout to call task2 every 2000ms
}

function microtask1() {
    console.log("Microtask 1");
}

function microtask2() {
    console.log("Microtask 2");
}

task1(); // Assuming task1 is defined elsewhere
task2(); // Calling task2 to initiate its execution

// Scheduling microtasks using Promise.resolve().then()
Promise.resolve().then(microtask1); // Schedules microtask1 to be executed as a microtask
Promise.resolve().then(microtask2); // Schedules microtask2 to be executed as a microtask 
