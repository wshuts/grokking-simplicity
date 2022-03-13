const objectLibrary = require('./objectLibrary');

const functions = {
  createAddressFrom: createAddressFrom
};

function createAddressFrom(customer) {
  var address = {};
  address = objectLibrary.objectSet(address, 'firstName', customer.firstName);
  address = objectLibrary.objectSet(address, 'lastName', customer.lastName);
  address = objectLibrary.objectSet(address, 'address', customer.address);
  return address;
}

module.exports = functions;
