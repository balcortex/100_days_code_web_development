const buttons = document.querySelectorAll("button");
const screen = document.querySelector('#screen');
let numMemory = '0'; // Memory to store the previous number before an operation
let numCurrent = '0'; // Variable to store the current number on screen

buttons.forEach((button) =>
  button.addEventListener("click", handleButton)
);

function handleButton(e) {
  const [, type, value] = e.target.id.split('-');
  // the first part of the id is `button`, we do not need that
  // type -> `num`, `op`, `eq`, ...
  // value -> the actual value of the button (e.g., 7, 0, 8, etc.)

  switch (type) {
    case 'num':
      numCurrent += value; // append the pressed number to the right
      screen.innerText = +numCurrent; // delete left trailing zeros
      break;

    case 'op':
      numMemory = screen.innerText; // save to memory the number on screen
      numCurrent = '0'; // don't clear screen yet, just the current number
      break

    case 'eq':
      screen.innerText = +numMemory + +numCurrent; // just testing the sum
      break;
  }
}