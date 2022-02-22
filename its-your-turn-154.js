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

function deepCopy(array){
  return [];
}

function payrollCalc(employees){
  return [];
}

function processUser(user){
}

function payrollCalcSafe(employees){
    var employees_copy = deepCopy(employees);
    var payrollChecks = payrollCalc(employees_copy);
    return deepCopy(payrollChecks);
}

function subscribeSafe(){
    userChanges.subscribe(function(user){
      var user_copy = deepCopy(user);
      processUser(user_copy);
    });   
}

module.exports = functions;