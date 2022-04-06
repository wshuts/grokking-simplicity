const arrayLibrary = require('./arrayLibrary');
const objectLibrary = require('./objectLibrary');

const functions = {
    buildRecommendations: buildRecommendations
}

function buildRecommendations(employeeNames) {
    return arrayLibrary.map(employeeNames, employeeName => {
        return {
            name: employeeName,
            position: recommendPosition(employeeName)
        };
    });
}

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

function recommendPosition(employeeName) {
    var recommendation = arrayLibrary.filter(recommendations,
        recommendation => recommendation.name === employeeName);
    return recommendation[0].position;
}

module.exports = functions;