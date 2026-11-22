/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ans = nums[0]
    let count = 1
    for(let i=1;i<nums.length;i++){
        if (count == 0) {
            ans = nums[i]
            count++
        } else if (nums[i] == ans) {
            count++
        } else {
            count--
        }
    }
    return ans
};