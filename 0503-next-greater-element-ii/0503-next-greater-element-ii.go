func nextGreaterElements(nums []int) []int {
    n := len(nums)
    res := make([]int, n)
    stack := []int{}
    
    for i := range res {
        res[i] = -1
    }
    
    for i := 0; i < n; i++ {
        for len(stack) > 0 && nums[i] > nums[stack[len(stack)-1]] {
            res[stack[len(stack)-1]] = nums[i]
            stack = stack[:len(stack)-1]
        }
        stack = append(stack, i)
    }
    
    for i := 0; i < n; i++ {
        for len(stack) > 0 && nums[i] > nums[stack[len(stack)-1]] {
            idx := stack[len(stack)-1]
            stack = stack[:len(stack)-1]
            if res[idx] == -1 {
                res[idx] = nums[i]
            }
        }
    }
    
    return res
}