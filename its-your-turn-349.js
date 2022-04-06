const arrayLibrary = require('./arrayLibrary');
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
        return {
            name: name,
            position: position,
            score: professionalCoach.scorePlayer(name, position)
        };
    });
}

module.exports = functions;