const lodash = require('lodash');
const arrayLibrary = require('./arrayLibrary');

const unsortedEvaluations = [
    {name: 'Drusilla', position: 'third base', score: 120},
    {name: 'Micah', position: 'center field', score: 110},
    {name: 'Charlie', position: 'pitcher', score: 100},
    {name: 'Marco', position: 'first base', score: 90},
    {name: 'Paula', position: 'short stop', score: 80},
    {name: 'Quinn', position: 'short stop', score: 10},
    {name: 'Raoul', position: 'pitcher', score: 70},
    {name: 'Luigi', position: 'first base', score: 60},
    {name: 'Daniela', position: 'right field', score: 50},
    {name: 'Rupert', position: 'second base', score: 40},
    {name: 'Monica', position: 'left field', score: 30},
    {name: 'Bernie', position: 'catcher', score: 20}
];

const sortedEvaluations = [
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

test("sort an array given a comparing procedure", () => {
    expect(lodash.reverse(lodash.sortBy(unsortedEvaluations, 'score')))
    .toStrictEqual(sortedEvaluations);
});