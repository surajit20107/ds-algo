func findMaxLength(nums []int) int {
    zero := 0
    one := 0
    res := 0
    mp := make(map[int]int)
    mp[0] = 1

    for i := 0; i < len(nums); i++ {
        if nums[i] == 0 {
            zero++
        } else {
            one++
        }

        diff := zero - one
        if diff == 0 {
            res = max(res, i + 1)
            continue
        }

        if idx, exist := mp[diff]; exist {
            res = max(res, i - idx)
        } else {
            mp[diff] = i
        }
    }

    return res
}