/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const freq = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - aCode]++;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (freq[s.charCodeAt(i) - aCode] === 1) {
            return i;
        }
    }
    
    return -1;
};