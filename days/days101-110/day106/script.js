const buttons = document.querySelectorAll("button");
const screen = document.querySelector('#screen');
let numMemory = '0'; // Memory to store the previous number before an operation

buttons.forEach((button) =>
  button.addEventListener("click", handleButton)
);

function handleButton(e) {
  const [, type, value] = e.target.id.split('-');
  // the first part of the id is `button`, we do not need that
  // type -> `num`, `op`, 
  // value -> the actual value of the button (e.g., 7, 0, 8, etc.)

  switch (type) {
    case 'num':
      screen.innerText += value; // append the pressed number to the right
      screen.innerText = +screen.innerText; // delete left trailing zeros
      break;

    case 'op':
      numMemory = screen.innerText; // save to memory the number on screen
      screen.innerText = '0'; // clear screen
      break

    case 'eq':
      screen.innerText = +numMemory + +screen.innerText; // just testing the sum
      break;
  }
}