/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    if (top === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.join("");
};