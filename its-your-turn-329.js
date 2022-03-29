const arrayLibrary = require('./arrayLibrary');

const functions = {
    average: average
}

function average(numbers) {
    var sum = arrayLibrary.reduce(numbers, 0, (sum, number) => sum + number);
    return sum / numbers.length;
}

module.exports = functions;