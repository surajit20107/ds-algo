class Solution {
  public:
    int smallestSumSubarray(vector<int>& arr) {
        // Code here
        int res = INT_MAX;
        int sum = 0;
        for (int i = 0; i < arr.size(); i++) {
            sum = sum + arr[i];
            res = min(res, sum);
            sum = min(sum, 0);
        }
        return res;
    }
};
