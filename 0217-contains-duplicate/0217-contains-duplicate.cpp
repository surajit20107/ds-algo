class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        set<int> s;
        s.insert(nums.begin(), nums.end());
        
        if (s.size() == nums.size()) {
            return false;
        } else {
            return true;
        }
    }
};