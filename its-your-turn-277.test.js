const functions = require('./its-your-turn-277');

test('log empty array', () => {
    expect(functions.logEmptyArray([]));
});

var item = {name: 'shoes', price: 99};
var cartWithShoes = {shoes: item};


test('give free shoes', () => {
    expect(functions.giveShoesForFree(cartWithShoes))
    .toStrictEqual(cartWithShoes);
});