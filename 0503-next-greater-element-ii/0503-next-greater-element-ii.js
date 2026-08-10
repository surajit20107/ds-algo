/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const stack = [];
    const res = new Array(n).fill(-1);

    for (let i = 2 * n - 1; i >= 0; i--) {
        const index = i % n;
        
        while (stack.length > 0 && nums[index] >= stack[stack.length - 1]) {
            stack.pop();
        }

        if (i < n) {
            res[index] = stack.length === 0 ? -1 : stack[stack.length - 1];
        }

        stack.push(nums[index]);
    }

    return res;
};