const functions = require('./its-your-turn-154');

test('defensive-copy', () => {
    expect(functions.payrollCalcSafe([])).toStrictEqual([]);
});

