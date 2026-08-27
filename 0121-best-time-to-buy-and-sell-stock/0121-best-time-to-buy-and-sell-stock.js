/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let min = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i];
        let profit = prices[i] - min;
        if(profit>maxProfit){
            maxProfit=profit
        }
    }
    return maxProfit;
};
