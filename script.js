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
  let productRounded = roundToDecimal(product, 10);
  return productRounded;
};
const divide = function (a, b) {
  let dividend = a / b;
  let dividendRounded = roundToDecimal(dividend, 10);
  return dividendRounded;
};
const sqrt = function (a) {
  let root = Math.sqrt(a);
  let rootRounded = roundToDecimal(root, 10);
  return rootRounded;
};
const percentage = function (a) {
  let percent = (a / 100);
  let percentRounded = roundToDecimal(percent, 10);
  return percentRounded;
};

function roundToDecimal(num, decimalPlaces) {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(num * multiplier) / multiplier;
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

function getPercent(a) {
  return percentage(a)
};

function squareRoot(a) {
  return sqrt(a);
};

function clearInput() {
  input = "";
};

function updateInput(content) {
  input += content;
};

function clearVariables() {
  a = "";
  b = "";
  operator = "";
};

const displayText = document.getElementById('answerDisplay');
const numberButtons = document.getElementsByClassName('number');
const clearButton = document.querySelector('.clear');
const operatorButtons = document.getElementsByClassName('operator');
const equalButton = document.querySelector('.calculate');
const minusButton = document.querySelector('.operator.minus');
const sqrtButton = document.querySelector('.sqrt');
const percentButton = document.querySelector('.percent');
const decimalButton = document.querySelector('.decimal');

let a = '';
let b = '';
let operator = '';
let input = "";

percentButton.addEventListener("click", () => {
  a = input;
  clearInput();
  input = getPercent(Number(a));
  clearVariables();
});

sqrtButton.addEventListener("click", () => {
  a = input;
  clearInput();
  input = squareRoot(Number(a));
  clearVariables();
});

clearButton.addEventListener("click", () => {
  clearInput();
  clearVariables();
  displayText.textContent = input;
});

equalButton.addEventListener("click", () => {
  b = input;
  clearInput();
  input = operate(Number(a), operator, Number(b));
  displayText.textContent = input;
  clearVariables();
});

decimalButton.addEventListener("click", () => {
  const value = decimalButton.value;
  updateInput(value);
  displayText.textContent = input;
});

for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", () => {
    const value = numberButton.value;
    updateInput(value);
    displayText.textContent = input;
  });
};

for (const operatorButton of operatorButtons) {
  operatorButton.addEventListener("click", () => {
    if (operatorButton.value === "-" && input === "") {
      input = "-";
      displayText.textContent = input;
    } else if (a === "") {
      a = input;
      displayText.textContent = input;
      clearInput();
      operator = operatorButton.value;
    } else {
      b = input;
      displayText.textContent = input;
      clearInput();
      a = operate(Number(a), operator, Number(b));
      operator = operatorButton.value;
      b = "";
      displayText.textContent = a;
    };
  });
};






// for testing in node.js
/*module.exports = {
  add,
  subtract,
  multiply,
  divide,
};*/