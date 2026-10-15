class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int needFreq = nums.size() / 2;
        unordered_map<int, int> mp;

        for (int n : nums) {
            mp[n]++;
            if ( mp[n] > needFreq) return n;
        }
        
        return -1;
    }
};