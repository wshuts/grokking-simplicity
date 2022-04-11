const objectLibrary = require('./objectLibrary');

const functions = {
    update: update,
    update2: update2,
    update3: update3,
    update4: update4,
    update5: update5
}

function update5(object, key1, key2, key3, key4, key5, modifier) {
    return update(object, key1, function(value) {
        return update4(value, key2, key3, key4, key5, modifier);
    });
}

function update4(object, key1, key2, key3, key4, modifier) {
    return update(object, key1, function(value) {
        return update3(value, key2, key3, key4, modifier);
    });
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