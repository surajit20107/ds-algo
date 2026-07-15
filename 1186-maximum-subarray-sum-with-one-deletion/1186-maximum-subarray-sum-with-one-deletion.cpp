class Solution {
public:
    int maximumSum(vector<int>& arr) {
        int withoutDeletion = arr[0];
        int withDeletion = -1000000000; // To avoid INT_MIN overflow
        int ans = arr[0];
        for (int i = 1; i < arr.size(); i++) {
            int prevWithDelete = withDeletion;
            int prevWithoutDelete = withoutDeletion;

            withoutDeletion = max(prevWithoutDelete + arr[i], arr[i]);
            withDeletion = max(prevWithDelete + arr[i], prevWithoutDelete);
            ans = max({withDeletion, withoutDeletion, ans});
        }
        return ans;
    }
};