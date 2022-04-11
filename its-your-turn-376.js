const objectLibrary = require('./objectLibrary');

const functions = {
    update: update,
    update2: update2,
    update3: update3
}

function update3(object, key1, key2, key3, modifier) {
    return update(object, key1, function(value) {
        return update2(value, key2, key3, modifier);
    });
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