class Solution {
public:
    int maxAbsoluteSum(vector<int>& nums) {
        int ans1 = maxSum(nums);
        int ans2 = minSum(nums);
        return max(ans1, ans2);
    }

    int maxSum(vector<int>& arr) {
        int bestEnding = arr[0];
        int ans = arr[0];

        for (int i = 1; i < arr.size(); i++) {
            int v1 = bestEnding + arr[i];
            int v2 = arr[i];

            bestEnding = max(v1, v2);
            ans = max(bestEnding, ans);
        }
        return ans;
    }

    int minSum(vector<int>& arr) {
        int bestEnding = arr[0];
        int ans = arr[0];

        for (int i = 1; i < arr.size(); i++) {
            int v1 = bestEnding + arr[i];
            int v2 = arr[i];

            bestEnding = min(v1, v2);
            ans = min(bestEnding, ans);
        }
        return abs(ans);
    }
};