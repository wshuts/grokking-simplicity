const arrayLibrary = require('./arrayLibrary');

const functions = {
    shoesAndSocksInventory: shoesAndSocksInventory
}

function shoesAndSocksInventory(products) {
    var shoesAndSocks = arrayLibrary.filter(products, isShoesOrSocks);
    return arrayLibrary.reduce(shoesAndSocks, 0, addProductCountToRunningTotal);
}

function isShoesOrSocks(product) {
    return product.type === 'shoes' || product.type === 'socks';
}

function addProductCountToRunningTotal(runningTotal, product) {
    return runningTotal + product.numberInInventory;
}

module.exports = functions;