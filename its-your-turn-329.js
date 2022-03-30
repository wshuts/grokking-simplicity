const arrayLibrary = require('./arrayLibrary');

const functions = {
    average: average,
    allAveragePurchaseTotals: allAveragePurchaseTotals
}

function average(numbers) {
    var sum = arrayLibrary.reduce(numbers, 0, (sum, number) => sum + number);
    return sum / numbers.length;
}

function allAveragePurchaseTotals(customers) {
    return arrayLibrary.map(customers, averagePurchaseTotals);
}

function getTotal(purchase) {
    return purchase.total;
}

function averagePurchaseTotals(customer) {
    var purchaseTotals = arrayLibrary.map(customer.purchases, getTotal);
    return average(purchaseTotals);
}

module.exports = functions;