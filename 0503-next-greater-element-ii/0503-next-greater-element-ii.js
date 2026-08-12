/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const res = [];
    const stack = [];
    // Pushing the elements in stack to simulate the circular array
    // So after last element my array can see the first element for once using stack
    for (let i = nums.length - 2; i >= 0; i--) {
        stack.push(nums[i]);
    }
    // finding greater elements using nums and stack
    for (let i = nums.length - 1; i >= 0; i--) {
        while (nums.length > 0 && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            res.push(-1);
        } else {
            res.push(stack[stack.length - 1]);
        }
        stack.push(nums[i]);
    }
    return res.reverse();
};