class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int res = nums[0];
        int maxEnding = nums[0];

        for (int i = 1; i < nums.size(); i++){
            int v1 = maxEnding + nums[i];
            int v2 = nums[i];
            maxEnding = max(v1, v2);
            res = max(res, maxEnding);
        }
        return res;
    }
};