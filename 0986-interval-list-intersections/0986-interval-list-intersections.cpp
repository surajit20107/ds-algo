class Solution {
public:
    vector<vector<int>> intervalIntersection(vector<vector<int>>& firstList,
                                             vector<vector<int>>& secondList) {
        int i = 0;
        int j = 0;
        vector<vector<int>> res;

        while (i < firstList.size() && j < secondList.size()) {
            int start = max(firstList[i][0], secondList[j][0]);
            int end = min(firstList[i][1], secondList[j][1]);

            if (start <= end) {
                res.push_back({start, end});
            }

            int end1 = firstList[i][1];
            int end2 = secondList[j][1];
            if (end1 < end2) {
                i++;
            } else {
                j++;
            }
        }
        return res;
    }
};