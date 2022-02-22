const functions = {
    payrollCalcSafe: payrollCalcSafe
};

function deepCopy(array){
  return [];
}

function payrollCalc(employees){
  return [];
}

function payrollCalcSafe(employees) {
    var employees_copy = deepCopy(employees);
    var payrollChecks = payrollCalc(employees_copy);
    return deepCopy(payrollChecks);
}

module.exports = functions;