// // Functions in JavaScript


// // Function definition
// function functionName() {
//     // Do some work
// }


// // Function definition with parameters
// function functionName(param1, param2) {
//     // Do some work
// }


// // Function call
// functionName();




// // Function to print details
// function myDetail() {
//     console.log("Tauseef Akhtar Yusufzai");
//     console.log("Age is 22");
// }
// myDetail(); // Call the function


// // Function with a parameter
// function letter(msg) { // 'msg' is a parameter
//     console.log(msg); // 'msg' is a local variable
// }
// letter("hi my name is tauseef"); // Argument passed to the function




// // Function to calculate sum
// function sum(a, b) {
//     let c = a + b;
//     console.log(c);
// }
// sum(2, 3); // Call the function with arguments




// // Function to calculate multiplication and return the result
// function mul(x, y) {
//     return x * y;
// }
// let val = mul(8, 4); // Store the returned value
// console.log(val); // Output the result




// // Arrow function for multiplication
// const arrowMul = (a, b) => {
//     return a * b;
// };




// // Function to count vowels in a string
// function vowelStr(str) {
//     let count = 0;
//     let vowel = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//             count++;
//             vowel[i] = str[i];
//         }
//     }
//     console.log(`Vowels in the given string are ${vowel} with a total of ${count} vowels`);
// }
// vowelStr("tauseef");




// // Array methods

// // forEach method - executes a provided function once for each array element
// let arr = [1, 2, 3, 5, 8];
// arr.forEach(function printVal(val) { // Callback function
//     console.log(val);
// });


// let item = ["pune", "delhi", "gorakhpur", "mumbai"];
// item.forEach((val, idx, item) => {
//     console.log(val.toUpperCase(), idx, item); // Convert each item to uppercase
// });


// let num = [1, 2, 3, 4];
// num.forEach((sqr) => {
//     console.log(sqr * sqr); // Print the square of each number
// });




// // map method - creates a new array with the results of calling a provided function on every element
// let newArr = arr.map((val) => {
//     return val * 2; // Multiply each element by 2
// });
// console.log(newArr); // Output the new array

// let nums = [1, 2, 5, 6];
// nums.map((val) => {
//     console.log(val); // Print each element
// });




// // filter method - creates a new array with all elements that pass the test implemented by the provided function
// let even = nums.filter((val) => {
//     return val % 2 == 0; // Check if the number is even
// });
// console.log(even); // Output the new array with even numbers




// // reduce method - executes a reducer function on each element of the array, resulting in a single output value
// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// const output = num.reduce((previous, current) => {
//     return previous + current; // Sum all elements
// });
// console.log(output); // Output the sum

// const maxOutput = num.reduce((previous, current) => {
//     return previous > current ? previous : current; // Find the maximum value
// });
// console.log(maxOutput); // Output the maximum value




// // Practice: Filter marks greater than 90
// let marks = [87, 92, 65, 54, 77, 66];
// let max = marks.filter((val) => {
//     return val > 90; // Check if the mark is greater than 90
// });
// console.log(max); // Output the filtered marks




// // Prompt user for array size and elements
// let n = prompt("Enter size of the array");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr[i] = prompt("Enter the element of the array");
// }
// console.log(arr); // Output the array




// // Calculate the sum and product of the array elements
// let sum = arr.reduce((pre, cur) => {
//     return pre + cur;
// });
// let mul = arr.reduce((pre, cur) => {
//     return pre * cur;
// });
// console.log(`The sum of the array is ${sum} and the product is ${mul}`);
