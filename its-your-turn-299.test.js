const functions = require('./its-your-turn-299');

const customer001 = {firstName: 'Bob', lastName: 'Smith', address: '123 Main Street'};
const customer002 = {firstName: 'Jane', lastName: 'Jones', address: '456 Main Street'};

const address001 = {firstName: 'Bob', lastName: 'Smith', address: '123 Main Street'};
const address002 = {firstName: 'Jane', lastName: 'Jones', address: '456 Main Street'};

const customers = [customer001, customer002];
const addresses = [address001, address002];


test('create one address object from one customer object', () => {
  expect(functions.createAddressFrom(customer001))
  .toStrictEqual(address001);
});

test('create array of address objects from array of customer objects', () => {
  expect(functions.map(customers, functions.createAddressFrom))
  .toStrictEqual(addresses);
});