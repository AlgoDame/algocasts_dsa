// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let revStr = n.toFixed().split("").reverse().join("");
    let result;
    n >= 0 ? result = parseInt(revStr) : result = parseInt(revStr) * -1;
    return result
}

module.exports = reverseInt;
