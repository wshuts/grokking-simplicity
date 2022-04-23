const functions = require('./noodle-on-it-384.js');

const options1 = {color: 'blue', size: 3};
const shirt1 = {name: 'shirt', price: 13, options: options1};
const cart1 = {shirt: shirt1};

const name = 'shirt';

const options2 = {color: 'blue', size: 4};
const shirt2 = {name: 'shirt', price: 13, options: options2};
const cart2 = {shirt: shirt2};

test("increment size by name using nestedUpdate", () => {
    expect(functions.incrementSizeByName(cart1, name))
    .toStrictEqual(cart2);
});