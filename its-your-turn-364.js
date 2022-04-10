const lodash = require('lodash');
const objectLibrary = require('./objectLibrary');


const functions = {
    modifyEmailToLowercase: modifyEmailToLowercase,
    tenXQuantity: tenXQuantity
}

function modifyEmailToLowercase(user) {
    return update(user, 'email', lowercase);
}

function lowercase(email) {
    return lodash.toLower(email);
}

function tenXQuantity(item) {
    return update(item, 'quantity', tenX);
}

function tenX(quantity) {
    return quantity * 10;
}

function update(object, key, modifier) {
    var value = object[key];
    var modifiedValue = modifier(value);
    return objectLibrary.objectSet(object, key, modifiedValue);
}

module.exports = functions;