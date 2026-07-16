func missingNumber(nums []int) int {
    var missing int = len(nums);
    for i := 0; i < len(nums); i++ {
        missing ^= i ^ nums[i];
    }
    return missing;
}