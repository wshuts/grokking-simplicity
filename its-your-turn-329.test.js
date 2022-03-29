const functions = require('./its-your-turn-329.js');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = 5.5;

test('Compute an average', () => {
    expect(functions.average(numbers))
    .toStrictEqual(average);
});

const purchase01 = {total: 10};
const purchase02 = {total: 20};
const purchase03 = {total: 30};
const purchase04 = {total: 110};

const customer01 = {purchases: [purchase01, purchase02, purchase03]};
const customer02 = {purchases: [purchase04]};
const customer03 = {purchases: [purchase01, purchase04]};

const customers = [customer01, customer02, customer03];

const averagePurchaseTotals = [20, 110, 60];

test('Compute the average purchase total for each customer', () => {
    expect(functions.averagePurchaseTotals(customers))
    .toStrictEqual(averagePurchaseTotals);
});



