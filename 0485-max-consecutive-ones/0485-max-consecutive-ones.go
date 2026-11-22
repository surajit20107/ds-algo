func findMaxConsecutiveOnes(nums []int) int {
    ans := 0;
    count := 0;

    for i := 0; i < len(nums); i++ {
        if nums[i] == 1 {
            count++;
            ans = max(ans, count);
        } else {
            count = 0;
        }
    }

    return ans;
}

func max(ans int, count int) int {
    if ans < count {
        return count;
    } else {
        return ans;
    }
}