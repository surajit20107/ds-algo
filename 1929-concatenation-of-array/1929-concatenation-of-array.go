func getConcatenation(nums []int) []int {
    n := len(nums)
    res := make([]int, n * 2)

    for i := 0; i < n; i++ {
        res[i] = nums[i]
        res[i + n] = nums[i]
    }

    return res
}