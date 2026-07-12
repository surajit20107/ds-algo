func maxProduct(nums []int) int {
    res := nums[0];
    minEnding := nums[0];
    maxEnding := nums[0];
    for i := 1; i < len(nums); i++ {
        curr := nums[i];
        prevMin := minEnding;
        prevMax := maxEnding;
        maxEnding = max(curr, curr * prevMin, curr * prevMax);
        minEnding = min(curr, curr * prevMin, curr * prevMax);
        res = max(res, maxEnding);
    }
    return res;
}