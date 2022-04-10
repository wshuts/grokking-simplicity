const lodash = require('lodash');
const objectLibrary = require('./objectLibrary');


const functions = {
    modifyEmailToLowercase: modifyEmailToLowercase
}

function modifyEmailToLowercase(user) {
    return update(user, 'email', lowercase);
}

function lowercase(email) {
    return lodash.toLower(email);
}

function update(object, key, modifier) {
    var value = object[key];
    var modifiedValue = modifier(value);
    return objectLibrary.objectSet(object, key, modifiedValue);
}

module.exports = functions;