const cloneDeep = require('lodash.clonedeep');

const functions = {
    payrollCalcSafe: payrollCalcSafe,
    subscribeSafe: subscribeSafe
};

const userChanges = {
    subscribe: subscribe
};

function subscribe(userCallback){
  var user = {foo: 'Foo'};
  //add userCallback to the call stack
}

function payrollCalc(employees){
  return [];
}

function processUser(user){
}

function payrollCalcSafe(employees){
    var employees_copy = cloneDeep(employees);
    var payrollChecks = payrollCalc(employees_copy);
    return cloneDeep(payrollChecks);
}

function subscribeSafe(){
    userChanges.subscribe(function(user){
      var user_copy = cloneDeep(payrollChecks);
      processUser(user_copy);
    });   
}

module.exports = functions;