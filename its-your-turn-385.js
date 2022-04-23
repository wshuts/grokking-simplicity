const objectLibrary = require('./objectLibrary');

const functions = {
    incrementSizeByName: incrementSizeByName
}

function incrementSizeByName(cart, name) {
    var keys = [name, 'options', 'size'];
    return objectLibrary.nestedUpdate(cart, keys, size => size + 1);
}

module.exports = functions;