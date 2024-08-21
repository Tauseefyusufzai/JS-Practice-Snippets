// Single line comment


/* 
Multi-line comment 
*/


// Operators in JavaScript


// Arithmetic operators
let a = 5;
let b = 8;
let c = a + b; // Addition
console.log(c); // Output: 13
console.log('a = ', a, 'b = ', b); // Output: a = 5 b = 8
console.log('a + b =', a + b); // Output: 13
console.log('a - b = ', a - b); // Subtraction, Output: -3
console.log('a * b =', a * b); // Multiplication, Output: 40
console.log('a / b = ', a / b); // Division, Output: 0.625


// Modulus operator
console.log('a % b =', a % b); // Remainder, Output: 5
console.log('a ** b =', a ** b); // Exponentiation, Output: 390625


// Unary operator
console.log('a++ =', a++); // Post-increment, Output: 5 (then a becomes 6)
console.log(a); // Output: 6


// Assignment operators
a *= 8; // a = a * 8, Output: 48
a /= 9; // a = a / 9, Output: 5.333...
a -= 7; // a = a - 7, Output: -1.666...
a += 8; // a = a + 8, Output: 6.333...
console.log(a); // Output: 6.333...


// Comparison operators (return boolean values)
console.log('a == b', a == b); // Equality check, Output: false
let x = 8;
let y = 9;
console.log('x === y', x === y); // Strict equality check, Output: false
console.log(x < y); // Less than, Output: true
console.log(x > y); // Greater than, Output: false


// Logical operators
console.log(a == b && x < y); // Logical AND, Output: false
console.log(a == b || x < y); // Logical OR, Output: true
console.log(!(x < y)); // Logical NOT, Output: false




// Conditional statements
let age = 17;

if (age > 18) {
    console.log('You are eligible for a driving license');
} else {
    console.log('You are not eligible for a driving license');
}




// Prompt user for input (Note: prompt is not available in Node.js)
let num1 = prompt('Enter the first number');
let num2 = prompt('Enter the second number');

if (num1 > num2) {
    console.log('num1 is greater');
    alert('Num1 is greater');
} else {
    console.log('num2 is greater');
}




// Multiple if-else statements
let mode = 'light';
let color;

if (mode == 'dark') {
    color = 'black';
} else if (mode == 'blue') { // Multiple else-if statements
    color = 'blue';
} else {
    color = 'white';
}

if (mode == 'light') {
    color = 'white';
}
console.log(color); // Output: white




// Check if a number is odd or even
let num = prompt('Enter number');

if (num % 2 == 0) {
    console.log(num, "is Even");
} else {
    console.log('odd');
}




// Ternary operator
let age1 = 25;
let result = age1 > 18 ? 'adult' : 'not adult';
console.log(result); // Output: adult




// Practice: Check if a number is a multiple of 5
let number = prompt("Enter number");

if (number % 5 == 0) {
    console.log('number is a multiple of 5');
} else {
    console.log('Number is not a multiple of 5');
}




// Grading system
let score = 70;
let grade;

if (score > 90) {
    grade = 'A';
} else if (score <= 90 && score > 80) {
    grade = 'B';
} else if (score <= 80 && score > 70) {
    grade = 'C';
} else {
    grade = 'fail';
}
console.log('Grade', grade); // Output: Grade C
