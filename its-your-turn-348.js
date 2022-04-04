const arrayLibrary = require('./arrayLibrary');
const objectLibrary = require('./objectLibrary');

const functions = {
    buildRoster: buildRoster
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