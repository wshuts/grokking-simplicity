const functions = require('./its-your-turn-276');

const sendEmail = jest.fn();
const logToSnapErrors = jest.fn();

const tryTestSequence = function() {
  functions.tryCatch(sendEmail, logToSnapErrors);
  var mock = sendEmail.mock;
  var calls = mock.calls;
  var timesCalled = calls.length;
  return timesCalled;
};

test('try calls sendEmail', () => {
    expect(tryTestSequence())
    .toBe(1);
});

