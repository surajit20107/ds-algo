class Solution {
public:
    int findGCD(vector<int>& nums) {
        int mn = nums[0];
        int mx = nums[0];
        for (int num : nums) {
            mn = min(mn, num);
            mx = max(mx, num);
        }
        return gcd(mn, mx);
    }
};