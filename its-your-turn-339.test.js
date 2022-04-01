const functions = require('./its-your-turn-339.js');

const product01 = {type: 'shoes', numberInInventory: 19};
const product02 = {type: 'socks', numberInInventory: 50};
const product03 = {type: 'socks', numberInInventory: 30};
const product04 = {type: 'sweaters', numberInInventory: 40};

const products = [product01, product02, product03, product04];

test("take inventory for shoes and socks", () => {
    expect(functions.shoesAndSocksInventory(products))
    .toStrictEqual(99);
});



