const arrayLibrary = require('./arrayLibrary');

const functions = {
    buildRoster: buildRoster
}

function buildRoster(evaluations) {
    return arrayLibrary.reduce(evaluations, {}, addPlayers);
}

function addPlayers(roster, evaluation) {
    if(!roster[evaluation.position]) roster[evaluation.position] = evaluation.name;
    return roster;
}

module.exports = functions;