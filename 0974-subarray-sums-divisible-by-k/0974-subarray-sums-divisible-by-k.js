/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let sum = 0;
    let res = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        let rem = sum % k;
        if (rem < 0) rem = rem + k;
        if (map.has(rem)) {
            res = res + map.get(rem);
        }
        map.set(rem, (map.get(rem) || 0) + 1);
    }
    
    return res;
};