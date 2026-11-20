/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const n = nums.length
    if (n <= 1) return;

    let j = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] != 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j++
        }
    }
};