const arrayLibrary = require('./arrayLibrary');

const functions = {
    buildRoster: buildRoster
}

function buildRoster(evaluations) {
    return arrayLibrary.reduce(evaluations, [], (roster, evaluation) => []);
}

module.exports = functions;