func maxSubarraySumCircular(nums []int) int {
    maxVal := maxSum(nums);
    if maxVal < 0 {
        return maxVal;
    }
    total := 0;
    for _, num := range nums {
        total = total + num;
    }
    min := minSum(nums);
    return max(maxVal, total - min);
}

func maxSum(arr []int) int {
    curr := arr[0];
    ans := arr[0];
    for i := 1; i < len(arr); i++ {
        curr = max(curr + arr[i], arr[i]);
        ans = max(ans, curr);
    }
    return ans;
}

func minSum(arr []int) int {
    curr := arr[0];
    ans := arr[0];
    for i := 1; i < len(arr); i++ {
        curr = min(curr + arr[i], arr[i]);
        ans = min(ans, curr);
    }
    return ans;
}