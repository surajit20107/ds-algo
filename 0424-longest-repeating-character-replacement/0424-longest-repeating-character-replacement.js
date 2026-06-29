/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let arr = new Array(26).fill(0);
    let low = 0;
    let maxFreq = 0;
    let res = 0;

    for (let high = 0; high < s.length; high++) {
        let right = s[high].charCodeAt(0) - 65;
        arr[right]++;
        maxFreq = Math.max(maxFreq, arr[right]);

        while ((high-low+1)-maxFreq > k) {
            let left = s[low].charCodeAt(0) - 65;
            arr[left]--;
            low++;
        }
        res = Math.max(res, high - low + 1);
    }
    return res;
};