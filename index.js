function checkDiceNumber(dices)
{
    return (dices.length > 4 || dices.length < 0) ? false : true;
}

function checkDicesValue(dices)
{
    for (var i = 0; i < 5; i++)
    {
        if (dices[i] < 1 || dices[i] > 6)
            return false;
    }
    return true;
}

function checkNormalScore(dices)
{
    let one, two, three, four, five, six = 0;
    for (var i = 0; i < 5; i++)
    {
        if (dices[i] == 1)
            one++;
        if (dices[i] == 2)
            two++;
        if (dices[i] == 3)
            three++;
        if (dices[i] == 4)
            four++;
        if (dices[i] == 5)
            five++;
        if (dices[i] == 6)
            six++;
    }
    return;
}

function checkThreeOfKind(dices)
{
    let one, two, three, four, five, six = 0;
    for (var i = 0; i < 5; i++)
    {
        if (dices[i] == 1)
            one++;
        if (dices[i] == 2)
            two++;
        if (dices[i] == 3)
            three++;
        if (dices[i] == 4)
            four++;
        if (dices[i] == 5)
            five++;
        if (dices[i] == 6)
            six++;
    }
    return (one >= 3 || two >= 3 || three >= 3 || four >= 3 || five >= 3 || six >= 3) ? true : false;
}

function checkFourOfKind(dices)
{
    let one, two, three, four, five, six = 0;
    for (var i = 0; i < 5; i++)
    {
        if (dices[i] == 1)
            one++;
        if (dices[i] == 2)
            two++;
        if (dices[i] == 3)
            three++;
        if (dices[i] == 4)
            four++;
        if (dices[i] == 5)
            five++;
        if (dices[i] == 6)
            six++;
    }
    return (one >= 4 || two >= 4 || three >= 4 || four >= 4 || five >= 4 || six >= 4) ? true : false;
}

function checkFullHouse(dices)
{
    let one, two, three, four, five, six = 0;
    for (var i = 0; i < 5; i++)
    {
        if (dices[i] == 1)
            one++;
        if (dices[i] == 2)
            two++;
        if (dices[i] == 3)
            three++;
        if (dices[i] == 4)
            four++;
        if (dices[i] == 5)
            five++;
        if (dices[i] == 6)
            six++;
    }
    if (one == 3 && two == 2 || one == 3 && three == 2 || one == 3 && four == 2 || one == 3 && five == 2 || one == 3 && six == 2 ||
        two == 3 && one == 2 || two == 3 && three == 2 || two == 3 && four == 2 || two == 3 && five == 2 || two == 3 && six == 2 ||
        three == 3 && one == 2 || three == 3 && two == 2 || three == 3 && four == 2 || three == 3 && five == 2 || three == 3 && six == 2 ||
        four == 3 && one == 2 || four == 3 && two == 2 || four == 3 && three == 2 || four == 3 && five == 2 || four == 3 && six == 2 ||
        five == 3 && one == 2 || five == 3 && two == 2 || five == 3 && three == 2 || five == 3 && four == 2 || five == 3 && six == 2 ||
        six == 3 && one == 2 || six == 3 && two == 2 || six == 3 && three == 2 || six == 3 && four == 2 || six == 3 && five == 2)
        return true;
    else
        return false;
}

function checkSmallStraight(dices)
{
    let one, two, three, four, five, six = 0;

    dices.sort();
    return;
}

function checkLargeStraight(dices)
{
    dices.sort();
    return;
}

function checkChance(dices)
{
    var result = 0;

    for (var i = 0; i < 5; i++)
        result += dices[i];
    return result;
}

function checkYathzee(dices)
{
    let one, two, three, four, five, six = 0;
    for (var i = 0; i < 5; i++)
    {
        if (dices[i] == 1)
            one++;
        if (dices[i] == 2)
            two++;
        if (dices[i] == 3)
            three++;
        if (dices[i] == 4)
            four++;
        if (dices[i] == 5)
            five++;
        if (dices[i] == 6)
            six++;
    }
    return (one >= 5 || two >= 5 || three >= 5 || four >= 5 || five >= 5 || six >= 5) ? true : false;
}

module.exports = checkDiceNumber, checkDicesValue, checkNormalScore, checkThreeOfKind, checkFourOfKind, checkFullHouse, checkSmallStraight, checkLargeStraight, checkChance, checkYathzee;