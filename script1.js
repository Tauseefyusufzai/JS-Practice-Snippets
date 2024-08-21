// Print 'hello World' to the console
console.log('hello World');

// Declare a variable and assign a value
fullName = 'Tauseef';
console.log(fullName);
console.log('Hey! Welcome', fullName);

// Declare variables using var (can be redeclared and redefined)
var b = 3;
var d = 4;
console.log(b);

// Declare a variable using let (cannot be redeclared but can be redefined)
let a = 2;
// let a = 3; // This would cause an error
a = 8; // Redefine
console.log(a + 1);

// Using let within a block scope
{
    let num1 = 77;
    console.log(num1);
}
{
    let num1 = 88;
    console.log(num1);
}

// Declare a constant (cannot be redeclared or redefined)
const c = 6;
console.log(c);

// Data types

// Number
let num = 123;
console.log(num);
console.log(typeof num);

// String
let myName = 'Tauseef Akhtar Yusufzai';
console.log(myName);
console.log(typeof myName);
console.log('3' + '3'); // Concatenation
console.log('3' + 3); // Concatenation
console.log(3 + '3'); // Concatenation
console.log(3 + 3); // Addition

// Boolean
let isNumber = true;
console.log(isNumber);
console.log(typeof isNumber);

// Undefined
let empty;
console.log(empty);
console.log(typeof empty);

// Null
let No = null;
console.log(No);
console.log(typeof No); // Note: typeof null is 'object'

// BigInt
let x = BigInt("123");
console.log(x);
console.log(typeof x);

// Symbol
let y = Symbol('hello');
console.log(y);
console.log(typeof y);

// Object
const student = {
    name: 'Tauseef Akhtar Yusufzai',
    age: 22,
    course: 'b.tech',
    year: '4th Year'
};
console.log(student);
console.log(typeof student);
console.log(student["age"]);

// Modify object property
student['name'] = 'Supriya Pandey';
console.log(student);
console.log(student['name']);

// Practice objects
const product = {
    productType: 'Pen',
    Name: 'Parker jotter standard CT ball pen',
    color: 'Black',
    MRP: 295,
    offer: '5%',
    dealOfTheDay: 270
};
console.log(product);

const profile = {
    username: '@tauseef_yusufzai_',
    name: 'Tauseef Akhtar Yusufzai',
    bio: "Sometime being introverted is the best way to enjoy yourself",
    follower: 256,
    following: 750,
    mutualFollowing: 'itsme_twinkle_003'
};
console.log(profile);
console.log(profile['follower']);
console.log(typeof profile['name']);

const Tauseef = {
    fullName: 'Tauseef Akhtar Yusufzai',
    gender: 'Male',
    dob: '7/12/2002',
    bestFriend: 'Supriya Pandey',
    course: 'B.tech',
    branch: 'CSE',
    year: '4th'
};
console.log(Tauseef);
console.log(Tauseef['bestFriend']);
console.log(Tauseef['dob']);
