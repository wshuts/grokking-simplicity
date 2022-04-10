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