// // The window object contains many properties and methods related to the browser
// console.log(window); // Print the window object
// console.dir(window.document); // Print the document object in a more detailed format
// console.log(window.document); // Print the document object
// console.log(document.body); // Print the body element of the document




// // Function to change the background color to black
// function dark() {
//     document.body.style.backgroundColor = "black";
// }



// // DOM (Document Object Model) - Methods to get elements

// // Get element by ID
// document.getElementById("value");

// // Get elements by class name
// document.getElementsByClassName("class name");

// // Get elements by tag name
// document.getElementsByTagName("tag name");

// // Get the first element that matches the selector
// document.querySelector("#id, tag, .class");

// // Get all elements that match the selector
// document.querySelectorAll("#id, tag, .class");

// // Print the first child of the body element
// console.dir(document.body.firstChild);

// // tagName returns the tag name of the element node
// // innerText returns the text content of the element and all its children
// console.dir(document.body.innerText);

// // innerHTML returns the plain text or HTML content in the element
// console.dir(document.body.innerHTML);

// // textContent returns the textual content even for hidden elements

// // Get an element by ID and change its inner text
// let heading = document.getElementById("head");
// console.log(heading.innerText = "Supriya Pandey");




// // Practice

// // Get the first <h2> element and append text to it
// let heading = document.querySelector("h2");
// heading.append(" From Gorakhpur");


// // Get all elements with the class name "box"
// let division = document.querySelectorAll(".box");
// console.log(division[2]); // Print the third element with class "box"


// // Change the inner text of the second element with class "box"
// division[1].innerText = "Tauseef";


// // Loop through all elements with class "box" and change their inner text
// let i = 0;
// for (let divs of division) {
//     divs.innerText = `new unique value ${i}`;
//     i++;
// }


// // Get the first <div> element
// let div = document.querySelector("div");
// console.log(div);


// // Get the value of the "id" attribute of the <div> element
// let id = div.getAttribute("id");
// console.log(id);


// // Get the value of the "name" attribute of the <div> element
// let name = div.getAttribute("name");
// console.log(name);


// // Set a new "id" attribute for the <div> element
// console.log(div.setAttribute("id", "tauseef"));


// // Change the style of the <div> element
// div.style.backgroundColor = "red";
// div.style.fontSize = "6rem";
// div.style.color = "white";


// // Create a new <button> element
// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// console.log(newbtn);


// // Append the button inside the <div> element
// div.append(newbtn); // Add inside after
// // div.prepend(newbtn); // Add inside before
// // div.before(newbtn); // Add outside before
// // div.after(newbtn); // Add outside after
// // div.remove(newbtn); // Remove the element


// // Create a new <h1> element
// let newHeading = document.createElement("h1");
// newHeading.innerText = "Tauseef Akhtar";
// div.before(newHeading); // Add the heading before the <div> element
// newHeading.style.color = "blue";
// newHeading.style.paddingLeft = "100px";
// newHeading.style.fontStyle = "italic";




// // Practice

// // Create a new <button> element with styles
// let btn = document.createElement("button");
// btn.innerText = "click me!";
// btn.style.color = "white";
// btn.style.backgroundColor = "red";
// btn.style.padding = "10px";
// btn.style.borderRadius = "40px";
// btn.style.border = "none";
// btn.style.width = "50%";
// btn.style.fontSize = "2rem";
// document.querySelector("body").prepend(btn); // Add the button to the beginning of the body



// // Get the first <p> element and set its attributes and styles
// let pTag = document.querySelector("p");
// pTag.setAttribute("class", "pTagn");
// pTag.style.marginTop = "50px";
// pTag.style.color = "grey";
// pTag.style.fontSize = "2rem";
