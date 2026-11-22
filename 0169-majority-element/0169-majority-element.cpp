class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int el = 0;
        int count = 0;

        for (int num : nums) {
            if (count == 0) {
                el = num;
            }

            if (num == el) {
                count++;
            } else {
                count--;
            }
        }

        return el;
    }
};