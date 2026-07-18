/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let ans = new Array(n);

    let left = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = left;
        left = left * nums[i];
    }

    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] = ans[i] * right;
        right = right * nums[i];
    }
    return ans;
};