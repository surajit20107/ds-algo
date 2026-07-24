func subarraysDivByK(nums []int, k int) int {
    sum := 0
    res := 0
    mp := make(map[int]int)
    mp[0] = 1

    for _, val := range nums {
        sum = sum + val
        rem := sum % k
        if rem < 0 {
            rem = rem + k
        }
        res = res + mp[rem]
        mp[rem]++
    }
    return res
}