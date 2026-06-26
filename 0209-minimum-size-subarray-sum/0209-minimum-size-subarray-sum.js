/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let low = 0;
    let high = 0;
    let sum = 0;
    let len = 0;
    let res = Infinity;

    while (high < nums.length) {
        sum = sum + nums[high];
        while (sum >= target) {
            len = high - low +1;
            res = Math.min(res, len);
            sum = sum - nums[low];
            low++;
        }
        high++;
    }
    if (res === Infinity) return 0
    else return res
};