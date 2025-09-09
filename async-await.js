// async make a function that will return a promise
// await pauses the function execution until the promise is resolved or rejected
// look & behave like synchronous code (more efficient & responsive)
function fetchData() {
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

async function getData() {
    console.log("start");

    const result = await fetchData(); // Wait for 2 seconds for the promise to resolve
    console.log(result);
    
    
    console.log("end");
}
getData();  