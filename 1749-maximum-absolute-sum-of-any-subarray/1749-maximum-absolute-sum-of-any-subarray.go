func maxAbsoluteSum(nums []int) int {
    ans1 := maxSum(nums);
    ans2 := minSum(nums);
    return max(ans1, ans2);
}

func maxSum(arr []int) int {
    bestEnding := arr[0];
    ans := arr[0];

    for i := 1; i < len(arr); i++ {
        v1 := bestEnding + arr[i];
        v2 := arr[i]

        bestEnding = max(v1, v2);
        ans = max(ans, bestEnding);
    }
    return ans;
}

func minSum(arr []int) int {
    bestEnding := arr[0];
    ans := arr[0];

    for i := 1; i < len(arr); i++ {
        v1 := bestEnding + arr[i];
        v2 := arr[i];

        bestEnding = min(v1, v2);
        ans = min(ans, bestEnding);
    }
   return abs(ans);
}

// GoLang doesn't have inbuild math.absolute function
func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}