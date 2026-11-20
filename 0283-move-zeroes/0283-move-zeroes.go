func moveZeroes(nums []int)  {
    n := len(nums)
    if n <= 1 {
        return
    }

    j := 0
    for i := 0; i < n; i++ {
        if nums[i] != 0 {
            temp := nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j++
        }
    }
}