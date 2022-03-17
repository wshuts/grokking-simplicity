const functions = require('./its-your-turn-310');

test('return Number.MAX_VALUE if array is empty', () => {
  expect(functions.min([]))
  .toStrictEqual(Number.MAX_VALUE);
});

test('return Number.MIN_VALUE if array is empty', () => {
  expect(functions.max([]))
  .toStrictEqual(Number.MIN_VALUE);
});