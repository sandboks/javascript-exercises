const add = function() {
	let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	
	return array.reduce((product, i) =>  product + i, 0);
};

const multiply = function(array) {
	return array.reduce((product, i) =>  product * i)
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  let f = 1;
  while (n > 0) {
    f *= n;
    n--;
  }
  return f;
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
