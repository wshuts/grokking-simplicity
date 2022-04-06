const lodash = require('lodash');
const arrayLibrary = require('./arrayLibrary');
const objectLibrary = require('./objectLibrary');
const professionalCoach = require('./professionalCoach');

const functions = {
    buildCompanyRoster: buildCompanyRoster
}

function buildCompanyRoster(employeeNames) {
    var recommendations = buildRecommendations(employeeNames);
    var evaluations = buildEvaluations(recommendations);
    var evaluationsSortedAscending = lodash.sortBy(evaluations, 'score');
    var evaluationsSortedDescending = lodash.reverse(evaluationsSortedAscending);
    return buildRoster(evaluationsSortedDescending);
}

function buildRecommendations(employeeNames) {
    return arrayLibrary.map(employeeNames, employeeName => {
        return {
            name: employeeName,
            position: professionalCoach.recommendPosition(employeeName)
        };
    });
}

function buildEvaluations(recommendations) {
    return arrayLibrary.map(recommendations, recommendation => {
        var name = recommendation.name;
        var position = recommendation.position;
        return objectLibrary.objectSet(recommendation, 'score', professionalCoach.scorePlayer(name, position));
    });
}

function buildRoster(evaluations) {
    return arrayLibrary.reduce(evaluations, {}, addPlayers);
}

function addPlayers(roster, evaluation) {
    var position = evaluation.position;
    var name = evaluation.name;
    if(roster[position])
        return roster;
    return objectLibrary.objectSet(roster, position, name);
}

module.exports = functions;