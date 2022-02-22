const functions = require('./its-your-turn-154');

test('defensive-copy', () => {
    expect(functions.payrollCalcSafe([])).toStrictEqual([]);
});

test('defensive-copy for a registering a callback', () => {
    expect(functions.subscribeSafe()).toStrictEqual();
});