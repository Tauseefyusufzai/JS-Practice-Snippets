// // Synchronous
// // Synchronous means the code runs in a specific sequence of instructions given in a program.
// // Each instruction waits for the previous instruction to complete its execution before moving on to the next one.


// // Asynchronous
// // In synchronous programming, some important instructions might get blocked due to previous ones,
// // causing a delay in the UI. Asynchronous code execution allows the next instructions to execute immediately,
// // without blocking the flow.

// // Example:

// function hello() {
//     console.log("hello");
// }

// // Asynchronous code using setTimeout to delay execution of a function.
// setTimeout(hello, 3000); // This will log "hello" after 3 seconds.

// setTimeout(() => {
//     console.log("My name is Tauseef");
// }, 4000); // This will log "My name is Tauseef" after 4 seconds.

// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(() => {
//     console.log("four");
// }, 3000); // This will log "four" after 3 seconds.

// console.log("five");
// console.log("six");

// // Output Order:
// // one, two, three, five, six, four, hello, My name is Tauseef

// // Callback
// // A callback is a function passed as an argument to another function.

// function sum(a, b) {
//     console.log("a + b = ", a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b); // Executes the callback function.
// }

// calculator(1, 5, sum); // Outputs: a + b = 6


// // Callback Hell
// // Callback hell refers to a situation where multiple nested callbacks form a pyramid structure.
// // This style of programming becomes difficult to understand and manage.

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData(); // Calls the next callback in the chain.
//         }
//     }, 2000);
// }

// // Callback hell example:
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4); // This nested structure is hard to read and maintain.
//         });
//     });
// });


// // Using setInterval to print a string multiple times.
// function printStringNTimes(str, n) {
//     let count = 0;
//     const intervalId = setInterval(() => {
//         if (count < n) {
//             console.log(str);
//             count++;
//         } else {
//             clearInterval(intervalId); // Stops the interval once the count reaches n.
//         }
//     }, 1000);
// }

// printStringNTimes("Hello, World!", 50);


// // Promises
// // A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// // It's a solution to callback hell.

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a new promise");
//     // Resolve and reject are callbacks provided by JavaScript.
//     // resolve("Successful");
//     reject("Some error occurred");
// });

// // Example promise usage
// let promise = getData(5895);

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 10000);
//     });
// }


// // Promise chain
// // Promises can be chained using .then() and .catch() methods.

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("Successful");
//         // reject("Some error occurred")
//     });
// };

// let promise = getPromise();

// promise.then((res) => {
//     console.log("Promise fulfilled", res); // Logs when the promise is resolved.
// });

// promise.catch((err) => {
//     console.log("Rejected", err); // Logs if the promise is rejected.
// });

// // Chaining promises:
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Data received successfully");
//             // reject("Network problem")
//         }, 5000);
//     });
// }

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     });
// });

// getData(25)
//     .then((res) => {
//         return getData(30);
//     })
//     .then((res) => {
//         return getData(40);
//     })
//     .then((res) => {
//         console.log(res);
//     });

// promise.catch((err) => {
//     console.log("Some error occurred", err);
// });


// // Async-Await
// // An async function always returns a promise. 
// // The await keyword pauses the execution of its surrounding async function until the promise is settled.

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api(); // Waits for the first API call to complete.
//     await api(); // Waits for the second API call to complete.
// }

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Data received successfully");
//             // reject("Network problem")
//         }, 5000);
//     });
// }

// // Async function to fetch all data in sequence.
// async function getAllData() {
//     console.log("Getting data 1...");
//     await getData(1);
//     console.log("Getting data 2...");
//     await getData(2);
//     console.log("Getting data 3...");
//     await getData(3);
//     console.log("Getting data 4...");
//     await getData(4);
// }

// // Using an Immediately Invoked Function Expression (IIFE) with async-await.
// (async function () {
//     console.log("Getting data 1...");
//     await getData(1);
//     console.log("Getting data 2...");
//     await getData(2);
//     console.log("Getting data 3...");
//     await getData(3);
//     console.log("Getting data 4...");
//     await getData(4);
// })();
