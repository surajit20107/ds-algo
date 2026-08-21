class Solution {
public:
    int firstUniqChar(string s) {
        vector<int> freq(26, 0);
        int aCode = 'a';

        for (int i = 0; i < s.length(); i++) {
            freq[s[i] - aCode]++;
        }

        for (int i = 0; i < s.length(); i++) {
            if (freq[s[i] - aCode] == 1) return i;
        }
        
        return -1;
    }
};