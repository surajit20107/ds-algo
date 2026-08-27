/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let profit = 0;
    for (let pr of prices) {
        buy = Math.min(buy, pr);
        profit = Math.max(profit, pr -  buy);
    }
    return profit;
};