const arrayLibrary = require('./arrayLibrary');

const filterWithReduce = {
  createTestGroup: createTestGroup,
  createNonTestGroup: createNonTestGroup
};

function createTestGroup(customers) {
  return arrayLibrary.filterWithReduce(customers, function(customer) {
    return customer.id % 3 === 0;
  });
}

function createNonTestGroup(customers) {
  return arrayLibrary.filterWithReduce(customers, function(customer) {
    return customer.id % 3 !== 0;
  });
}

module.exports = filterWithReduce;

