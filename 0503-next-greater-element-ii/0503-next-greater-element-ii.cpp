class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        vector<int> res;
        vector<int> st;
        // Pushing the elements in stack to simulate the circular array
        // So after last element my array can see the first element for once using stack
        for (int i = nums.size() - 2; i >= 0; i--) {
            st.push_back(nums[i]);
        }
        // finding greater elements using nums and stack
        for (int i = nums.size() - 1; i >= 0; i--) {
            while (st.size() > 0 && st.back() <= nums[i]) {
                st.pop_back();
            }

            if (st.size() == 0) {
                res.push_back(-1);
            } else {
                res.push_back(st.back());
            }
            st.push_back(nums[i]);
        }
        reverse(res.begin(), res.end());
        return res;
    }
};