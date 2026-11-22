func majorityElement(nums []int) int {
    count := 0
    el := 0

    for i := 0; i < len(nums); i++ {
        if count == 0 {
            el = nums[i]
        }

        if nums[i] == el {
            count++
        } else {
            count--
        }
    }

    return el
}