func maxSubArray(nums []int) int {
    sum := 0;
    max := math.MinInt;
    for i := 0; i<len(nums);i++ {
        sum = sum + nums[i];
        if max < sum {
            max = sum;
        }
        if sum < 0 {
            sum = 0;
        }
    }
    return max;
}