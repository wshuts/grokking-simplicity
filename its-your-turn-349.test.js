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

const evaluations = [
    {name: 'Drusilla', position: 'third base', score: 120},
    {name: 'Micah', position: 'center field', score: 110},
    {name: 'Charlie', position: 'pitcher', score: 100},
    {name: 'Marco', position: 'first base', score: 90},
    {name: 'Paula', position: 'short stop', score: 80},
    {name: 'Raoul', position: 'pitcher', score: 70},
    {name: 'Luigi', position: 'first base', score: 60},
    {name: 'Daniela', position: 'right field', score: 50},
    {name: 'Rupert', position: 'second base', score: 40},
    {name: 'Monica', position: 'left field', score: 30},
    {name: 'Bernie', position: 'catcher', score: 20},
    {name: 'Quinn', position: 'short stop', score: 10}
];

test("recommendations to evaluations", () => {
    expect(functions.buildEvaluations(recommendations))
    .toStrictEqual(evaluations);
});