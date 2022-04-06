const arrayLibrary = require('./arrayLibrary');
const objectLibrary = require('./objectLibrary');
const professionalCoach = require('./professionalCoach');

const functions = {
    buildRecommendations: buildRecommendations,
    buildEvaluations: buildEvaluations
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

module.exports = functions;