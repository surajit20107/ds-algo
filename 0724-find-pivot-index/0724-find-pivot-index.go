func pivotIndex(nums []int) int {
    total := 0
    for _, val := range nums {
        total = total + val
    }

    left := 0
    for i := 0; i < len(nums); i++ {
        right := total - left - nums[i]
        if right == left {
            return i
        }
        left = left + nums[i]
    }

    return -1
}