func productExceptSelf(nums []int) []int {
    var n int = len(nums)
    var ans []int= make([]int, n)

    var left int = 1
    for i := 0; i < n; i++ {
        ans[i] = left
        left = left * nums[i]
    }

    var right int = 1
    for i := n - 1; i >= 0; i-- {
        ans[i] = ans[i] * right
        right = right * nums[i]
    }

    return ans
}