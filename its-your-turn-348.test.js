const functions = require('./its-your-turn-348.js');

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

test("build a roster", () => {
    expect(functions.buildRoster(evaluations))
    .toStrictEqual(roster);
});



