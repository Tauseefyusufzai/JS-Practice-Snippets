// // Arrays in JavaScript

// // Declare an array of marks
// let marks = [52, 21, 56, 89, 87, 12];
// console.log(marks[2]); // Access the third element of the array


// // Declare an array of friends
// let friend = ['Tauseef', 'Supriya'];
// console.log(friend); // Print the array of friends
// friend[1] = 'SupriyaPandey'; // Modify the second element of the array
// console.log(friend); // Print the modified array


// // Declare an array of heroes
// let heros = ['ironman', 'thor', 'captain', 'loki', 'antman', 'wanda', 'vision'];

// // Loop through the array and print each hero
// for (let idx = 0; idx < heros.length; idx++) {
//     console.log(heros[idx]);
// }

// // Find the index of a specific hero
// for (let idx = 0; idx < heros.length; idx++) {
//     if (heros[idx] == 'thor') {
//         console.log(idx); // Print the index of 'thor'
//     }
// }




// // Calculate the average marks of the class
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//     sum = sum + marks[i]; // Sum all the marks
// }
// console.log(`The average marks of the entire class is ${sum / marks.length} out of total marks ${sum}`);




// // Calculate the price after a 10% discount
// let price = [250, 645, 300, 900, 50];
// let dis = 0;

// for (let i = 0; i < price.length; i++) {
//     dis = price[i] - (price[i] / 10); // Calculate the discounted price
//     console.log(`Price after 10% discount: ${dis}`);
// }

// // Update the array with discounted prices
// for (let i = 0; i < price.length; i++) {
//     price[i] = price[i] - (price[i] / 10); // Apply the discount to each price
// }
// console.log(`Prices after 10% discount: ${price}`);


// // Using for-of loop to apply discount
// for (let val of price) {
//     let offer = val / 10;
//     val = val - offer; // Apply the discount
//     console.log(`After offer: ${val}`);
// }




// // Array methods

// let itemFood = ['potato', 'tomato', 'onion', 'garlic'];

// // Add an element to the end of the array
// itemFood.push('chips');
// console.log(itemFood); // Print the updated array

// // Remove the last element of the array
// itemFood.pop();
// console.log(itemFood); // Print the updated array

// // Convert the array to a string
// console.log(itemFood.toString());




// // Prompt user for input and create an array of company names
// let size = prompt("How many company names do you want to enter?");
// let companies = [];

// for (let i = 0; i < size; i++) {
//     companies[i] = prompt("Enter the name of the company");
//     if (companies[i] == 'uber') {
//         companies[i] = 'ola'; // Replace 'uber' with 'ola'
//     }
// }
// console.log(companies); // Print the array of company names

// // Remove the first element of the array
// console.log(companies.shift());
