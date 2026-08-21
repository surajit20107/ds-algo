class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        vector<int> arr(26, 0);

        for (char c : magazine) {
            arr[c - 'a']++;
        }

        for (char c : ransomNote) {
            int index = c - 'a';
            if (arr[index] > 0) {
                arr[index]--;
            } else {
                return false;
            }
        }
        return true;
    }
};