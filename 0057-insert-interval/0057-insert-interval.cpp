class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>> ans;
        bool isMerged = false;
        for (int i = 0; i < intervals.size(); i++) {
            if (!isMerged && newInterval[0] < intervals[i][0]) {
                ans.push_back(newInterval);
                isMerged = true;
            }
            ans.push_back(intervals[i]);
        }
        if (!isMerged) {
            ans.push_back(newInterval);
        }

        vector<vector<int>> res = mergeIntervals(ans);
        return res;
    }

    vector<vector<int>> mergeIntervals(vector<vector<int>>& ans) {
        vector<vector<int>> res;
        int start1 = ans[0][0];
        int end1 = ans[0][1];

        for (int i = 1; i < ans.size(); i++) {
            int start2 = ans[i][0];
            int end2 = ans[i][1];
            if (end1 < start2) {
                res.push_back({start1, end1});
                start1 = start2;
                end1 = end2;
            } else {
                start1 = min(start1, start2);
                end1 = max(end1, end2);
            }
        }
        res.push_back({start1, end1});
        return res;
    }
};