/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    const max = maxSum(nums);
    if (max < 0) return max;
    const total = nums.reduce((a, b) => a + b, 0);
    const min = minSum(nums);
    return Math.max(max, total - min);
};

function maxSum(arr) {
    let curr = arr[0];
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        curr = Math.max(curr + arr[i], arr[i]);
        ans = Math.max(ans, curr);
    }
    return ans;
}

function minSum(arr) {
    let curr = arr[0];
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        curr = Math.min(curr + arr[i], arr[i]);
        ans = Math.min(ans, curr);
    }
    return ans;
}