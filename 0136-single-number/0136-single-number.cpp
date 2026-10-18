class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int unique = 0;

        for (int num : nums) {
            unique ^= num;
        }
        
        return unique;
    }
};