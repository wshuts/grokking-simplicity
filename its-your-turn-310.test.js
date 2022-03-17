const functions = require('./its-your-turn-310');

test('return Number.MAX_VALUE if array is empty', () => {
  expect(functions.min([]))
  .toStrictEqual(Number.MAX_VALUE);
});

test('return Number.MIN_VALUE if array is empty', () => {
  expect(functions.max([]))
  .toStrictEqual(Number.MIN_VALUE);
});

test('return min for array of numbers', () => {
    expect(functions.min([9, 2, 5, 6, -1, 8, 3]))
    .toStrictEqual(-1);
  });
  
  test('return max for array of numbers', () => {
    expect(functions.max([0, 2, 5, 6, -1, 88, 3]))
    .toStrictEqual(88);
  });