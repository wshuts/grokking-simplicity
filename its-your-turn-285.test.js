const functions = require('./its-your-turn-285');

var procedureWithErrorMock = jest.fn(functions.procedureWithError);

test('throws error', () => {
  expect(() => procedureWithErrorMock(0, 2, 3))
  .toThrow('Error!');
});