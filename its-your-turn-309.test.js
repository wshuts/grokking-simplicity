const functions = require('./its-your-turn-309');

const numbers = [9, 6, 4, 88];

const sumResult = 107;
const productResult = 216 * 88;

test('sum using reduce for an array of numbers', () => {
  expect(functions.sum(numbers))
  .toStrictEqual(sumResult);
});

test('product using reduce for an array of numbers', () => {
  expect(functions.product(numbers))
  .toStrictEqual(productResult);
});