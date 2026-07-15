/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    let keep = arr[0];
    let del = -Infinity;
    let ans = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let prevKeep = keep;
        let prevDel = del;

        keep = Math.max(prevKeep + arr[i], arr[i]);
        del = Math.max(prevKeep, prevDel + arr[i]);
        ans = Math.max(keep, del, ans);
    }
    return ans;
};