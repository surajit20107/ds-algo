func singleNumber(nums []int) int {
    unique := 0

    for _, num := range nums {
        unique ^= num
    }
    
    return unique
}