class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int buy = prices[0];
        int profit = 0;

        for (int pr : prices) {
            buy = min(buy, pr);
            profit = max(profit, pr - buy);
        }
        
        return profit;
    }
};