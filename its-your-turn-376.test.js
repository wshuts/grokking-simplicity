const functions = require('./its-your-turn-376.js');
const lodash = require('lodash');

const nestedData = {
    levelOneKey: "levelOneValue"
};

const nestedDataWithUpdates = {
    levelOneKey: "modifiedLevelOneValue"
};

function modifier(value) {
    return "modified" + lodash.startCase(value).replace(/ /g, '');
}

test("update with one level of nesting", () => {
    expect(functions.update(nestedData, 'levelOneKey', modifier))
    .toStrictEqual(nestedDataWithUpdates);
});

const nestedData2 = {
    levelOneKey: {
        levelTwoKey: "levelTwoValue"
    }
};

const nestedDataWithUpdates2 = {
    levelOneKey: {
        levelTwoKey: "modifiedLevelTwoValue"
    }
};

test("update with two levels of nesting", () => {
    expect(functions.update2(nestedData2, 'levelOneKey', 'levelTwoKey', modifier))
    .toStrictEqual(nestedDataWithUpdates2);
});