const arrayLibrary = require('./arrayLibrary');

const functions = {
  min: min,
  max: max
};

function min(numbers) {
  return arrayLibrary.reduce(numbers, Number.MAX_VALUE, function(currentMin, nextNumber) {
    return currentMin < nextNumber ? currentMin : nextNumber;
  });
}

function max(numbers) {
  return arrayLibrary.reduce(numbers, Number.MIN_VALUE, function(currentMax, nextNumber) {
    return currentMax > nextNumber ? currentMax : nextNumber;
  });
}

module.exports = functions;