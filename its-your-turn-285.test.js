const functions = require('./its-your-turn-285');

var throwsErrorTestSequence = () => {
  
  var procedureWithErrorMock = jest.fn(functions.procedureWithError);
  
  return procedureWithErrorMock(0, 2, 3);
  
};

test('throws error', () => {
  expect(throwsErrorTestSequence)
  .toThrow('Error!');
});

var numOfArgsTestSequence = () => {
  
  var procedureWithErrorMock = jest.fn(functions.procedureWithError);
  
  procedureWithErrorMock(1, 2, 3);
  
  var mockState = procedureWithErrorMock.mock;
  var mockCalls = mockState.calls;
  var firstMockCall = mockCalls[0];
  var numOfArgsForFirstMockCall = firstMockCall.length;
  return numOfArgsForFirstMockCall;
  
  };

test('number of args > 2', () => {
  expect(numOfArgsTestSequence())
  .toBeGreaterThan(2);
});