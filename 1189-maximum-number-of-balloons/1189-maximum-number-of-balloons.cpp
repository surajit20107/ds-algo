class Solution {
public:
    int maxNumberOfBalloons(string text) {
        vector<int> freq(26, 0);

        for (char c : text) {
            freq[c - 'a']++;
        }

        int b = freq['b' - 'a'];
        int a = freq['a' - 'a'];
        int l = freq['l' - 'a'] / 2;
        int o = freq['o' - 'a'] / 2;
        int n = freq['n' - 'a'];

        return min({b, a, l,  o, n});
    }
};