const buttons = document.querySelectorAll("button");
const screen = document.querySelector('#screen');

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
      break;
  }
}