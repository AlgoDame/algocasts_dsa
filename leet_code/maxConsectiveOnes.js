/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.

    Example 1:

    Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s. 
    The maximum number of consecutive 1s is 3.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let arr = [];
    for(let n of nums){
        if(n == 1){
            count += 1
        } else if(n == 0){
            arr.push(count);
            count = 0;

        }
    }
    arr.push(count);
    let result = Math.max(...arr);
    return result;
};

let result = findMaxConsecutiveOnes([1,0,1,1,0,1]);
