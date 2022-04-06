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
    return [];
}

module.exports = functions;