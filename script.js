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
const sqrt = function (a) {
  let root = Math.sqrt(a);
  return root;
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

function squareRoot(a) {
  return sqrt(a);
};

function clearDisplay() {
  displayText.textContent = "";
};

function updateDisplay(content) {
  displayText.textContent += content;
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

let a = '';
let b = '';
let operator = '';

sqrtButton.addEventListener("click", () => {
  a = displayText.textContent;
  clearDisplay();
  console.log(a);
  displayText.textContent = squareRoot(Number(a));
});

clearButton.addEventListener("click", () => {
  displayText.textContent = "";
  a = ""
  b = ""
  operator = ''
});

equalButton.addEventListener("click", () => {
  b = displayText.textContent;
  clearDisplay();
  displayText.textContent = operate(Number(a), operator, Number(b));
  clearVariables();
});


for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", () => {
    const value = numberButton.value;
    updateDisplay(value);
  });
};

for (const operatorButton of operatorButtons) {
  operatorButton.addEventListener("click", () => {
    if (operatorButton.value === "-" && displayText.textContent === "") {
        displayText.textContent = "-";
    } else if (a === "") { //starting fresh, nothing clicked
      a = displayText.textContent;
      clearDisplay();
      operator = operatorButton.value;
    } else { //if you are trying to add more than two numbers
      b = displayText.textContent
      clearDisplay();
      a = operate(Number(a), operator, Number(b)); //stores the outcome of the first operation, so when you perform another operation you can then click equals to get a 'final' answer
    }
  });
};






// for testing in node.js
/*module.exports = {
  add,
  subtract,
  multiply,
  divide,
};*/