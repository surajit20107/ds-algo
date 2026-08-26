class Solution {
public:
    int longestPalindrome(string s) {
        vector<int> freq(128, 0);

        for (char c : s) {
            freq[c]++;
        }

        int result = 0;
        bool hasOdd = false;

        for (int count : freq) {
            result += (count / 2) * 2;
            if (count % 2 == 1) {
                hasOdd = true;
            }
        }

        return hasOdd ? result + 1 : result;
    }
};