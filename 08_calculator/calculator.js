const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce(adder, 0);
};

function adder(accumulator, a) {
  return accumulator + a;
}


const multiply = function(numbers) {
  return numbers.reduce(multiplier, 1);
};

function multiplier(accumulator, a) {
  return accumulator * a;
};

const power = function(a, exp) {
	let expArray = [];
  for (let i = 0; i < exp; i++) {
    expArray.push(a);
  };
  return expArray.reduce(multiplier, 1);
};

const factorial = function(a) {
	let factArray = [];
  for (let i = 1; i <= a; i++) {
    factArray.push(i);
  };
  return factArray.reduce(multiplier, 1);
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
