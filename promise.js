
let promise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("Promise was successful!");
        } else {
            reject("Promise failed.");
        }
    }, 2000)
});
promise
    .then(result => {
        console.log(result);
    }) // Handle resolved promise
    .catch(error => {
        console.error(error);
    }) // Handle rejected promise
    .finally(() => {
        console.log("Promise has settled.");
    }); // Handle settled promise
