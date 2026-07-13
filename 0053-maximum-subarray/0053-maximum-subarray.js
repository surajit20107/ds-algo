/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let maxEnding = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let v1 = maxEnding + nums[i];
        let v2 = nums[i];
        maxEnding = Math.max(v1, v2);
        res = Math.max(res, maxEnding);
    }
    return res;
};