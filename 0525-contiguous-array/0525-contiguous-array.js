/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let res = 0;
    let zero = 0;
    let one = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zero++;
        } else {
            one++;
        }

        let diff = zero - one;
        if (diff === 0) {
            res = Math.max(res, i + 1);
            continue;
        }

        if (map.has(diff)) {
            let idx = map.get(diff);
            let len = i - idx;
            res = Math.max(res, len);
        } else {
            map.set(diff, i);
        }
    }
    return res;
};