const objectLibrary = require('./objectLibrary');

const functions = {
    incrementSizeByName: incrementSizeByName
}

function incrementSizeByName(cart, name) {
    var keys = [name, 'options', 'size'];
    return nestedUpdateVisualizeCallStack(cart, keys, size => size + 1);
}

function nestedUpdateVisualizeCallStack(parentObject, keyPathArray, valueModifier) {
    var nestedObject1 = parentObject[keyPathArray[0]];
    var nestedObject2 = nestedObject1[keyPathArray[1]];
    var value3 = nestedObject2[keyPathArray[2]];
    var newValue3 = valueModifier(value3);
    var newNestedObject2 = objectLibrary.objectSet(nestedObject2, keyPathArray[2], newValue3);
    var newNestedObject1 = objectLibrary.objectSet(nestedObject1, keyPathArray[1], newNestedObject2);
    return objectLibrary.objectSet(parentObject, keyPathArray[0], newNestedObject1);
}

module.exports = functions;