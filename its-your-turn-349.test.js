const functions = require('./its-your-turn-349.js');

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

const recommendations = [
    {name: 'Drusilla', position: 'third base'},
    {name: 'Micah', position: 'center field'},
    {name: 'Charlie', position: 'pitcher'},
    {name: 'Marco', position: 'first base'},
    {name: 'Paula', position: 'short stop'},
    {name: 'Raoul', position: 'pitcher'},
    {name: 'Luigi', position: 'first base'},
    {name: 'Daniela', position: 'right field'},
    {name: 'Rupert', position: 'second base'},
    {name: 'Monica', position: 'left field'},
    {name: 'Bernie', position: 'catcher'},
    {name: 'Quinn', position: 'short stop'}
];

test("names to recommendations", () => {
    expect(functions.buildRecommendations(employeeNames))
    .toStrictEqual(recommendations);
});



