/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const res = new Array(temperatures.length).fill(0);

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length > 0 && temperatures[stack[stack.length-1]] <= temperatures[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            res[i] = 0;
        } else {
            res[i] = stack[stack.length - 1] - i
        }
        
        stack.push(i)
    }

    return res;
};