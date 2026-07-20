/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let prefix = new Array(nums.length);
    let suffix = new Array(nums.length);

    prefix[0] = 0;
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i - 1];
    }

    suffix[nums.length - 1] = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        if (prefix[i] === suffix[i]) return i;
    }
    
    return -1;
};