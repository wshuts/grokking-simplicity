const functions = require('./its-your-turn-351.js');

const employeeNames = [
    'Drusilla',
    'Micah',
    'Charlie',
    'Marco',
    'Paula',
    'Raoul',
    'Luigi',
    'Daniela',
    'Rupert',
    'Monica',
    'Bernie',
    'Quinn'
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
    expect(functions.buildRoster(employeeNames))
    .toStrictEqual(roster);
});