/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let count = 0;
    const n = word.length;
    for (let i = 0; i < n; i++) {
        if (word.charCodeAt(i) <= 90) {
            count++;
        }
    }
    return count === n || count === 0 || count === 1 && word.charCodeAt(0) <= 90;
};
