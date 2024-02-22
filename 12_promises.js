// Promises are objects representing the eventual completion or failure of an asynchronous operation. They simplify asynchronous programming, offering a cleaner alternative to callback functions.

const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Asynchronous operation
        if (success) {
            resolve(data);
        } else {
            reject(error);
        }
    });
};
