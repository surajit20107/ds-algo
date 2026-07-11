/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n;
    let fast = n;
    while (fast !== 1) {
        slow = helper(slow);
        fast = helper(fast);
        fast = helper(fast);
        if (slow === fast && slow !== 1) {
            return false;
        }
    }
    return true;
}

function helper(n) {
    let sum = 0;
    while (n > 0) {
        let d = Math.floor(n % 10);
        n = Math.floor(n / 10);
        sum = sum + d * d
    }
    return sum;
}