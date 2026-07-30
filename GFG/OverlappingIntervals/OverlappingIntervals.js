class Solution {
    isIntersect(intervals) {
        // Code Here
        intervals.sort((a, b) => a[0] - b[0]);
        
        let start1 = intervals[0][0];
        let end1 = intervals[0][1];
        
        for (let i = 1; i < intervals.length; i++) {
            let start2 = intervals[i][0];
            let end2 = intervals[i][1];
            
            if (end1 < start2) {
                start1 = start2;
                end1 = end2;
            } else {
                return true;
            }
        }
        
        return false;
    }
}
