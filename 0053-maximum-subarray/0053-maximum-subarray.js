/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0;
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        max = Math.max(sum, max)
        sum = Math.max(sum, 0)
    }
    return max
};