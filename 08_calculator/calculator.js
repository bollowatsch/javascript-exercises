const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

const multiply = function (arr) {
  let product = 1;
  for (let num of arr) {
    product *= num;
  }
  return product;
};

const power = function (base, exp) {
  let pow = base;
  while (exp > 1) {
    pow *= base;
    exp--;
  }
  return pow;
};

const factorial = function (num) {
  let factorial = 1;
  while (num > 1) {
    factorial *= num;
    num--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
