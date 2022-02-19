// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let dict = {}

    for(let item of str){
        if(dict[item]){
            dict[item] += 1
        }else {
            dict[item] = 1
        }
    }

    let count = 0;
    let maxchar;

    for(let item in dict){
        if(dict[item] > count){
            count = dict[item]
            maxchar = item
        }
    }
    return maxchar
}

module.exports = maxChar;
