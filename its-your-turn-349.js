const arrayLibrary = require('./arrayLibrary');
const professionalCoach = require('./professionalCoach');

const functions = {
    buildRecommendations: buildRecommendations
}

function buildRecommendations(employeeNames) {
    return arrayLibrary.map(employeeNames, employeeName => {
        return {
            name: employeeName,
            position: professionalCoach.recommendPosition(employeeName)
        };
    });
}

module.exports = functions;