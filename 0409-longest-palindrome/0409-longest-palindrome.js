/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const freq = {};
    
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    let result = 0;
    let hasOdd = false;
    
    for (let count of Object.values(freq)) {
        result += Math.floor(count / 2) * 2;
        if (count % 2 === 1) {
            hasOdd = true;
        }
    }
    
    return hasOdd ? result + 1 : result;
};