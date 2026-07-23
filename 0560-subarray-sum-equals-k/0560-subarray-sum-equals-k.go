func subarraySum(nums []int, k int) int {
    mp := make(map[int]int)
    mp[0] = 1
    count := 0
    prefix := 0

    for _, num := range nums {
        prefix += num
        count += mp[prefix - k]
        mp[prefix]++
    }
    return count
}