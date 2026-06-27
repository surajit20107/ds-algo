/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let low = 0;
    let maxLen = 0;
    let map = new Map();
    for (let high=0; high < s.length; high++) {
        let right = s[high];
        map.set(right, (map.get(right) || 0) + 1);
        while (map.size < (high - low + 1)) {
            let left = s[low];
            map.set(left, map.get(left) - 1);
            if (map.get(left) === 0) map.delete(left);
            low++;
        }
        maxLen = Math.max(maxLen, high - low + 1);
    }
    return maxLen;
};