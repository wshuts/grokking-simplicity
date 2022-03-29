const arrayLibrary = require('./arrayLibrary');

const functions = {
    average: average,
    averagePurchaseTotals: averagePurchaseTotals
}

function average(numbers) {
    var sum = arrayLibrary.reduce(numbers, 0, (sum, number) => sum + number);
    return sum / numbers.length;
}

function averagePurchaseTotals(customers) {
    var purchases = arrayLibrary.map(customers, getPurchases);
    return arrayLibrary.map(purchases, averageTotal);
}

function getPurchases(customer) {
    return customer.purchases;
}

function averageTotal(purchases) {
    return arrayLibrary.reduce(purchases, 0, (sum, purchase) => sum + purchase.total) / purchases.length;
}

module.exports = functions;