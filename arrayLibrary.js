const arrayLibrary = {
  forEach: forEach,
  map: map,
  filter: filter,
  reduce: reduce
};

function forEach(array, procedure) {
  for(var i = 0; i < array.length; i++) {
    var item = array[i];
    procedure(item);
  }
}

function map(array, transform) {
  var newArray = [];
  forEach(array, function(element) {
    newArray.push(transform(element));
  });
  return newArray; 
}

function filter(array, predicate) {
  var arrayCopy = [];
  arrayLibrary.forEach(array, function(element) {
    if(predicate(element)) arrayCopy.push(element);
    });
  return arrayCopy; 
}

function reduce(array, initialValue, accumulationProcedure) {
  var accumulator = initialValue;
  arrayLibrary.forEach(array, function(element) {
    accumulator = accumulationProcedure(accumulator, element);
    });
  return accumulator; 
}

module.exports = arrayLibrary;
