class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int low = 0;
        int maxLen = 0;
        map<char, int> mp;

        for (int high=0; high < s.size(); high++) {
            char right = s[high];
            mp[right]++;

            while (mp.size() < (high - low + 1)) {
                char left = s[low];
                mp[left]--;
                if (mp[left] == 0) mp.erase(left);
                low++;
            }
            maxLen = max(maxLen, high - low + 1);
        }
        return maxLen;
    }
};