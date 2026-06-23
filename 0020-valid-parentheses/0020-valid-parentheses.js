/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []; // Stack for opening brackets
    const hash = { ")": "(", "]": "[", "}": "{" }; // Matching pairs

    for (const char of s) {
        if (char in hash) {
            // Check if stack is non-empty and matches the top element
            if (stack.length && stack[stack.length - 1] === hash[char]) {
                stack.pop(); // Remove the matching opening bracket
            } else {
                return false; // Invalid if no match
            }
        } else {
            stack.push(char); // Push opening bracket
        }
    }
    return stack.length === 0; // Valid if stack is empty
};
