const functions = {
    objectSet: objectSet
};

function objectSet(object, key, value) {
    var object_copy = Object.assign({}, object);
    object_copy[key] = value;
    return object_copy;
}

module.exports = functions;