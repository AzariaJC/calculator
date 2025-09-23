const add = function (a, b) {
  let sum = a + b;
  return sum;
};
const subtract = function (a, b) {
  let difference = a - b;
  return difference;
};
const multiply = function (a, b) {
  let product = a * b;
  return product;
};
const divide = function (a, b) {
  let dividend = a / b;
  return dividend;
};

function operate(a, operator, b) {
  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtract(a, b);
  } else if (operator === '*') {
    return multiply(a, b);
  } else if (operator === '/') {
    return divide(a, b);
  } else {
    return "ERROR"
  };
};

clearButton.addEventListener("click", clearDisplay());

function clearDisplay() {
  displayText.textContent = "";
};

function updateDisplay(content) {
  displayText.textContent += content;
};

const displayText = document.getElementById('answerDisplay');
const numberButtons = document.getElementsByClassName('number');
const clearButton = document.querySelector('.clear');
const operatorButtons = document.getElementsByClassName('operator');
const equalButton = document.querySelector('.equal');
let a = '';
let b = '';
let operator = '';

for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", () => {
    const value = numberButton.value;
    updateDisplay(value);
  });
}

for (const operatorButton of operatorButtons) {
  operatorButton.addEventListener("click", () => {
    a = displayText.textContent;
    clearDisplay();
    operator = operatorButton.value;
  });
};






// for testing in node.js
/*module.exports = {
  add,
  subtract,
  multiply,
  divide,
};*/