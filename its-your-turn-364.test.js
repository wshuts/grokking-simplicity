const functions = require('./its-your-turn-364.js');

const userWithUpperCaseEmail = {
    firstName: 'Joe',
    lastName: 'Nash',
    email: 'JOE@EXAMPLE.COM'
};

const userWithLowerCaseEmail = {
    firstName: 'Joe',
    lastName: 'Nash',
    email: 'joe@example.com'
};

test("user email to lowercase", () => {
    expect(functions.emailToLowercase(userWithUpperCaseEmail))
    .toStrictEqual(userWithLowerCaseEmail);
});

const item = {
    name: 'shoes',
    price: 7,
    quantity: 2
};

const itemWithtenXQuantity = {
    name: 'shoes',
    price: 7,
    quantity: 20
};

test("item quantity to 10x", () => {
    expect(functions.tenXQuantity(item))
    .toStrictEqual(itemWithtenXQuantity);
});

const user = {
    firstName: 'Cindy',
    lastName: 'Sullivan',
    email: 'cindy@randomemail.com',
    score: 15,
    logins: 3
};

const userWithUpdatedScore = {
    firstName: 'Cindy',
    lastName: 'Sullivan',
    email: 'cindy@randomemail.com',
    score: 16,
    logins: 3
};

test("user score incremented", () => {
    expect(functions.incrementScore(user))
    .toStrictEqual(userWithUpdatedScore);
});

const userWithUpdatedLogins = {
    firstName: 'Cindy',
    lastName: 'Sullivan',
    email: 'cindy@randomemail.com',
    score: 15,
    logins: 2
};

test("user logins decremented", () => {
    expect(functions.decrementLogins(user))
    .toStrictEqual(userWithUpdatedLogins);
});

const userWithUpdatedFirstName = {
    firstName: 'CINDY',
    lastName: 'Sullivan',
    email: 'cindy@randomemail.com',
    score: 15,
    logins: 3
};

test("user firstName to upper case", () => {
    expect(functions.firstNameToUppercase(user))
    .toStrictEqual(userWithUpdatedFirstName);
});