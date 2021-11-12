// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
var input = document.getElementById("userInput1");
var output = document.getElementById("output");
var button = document.getElementById("copy");
// add an event listener on the target element
button.addEventListener("click", buttonClick);

// callback function to handle event
function buttonClick(event) {
  console.log("click event", event);
  output.textContent = input.value;
}
// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let input2 = document.getElementById("userInput2");
let output2 = document.createElement("div");
// add an event listener on the target element
input2.addEventListener("input", buttonEnter);

// callback function to handle event
function buttonEnter(event) {
  console.log("click enter", event);
  output2.textContent = input2.value;
  document.body.append(output2);
}
