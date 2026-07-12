class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int res = nums[0];
        int minEnding = nums[0];
        int maxEnding = nums[0];
        for (int i = 1; i < nums.size(); i++) {
            int curr = nums[i];
            int prevMin = minEnding;
            int prevMax = maxEnding;
            maxEnding = max({curr, curr * prevMax, curr * prevMin});
            minEnding = min({curr, curr * prevMax, curr * prevMin});
            res = max(res, maxEnding);
        }
        return res;
    }
};