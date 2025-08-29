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
  };
};

// for testing in node.js
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};