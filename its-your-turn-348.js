const arrayLibrary = require('./arrayLibrary');

const functions = {
    buildRoster: buildRoster
}

function buildRoster(evaluations) {
    return arrayLibrary.reduce(evaluations, [], (roster, evaluation) => []);
}

function filterByPosition(evaluations, position) {
    return arrayLibrary.filter(evaluations, evaluation => evaluation.position === position);
}

function getBest(evaluations) {
    return arrayLibrary.reduce(evaluations, {name: 'open', position: 'n/a', score: 0}, compareByScore);
}

function compareByScore(bestEvaluation, evaluation) {
    return evaluation.score > bestEvaluation.score ? evaluation : bestEvaluation;
}

module.exports = functions;