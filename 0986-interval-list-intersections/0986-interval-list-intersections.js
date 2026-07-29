/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let i = 0;
    let j = 0;
    let res = [];

    while (i < firstList.length && j < secondList.length) {
        let start1 = firstList[i][0];
        let end1 = firstList[i][1];
        let start2 = secondList[j][0];
        let end2 = secondList[j][1];

        if (start1 < start2) {
            if (end1 >= start2) {
                let s = Math.max(start1, start2);
                let t = Math.min(end1, end2);
                res.push([s, t]);
            }
        } else {
            if (end2 >= start1) {
                let s = Math.max(start1, start2);
                let t = Math.min(end1, end2);
                res.push([s, t]);
            }
        }

        if (end1 < end2) {
            i++;
        } else {
            j++;
        }
    }
    
    return res;
};