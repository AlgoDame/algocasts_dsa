/**
 * Given an integer array sorted in non-decreasing order, 
 * there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

    Example 1:

    Input: arr = [1,2,2,6,6,6,6,7,10]
    Output: 6
    Example 2:

    Input: arr = [1,1]
    Output: 1
 * 
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    let objMap = {}

    for(let n of arr){
        let str = ""+n;
        if(objMap[str]){
            objMap[str] ++
        }else {
            objMap[str] = 1
        }
    }
    
    let values = Object.values(objMap);
    let max = Math.max(...values);
    let ans = +(Object.keys(objMap).find(key => objMap[key] === max));
    return ans;

};

let ans = findSpecialInteger([1,2,2,6,6,6,6,7,10])
