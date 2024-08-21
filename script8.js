// // Classes and Objects in JavaScript

// // An object is an entity having state and behavior (properties and methods)
// // JavaScript objects have a special property called prototype
// // We can set prototype using __proto__

// // Define an object 'student' with properties and a method
// const student = {
//     fullName: "Tauseef Akhtar",
//     marks: 94.5,
//     printMark: function() {
//         console.log("marks", this.marks); // Access the 'marks' property using 'this'
//     }
// };

// // Prototype example

// let arr = ["banana", "apple", "mango"];
// console.log(arr); // Print the array

// // Add a new element to the array
// arr.push("litchi");
// console.log(arr); // Print the updated array

// // Define an object 'employee' with a method
// const employee = {
//     calcTax() {
//         console.log("The tax is 10%");
//     }
// };
// console.log(employee); // Print the 'employee' object

// // Define an object 'tauseef' with a property
// const tauseef = {
//     salary: 50000
// };
// console.log(tauseef); // Print the 'tauseef' object

// // Set the prototype of 'tauseef' to 'employee'
// tauseef.__proto__ = employee;

// // Classes

// // A class is a collection of objects that have the same behavior and state
// // A class is a program code template for creating objects

// // Syntax for defining a class
// class MyClass {
//     constructor() {
//         // Constructor code
//     }
//     myMethod() {
//         // Method code
//     }
// }

// // Create an instance of the class
// let myObj = new MyClass();

// // Define a class 'toyotaCar'
// class toyotaCar {
//     constructor(brand, mileage) {
//         console.log("creating new object"); // Automatically invoked
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// // Create instances of the 'toyotaCar' class
// let fortuner = new toyotaCar("fortuner", 10); // Constructor invoked
// fortuner.start();
// fortuner.stop();

// let lexus = new toyotaCar("lexus", 20);

// // Inheritance

// // Inheritance is passing down properties & methods from parent class to child class

// class Parent {
//     hello() {
//         console.log("Hello");
//     }
// }

// class Child extends Parent {
//     // Child class inherits from Parent class
// }

// // Create an instance of the 'Child' class
// let obj = new Child();
// console.log(obj); // Print the 'Child' object
// obj.hello(); // Call the inherited method

// // Define a class 'Person'
// class Person {
//     constructor(name) {
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
// }

// // Define a class 'Engineer' that extends 'Person'
// class Engineer extends Person {
//     work() {
//         console.log("solve problem, build something");
//     }
// }

// // Define a class 'Teacher' that extends 'Person'
// class Teacher extends Person {
//     work() {
//         console.log("Teaches students");
//     }
// }

// // Create instances of 'Engineer' and 'Teacher'
// let tauseef = new Engineer();
// let name = new Teacher();

// tauseef.work(); // Call the 'work' method of 'Engineer'

// // Super keyword

// // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods

// class Doctor extends Person {
//     constructor(name) {
//         super(name); // Invoke parent class constructor
//     }
//     work() {
//         super.eat(); // Call the 'eat' method from the parent class
//         console.log("treat patient");
//     }
// }

// // Create instances of 'Doctor'
// let newobj = new Doctor("Neurologist");
// let docObj = new Doctor("Tauseef");



// /// Practice with Classes and Objects

// // Declare a global variable 'Data'
// let Data;

// // Define a class 'User'
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("Data =", Data); // Print the value of 'Data'
//     }
// }

// // Define a class 'Student' that extends 'User'
// class Student extends User {
//     constructor(name, email) {
//         super(name, email); // Call the parent class constructor
//     }
//     viewAttendance() {
//         console.log("Your attendance is =", Data); // Print the attendance
//     }
// }

// // Define a class 'Teacher' that extends 'Student'
// class Teacher extends Student {
//     constructor(name, email) {
//         super(name, email); // Call the parent class constructor
//     }
//     editAttendance() {
//         Data = prompt("Enter the Attendance"); // Prompt user to enter attendance
//         console.log("New Attendance is =", Data); // Print the new attendance
//     }
// }

// // Create instances of 'Student' and 'Teacher'
// let student1 = new Student("Tauseef", "tauseefakhtaryusufzai@gmail.com");
// let student2 = new Student("Supriya", "supriyapandey@gmail.com");

// let teacher1 = new Teacher("Ajay", "ajaykumar@gmail.com");

// // Define a class 'Admin' that extends 'User'
// class Admin extends User {
//     constructor(name, email) {
//         super(name, email); // Call the parent class constructor
//     }
//     editData() {
//         let newData = prompt("Enter the data"); // Prompt user to enter new data
//         console.log("Data =", newData); // Print the new data
//     }
// }

// // Create an instance of 'Admin'
// let admin1 = new Admin("Tauseef", "tauseefyusuf77@gmail.com");

// // Error Handling

// // try-catch block

// // Syntax for try-catch
// // try {
// //     // Normal code
// // } catch (err) { // 'err' is the error object
// //     // Handling error
// // }

// // Example without error handling

// let a = 5;
// let b = 10;
// console.log("a =", a);
// console.log("b =", b);
// console.log("a + b =", a + b);
// console.log("a + c =", a + c); // Error: 'c' is not defined, code execution stops here
// console.log("a + b + 1 =", a + b + 1);
// console.log("a + b + 2 =", a + b + 2);
// console.log("a + b + 3 =", a + b + 3);

// // Example with try-catch

// let a = 5;
// let b = 10;
// console.log("a =", a);
// console.log("b =", b);
// console.log("a + b =", a + b);
// try {
//     console.log("a + c =", a + c); // This will throw an error
// } catch (err) { // 'err' is the error object
//     console.log(err); // Print the error
// }
// // The code below will run properly because the error is handled
// console.log("a + b + 1 =", a + b + 1);
// console.log("a + b + 2 =", a + b + 2);
// console.log("a + b + 3 =", a + b + 3);

