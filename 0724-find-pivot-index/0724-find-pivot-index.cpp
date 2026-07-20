class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int length = nums.size();
        vector<int> prefix(length);
        vector<int> suffix(length);

        prefix[0] = 0;
        for (int i = 1; i < length; i++) {
            prefix[i] = prefix[i - 1] + nums[i - 1];
        }

        suffix[length - 1] = 0;
        for (int i = length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] + nums[i + 1];
        }

        for (int i = 0; i < length; i++) {
            if (prefix[i] == suffix[i]) return i;
        }

        return -1;
    }
};