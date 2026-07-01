class Solution {
public:
    bool detectCapitalUse(string word) {
        int count = 0;
        int n = word.size();
        for (int i = 0; i < n; i++) {
            if (int(word[i]) <= 90) {
                count++;
            }
        }
        return count == n || count == 0 || count == 1 && int(word[0]) <= 90;
    }
};