class Solution {
public:
    int characterReplacement(string s, int k) {
        vector<int> arr(26, 0);
        int low = 0;
        int maxFreq = 0;
        int res = 0;

        for (int high = 0; high < s.size(); high++) {
            int right = s[high] - 65;
            arr[right]++;
            maxFreq = max(maxFreq, arr[right]);

            while ((high-low+1)-maxFreq > k) {
                int left = s[low] - 65;
                arr[left]--;
                low++;
            }
            res = max(res, high - low + 1);
        }
        return res;
    }
};