const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sumValue = 0;
  for (let i=0; i<array.length; i++){
    sumValue += array[i];
  }
  return sumValue
};

const multiply = function(array) {
  let product = array[0];
  for (let i=1; i<array.length; i++){
    product *= array[i];
  } 
  return product;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(value) {
  if (value === 0){
    return 1;
  }
  
	let total = value;
  while (value > 1){
    value -= 1;
    total *= value;
  }
  return total;
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
