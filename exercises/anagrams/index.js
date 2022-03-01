// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let strA = stringA.replace(/[^A-Za-z]/g, "").toLowerCase();
    let strB = stringB.replace(/[^A-Za-z]/g, "").toLowerCase();
    let objA = {}
    let objB = {}

    for (let item of strA) {
        if (objA[item]) {
            objA[item] += 1;
        } else {
            objA[item] = 1;
        }
    }

    for (let item of strB) {
        if (objB[item]) {
            objB[item] += 1;
        } else {
            objB[item] = 1;
        }
    }

    let keysA = Object.keys(objA);
    let keysB = Object.keys(objB);

    keysA
    let result = true;

    for (let key of keysA) {
        key
        if (objA[key] !== objB[key]) {
            result = false
        }
    }

    result
    return result;


}

let ans = anagrams('RAIL! SAFETY!', 'fairy tales')
ans





module.exports = anagrams;
