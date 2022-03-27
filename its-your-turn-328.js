const arrayLibrary = require('./arrayLibrary');

const functions = {
  bigSpenders: bigSpenders
};

function bigSpenders(customers) {
    var customersWithLargePurchases = arrayLibrary.filter(customers, hasLargePurchase);
    return arrayLibrary.filter(customersWithLargePurchases, hasMultiplePurchases);
}

function hasLargePurchase(customer) {
    var purchases = customer.purchases;
    var largestPurchase = arrayLibrary.maxKey(purchases, {total: 0}, purchase => purchase.total);
    return largestPurchase.total > 100;
}

function hasMultiplePurchases(customer) {
    return customer.purchases.length >= 2;
}

module.exports = functions;