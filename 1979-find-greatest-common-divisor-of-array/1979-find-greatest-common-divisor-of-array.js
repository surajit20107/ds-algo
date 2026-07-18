/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = nums[0];
    let max = nums[0];
    for (num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }
    return gcd(min, max);
};

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}