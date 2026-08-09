/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const hash = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    for (let char of s) {
        if (hash[char]) {
            if (stack.length === 0) return false;
            if (stack.pop() !== hash[char]) return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};