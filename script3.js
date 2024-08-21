// // Loops in JavaScript

// // For loop
// for (let i = 0; i <= 5; i++) {
//     console.log('Tauseef'); // Print 'Tauseef' 6 times (from 0 to 5)
// }


// for (let i = 1; i <= 10; i++) {
//     console.log('2 X', i, '=', 2 * i); // Print multiplication table of 2
// }


// let sum = 0;
// for (let count = 0; count <= 10; count++) {
//     sum = sum + count; // Calculate the sum of numbers from 0 to 10
//     console.log(sum); // Print the current sum
// }




// // While loop
// let num = 0;
// while (num <= 10) {
//     console.log(num); // Print numbers from 0 to 10
//     num++; // Increment num by 1
// }




// // Do-while loop
// let i = 10;
// do {
//     console.log('Tauseef'); // Print 'Tauseef' at least once
//     i++;
// } while (i <= 10); // Continue if i is less than or equal to 10




// // For-of loop
// let string = "Tauseef akhtar";
// let size = 0;
// for (let char of string) {
//     console.log(char); // Print each character of the string
//     size++; // Increment size for each character
// }
// console.log('String size =', size); // Print the size of the string




// // For-in loop
// let student = {
//     name: 'tauseef',
//     age: 20,
//     dob: '7/12/02',
//     ispass: true
// };

// for (let key in student) {
//     console.log('Key =', key, 'value =', student[key]); // Print each key-value pair in the student object
// }




// // Practice: Print even numbers from 1 to 100
// for (let count = 1; count <= 100; count++) {
//     if (count % 2 == 0) {
//         console.log(count); // Print even numbers
//     }
// }




// // Guessing game
// let num = 25;
// let guess = prompt("Guess the number");

// while (guess != num) {
//     guess = prompt("Re-enter number"); // Prompt user to guess again if incorrect
// }
// alert("Congratulations, correct guess!"); // Alert when the guess is correct
// console.log("Congratulations, correct guess!");




// // String operations

// let str = 'Tauseef';
// console.log(str.length); // Print the length of the string

// console.log(str[2]); // Print the third character of the string

// let obj = {
//     name: "pen",
//     price: 20
// };

// console.log(`The cost of ${obj.name} is ${obj.price}`); // Template literal to print object properties


// let str = "Tauseef";
// console.log(`The string ${str} contains ${str.length} characters and ${str[5]} is the 6th letter`);


// let str = 'tauseef akhtar';
// console.log(str.toUpperCase()); // Convert string to uppercase


// let str1 = "tauseef";
// let str2 = "yusufzai";
// console.log(str1.concat(str2)); // Concatenate two strings




// let username = prompt("Enter your name");
// let genuser = `@${username}${username.length}`; // Generate a username with length
// console.log(genuser);
// let size = username.length;
// console.log(`@${username.concat(size)}`); // Concatenate username with its length
