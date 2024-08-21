// // Events in JavaScript
// // The change in the state of an object is known as an event
// // Events are fired to notify code of interesting changes that may affect code execution

// // Syntax for defining an event handler
// // Node.event = () => {
// //     // Do some work
// // }


// // Get the button element by its ID
// let newbtn = document.getElementById("btn3");

// // Function to change the button's style
// function btn() {
//     newbtn.style.transition = "0.5s"; // Add transition effect
//     newbtn.style.backgroundColor = "blue"; // Change background color
//     newbtn.style.padding = "50px"; // Change padding
//     newbtn.style.fontSize = "2rem"; // Change font size
// }

// // Function to handle mouse over event
// function btnover() {
//     // alert("Mouse over");
// }




// // Event listeners

// // Syntax for adding and removing event listeners
// // node.addEventListener(event, callback)
// // node.removeEventListener(event, callback)

// // Using event listener to perform actions on the same event multiple times

// // Add an event listener for the 'click' event
// newbtn.addEventListener("click", () => {
//     newbtn.style.backgroundColor = "black"; // Change background color
//     newbtn.style.color = "white"; // Change text color
// });

// // Define a handler function
// const handler = () => {
//     console.log("This is Handler");
// };


// // Add the handler function as an event listener for the 'click' event
// newbtn.addEventListener("click", handler);


// // Toggle button to change background color


// // Get the button element by its class name
// let modebtn = document.querySelector(".changeMode");
// let currMode = "light"; // Initialize current mode as 'light'


// // Add an event listener for the 'click' event
// modebtn.addEventListener("click", () => {
//     if (currMode == "light") {
//         currMode = "dark"; // Change mode to 'dark'
//     } else {
//         currMode = "light"; // Change mode to 'light'
//     }
//     console.log(currMode); // Print the current mode
// });



// // Get the body element
// let body = document.querySelector("body");
// body.style.transition = "0.5s"; // Add transition effect
// let curMode = (body.style.backgroundColor = "white"); // Initialize current mode as 'white'



// // Add an event listener for the 'click' event
// modebtn.addEventListener("click", () => {
//     if (curMode == (body.style.backgroundColor = "white")) {
//         curMode = (body.style.backgroundColor = "black"); // Change background color to black
//         modebtn.innerHTML = "Black mode"; // Change button text
//     } else {
//         curMode = (body.style.backgroundColor = "white"); // Change background color to white
//         modebtn.innerHTML = "White mode"; // Change button text
//     }
// });
