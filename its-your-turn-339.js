const arrayLibrary = require('./arrayLibrary');

const functions = {
    shoesAndSocksInventory: shoesAndSocksInventory
}

function shoesAndSocksInventory(products) {
    var inventory = 0;
    for (var p = 0; p < products.length; p++) {
        var product = products[p];
        if (product.type === 'shoes' || product.type === 'socks') {
            inventory += product.numberInInventory;
        }
    }
    return inventory;
}

module.exports = functions;