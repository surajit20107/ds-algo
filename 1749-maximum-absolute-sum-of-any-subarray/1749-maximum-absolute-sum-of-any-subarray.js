/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    const ans1 = maxSum(nums);
    const  ans2 = minSum(nums);
    return Math.max(ans1, ans2);
};

function maxSum(arr) {
    let bestEnding = arr[0];
    let ans = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let v1 = bestEnding + arr[i];
        let v2 = arr[i];
        bestEnding = Math.max(v1, v2);
        ans = Math.max(ans, bestEnding);
    }
    return ans;
}

function minSum(arr) {
    let bestEnding = arr[0];
    let ans = arr[0];

    for (let i = 1; i < arr.length; i++) {
        bestEnding = Math.min(bestEnding + arr[i], arr[i]);
        ans = Math.min(ans, bestEnding);
    }
    return Math.abs(ans);
}