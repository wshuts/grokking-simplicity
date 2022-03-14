const arrayLibrary = require('./arrayLibrary');

const functions = {
  createTestGroup: createTestGroup,
  createNonTestGroup: createNonTestGroup
};

function createTestGroup(customers) {
  return filter(customers, function(customer) {
    return customer.id % 3 === 0;
  });
}

function createNonTestGroup(customers) {
  return filter(customers, function(customer) {
    return customer.id % 3 !== 0;
  });
}

function filter(array, predicate) {
  var arrayCopy = [];
  arrayLibrary.forEach(array, function(element) {
    if(predicate(element)) arrayCopy.push(element);
    });
  return arrayCopy; 
}

module.exports = functions;

