class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        int res = 0;
        int zero = 0;
        int one = 0;
        unordered_map<int, int> mp;
        mp[0] = 1;

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == 0) zero++;
            else one++;
            int diff = zero - one;
            
            if (diff == 0) {
                res = max(res, i + 1);
                continue;
            }

            if (mp.find(diff) == mp.end()) {
                mp[diff] = i;
            } else {
                int idx = mp[diff];
                int len = i - idx;
                res = max(res, len);
            }
        }
        return res;
    }
};