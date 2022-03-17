const arrayLibrary = require('./arrayLibrary');

const functions = {
  sum: sum,
  product: product
};

function sum(numbers) {
  return reduce(numbers, 0, function(currentSum, nextNumber) {
    return currentSum + nextNumber;
  });
}

function product(numbers) {
  return reduce(numbers, 1, function(currentProduct, nextNumber) {
    return currentProduct * nextNumber;
  });
}

function reduce(array, initialValue, accumulationProcedure) {
  var accumulator = initialValue;
  arrayLibrary.forEach(array, function(element) {
    accumulator = accumulationProcedure(accumulator, element);
    });
  return accumulator; 
}

module.exports = functions;