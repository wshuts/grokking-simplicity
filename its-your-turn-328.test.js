const functions = require('./its-your-turn-328.js');

const purchase00 = {total: 0};
const purchase01 = {total: 10};
const purchase02 = {total: 20};
const purchase03 = {total: 30};
const purchase04 = {total: 110};

const customer01 = {purchases: [purchase01, purchase02, purchase03]};
const customer02 = {purchases: [purchase04]};
const customer03 = {purchases: [purchase01, purchase04]};

const customers = [customer01, customer02, customer03];

test('find customers who are big spenders', () => {
    expect(functions.bigSpenders(customers))
    .toStrictEqual([customer03]);
});



