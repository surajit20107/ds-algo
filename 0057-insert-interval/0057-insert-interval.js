/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let ans = [];
    let res = [];
    let isMerged = false;

    for (let i = 0; i < intervals.length; i++) {
        if (!isMerged && newInterval[0] < intervals[i][0]) {
            ans.push(newInterval);
            isMerged = true;
        }
        ans.push(intervals[i]);
    }

    // If all intervals are processed and newInterval hasn't been inserted,
    // it belongs at the end, so append it.
    if (!isMerged) {
        ans.push(newInterval)
    }

    let start1 = ans[0][0];
    let end1 = ans[0][1];

    for (let i = 1; i < ans.length; i++) {
        let start2 = ans[i][0];
        let end2 = ans[i][1];

        if (end1 < start2) {
            res.push([start1, end1]);
            start1 = start2;
            end1 = end2;
        } else {
            start1 = Math.min(start1, start2);
            end1 = Math.max(end1, end2);
        }
    }
    res.push([start1, end1]);
    return res;
};