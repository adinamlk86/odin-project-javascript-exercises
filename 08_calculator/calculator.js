const add = function(...args) {
	let add = 0;
  for(let i = 0; i< args.length; i++){
    add = add + args[i];
  }

  return add;

};

const subtract = function(a, b) {
  return a-b;
	
};

const sum = function(array) {
  let sum = 0;

  for(let i = 0; i< array.length; i++){
    sum = sum + array[i];
  }

  return sum;
};

const multiply = function(array) {
  let total = 1;
  for(let i=0; i<array.length;i++){
    total = total * array[i];
  }
  return total;
};

const power = function(number, power) {
  let total = 1;
  while(power !=0){
    total = total * number;
    power--;
  }
  return total;
	
};

const factorial = function(number) {
  let total = 1;
  for(let i = 1; i<= number; i++){
    total = total * i;
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
