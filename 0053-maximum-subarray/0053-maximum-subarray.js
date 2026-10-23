/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let res = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        res = Math.max(res, sum);
        sum = Math.max(sum, 0);
    }
    return res
};