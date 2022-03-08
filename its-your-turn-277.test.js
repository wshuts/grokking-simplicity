const functions = require('./its-your-turn-277');

test('log empty array', () => {
    expect(functions.logEmptyArray([]));
});

const itemBefore = {name: 'shoes', price: 99};
const itemAfter = {name: 'shoes', price: 0};
const anotherItem = {name: 'shirt', price: 57}

const cartWithShoes = {shoes: itemBefore};
const cartWithFreeShoes = {shoes: itemAfter};
const cartWithoutShoes = {shirt: anotherItem}

test('give free shoes', () => {
    expect(functions.giveShoesForFree(cartWithShoes))
    .toStrictEqual(cartWithFreeShoes);
});

test('give free shoes improved', () => {
    expect(functions.giveShoesForFreeImproved(cartWithoutShoes))
    .toStrictEqual(cartWithoutShoes);
});