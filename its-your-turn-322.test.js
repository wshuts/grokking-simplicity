const functions = require('./its-your-turn-322.js');

const purchase00 = {total: 0};
const purchase01 = {total: 10};
const purchase02 = {total: 20};
const purchase03 = {total: 30};

const customer = {purchases: [purchase01, purchase02, purchase03]};

test('find biggest purchase using maxKey', () => {
    expect(functions.maxKey(customer.purchases, purchase00, purchase => purchase.total))
    .toStrictEqual(purchase03);
});

