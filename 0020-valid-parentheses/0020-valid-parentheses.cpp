class Solution {
public:
    bool isValid(string s) {
        stack<char> st;

        unordered_map<char, char> hash = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };

        for (int i = 0; i < s.size(); i++) {
            char curr = s[i];

            if (hash.find(curr) != hash.end()) {
                if (!st.empty() && st.top() == hash[curr]) {
                    st.pop();
                } else {
                    return false;
                }
            } else {
                st.push(curr);
            }
        }

        return st.empty();
    }
};