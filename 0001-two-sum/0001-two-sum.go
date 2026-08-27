func twoSum(nums []int, target int) []int {
    mp := make(map[int]int)

    for i, val := range nums {
        var need int = target - val
        if j, ok := mp[need]; ok {
            return []int{j, i}
        }
        mp[val] = i
    }

    return []int{}
}