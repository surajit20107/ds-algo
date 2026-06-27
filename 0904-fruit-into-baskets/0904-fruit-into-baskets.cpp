class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        int low = 0;
        int res = 0;
        map<int, int> mp;
        for (int high = 0; high < fruits.size(); high++) {
            int right = fruits[high];
            mp[right]++;
            while (mp.size() > 2) {
                int left = fruits[low];
                mp[left]--;
                if (mp[left] == 0) {
                    mp.erase(left);
                }
                low++;
            }
            res = max(res, high - low + 1);
        }
        return res;
    }
};