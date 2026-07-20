func pivotIndex(nums []int) int {
    length := len(nums)
    prefix := make([]int, length)
    suffix := make([]int, length)

    prefix[0] = 0
    for i := 1; i < length; i++ {
        prefix[i] = prefix[i - 1] + nums[i - 1]
    }

    suffix[length -1] = 0
    for i := length - 2; i >= 0; i-- {
        suffix[i] = suffix[i + 1] + nums[i + 1]
    }

    for i := 0; i < length; i++ {
        if prefix[i] == suffix[i] {
            return i
        }
    }

    return -1
}