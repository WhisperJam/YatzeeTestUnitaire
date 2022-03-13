let checkDiceNumber = require('./index');
let checkDicesValue = require('./index');
let checkNormalScore = require('./index');
let checkThreeOfKind = require('./index');
let checkFourOfKind = require('./index');
let checkFullHouse = require('./index');
let checkSmallStraight = require('./index');
let checkLargeStraight = require('./index');
let checkChance = require('./index');
let checkYathzee = require('./index');

// Test si les entrées sont correctes
test('Dices are correct', () => {
    let dices = [1, 2, 3, 4, 5];
    expect(checkDicesValue(dices)).toBe(true);
    dices = [10, 2, 3, 4, 5];
    expect(checkDicesValue(dices)).toBe(false);
    dices = [1, 2, 3, 4, 5];
    expect(checkDiceNumber(dices)).toBe(true);
    dices = [2, 3, 4, 5];
    expect(checkDiceNumber(dices)).toBe(false);
    dices = [1, 2, 3, 4, 5, 6];
    expect(checkDiceNumber(dices)).toBe(false);
});

// Test si les combinaisons normales SEULES sont corretes
test('Four 1 gives 4 points', () => {
    let dices = [1, 1, 1, 1, 5];
    expect(checkNormalScore(dices)).toBe(4);
});

test('Four 2 gives 8 points', () => {
    let dices = [2, 2, 2, 2, 5];
    expect(checkNormalScore(dices)).toBe(8);
});

test('Four 3 gives 12 points', () => {
    let dices = [3, 3, 3, 3, 5];
    expect(checkNormalScore(dices)).toBe(12);
});

test('Four 4 gives 16 points', () => {
    let dices = [4, 4, 4, 4, 5];
    expect(checkNormalScore(dices)).toBe(16);
});

test('Four 5 gives 20 points', () => {
    let dices = [5, 5, 5, 4, 5];
    expect(checkNormalScore(dices)).toBe(20);
});

test('Four 6 gives 24 points', () => {
    let dices = [6, 6, 6, 6, 5];
    expect(checkNormalScore(dices)).toBe(24);
});

// Test si les combinaisons spéciales SEULES sont corretes
test('Three of a kind works', () => {
    let dices = [1, 1, 1, 4, 5];
    expect(checkThreeOfKind(dices)).toBe(true);
});

test('Four of a kind works', () => {
    let dices = [1, 1, 1, 1, 5];
    expect(checkFourOfKind(dices)).toBe(true);
});

test('Full house works', () => {
    let dices = [1, 1, 1, 5, 5];
    expect(checkFullHouse(dices)).toBe(true);
});

test('Small straight works', () => {
    let dices = [1, 2, 3, 4, 5];
    expect(checkSmallStraight(dices)).toBe(true);
});

test('Large straight works', () => {
    let dices = [1, 2, 3, 4, 5];
    expect(checkLargeStraight(dices)).toBe(true);
});

test('Chance works', () => {
    let dices = [1, 2, 3, 4, 5];
    expect(checkChance(dices)).toBe(true);
});

test('Yathzee works', () => {
    let dices = [1, 1, 1, 1, 1];
    expect(checkYathzee(dices)).toBe(true);
});