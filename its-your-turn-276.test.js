const functions = require('./its-your-turn-276');

const sendEmail = jest.fn();
const logToSnapErrors = jest.fn();

const exception = function() {
  throw 'Error!';
  };

const tryTestSequence = function() {
  functions.tryCatch(sendEmail, logToSnapErrors);
  var mock = sendEmail.mock;
  var calls = mock.calls;
  var timesCalled = calls.length;
  return timesCalled;
};

const catchTestSequence = function() {
  functions.tryCatch(exception, logToSnapErrors);
  var mock = logToSnapErrors.mock;
  var calls = mock.calls;
  var timesCalled = calls.length;
  return timesCalled;
};

test('try calls sendEmail', () => {
    expect(tryTestSequence())
    .toBe(1);
});

test('catch calls logToSnapErrors', () => {
    expect(catchTestSequence())
    .toBe(1);
});
