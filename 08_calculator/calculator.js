const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, cur) => total += cur, 0);
};

const multiply = function(array) {
  return array.reduce((total, cur) => total *= cur, 1);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if (!n) return 1;

  return n * factorial(n-1);
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
