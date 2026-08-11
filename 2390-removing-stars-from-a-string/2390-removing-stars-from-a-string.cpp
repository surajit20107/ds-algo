class Solution {
public:
    string removeStars(string s) {
        vector<char> res;
        for (int i = 0; i < s.size(); i++) {
            if (s[i] == '*') {
                res.pop_back();
            } else {
                res.push_back(s[i]);
            }
        }
        
        return string(res.begin(), res.end());
    }
};