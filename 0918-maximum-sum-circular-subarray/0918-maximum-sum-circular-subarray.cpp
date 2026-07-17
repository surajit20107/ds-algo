class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
        int maxVal = maxSum(nums);
        if (maxVal < 0) return maxVal;
        int total = accumulate(nums.begin(), nums.end(), 0);
        int min = minSum(nums);
        return max(maxVal, total - min);
    }

    int maxSum(vector<int>& arr) {
        int curr = arr[0];
        int ans = arr[0];

        for (int i = 1; i < arr.size(); i++) {
            curr = max(curr + arr[i], arr[i]);
            ans = max(ans, curr);
        }
        return ans;
    }

    int minSum(vector<int>& arr) {
        int curr = arr[0];
        int ans = arr[0];

        for (int i = 1; i < arr.size(); i++) {
            curr = min(curr + arr[i], arr[i]);
            ans = min(ans, curr);
        }
        return ans;
    }
};