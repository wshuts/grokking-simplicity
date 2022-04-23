const arrayLibrary = {
  forEach: forEach,
  map: map,
  filter: filter,
  reduce: reduce,
  mapWithReduce: mapWithReduce,
  filterWithReduce: filterWithReduce,
  maxKey: maxKey,
  drop_first: drop_first
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
  var newArray = [];
  arrayLibrary.forEach(array, function(element) {
    if(predicate(element)) newArray.push(element);
    });
  return newArray; 
}

function reduce(array, initialValue, accumulationProcedure) {
  var accumulator = initialValue;
  arrayLibrary.forEach(array, function(element) {
    accumulator = accumulationProcedure(accumulator, element);
    });
  return accumulator; 
}

function mapWithReduce(array, transform) {
  var newArray = [];
  return reduce(array, newArray, function(newArray, element) {
    newArray.push(transform(element));
    return newArray;
  });
}

function filterWithReduce(array, predicate) {
  var newArray = [];
  return reduce(array, newArray, function(newArray, element) {
    if(predicate(element)) newArray.push(element);
    return newArray;
  });
}

function maxKey(array, minElement, keySelector) {
  return arrayLibrary.reduce(array, minElement, function(maxElement, element){
      return keySelector(maxElement) > keySelector(element) ? maxElement : element;
  });
}

function drop_first(array) {
  return withArrayCopy(array, function(copy) {
    copy.shift();
  })
}

function withArrayCopy(array, modifier) {
  copy = array.slice();
  modifier(copy);
  return copy;
}

module.exports = arrayLibrary;
