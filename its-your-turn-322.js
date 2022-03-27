const arrayLibrary = require('./arrayLibrary');

const functions = {
  max: max,
  maxKey: maxKey
};

function max(numbers) {
    return maxKey(numbers, Number.MIN_VALUE, x => x);
}

function maxKey(array, minElement, keySelector) {
    return arrayLibrary.reduce(array, minElement, function(maxElement, element){
        return keySelector(maxElement) > keySelector(element) ? maxElement : element;
    });
}

module.exports = functions;