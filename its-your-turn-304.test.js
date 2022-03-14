const functions = require('./its-your-turn-304');

const customer000 = {id: 0};
const customer001 = {id: 1};
const customer002 = {id: 2};

const customers = [customer000, customer001, customer002];

const testGroup = [customer000];
const nonTestGroup = [customer001, customer002];

test('filter customer list into a test group', () => {
  expect(functions.createTestGroup(customers))
  .toStrictEqual(testGroup);
});

test('filter customer list into not part of the test group', () => {
  expect(functions.createNonTestGroup(customers))
  .toStrictEqual(nonTestGroup);
});

