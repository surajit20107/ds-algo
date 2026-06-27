class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> answer;
        for (int i = 1; i <= n; i++) {
            string res;
            if (i % 3 == 0) res += "Fizz";
            if (i % 5 == 0) res += "Buzz";
            answer.push_back(res.empty() ? to_string(i) : res);
        }
        return answer;
    }
};