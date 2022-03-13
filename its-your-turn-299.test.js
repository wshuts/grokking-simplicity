const functions = require('./its-your-turn-299');

const customer001 = {firstName: 'Bob', lastName: 'Smith', address: '123 Main Street'};

const address001 = {firstName: 'Bob', lastName: 'Smith', address: '123 Main Street'};

test('create one address object from one customer object', () => {
  expect(functions.createAddressFrom(customer001))
  .toStrictEqual(address001);
});
