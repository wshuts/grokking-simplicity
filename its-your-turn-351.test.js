const functions = require('./its-your-turn-351.js');

const employeeNames = [
    'Raoul',
    'Luigi',
    'Quinn',
    'Drusilla',
    'Micah',
    'Charlie',
    'Marco',
    'Paula',
    'Daniela',
    'Rupert',
    'Monica',
    'Bernie'
];

const roster = {
    'pitcher': 'Charlie',
    'catcher': 'Bernie',
    'first base': 'Marco',
    'second base': 'Rupert',
    'third base': 'Drusilla',
    'short stop': 'Paula',
    'left field': 'Monica',
    'center field': 'Micah',
    'right field': 'Daniela'
};

test("employeeNames to roster", () => {
    expect(functions.buildCompanyRoster(employeeNames))
    .toStrictEqual(roster);
});