/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        let res = "";
        if (i % 3 === 0) res += "Fizz";
        if (i % 5 === 0) res += "Buzz";
        answer.push(res || String(i));
    }
    return answer;
};