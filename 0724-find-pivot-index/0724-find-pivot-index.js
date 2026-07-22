/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0);
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        let right = total - left - nums[i];
        if (left === right) {
            return i;
        }
        left = left + nums[i];
    }

    return -1;
};