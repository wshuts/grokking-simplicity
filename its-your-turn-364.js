const lodash = require('lodash');
const objectLibrary = require('./objectLibrary');


const functions = {
    emailToLowercase: emailToLowercase,
    tenXQuantity: tenXQuantity,
    incrementScore: incrementScore,
    decrementLogins: decrementLogins,
    firstNameToUppercase: firstNameToUppercase
}

function emailToLowercase(user) {
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

function incrementScore(user) {
    return update(user, 'score', increment);
}

function increment(score) {
    return score + 1;
}

function decrementLogins(user) {
    return update(user, 'logins', decrement);
}

function decrement(logins) {
    return logins - 1;
}

function firstNameToUppercase(user) {
    return update(user, 'firstName', uppercase);
}

function uppercase(firstName) {
    return lodash.toUpper(firstName);
}

function update(object, key, modifier) {
    var value = object[key];
    var modifiedValue = modifier(value);
    return objectLibrary.objectSet(object, key, modifiedValue);
}

module.exports = functions;