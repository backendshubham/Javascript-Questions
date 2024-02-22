// Promises provide better control flow and error handling compared to callbacks, avoiding callback hell and enabling easier chaining of asynchronous operations.

// Example using promises
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const data = 'Some fetched data';
        resolve(data); // Resolve the promise with the fetched data
      }, 2000);
    });
  }
  
  // Call fetchData and handle the resolved value using then
  fetchData()
    .then(data => {
      console.log('Processing data:', data);
    })
    .catch(error => {
      console.error('Error occurred:', error);
    });
  