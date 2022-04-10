const objectLibrary = require('./objectLibrary');

const functions = {
    update: update,
    update2: update2
}

function update2(object, key1, key2, modifier) {
    return update(object, key1, function(value) {
        return update(value, key2, modifier);
    });
}

function update(object, key, modifier) {
    var value = object[key];
    var modifiedValue = modifier(value);
    return objectLibrary.objectSet(object, key, modifiedValue);
}

module.exports = functions;