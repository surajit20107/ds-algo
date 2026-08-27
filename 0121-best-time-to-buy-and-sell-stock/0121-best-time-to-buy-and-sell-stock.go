func maxProfit(prices []int) int {
    buy := prices[0];
    profit := 0;

    for _, pr := range prices {
        buy = min(buy, pr)
        profit = max(profit, pr - buy)
    }

    return profit
}

func min(a int, b int) int {
    if a > b {
        return b
    }
    return a
}

func max(a int, b int) int {
    if a < b {
        return b
    }
    return a
}
