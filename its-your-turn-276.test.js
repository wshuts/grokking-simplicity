const functions = require('./its-your-turn-276');

const sendEmail = jest.fn();
const logToSnapErrors = jest.fn();

functions.tryCatch(sendEmail, logToSnapErrors);

test('try calls sendEmail', () => {
    expect(sendEmail.mock.calls.length)
    .toBe(1);
});

