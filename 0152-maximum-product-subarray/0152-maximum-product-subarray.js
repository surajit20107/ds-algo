/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let ans = nums[0];
    let minEnding = nums[0];
    let maxEnding = nums[0];
     for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        let maxPrev = maxEnding;
        let minPrev = minEnding;
        maxEnding = Math.max(curr, curr*maxPrev, curr*minPrev);
        minEnding = Math.min(curr, curr*maxPrev, curr*minPrev);
        ans = Math.max(ans, maxEnding);
     }
     return ans;
};