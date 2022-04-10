const functions = require('./its-your-turn-364.js');

const userWithUppercaseEmail = {
    firstName: 'Joe',
    lastName: 'Nash',
    email: 'JOE@EXAMPLE.COM'
};

const userWithLowercaseEmail = {
    firstName: 'Joe',
    lastName: 'Nash',
    email: 'joe@example.com'
};

test("user email to lowercase", () => {
    expect(functions.modifyEmailToLowercase(userWithUppercaseEmail))
    .toStrictEqual(userWithLowercaseEmail);
});